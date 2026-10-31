'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/lib/translations';
import { 
  CheckCircle2, 
  ArrowRight,
  Dog
} from 'lucide-react';

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.277 3.277" className={className} aria-hidden="true">
      <path d="M1.678 2.21c-.228.003-.476-.003-.724-.018-.026-.003-.04.01-.056.026l-.194.215c-.01.01-.02.03-.038.023s-.01-.028-.01-.043v-.18c.003-.046-.008-.07-.06-.07a1.26 1.26 0 0 1-.194-.023c-.22-.05-.368-.17-.39-.422-.01-.11-.018-.217 0-.327A.43.43 0 0 1 .402.999C.73.945 1.06.927 1.39.922l1.036.023a3.25 3.25 0 0 1 .496.064c.197.04.33.192.348.396a1.48 1.48 0 0 1-.005.353.41.41 0 0 1-.253.33c-.125.054-.258.072-.39.082l-.94.038z" fill="#7c529e"/>
      <g fill="#fff">
        <path d="M.834 1.874c.046 0 .1-.043.115-.087s-.015-.06-.04-.08C.89 1.692.87 1.68.852 1.666.813 1.638.777 1.638.75 1.682c-.015.026-.038.026-.06.015-.064-.03-.115-.074-.146-.14C.53 1.528.53 1.5.56 1.48c.015-.01.033-.023.03-.05-.003-.03-.077-.136-.107-.146a.05.05 0 0 0-.038 0c-.07.023-.1.082-.072.148.082.205.23.345.43.432.013.005.026.005.03.008zm-.148-.6c-.01.003-.033-.008-.033.015 0 .015.018.013.03.015a.24.24 0 0 1 .233.24c.003.013-.003.033.015.036s.015-.02.015-.033a.28.28 0 0 0-.261-.274zm1.06.302v-.217c0-.043.015-.08.064-.08s.06.033.06.077v.028c0 .066 0 .066.06.05a.17.17 0 0 1 .207.084c.05.092.054.184 0 .276s-.156.12-.248.064c-.015-.01-.02-.015-.033.003-.018.026-.046.028-.074.015s-.036-.038-.036-.07zm.304.08c0-.07-.038-.12-.09-.123s-.095.046-.095.115.038.12.09.123.095-.046.095-.115zm-.765.003l.107-.29.018-.046c.015-.036.04-.056.082-.04s.05.05.036.09l-.125.325-.054.136c-.01.026-.028.046-.06.05-.036 0-.054-.02-.064-.05l-.18-.455c-.015-.04-.008-.077.038-.092s.066.013.082.05l.118.325zm1.17.036h-.11c-.028 0-.03.013-.018.033.023.043.09.06.146.04.02-.008.038-.018.06-.028.028-.015.054-.013.072.015s.008.056-.018.074c-.082.056-.17.074-.263.036s-.128-.115-.128-.21c-.003-.123.082-.22.192-.233s.212.066.233.182c.013.064-.005.087-.072.09zm-.054-.082c.01 0 .023.003.033 0 .02-.003.05.013.056-.01.008-.03-.018-.054-.043-.066-.036-.018-.07-.015-.1.013-.015.015-.033.033-.026.056s.03.008.05.01c.01 0 .02-.003.03-.003z"/>
        <path d="M.834 1.874C.826 1.87.816 1.87.803 1.866.6 1.78.455 1.638.373 1.434c-.028-.07 0-.125.072-.148a.05.05 0 0 1 .038 0c.03.01.105.115.107.146.003.023-.015.036-.03.05-.03.02-.03.046-.018.077a.27.27 0 0 0 .146.141c.023.01.046.01.06-.015.028-.043.064-.04.102-.015a.45.45 0 0 1 .056.041c.026.02.056.036.04.08s-.07.087-.115.087zm1.828-.228v-.153c0-.028.01-.05.036-.06s.056-.01.074.013.023.013.036 0c.018-.015.04-.023.067-.02s.046.02.05.05-.005.05-.028.056c-.105.026-.12.097-.11.19a.41.41 0 0 1-.003.097c-.005.038-.028.06-.067.06s-.054-.028-.056-.064v-.164zm-1.09.02V1.52c0-.04.018-.066.06-.066s.06.026.06.064v.294c0 .04-.02.067-.06.067s-.06-.028-.06-.07zm-.887-.394a.28.28 0 0 1 .261.274c0 .013.005.033-.015.033s-.015-.02-.015-.036a.24.24 0 0 0-.233-.24c-.013-.003-.03 0-.03-.015.003-.023.023-.013.033-.015zm1.018.074c-.005.038-.023.064-.064.066s-.07-.028-.07-.066.033-.072.07-.07.06.028.064.07z"/>
        <path d="M.875 1.52c-.003.01.005.028-.013.03-.023.003-.018-.018-.02-.03-.015-.09-.046-.123-.138-.143-.013-.003-.033 0-.03-.02s.023-.013.036-.01c.092.01.166.087.166.174z"/>
        <path d="M.806 1.505c0 .01 0 .023-.015.026-.01 0-.015-.008-.018-.018C.77 1.475.75 1.454.71 1.45.7 1.447.688 1.444.693 1.43c.003-.01.013-.01.023-.01.043-.003.09.043.09.087z"/>
      </g>
    </svg>
  );
}

function ReserveFormInner() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

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

  // Simple nights calculation helper
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
  const totalPriceEur = (stayStats.weekdays * WEEKDAY_PRICE) + (stayStats.weekends * WEEKEND_PRICE);
  const totalPriceBgn = Math.round(totalPriceEur * EUR_TO_BGN);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = {
    bg: {
      eyebrow: 'ОНЛАЙН РЕЗЕРВАЦИЯ',
      title: 'Резервирайте Къща за гости „Абстракт“',
      subtitle: 'Отдава се самостоятелно само цялата къща (до 14 гости). Изберете дати, вижте точната калкулация и изпратете запитване за директно потвърждение.',
      summaryImageAlt: 'Възрожденска фасада на Къща за гости „Абстракт“ в с. Голец с остъклен чардак, ограден зелен двор и отопляем открит басейн',
      step1Title: '1. Детайли за престоя',
      step1Badge: 'Стъпка 1 от 2',
      step2Title: '2. Данни за контакт',
      step2Badge: 'Стъпка 2 от 2',
      checkInLabel: 'Дата на настаняване (от 12:00 ч.):',
      checkOutLabel: 'Дата на напускане (до 11:00 ч.):',
      adultsLabel: 'Възрастни (8-10):',
      formatAdults: (n: number) => (n === 1 ? '1 възрастен' : `${n} възрастни`),
      childrenLabel: 'Деца (0-4):',
      formatChildren: (n: number) => (n === 1 ? '1 дете' : `${n} деца`),
      petsLabel: 'Ще пътувате ли с домашни любимци? (Безплатно в оградения двор)',
      firstNameLabel: 'Име:',
      firstNamePlaceholder: 'Георги',
      lastNameLabel: 'Фамилия:',
      lastNamePlaceholder: 'Иванов',
      phoneLabel: 'Телефон:',
      emailLabel: 'Имейл:',
      emailPlaceholder: 'georgi@primer.bg',
      notesLabel: 'Бележки / Специални изисквания:',
      notesPlaceholder: 'Приблизителен час на пристигане, повод на събитието...',
      nextBtn: 'Продължи към данни за контакт',
      backBtn: 'Назад към дати',
      submitBtn: 'Изпрати резервация за потвърждение',
      summaryTitle: 'Обобщение на резервацията',
      wholeHouseText: 'Къща за гости „Абстракт“ • Цялата къща',
      capacityText: 'Максимален капацитет до 14 гости (4 спални)',
      pricingText: 'Делник 300 € / Уикенд 350 €',
      totalNightsLabel: 'Общо нощувки:',
      formatNights: (n: number) => (n === 1 ? '1 нощувка' : `${n} нощувки`),
      weekdaysLabel: 'Делнични (300 € / вечер):',
      weekendsLabel: 'Уикенд (350 € / вечер):',
      guestsSummaryLabel: 'Гости:',
      formatGuestsSummary: (a: number, c: number) =>
        `${a === 1 ? '1 възрастен' : `${a} възрастни`}, ${c === 1 ? '1 дете' : `${c} деца`}`,
      totalEur: 'Обща стойност:',
      totalBgn: 'в лева:',
      bgnUnit: 'лв.',
      freeIncludedTitle: 'Включено безплатно:',
      freeList: [
        'Външно целогодишно горещо джакузи',
        'Инфрачервена сауна и отопляем басейн',
        'Безплатни дърва за камината в механата',
        '4 частни паркоместа и бърз Wi-Fi',
      ],
      successTitle: 'Вашата резервация е приета!',
      successText: 'Кристина и Камелия Иванови ще се свържат с вас по телефон или Viber в най-кратък срок, за да потвърдят свободните дати.',
      directCallText: 'Искате незабавно потвърждение? Обадете се или ни пишете сега:',
      kristinaName: 'Кристина Иванова',
      viberChatBtn: 'Чат във Viber',
      newRequestBtn: 'Нова заявка',
    },
    el: {
      eyebrow: 'ΗΛΕΚΤΡΟΝΙΚΗ ΚΡΑΤΗΣΗ',
      title: 'Κράτηση Ξενώνα Abstract',
      subtitle: 'Αποκλειστική ενοικίαση ολόκληρου του σπιτιού (έως 14 άτομα). Επιλέξτε ημερομηνίες, δείτε τον υπολογισμό κόστους και στείλτε αίτημα για άμεση επιβεβαίωση.',
      summaryImageAlt: 'Παραδοσιακή πρόσοψη του Ξενώνα Abstract στο Γκόλετς με ξύλινη βεράντα, καταπράσινο κήπο και θερμαινόμενη πισίνα',
      step1Title: '1. Ημερομηνίες διαμονής',
      step1Badge: 'Βήμα 1 από 2',
      step2Title: '2. Στοιχεία επικοινωνίας',
      step2Badge: 'Βήμα 2 από 2',
      checkInLabel: 'Ημερομηνία άφιξης (από 12:00):',
      checkOutLabel: 'Ημερομηνία αναχώρησης (έως 11:00):',
      adultsLabel: 'Ενήλικες (8-10):',
      formatAdults: (n: number) => (n === 1 ? '1 ενήλικας' : `${n} ενήλικες`),
      childrenLabel: 'Παιδιά (0-4):',
      formatChildren: (n: number) => (n === 1 ? '1 παιδί' : `${n} παιδιά`),
      petsLabel: 'Έχετε κατοικίδια; (Δωρεάν στον κήπο)',
      firstNameLabel: 'Όνομα:',
      firstNamePlaceholder: 'Γιώργος',
      lastNameLabel: 'Επώνυμο:',
      lastNamePlaceholder: 'Παπαδόπουλος',
      phoneLabel: 'Τηλέφωνο:',
      emailLabel: 'Email:',
      emailPlaceholder: 'name@example.com',
      notesLabel: 'Σημειώσεις / Ειδικά αιτήματα:',
      notesPlaceholder: 'Εκτιμώμενη ώρα άφιξης, περίσταση εκδήλωσης...',
      nextBtn: 'Επόμενο βήμα',
      backBtn: 'Πίσω',
      submitBtn: 'Αποστολή κράτησης',
      summaryTitle: 'Σύνοψη κράτησης',
      wholeHouseText: 'Ξενώνας Abstract • Ολόκληρο το σπίτι',
      capacityText: 'Έως 14 άτομα (4 υπνοδωμάτια)',
      pricingText: 'Καθημερινές 300 € / Σαββατοκύριακο 350 €',
      totalNightsLabel: 'Σύνολο διανυκτερεύσεων:',
      formatNights: (n: number) => (n === 1 ? '1 διανυκτέρευση' : `${n} διανυκτερεύσεις`),
      weekdaysLabel: 'Καθημερινές (300 € / βράδυ):',
      weekendsLabel: 'Σαββατοκύριακο (350 € / βράδυ):',
      guestsSummaryLabel: 'Επισκέπτες:',
      formatGuestsSummary: (a: number, c: number) =>
        `${a === 1 ? '1 ενήλικας' : `${a} ενήλικες`}, ${c === 1 ? '1 παιδί' : `${c} παιδιά`}`,
      totalEur: 'Σύνολο σε ευρώ:',
      totalBgn: 'σε BGN:',
      bgnUnit: 'BGN',
      freeIncludedTitle: 'Περιλαμβάνονται δωρεάν:',
      freeList: [
        'Εξωτερικό θερμαινόμενο τζακούζι όλο τον χρόνο',
        'Σάουνα υπερύθρων και πισίνα',
        'Δωρεάν ξύλα για το τζάκι',
        '4 θέσεις στάθμευσης και Wi-Fi',
      ],
      successTitle: 'Η κράτησή σας παραλήφθηκε!',
      successText: 'Η Κριστίνα και η Καμέλια Ιβάνοβα θα επικοινωνήσουν άμεσα μαζί σας για την επιβεβαίωση.',
      directCallText: 'Για άμεση εξυπηρέτηση, καλέστε μας:',
      kristinaName: 'Κριστίνα Ιβάνοβα',
      viberChatBtn: 'Συνομιλία στο Viber',
      newRequestBtn: 'Νέο αίτημα',
    },
    en: {
      eyebrow: 'ONLINE RESERVATION',
      title: 'Book Abstract Guest House',
      subtitle: 'Exclusive whole-house rental for your group of up to 14 guests. Select your dates, view instant calculations, and book directly.',
      summaryImageAlt: 'Bulgarian Revival facade of Guest House Abstract in Golets with glazed timber veranda, enclosed green lawn, and heated outdoor pool',
      step1Title: '1. Stay Dates & Guests',
      step1Badge: 'Step 1 of 2',
      step2Title: '2. Guest Contact Information',
      step2Badge: 'Step 2 of 2',
      checkInLabel: 'Check-in Date (from 12:00 PM):',
      checkOutLabel: 'Check-out Date (by 11:00 AM):',
      adultsLabel: 'Adults (8-10):',
      formatAdults: (n: number) => (n === 1 ? '1 adult' : `${n} adults`),
      childrenLabel: 'Children (0-4):',
      formatChildren: (n: number) => (n === 1 ? '1 child' : `${n} children`),
      petsLabel: 'Traveling with pets? (Free in the fenced garden)',
      firstNameLabel: 'First Name:',
      firstNamePlaceholder: 'John',
      lastNameLabel: 'Last Name:',
      lastNamePlaceholder: 'Smith',
      phoneLabel: 'Phone Number:',
      emailLabel: 'Email Address:',
      emailPlaceholder: 'name@example.com',
      notesLabel: 'Notes / Special Requests:',
      notesPlaceholder: 'Estimated arrival time, celebration occasion...',
      nextBtn: 'Continue to Guest Details',
      backBtn: 'Back to Dates',
      submitBtn: 'Send Reservation Request',
      summaryTitle: 'Booking Summary',
      wholeHouseText: 'Abstract Guest House • Entire Estate',
      capacityText: 'Exclusive capacity up to 14 guests (4 bedrooms)',
      pricingText: 'Weekdays 300 € / Weekends 350 €',
      totalNightsLabel: 'Total Nights:',
      formatNights: (n: number) => (n === 1 ? '1 night' : `${n} nights`),
      weekdaysLabel: 'Weekdays (300 € / night):',
      weekendsLabel: 'Weekends (350 € / night):',
      guestsSummaryLabel: 'Guests:',
      formatGuestsSummary: (a: number, c: number) =>
        `${a === 1 ? '1 adult' : `${a} adults`}, ${c === 1 ? '1 child' : `${c} children`}`,
      totalEur: 'Estimated Total:',
      totalBgn: 'in BGN:',
      bgnUnit: 'BGN',
      freeIncludedTitle: 'Included Complimentary:',
      freeList: [
        'Outdoor hot tub jacuzzi (year-round in snow)',
        'Infrared sauna & heated swimming pool',
        'Unlimited free firewood for fireplace & BBQ',
        '4 dedicated parking spots & high-speed Wi-Fi',
      ],
      successTitle: 'Reservation Request Received!',
      successText: 'Kristina and Kameliya Ivanova will contact you promptly by phone or Viber to confirm availability and arrangements.',
      directCallText: 'Prefer instant confirmation? Call or message via Viber:',
      kristinaName: 'Kristina Ivanova',
      viberChatBtn: 'Chat on Viber',
      newRequestBtn: 'New Request',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
          {t.eyebrow}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight mb-4">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div role="status" aria-live="polite" className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">{t.successTitle}</h2>
              <p className="text-zinc-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                {t.successText}
              </p>

              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-left max-w-md mx-auto mb-8">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  {t.directCallText}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+359878112454"
                    className="flex items-center justify-between text-sm font-bold text-zinc-800 hover:text-[#5B7A3A]"
                  >
                    <span>{t.kristinaName}</span>
                    <span>+359 878 112 454</span>
                  </a>
                  <a
                    href="viber://chat?number=%2B359878112454"
                    className="inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-[#7c529e] text-white text-xs font-bold hover:bg-[#6a428a] transition-colors"
                  >
                    <ViberIcon className="w-4 h-4" />
                    <span>{t.viberChatBtn}</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-zinc-300 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                {t.newRequestBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 ? (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <h2 className="text-xl font-bold text-zinc-900">{t.step1Title}</h2>
                    <span className="text-xs font-semibold text-[#5B7A3A] bg-[#5B7A3A]/10 px-3 py-1 rounded-full">
                      {t.step1Badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="house-reserve-checkin" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.checkInLabel}</label>
                      <input
                        id="house-reserve-checkin"
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="house-reserve-checkout" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.checkOutLabel}</label>
                      <input
                        id="house-reserve-checkout"
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="house-reserve-adults" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.adultsLabel}</label>
                      <select
                        id="house-reserve-adults"
                        value={adults}
                        onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50 bg-white"
                      >
                        {[...Array(11)].map((_, i) => (
                          <option key={i} value={i}>{t.formatAdults(i)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="house-reserve-children" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.childrenLabel}</label>
                      <select
                        id="house-reserve-children"
                        value={children}
                        onChange={(e) => setChildren(parseInt(e.target.value, 10))}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50 bg-white"
                      >
                        {[...Array(7)].map((_, i) => (
                          <option key={i} value={i}>{t.formatChildren(i)}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Dog className="w-5 h-5 text-[#5B7A3A]" aria-hidden="true" />
                      <label htmlFor="house-reserve-pets" className="text-xs sm:text-sm font-semibold text-zinc-800 cursor-pointer">
                        {t.petsLabel}
                      </label>
                    </div>
                    <input
                      id="house-reserve-pets"
                      type="checkbox"
                      checked={hasPets}
                      onChange={(e) => setHasPets(e.target.checked)}
                      className="w-5 h-5 accent-[#5B7A3A] cursor-pointer"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    <span>{t.nextBtn}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <h2 className="text-xl font-bold text-zinc-900">{t.step2Title}</h2>
                    <span className="text-xs font-semibold text-[#5B7A3A] bg-[#5B7A3A]/10 px-3 py-1 rounded-full">
                      {t.step2Badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="house-reserve-firstname" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.firstNameLabel}</label>
                      <input
                        id="house-reserve-firstname"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={t.firstNamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="house-reserve-lastname" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.lastNameLabel}</label>
                      <input
                        id="house-reserve-lastname"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={t.lastNamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="house-reserve-phone" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.phoneLabel}</label>
                      <input
                        id="house-reserve-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+359 888 123 456"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="house-reserve-email" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.emailLabel}</label>
                      <input
                        id="house-reserve-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="house-reserve-notes" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.notesLabel}</label>
                    <textarea
                      id="house-reserve-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t.notesPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 rounded-xl border border-zinc-300 text-zinc-700 font-medium text-sm hover:bg-zinc-50 transition-colors"
                    >
                      {t.backBtn}
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{t.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>

        {/* Right Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 border border-zinc-200/60">
              <Image
                src="/Images/House/house-facade-pool-courtyard.jpg"
                alt={t.summaryImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
            <h2 className="text-xl font-bold text-zinc-900 mb-4">{t.summaryTitle}</h2>
            
            <div aria-live="polite" className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <p className="font-bold text-sm text-zinc-900">{t.wholeHouseText}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{t.capacityText}</p>
                <p className="text-xs text-[#5B7A3A] font-semibold mt-1">{t.pricingText}</p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-zinc-600">
                <div className="flex justify-between">
                  <span>{t.totalNightsLabel}</span>
                  <span className="font-semibold text-zinc-900">{t.formatNights(stayStats.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.weekdaysLabel}</span>
                  <span className="font-semibold text-zinc-900">{stayStats.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.weekendsLabel}</span>
                  <span className="font-semibold text-zinc-900">{stayStats.weekends}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.guestsSummaryLabel}</span>
                  <span className="font-semibold text-zinc-900">{t.formatGuestsSummary(adults, children)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm font-bold text-zinc-800">{t.totalEur}</span>
                  <span className="text-3xl font-extrabold text-[#5B7A3A]">{totalPriceEur} €</span>
                </div>
                <div className="flex justify-end text-xs text-zinc-500">
                  <span>({t.totalBgn} ~{totalPriceBgn} {t.bgnUnit})</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                {t.freeIncludedTitle}
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-600">
                {t.freeList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
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
    <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="min-h-[400px]" aria-busy="true" />}>
        <ReserveFormInner />
      </Suspense>
    </div>
  );
}
