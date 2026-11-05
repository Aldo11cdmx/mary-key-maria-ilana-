import { PRODUCTS } from '../data/mockData.js'
import { isSupabaseConfigured, supabase } from './supabase.js'

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
  return { source: 'supabase', products: data }
}
