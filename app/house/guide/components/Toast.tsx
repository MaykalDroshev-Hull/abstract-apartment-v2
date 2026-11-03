'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
}

export function Toast({ message, type = 'success' }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/95 text-white shadow-xl backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold">
            {type === 'success' ? (
              <span className="w-5 h-5 rounded-full bg-[#5B7A3A] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
            ) : (
              <Sparkles className="w-4 h-4 text-[#A3C878] flex-shrink-0" />
            )}
            <span>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

