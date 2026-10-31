'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { guideContactsData } from '../contactsData';
import { useTranslations } from '@/app/lib/translations';

export function GuideContactsSection() {
  const t = useTranslations();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return guideContactsData;
    return guideContactsData.filter((entry) => {
      const hay = `${entry.label} ${entry.telHrefs.join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <section className="mt-20 sm:mt-24 lg:mt-28 border-t border-zinc-200/80 pt-16 sm:pt-20">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-3">
          {t.guide.contacts.title}
        </h2>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.guide.contacts.searchPlaceholder}
          className="mt-4 w-full max-w-md mx-auto block px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9D7F5F]/30 focus:border-[#9D7F5F]"
          aria-label={t.guide.contacts.searchPlaceholder}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-zinc-600 py-8">{t.guide.contacts.noResults}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.3) }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col h-full shadow-sm hover:border-zinc-300 transition-colors duration-300"
            >
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 leading-snug">
                {entry.label}
              </h3>
              <div className="space-y-1 mb-5 flex-1">
                {entry.telHrefs.map((tel) => (
                  <p key={tel} className="text-sm sm:text-base text-zinc-600 tabular-nums">
                    {tel}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {entry.telHrefs.map((tel, i) => (
                  <a
                    key={`${entry.id}-tel-${i}`}
                    href={`tel:${tel}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {entry.telHrefs.length > 1
                      ? i === 0
                        ? t.guide.contacts.call
                        : t.guide.contacts.callAlt
                      : t.guide.contacts.call}
                  </a>
                ))}
                {entry.mapsUrl && (
                  <a
                    href={entry.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors"
                  >
                    <span>{t.guide.contacts.maps}</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
