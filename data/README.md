# Data files

## perfumes.json
**558 perfumes** extracted from the wholesale distributor PDF (`FRANCES Y COSMETICOS IV.pdf`).

Each item:
```json
{
  "name": "DIOR SAUVAGE EDT M 100ML 471534/250146",
  "name_upper": "DIOR SAUVAGE EDT M 100ML 471534/250146",
  "price": 78.12,           // wholesale USD from distributor list
  "page": 18,
  "brand": "DIOR",
  "category": "perfume",
  "ml": 100,
  "gender": "homme"         // homme | femme | unisex
}
```

⚠️ **This is the wholesale supplier's catalog, NOT Santi's stock list.** It tells us what *could* be sourced, not what is actually on the shelf or what Santi charges.

## Source PDF
`Documents/02-Work/santi/FRANCES Y COSMETICOS IV.pdf` — Frances y Cosméticos wholesale list, 29 pages, includes body care / testers / decants / non-perfume items (filtered out).

## Next step
Santi to confirm which subset he actually stocks + provide retail prices in Guaraníes (Gs.).
