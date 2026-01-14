'use client';

import { useTranslations } from '@/app/lib/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function FloorPlanPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#F5F2ED] dark:bg-zinc-900">
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.floorPlan.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              {t.floorPlan.description}
            </p>
          </div>

          {/* Floor Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Abstract Apartment Floor Plan */}
            <div className="flex flex-col">
              <h2
                className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t.floorPlan.apartment.title}
              </h2>
              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                {t.floorPlan.apartment.image ? (
                  <Image
                    src={t.floorPlan.apartment.image}
                    alt={t.floorPlan.apartment.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-zinc-400 dark:text-zinc-500 text-sm sm:text-base mb-2">
                        {t.floorPlan.placeholder}
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-600 text-xs sm:text-sm">
                        {t.floorPlan.apartment.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Abstract Studio Floor Plan */}
            <div className="flex flex-col">
              <h2
                className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t.floorPlan.studio.title}
              </h2>
              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                {t.floorPlan.studio.image ? (
                  <Image
                    src={t.floorPlan.studio.image}
                    alt={t.floorPlan.studio.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-zinc-400 dark:text-zinc-500 text-sm sm:text-base mb-2">
                        {t.floorPlan.placeholder}
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-600 text-xs sm:text-sm">
                        {t.floorPlan.studio.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.floorPlan.cta.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
              {t.floorPlan.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reserve"
                className="px-6 py-2 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors text-center"
              >
                {t.header.reserve}
              </Link>
              <Link
                href="/gallery"
                className="px-6 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-center"
              >
                {t.gallery.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

