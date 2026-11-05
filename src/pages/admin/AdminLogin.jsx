import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail, Sparkles } from 'lucide-react'
import { isSupabaseConfigured, supabase } from '../../lib/supabase.js'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isSupabaseConfigured && supabase) {
        const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
        if (authError) throw new Error(authError.message)
      }
      // Modo demostración: con Supabase sin configurar, el acceso crea
      // una sesión local. Al conectar Supabase Auth, el inicio de sesión
      // real queda a cargo de supabase.auth.signInWithPassword.
      window.localStorage.setItem('mk_admin_session', '1')
      navigate('/admin')
    } catch (err) {
      setError(err.message || 'No se pudo iniciar sesión. Revisa tus datos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-50 px-4">
      <form onSubmit={handleSubmit} className="glass w-full max-w-sm rounded-[2rem] p-6 shadow-glass">
        <div className="mb-5 text-center">
          <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white"><Sparkles size={22} /></span>
          <h1 className="text-xl font-bold text-slate-800">Panel de la consultora</h1>
          <p className="text-sm text-slate-500">María Ilana Salazar Ramir</p>
        </div>
        <label className="mb-3 block">
          <span className="mb-1 flex items-center gap-1 text-sm font-semibold text-slate-700"><Mail size={14} /> Correo</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" className="input" />
        </label>
        <label className="mb-4 block">
          <span className="mb-1 flex items-center gap-1 text-sm font-semibold text-slate-700"><Lock size={14} /> Contraseña</span>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Tu contraseña" className="input" />
        </label>
        {error && <p className="mb-3 rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{error}</p>}
        {!isSupabaseConfigured && (
          <p className="mb-3 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-700">Modo demostración: Supabase aún no está conectado. Cualquier correo y contraseña crean una sesión local.</p>
        )}
        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
          {loading ? 'Entrando...' : 'Entrar al panel'}
        </button>
      </form>
    </div>
  )
}
