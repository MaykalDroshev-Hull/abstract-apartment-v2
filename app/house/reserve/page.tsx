'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/lib/translations';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  PawPrint,
  Check,
  Phone,
  MessageCircle,
} from 'lucide-react';

function ReserveFormInner() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(8);
  const [children, setChildren] = useState(2);
  const [hasPets, setHasPets] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Pre-fill from query params if available
  useEffect(() => {
    const qCheckIn = searchParams.get('checkIn');
    const qCheckOut = searchParams.get('checkOut');
    if (qCheckIn) setCheckIn(qCheckIn);
    if (qCheckOut) setCheckOut(qCheckOut);
  }, [searchParams]);

  const WEEKDAY_PRICE = 300;
  const WEEKEND_PRICE = 350;
  const EUR_TO_BGN = 1.95583;

  // Nights calculation helper
  const calculateDays = () => {
    if (!checkIn || !checkOut) return { weekdays: 2, weekends: 1, total: 3 };
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    if (diffTime <= 0) return { weekdays: 1, weekends: 0, total: 1 };

    let cur = new Date(start);
    let wd = 0;
    let we = 0;
    while (cur < end) {
      const day = cur.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
      if (day === 5 || day === 6) {
        we++;
      } else {
        wd++;
      }
      cur.setDate(cur.getDate() + 1);
    }
    return { weekdays: wd, weekends: we, total: wd + we };
  };

  const stayStats = calculateDays();
  const totalPriceEur = stayStats.weekdays * WEEKDAY_PRICE + stayStats.weekends * WEEKEND_PRICE;
  const totalPriceBgn = Math.round(totalPriceEur * EUR_TO_BGN);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const commentsSummary = [
      `Гости: ${adults} възрастни, ${children} деца`,
      hasPets ? 'С домашни любимци (безплатно в оградения двор)' : 'Без домашни любимци',
      notes ? `Бележки: ${notes}` : null,
    ]
      .filter(Boolean)
      .join(' | ');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          CheckInDT: checkIn,
          CheckOutDT: checkOut,
          FirstName: firstName,
          LastName: lastName,
          Telephone: phone,
          Email: email,
          FullPrice: totalPriceEur,
          PaidPrice: 0,
          Comments: commentsSummary,
          apartmentid: 3,
          cleaning_hours: null,
        }),
      });

      fetch('/api/send-booking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkIn,
          checkOut,
          firstName,
          lastName,
          telephone: phone,
          email,
          fullPrice: totalPriceEur,
          paidPrice: 0,
          villaType: 'house',
          totalNights: stayStats.total,
          guests: `${adults} възрастни, ${children} деца`,
          comments: commentsSummary,
        }),
      }).catch((err) => console.warn('Failed to send notification email:', err));

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.warn('DB booking insert returned error:', errData);
      }
    } catch (err) {
      console.error('Failed to submit house booking:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const content = {
    bg: {
      eyebrow: 'Директна резервация',
      title: 'Резервирайте Къща за гости „Абстракт“',
      subtitle:
        'Отдава се самостоятелно само цялата къща за групи до 14 души. Изберете дати, прегледайте калкулацията и изпратете запитване за директно потвърждение от собствениците.',
      summaryImageAlt:
        'Възрожденска фасада на Къща за гости „Абстракт“ в с. Голец с чардак, двор и открит отопляем басейн',
      step1Title: 'Дати и брой гости',
      step1StepNumber: 'Стъпка 1 от 2',
      step2Title: 'Данни за контакт',
      step2StepNumber: 'Стъпка 2 от 2',
      checkInLabel: 'Дата на настаняване (от 12:00 ч.)',
      checkOutLabel: 'Дата на напускане (до 11:00 ч.)',
      adultsLabel: 'Възрастни',
      formatAdults: (n: number) => (n === 1 ? '1 възрастен' : `${n} възрастни`),
      childrenLabel: 'Деца',
      formatChildren: (n: number) => (n === 1 ? '1 дете' : `${n} деца`),
      petsLabel: 'Ще пътувате ли с домашни любимци (безплатно в оградения двор)',
      firstNameLabel: 'Име',
      firstNamePlaceholder: 'Георги',
      lastNameLabel: 'Фамилия',
      lastNamePlaceholder: 'Иванов',
      phoneLabel: 'Телефон за връзка',
      emailLabel: 'Имейл адрес',
      emailPlaceholder: 'georgi@example.bg',
      notesLabel: 'Специални изисквания (незадължително)',
      notesPlaceholder: 'Приблизителен час на пристигане, повод на събитието...',
      nextBtn: 'Продължи към контакт',
      backBtn: 'Назад към дати',
      submitBtn: 'Изпрати резервация за потвърждение',
      summaryTitle: 'Обобщение на престоя',
      wholeHouseText: 'Къща за гости „Абстракт“ • Цялата къща',
      capacityText: 'Самостоятелно наемане до 14 гости (4 спални)',
      pricingText: 'Делник 300 € / Уикенд 350 € на вечер',
      totalNightsLabel: 'Общо нощувки',
      formatNights: (n: number) => (n === 1 ? '1 нощувка' : `${n} нощувки`),
      weekdaysLabel: 'Делнични (300 € / нощ)',
      weekendsLabel: 'Уикенд (350 € / нощ)',
      guestsSummaryLabel: 'Гости',
      formatGuestsSummary: (a: number, c: number) =>
        `${a === 1 ? '1 възрастен' : `${a} възрастни`}, ${c === 1 ? '1 дете' : `${c} деца`}`,
      totalEur: 'Обща стойност',
      totalBgn: 'в лева',
      bgnUnit: 'лв.',
      freeIncludedTitle: 'Включено в цената',
      freeList: [
        'Външно целогодишно топло джакузи',
        'Инфрачервена сауна и отопляем басейн',
        'Безплатни дърва за камината в механата',
        '4 частни паркоместа и оптичен Wi-Fi',
      ],
      successTitle: 'Вашата резервация е приета',
      successText:
        'Кристина и Камелия Иванови ще се свържат с вас по телефон или Viber в най-кратък срок, за да потвърдят свободните дати.',
      directCallText: 'Искате незабавно потвърждение? Обадете се или ни пишете сега:',
      kristinaName: 'Кристина Иванова',
      viberChatBtn: 'Чат във Viber',
      newRequestBtn: 'Нова заявка',
    },
    el: {
      eyebrow: 'Απευθείας κράτηση',
      title: 'Κράτηση Ξενώνα Abstract',
      subtitle:
        'Αποκλειστική ενοικίαση ολόκληρου του σπιτιού για παρέες έως 14 άτομα. Επιλέξτε ημερομηνίες, δείτε τον υπολογισμό κόστους και στείλτε αίτημα για άμεση επιβεβαίωση.',
      summaryImageAlt:
        'Πρόσοψη του Ξενώνα Abstract στο Γκόλετς με βεράντα, κήπο και πισίνα',
      step1Title: 'Ημερομηνίες και επισκέπτες',
      step1StepNumber: 'Βήμα 1 από 2',
      step2Title: 'Στοιχεία επικοινωνίας',
      step2StepNumber: 'Βήμα 2 από 2',
      checkInLabel: 'Ημερομηνία άφιξης (από 12:00)',
      checkOutLabel: 'Ημερομηνία αναχώρησης (έως 11:00)',
      adultsLabel: 'Ενήλικες',
      formatAdults: (n: number) => (n === 1 ? '1 ενήλικας' : `${n} ενήλικες`),
      childrenLabel: 'Παιδιά',
      formatChildren: (n: number) => (n === 1 ? '1 παιδί' : `${n} παιδιά`),
      petsLabel: 'Έχετε κατοικίδια (δωρεάν στον περιφραγμένο κήπο)',
      firstNameLabel: 'Όνομα',
      firstNamePlaceholder: 'Γιώργος',
      lastNameLabel: 'Επώνυμο',
      lastNamePlaceholder: 'Παπαδόπουλος',
      phoneLabel: 'Τηλέφωνο',
      emailLabel: 'Email',
      emailPlaceholder: 'name@example.com',
      notesLabel: 'Ειδικά αιτήματα (προαιρετικά)',
      notesPlaceholder: 'Εκτιμώμενη ώρα άφιξης, περίσταση εκδήλωσης...',
      nextBtn: 'Συνέχεια στα στοιχεία',
      backBtn: 'Πίσω στις ημερομηνίες',
      submitBtn: 'Αποστολή κράτησης',
      summaryTitle: 'Σύνοψη κράτησης',
      wholeHouseText: 'Ξενώνας Abstract • Ολόκληρο το σπίτι',
      capacityText: 'Έως 14 άτομα (4 υπνοδωμάτια)',
      pricingText: 'Καθημερινές 300 € / Σαββατοκύριακο 350 € ανά βράδυ',
      totalNightsLabel: 'Σύνολο διανυκτερεύσεων',
      formatNights: (n: number) => (n === 1 ? '1 διανυκτέρευση' : `${n} διανυκτερεύσεις`),
      weekdaysLabel: 'Καθημερινές (300 € / βράδυ)',
      weekendsLabel: 'Σαββατοκύριακο (350 € / βράδυ)',
      guestsSummaryLabel: 'Επισκέπτες',
      formatGuestsSummary: (a: number, c: number) =>
        `${a === 1 ? '1 ενήλικας' : `${a} ενήλικες`}, ${c === 1 ? '1 παιδί' : `${c} παιδιά`}`,
      totalEur: 'Συνολικό ποσό',
      totalBgn: 'σε BGN',
      bgnUnit: 'BGN',
      freeIncludedTitle: 'Περιλαμβάνονται δωρεάν',
      freeList: [
        'Εξωτερικό θερμαινόμενο τζακούζι όλο τον χρόνο',
        'Σάουνα υπερύθρων και πισίνα',
        'Δωρεάν ξύλα για το τζάκι',
        '4 θέσεις στάθμευσης και Wi-Fi',
      ],
      successTitle: 'Η κράτησή σας παραλήφθηκε',
      successText:
        'Η Κριστίνα και η Καμέλια Ιβάνοβα θα επικοινωνήσουν άμεσα μαζί σας για την επιβεβαίωση.',
      directCallText: 'Για άμεση εξυπηρέτηση, καλέστε μας:',
      kristinaName: 'Κριστίνα Ιβάνοβα',
      viberChatBtn: 'Συνομιλία στο Viber',
      newRequestBtn: 'Νέο αίτημα',
    },
    en: {
      eyebrow: 'Direct reservation',
      title: 'Book Abstract Guest House',
      subtitle:
        'Exclusive whole-house rental for your group of up to 14 guests. Select your dates, review the live breakdown, and reserve directly with the owners.',
      summaryImageAlt:
        'Bulgarian Revival facade of Guest House Abstract in Golets with glazed veranda, enclosed garden, and heated outdoor pool',
      step1Title: 'Dates & Guest Count',
      step1StepNumber: 'Step 1 of 2',
      step2Title: 'Guest Contact Details',
      step2StepNumber: 'Step 2 of 2',
      checkInLabel: 'Check-in Date (from 12:00 PM)',
      checkOutLabel: 'Check-out Date (by 11:00 AM)',
      adultsLabel: 'Adults',
      formatAdults: (n: number) => (n === 1 ? '1 adult' : `${n} adults`),
      childrenLabel: 'Children',
      formatChildren: (n: number) => (n === 1 ? '1 child' : `${n} children`),
      petsLabel: 'Traveling with pets (free in the securely fenced garden)',
      firstNameLabel: 'First Name',
      firstNamePlaceholder: 'John',
      lastNameLabel: 'Last Name',
      lastNamePlaceholder: 'Smith',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      notesLabel: 'Special Requests (optional)',
      notesPlaceholder: 'Estimated arrival time, celebration occasion...',
      nextBtn: 'Continue to Contact',
      backBtn: 'Back to Dates',
      submitBtn: 'Send Reservation Request',
      summaryTitle: 'Booking Summary',
      wholeHouseText: 'Abstract Guest House • Entire Estate',
      capacityText: 'Exclusive capacity up to 14 guests (4 bedrooms)',
      pricingText: 'Weekdays 300 € / Weekends 350 € per night',
      totalNightsLabel: 'Total Nights',
      formatNights: (n: number) => (n === 1 ? '1 night' : `${n} nights`),
      weekdaysLabel: 'Weekdays (300 € / night)',
      weekendsLabel: 'Weekends (350 € / night)',
      guestsSummaryLabel: 'Guests',
      formatGuestsSummary: (a: number, c: number) =>
        `${a === 1 ? '1 adult' : `${a} adults`}, ${c === 1 ? '1 child' : `${c} children`}`,
      totalEur: 'Total Amount',
      totalBgn: 'in BGN',
      bgnUnit: 'BGN',
      freeIncludedTitle: 'Included in Your Stay',
      freeList: [
        'Year-round outdoor hot tub jacuzzi',
        'Infrared sauna & heated swimming pool',
        'Unlimited firewood for the fireplace & BBQ',
        '4 dedicated parking spots & high-speed Wi-Fi',
      ],
      successTitle: 'Reservation Request Received',
      successText:
        'Kristina and Kameliya Ivanova will contact you promptly by phone or Viber to confirm your dates.',
      directCallText: 'Prefer instant confirmation? Call or message via Viber:',
      kristinaName: 'Kristina Ivanova',
      viberChatBtn: 'Chat on Viber',
      newRequestBtn: 'New Request',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header: Clean tracked eyebrow, no pill badge, text-balance headline */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
        <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
          {t.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-4">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-start">
        {/* Left Form: Un-slopped architectural container (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-300/80 bg-white/70 p-6 sm:p-10 backdrop-blur-xs">
          {submitted ? (
            <div role="status" aria-live="polite" className="py-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-2">
                  {t.successTitle}
                </h2>
                <p className="text-sm text-zinc-700 max-w-md mx-auto mb-8 leading-relaxed text-pretty">
                  {t.successText}
                </p>

                <div className="p-5 rounded-xl border border-zinc-300/80 bg-white/60 text-left max-w-md mx-auto mb-8">
                  <p className="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-3">
                    {t.directCallText}
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+359878112454"
                      className="flex items-center justify-between text-sm font-semibold text-zinc-900 hover:text-[#5B7A3A] transition-colors p-2 rounded-lg hover:bg-zinc-100/60"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#5B7A3A]" aria-hidden="true" />
                        <span>{t.kristinaName}</span>
                      </span>
                      <span className="tabular-nums font-bold">+359 878 112 454</span>
                    </a>
                    <a
                      href="viber://chat?number=%2B359878112454"
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#5B7A3A]" aria-hidden="true" />
                      <span>{t.viberChatBtn}</span>
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border border-zinc-300 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.98] transition-all"
                >
                  {t.newRequestBtn}
                </button>
              </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Sleek Step Progress Indicator (No pill badges) */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight text-balance">
                        {step === 1 ? t.step1Title : t.step2Title}
                      </h2>
                        <span className="text-xs font-semibold text-zinc-600 tabular-nums">
                          {step === 1 ? t.step1StepNumber : t.step2StepNumber}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-zinc-200/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#5B7A3A] transition-all duration-300 rounded-full"
                          style={{ width: step === 1 ? '50%' : '100%' }}
                        />
                      </div>
                  </div>

                  {step === 1 ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="house-reserve-checkin"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.checkInLabel}
                          </label>
                          <input
                            id="house-reserve-checkin"
                            type="date"
                            required
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors tabular-nums"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="house-reserve-checkout"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.checkOutLabel}
                          </label>
                          <input
                            id="house-reserve-checkout"
                            type="date"
                            required
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors tabular-nums"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="house-reserve-adults"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.adultsLabel}
                          </label>
                          <select
                            id="house-reserve-adults"
                            value={adults}
                            onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors"
                          >
                            {[...Array(11)].map((_, i) => (
                              <option key={i} value={i}>
                                {t.formatAdults(i)}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="house-reserve-children"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.childrenLabel}
                          </label>
                          <select
                            id="house-reserve-children"
                            value={children}
                            onChange={(e) => setChildren(parseInt(e.target.value, 10))}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors"
                          >
                            {[...Array(7)].map((_, i) => (
                              <option key={i} value={i}>
                                {t.formatChildren(i)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Pet Policy Row (No nested box slop) */}
                      <label
                        htmlFor="house-reserve-pets"
                        className="p-4 rounded-xl border border-zinc-300/80 bg-white/60 flex items-center justify-between cursor-pointer hover:border-[#5B7A3A]/60 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <PawPrint className="w-5 h-5 text-[#5B7A3A] shrink-0" aria-hidden="true" />
                          <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                            {t.petsLabel}
                          </span>
                        </div>
                        <input
                          id="house-reserve-pets"
                          type="checkbox"
                          checked={hasPets}
                          onChange={(e) => setHasPets(e.target.checked)}
                          className="w-5 h-5 accent-[#5B7A3A] cursor-pointer shrink-0"
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full py-3.5 rounded-xl bg-[#5B7A3A] text-white font-semibold text-sm hover:bg-[#4d6831] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                      >
                        <span>{t.nextBtn}</span>
                        <ArrowRight className="w-4 h-4 translate-y-[0.5px]" aria-hidden="true" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="house-reserve-firstname"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.firstNameLabel}
                          </label>
                          <input
                            id="house-reserve-firstname"
                            type="text"
                            required
                            autoComplete="given-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={t.firstNamePlaceholder}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="house-reserve-lastname"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.lastNameLabel}
                          </label>
                          <input
                            id="house-reserve-lastname"
                            type="text"
                            required
                            autoComplete="family-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder={t.lastNamePlaceholder}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="house-reserve-phone"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.phoneLabel}
                          </label>
                          <input
                            id="house-reserve-phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+359 888 123 456"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors tabular-nums"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="house-reserve-email"
                            className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                          >
                            {t.emailLabel}
                          </label>
                          <input
                            id="house-reserve-email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t.emailPlaceholder}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="house-reserve-notes"
                          className="block text-xs font-bold text-zinc-800 tracking-tight mb-2"
                        >
                          {t.notesLabel}
                        </label>
                        <textarea
                          id="house-reserve-notes"
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder={t.notesPlaceholder}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300/90 text-sm font-medium text-zinc-900 bg-white focus:outline-none focus:border-[#5B7A3A] focus:ring-1 focus:ring-[#5B7A3A] transition-colors resize-none"
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 py-3.5 rounded-xl border border-zinc-300/90 text-zinc-700 font-semibold text-sm hover:bg-zinc-100 hover:text-zinc-900 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                        >
                          <ArrowLeft className="w-4 h-4 translate-y-[0.5px]" aria-hidden="true" />
                          <span>{t.backBtn}</span>
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-semibold text-sm hover:bg-[#4d6831] disabled:opacity-70 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                          <span>{isSubmitting ? '...' : t.submitBtn}</span>
                          <ArrowRight className="w-4 h-4 translate-y-[0.5px]" aria-hidden="true" />
                        </button>
                      </div>
                    </>
                  )}
              </form>
          )}
            </div>

        {/* Right Summary: Live breakdown receipt card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-zinc-300/80 bg-white/70 p-6 sm:p-8 backdrop-blur-xs">
              {/* Authentic Hero Photography */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-zinc-300/70">
                <Image
                  src="/Images/House/house-facade-pool-courtyard.jpg"
                  alt={t.summaryImageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>

              <h2 className="text-xl font-serif font-bold text-zinc-900 tracking-tight text-balance mb-4">
                {t.summaryTitle}
              </h2>

              <div aria-live="polite" className="space-y-4 mb-6">
                {/* Villa Spec Block: R_inner = 16 - 6 = 10px */}
                <div className="p-4 rounded-[10px] border border-zinc-200/80 bg-white/60">
                  <p className="font-bold text-sm text-zinc-900 tracking-tight">{t.wholeHouseText}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{t.capacityText}</p>
                  <p className="text-xs text-[#5B7A3A] font-semibold mt-1 tabular-nums">
                    {t.pricingText}
                  </p>
                </div>

                {/* Nights & Guests Breakdown (Tabular Numbers) */}
                <div className="space-y-2 text-xs sm:text-sm text-zinc-700">
                  <div className="flex justify-between items-center">
                    <span>{t.totalNightsLabel}</span>
                    <span className="font-semibold text-zinc-900 tabular-nums">
                      {t.formatNights(stayStats.total)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t.weekdaysLabel}</span>
                    <span className="font-semibold text-zinc-900 tabular-nums">
                      {stayStats.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t.weekendsLabel}</span>
                    <span className="font-semibold text-zinc-900 tabular-nums">
                      {stayStats.weekends}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t.guestsSummaryLabel}</span>
                    <span className="font-semibold text-zinc-900">
                      {t.formatGuestsSummary(adults, children)}
                    </span>
                  </div>
                </div>

                {/* Total Calculation */}
                <div className="pt-4 border-t border-zinc-200/80">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-bold text-zinc-800">{t.totalEur}</span>
                    <span className="text-3xl font-serif font-bold text-zinc-900 tracking-tight tabular-nums">
                      {totalPriceEur} €
                    </span>
                  </div>
                  <div className="flex justify-end text-xs text-zinc-600 tabular-nums">
                    <span>
                      ({t.totalBgn} ~{totalPriceBgn} {t.bgnUnit})
                    </span>
                  </div>
                </div>
              </div>

              {/* Complimentary Amenities */}
              <div className="pt-4 border-t border-zinc-200/80">
                <p className="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2.5">
                  {t.freeIncludedTitle}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
                  {t.freeList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 text-[#5B7A3A] shrink-0 translate-y-[1px]"
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}

export default function HouseReservePage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="min-h-[400px]" aria-busy="true" />}>
        <ReserveFormInner />
      </Suspense>
    </main>
  );
}
