import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminLayout from './components/AdminLayout.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import CartPage from './pages/CartPage.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import DashboardPage from './pages/admin/DashboardPage.jsx'
import CrmPage from './pages/admin/CrmPage.jsx'
import InventoryPage from './pages/admin/InventoryPage.jsx'
import PackagesPage from './pages/admin/PackagesPage.jsx'

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <CartDrawer />
      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-center text-xs text-slate-400">
        <p className="font-semibold text-slate-500">María Ilana Salazar Ramir — Consultora de belleza</p>
        <p>WhatsApp +52 1 55 7174 1465 · Pedidos sin registro, directo por WhatsApp</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><CatalogPage /></PublicLayout>} />
      <Route path="/quiz" element={<PublicLayout><QuizPage /></PublicLayout>} />
      <Route path="/carrito" element={<PublicLayout><CartPage /></PublicLayout>} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="clientas" element={<CrmPage />} />
        <Route path="inventario" element={<InventoryPage />} />
        <Route path="paquetes" element={<PackagesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
