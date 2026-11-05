import { createClient } from '@supabase/supabase-js'

// Cliente de Supabase configurado solo con variables de entorno.
// No se guardan credenciales reales en el repositorio.
// Copia .env.example a .env y completa tus llaves.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Tablas previstas cuando se conecte Supabase:
//   products  (id, name, category, price, promo_price, stock, cost, skin_types, needs, description)
//   customers (id, name, phone, skin_type, status, last_purchase, favorite_product_id)
//   orders    (id, customer_name, customer_phone, items, total, status, created_at)
//   sales     (id, order_id, product_id, quantity, amount, payment_status, created_at)
//   packages  (id, name, product_ids, special_price, active)
export const SUPABASE_TABLES = ['products', 'customers', 'orders', 'sales', 'packages']
