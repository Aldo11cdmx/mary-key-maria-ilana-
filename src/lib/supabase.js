import { createClient } from '@supabase/supabase-js'

// Cliente de Supabase (equivalente al bloque `utils/supabase.ts` de los
// ejemplos de Supabase, adaptado a la estructura JS de este proyecto en
// `src/lib/supabase.js`; el proyecto no se convierte a TypeScript).
// Solo se leen nombres de variables de entorno. Nunca se guardan
// credenciales reales en el repositorio (que es público).
// Copia .env.example a .env y completa tus llaves en local.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey)

if (!isSupabaseConfigured && typeof console !== 'undefined') {
  console.warn(
    '[Supabase] Variables VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY no configuradas. La app usa los datos de ejemplo de src/data/mockData.js. Copia .env.example a .env para conectar tu proyecto.'
  )
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Tablas previstas cuando se conecte Supabase:
//   products  (id, name, category, price, promo_price, stock, cost, skin_types, needs, description)
//   customers (id, name, phone, skin_type, status, last_purchase, favorite_product_id)
//   orders    (id, customer_name, customer_phone, items, total, status, created_at)
//   sales     (id, order_id, product_id, quantity, amount, payment_status, created_at)
//   packages  (id, name, product_ids, special_price, active)
export const SUPABASE_TABLES = ['products', 'customers', 'orders', 'sales', 'packages']
