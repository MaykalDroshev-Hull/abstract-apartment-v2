'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BottomCtasProps {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
}

export function BottomCtas({ primaryText, primaryHref, secondaryText, secondaryHref }: BottomCtasProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-zinc-200">
      <Link
        href={primaryHref}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium hover:bg-[#8B6F47] transition-colors"
      >
        {primaryText}
        <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        href={secondaryHref}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
      >
        {secondaryText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

