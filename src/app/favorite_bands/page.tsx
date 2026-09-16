import Navbar from "@/components/Navbar";
import CourseExplorer from "@/components/CourseExplorer";

export default function FavoriteBandsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          My Favorite Bands
        </h1>
        <CourseExplorer />
      </div>
    </main>
  );
}