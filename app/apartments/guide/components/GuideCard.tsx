'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GuideItem, GuideCategory } from '../page';
import { useTranslations } from '@/app/lib/translations';

interface GuideCardProps {
  item: GuideItem;
  onClick: () => void;
  delay?: number;
}

const getCategoryLabel = (category: GuideCategory, t: ReturnType<typeof useTranslations>): string => {
  if (category === 'All') return t.guide.categories.all;
  if (category === 'Taverns') return t.guide.categories.taverns;
  if (category === 'Beaches') return t.guide.categories.beaches;
  if (category === 'Walks') return t.guide.categories.walks;
  if (category === 'Events') return t.guide.categories.events;
  if (category === 'Day Trips') return t.guide.categories.dayTrips;
  return category;
};

export function GuideCard({ item, onClick, delay = 0 }: GuideCardProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay }}
      className="group cursor-pointer select-none"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="rounded-2xl border border-zinc-300/80 bg-white/60 overflow-hidden backdrop-blur-xs transition-colors duration-200 hover:border-[#9D7F5F]/60 hover:bg-white/90">
        {/* Unobstructed Image: No floating pill badges */}
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content: Clean typographic hierarchy */}
        <div className="p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#9D7F5F] mb-1.5">
            {getCategoryLabel(item.category, t)}
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight text-balance mb-2 group-hover:text-[#9D7F5F] transition-colors">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed text-pretty mb-3">
            {item.subtitle}
          </p>

          <div className="text-xs font-semibold text-zinc-500 tabular-nums">
            {item.distance}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
