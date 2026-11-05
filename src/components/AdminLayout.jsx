import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Package, Boxes, LogOut, Sparkles, Store } from 'lucide-react'
import { signOutAdmin } from './ProtectedRoute.jsx'

const LINKS = [
  { to: '/admin', label: 'Panel', icon: LayoutDashboard, end: true },
  { to: '/admin/clientas', label: 'Clientas', icon: Users, end: false },
  { to: '/admin/inventario', label: 'Inventario', icon: Boxes, end: false },
  { to: '/admin/paquetes', label: 'Paquetes', icon: Package, end: false }
]

export default function AdminLayout() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await signOutAdmin()
    navigate('/admin/login')
  }
  return (
    <div className="min-h-screen bg-brand-50">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-white/60 bg-white/80 backdrop-blur-xl md:flex">
        <div className="flex items-center gap-2 px-5 py-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white"><Sparkles size={20} /></span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-brand-800">Panel María Ilana</span>
            <span className="block text-xs text-slate-500">Consultora de belleza</span>
          </span>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-brand-50'}`}>
              <Icon size={18} /> {label}
            </NavLink>
          ))}
          <NavLink to="/" className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-50">
            <Store size={18} /> Ver catálogo público
          </NavLink>
        </nav>
        <button onClick={handleLogout} className="m-3 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">
          <LogOut size={18} /> Cerrar sesión
        </button>
      </aside>
      <div className="md:pl-60">
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:hidden">
          <span className="text-sm font-bold text-brand-800">Panel María Ilana</span>
          <button onClick={handleLogout} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-semibold text-red-600 shadow">
            <LogOut size={14} /> Salir
          </button>
        </header>
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-2 md:pb-10 md:pt-6">
          <Outlet />
        </main>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-white/60 bg-white/85 px-2 py-2 backdrop-blur-xl md:hidden">
        {LINKS.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-[11px] font-semibold ${isActive ? 'text-brand-700' : 'text-slate-500'}`}>
            <Icon size={20} /> {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
