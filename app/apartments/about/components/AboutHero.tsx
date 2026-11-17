'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';

export function AboutHero() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 mb-6 text-balance"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.about.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 mb-8 max-w-2xl text-pretty"
            >
              {t.about.hero.subtitle}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/apartments/gallery"
                className="px-6 py-2.5 rounded-xl bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors text-center shadow-xs"
              >
                {t.about.hero.ctaPrimary}
              </Link>
              <Link
                href="/apartments/gallery"
                className="px-6 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-colors text-center shadow-xs"
              >
                {t.about.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src="/Images/Gallery/LivingArea1.jpg"
                alt="Sunlit open-plan living and dining room at Abstract Apartment in Paralia Ofriniou, Greece"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
