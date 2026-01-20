'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Users, Search, Home, CheckCircle } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';
import { AvailabilityCalendar } from './AvailabilityCalendar';

type UnitType = 'apartment' | 'studio' | 'both';

export function AvailabilitySearchBar() {
  const t = useTranslations();
  const router = useRouter();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [unitType, setUnitType] = useState<UnitType>('both');
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarFocusDate, setCalendarFocusDate] = useState<Date | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  // Check availability when dates and unit type change
  useEffect(() => {
    if (checkIn && checkOut && unitType) {
      checkAvailability();
    } else {
      setIsAvailable(null);
    }
  }, [checkIn, checkOut, unitType]);

  const checkAvailability = async () => {
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
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Show calendar and navigate to selected dates
    if (checkIn) {
      setShowCalendar(true);
      setCalendarFocusDate(new Date(checkIn));
    }
    // Check availability
    checkAvailability();
  };

  const handleBookDates = () => {
    // Navigate to reserve page with pre-filled parameters
    const params = new URLSearchParams({
      villa: unitType,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
    });
    router.push(`/reserve?${params.toString()}`);
  };

  const handleDateSelect = (date: string) => {
    if (!checkIn || (checkIn && checkOut)) {
      // Start new selection
      setCheckIn(date);
      setCheckOut('');
    } else if (checkIn && !checkOut) {
      // Complete selection
      const checkInDate = new Date(checkIn);
      const selectedDate = new Date(date);
      
      if (selectedDate <= checkInDate) {
        // If selected date is before or equal to check-in, make it the new check-in
        setCheckIn(date);
        setCheckOut('');
      } else {
        // Otherwise, set as check-out
        setCheckOut(date);
      }
    }
  };

  return (
    <div className="mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 overflow-x-hidden">
      <form
        onSubmit={handleSearch}
        className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-zinc-200 shadow-sm overflow-x-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Unit Type Selector */}
          <div className="relative">
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
          {/* Check-in */}
          <div className="relative min-w-0">
            <label htmlFor="checkin" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.rates.search.checkIn}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none z-10" />
              <input
                type="date"
                id="checkin"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                onClick={() => setShowCalendar(true)}
                className="w-full max-w-full box-border pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                style={{ WebkitAppearance: 'none', appearance: 'none' }}
                required
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="relative min-w-0">
            <label htmlFor="checkout" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.rates.search.checkOut}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none z-10" />
              <input
                type="date"
                id="checkout"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                onClick={() => setShowCalendar(true)}
                min={checkIn || undefined}
                className="w-full max-w-full box-border pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                style={{ WebkitAppearance: 'none', appearance: 'none' }}
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="relative">
            <label htmlFor="guests" className="block text-sm font-medium text-zinc-700 mb-2">
              {t.rates.search.guests}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num} {num === 1 ? t.rates.search.guest : t.rates.search.guests}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>{t.rates.search.button}</span>
            </button>
          </div>
        </div>

        {/* Calendar Toggle Button */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="text-sm text-[#9D7F5F] hover:text-[#8B6F47] font-medium flex items-center gap-2 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>{showCalendar ? (t.rates.search?.hideCalendar || 'Hide Calendar') : (t.rates.search?.showCalendar || 'Show Calendar')}</span>
          </button>
        </div>

        {/* Availability Status & CTA */}
        {checkIn && checkOut && (
          <div className="mt-6 pt-6 border-t border-zinc-200">
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
      </form>

      {/* Calendar */}
      {showCalendar && (
        <AvailabilityCalendar
          unitType={unitType}
          checkIn={checkIn}
          checkOut={checkOut}
          onDateSelect={handleDateSelect}
          focusDate={calendarFocusDate}
        />
      )}
    </div>
  );
}

