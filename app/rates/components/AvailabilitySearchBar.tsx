'use client';

import { useState } from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

export function AvailabilitySearchBar() {
  const t = useTranslations();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only for now - can be connected to backend later
    console.log('Search:', { checkIn, checkOut, guests });
  };

  return (
    <div className="mb-16 sm:mb-20 lg:mb-24 scroll-mt-24">
      <form
        onSubmit={handleSearch}
        className="bg-white dark:bg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700 shadow-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Check-in */}
          <div className="relative">
            <label htmlFor="checkin" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              {t.rates.search.checkIn}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="date"
                id="checkin"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="relative">
            <label htmlFor="checkout" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              {t.rates.search.checkOut}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="date"
                id="checkout"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || undefined}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="relative">
            <label htmlFor="guests" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              {t.rates.search.guests}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors appearance-none"
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
      </form>
    </div>
  );
}

