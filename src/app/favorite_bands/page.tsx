import FavoriteBandCard from "@/components/favorite_band";
import { favorite_band_data } from "@/data/favorite_band_data";
import Navbar from "@/components/Navbar";

export default function FavoriteBandsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 mb-10">
          My Favorite Bands
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorite_band_data.map((band, index) => (
            <FavoriteBandCard key={index} band={band} />
          ))}
        </div>
      </div>
    </main>
  );
}