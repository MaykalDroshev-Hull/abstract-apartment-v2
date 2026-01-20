'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';

export function AboutCta() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t.about.cta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600text-zinc-400 mb-8"
        >
          {t.about.cta.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-6 py-2 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors text-center"
          >
            {t.about.cta.primaryButton}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 rounded-lg bg-whitebg-zinc-800 border border-zinc-300border-zinc-700 text-zinc-900text-zinc-100 font-medium text-sm hover:bg-zinc-50hover:bg-zinc-700 transition-colors text-center"
          >
            {t.about.cta.secondaryButton}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

