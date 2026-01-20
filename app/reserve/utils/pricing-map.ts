// Direct price mapping by month number (1-12)
// Months 1-4 and 11-12 are outside booking season (price: 0)
export const PRICING_MAP = {
  apartment: {
    5: 110,   // May
    6: 130,   // June
    7: 160,   // July
    8: 160,   // August
    9: 130,   // September
    10: 100,  // October
  },
  studio: {
    5: 80,    // May
    6: 95,    // June
    7: 120,   // July
    8: 120,   // August
    9: 95,    // September
    10: 75,   // October
  },
};
