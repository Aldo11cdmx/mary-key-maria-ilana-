# María Ilana | Catálogo y Panel de Belleza

Aplicación web para una consultora de belleza (estilo Mary Kay) con dos vistas:

- **Vista pública (clientas):** catálogo interactivo, quiz rápido de 3 preguntas que recomienda una rutina, y carrito que genera el pedido por WhatsApp sin necesidad de registro.
- **Vista privada (consultora):** panel con dashboard de ventas, CRM de clientas con recordatorios predictivos de reabastecimiento, inventario con alertas de stock bajo y creador de paquetes.

Consultora: **María Ilana Salazar Ramir** — WhatsApp **+52 1 55 7174 1465**.

## Stack

- React 18 + Vite
- Tailwind CSS (estilo glassmorphism, mobile first)
- React Router 6
- Supabase (base de datos y autenticación — configuración por variables de entorno)
- lucide-react para iconos (sin emojis en la interfaz)

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

Para producción:

```bash
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` y completa tus llaves reales de Supabase. Nunca subas el archivo `.env` al repositorio.

```bash
cp .env.example .env
```

| Variable | Descripción |
| --- | --- |
| `VITE_SUPABASE_URL` | URL de tu proyecto Supabase |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Llave publicable de Supabase (antes llamada anon key) |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp de la consultora (por defecto `5215571741465`) |

Como respaldo, también se lee `VITE_SUPABASE_ANON_KEY` si `VITE_SUPABASE_PUBLISHABLE_KEY` no está definida. Nunca escribas llaves reales en ningún archivo del repositorio: este repositorio es público.

## Supabase

Configuración estilo shadcn, adaptada a este proyecto JavaScript:

- El cliente vive en `src/lib/supabase.js` y se crea solo desde las variables de entorno. Equivale al archivo `utils/supabase.ts` de los bloques de Supabase: en este proyecto la ruta es `src/lib/supabase.js` (no se convierte el proyecto a TypeScript).
- Componentes estilo shadcn en `src/components/ui/` (`Button`, `Input`), con `components.json` en la raíz y el alias `@` configurado en `vite.config.js` (`@/components/ui/button` apunta a `src/components/ui/button.jsx`).
- `src/lib/products.js` muestra el ejemplo de consulta: `supabase.from('products').select()` y, si no hay llaves o la tabla no existe, regresa a los datos de ejemplo sin romperse.
- Nuevas dependencias de la UI: `class-variance-authority`, `clsx` y `tailwind-merge` (ya estaba `@supabase/supabase-js`).

Pasos en local:

```bash
cp .env.example .env
# Edita .env y pon tu URL y tu llave publicable de Supabase
npm install
npm run dev
```

Advertencia: el archivo `.env` está ignorado por `.gitignore` y nunca debe subirse a este repositorio público. Si una llave llega a publicarse, revócala en el panel de Supabase y genera una nueva.

Mientras no configures Supabase, la aplicación usa los datos de ejemplo de `src/data/mockData.js` y el acceso de administradora funciona en modo demostración local.

## Acceso de administradora

La ruta `/admin` está protegida. Con Supabase configurado usa el inicio de sesión con correo y contraseña de Supabase Auth. En modo demostración, el inicio de sesión crea una sesión local para poder revisar el panel.

## Estructura

```text
src/
  App.jsx                 Rutas públicas y protegidas
  main.jsx                Punto de entrada
  index.css               Tailwind + utilidades glass
  context/
    CartContext.jsx       Estado global del carrito
  lib/
    supabase.js           Cliente Supabase (variables de entorno)
    products.js           Consulta de productos con regreso a datos de ejemplo
    utils.js              Utilidad `cn` estilo shadcn
    whatsapp.js           Número de la consultora y enlace de pedido
  components/
    ui/
      button.jsx          Botón estilo shadcn
      input.jsx           Campo de texto estilo shadcn
  data/
    mockData.js           Productos, clientas, rutinas y ventas de ejemplo
  components/
    Navbar.jsx            Barra superior pública
    ProductCard.jsx       Tarjeta de producto
    CartDrawer.jsx        Carrito lateral con pedido por WhatsApp
    StatCard.jsx          Tarjeta de métrica del panel
    AdminLayout.jsx       Sidebar (escritorio) y BottomNav (móvil)
    ProtectedRoute.jsx    Guardia de rutas privadas
  pages/
    CatalogPage.jsx       Catálogo con buscador y filtros
    QuizPage.jsx          Quiz de 3 preguntas
    CartPage.jsx          Detalle del carrito y pedido
    admin/
      AdminLogin.jsx      Inicio de sesión de la consultora
      DashboardPage.jsx   Ventas, más vendidos, pendientes y ganancia
      CrmPage.jsx         Clientas, historial y reabastecimiento
      InventoryPage.jsx   Stock, alertas y sugerencias de pedido
      PackagesPage.jsx    Creador de paquetes con precio especial
```

## Pendientes

- Crear en Supabase las tablas `products`, `customers`, `sales`, `orders` y `packages` (ver `src/lib/supabase.js`) y configurar Supabase Auth para el inicio de sesión de la consultora.
- Reemplazar los datos de ejemplo de `src/data/mockData.js` por los productos reales con fotos y precios.
- Configurar el despliegue (Vercel, Netlify o GitHub Pages).
