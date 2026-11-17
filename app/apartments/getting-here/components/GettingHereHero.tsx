'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GettingHereHeroProps {
  caption: string;
  title: string;
  subtitle: string;
  ctaReserve: string;
  ctaContact: string;
  images: string[];
}

export function GettingHereHero({ caption, title, subtitle, ctaReserve, ctaContact, images }: GettingHereHeroProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-[#9D7F5F] mb-3"
            >
              {caption}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-5"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty mb-8"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons (Rule 18: Primary solid vs Secondary subtle ghost) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/apartments/reserve"
                className="px-7 py-3 rounded-xl bg-[#9D7F5F] text-white font-semibold text-sm hover:bg-[#8B6F47] active:scale-[0.98] transition-all text-center"
              >
                {ctaReserve}
              </Link>
              <Link
                href="/apartments/contact"
                className="px-7 py-3 rounded-xl bg-transparent border border-zinc-400/80 text-zinc-900 font-semibold text-sm hover:bg-zinc-900/5 active:scale-[0.98] transition-all text-center"
              >
                {ctaContact}
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative h-[360px] sm:h-[460px] lg:h-[520px]"
          >
            <div className="relative w-full h-full">
              {/* Main Image */}
              {images[0] && (
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-zinc-300/70 z-10 shadow-xs">
                  <Image
                    src={images[0]}
                    alt="Welcoming open-plan living room at Abstract Apartment in Paralia Ofriniou, Greece"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 50vw"
                  />
                </div>
              )}
              {/* Overlapping Image 1 */}
              {images[1] && (
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-zinc-300/70 z-20">
                  <Image
                    src={images[1]}
                    alt="Spacious furnished terrace just 2 minutes walk from the beach in Paralia Ofriniou"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 66vw, 40vw"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
