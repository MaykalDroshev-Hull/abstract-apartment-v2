'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from '@/app/lib/translations';
import { ReservationDraft, VillaType, VillaInfo } from './types';
import { ReservationStepper } from './components/ReservationStepper';
import { VillaSelector } from './components/VillaSelector';
import { DateGuestForm } from './components/DateGuestForm';
import { GuestDetailsForm } from './components/GuestDetailsForm';
import { ReviewStep } from './components/ReviewStep';
import { ReservationSummaryCard } from './components/ReservationSummaryCard';
import { calculateStayPrice } from './utils/pricing';

function ReservePageContent() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [draft, setDraft] = useState<ReservationDraft>({
    adults: 1,
    children: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill form from URL parameters
  useEffect(() => {
    const villa = searchParams.get('villa');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const guests = searchParams.get('guests');

    if (villa && ['apartment', 'studio', 'both'].includes(villa)) {
      setDraft(prev => ({
        ...prev,
        villa: villa as VillaType,
      }));
      // Auto-advance to step 2 if villa is pre-filled
      setCurrentStep(2);
    }

    if (checkIn) {
      setDraft(prev => ({
        ...prev,
        checkIn: checkIn,
      }));
    }

    if (checkOut) {
      setDraft(prev => ({
        ...prev,
        checkOut: checkOut,
      }));
    }

    if (guests) {
      const guestCount = parseInt(guests, 10);
      if (guestCount >= 1 && guestCount <= 8) {
        setDraft(prev => ({
          ...prev,
          adults: guestCount,
          children: 0,
        }));
      }
    }

    // If all parameters are present, we can advance to step 2
    if (villa && checkIn && checkOut) {
      setCurrentStep(2);
    }
  }, [searchParams]);

  // Build villas from translations
  const VILLAS: VillaInfo[] = [
    {
      type: 'apartment',
      name: t.reserve.villa.apartment.name,
      description: t.reserve.villa.apartment.description,
      features: t.reserve.villa.apartment.features,
      maxGuests: 6,
      nightlyRate: 100, // Starting from price
    },
    {
      type: 'studio',
      name: t.reserve.villa.studio.name,
      description: t.reserve.villa.studio.description,
      features: t.reserve.villa.studio.features,
      maxGuests: 2,
      nightlyRate: 75, // Starting from price
    },
    ...(t.reserve.villa.both ? [{
      type: 'both' as VillaType,
      name: t.reserve.villa.both.name,
      description: t.reserve.villa.both.description,
      features: t.reserve.villa.both.features,
      maxGuests: 8,
      nightlyRate: 175, // Starting from price (100 + 75)
    }] : []),
  ];

  const STEPS = [
    { id: 1, label: t.reserve.steps.villa },
    { id: 2, label: t.reserve.steps.dates },
    { id: 3, label: t.reserve.steps.details },
    { id: 4, label: t.reserve.steps.review },
  ];

  const selectedVilla = VILLAS.find(v => v.type === draft.villa);

  const updateDraft = (updates: Partial<ReservationDraft>) => {
    setDraft(prev => ({ ...prev, ...updates }));
    // Clear errors when updating
    setErrors({});
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!draft.villa) {
        newErrors.villa = t.reserve.validation.villaRequired;
        setErrors(newErrors);
        return false;
      }
      return true;
    }

    if (step === 2) {
      if (!draft.checkIn) {
        newErrors.checkIn = t.reserve.validation.checkInRequired;
      }
      if (!draft.checkOut) {
        newErrors.checkOut = t.reserve.validation.checkOutRequired;
      }
      if (draft.checkIn && draft.checkOut) {
        const checkIn = new Date(draft.checkIn);
        const checkOut = new Date(draft.checkOut);
        if (checkOut <= checkIn) {
          newErrors.checkOut = t.reserve.validation.checkOutAfterCheckIn;
        } else {
          // Calculate number of nights
          const diffTime = checkOut.getTime() - checkIn.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays < 3) {
            newErrors.checkOut = t.reserve.validation.minimumNightsRequired;
          }
        }
      }
    }

    if (step === 3) {
      if (!draft.name || draft.name.trim() === '') {
        newErrors.name = t.reserve.validation.nameRequired;
      }
      if (!draft.email || draft.email.trim() === '') {
        newErrors.email = t.reserve.validation.emailRequired;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email)) {
        newErrors.email = t.reserve.validation.emailInvalid;
      }
      if (!draft.phone || draft.phone.trim() === '') {
        newErrors.phone = t.reserve.validation.phoneRequired;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (!validateStep(currentStep)) {
      // Validation failed - errors are already set, don't proceed
      return;
    }
    // Validation passed - proceed to next step
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top whenever step changes (including auto-advance from URL params)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Scroll to top when success message is shown
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      return;
    }

    if (!draft.checkIn || !draft.checkOut || !draft.name || !draft.email || !draft.phone || !draft.villa) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (draft.villa === 'both') {
        // Calculate prices for both units
        const priceBreakdown = calculateStayPrice(
          draft.checkIn,
          draft.checkOut,
          'both',
          t
        );

        // Create two separate bookings
        const [firstName, ...lastNameParts] = draft.name.trim().split(' ');
        const lastName = lastNameParts.join(' ') || '';
        
        const bookingData = {
          CheckInDT: draft.checkIn,
          CheckOutDT: draft.checkOut,
          FirstName: firstName,
          LastName: lastName,
          Telephone: draft.phone,
          Comments: draft.notes || '',
          PaidPrice: 0,
        };

        // Create apartment booking (ID: 1) - discount already applied in apartmentTotal
        const apartmentResponse = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...bookingData,
            apartmentid: 1,
            FullPrice: priceBreakdown.apartmentTotal, // Already includes discount
          }),
        });

        if (!apartmentResponse.ok) {
          throw new Error('Failed to create apartment booking');
        }

        // Create studio booking (ID: 2) - discount already applied in studioTotal
        const studioResponse = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...bookingData,
            apartmentid: 2,
            FullPrice: priceBreakdown.studioTotal, // Already includes discount
          }),
        });

        if (!studioResponse.ok) {
          throw new Error('Failed to create studio booking');
        }

        // Send email notification
        try {
          await fetch('/api/send-booking-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              checkIn: draft.checkIn,
              checkOut: draft.checkOut,
              firstName,
              lastName,
              telephone: draft.phone,
              email: draft.email,
              fullPrice: priceBreakdown.combinedTotal,
              paidPrice: 0,
              villaType: 'both',
              apartmentPrice: priceBreakdown.apartmentTotal,
              studioPrice: priceBreakdown.studioTotal,
              totalNights: priceBreakdown.totalNights,
              guests: (draft.adults || 0) + (draft.children || 0),
              comments: draft.notes || '',
            }),
          });
        } catch (emailError) {
          console.error('Error sending email notification:', emailError);
          // Don't fail the booking if email fails
        }
      } else if (draft.villa === 'apartment' || draft.villa === 'studio') {
        // Single booking for apartment or studio
        const apartmentId = draft.villa === 'apartment' ? 1 : 2;
        
        // Calculate price for single unit
        const priceBreakdown = calculateStayPrice(
          draft.checkIn,
          draft.checkOut,
          draft.villa,
          t
        );
        
        const [firstName, ...lastNameParts] = draft.name.trim().split(' ');
        const lastName = lastNameParts.join(' ') || '';
        
        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            CheckInDT: draft.checkIn,
            CheckOutDT: draft.checkOut,
            FirstName: firstName,
            LastName: lastName,
            Telephone: draft.phone,
            Comments: draft.notes || '',
            PaidPrice: 0,
            apartmentid: apartmentId,
            FullPrice: draft.villa === 'apartment' 
              ? priceBreakdown.apartmentTotal  // Already includes discount
              : priceBreakdown.studioTotal,    // Already includes discount
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create booking');
        }

        // Send email notification
        try {
          await fetch('/api/send-booking-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              checkIn: draft.checkIn,
              checkOut: draft.checkOut,
              firstName,
              lastName,
              telephone: draft.phone,
              email: draft.email,
              fullPrice: draft.villa === 'apartment' 
                ? priceBreakdown.apartmentTotal
                : priceBreakdown.studioTotal,
              paidPrice: 0,
              villaType: draft.villa,
              totalNights: priceBreakdown.totalNights,
              guests: (draft.adults || 0) + (draft.children || 0),
              comments: draft.notes || '',
            }),
          });
        } catch (emailError) {
          console.error('Error sending email notification:', emailError);
          // Don't fail the booking if email fails
        }
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setErrors({ submit: 'Failed to submit booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F2ED] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-zinc-200 p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-serif text-zinc-900 mb-4">{t.reserve.success.title}</h1>
            <p className="text-lg text-zinc-700 mb-8">
              {t.reserve.success.message}
            </p>
            <p className="text-sm text-zinc-600 mb-8">
              {t.reserve.success.note}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium hover:bg-[#8B6F47] transition-colors"
              >
                {t.reserve.success.backHome}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
              >
                {t.reserve.success.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-zinc-900 mb-2">{t.reserve.title}</h1>
          <p className="text-zinc-600">{t.reserve.subtitle}</p>
        </div>

        <ReservationStepper currentStep={currentStep} steps={STEPS} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8">
              {currentStep === 1 && (
                <VillaSelector
                  selectedVilla={draft.villa}
                  onSelect={(villa) => updateDraft({ villa })}
                  villas={VILLAS}
                  onNext={handleNext}
                  onBack={currentStep > 1 ? handleBack : undefined}
                  canGoBack={currentStep > 1}
                />
              )}

              {currentStep === 2 && (
                <DateGuestForm
                  draft={draft}
                  selectedVilla={draft.villa}
                  onUpdate={updateDraft}
                  errors={errors}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {currentStep === 3 && (
                <GuestDetailsForm
                  draft={draft}
                  selectedVilla={draft.villa}
                  onUpdate={updateDraft}
                  errors={errors}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {currentStep === 4 && (
                <ReviewStep
                  draft={draft}
                  villaInfo={selectedVilla}
                  onSubmit={handleSubmit}
                  onBack={handleBack}
                  isSubmitting={isSubmitting}
                />
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <ReservationSummaryCard draft={draft} villaInfo={selectedVilla} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReservePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F2ED] py-8 md:py-12 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9D7F5F]"></div>
      </div>
    }>
      <ReservePageContent />
    </Suspense>
  );
}

