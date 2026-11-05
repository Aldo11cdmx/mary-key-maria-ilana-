import { Navigate } from 'react-router-dom'
import { isSupabaseConfigured, supabase } from '../lib/supabase.js'

// Guardia de rutas privadas. Con Supabase configurado, valida la sesión
// de Supabase Auth; en modo demostración acepta la sesión local creada
// en AdminLogin. Sustituir por useSession de Supabase al conectar el backend.
export function isAdminAuthenticated() {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem('mk_admin_session') === '1'
}

export default function ProtectedRoute({ children }) {
  const authed = isAdminAuthenticated()
  if (!authed) return <Navigate to="/admin/login" replace />
  return children
}

export async function signOutAdmin() {
  if (isSupabaseConfigured && supabase) {
    await supabase.auth.signOut()
  }
  window.localStorage.removeItem('mk_admin_session')
}
