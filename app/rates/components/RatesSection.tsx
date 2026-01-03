'use client';

import { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';
import { motion } from 'framer-motion';

export type RateSeason = {
  name: string;
  dateRange: string;
  price: string;
  highlights: string[];
  availableDates?: string;
};

export type UnitRates = {
  unit: 'Apartment' | 'Studio';
  seasons: RateSeason[];
  extras?: string[];
};

export function RatesSection() {
  const t = useTranslations();
  const [activeUnit, setActiveUnit] = useState<'Apartment' | 'Studio'>('Apartment');

  const apartmentRates: UnitRates = {
    ...t.rates.units.apartment,
    unit: 'Apartment' as const,
  };
  const studioRates: UnitRates = {
    ...t.rates.units.studio,
    unit: 'Studio' as const,
  };

  const currentRates = activeUnit === 'Apartment' ? apartmentRates : studioRates;

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t.rates.section.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          {t.rates.section.caption}
        </p>
      </div>

      {/* Unit Tabs */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button
            onClick={() => setActiveUnit('Apartment')}
            className={`px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
              activeUnit === 'Apartment'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700'
            }`}
          >
            {t.rates.units.apartment.unit}
          </button>
          <button
            onClick={() => setActiveUnit('Studio')}
            className={`px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
              activeUnit === 'Studio'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700'
            }`}
          >
            {t.rates.units.studio.unit}
          </button>
        </div>
      </div>

      {/* Rate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {currentRates.seasons.map((season, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700"
          >
            {/* Season Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              {season.name}
            </h3>

            {/* Date Range */}
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{season.dateRange}</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#9D7F5F] mb-1">
                {season.price}
              </div>
            </div>

            {/* Highlights */}
            {season.highlights && season.highlights.length > 0 && (
              <ul className="space-y-2 mb-4">
                {season.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-[#9D7F5F] mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Available Dates Link */}
            {season.availableDates && (
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#9D7F5F] hover:text-[#8B6F47] transition-colors"
              >
                <span>{season.availableDates}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Extras / Notes */}
      {currentRates.extras && currentRates.extras.length > 0 && (
        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            {t.rates.extras.title}
          </h3>
          <ul className="space-y-2">
            {currentRates.extras.map((extra, index) => (
              <li key={index} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                <span className="text-[#9D7F5F] mt-1">•</span>
                <span>{extra}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

