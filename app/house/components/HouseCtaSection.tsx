'use client';

import { useTranslations, useLanguage } from '@/app/lib/translations';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function HouseCtaSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const h = t.house;

  const ctaImageAlt =
    language === 'bg'
      ? 'Ограденият зелен двор и отопляемият басейн на Къща за гости Абстракт в с. Голец, видени изпод дървените греди на верандата'
      : language === 'el'
      ? 'Ο περιφραγμένος πράσινος κήπος και η θερμαινόμενη πισίνα του Ξενώνα Abstract στο Γκόλετς κάτω από τα ξύλινα δοκάρια της βεράντας'
      : 'View from beneath the wooden veranda beams across the enclosed green lawn toward the heated swimming pool at Abstract Guest House in Golets';

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Full-width CTA Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-zinc-900/10 shadow-xs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={h.cta.image}
              alt={ctaImageAlt}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Calm Neutral Scrim Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-18 lg:px-16 lg:py-20 max-w-2xl text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight text-balance mb-4 sm:mb-5 drop-shadow-xs">
              {h.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-white/85 mb-8 sm:mb-10 leading-relaxed text-pretty drop-shadow-xs">
              {h.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                href="/house/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-semibold text-sm sm:text-base hover:bg-[#4d6831] active:scale-[0.98] transition-all"
              >
                <span>{h.cta.primaryButton}</span>
                <ArrowRight className="w-4 h-4 translate-y-[0.5px]" aria-hidden="true" />
              </Link>
              <Link
                href="/apartments"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-transparent border border-white/50 text-white font-semibold text-sm sm:text-base hover:bg-white/10 active:scale-[0.98] transition-all"
              >
                <span>{h.cta.secondaryButton}</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Property Switcher - Quiet, editorial link to the Seaside Apartment */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm font-medium text-zinc-500 mb-3 uppercase tracking-wider">
            {h.cta.alsoExplore}
          </p>
          <Link
            href="/apartments"
            className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-xl border border-zinc-300/80 bg-white/60 hover:bg-white hover:border-[#9D7F5F]/60 transition-all active:scale-[0.98]"
          >
            <div className="flex flex-col items-start text-left">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold">
                {h.cta.apartmentLabel}
              </span>
              <span className="text-base font-serif font-bold text-zinc-900 group-hover:text-[#9D7F5F] transition-colors">
                {language === 'bg'
                  ? 'Апартамент „Абстракт“ • Паралия Офринио'
                  : language === 'el'
                  ? 'Διαμέρισμα „Abstract“ • Παραλία Οφρυνίου'
                  : 'Abstract Apartment • Paralia Ofriniou'}
              </span>
            </div>
            <ArrowRight
              className="w-4 h-4 text-zinc-400 group-hover:text-[#9D7F5F] group-hover:translate-x-0.5 transition-all"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
