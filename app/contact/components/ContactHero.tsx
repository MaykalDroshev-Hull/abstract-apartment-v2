'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';

export function ContactHero() {
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.contact.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl"
            >
              {t.contact.hero.description}
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
                {t.contact.hero.ctaPrimary}
              </Link>
              <Link
                href="/gallery"
                className="px-6 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-center"
              >
                {t.contact.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full h-full">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-lg z-10">
                <Image
                  src="/Images/index/DEMO-hero-image.jpg"
                  alt="Paralia Ofriniou"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 75vw, 50vw"
                />
              </div>
              {/* Overlapping Image 1 */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg z-20">
                <Image
                  src="/Images/index/DEMO-hero-image.jpg"
                  alt="Abstract Apartments"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 66vw, 40vw"
                />
              </div>
              {/* Overlapping Image 2 */}
              <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-lg z-30">
                <Image
                  src="/Images/index/DEMO-hero-image.jpg"
                  alt="Seaside view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

