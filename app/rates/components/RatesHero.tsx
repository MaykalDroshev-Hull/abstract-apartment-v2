'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';

export function RatesHero() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/Images/index/DEMO-hero-image.jpg"
                alt="Abstract Apartments"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.rates.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600text-zinc-400 mb-8 max-w-2xl"
            >
              {t.rates.hero.description}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="px-6 py-2 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors text-center"
              >
                {t.rates.hero.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 rounded-lg bg-whitebg-zinc-800 border border-zinc-300border-zinc-700 text-zinc-900text-zinc-100 font-medium text-sm hover:bg-zinc-50hover:bg-zinc-700 transition-colors text-center"
              >
                {t.rates.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

