'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bookmark,
  X,
  MapPin,
  Clock,
  ExternalLink,
  Trash2,
  Navigation,
} from 'lucide-react';
import { HouseAttractionItem } from './HouseGuideModal';

interface ItineraryDrawerProps {
  savedItems: HouseAttractionItem[];
  onRemove: (id: number) => void;
  onClear: () => void;
  onSelect: (item: HouseAttractionItem) => void;
  labels: {
    itineraryTitle: string;
    itineraryBadge: string;
    emptyText: string;
    totalStops: string;
    openAllMaps: string;
    clearAll: string;
    close: string;
    viewSpot: string;
  };
}

export function ItineraryDrawer({
  savedItems,
  onRemove,
  onClear,
  onSelect,
  labels,
}: ItineraryDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (savedItems.length === 0 && !isOpen) {
    return null;
  }

  return (
    <>
      {/* Floating Pill Trigger */}
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 16 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#5B7A3A] text-white font-semibold text-xs sm:text-sm border border-white/20 hover:bg-[#4A642F] transition-colors cursor-pointer"
        aria-label={labels.itineraryBadge}
      >
        <span className="relative">
          <Bookmark className="w-4 h-4 fill-white stroke-[1.75]" aria-hidden="true" />
          <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-white text-[#5B7A3A] text-[10px] font-extrabold flex items-center justify-center tabular-nums">
            {savedItems.length}
          </span>
        </span>
        <span className="hidden sm:inline">{labels.itineraryTitle}</span>
        <span className="sm:hidden">{labels.itineraryBadge} (<span className="tabular-nums">{savedItems.length}</span>)</span>
      </motion.button>

      {/* Slide-over Tray Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-end bg-black/65 backdrop-blur-sm p-0 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 350 }}
              className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl flex flex-col max-h-[85vh] sm:max-h-[88vh] border border-zinc-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between bg-[#F5F2ED]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#5B7A3A] text-white flex items-center justify-center">
                    <Navigation className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-zinc-900 text-base sm:text-lg leading-tight">
                      {labels.itineraryTitle}
                    </h3>
                    <p className="text-xs text-zinc-600 font-medium tabular-nums">
                      {savedItems.length} {labels.totalStops}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label={labels.close}
                  className="w-8 h-8 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 stroke-[1.75]" />
                </button>
              </div>

              {/* Items List */}
              <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-2.5">
                {savedItems.length === 0 ? (
                  <div className="text-center py-10">
                    <Bookmark className="w-8 h-8 text-zinc-300 mx-auto mb-2 stroke-[1.5]" />
                    <p className="text-xs text-zinc-600">{labels.emptyText}</p>
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {savedItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-300 transition-colors group"
                      >
                        {/* Thumbnail */}
                        <div
                          onClick={() => {
                            setIsOpen(false);
                            onSelect(item);
                          }}
                          className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer bg-zinc-200"
                        >
                          <Image
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Title & Stats */}
                        <div
                          onClick={() => {
                            setIsOpen(false);
                            onSelect(item);
                          }}
                          className="flex-1 min-w-0 cursor-pointer"
                        >
                          <h4 className="font-semibold text-zinc-950 text-xs sm:text-sm truncate group-hover:text-[#5B7A3A] transition-colors">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[11px] text-zinc-600 mt-0.5 tabular-nums">
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#5B7A3A] stroke-[1.75]" />
                              {item.driveTime}
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#5B7A3A] stroke-[1.75]" />
                              {item.distance}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <a
                            href={item.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open in Google Maps"
                            className="w-7 h-7 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:text-[#5B7A3A] hover:border-[#5B7A3A] flex items-center justify-center transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5 stroke-[1.75]" />
                          </a>
                          <button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            aria-label="Remove item"
                            className="w-7 h-7 rounded-lg bg-white border border-zinc-200 text-zinc-400 hover:text-red-600 hover:border-red-200 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5 stroke-[1.75]" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer Actions: Clear (text link) + Open Route (primary button) */}
              {savedItems.length > 0 && (
                <div className="p-4 border-t border-zinc-200 bg-[#F5F2ED] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={onClear}
                    className="text-xs font-semibold text-zinc-600 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    {labels.clearAll}
                  </button>

                  <a
                    href={`https://www.google.com/maps/dir/${savedItems.map((s) => encodeURIComponent(s.title + ' Bulgaria')).join('/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5B7A3A] hover:bg-[#4A642F] text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <span>{labels.openAllMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[1.75]" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
