import type { Translations } from '@/app/lib/translations/types';
import { PRICING_MAP } from './pricing-map';

export interface PriceBreakdown {
  apartmentTotal: number;
  studioTotal: number;
  combinedTotal: number;
  totalNights: number;
  freeNights: number;
  paidNights: number;
  discountAmount: number;
  finalTotal: number;
  breakdown: Array<{
    date: string;
    month: string;
    apartmentPrice: number;
    studioPrice: number;
    combinedPrice: number;
    isFree: boolean;
  }>;
}

/**
 * Extracts numeric price from a price string like "€ 110 / night" or "€ 110 / нощувка"
 */
function extractPrice(priceString: string): number {
  const match = priceString.match(/€\s*(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

/**
 * Maps month name to month number (1-12)
 * Handles English, Bulgarian, and Greek month names
 */
function getMonthNumber(monthName: string): number {
  const monthMap: Record<string, number> = {
    // English
    'may': 5,
    'june': 6,
    'july': 7,
    'august': 8,
    'september': 9,
    'october': 10,
    // Bulgarian
    'май': 5,
    'юни': 6,
    'юли': 7,
    'август': 8,
    'септември': 9,
    'октомври': 10,
    // Greek (lowercase - toLowerCase() handles Greek properly)
    'μάιος': 5,
    'ιούνιος': 6,
    'ιούλιος': 7,
    'αύγουστος': 8,
    'σεπτέμβριος': 9,
    'οκτώβριος': 10,
  };
  
  // Convert to lowercase for matching (works for English, Bulgarian, and Greek)
  const normalized = monthName.toLowerCase();
  return monthMap[normalized] || 0;
}

/**
 * Gets the cheapest price from all seasons for a property
 */
function getCheapestPrice(
  seasons: Array<{ name: string; price: string }>,
  unitType: 'apartment' | 'studio'
): number {
  if (!seasons || seasons.length === 0) {
    // Fallback to pricing map - find cheapest
    const mapPrices = Object.values(PRICING_MAP[unitType]).filter(p => p > 0);
    return mapPrices.length > 0 ? Math.min(...mapPrices) : 0;
  }
  
  const prices: number[] = [];
  
  // Extract all prices from seasons
  seasons.forEach((season) => {
    if (season && season.price) {
      const price = extractPrice(season.price);
      if (price > 0) {
        prices.push(price);
      }
    }
  });
  
  // Also check pricing map
  const mapPrices = Object.values(PRICING_MAP[unitType]).filter(p => p > 0);
  prices.push(...mapPrices);
  
  // Return cheapest price, or 0 if none found
  return prices.length > 0 ? Math.min(...prices) : 0;
}

/**
 * Gets the price for a specific month from the seasons array
 */
function getPriceForMonth(
  seasons: Array<{ name: string; price: string }>,
  month: number,
  unitType: 'apartment' | 'studio'
): number {
  // First try direct pricing map (fallback)
  if (PRICING_MAP[unitType][month as keyof typeof PRICING_MAP[typeof unitType]]) {
    return PRICING_MAP[unitType][month as keyof typeof PRICING_MAP[typeof unitType]];
  }
  
  // Try to extract from translations
  if (!seasons || seasons.length === 0) {
    // If no seasons, use cheapest from pricing map
    const mapPrices = Object.values(PRICING_MAP[unitType]).filter(p => p > 0);
    return mapPrices.length > 0 ? Math.min(...mapPrices) : 0;
  }
  
  const season = seasons.find((s) => {
    if (!s || !s.name || !s.price) {
      return false;
    }
    const seasonMonth = getMonthNumber(s.name);
    return seasonMonth === month;
  });
  
  if (!season) {
    // If no season found for this month, use cheapest price instead of 0
    return getCheapestPrice(seasons, unitType);
  }
  
  const price = extractPrice(season.price);
  if (price === 0 && season.price) {
    // Fallback to direct map if extraction fails
    const mapPrice = PRICING_MAP[unitType][month as keyof typeof PRICING_MAP[typeof unitType]];
    if (mapPrice) {
      return mapPrice;
    }
    // If map also fails, use cheapest price
    return getCheapestPrice(seasons, unitType);
  }
  
  return price;
}

/**
 * Calculates the total price for a stay based on seasonal rates
 * @param checkIn - Check-in date in YYYY-MM-DD format
 * @param checkOut - Check-out date in YYYY-MM-DD format
 * @param unitType - Type of unit: 'apartment', 'studio', or 'both'
 * @param translations - Translations object containing rates data
 * @returns Price breakdown with totals and per-night details
 */
export function calculateStayPrice(
  checkIn: string,
  checkOut: string,
  unitType: 'apartment' | 'studio' | 'both',
  translations: Translations
): PriceBreakdown {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  
  // Validate dates
  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    throw new Error('Invalid date format');
  }
  
  if (checkOutDate <= checkInDate) {
    throw new Error('Check-out date must be after check-in date');
  }
  
  const apartmentSeasons = translations.rates.units.apartment.seasons;
  const studioSeasons = translations.rates.units.studio.seasons;
  
  // Validate that seasons data exists
  if (!apartmentSeasons || !studioSeasons || apartmentSeasons.length === 0 || studioSeasons.length === 0) {
    console.error('Seasons data not found in translations');
    throw new Error('Pricing data not available');
  }
  
  const breakdown: PriceBreakdown['breakdown'] = [];
  let totalNights = 0;
  
  // First pass: calculate all nights and prices
  const currentDate = new Date(checkInDate);
  while (currentDate < checkOutDate) {
    const month = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const dateStr = currentDate.toISOString().split('T')[0];
    
    // Get prices for this month
    const apartmentPrice = getPriceForMonth(apartmentSeasons, month, 'apartment');
    const studioPrice = getPriceForMonth(studioSeasons, month, 'studio');
    const combinedPrice = apartmentPrice + studioPrice;
    
    // Get month name for display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[month - 1];
    
    breakdown.push({
      date: dateStr,
      month: monthName,
      apartmentPrice,
      studioPrice,
      combinedPrice,
      isFree: false, // Will be set in second pass
    });
    
    totalNights++;
    
    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  // Calculate promotion: for every 7 nights, get 1 night free (repeating)
  // Formula: freeNights = Math.floor(totalNights / 7)
  const freeNights = Math.floor(totalNights / 7);
  const paidNights = totalNights - freeNights;
  
  // Check if booking spans multiple months
  const uniqueMonths = new Set(breakdown.map(night => night.month));
  const spansMultipleMonths = uniqueMonths.size > 1;
  
  // Mark free nights:
  // - If spanning multiple months: mark cheaper nights as free (from cheaper month)
  // - If single month: mark most expensive nights as free (better value)
  const sortedBreakdown = [...breakdown].sort((a, b) => {
    let priceA, priceB;
    if (unitType === 'apartment') {
      priceA = a.apartmentPrice;
      priceB = b.apartmentPrice;
    } else if (unitType === 'studio') {
      priceA = a.studioPrice;
      priceB = b.studioPrice;
    } else {
      // For "both", use combined price
      priceA = a.combinedPrice;
      priceB = b.combinedPrice;
    }
    
    // If spanning months, sort ascending (cheapest first) to mark cheaper nights as free
    // If single month, sort descending (most expensive first) to mark expensive nights as free
    return spansMultipleMonths ? priceA - priceB : priceB - priceA;
  });
  
  // Mark free nights (cheapest if spanning months, most expensive if single month)
  const freeNightDates = new Set<string>();
  for (let i = 0; i < freeNights; i++) {
    freeNightDates.add(sortedBreakdown[i].date);
  }
  
  // Update breakdown with free night status
  breakdown.forEach((night) => {
    if (freeNightDates.has(night.date)) {
      night.isFree = true;
    }
  });
  
  // Calculate totals after discount
  let apartmentTotal = 0;
  let studioTotal = 0;
  
  breakdown.forEach((night) => {
    if (!night.isFree) {
      if (unitType === 'apartment' || unitType === 'both') {
        apartmentTotal += night.apartmentPrice;
      }
      if (unitType === 'studio' || unitType === 'both') {
        studioTotal += night.studioPrice;
      }
    }
  });
  
  // Calculate discount amount (value of free nights)
  let discountAmount = 0;
  breakdown.forEach((night) => {
    if (night.isFree) {
      if (unitType === 'apartment') {
        discountAmount += night.apartmentPrice;
      } else if (unitType === 'studio') {
        discountAmount += night.studioPrice;
      } else {
        discountAmount += night.combinedPrice;
      }
    }
  });
  
  const combinedTotal = apartmentTotal + studioTotal;
  
  return {
    apartmentTotal,
    studioTotal,
    combinedTotal,
    totalNights,
    freeNights,
    paidNights,
    discountAmount,
    finalTotal: combinedTotal,
    breakdown,
  };
}
