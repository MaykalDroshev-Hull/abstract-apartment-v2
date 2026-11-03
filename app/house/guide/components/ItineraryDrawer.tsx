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
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#5B7A3A] text-white font-bold text-xs sm:text-sm shadow-xl border border-white/20 hover:bg-[#4A642F] transition-colors cursor-pointer"
        aria-label={labels.itineraryBadge}
      >
        <span className="relative">
          <Bookmark className="w-4 h-4 fill-white" />
          <motion.span
            key={savedItems.length}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-white text-[#5B7A3A] text-[10px] font-extrabold flex items-center justify-center shadow-xs"
          >
            {savedItems.length}
          </motion.span>
        </span>
        <span className="hidden sm:inline">{labels.itineraryTitle}</span>
        <span className="sm:hidden">{labels.itineraryBadge} ({savedItems.length})</span>
      </motion.button>

      {/* Slide-over Tray Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-end bg-black/60 backdrop-blur-xs p-0 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[85vh] sm:max-h-[88vh] border border-zinc-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-zinc-100 flex items-center justify-between bg-[#F5F2ED]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#5B7A3A] text-white flex items-center justify-center">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-zinc-900 text-lg sm:text-xl leading-tight">
                      {labels.itineraryTitle}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium">
                      {savedItems.length} {labels.totalStops}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label={labels.close}
                  className="w-8 h-8 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="overflow-y-auto flex-1 p-5 space-y-3">
                {savedItems.length === 0 ? (
                  <div className="text-center py-10">
                    <Bookmark className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                    <p className="text-sm text-zinc-500">{labels.emptyText}</p>
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {savedItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group"
                      >
                        {/* Thumbnail */}
                        <div
                          onClick={() => {
                            setIsOpen(false);
                            onSelect(item);
                          }}
                          className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
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
                          <h4 className="font-bold text-zinc-900 text-xs sm:text-sm truncate group-hover:text-[#5B7A3A] transition-colors">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[11px] text-zinc-500 mt-0.5">
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#5B7A3A]" />
                              {item.driveTime}
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#5B7A3A]" />
                              {item.distance}
                            </span>
                          </div>
                        </div>

                        {/* Actions: Direct Map & Remove */}
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <a
                            href={item.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open in Google Maps"
                            className="w-8 h-8 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:text-[#5B7A3A] hover:border-[#5B7A3A] flex items-center justify-center transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            aria-label="Remove item"
                            className="w-8 h-8 rounded-lg bg-white border border-zinc-200 text-zinc-400 hover:text-red-600 hover:border-red-200 flex items-center justify-center transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer Actions */}
              {savedItems.length > 0 && (
                <div className="p-4 sm:p-5 border-t border-zinc-100 bg-[#F5F2ED] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={onClear}
                    className="text-xs font-semibold text-zinc-500 hover:text-red-600 transition-colors"
                  >
                    {labels.clearAll}
                  </button>

                  <a
                    href={`https://www.google.com/maps/dir/${savedItems.map((s) => encodeURIComponent(s.title + ' Bulgaria')).join('/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5B7A3A] hover:bg-[#4A642F] text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <span>{labels.openAllMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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

