'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white dark:bg-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Category Label */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {getCategoryLabel(item.category, t)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-1">
            {item.subtitle}
          </p>
          
          {/* View Details Hint */}
          <div className="flex items-center gap-2 text-sm font-medium text-[#9D7F5F] group-hover:gap-3 transition-all">
            <span>View details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

