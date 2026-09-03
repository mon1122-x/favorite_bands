import Image from "next/image";
import type { favorite_band } from "@/types/favorite_bands";

interface FavoriteBandProps {
  band: favorite_band;
}

export default function FavoriteBandCard({ band }: FavoriteBandProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg flex flex-col h-full hover:border-sky-500 transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={band.picture}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-sky-400 mb-2">{band.name}</h3>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {band.description}
        </p>

        <div className="mt-auto">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Members
          </h4>
          <div className="flex flex-wrap gap-3">
            {band.members.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-1">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs text-sky-300">{member.name}</span>
                <span className="text-[10px] text-slate-400">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
