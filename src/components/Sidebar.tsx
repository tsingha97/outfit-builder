import Image from "next/image";

const clothingItems = ["hat", "pants", "shirt", "shoes"];

export default function Sidebar() {
  return (
    <div className="flex md:flex-col gap-4 p-4 border rounded w-full md:w-32">
      {clothingItems.map((item) => (
        <Image
          key={item}
          src={`/icons/${item}.png`}
          alt={item}
          width={50}
          height={50}
          draggable
          className="cursor-grab active:cursor-grabbing"
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", item);
          }}
        />
      ))}
    </div>
  );
}
