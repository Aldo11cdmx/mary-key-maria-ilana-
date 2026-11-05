// Datos de ejemplo para visualizar la interfaz antes de conectar Supabase.
// Reemplazar por los productos reales con fotos y precios en cuanto estén listos.

export const CONSULTANT = {
  name: 'María Ilana Salazar Ramir',
  phoneDisplay: '+52 1 55 7174 1465',
  whatsappNumber: '5215571741465',
  tagline: 'Consultora de belleza — cuidado de la piel personalizado'
}

export const CATEGORIES = ['Limpieza', 'Hidratación', 'Antiedad', 'Protección', 'Color']

export const SKIN_TYPES = ['Grasa', 'Seca', 'Mixta', 'Sensible', 'Normal']

export const NEEDS = ['Limpieza', 'Hidratación', 'Luminosidad', 'Antiedad', 'Control de grasa', 'Protección solar']

export const PRODUCTS = [
  { id: 'p1', name: 'Limpiador Facial Suave', category: 'Limpieza', price: 189, promoPrice: 159, stock: 20, cost: 95, skinTypes: ['Grasa', 'Mixta', 'Normal'], needs: ['Limpieza'], durationDays: 45, rating: 4.8, description: 'Limpia sin resecar. Ideal para uso diario, mañana y noche.' },
  { id: 'p2', name: 'Sérum Vitamina C', category: 'Antiedad', price: 349, promoPrice: 299, stock: 14, cost: 170, skinTypes: ['Seca', 'Mixta', 'Normal', 'Sensible'], needs: ['Luminosidad', 'Antiedad'], durationDays: 60, rating: 4.9, description: 'Ilumina, unifica el tono y aporta antioxidantes.' },
  { id: 'p3', name: 'Crema Hidratante de Día', category: 'Hidratación', price: 279, promoPrice: null, stock: 9, cost: 135, skinTypes: ['Seca', 'Normal', 'Sensible'], needs: ['Hidratación'], durationDays: 40, rating: 4.7, description: 'Hidratación ligera todo el día, con acabado suave.' },
  { id: 'p4', name: 'Protector Solar FPS 50', category: 'Protección', price: 259, promoPrice: 229, stock: 4, cost: 120, skinTypes: ['Grasa', 'Seca', 'Mixta', 'Sensible', 'Normal'], needs: ['Protección solar'], durationDays: 35, rating: 4.8, description: 'Protección alta sin sensación grasosa, uso diario.' },
  { id: 'p5', name: 'Crema de Noche Reparadora', category: 'Antiedad', price: 329, promoPrice: null, stock: 12, cost: 160, skinTypes: ['Seca', 'Mixta', 'Normal'], needs: ['Antiedad', 'Hidratación'], durationDays: 50, rating: 4.8, description: 'Repara durante la noche y despierta la piel descansada.' },
  { id: 'p6', name: 'Tónico Refrescante', category: 'Limpieza', price: 179, promoPrice: null, stock: 18, cost: 85, skinTypes: ['Grasa', 'Mixta', 'Normal'], needs: ['Limpieza', 'Control de grasa'], durationDays: 45, rating: 4.6, description: 'Refresca, equilibra y prepara la piel para el sérum.' },
  { id: 'p7', name: 'Contorno de Ojos', category: 'Antiedad', price: 299, promoPrice: 269, stock: 6, cost: 145, skinTypes: ['Seca', 'Mixta', 'Normal', 'Sensible'], needs: ['Antiedad'], durationDays: 55, rating: 4.7, description: 'Reduce la apariencia de ojeras y líneas finas.' },
  { id: 'p8', name: 'Mascarilla de Arcilla', category: 'Limpieza', price: 219, promoPrice: null, stock: 15, cost: 105, skinTypes: ['Grasa', 'Mixta'], needs: ['Control de grasa', 'Limpieza'], durationDays: 60, rating: 4.6, description: 'Limpieza profunda una o dos veces por semana.' },
  { id: 'p9', name: 'Labial Hidratante', category: 'Color', price: 149, promoPrice: null, stock: 25, cost: 70, skinTypes: ['Seca', 'Normal', 'Sensible'], needs: ['Hidratación'], durationDays: 30, rating: 4.9, description: 'Color suave con hidratación para todo el día.' }
]

export const ROUTINES = [
  {
    id: 'r1',
    name: 'Rutina Luminosidad',
    goal: 'Luminosidad',
    skinTypes: ['Seca', 'Mixta', 'Normal'],
    productIds: ['p1', 'p2', 'p4'],
    specialPrice: 599,
    description: 'Limpieza suave, vitamina C y protección solar para una piel luminosa.'
  },
  {
    id: 'r2',
    name: 'Rutina Hidratación Total',
    goal: 'Hidratación',
    skinTypes: ['Seca', 'Sensible', 'Normal'],
    productIds: ['p1', 'p3', 'p9'],
    specialPrice: 549,
    description: 'Limpieza, hidratación de día y labios hidratados.'
  },
  {
    id: 'r3',
    name: 'Rutina Antiedad',
    goal: 'Antiedad',
    skinTypes: ['Seca', 'Mixta', 'Normal'],
    productIds: ['p2', 'p5', 'p7'],
    specialPrice: 899,
    description: 'Sérum, crema de noche y contorno de ojos para el cuidado antiedad.'
  }
]

export function routineTotal(routine) {
  return routine.productIds.reduce((sum, id) => {
    const product = PRODUCTS.find((p) => p.id === id)
    return sum + (product ? (product.promoPrice || product.price) : 0)
  }, 0)
}

export const CLIENTS = [
  { id: 'c1', name: 'Ana Torres', phone: '55 1234 5678', skinType: 'Mixta', status: 'activa', lastPurchase: '2026-11-02', favoriteProductId: 'p2', purchases: 6, totalSpent: 1840, daysLeft: 5, lastProduct: 'Sérum Vitamina C' },
  { id: 'c2', name: 'Laura Méndez', phone: '55 8765 4321', skinType: 'Seca', status: 'activa', lastPurchase: '2026-10-28', favoriteProductId: 'p3', purchases: 4, totalSpent: 1210, daysLeft: 12, lastProduct: 'Crema Hidratante de Día' },
  { id: 'c3', name: 'Carmen Ruiz', phone: '55 2345 6789', skinType: 'Grasa', status: 'inactiva', lastPurchase: '2026-09-15', favoriteProductId: 'p8', purchases: 3, totalSpent: 640, daysLeft: 0, lastProduct: 'Mascarilla de Arcilla' },
  { id: 'c4', name: 'Sofía Herrera', phone: '55 3456 7890', skinType: 'Sensible', status: 'activa', lastPurchase: '2026-11-04', favoriteProductId: 'p4', purchases: 2, totalSpent: 488, daysLeft: 28, lastProduct: 'Protector Solar FPS 50' },
  { id: 'c5', name: 'Mariana Vega', phone: '55 4567 8901', skinType: 'Normal', status: 'nueva', lastPurchase: '2026-11-05', favoriteProductId: 'p1', purchases: 1, totalSpent: 159, daysLeft: 40, lastProduct: 'Limpiador Facial Suave' },
  { id: 'c6', name: 'Paola Díaz', phone: '55 5678 9012', skinType: 'Mixta', status: 'inactiva', lastPurchase: '2026-09-30', favoriteProductId: 'p5', purchases: 5, totalSpent: 1520, daysLeft: 0, lastProduct: 'Crema de Noche Reparadora' }
]

export const SALES_SUMMARY = {
  today: 1248,
  week: 6890,
  pendingPayments: 860,
  netProfit: 3120,
  averageTicket: 416,
  ordersToday: 3
}

export const WEEKLY_SALES = [
  { day: 'Lun', amount: 640 },
  { day: 'Mar', amount: 980 },
  { day: 'Mié', amount: 720 },
  { day: 'Jue', amount: 1248 },
  { day: 'Vie', amount: 1100 },
  { day: 'Sáb', amount: 1450 },
  { day: 'Dom', amount: 752 }
]

export const BEST_SELLERS = [
  { productId: 'p2', units: 18 },
  { productId: 'p1', units: 15 },
  { productId: 'p4', units: 12 },
  { productId: 'p3', units: 10 }
]

export const SUPPLIER_SUGGESTIONS = [
  { productId: 'p4', suggestedQty: 12, reason: 'Stock bajo (4) y es de los más vendidos.' },
  { productId: 'p7', suggestedQty: 8, reason: 'Stock bajo (6) y alta rotación en rutinas.' },
  { productId: 'p3', suggestedQty: 10, reason: 'Stock medio (9) y parte de la rutina de hidratación.' }
]
