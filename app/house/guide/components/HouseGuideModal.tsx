'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, MapPin, ExternalLink, Clock, Sparkles, Bookmark, Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface HouseAttractionItem {
  id: number;
  category: 'nature' | 'caves' | 'historic' | 'lakes';
  maxMinutes: number; // for radius filter (e.g. 5, 5, 30, 50, 45, 35, 35, 60)
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
  distanceLabel?: string;
  driveTimeLabel?: string;
  locationLabel?: string;
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
  distanceLabel = 'Distance',
  driveTimeLabel = 'Travel Time',
  locationLabel = 'Location',
  highlightsLabel = 'Highlights',
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-zinc-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="house-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Quick Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              {/* Bookmark Toggle Micro-interaction */}
              {onToggleSave && (
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.85 }}
                  onClick={() => onToggleSave(item)}
                  aria-label={isSaved ? savedLabel : saveLabel}
                  className={[
                    'w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-md backdrop-blur-sm cursor-pointer',
                    isSaved
                      ? 'bg-[#5B7A3A] text-white border-[#5B7A3A]'
                      : 'bg-white/90 hover:bg-white text-zinc-700 hover:text-[#5B7A3A] border-zinc-200/80',
                  ].join(' ')}
                >
                  <motion.div
                    key={isSaved ? 'saved' : 'not-saved'}
                    initial={{ scale: 0.7 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                  </motion.div>
                </motion.button>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label={closeLabel}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-zinc-200/80 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors shadow-md backdrop-blur-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="overflow-y-auto flex-1">
              {/* Hero Image */}
              <div className="relative w-full h-64 sm:h-80 bg-zinc-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category badge */}
                {categoryLabel && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-[#5B7A3A] shadow-sm uppercase tracking-wider">
                      {categoryLabel}
                    </span>
                  </div>
                )}

                {/* Quick stats floating bar at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-medium drop-shadow-md">
                  <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-[#A3C878]" />
                    {item.driveTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#A3C878]" />
                    {item.distance}
                  </span>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Title */}
                <h2
                  id="house-modal-title"
                  className="text-2xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight mb-2"
                >
                  {item.title}
                </h2>

                {/* Subtitle */}
                {item.subtitle && (
                  <p className="text-base sm:text-lg font-medium text-[#5B7A3A] mb-5">
                    {item.subtitle}
                  </p>
                )}

                {/* Location Pill */}
                {item.location && (
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 bg-[#F5F2ED] p-3 rounded-xl mb-6">
                    <MapPin className="w-4 h-4 text-[#5B7A3A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-zinc-800">{locationLabel}: </span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                )}

                {/* Full Description with Paragraph Flow */}
                <div className="space-y-3.5 text-zinc-700 text-sm sm:text-base leading-relaxed mb-7 whitespace-pre-line">
                  {item.desc}
                </div>

                {/* Key Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-8 pt-6 border-t border-zinc-100">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-3.5 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#5B7A3A]" />
                      <span>{highlightsLabel}</span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 bg-zinc-50 border border-zinc-100 px-3.5 py-2.5 rounded-xl"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5B7A3A] mt-1.5 flex-shrink-0" />
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons: Direct Google Maps Links & Micro-copy */}
                <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center gap-3">
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5B7A3A] text-white font-bold text-xs sm:text-sm hover:bg-[#4A642F] transition-colors shadow-md"
                  >
                    <span>{openInMapsLabel}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {item.extraMapsUrl && (
                    <a
                      href={item.extraMapsUrl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-800 font-semibold text-xs sm:text-sm hover:bg-zinc-50 transition-colors shadow-xs"
                    >
                      <span>{item.extraMapsUrl.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Copy Link Action Button */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#5B7A3A]" />
                        <span className="text-[#5B7A3A] font-semibold">Копирано!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-zinc-500" />
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
