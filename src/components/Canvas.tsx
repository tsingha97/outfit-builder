"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext"; // adjust the path if needed

interface Item {
  id: string;
  type: string;
  x: number;
  y: number;
}

export default function Canvas() {
  const [items, setItems] = useState<Item[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  const ICON_SIZE = 50;
  const { cart, addToCart } = useCart();

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain");
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();

    const y = e.clientY - rect.top - ICON_SIZE / 2;
    const x = rect.width / 2 - ICON_SIZE / 2;

    setItems((prev) => [...prev, { id: `${type}-${Date.now()}`, type, x, y }]);
  }

  function handleAddToCart() {
    addToCart(items);
    setItems([]);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Canvas Drop Zone */}
      <div
        ref={canvasRef}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="relative w-[300px] h-[400px] border-2 border-dashed"
      >
        {items.map((item) => (
          <Image
            key={item.id}
            src={`/icons/${item.type}.png`}
            alt={item.type}
            width={ICON_SIZE}
            height={ICON_SIZE}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
            }}
          />
        ))}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>

      {/* Cart Display */}
      <div className="self-start w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
        {cart.length === 0 && <p className="text-gray-500">No outfits yet.</p>}
        {cart.map((outfit, idx) => (
          <div key={idx} className="border p-3 mb-4 rounded shadow-sm bg-white">
            <strong>Outfit {idx + 1}</strong>
            <ul className="list-disc list-inside mt-2">
              {outfit.map((it) => (
                <li key={it.id}>{it.type}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
