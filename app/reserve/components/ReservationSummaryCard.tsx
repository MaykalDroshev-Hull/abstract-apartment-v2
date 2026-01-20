'use client';

import { useMemo } from 'react';
import { useTranslations } from '@/app/lib/translations';
import { ReservationDraft, VillaInfo } from '../types';
import { Home, Calendar, Users } from 'lucide-react';
import { calculateStayPrice } from '../utils/pricing';

interface ReservationSummaryCardProps {
  draft: ReservationDraft;
  villaInfo?: VillaInfo;
}

export function ReservationSummaryCard({ draft, villaInfo }: ReservationSummaryCardProps) {
  const t = useTranslations();
  const calculateNights = () => {
    if (!draft.checkIn || !draft.checkOut) return 0;
    const checkIn = new Date(draft.checkIn);
    const checkOut = new Date(draft.checkOut);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  
  // Calculate pricing based on villa type using pricing utility for seasonal rates
  const pricing = useMemo(() => {
    if (!draft.checkIn || !draft.checkOut || !villaInfo) {
      return null;
    }

    try {
      const result = calculateStayPrice(draft.checkIn, draft.checkOut, villaInfo.type, t);
      
      // Debug: log if prices are 0
      if (result.finalTotal === 0) {
        console.warn('Pricing calculation returned 0:', {
          checkIn: draft.checkIn,
          checkOut: draft.checkOut,
          villaType: villaInfo.type,
          totalNights: result.totalNights,
          apartmentSeasons: t.rates.units.apartment.seasons.length,
          studioSeasons: t.rates.units.studio.seasons.length,
        });
      }
      
      return result;
    } catch (error) {
      console.error('Error calculating pricing:', error);
      return null;
    }
  }, [draft.checkIn, draft.checkOut, villaInfo, t]);

  const subtotal = pricing?.finalTotal || pricing?.combinedTotal || 0;
  const deposit = subtotal * 0.3;

  return (
    <div className="sticky top-4">
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
        <h3 className="text-xl font-serif text-zinc-900 mb-6">{t.reserve.summary.title}</h3>
        
        <div className="space-y-4">
          {/* Villa */}
          <div className="flex items-start gap-3">
            <Home className="w-5 h-5 text-[#9D7F5F] mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-zinc-900">{villaInfo?.name || '—'}</p>
              <p className="text-sm text-zinc-600 mt-1">
                {villaInfo?.description || '—'}
              </p>
            </div>
          </div>

          {/* Dates */}
          <div className="flex items-start gap-3 pt-4 border-t border-zinc-200">
            <Calendar className="w-5 h-5 text-[#9D7F5F] mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-900">{t.reserve.summary.dates}</p>
              {draft.checkIn && draft.checkOut ? (
                <div className="text-sm text-zinc-600 mt-1">
                  <p>{new Date(draft.checkIn).toLocaleDateString()}</p>
                  <p className="text-zinc-400">to</p>
                  <p>{new Date(draft.checkOut).toLocaleDateString()}</p>
                  <p className="text-zinc-500 mt-1">
                    {nights} {nights === 1 ? t.reserve.review.night : t.reserve.review.nights}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-zinc-500 mt-1">—</p>
              )}
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-start gap-3 pt-4 border-t border-zinc-200">
            <Users className="w-5 h-5 text-[#9D7F5F] mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-900">{t.reserve.summary.guests}</p>
              <p className="text-sm text-zinc-600 mt-1">
                {draft.adults || 0} {draft.adults === 1 ? t.reserve.dates.adult : t.reserve.dates.adults}
                {(draft.children ?? 0) > 0 && (
                  <span>, {draft.children} {draft.children === 1 ? t.reserve.dates.child : t.reserve.dates.children}</span>
                )}
              </p>
            </div>
          </div>

          {/* Pricing */}
          {nights > 0 && draft.checkIn && draft.checkOut && (
            <div className="pt-4 border-t border-zinc-200 space-y-4">
              {pricing && pricing.totalNights > 0 ? (
                <>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 mb-3">{t.reserve.summary.stayCost}</h4>
                    
                    {villaInfo?.type === 'both' ? (
                      <>
                        {/* Combined pricing breakdown */}
                        <div className="space-y-2 mb-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-zinc-600">
                              Apartment ({pricing.totalNights} {pricing.totalNights === 1 ? t.reserve.review.night : t.reserve.review.nights})
                            </span>
                            <span className="font-medium text-zinc-900">€{pricing.apartmentTotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-zinc-600">
                              Studio ({pricing.totalNights} {pricing.totalNights === 1 ? t.reserve.review.night : t.reserve.review.nights})
                            </span>
                            <span className="font-medium text-zinc-900">€{pricing.studioTotal.toFixed(2)}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-zinc-600">
                          {pricing.totalNights} {pricing.totalNights === 1 ? t.reserve.review.night : t.reserve.review.nights}
                          {villaInfo?.type === 'apartment' && ` (Apartment)`}
                          {villaInfo?.type === 'studio' && ` (Studio)`}
                        </span>
                        <span className="font-medium text-zinc-900">€{subtotal.toFixed(2)}</span>
                      </div>
                    )}
                    
                    {/* Discount/Promotion */}
                    {pricing.freeNights > 0 && (
                      <div className="mb-3 pt-3 border-t border-zinc-100">
                        <div className="flex justify-between text-sm text-green-600">
                          <span>
                            {t.reserve.summary.promotion} {pricing.freeNights} {pricing.freeNights === 1 ? t.reserve.summary.nightFree : t.reserve.summary.nightsFree}
                            {pricing.paidNights > 0 && ` (${t.reserve.summary.payFor.replace('{paidNights}', pricing.paidNights.toString()).replace('{totalNights}', pricing.totalNights.toString())})`}
                          </span>
                          <span className="font-medium">-€{pricing.discountAmount.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Total Stay Cost */}
                  <div className="pt-3 border-t-2 border-zinc-300">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-base text-zinc-900">{t.reserve.summary.total}</span>
                      <span className="text-xl font-bold text-[#9D7F5F]">€{subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      {t.reserve.summary.basedOn} {nights} {nights === 1 ? t.reserve.review.night : t.reserve.review.nights} • {new Date(draft.checkIn).toLocaleDateString()} - {new Date(draft.checkOut).toLocaleDateString()}
                    </p>
                  </div>
                  
                  {/* Deposit */}
                  <div className="pt-3 border-t border-zinc-200">
                    <p className="text-xs text-zinc-600 mb-2">{t.reserve.summary.deposit}</p>
                    <p className="text-sm font-medium text-zinc-900">€{deposit.toFixed(2)}</p>
                    <p className="text-xs text-zinc-500 mt-2">
                      {t.reserve.summary.depositNote}
                    </p>
                  </div>
                </>
              ) : pricing === null ? (
                <div className="pt-3">
                  <p className="text-sm text-zinc-500">Calculating pricing...</p>
                </div>
              ) : (
                <div className="pt-3">
                  <p className="text-sm text-orange-600">Prices not available for selected dates. Please select dates within May-October.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

