'use client';

import { useState, useEffect } from 'react';
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  startOfWeek,
  endOfWeek,
} from 'date-fns';
import { enUS, bg, el } from 'date-fns/locale';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type UnitType = 'apartment' | 'studio' | 'both';

interface AvailabilityCalendarProps {
  unitType: UnitType;
  checkIn?: string;
  checkOut?: string;
  onDateSelect?: (date: string) => void;
  focusDate?: Date | null;
}

const localeMap: Record<string, typeof enUS> = {
  en: enUS,
  bg: bg,
  el: el,
};

export function AvailabilityCalendar({
  unitType,
  checkIn,
  checkOut,
  onDateSelect,
  focusDate,
}: AvailabilityCalendarProps) {
  const t = useTranslations();
  const { language } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedDates, setBookedDates] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  // Navigate to focus date when it changes (e.g., when search is clicked)
  useEffect(() => {
    if (focusDate) {
      setCurrentMonth(new Date(focusDate.getFullYear(), focusDate.getMonth(), 1));
    } else if (checkIn) {
      // If no focus date but check-in exists, navigate to check-in month
      const checkInDate = new Date(checkIn);
      setCurrentMonth(new Date(checkInDate.getFullYear(), checkInDate.getMonth(), 1));
    }
  }, [focusDate, checkIn]);

  useEffect(() => {
    const loadDates = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/bookings/dates?unitType=${unitType}`);

        if (!response.ok) {
          console.error('Failed to load booked dates');
          return;
        }

        const result = await response.json();

        if (result.success) {
          setBookedDates(result.bookedDates || {});
        }
      } catch (error) {
        console.error('Error loading booked dates:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDates();
  }, [unitType]);

  const locale = localeMap[language] || enUS;

  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const handlePrevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  const isAvailable = (date: Date): boolean => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return !bookedDates[dateStr];
  };

  const isSelected = (date: Date): boolean => {
    if (!checkIn && !checkOut) return false;
    const dateStr = format(date, 'yyyy-MM-dd');
    return dateStr === checkIn || dateStr === checkOut;
  };

  const isInRange = (date: Date): boolean => {
    if (!checkIn || !checkOut) return false;
    const dateStr = format(date, 'yyyy-MM-dd');
    const dateObj = new Date(dateStr);
    const checkInObj = new Date(checkIn);
    const checkOutObj = new Date(checkOut);
    return dateObj >= checkInObj && dateObj <= checkOutObj;
  };

  const isPastDay = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (date: Date) => {
    if (isPastDay(date)) return;
    const dateStr = format(date, 'yyyy-MM-dd');
    if (onDateSelect) {
      onDateSelect(dateStr);
    }
  };

  // Get weekdays in current locale
  const weekdays = Array.from({ length: 7 }, (_, i) => {
    const weekdayDate = new Date(2024, 0, i + 1); // Start from Monday
    return format(weekdayDate, 'EEEE', { locale });
  }).map(day => day.charAt(0).toUpperCase() + day.slice(1).substring(0, 2));

  // Get all days in current month view
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday as first day
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const daysInMonth = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-zinc-200 shadow-sm">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-600" />
        </button>
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">
          {format(currentMonth, 'MMMM yyyy', { locale })}
        </h3>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-zinc-600" />
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9D7F5F]"></div>
        </div>
      ) : (
        <>
          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekdays.map((day, index) => (
              <div
                key={index}
                className="text-center text-sm font-medium text-zinc-600 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((day, index) => {
              const dayStr = format(day, 'yyyy-MM-dd');
              const isCurrentMonth = isSameMonth(day, currentMonth);
              const available = isAvailable(day);
              const selected = isSelected(day);
              const inRange = isInRange(day);
              const past = isPastDay(day);
              const today = isToday(day);

              // Determine if this is the start or end of the range
              const isRangeStart = checkIn && format(day, 'yyyy-MM-dd') === checkIn;
              const isRangeEnd = checkOut && format(day, 'yyyy-MM-dd') === checkOut;
              
              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(day)}
                  disabled={past || !available}
                  className={`
                    aspect-square p-2 text-sm rounded-lg transition-colors relative
                    ${!isCurrentMonth ? 'text-zinc-300' : 'text-zinc-900'}
                    ${past ? 'opacity-50 cursor-not-allowed bg-zinc-50' : ''}
                    ${!past && available && !selected && !inRange ? 'hover:bg-zinc-100 cursor-pointer' : ''}
                    ${!past && !available ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed' : ''}
                    ${available && !past && !selected && !inRange ? 'bg-green-50 hover:bg-green-100' : ''}
                    ${selected ? 'bg-[#9D7F5F] text-white hover:bg-[#8B6F47] font-semibold z-10' : ''}
                    ${inRange && !selected ? 'bg-[#9D7F5F]/20 text-zinc-900' : ''}
                    ${today && !selected && !inRange ? 'ring-2 ring-[#9D7F5F]' : ''}
                    ${inRange && (isRangeStart || isRangeEnd) ? 'ring-2 ring-[#9D7F5F] ring-offset-1' : ''}
                  `}
                >
                  {format(day, 'd')}
                  {(isRangeStart || isRangeEnd) && checkIn && checkOut && (
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="w-full h-full rounded-lg border-2 border-[#9D7F5F]"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-zinc-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-100"></div>
              <span className="text-sm text-zinc-600">{t.rates.calendar?.available || 'Available'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-zinc-200"></div>
              <span className="text-sm text-zinc-600">{t.rates.calendar?.unavailable || 'Unavailable'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded ring-2 ring-[#9D7F5F] bg-white"></div>
              <span className="text-sm text-zinc-600">{t.rates.calendar?.today || 'Today'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#9D7F5F]"></div>
              <span className="text-sm text-zinc-600">{t.rates.calendar?.selected || 'Selected'}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
