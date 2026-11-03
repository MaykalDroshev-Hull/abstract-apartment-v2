'use client';

import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export type DriveRadiusFilter = 'all' | '10min' | '35min' | '60min';

interface RadiusDialProps {
  activeRadius: DriveRadiusFilter;
  onChange: (radius: DriveRadiusFilter) => void;
  counts: Record<DriveRadiusFilter, number>;
  labels: {
    heading: string;
    all: string;
    r10: string;
    r35: string;
    r60: string;
  };
}

export function RadiusDial({
  activeRadius,
  onChange,
  counts,
  labels,
}: RadiusDialProps) {
  const options: Array<{ id: DriveRadiusFilter; label: string; sub: string }> = [
    { id: 'all', label: labels.all, sub: `${counts.all} обекта` },
    { id: '10min', label: labels.r10, sub: `${counts['10min']} в Голец` },
    { id: '35min', label: labels.r35, sub: `${counts['35min']} в региона` },
    { id: '60min', label: labels.r60, sub: `${counts['60min']} топ чудеса` },
  ];

  return (
    <div className="max-w-3xl mx-auto mb-10">
      <div className="flex items-center justify-between px-2 mb-2.5">
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#5B7A3A]" />
          <span>{labels.heading}</span>
        </span>
        <span className="text-xs text-[#5B7A3A] font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>{counts[activeRadius]} показани</span>
        </span>
      </div>

      <div className="relative bg-white/80 backdrop-blur-sm p-1.5 rounded-2xl border border-zinc-200 shadow-2xs grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {options.map((opt) => {
          const isActive = activeRadius === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={[
                'relative z-10 py-2.5 px-3 rounded-xl text-left transition-colors cursor-pointer flex flex-col justify-center',
                isActive ? 'text-white' : 'text-zinc-700 hover:text-zinc-900',
              ].join(' ')}
            >
              {isActive && (
                <motion.div
                  layoutId="activeRadiusPill"
                  className="absolute inset-0 bg-[#5B7A3A] rounded-xl shadow-md z-[-1]"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
              <span className="text-xs sm:text-sm font-bold leading-tight truncate">
                {opt.label}
              </span>
              <span
                className={[
                  'text-[10px] mt-0.5 leading-none transition-colors truncate',
                  isActive ? 'text-white/80' : 'text-zinc-400',
                ].join(' ')}
              >
                {opt.sub}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

