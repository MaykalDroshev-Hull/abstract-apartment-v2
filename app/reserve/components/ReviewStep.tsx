'use client';

import { useTranslations } from '@/app/lib/translations';
import { ReservationDraft, VillaInfo } from '../types';
import { Check } from 'lucide-react';

interface ReviewStepProps {
  draft: ReservationDraft;
  villaInfo?: VillaInfo;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function ReviewStep({ draft, villaInfo, onSubmit, onBack, isSubmitting }: ReviewStepProps) {
  const t = useTranslations();
  const formatDate = (dateString?: string) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const calculateNights = () => {
    if (!draft.checkIn || !draft.checkOut) return 0;
    const checkIn = new Date(draft.checkIn);
    const checkOut = new Date(draft.checkOut);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalGuests = (draft.adults || 0) + (draft.children || 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-zinc-900 mb-6">{t.reserve.review.title}</h2>
      
      <div className="space-y-6">
        {/* Villa */}
        <div className="p-6 rounded-xl border border-zinc-200 bg-white">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">{t.reserve.review.villa}</h3>
          <p className="text-zinc-700">{villaInfo?.name || '—'}</p>
        </div>

        {/* Dates */}
        <div className="p-6 rounded-xl border border-zinc-200 bg-white">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">{t.reserve.review.dates}</h3>
          <div className="space-y-2">
            <p className="text-zinc-700">
              <span className="font-medium">{t.reserve.review.checkIn}</span> {formatDate(draft.checkIn)}
            </p>
            <p className="text-zinc-700">
              <span className="font-medium">{t.reserve.review.checkOut}</span> {formatDate(draft.checkOut)}
            </p>
            <p className="text-zinc-600 text-sm">
              {nights} {nights === 1 ? t.reserve.review.night : t.reserve.review.nights}
            </p>
          </div>
        </div>

        {/* Guests */}
        <div className="p-6 rounded-xl border border-zinc-200 bg-white">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">{t.reserve.review.guests}</h3>
          <p className="text-zinc-700">
            {draft.adults || 0} {draft.adults === 1 ? t.reserve.dates.adult : t.reserve.dates.adults}
            {draft.children && draft.children > 0 && (
              <span>, {draft.children} {draft.children === 1 ? t.reserve.dates.child : t.reserve.dates.children}</span>
            )}
          </p>
        </div>

        {/* Contact Info */}
        <div className="p-6 rounded-xl border border-zinc-200 bg-white">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">{t.reserve.review.contactInfo}</h3>
          <div className="space-y-2">
            <p className="text-zinc-700">
              <span className="font-medium">{t.reserve.review.name}</span> {draft.name || '—'}
            </p>
            <p className="text-zinc-700">
              <span className="font-medium">{t.reserve.review.email}</span> {draft.email || '—'}
            </p>
            <p className="text-zinc-700">
              <span className="font-medium">{t.reserve.review.phone}</span> {draft.phone || '—'}
            </p>
            {draft.country && (
              <p className="text-zinc-700">
                <span className="font-medium">{t.reserve.review.country}</span> {draft.country}
              </p>
            )}
            {draft.notes && (
              <div className="mt-4 pt-4 border-t border-zinc-200">
                <p className="text-sm font-medium text-zinc-700 mb-2">{t.reserve.review.notes}</p>
                <p className="text-sm text-zinc-600 whitespace-pre-wrap">{draft.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-6 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 disabled:opacity-50"
        >
          {t.reserve.buttons.goBack}
        </button>
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-1 rounded-lg bg-[#9D7F5F] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6F47] disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin">⏳</span>
              {t.reserve.review.processing}
            </>
          ) : (
            <>
              <Check className="w-5 h-5" />
              {t.reserve.review.reserve}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

