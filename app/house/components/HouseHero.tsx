'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/app/lib/translations';
import { Users, Bed, Mountain, Waves } from 'lucide-react';

export function HouseHero() {
  const t = useTranslations();
  const h = t.house;

  return (
    <div className="mb-14 sm:mb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-[65vh] sm:h-[72vh] md:h-[80vh] rounded-2xl overflow-hidden border border-zinc-900/10 shadow-xs">
          {/* Background Hero Photography */}
          <div className="absolute inset-0">
            <Image
              src={h.hero.image}
              alt={h.hero.imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Calm, Neutral Scrim Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25"
            aria-hidden="true"
          />

          {/* Top Location & Tagline Bar: Quiet chrome, zero floating pills, no italics */}
          <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 z-10 flex items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90 drop-shadow-xs">
              {h.hero.location}
            </p>
            <p className="text-xs sm:text-sm font-medium text-white/85 drop-shadow-xs hidden sm:block">
              {h.hero.tagline}
            </p>
          </div>

          {/* Centered Content: Text on calm space, text-balance headline, solid primary CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight text-balance max-w-4xl mb-6 sm:mb-8 drop-shadow-sm"
            >
              {h.hero.title}
            </h1>

            <Link
              href="/house/reserve"
              className="px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-white text-zinc-900 font-semibold text-sm sm:text-base hover:bg-zinc-100 active:scale-[0.98] transition-all shadow-md"
            >
              {h.hero.cta}
            </Link>
          </div>

          {/* Bottom House Specs: Grouped by spacing, no arbitrary divider lines, no sparkles */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 text-white/90 text-xs sm:text-sm font-medium drop-shadow-xs">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/80 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{h.hero.details.guests}</span>
              </div>

              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-white/80 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{h.hero.details.rooms}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4 text-white/80 shrink-0" aria-hidden="true" />
                <span>{h.hero.details.views}</span>
              </div>

              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4 text-white/80 shrink-0" aria-hidden="true" />
                <span>{h.hero.details.spa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
