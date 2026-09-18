// Helpers shared across pages

export function formatGs(value: number): string {
  return `Gs ${value.toLocaleString('es-PY')}`;
}

export function formatMl(value: number | null | undefined): string {
  if (!value) return '';
  return `${value} ml`;
}

export interface Product {
  id: string;
  brand_slug: string;
  brand: string;
  name: string;
  size_ml: number | null;
  gender: string;
  category: string;
  wholesale_price_usd: number;
  retail_price_gs: number;
  image: string | null;
  featured: boolean;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  desc: string;
}

export interface Brand {
  slug: string;
  name: string;
  product_count: number;
}

export interface Site {
  name: string;
  tagline: string;
  whatsapp_number: string;
  whatsapp_display: string;
  instagram_handle: string;
  instagram_url: string;
  shipping: string;
  currency: string;
  usd_pyg_rate: number;
  markup_gs: number;
}

export interface Catalog {
  version: number;
  categories: Category[];
  brands: Brand[];
  products: Product[];
}

export function productCountForCategory(catalog: Catalog, slug: string): number {
  return catalog.products.filter((p) => p.category === slug).length;
}

export function cleanProductName(raw: string): string {
  // strip trailing 6+ digit codes and double spaces
  return raw.replace(/\b\d{6,}\b/g, '').replace(/\s+/g, ' ').trim();
}

export function shortProductName(p: Product): string {
  const cleaned = cleanProductName(p.name);
  // remove brand prefix if it matches
  const brandUpper = p.brand.toUpperCase();
  let n = cleaned.toUpperCase();
  for (const prefix of [brandUpper, brandUpper + ' ', brandUpper.replace(/\s/g, '')]) {
    if (n.startsWith(prefix)) {
      n = n.slice(prefix.length).trim();
      break;
    }
  }
  return titleCase(n);
}

export function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(' ')
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w.toUpperCase()))
    .join(' ');
}
