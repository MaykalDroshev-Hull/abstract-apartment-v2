'use client';

import { useTranslations } from '@/app/lib/translations';
import { ReservationDraft, VillaType } from '../types';
import { User, Mail, Phone, Globe } from 'lucide-react';

interface GuestDetailsFormProps {
  draft: ReservationDraft;
  selectedVilla?: VillaType;
  onUpdate: (updates: Partial<ReservationDraft>) => void;
  errors: {
    name?: string;
    email?: string;
    phone?: string;
  };
  onNext: () => void;
  onBack: () => void;
}

export function GuestDetailsForm({ draft, selectedVilla, onUpdate, errors, onNext, onBack }: GuestDetailsFormProps) {
  const t = useTranslations();
  
  // Show child bed suggestion for apartment or both
  const showChildBedSuggestion = selectedVilla === 'apartment' || selectedVilla === 'both';
  const childBedSuggestion = showChildBedSuggestion ? t.reserve.details.childBedSuggestion : '';
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-zinc-900 mb-6">{t.reserve.details.title}</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            {t.reserve.details.fullName} <span className="text-red-500">{t.reserve.details.required}</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={draft.name || ''}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.name ? 'border-red-300' : 'border-zinc-300'
            } focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            {t.reserve.details.email} <span className="text-red-500">{t.reserve.details.required}</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={draft.email || ''}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.email ? 'border-red-300' : 'border-zinc-300'
            } focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
            <Phone className="w-4 h-4 inline mr-1" />
            {t.reserve.details.phone} <span className="text-red-500">{t.reserve.details.required}</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={draft.phone || ''}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.phone ? 'border-red-300' : 'border-zinc-300'
            } focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent`}
            placeholder="+1 234 567 8900"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-zinc-700 mb-2">
            <Globe className="w-4 h-4 inline mr-1" />
            {t.reserve.details.countryOptional}
          </label>
          <input
            type="text"
            id="country"
            value={draft.country || ''}
            onChange={(e) => onUpdate({ country: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent"
            placeholder="United States"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-zinc-700 mb-2">
            {t.reserve.details.notesOptional}
          </label>
          <textarea
            id="notes"
            rows={4}
            value={draft.notes || ''}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent resize-none"
            placeholder={childBedSuggestion || "Any special requests or notes for your stay..."}
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
        <p className="text-sm text-zinc-700">
          {t.reserve.details.note}
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-6 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          {t.reserve.buttons.goBack}
        </button>
        <button
          onClick={onNext}
          className="flex-1 rounded-lg bg-[#9D7F5F] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6F47]"
        >
          {t.reserve.buttons.ok}
        </button>
      </div>
    </div>
  );
}

