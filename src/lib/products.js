import { PRODUCTS } from '../data/mockData.js'
import { isSupabaseConfigured, supabase } from './supabase.js'

// Supabase devuelve las columnas en snake_case (promo_price,
// skin_types, duration_days), pero toda la UI espera camelCase
// (promoPrice, skinTypes, durationDays). Sin este mapeo, con datos
// en vivo ProductCard hace product.skinTypes.join(...) y el catalogo
// se rompe, y las promos desaparecen (promoPrice queda undefined).
// Por eso se traduce cada fila aqui, antes de entregarla a la UI.
function mapProduct(row) {
  if (!row) return row
  return {
    ...row,
    promoPrice: row.promoPrice ?? row.promo_price ?? null,
    skinTypes: row.skinTypes ?? row.skin_types ?? [],
    durationDays: row.durationDays ?? row.duration_days ?? null,
    // Campos del catálogo THE LOOK Nov–Dic 2026 (todavía no existen
    // como columnas en Supabase; llegan undefined hasta que se agreguen).
    shades: row.shades ?? [],
    edition: row.edition ?? null,
    validUntil: row.validUntil ?? row.valid_until ?? null,
    unitsLimit: row.unitsLimit ?? row.units_limit ?? null,
  }
}

// Ejemplo de consulta a Supabase con regreso a datos de ejemplo.
// Si las variables de entorno no están configuradas, o si la tabla
// `products` aún no existe, la app sigue funcionando con los datos
// de ejemplo de src/data/mockData.js sin romperse.
export async function fetchProducts() {
  if (!isSupabaseConfigured || !supabase) {
    return { source: 'mock', products: PRODUCTS }
  }
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name')
  if (error || !data) {
    console.warn('[Supabase] No se pudieron leer los productos, se usan datos de ejemplo.', error?.message)
    return { source: 'mock', products: PRODUCTS }
  }
  return { source: 'supabase', products: data.map(mapProduct) }
}
