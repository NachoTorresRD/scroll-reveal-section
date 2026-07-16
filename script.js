"use strict";
(() => {
  const track = document.querySelector("#story-track");
  const cards = [...document.querySelectorAll(".story-card")];
  const replay = document.querySelector("#replay");
  const progress = document.querySelector("#progress-fill");
  const output = document.querySelector("#progress-output");
  const stepNumber = document.querySelector("#step-number");
  const stepTitle = document.querySelector("#step-title");
  const stepCopy = document.querySelector("#step-copy");
  const status = document.querySelector("#status");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!track || !cards.length || !replay || !progress || !output || !stepNumber || !stepTitle || !stepCopy || !status) return;

  let activeIndex = 0;
  let observer;
  const update = (index) => {
    activeIndex = index;
    const card = cards[index];
    const value = String(index + 1).padStart(2, "0");
    stepNumber.textContent = value;
    output.value = `${value} / 03`;
    stepTitle.textContent = card.dataset.title || "";
    stepCopy.textContent = card.dataset.copy || "";
    progress.style.height = `${((index + 1) / cards.length) * 100}%`;
  };

  const observe = () => {
    observer?.disconnect();
    cards.forEach(card => card.classList.toggle("is-visible", reduced.matches));
    if (reduced.matches) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const index = cards.indexOf(entry.target);
        entry.target.classList.add("is-visible");
        update(index);
      });
    }, { root: track, threshold: 0.62 });
    cards.forEach(card => observer.observe(card));
  };

  replay.addEventListener("click", () => {
    cards.forEach(card => card.classList.remove("is-visible"));
    track.scrollTo({ top: 0, behavior: reduced.matches ? "auto" : "smooth" });
    window.setTimeout(() => { observe(); cards[0].classList.add("is-visible"); update(0); }, reduced.matches ? 0 : 420);
    status.textContent = "Secuencia reiniciada";
  });
  track.addEventListener("keydown", event => {
    if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(event.key)) return;
    event.preventDefault();
    const direction = ["ArrowDown", "PageDown"].includes(event.key) ? 1 : -1;
    const next = Math.max(0, Math.min(cards.length - 1, activeIndex + direction));
    cards[next].scrollIntoView({ block: "nearest", behavior: reduced.matches ? "auto" : "smooth" });
  });
  reduced.addEventListener("change", observe);
  observe();
  cards[0].classList.add("is-visible");
  update(0);
})();
