'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, MapPin, ExternalLink, Clock, Bookmark, Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface HouseAttractionItem {
  id: number;
  category: 'nature' | 'caves' | 'historic' | 'lakes';
  maxMinutes: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  distance: string;
  driveTime: string;
  location: string;
  desc: string;
  highlights: string[];
  mapsUrl: string;
  extraMapsUrl?: { label: string; url: string };
}

interface HouseGuideModalProps {
  item: HouseAttractionItem | null;
  onClose: () => void;
  categoryLabel?: string;
  openInMapsLabel?: string;
  highlightsLabel?: string;
  closeLabel?: string;
  isSaved?: boolean;
  onToggleSave?: (item: HouseAttractionItem) => void;
  onCopyLink?: (item: HouseAttractionItem) => void;
  savedLabel?: string;
  saveLabel?: string;
  copyLinkLabel?: string;
}

export function HouseGuideModal({
  item,
  onClose,
  categoryLabel,
  openInMapsLabel = 'Open in Google Maps',
  highlightsLabel = 'Key Highlights',
  closeLabel = 'Close',
  isSaved = false,
  onToggleSave,
  onCopyLink,
  savedLabel = 'Saved in Itinerary',
  saveLabel = 'Save to Itinerary',
  copyLinkLabel = 'Share / Copy',
}: HouseGuideModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

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

  // Keyboard navigation: Escape key
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

  const handleCopy = () => {
    if (!item) return;
    if (onCopyLink) {
      onCopyLink(item);
    } else {
      navigator.clipboard?.writeText(item.mapsUrl);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
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
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col border border-zinc-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="house-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Quick Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              {onToggleSave && (
                <button
                  type="button"
                  onClick={() => onToggleSave(item)}
                  aria-label={isSaved ? savedLabel : saveLabel}
                  className={[
                    'w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm',
                    isSaved
                      ? 'bg-[#5B7A3A] text-white border-[#5B7A3A]'
                      : 'bg-white/95 text-zinc-700 hover:text-[#5B7A3A] border-zinc-200',
                  ].join(' ')}
                >
                  <Bookmark className={`w-4 h-4 stroke-[1.75] ${isSaved ? 'fill-white' : ''}`} />
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label={closeLabel}
                className="w-9 h-9 rounded-full bg-white/95 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors backdrop-blur-sm cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[1.75]" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="overflow-y-auto flex-1">
              {/* Clean Hero Image - No heavy artificial dark gradients */}
              <div className="relative w-full h-64 sm:h-80 bg-zinc-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
                
                {/* Clean, single category badge */}
                {categoryLabel && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-[#5B7A3A] border border-zinc-200/50">
                      {categoryLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Main Content Body */}
              <div className="p-6 sm:p-8">
                {/* Metadata Row: Drive Time + Distance (Tabular Nums) */}
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-600 mb-2 tabular-nums">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#5B7A3A] stroke-[1.75]" aria-hidden="true" />
                    <span>{item.driveTime}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#5B7A3A] stroke-[1.75]" aria-hidden="true" />
                    <span>{item.distance}</span>
                  </span>
                </div>

                {/* Title (Properly balanced, no widows) */}
                <h2
                  id="house-modal-title"
                  className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 tracking-tight text-balance mb-2"
                >
                  {item.title}
                </h2>

                {/* Subtitle */}
                {item.subtitle && (
                  <p className="text-sm sm:text-base font-medium text-[#5B7A3A] text-pretty mb-5">
                    {item.subtitle}
                  </p>
                )}

                {/* Location - Dropped redundant "Локация:" label; icon and text are self-evident */}
                {item.location && (
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 bg-[#F5F2ED] p-3 rounded-xl mb-6">
                    <MapPin className="w-4 h-4 text-[#5B7A3A] stroke-[1.75] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium text-zinc-800">{item.location}</span>
                  </div>
                )}

                {/* Full Description with Proper Line Wrapping */}
                <div className="space-y-3.5 text-zinc-700 text-sm sm:text-base leading-relaxed text-pretty mb-8 whitespace-pre-line">
                  {item.desc}
                </div>

                {/* Key Highlights (Clean group, removed AI sparkle badge) */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-3">
                      {highlightsLabel}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 bg-zinc-50 border border-zinc-200/80 px-3.5 py-2.5 rounded-xl"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5B7A3A] mt-2 flex-shrink-0" />
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons: Primary CTA strongly prioritized, secondary actions de-emphasized */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  {/* Primary CTA */}
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5B7A3A] text-white font-semibold text-xs sm:text-sm hover:bg-[#4A642F] transition-colors cursor-pointer"
                  >
                    <span>{openInMapsLabel}</span>
                    <ExternalLink className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                  </a>

                  {/* Secondary Link (Ghost button) */}
                  {item.extraMapsUrl && (
                    <a
                      href={item.extraMapsUrl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-800 font-medium text-xs sm:text-sm hover:bg-zinc-50 transition-colors"
                    >
                      <span>{item.extraMapsUrl.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
                    </a>
                  )}

                  {/* Tertiary Share Action */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer ml-auto"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#5B7A3A] stroke-[2]" aria-hidden="true" />
                        <span className="text-[#5B7A3A] font-semibold">Копирано!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                        <span>{copyLinkLabel}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
