'use client';

import { useTranslations } from '@/app/lib/translations';
import { VillaType, VillaInfo } from '../types';

interface VillaSelectorProps {
  selectedVilla?: VillaType;
  onSelect: (villa: VillaType) => void;
  villas: VillaInfo[];
  onNext: () => void;
  onBack?: () => void;
  canGoBack: boolean;
}

export function VillaSelector({ selectedVilla, onSelect, villas, onNext, onBack, canGoBack }: VillaSelectorProps) {
  const t = useTranslations();
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-zinc-900 mb-6">{t.reserve.villa.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {villas.map((villa) => (
          <button
            key={villa.type}
            onClick={() => onSelect(villa.type)}
            className={`text-left p-6 rounded-2xl border-2 transition-all ${
              selectedVilla === villa.type
                ? 'border-[#9D7F5F] bg-[#9D7F5F]/5'
                : 'border-zinc-200 bg-white hover:border-zinc-300'
            }`}
          >
            <h3 className="text-xl font-serif text-zinc-900 mb-2">{villa.name}</h3>
            <p className="text-sm text-zinc-600 mb-4">{villa.description}</p>
            <ul className="space-y-2">
              {villa.features.map((feature, index) => (
                <li key={index} className="text-sm text-zinc-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-zinc-200">
              {villa.nightlyRate > 0 ? (
                <>
                  <span className="text-sm text-zinc-600 mr-1">{t.reserve.villa.from}</span>
                  <span className="text-lg font-semibold text-[#9D7F5F]">
                    €{villa.nightlyRate}
                  </span>
                  <span className="text-sm text-zinc-600 ml-1">{t.reserve.villa.perNight}</span>
                </>
              ) : (
                <span className="text-sm text-zinc-600">
                  {t.reserve.villa.perNight} (varies by season)
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-4 pt-6">
        {canGoBack && onBack && (
          <button
            onClick={onBack}
            className="flex-1 rounded-lg border border-zinc-300 bg-white px-6 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            {t.reserve.buttons.goBack}
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!selectedVilla}
          className={`${canGoBack && onBack ? 'flex-1' : 'w-full'} rounded-lg bg-[#9D7F5F] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6F47] disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {t.reserve.buttons.ok}
        </button>
      </div>
    </div>
  );
}

