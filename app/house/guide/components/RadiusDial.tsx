'use client';

import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

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
  const options: Array<{ id: DriveRadiusFilter; label: string; count: number }> = [
    { id: 'all', label: labels.all, count: counts.all },
    { id: '10min', label: labels.r10, count: counts['10min'] },
    { id: '35min', label: labels.r35, count: counts['35min'] },
    { id: '60min', label: labels.r60, count: counts['60min'] },
  ];

  return (
    <div className="max-w-3xl mx-auto mb-8">
      {/* Crisp Section Heading - No decorative badges or sparkles */}
      <div className="flex items-center justify-between px-1 mb-2">
        <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#5B7A3A] stroke-[1.75]" aria-hidden="true" />
          <span>{labels.heading}</span>
        </span>
        <span className="text-xs font-medium text-zinc-600 tabular-nums">
          <span className="font-bold text-zinc-900">{counts[activeRadius]}</span> / {counts.all}
        </span>
      </div>

      {/* Segmented Controller: Outer radius = 16px, Padding = 6px -> Inner radius = 10px */}
      <div className="relative bg-white p-1.5 rounded-2xl border border-zinc-200 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {options.map((opt) => {
          const isActive = activeRadius === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={[
                'relative z-10 py-2.5 px-3 rounded-[10px] text-left transition-colors cursor-pointer flex flex-col justify-center',
                isActive ? 'text-white' : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50',
              ].join(' ')}
            >
              {isActive && (
                <motion.div
                  layoutId="activeRadiusPill"
                  className="absolute inset-0 bg-[#5B7A3A] rounded-[10px] z-[-1]"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="text-xs sm:text-sm font-bold leading-tight truncate">
                {opt.label}
              </span>
              <span
                className={[
                  'text-[11px] mt-0.5 leading-none transition-colors tabular-nums truncate',
                  isActive ? 'text-white/90' : 'text-zinc-600',
                ].join(' ')}
              >
                {opt.count} {opt.count === 1 ? 'обект' : 'обекта'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
