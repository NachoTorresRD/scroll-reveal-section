# Scroll Reveal Section

![Preview](assets/preview.svg)

A section-based journey with progressive entrances, motion variants, and a reading indicator.

## Features

- `IntersectionObserver` with unobserve after reveal.
- Side, vertical, scale, and opacity variants.
- Replay from the header or final section.
- Visible content without JavaScript and under reduced motion.

## Live demo

[scroll-reveal-section.netlify.app](https://scroll-reveal-section.netlify.app)

## Installation

Clone the repository, enter `scroll-reveal-section`, and open `index.html`.

## Project structure

`index.html` holds the narrative, `style.css` the variants, `script.js` observation logic, and `assets/` previews.

## Customization

Apply `from-left`, `from-right`, `from-bottom`, `scale`, or `fade` to new `.reveal` blocks.

## Accessibility

The initial `no-js` class prevents hidden content if JavaScript fails, and reduced motion reveals everything immediately.

## Performance

Each element stops being observed after appearing; progress updates use one pending frame.

## License and credits

[MIT](LICENSE). Created by [Nacho Torres](https://github.com/NachoTorresRD) for [NTDESWEB](https://www.ntdesweb.com) with [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[View on GitHub](https://github.com/NachoTorresRD/scroll-reveal-section) · [Work with NTDESWEB](https://www.ntdesweb.com)
