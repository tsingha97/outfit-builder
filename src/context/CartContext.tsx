'use client';
import { createContext, useState, ReactNode } from 'react';

interface CanvasItem {
  id: string;
  type: string;
  x: number;
  y: number;
}

interface CartContextType {
  cart: CanvasItem[][];
  addToCart: (items: CanvasItem[]) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CanvasItem[][]>([]);

  const addToCart = (items: CanvasItem[]) => {
    setCart(prev => [...prev, items]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}