'use client';
import OutfitBuilder from '../components/OutfitBuilder';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Outfit Builder</h1>
      <OutfitBuilder />
    </main>
  );
}