'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type FaqItem = {
  q: string;
  a: string;
};

interface PoliciesFaqProps {
  title?: string;
  items?: FaqItem[];
}

export function PoliciesFaq({ title, items }: PoliciesFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Default to contact FAQ if not provided
  const defaultTitle = 'Политики и условия';
  const defaultItems: FaqItem[] = [
    {
      q: 'Настаняване',
      a: 'След 15:00 часа.',
    },
    {
      q: 'Освобождаване',
      a: 'До 10:00 часа.',
    },
    {
      q: 'Тютюнопушене',
      a: 'Забранено във всички помещения.',
    },
    {
      q: 'Домашни любимци',
      a: 'По предварително запитване.',
    },
    {
      q: 'Минимален престой',
      a: '3 нощувки.',
    },
    {
      q: 'Отстъпка при по-дълъг престой',
      a: 'Резервирайте 7 нощувки и получете 8-мата безплатно.',
    },
    {
      q: 'Депозит',
      a: '30% от стойността на престоя при резервация.',
    },
  ];

  const displayTitle = title || defaultTitle;
  const displayItems = items || defaultItems;

  return (
    <section className="bg-whitebg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-zinc-200border-zinc-700">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="w-6 h-6 text-[#9D7F5F]" />
        <h2
          className="text-2xl sm:text-3xl font-bold text-zinc-900text-zinc-50"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {displayTitle}
        </h2>
      </div>

      <div className="space-y-2">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-zinc-200border-zinc-700 last:border-b-0"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={openIndex === index}
            >
              <span className="text-base sm:text-lg font-semibold text-zinc-900text-zinc-50 group-hover:text-[#9D7F5F] transition-colors">
                {item.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-zinc-500text-zinc-400 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 text-base text-zinc-600text-zinc-400 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

