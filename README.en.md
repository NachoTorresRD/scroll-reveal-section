# Scroll Reveal Section

![Preview](assets/preview.svg)

A compact internal-scroll stage with three progressive entrances and a capture-ready composition.

## Features

- `IntersectionObserver` rooted in the visual panel.
- Scale, direction, and depth variants.
- Replay from within the same block.
- Visible content without JavaScript and under reduced motion.

## Live demo

[scroll-reveal-section.netlify.app](https://scroll-reveal-section.netlify.app)

## Installation

Clone the repository, enter `scroll-reveal-section`, and open `index.html`.

## Project structure

`index.html` holds the narrative, `style.css` the variants, `script.js` observation logic, and `assets/` previews.

## Customization

Add new `.story-card` elements, define their visual direction, and update state copy through `data-*` attributes.

## Accessibility

The initial `no-js` class prevents hidden content if JavaScript fails, and reduced motion reveals everything immediately.

## Performance

The observer is constrained to the internal panel and needs no global scroll listeners.

## License and credits

[MIT](LICENSE). Created by [Nacho Torres](https://github.com/NachoTorresRD) for [NTDESWEB](https://www.ntdesweb.com) with [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[View on GitHub](https://github.com/NachoTorresRD/scroll-reveal-section) · [Work with NTDESWEB](https://www.ntdesweb.com)
