# Portafolio de arte — José Subiabre

Ahora el proyecto es una app React (Vite + TypeScript + Tailwind 4, estructura
shadcn) con un landing animado (`src/components/ui/scroll-morph-hero.tsx`).
El sitio estático anterior sigue intacto en `public/portafolio-clasico.html`
(con su galería y lightbox) y el landing enlaza a él desde la navegación.

## Cómo trabajar

```bash
npm install      # solo la primera vez
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera la versión final en dist/
```

- **Landing**: edita `src/components/ui/scroll-morph-hero.tsx` (textos e
  imágenes están al inicio del archivo, en la lista `IMAGES`) y `src/App.tsx`
  (cabecera y navegación).
- **Galería clásica**: edita `public/portafolio-clasico.html` como antes.

## Cómo añadir tus obras (galería clásica)

1. Copia tus archivos (`.jpg`, `.png`, `.mp4`…) a la carpeta `public/obras/`.
2. Abre `public/portafolio-clasico.html` y busca la lista `OBRAS` al inicio del `<script>`.
3. Edita o añade líneas siguiendo el patrón:

```js
{ titulo: "Costa en invierno", categoria: "foto", anio: 2025,
  tecnica: "Fotografía digital", forma: "ancha", src: "obras/costa.jpg" },
```

- `categoria`: `"foto"`, `"video"` o `"pintura"` (controla los filtros).
- `forma`: `""` (normal), `"ancha"` (ocupa doble ancho) o `"alta"` (formato vertical).
- `src`: ruta al archivo. Con `null` se muestra un placeholder generado.

Consejo: exporta las imágenes a ~1600 px de ancho y los videos en MP4 (H.264)
para que la página cargue rápido.

## Personalizar textos

Todo está en `index.html`:

- **Nombre y titular**: en `<header>` y en la sección `hero`.
- **Biografía**: sección `#sobre-mi`.
- **Correo de contacto**: sección `#contacto`.
- **Color de acento**: variable `--acento` al inicio del `<style>`.

## Publicar gratis en internet (GitHub Pages)

```bash
cd portfolio-arte
git init
git add .
git commit -m "Primera versión del portafolio"
gh repo create portfolio-arte --public --source . --push
gh api repos/{owner}/portfolio-arte/pages -f "source[branch]=main" -f "source[path]=/"
```

Quedará en `https://<tu-usuario>.github.io/portfolio-arte/` a los pocos minutos.
Cada vez que cambies algo: `git add . && git commit -m "..." && git push`.
