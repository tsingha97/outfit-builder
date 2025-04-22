"use client";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import { CartProvider } from "../context/CartContext";

export default function OutfitBuilder() {
  return (
    <CartProvider>
      <div className="flex flex-col md:flex-row gap-4">
        <Sidebar />
        <div className="flex-1 flex justify-center">
          <Canvas />
        </div>
      </div>
    </CartProvider>
  );
}
