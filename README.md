# La Brisa de Playa Grande

Sitio estático para [www.labrisa.com.ar](https://www.labrisa.com.ar), construido con [11ty](https://www.11ty.dev/) y desplegado en GitHub Pages.

## Desarrollo

```bash
npm install
npm start       # servidor local en http://localhost:8080
```

## Build

```bash
npm run build   # genera el sitio en _site/
```

## Deploy

El deploy es automático: cualquier push a `main` dispara el workflow de GitHub Actions que publica `_site/` en la rama `gh-pages`.

## Estructura

```
src/
  _data/site.json          configuración global (nombre, email, url)
  _includes/layouts/       plantillas Nunjucks
  assets/css/style.css     estilos
  index.njk                página de inicio
  about.njk                el espacio (galería)
  contacto.njk             formulario de contacto
assets/images/             fotos del departamento
```

## Formulario de contacto

El formulario usa [Formspree](https://formspree.io). El endpoint está en `src/contacto.njk`.
