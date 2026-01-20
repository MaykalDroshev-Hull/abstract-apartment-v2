'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/app/lib/translations';
import { ReservationDraft, VillaType } from '../types';
import { Calendar, Users } from 'lucide-react';

interface DateGuestFormProps {
  draft: ReservationDraft;
  selectedVilla?: VillaType;
  onUpdate: (updates: Partial<ReservationDraft>) => void;
  errors: {
    checkIn?: string;
    checkOut?: string;
  };
  onNext: () => void;
  onBack: () => void;
}

export function DateGuestForm({ draft, selectedVilla, onUpdate, errors, onNext, onBack }: DateGuestFormProps) {
  const t = useTranslations();
  const maxAdults = selectedVilla === 'apartment' ? 6 : selectedVilla === 'both' ? 8 : 4;
  const maxChildren = 4;
  const [availabilityError, setAvailabilityError] = useState<string | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validateDates = (checkIn: string, checkOut: string) => {
    if (checkIn && checkOut) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);
      if (outDate <= inDate) {
        return { checkOut: 'Check-out must be after check-in' };
      }
    }
    return {};
  };

  // Check availability when dates change and villa is "both"
  useEffect(() => {
    if (selectedVilla === 'both' && draft.checkIn && draft.checkOut) {
      const checkAvailability = async () => {
        setIsCheckingAvailability(true);
        setAvailabilityError(null);
        
        try {
          const response = await fetch(
            `/api/bookings/availability?checkIn=${draft.checkIn}&checkOut=${draft.checkOut}&apartmentIds=1,2`
          );
          
          if (!response.ok) {
            throw new Error('Failed to check availability');
          }
          
          const data = await response.json();
          
          if (!data.allAvailable) {
            const unavailableIds = Object.entries(data.availability)
              .filter(([_, available]) => !available)
              .map(([id]) => id);
            
            let errorMessage = '';
            if (unavailableIds.length === 2) {
              // Both unavailable
              errorMessage = t.reserve.dates.bothNotAvailable;
            } else if (unavailableIds[0] === '1') {
              // Apartment unavailable
              errorMessage = t.reserve.dates.apartmentNotAvailable;
            } else if (unavailableIds[0] === '2') {
              // Studio unavailable
              errorMessage = t.reserve.dates.studioNotAvailable;
            } else {
              errorMessage = t.reserve.dates.bothNotAvailable;
            }
            
            setAvailabilityError(errorMessage);
          }
        } catch (error) {
          console.error('Error checking availability:', error);
          setAvailabilityError(t.reserve.dates.unableToCheckAvailability);
        } finally {
          setIsCheckingAvailability(false);
        }
      };
      
      checkAvailability();
    } else {
      setAvailabilityError(null);
    }
  }, [draft.checkIn, draft.checkOut, selectedVilla]);

  const handleDateChange = (field: 'checkIn' | 'checkOut', value: string) => {
    const updates: Partial<ReservationDraft> = { [field]: value };
    
    if (field === 'checkIn' && draft.checkOut) {
      const validation = validateDates(value, draft.checkOut);
      if (validation.checkOut) {
        // Don't update if invalid
        return;
      }
    } else if (field === 'checkOut' && draft.checkIn) {
      const validation = validateDates(draft.checkIn, value);
      if (validation.checkOut) {
        // Don't update if invalid
        return;
      }
    }
    
    setAvailabilityError(null); // Clear availability error when dates change
    onUpdate(updates);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-zinc-900 mb-6">{t.reserve.dates.title}</h2>
      
      {/* Date Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-[#9D7F5F]" />
          <h3 className="text-lg font-semibold text-zinc-900">{t.reserve.dates.datesLabel}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.reserve.dates.checkIn}
            </label>
            <input
              type="date"
              id="checkIn"
              min={today}
              value={draft.checkIn || ''}
              onChange={(e) => handleDateChange('checkIn', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.checkIn ? 'border-red-300' : 'border-zinc-300'
              } focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent`}
            />
            {errors.checkIn && (
              <p className="mt-1 text-sm text-red-600">{errors.checkIn}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.reserve.dates.checkOut}
            </label>
            <input
              type="date"
              id="checkOut"
              min={draft.checkIn || today}
              value={draft.checkOut || ''}
              onChange={(e) => handleDateChange('checkOut', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.checkOut ? 'border-red-300' : 'border-zinc-300'
              } focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent`}
            />
            {errors.checkOut && (
              <p className="mt-1 text-sm text-red-600">{errors.checkOut}</p>
            )}
          </div>
        </div>
        
        {/* Availability Status */}
        {selectedVilla === 'both' && draft.checkIn && draft.checkOut && (
          <div className="mt-4">
            {isCheckingAvailability ? (
              <p className="text-sm text-zinc-600">{t.reserve.dates.checkingAvailability}</p>
            ) : availabilityError ? (
              <p className="text-sm text-red-600">{availabilityError}</p>
            ) : (
              <p className="text-sm text-green-600">✓ {t.reserve.dates.bothAvailable}</p>
            )}
          </div>
        )}
      </div>

      {/* Guest Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-[#9D7F5F]" />
          <h3 className="text-lg font-semibold text-zinc-900">{t.reserve.dates.guestsLabel}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.reserve.dates.adults}
            </label>
            <select
              id="adults"
              value={draft.adults || 1}
              onChange={(e) => onUpdate({ adults: parseInt(e.target.value) })}
              className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent"
            >
              {Array.from({ length: maxAdults }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t.reserve.dates.adult : t.reserve.dates.adults}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.reserve.dates.childrenOptional}
            </label>
            <select
              id="children"
              value={draft.children || 0}
              onChange={(e) => onUpdate({ children: parseInt(e.target.value) })}
              className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent"
            >
              {Array.from({ length: maxChildren + 1 }, (_, i) => i).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t.reserve.dates.child : t.reserve.dates.children}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-6 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          {t.reserve.buttons.goBack}
        </button>
        <button
          onClick={onNext}
          disabled={isCheckingAvailability || (selectedVilla === 'both' && !!availabilityError)}
          className="flex-1 rounded-lg bg-[#9D7F5F] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6F47] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t.reserve.buttons.ok}
        </button>
      </div>
    </div>
  );
}

