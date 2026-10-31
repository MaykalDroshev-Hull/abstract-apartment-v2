import React from 'react';

/**
 * Custom tailored SVG icons for house amenities that are not available
 * or overly generic in default Lucide icon set.
 * Designed to match Lucide's 24x24 grid, 2px stroke width, round line caps and joins.
 */

// 1. Jacuzzi / Hot Tub: round basin with bubbling jets and warm steam curls
export function JacuzziIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Tub rim */}
      <path d="M2 13h20" />
      {/* Tub basin */}
      <path d="M4 13v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-3" />
      {/* Support feet */}
      <path d="M7 21v1" />
      <path d="M17 21v1" />
      {/* Water ripple */}
      <path d="M6 16c1.5.8 3 .8 4.5 0s3-.8 4.5 0 2 0 3 .5" />
      {/* Water jet bubbles */}
      <circle cx="8.5" cy="18.5" r="0.75" fill="currentColor" />
      <circle cx="15.5" cy="18.5" r="0.75" fill="currentColor" />
      {/* Warm steam rising */}
      <path d="M8 9c-.6-1.5.6-2.5 0-4" />
      <path d="M12 8c-.6-1.5.6-2.5 0-4" />
      <path d="M16 9c-.6-1.5.6-2.5 0-4" />
    </svg>
  );
}

// 2. Sauna: traditional wooden bucket (kiulu) with ladle (kippa) and aromatic steam
export function SaunaIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Bucket top rim */}
      <line x1="3" y1="12" x2="21" y2="12" />
      {/* Wooden bucket body */}
      <path d="M5 12l1.4 8a1.5 1.5 0 0 0 1.5 1.2h8.2a1.5 1.5 0 0 0 1.5-1.2L19 12" />
      {/* Wooden stave band */}
      <line x1="6.5" y1="17" x2="17.5" y2="17" />
      {/* Traditional upright wooden handle */}
      <path d="M7 12V5.5a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5V12" />
      {/* Wooden ladle dipping in */}
      <path d="M13.5 14l4.5-7.5" />
      <circle cx="18.5" cy="5.5" r="1.5" />
      {/* Steam wisps */}
      <path d="M11.5 8c-.5-1.2.5-2 0-3.5" />
      <path d="M15 7.5c-.5-1.2.5-2 0-3.5" />
    </svg>
  );
}

// 3. Pool / Thermal Pool: pool ladder entering water waves with thermal steam
export function PoolIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Pool ladder handrails */}
      <path d="M5 6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v7" />
      <path d="M11 6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v7" />
      {/* Ladder steps */}
      <line x1="8" y1="7" x2="13" y2="7" />
      <line x1="8" y1="10" x2="13" y2="10" />
      {/* Thermal steam above water on right */}
      <path d="M18 8c-.5-1.2.5-2 0-3.5" />
      <path d="M21 9c-.5-1.2.5-2 0-3.5" />
      {/* Water ripples */}
      <path d="M2 15c2.5-1.5 4.5-1.5 7 0s4.5 1.5 7 0 4.5-1.5 6 0" />
      <path d="M2 19c2.5-1.5 4.5-1.5 7 0s4.5 1.5 7 0 4.5-1.5 6 0" />
    </svg>
  );
}

// 4. BBQ / Grill: classic kettle barbecue with grate, smoke/heat, and tripod stand
export function BbqIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Grill bowl */}
      <path d="M4 11a8 8 0 0 0 16 0" />
      {/* Grill grate */}
      <line x1="3" y1="11" x2="21" y2="11" />
      {/* Handles */}
      <path d="M2 11h1" />
      <path d="M21 11h1" />
      {/* Sizzling smoke & heat */}
      <path d="M8 8c-.6-1.5.6-2.5 0-4" />
      <path d="M12 7c-.6-1.5.6-2.5 0-4" />
      <path d="M16 8c-.6-1.5.6-2.5 0-4" />
      {/* Tripod legs */}
      <line x1="7" y1="14" x2="4.5" y2="21" />
      <line x1="17" y1="14" x2="19.5" y2="21" />
      <line x1="12" y1="15" x2="12" y2="21" />
      {/* Bottom rack */}
      <line x1="7.5" y1="18.5" x2="16.5" y2="18.5" />
    </svg>
  );
}

// 5. Fireplace: hearth mantel with stone brick pillars, firewood logs, and a cozy fire
export function FireplaceIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Top mantel shelf */}
      <path d="M3 4h18" />
      {/* Fireplace outer frame */}
      <path d="M5 4v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4" />
      {/* Inner hearth arch */}
      <path d="M8 21v-6a4 4 0 0 1 8 0v7" />
      {/* Firewood log */}
      <line x1="9.5" y1="19.5" x2="14.5" y2="19.5" />
      {/* Warm flame */}
      <path d="M12 12c1 1.2 1.5 2 1.5 3a1.5 1.5 0 0 1-3 0c0-1 .5-1.8 1.5-3z" />
      {/* Brick texture accents */}
      <line x1="5" y1="9" x2="8" y2="9" />
      <line x1="16" y1="9" x2="19" y2="9" />
      <line x1="5" y1="14" x2="8" y2="14" />
      <line x1="16" y1="14" x2="19" y2="14" />
    </svg>
  );
}
