'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
    JacuzziIcon,
    SaunaIcon,
    PoolIcon,
    FireplaceIcon,
  } from '@/app/house/components/HouseAmenityIcons';
import {
  Users,
  Home,
  Calendar,
  Clock,
  Dog,
  Music,
  Sparkles,
  ArrowRight,
  Calculator,
  ThermometerSun,
  UtensilsCrossed,
  Wifi,
  Car,
} from 'lucide-react';

export default function HouseRatesPage() {
  const { language } = useLanguage();
  const [weekdayNights, setWeekdayNights] = useState(2);
  const [weekendNights, setWeekendNights] = useState(1);

  const WEEKDAY_PRICE = 300; // EUR
  const WEEKEND_PRICE = 350; // EUR
  const EUR_TO_BGN = 1.95583;

  const totalNights = weekdayNights + weekendNights;
  const totalPriceEur = weekdayNights * WEEKDAY_PRICE + weekendNights * WEEKEND_PRICE;
  const totalPriceBgn = Math.round(totalPriceEur * EUR_TO_BGN);
  const perPersonPerNightEur = totalNights > 0 ? Math.round(totalPriceEur / totalNights / 14) : 0;

  const content = {
    bg: {
      eyebrow: 'ПРОЗРАЧНИ ЦЕНИ И УСЛОВИЯ',
      title: 'Цени за цялата къща',
      subtitle: 'Самостоятелно наемане за до 14 гости — СПА зоната, отоплението и дървата са включени.',
      weekdayTitle: 'Делничен пакет',
      weekdayDays: 'Неделя – Четвъртък',
      weekdayPrice: '300 €',
      perNightShort: '/ вечер',
      weekdayBgn: 'ок. 586 лв. / вечер',
      weekdayMin: 'Мин. 1 нощувка',
      weekdayBullets: [
        'Цялата къща за до 14 гости',
        'Горещо джакузи, сауна и дърва в цената',
        'Гъвкаво за 1+ делнични нощувки',
      ],
      weekdayCta: 'Резервирай делник',
      mostPopular: 'Най-популярен',
      weekendTitle: 'Уикенд пакет',
      weekendDays: 'Петък – Събота',
      weekendPrice: '350 €',
      weekendBgn: 'ок. 684 лв. / вечер',
      weekendMin: 'Мин. 2 нощувки',
      weekendBullets: [
        'Цялата къща за до 14 гости',
        'Джакузи, сауна, механа и барбекю',
        'Пакет петък + събота (2 нощувки)',
      ],
      weekendCta: 'Резервирай уикенд',
      calculatorTitle: 'Калкулатор за престоя',
      calculatorSubtitle: 'Плъзнете за точна сума за цялата компания.',
      weekdayLabel: 'Делнични нощувки (Неделя – Четвъртък):',
      weekendLabel: 'Уикенд нощувки (Петък – Събота):',
      totalEstimated: 'Ориентировъчна обща сума:',
      formatBgnSummary: (bgn: number, nights: number) =>
        `(${bgn} лв. за ${nights} ${nights === 1 ? 'нощувка' : 'нощувки'})`,
      continueWithConfig: 'Продължи с тези нощувки',
      perPersonText: 'При 14 гости: само',
      perNight: 'на човек / вечер',
      includedBadge: 'ВКЛЮЧЕНИ УДОБСТВА В ЦЕНАТА',
        includedTitle: 'Всичко включено без доплащане',
        includedTiles: [
          { title: 'Цялата къща', tag: 'До 14 гости' },
          { title: 'Горещо джакузи', tag: '365 дни • 5 места' },
          { title: 'Инфрачервена сауна', tag: '3 места' },
          { title: 'Отопляем басейн', tag: 'Април – Октомври' },
          { title: 'Безплатни дърва', tag: 'Камина & барбекю' },
          { title: 'Пелетно парно', tag: 'Автоматично' },
          { title: 'Пълна кухня', tag: 'Съдомиялна & кафе' },
          { title: 'Бърз Wi-Fi', tag: '+ Сателитна ТВ' },
          { title: 'Частен паркинг', tag: '4 автомобила' },
          { title: 'Домашни любимци', tag: '0 € такса' },
        ],
        policiesTitle: 'Правила накратко',
        policies: [
          { value: '12:00 / 11:00', title: 'Настаняване / Напускане', tag: 'С предварителна уговорка' },
          { value: '0 €', title: 'Домашни любимци', tag: 'Ограден сигурен двор' },
          { value: '22:00 / ∞', title: 'Двор / Механа музика', tag: 'В механата без час' },
          { value: '1 / 2', title: 'Мин. нощувки', tag: 'Делник / Уикенд' },
        ],
        bottomCtaTitle: 'Планирате специален повод?',
        bottomCtaSubtitle: 'Свържете се директно с домакините за бързо потвърждение.',
        ctaReserve: 'Резервирайте дати',
        ctaContact: 'Контакт с домакините',
    },
    el: {
      eyebrow: 'ΔΙΑΦΑΝΕΙΣ ΤΙΜΕΣ ΚΑΙ ΟΡΟΙ',
      title: 'Τιμές ολόκληρου του ξενώνα',
      subtitle: 'Αποκλειστική χρήση έως 14 άτομα — σπα, θέρμανση και καυσόξυλα περιλαμβάνονται.',
      weekdayTitle: 'Καθημερινές',
      weekdayDays: 'Κυριακή – Πέμπτη',
      weekdayPrice: '300 €',
      perNightShort: '/ νύχτα',
      weekdayBgn: 'περ. 586 BGN / νύχτα',
      weekdayMin: 'Ελάχιστο 1 νύχτα',
      weekdayBullets: [
        'Ολόκληρο το σπίτι έως 14 άτομα',
        'Τζακούζι, σάουνα & ξύλα στην τιμή',
        'Από 1 διανυκτέρευση τις καθημερινές',
      ],
      weekdayCta: 'Κράτηση καθημερινών',
      mostPopular: 'Δημοφιλέστερο',
      weekendTitle: 'Σαββατοκύριακο',
      weekendDays: 'Παρασκευή – Σάββατο',
      weekendPrice: '350 €',
      weekendBgn: 'περ. 684 BGN / νύχτα',
      weekendMin: 'Ελάχιστο 2 νύχτες',
      weekendBullets: [
        'Ολόκληρο το σπίτι έως 14 άτομα',
        'Τζακούζι, σάουνα, ταβέρνα & BBQ',
        'Πακέτο Παρασκευή + Σάββατο (2 νύχτες)',
      ],
      weekendCta: 'Κράτηση Σαββατοκύριακου',
      calculatorTitle: 'Υπολογισμός κόστους',
      calculatorSubtitle: 'Επιλέξτε διανυκτερεύσεις για άμεσο υπολογισμό.',
      weekdayLabel: 'Καθημερινές νύχτες (Κυρ – Πεμ):',
      weekendLabel: 'Νύχτες Σαββατοκύριακου (Παρ – Σαβ):',
      totalEstimated: 'Συνολικό εκτιμώμενο κόστος:',
      formatBgnSummary: (bgn: number, nights: number) =>
        `(~${bgn} BGN για ${nights} ${nights === 1 ? 'νύχτα' : 'νύχτες'})`,
      continueWithConfig: 'Συνέχεια με αυτές τις νύχτες',
      perPersonText: 'Με 14 άτομα: μόλις',
      perNight: 'ανά άτομο / νύχτα',
      includedBadge: 'ΠΑΡΟΧΕΣ ΠΟΥ ΠΕΡΙΛΑΜΒΑΝΟΝΤΑΙ',
        includedTitle: 'Όλα περιλαμβάνονται δωρεάν',
        includedTiles: [
          { title: 'Ολόκληρο σπίτι', tag: 'Έως 14 άτομα' },
          { title: 'Ζεστό τζακούζι', tag: '365 ημέρες • 5 θέσεις' },
          { title: 'Σάουνα υπερύθρων', tag: '3 θέσεις' },
          { title: 'Θερμαινόμενη πισίνα', tag: 'Απρίλιος – Οκτώβριος' },
          { title: 'Δωρεάν ξύλα', tag: 'Τζάκι & BBQ' },
          { title: 'Θέρμανση πέλλετ', tag: 'Αυτόματη' },
          { title: 'Πλήρης κουζίνα', tag: 'Πλυντήριο πιάτων' },
          { title: 'Γρήγορο Wi-Fi', tag: '+ Smart TV' },
          { title: 'Ιδιωτικό πάρκινγκ', tag: '4 αυτοκίνητα' },
          { title: 'Κατοικίδια', tag: '0 € χρέωση' },
        ],
        policiesTitle: 'Κανόνες με μια ματιά',
        policies: [
          { value: '12:00 / 11:00', title: 'Άφιξη / Αναχώρηση', tag: 'Κατόπιν συνεννόησης' },
          { value: '0 €', title: 'Κατοικίδια δωρεάν', tag: 'Περιφραγμένος κήπος' },
          { value: '22:00 / ∞', title: 'Αυλή / Ταβέρνα μουσική', tag: 'Στην ταβέρνα όλο το βράδυ' },
          { value: '1 / 2', title: 'Ελάχιστες νύχτες', tag: 'Καθημερινές / ΣΚ' },
        ],
        bottomCtaTitle: 'Σχεδιάζετε ειδική περίσταση;',
        bottomCtaSubtitle: 'Επικοινωνήστε απευθείας με τους οικοδεσπότες μας.',
        ctaReserve: 'Κάντε κράτηση',
        ctaContact: 'Επικοινωνία',
    },
    en: {
      eyebrow: 'TRANSPARENT RATES & TERMS',
      title: 'Whole-House Rental Rates',
      subtitle: 'Exclusive private estate for up to 14 guests — all spa facilities, heating, and firewood included.',
      weekdayTitle: 'Weekday Rate',
      weekdayDays: 'Sunday – Thursday',
      weekdayPrice: '300 €',
      perNightShort: '/ night',
      weekdayBgn: 'approx. 586 BGN / night',
      weekdayMin: '1-night min',
      weekdayBullets: [
        'Entire estate for up to 14 guests',
        'Hot jacuzzi, sauna & firewood included',
        'Flexible 1+ night midweek stays',
      ],
      weekdayCta: 'Book Weekday Stay',
      mostPopular: 'Most Popular',
      weekendTitle: 'Weekend Rate',
      weekendDays: 'Friday – Saturday',
      weekendPrice: '350 €',
      weekendBgn: 'approx. 684 BGN / night',
      weekendMin: '2-night min',
      weekendBullets: [
        'Entire estate for up to 14 guests',
        'Hot jacuzzi, sauna, tavern & BBQ',
        'Friday + Saturday weekend package',
      ],
      weekendCta: 'Book Weekend Stay',
      calculatorTitle: 'Quick Price Calculator',
      calculatorSubtitle: 'Slide weekday and weekend nights for an instant total.',
      weekdayLabel: 'Weekday nights (Sun – Thu):',
      weekendLabel: 'Weekend nights (Fri – Sat):',
      totalEstimated: 'Estimated Total Stay Cost:',
      formatBgnSummary: (bgn: number, nights: number) =>
        `(~${bgn} BGN for ${nights} ${nights === 1 ? 'night' : 'nights'})`,
      continueWithConfig: 'Continue with These Nights',
      perPersonText: 'At 14 guests: only',
      perNight: 'per guest / night',
      includedBadge: 'ALL-INCLUSIVE AMENITIES',
        includedTitle: 'Included Free with Every Stay',
        includedTiles: [
          { title: 'Whole Estate', tag: 'Up to 14 guests' },
          { title: 'Hot Jacuzzi', tag: '365 days • 5 seats' },
          { title: 'Infrared Sauna', tag: '3 seats' },
          { title: 'Heated Pool', tag: 'April – October' },
          { title: 'Free Firewood', tag: 'Tavern & BBQ' },
          { title: 'Pellet Heating', tag: 'Automated warmth' },
          { title: 'Full Kitchen', tag: 'Dishwasher & coffee' },
          { title: 'Fast Wi-Fi', tag: '+ Satellite TVs' },
          { title: 'Free Parking', tag: '4 cars at gate' },
          { title: 'Pets Welcome', tag: '0 € fee • Fenced' },
        ],
        policiesTitle: 'House Rules at a Glance',
        policies: [
          { value: '12:00 / 11:00', title: 'Check-in / Check-out', tag: 'By prior arrangement' },
          { value: '0 €', title: 'Pets Stay Free', tag: 'Fully fenced lawn' },
          { value: '22:00 / ∞', title: 'Outdoor / Tavern Music', tag: 'No curfew inside mehana' },
          { value: '1 / 2', title: 'Minimum Nights', tag: 'Weekday / Weekend' },
        ],
        bottomCtaTitle: 'Planning a Celebration or Retreat?',
        bottomCtaSubtitle: 'Speak directly with our hosts for fast confirmation.',
        ctaReserve: 'Book Your Stay',
        ctaContact: 'Speak with Kristina & Kameliya',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  const includedIcons = [
    Home,
    JacuzziIcon,
    SaunaIcon,
    PoolIcon,
    FireplaceIcon,
    ThermometerSun,
    UtensilsCrossed,
    Wifi,
    Car,
    Dog,
  ];
  const policyIcons = [Clock, Dog, Music, Calendar];

  return (
      <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
                {t.eyebrow}
              </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight mb-3">
                  {t.title}
                </h1>
                  <p className="text-sm sm:text-base text-zinc-600">
                    {t.subtitle}
                  </p>
                </div>

                {/* Pricing Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    {/* Weekday Card */}
                      <div className="bg-white rounded-3xl border border-zinc-200 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#5B7A3A]/40 transition-colors">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700">
                              {t.weekdayDays}
                            </span>
                              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                                {t.weekdayMin}
                              </span>
                          </div>
                          <h2 className="text-2xl font-bold text-zinc-900 mb-2">{t.weekdayTitle}</h2>
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-5xl font-serif font-extrabold text-[#5B7A3A]">{t.weekdayPrice}</span>
                            <span className="text-zinc-500 text-sm">{t.perNightShort}</span>
                          </div>
                          <p className="text-xs text-zinc-400 mb-5">{t.weekdayBgn}</p>

                          <ul className="space-y-2.5 text-sm text-zinc-700">
                            {t.weekdayBullets.map((b, i) => (
                              <li key={i} className="flex items-center gap-2.5">
                                {i === 0 && <Users className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />}
                                {i === 1 && <JacuzziIcon className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" />}
                                {i === 2 && <Calendar className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />}
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                          <div className="mt-7 pt-5 border-t border-zinc-100">
                            <Link
                              href="/house/reserve"
                              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
                            >
                              <span>{t.weekdayCta}</span>
                              <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                          </div>
                        </div>

                        {/* Weekend Card */}
                          <div className="bg-white rounded-3xl border-2 border-[#5B7A3A] p-7 sm:p-8 shadow-lg flex flex-col justify-between relative">
                            <div className="absolute -top-3 right-6 bg-[#5B7A3A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                              {t.mostPopular}
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5B7A3A]/10 text-[#5B7A3A]">
                                  {t.weekendDays}
                                </span>
                                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                                    {t.weekendMin}
                                  </span>
                              </div>
                              <h2 className="text-2xl font-bold text-zinc-900 mb-2">{t.weekendTitle}</h2>
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-5xl font-serif font-extrabold text-zinc-900">{t.weekendPrice}</span>
                                <span className="text-zinc-500 text-sm">{t.perNightShort}</span>
                              </div>
                              <p className="text-xs text-zinc-400 mb-5">{t.weekendBgn}</p>

                              <ul className="space-y-2.5 text-sm text-zinc-700">
                                {t.weekendBullets.map((b, i) => (
                                  <li key={i} className="flex items-center gap-2.5">
                                    {i === 0 && <Users className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />}
                                    {i === 1 && <JacuzziIcon className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" />}
                                    {i === 2 && <Calendar className="w-4 h-4 text-[#5B7A3A] flex-shrink-0" aria-hidden="true" />}
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                              <div className="mt-7 pt-5 border-t border-zinc-100">
                                <Link
                                  href="/house/reserve"
                                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors shadow-md"
                                >
                                  <span>{t.weekendCta}</span>
                                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Live Estimator Calculator */}
                              <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 max-w-4xl mx-auto shadow-sm mb-12">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center">
                                    <Calculator className="w-5 h-5" aria-hidden="true" />
                                  </div>
                                  <div>
                                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900">
                                      {t.calculatorTitle}
                                    </h2>
                                    <p className="text-xs sm:text-sm text-zinc-500">{t.calculatorSubtitle}</p>
                                  </div>
                                </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                                      <div className="bg-zinc-50 p-4 sm:p-5 rounded-2xl border border-zinc-200">
                                        <label htmlFor="house-weekday-nights" className="block text-sm font-semibold text-zinc-800 mb-2">
                                          {t.weekdayLabel}
                                        </label>
                                        <div className="flex items-center gap-3">
                                          <input
                                            id="house-weekday-nights"
                                            type="range"
                                            min="0"
                                            max="5"
                                            value={weekdayNights}
                                            aria-valuetext={`${weekdayNights}`}
                                            onChange={(e) => setWeekdayNights(parseInt(e.target.value, 10))}
                                            className="w-full accent-[#5B7A3A] cursor-pointer"
                                          />
                                          <span className="font-bold text-lg text-zinc-900 w-8 text-center">{weekdayNights}</span>
                                        </div>
                                      </div>

                                        <div className="bg-zinc-50 p-4 sm:p-5 rounded-2xl border border-zinc-200">
                                          <label htmlFor="house-weekend-nights" className="block text-sm font-semibold text-zinc-800 mb-2">
                                            {t.weekendLabel}
                                          </label>
                                          <div className="flex items-center gap-3">
                                            <input
                                              id="house-weekend-nights"
                                              type="range"
                                              min="0"
                                              max="2"
                                              value={weekendNights}
                                              aria-valuetext={`${weekendNights}`}
                                              onChange={(e) => setWeekendNights(parseInt(e.target.value, 10))}
                                              className="w-full accent-[#5B7A3A] cursor-pointer"
                                            />
                                            <span className="font-bold text-lg text-zinc-900 w-8 text-center">{weekendNights}</span>
                                          </div>
                                        </div>
                                      </div>

                                      <div
                                        aria-live="polite"
                                        className="p-5 sm:p-6 rounded-2xl bg-[#5B7A3A]/10 border border-[#5B7A3A]/20 flex flex-col sm:flex-row items-center justify-between gap-4"
                                      >
                                        <div>
                                          <p className="text-xs uppercase tracking-wider font-semibold text-[#5B7A3A] mb-1">
                                            {t.totalEstimated}
                                          </p>
                                          <div className="flex items-baseline gap-2">
                                            <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900">{totalPriceEur} €</span>
                                            <span className="text-sm text-zinc-600 font-medium">
                                              {t.formatBgnSummary(totalPriceBgn, totalNights)}
                                            </span>
                                          </div>
                                          <p className="text-xs text-zinc-500 mt-1">
                                            {t.perPersonText}{' '}
                                            <span className="font-bold text-[#5B7A3A]">~{perPersonPerNightEur} €</span> {t.perNight}
                                          </p>
                                        </div>
                                        <Link
                                          href={`/house/reserve?weekdays=${weekdayNights}&weekends=${weekendNights}`}
                                          className="px-6 py-3 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors whitespace-nowrap"
                                        >
                                          {t.continueWithConfig}
                                        </Link>
                                      </div>
                                    </div>

                                        {/* Included Free in Price - 5x2 Visual Icon Tile Grid */}
                                        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 max-w-5xl mx-auto shadow-sm mb-12">
                                          <div className="text-center mb-7">
                                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B7A3A] mb-1.5">
                                              <Sparkles className="w-4 h-4" aria-hidden="true" />
                                              <span>{t.includedBadge}</span>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
                                              {t.includedTitle}
                                            </h2>
                                          </div>

                                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                                              {t.includedTiles.map((tile, idx) => {
                                                const Icon = includedIcons[idx] || Sparkles;
                                                return (
                                                  <div
                                                    key={idx}
                                                    className="p-4 rounded-2xl bg-[#F9F7F7] border border-zinc-100 flex flex-col items-center text-center"
                                                  >
                                                    <div className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center mb-2.5">
                                                      <Icon className="w-5 h-5" />
                                                    </div>
                                                    <p className="text-sm font-bold text-zinc-900 leading-tight">{tile.title}</p>
                                                    <p className="text-xs text-zinc-500 mt-0.5">{tile.tag}</p>
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          </div>

                                              {/* House Policies - 4 Big-Value Rule Cards */}
                                              <div className="max-w-5xl mx-auto mb-12">
                                                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 text-center mb-7">
                                                  {t.policiesTitle}
                                                </h2>
                                                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                                    {t.policies.map((pol, idx) => {
                                                      const Icon = policyIcons[idx] || Clock;
                                                      return (
                                                            <div
                                                              key={idx}
                                                              className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm text-center flex flex-col items-center"
                                                            >
                                                              <div className="w-9 h-9 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center mb-2.5">
                                                                <Icon className="w-4 h-4" aria-hidden="true" />
                                                              </div>
                                                              <p className="text-2xl sm:text-3xl font-serif font-extrabold text-[#3D2B1F] mb-1">
                                                                {pol.value}
                                                              </p>
                                                              <h3 className="font-bold text-zinc-900 text-xs sm:text-sm leading-tight">
                                                                {pol.title}
                                                              </h3>
                                                              <p className="text-[11px] text-zinc-500 mt-1">{pol.tag}</p>
                                                            </div>
                                                            );
            })}
                                                          </div>
                                                        </div>

        {/* Bottom CTA */ }
                                                          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-sm">
                                                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-2">
                                                              {t.bottomCtaTitle}
                                                            </h2>
                                                              <p className="text-zinc-600 text-sm sm:text-base max-w-lg mx-auto mb-6">
                                                                {t.bottomCtaSubtitle}
                                                              </p>
                                                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                                                <Link
                                                                  href="/house/reserve"
                                                                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium hover:bg-[#4d6831] transition-colors shadow-md"
                                                                >
                                                                  {t.ctaReserve}
                                                                </Link>
                                                                <Link
                                                                  href="/house/contact"
                                                                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-zinc-300 text-zinc-800 font-medium hover:bg-zinc-50 transition-colors"
                                                                >
                                                                  {t.ctaContact}
                                                                </Link>
                                                              </div>
                                                          </div>
                                                      </div>
    </div>
                                                  );
}
