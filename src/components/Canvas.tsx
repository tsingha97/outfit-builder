"use client";
import { useState, useRef } from "react";
import Image from "next/image";

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

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain");
    const rect = canvasRef.current!.getBoundingClientRect();

    const y = e.clientY - rect.top - ICON_SIZE / 2;
    const x = rect.width / 2 - ICON_SIZE / 2;

    setItems((prev) => [...prev, { id: `${type}-${Date.now()}`, type, x, y }]);
  }

  return (
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
  );
}
