'use client';

import { useTranslations } from '@/app/lib/translations';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function HouseCtaSection() {
  const t = useTranslations();
  const h = t.house;

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Full-width CTA Card */}
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={h.cta.image}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2B1F]/80 via-[#3D2B1F]/60 to-[#3D2B1F]/30" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 max-w-2xl">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/95 mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {h.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 leading-relaxed">
              {h.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#5B7A3A] text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-[#4A6830]"
              >
                {h.cta.primaryButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-white/50 text-white/90 font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/80 backdrop-blur-sm"
              >
                {h.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Property Switcher - Link to Apartment */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-zinc-500 mb-4">{h.cta.alsoExplore}</p>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-zinc-200 hover:border-[#9D7F5F] transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col items-start">
              <span className="text-xs text-zinc-500 uppercase tracking-wider">
                {h.cta.apartmentLabel}
              </span>
              <span className="text-base font-semibold text-zinc-900" style={{ fontFamily: 'var(--font-serif)' }}>
                Abstract Apartment
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9D7F5F] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
