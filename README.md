# Mburucuyá Poty — Sitio web oficial

> Exclusividad hecha flor · Perfumes Inspirados y Originales

Sitio web comercial para [Mburucuyá Poty](https://www.instagram.com/mburucuya_potypy/) — boutique de perfumes paraguaya con envíos a todo el país, pedidos por WhatsApp.

## 🌐 Demo local

```bash
npm install
npm run dev       # http://localhost:4321/mburucuya-potypy/
npm run build     # genera dist/
npm run preview   # sirve el build
```

## 🚀 Deploy a GitHub Pages

El sitio se deploya automáticamente a GitHub Pages en cada push a `main`.

**⚠️ Acción requerida una sola vez:** habilitar GitHub Pages en la UI del repo
1. Andá a https://github.com/Ai-Whisperers/mburucuya-potypy/settings/pages
2. En **Source**, seleccioná **GitHub Actions**
3. Listo. El próximo push va a deployar.

URL una vez deployado: `https://ai-whisperers.github.io/mburucuya-potypy/`

## 📦 Catálogo

- **717 productos** en `data/catalog-public.json` (perfumes, testers, kits, minis)
- **98 marcas** + 8 categorías
- **Regla de precio:** `redondear((precio_mayorista_USD × 7300) + 100000) Gs`, redondeado a 5.000 Gs
- Tasa de cambio USD→PYG y markup editables en `src/data/site.json`

## 🛒 Carrito

- Persiste en `localStorage`
- Botón flotante abajo a la derecha con contador
- Diálogo bottom-sheet con cantidad +/- por producto
- **"Enviar pedido por WhatsApp"** genera un mensaje prellenado con: nombre, tamaño, cantidad, subtotal y total

## 📁 Estructura

```
├── assets/
│   ├── logo.svg         # logo principal
│   └── raw/             # fuente original del logo (gitignored)
├── data/
│   ├── catalog-public.json   # catálogo público (committeado)
│   ├── wholesale-perfumes-LOCAL.json  # extracción del PDF (gitignored)
│   └── README.md             # explica el pipeline
├── public/
│   ├── assets/logo.svg   # copia para GH Pages base path
│   └── favicon.svg
├── src/
│   ├── components/       # Header, Footer, ProductCard
│   ├── layouts/Layout.astro
│   ├── lib/catalog.ts    # helpers (slugify, formateo)
│   ├── pages/
│   │   ├── index.astro          # home
│   │   ├── catalogo.astro       # filtros + búsqueda + ordenamiento
│   │   ├── categoria/[slug].astro
│   │   ├── marca/[slug].astro
│   │   ├── marcas.astro         # índice de marcas
│   │   └── contacto.astro
│   ├── data/site.json
│   └── styles/global.css
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

## ✏️ Cómo editar el catálogo

Opción A — Santi (no técnico): abrir `data/catalog-public.json` en GitHub web, editar precios o cambiar `featured: true` a productos destacados. Commitear.

Opción B — regenerar desde el PDF mayorista:
```bash
python scripts/rebuild-catalog.py  # lee wholesale-perfumes-LOCAL.json → catalog-public.json
```

## 🖼️ Fotos de productos (TODO)

El sitio no tiene fotos. Santi debería mandar:
- 1 foto por producto destacado (12-20 fotos)
- O 1 foto genérica por marca

Subir a `assets/products/<id>.webp` y setear `image` en `catalog-public.json`.

## 📞 Contacto del negocio

- WhatsApp: +595 985 526 379
- Instagram: [@mburucuya_potypy](https://www.instagram.com/mburucuya_potypy/)
- Envíos a todo Paraguay

---

Sitio desarrollado por Ai-Whisperers.
