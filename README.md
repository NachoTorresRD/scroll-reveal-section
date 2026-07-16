# Scroll Reveal Section

![Vista previa](assets/preview.svg)

Recorrido de secciones con entradas progresivas, variantes de movimiento e indicador de lectura.

## Características

- `IntersectionObserver` y desconexión tras revelar.
- Variantes lateral, vertical, escala y opacidad.
- Reinicio desde la cabecera o el final.
- Contenido visible sin JavaScript y con movimiento reducido.

## Demo en vivo

[scroll-reveal-section.netlify.app](https://scroll-reveal-section.netlify.app)

## Instalación

Clona el repositorio, entra en `scroll-reveal-section` y abre `index.html`.

## Estructura del proyecto

`index.html` contiene la narrativa, `style.css` las variantes, `script.js` la observación y `assets/` las vistas previas.

## Cómo personalizarlo

Aplica las clases `from-left`, `from-right`, `from-bottom`, `scale` o `fade` a nuevos bloques `.reveal`.

## Accesibilidad

La clase inicial `no-js` evita ocultar contenido si falla JavaScript y movimiento reducido revela todo inmediatamente.

## Rendimiento

Cada elemento deja de observarse al aparecer y el progreso se actualiza con un solo frame pendiente.

## Licencia y créditos

[MIT](LICENSE). Creado por [Nacho Torres](https://github.com/NachoTorresRD) para [NTDESWEB](https://www.ntdesweb.com) con [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[Ver en GitHub](https://github.com/NachoTorresRD/scroll-reveal-section) · [Trabajar con NTDESWEB](https://www.ntdesweb.com)
