'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/app/lib/translations';

export function TeamSection() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-whitebg-zinc-800/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9D7F5F] mb-4 block">
              {t.about.team.eyebrow}
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-zinc-900text-zinc-50 mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.about.team.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-600text-zinc-400 mb-8">
              {t.about.team.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors"
            >
              {t.about.team.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column - Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {t.about.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-whitebg-zinc-800 rounded-2xl p-6 border border-zinc-200border-zinc-700"
              >
                <h3 className="text-lg font-semibold text-zinc-900text-zinc-50 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[#9D7F5F] mb-3">{member.role}</p>
                <p className="text-sm text-zinc-600text-zinc-400 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

