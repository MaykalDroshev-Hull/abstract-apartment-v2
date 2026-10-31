// Direct price mapping by month number (1-12)
// Months 1-4 and 11-12 are outside booking season (price: 0)
export const PRICING_MAP = {
  apartment: {
    5: 100,   // May
    6: 130,   // June
    7: 160,   // July
    8: 160,   // August
    9: 130,   // September
    10: 100,  // October
  },
  studio: {
    5: 80,    // May
    6: 100,   // June
    7: 110,   // July
    8: 110,   // August
    9: 100,   // September
    10: 80,   // October
  },
};
