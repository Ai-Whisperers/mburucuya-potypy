# Mburucuyá Poty — Sitio web oficial

> Exclusividad hecha flor · Perfumes Inspirados y Originales

Sitio web comercial para [Mburucuyá Poty](https://www.instagram.com/mburucuya_potypy/) — boutique de perfumes paraguaya con envíos a todo el país, pedidos por WhatsApp.

## Estado

🟡 **En desarrollo** — esperando catálogo completo (Excel) de Santi para poblar el inventario.

| Pieza | Estado |
|---|---|
| Logo vectorizado | ✅ `assets/logo.svg` (16 KB) |
| Repo en Ai-Whisperers | ✅ `Ai-Whisperers/mburucuya-potypy` |
| Contenido del IG | 🟡 7 productos identificados de posts, faltan más |
| Catálogo completo (Excel) | ⏳ Pedir a Santi |
| Stack del sitio | 📋 Astro (propuesto) |
| Diseño (mockup) | ⏳ Pendiente de aprobar |
| Deploy | ⏳ GitHub Pages (gratis) |

## Cómo trabaja Santi con el sitio

Catálogo en JSON + página `/admin` protegida por contraseña (la escribe en el repo como commit). Sin base de datos, sin servidor — todo estático, edita desde el celular.

## Estructura planeada

```
/
├── assets/
│   ├── logo.svg         # logo principal (vector)
│   └── products/        # fotos de productos (jpg/webp)
├── data/
│   └── catalog.json     # lista de productos (editable por Santi)
├── src/
│   ├── pages/
│   │   ├── index.astro  # inicio (hero + destacados)
│   │   ├── catalogo/    # catálogo por marca
│   │   ├── marcas/      # las casas que distribuyen
│   │   ├── contacto.astro
│   │   └── admin.astro  # editor del catálogo
│   └── components/
└── public/
```

## Contacto del negocio

- WhatsApp: +595 985 526 379
- Instagram: [@mburucuya_potypy](https://www.instagram.com/mburucuya_potypy/)
- Envíos a todo Paraguay

---

Sitio desarrollado por Ai-Whisperers.
