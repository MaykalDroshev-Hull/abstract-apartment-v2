'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FaqHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  images: string[];
}

export function FaqHero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary, images }: FaqHeroProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-wider text-[#9D7F5F] mb-4 font-semibold"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-900 mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-700 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/reserve"
                className="px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors text-center"
              >
                {ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-white border border-zinc-300 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-colors text-center"
              >
                {ctaSecondary}
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
              {images[0] && (
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-lg z-10">
                  <Image
                    src={images[0]}
                    alt="Abstract Apartments"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 50vw"
                  />
                </div>
              )}
              {/* Overlapping Image 1 */}
              {images[1] && (
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg z-20">
                  <Image
                    src={images[1]}
                    alt="Abstract Apartments"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 66vw, 40vw"
                  />
                </div>
              )}
              {/* Overlapping Image 2 */}
              {images[2] && (
                <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-lg z-30">
                  <Image
                    src={images[2]}
                    alt="Abstract Apartments"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
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

