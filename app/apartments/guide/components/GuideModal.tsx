'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GuideItem, GuideCategory } from '../page';
import { useTranslations } from '@/app/lib/translations';

const getCategoryLabel = (category: GuideCategory, t: ReturnType<typeof useTranslations>): string => {
  if (category === 'All') return t.guide.categories.all;
  if (category === 'Taverns') return t.guide.categories.taverns;
  if (category === 'Beaches') return t.guide.categories.beaches;
  if (category === 'Walks') return t.guide.categories.walks;
  if (category === 'Events') return t.guide.categories.events;
  if (category === 'Day Trips') return t.guide.categories.dayTrips;
  return category;
};

interface GuideModalProps {
  item: GuideItem | null;
  onClose: () => void;
}

export function GuideModal({ item, onClose }: GuideModalProps) {
  const t = useTranslations();
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  // Focus trap
  useEffect(() => {
    if (item && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      firstElement?.focus();
      window.addEventListener('keydown', handleTabKey);
      return () => window.removeEventListener('keydown', handleTabKey);
    }
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-zinc-200 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-white/90 hover:bg-white border border-zinc-200/90 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-zinc-900" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Image */}
              <div className="relative w-full h-60 sm:h-72 bg-zinc-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Category Heading (No filler badge pill) */}
                <p className="text-xs font-bold uppercase tracking-wider text-[#9D7F5F] mb-2">
                  {getCategoryLabel(item.category, t)}
                </p>

                {/* Title */}
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-2"
                >
                  {item.title}
                </h2>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-zinc-600 mb-5 text-pretty">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 mb-6 text-pretty">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3">
                      {t.guide.modal.highlights}
                    </h3>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-700">
                          <span className="text-[#9D7F5F] mt-0.5">•</span>
                          <span className="flex-1 leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Distance */}
                <div className="flex items-center gap-2 mb-8 text-sm text-zinc-600">
                  <MapPin className="w-4 h-4 text-[#9D7F5F] shrink-0" />
                  <span>
                    <strong className="text-zinc-900 font-semibold">{t.guide.modal.distance}:</strong>{' '}
                    <span className="tabular-nums">{item.distance}</span>
                  </span>
                </div>

                {/* Action Buttons: Primary solid vs Secondary ghost */}
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#9D7F5F] text-white font-semibold text-xs sm:text-sm hover:bg-[#8B6F47] active:scale-[0.98] transition-all"
                  >
                    <span>{t.guide.modal.openInMaps}</span>
                    <ExternalLink className="w-4 h-4 translate-y-[-0.5px]" />
                  </a>

                  {item.websiteUrl && (
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-transparent border border-zinc-300 text-zinc-900 font-semibold text-xs sm:text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all"
                    >
                      <span>{t.guide.modal.website}</span>
                      <ExternalLink className="w-4 h-4 translate-y-[-0.5px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
