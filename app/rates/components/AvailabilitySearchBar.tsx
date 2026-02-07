'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Home, CheckCircle } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';
import { AvailabilityCalendar } from './AvailabilityCalendar';

type UnitType = 'apartment' | 'studio' | 'both';

export function AvailabilitySearchBar() {
  const t = useTranslations();
  const router = useRouter();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [unitType, setUnitType] = useState<UnitType>('both');
  const [calendarFocusDate, setCalendarFocusDate] = useState<Date | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [calendarSearchKey, setCalendarSearchKey] = useState(0); // Key to trigger calendar update
  const [searchedUnitType, setSearchedUnitType] = useState<UnitType>('both'); // Unit type used in calendar

  // Update calendar when unit type changes
  useEffect(() => {
    setSearchedUnitType(unitType);
    setCalendarSearchKey(prev => prev + 1);
  }, [unitType]);

  const checkAvailability = useCallback(async () => {
    if (!checkIn || !checkOut) {
      setIsAvailable(null);
      return;
    }

    try {
      setIsCheckingAvailability(true);
      
      // Determine apartment IDs based on unit type
      let apartmentIds = '1,2'; // both
      if (unitType === 'apartment') {
        apartmentIds = '1';
      } else if (unitType === 'studio') {
        apartmentIds = '2';
      }

      const response = await fetch(
        `/api/bookings/availability?checkIn=${checkIn}&checkOut=${checkOut}&apartmentIds=${apartmentIds}`
      );

      if (!response.ok) {
        throw new Error('Failed to check availability');
      }

      const data = await response.json();
      setIsAvailable(data.allAvailable);
    } catch (error) {
      console.error('Error checking availability:', error);
      setIsAvailable(null);
    } finally {
      setIsCheckingAvailability(false);
    }
  }, [checkIn, checkOut, unitType]);

  // Auto-check availability when both dates are selected
  useEffect(() => {
    if (checkIn && checkOut) {
      checkAvailability();
    } else {
      setIsAvailable(null);
    }
  }, [checkIn, checkOut, checkAvailability]);

  const handleBookDates = () => {
    // Navigate to reserve page with pre-filled parameters
    const params = new URLSearchParams({
      villa: unitType,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: '2', // Default guests
    });
    router.push(`/reserve?${params.toString()}`);
  };

  const handleDateSelect = (date: string) => {
    // If clicking on the same check-in date, reset the selection
    if (checkIn && date === checkIn && !checkOut) {
      setCheckIn('');
      setCheckOut('');
      setIsAvailable(null);
      return;
    }
    
    if (!checkIn || (checkIn && checkOut)) {
      // Start new selection
      setCheckIn(date);
      setCheckOut('');
      setIsAvailable(null);
      // Navigate calendar to selected date
      setCalendarFocusDate(new Date(date));
    } else if (checkIn && !checkOut) {
      // Complete selection
      const checkInDate = new Date(checkIn);
      const selectedDate = new Date(date);
      
      if (selectedDate <= checkInDate) {
        // If selected date is before or equal to check-in, make it the new check-in
        setCheckIn(date);
        setCheckOut('');
        setIsAvailable(null);
        setCalendarFocusDate(new Date(date));
      } else {
        // Otherwise, set as check-out
        setCheckOut(date);
        // Availability will be checked automatically by useEffect
      }
    }
  };

  return (
    <div className="mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 overflow-x-hidden">
      {/* Unit Type Selector */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-zinc-200 shadow-sm mb-8">
        <div className="max-w-md mx-auto">
          <label htmlFor="unitType" className="block text-sm font-medium text-zinc-700 mb-2">
            {t.rates.search?.unitType || 'Unit Type'}
          </label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none z-10" />
            <select
              id="unitType"
              value={unitType}
              onChange={(e) => setUnitType(e.target.value as UnitType)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors appearance-none"
            >
              <option value="apartment">{t.rates.search?.apartment || 'Apartment'}</option>
              <option value="studio">{t.rates.search?.studio || 'Studio'}</option>
              <option value="both">{t.rates.search?.both || 'Both'}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <AvailabilityCalendar
        key={calendarSearchKey}
        unitType={searchedUnitType}
        checkIn={checkIn}
        checkOut={checkOut}
        onDateSelect={handleDateSelect}
        focusDate={calendarFocusDate}
      />

      {/* Availability Status & CTA */}
      {checkIn && checkOut && (
        <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-zinc-200 shadow-sm">
          {isCheckingAvailability ? (
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#9D7F5F]"></div>
              <span className="text-sm text-zinc-600">{t.rates.search?.checkingAvailability || 'Checking availability...'}</span>
            </div>
          ) : isAvailable === true ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    {t.rates.search?.availableTitle || 'Available!'}
                  </h3>
                  <p className="text-sm text-green-700 mb-4">
                    {t.rates.search?.availableMessage || 'Would you like to book those dates?'}
                  </p>
                  <button
                    onClick={handleBookDates}
                    className="px-6 py-2.5 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors"
                  >
                    {t.rates.search?.bookNow || 'Yes, Book These Dates'}
                  </button>
                </div>
              </div>
            </div>
          ) : isAvailable === false ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm text-red-700">
                {t.rates.search?.notAvailable || 'These dates are not available. Please select different dates.'}
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

