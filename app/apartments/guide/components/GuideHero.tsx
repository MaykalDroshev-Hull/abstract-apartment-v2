'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';
import { guideDataRaw } from '../data';

// Get 3 random images from guide data
const getRandomImages = () => {
  const shuffled = [...guideDataRaw].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map(item => ({
    src: item.imageSrc,
    alt: item.translations.en.imageAlt
  }));
};

export function GuideHero() {
  const t = useTranslations();
  const images = useMemo(() => getRandomImages(), []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-5"
            >
              {t.guide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty mb-8"
            >
              {t.guide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/apartments/reserve"
                className="px-7 py-3 rounded-xl bg-[#9D7F5F] text-white font-semibold text-sm hover:bg-[#8B6F47] active:scale-[0.98] transition-all text-center"
              >
                {t.guide.reserve}
              </Link>
              <Link
                href="/apartments/contact"
                className="px-7 py-3 rounded-xl bg-transparent border border-zinc-400/80 text-zinc-900 font-semibold text-sm hover:bg-zinc-900/5 active:scale-[0.98] transition-all text-center"
              >
                {t.guide.contactUs}
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image Collage */}
          <div className="relative h-[360px] sm:h-[460px] lg:h-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                {/* Main Image */}
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-zinc-300/70 z-10">
                  <Image
                    src={images[0]?.src || '/Images/index/DEMO-hero-image.jpg'}
                    alt={images[0]?.alt || 'Paralia Ofriniou coastline'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 50vw"
                  />
                </div>
                {/* Overlapping Image 1 */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-zinc-300/70 z-20">
                  <Image
                    src={images[1]?.src || '/Images/index/DEMO-hero-image.jpg'}
                    alt={images[1]?.alt || 'Local attraction'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 66vw, 40vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
