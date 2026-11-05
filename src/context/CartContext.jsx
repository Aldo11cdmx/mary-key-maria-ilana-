import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const found = prev.find((item) => item.id === product.id)
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
    setIsOpen(true)
  }

  const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id))

  const updateQuantity = (id, quantity) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const total = useMemo(
    () => items.reduce((sum, item) => sum + (item.promoPrice || item.price) * item.quantity, [items]),
    [items]
  )

  const value = { items, addItem, removeItem, updateQuantity, clearCart, count, total, isOpen, setIsOpen }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
