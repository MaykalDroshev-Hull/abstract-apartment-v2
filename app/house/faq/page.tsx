'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import { JacuzziIcon } from '@/app/house/components/HouseAmenityIcons';
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  ArrowRight,
  Home,
  Users,
  Dog,
} from 'lucide-react';

export default function HouseFaqPage() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    bg: {
      eyebrow: 'ЧЕСТО ЗАДАВАНИ ВЪПРОСИ',
      title: 'Всичко за престоя накратко',
      subtitle: 'Бързи факти за наемането, СПА зоната и правилата в Къща за гости „Абстракт“.',
      quickFacts: [
        { val: '100%', label: 'Само цялата къща' },
        { val: '14', label: 'Макс. гости' },
        { val: '365 дни', label: 'Горещо джакузи' },
        { val: '0 €', label: 'Домашни любимци' },
      ],
      items: [
        {
          q: 'Отдава ли се къщата на отделни стаи или само цялата?',
          a: 'Отдава се единствено цялата къща самостоятелно – 100% уединение без други гости.',
        },
        {
          q: 'Какъв е максималният капацитет на къщата?',
          a: 'До 14 гости (8–10 възрастни и 4 деца) в 4 спални с двойни легла и разтегателни дивани.',
        },
        {
          q: 'Кога са часовете за настаняване и освобождаване?',
          a: 'Настаняване от 12:00 ч. с уговорка и освобождаване до 11:00 ч. (гъвкаво при възможност).',
        },
        {
          q: 'Работи ли външното джакузи през зимата при сняг?',
          a: 'Да – 5-местното външно джакузи поддържа гореща вода целогодишно, включително сред сняг.',
        },
        {
          q: 'В кои месеци работи отопляемият външен басейн?',
          a: 'Откритият басейн е отопляем и отворен от началото на април до края на октомври.',
        },
        {
          q: 'Предоставят ли се безплатно дърва за камината и барбекюто?',
          a: 'Да, осигуряваме безплатни дърва за огрев за камината в механата и външното барбекю.',
        },
        {
          q: 'Разрешени ли са домашни любимци и има ли такса?',
          a: 'Да, домашните любимци гостуват напълно безплатно в изцяло оградения двор.',
        },
        {
          q: 'Какви са правилата за музика и празненства?',
          a: 'Музика в двора е разрешена до 22:00 ч., а в закритата механа – без ограничения през нощта.',
        },
        {
          q: 'Какви са цените и минималният престой?',
          a: 'Делник (нед–чет): 300 € / вечер (мин. 1 нощ); уикенд (пет–съб): 350 € / вечер (мин. 2 нощи).',
        },
        {
          q: 'Има ли паркинг пред къщата?',
          a: 'Да, 4 безплатни частни паркоместа точно пред входа по асфалтов път.',
        },
        {
          q: 'Има ли бърз интернет за дистанционна работа?',
          a: 'Да, бърз и стабилен Wi-Fi покрива всички спални, механата и двора.',
        },
        {
          q: 'Къде е най-близкият хранителен магазин?',
          a: 'Селският магазин е на 2 мин пеша, а големите супермаркети в Ловеч и Троян – на 23 мин с кола.',
        },
      ],
      needHelpTitle: 'Имате друг въпрос?',
      needHelpText: 'Обадете ни се или пишете във Viber за бърз отговор.',
      callBtn: '+359 878 112 454',
      reserveBtn: 'Резервирайте къщата',
    },
    el: {
      eyebrow: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ',
      title: 'Όλα όσα πρέπει να γνωρίζετε',
      subtitle: 'Σύντομες απαντήσεις για την αποκλειστική κράτηση, το σπα και τους κανόνες.',
      quickFacts: [
        { val: '100%', label: 'Ολόκληρο το σπίτι' },
        { val: '14', label: 'Μέγιστα άτομα' },
        { val: '365 ημ.', label: 'Ζεστό τζακούζι' },
        { val: '0 €', label: 'Κατοικίδια δωρεάν' },
      ],
      items: [
        {
          q: 'Ενοικιάζεται ανά δωμάτιο ή ολόκληρο το σπίτι;',
          a: 'Ενοικιάζεται αποκλειστικά ολόκληρο το σπίτι για 100% ιδιωτικότητα.',
        },
        {
          q: 'Ποια είναι η μέγιστη χωρητικότητα;',
          a: 'Έως 14 άτομα (8–10 ενήλικες + 4 παιδιά) σε 4 ευρύχωρα υπνοδωμάτια.',
        },
        {
          q: 'Ώρες άφιξης και αναχώρησης;',
          a: 'Άφιξη από 12:00 κατόπιν συνεννόησης και αναχώρηση έως 11:00.',
        },
        {
          q: 'Λειτουργεί το εξωτερικό τζακούζι τον χειμώνα;',
          a: 'Ναι, το 5θέσιο τζακούζι διατηρεί ζεστό νερό όλο τον χρόνο, ακόμη και στο χιόνι.',
        },
        {
          q: 'Πότε λειτουργεί η θερμαινόμενη πισίνα;',
          a: 'Η θερμαινόμενη εξωτερική πισίνα είναι ανοιχτή από Απρίλιο έως Οκτώβριο.',
        },
        {
          q: 'Παρέχονται δωρεάν καυσόξυλα;',
          a: 'Ναι, δωρεάν ξύλα χωρίς χρέωση για το τζάκι της ταβέρνας και το BBQ.',
        },
        {
          q: 'Επιτρέπονται κατοικίδια;',
          a: 'Ναι, φιλοξενούνται εντελώς δωρεάν στον περιφραγμένο κήπο.',
        },
        {
          q: 'Ποια είναι η πολιτική για μουσική και πάρτι;',
          a: 'Μουσική στον κήπο έως τις 22:00· μέσα στην ταβέρνα χωρίς περιορισμό όλο το βράδυ.',
        },
        {
          q: 'Τιμές και ελάχιστη διαμονή;',
          a: 'Καθημερινές: 300 € / νύχτα (ελάχ. 1 νύχτα)· Σαββατοκύριακο: 350 € / νύχτα (ελάχ. 2 νύχτες).',
        },
        {
          q: 'Υπάρχει χώρος στάθμευσης;',
          a: 'Ναι, 4 δωρεάν ιδιωτικές θέσεις στάθμευσης μπροστά στην είσοδο.',
        },
        {
          q: 'Υπάρχει γρήγορο Wi-Fi για εργασία;',
          a: 'Ναι, σταθερό Wi-Fi υψηλής ταχύτητας σε όλο το σπίτι και τον κήπο.',
        },
        {
          q: 'Πού βρίσκεται το πλησιέστερο κατάστημα;',
          a: 'Παντοπωλείο σε 2 λεπτά με τα πόδια και μεγάλα σούπερ μάρκετ σε 23 λεπτά στο Λόβετς/Τρογιάν.',
        },
      ],
      needHelpTitle: 'Έχετε άλλη ερώτηση;',
      needHelpText: 'Καλέστε μας ή στείλτε μήνυμα στο Viber.',
      callBtn: '+359 878 112 454',
      reserveBtn: 'Κράτηση',
    },
    en: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything at a Glance',
      subtitle: 'Quick answers on whole-house booking, four-season spa facilities, and house rules.',
      quickFacts: [
        { val: '100%', label: 'Whole House Only' },
        { val: '14', label: 'Max Guests' },
        { val: '365d', label: 'Winter Hot Tub' },
        { val: '0 €', label: 'Pets Stay Free' },
      ],
      items: [
        {
          q: 'Can we rent individual rooms or only the whole house?',
          a: 'Exclusively rented as a whole estate — 100% private with zero other guests on site.',
        },
        {
          q: 'What is the maximum guest capacity?',
          a: 'Up to 14 guests (8–10 adults + 4 children) across 4 bedrooms with double and sofa beds.',
        },
        {
          q: 'What are the check-in and check-out times?',
          a: 'Check-in from 12:00 PM (by arrangement) and check-out by 11:00 AM, flexible when possible.',
        },
        {
          q: 'Does the outdoor jacuzzi operate in winter snow?',
          a: 'Yes — the 5-seat outdoor hot tub stays heated 365 days a year, including snowy nights.',
        },
        {
          q: 'When is the outdoor swimming pool heated and open?',
          a: 'The heated outdoor pool operates seasonally from early April through late October.',
        },
        {
          q: 'Is firewood provided free for the fireplace and BBQ?',
          a: 'Yes, unlimited firewood is included free for both the mehana fireplace and outdoor BBQ.',
        },
        {
          q: 'Are pets allowed and is there a pet fee?',
          a: 'Well-behaved pets stay completely free with full access to the fenced 1,000+ sq.m yard.',
        },
        {
          q: 'What is the policy on music and celebrations?',
          a: 'Outdoor music until 10:00 PM; inside the insulated mehana tavern, music has no curfew.',
        },
        {
          q: 'What are the nightly rates and minimum stay?',
          a: 'Weekdays (Sun–Thu): 300 € / night (1-night min); Weekends (Fri–Sat): 350 € / night (2-night min).',
        },
        {
          q: 'Is parking available on site?',
          a: 'Yes, 4 free private parking spots sit directly outside the front gate on paved asphalt.',
        },
        {
          q: 'Is there fast Wi-Fi for remote work?',
          a: 'Yes, reliable high-speed Wi-Fi covers every bedroom, the mehana, and the garden.',
        },
        {
          q: 'Where is the nearest grocery store?',
          a: 'A village shop is a 2-minute walk away; large supermarkets in Lovech & Troyan are 23 minutes by car.',
        },
      ],
      needHelpTitle: 'Still Have a Question?',
      needHelpText: 'Call or message us on Viber for an immediate answer.',
      callBtn: '+359 878 112 454',
      reserveBtn: 'Book The House',
    },
  };

  const t = content[language as keyof typeof content] || content.en;
  const factIcons = [Home, Users, JacuzziIcon, Dog];

  return (
      <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
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

                {/* 4-Tile Visual Quick-Facts Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
                  {t.quickFacts.map((fact, idx) => {
                    const Icon = factIcons[idx] || Home;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-zinc-200 p-4 text-center shadow-2xs flex flex-col items-center"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center mb-2">
                          <Icon className="w-4 h-4" />
                        </div>
                        <p className="text-2xl font-serif font-extrabold text-[#3D2B1F] leading-none mb-1">
                          {fact.val}
                        </p>
                        <p className="text-xs font-semibold text-zinc-600">{fact.label}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Accordion FAQ Items */}
                  <div className="space-y-3 mb-12">
                    {t.items.map((item, idx) => {
                      const isOpen = openIndex === idx;
                      const btnId = `house-faq-btn-${idx}`;
                      const panelId = `house-faq-panel-${idx}`;
                      return (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-2xs transition-all"
                        >
                          <button
                            id={btnId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleFaq(idx)}
                            className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                          >
                              <span className="font-bold text-sm sm:text-base text-zinc-900">
                                {item.q}
                              </span>
                              <ChevronDown
                                aria-hidden="true"
                                className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#5B7A3A]' : ''
                                  }`}
                              />
                          </button>
                          {isOpen && (
                            <div
                              id={panelId}
                              role="region"
                              aria-labelledby={btnId}
                              className="px-5 pb-5 pt-2 sm:px-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100"
                            >
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Need Help Banner */}
                      <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 text-center shadow-sm">
                        <div
                          className="w-11 h-11 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center mx-auto mb-3"
                          aria-hidden="true"
                        >
                          <HelpCircle className="w-5 h-5" />
                        </div>
                          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-1.5">
                            {t.needHelpTitle}
                          </h2>
                            <p className="text-zinc-600 text-sm max-w-md mx-auto mb-6">
                              {t.needHelpText}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <a
                                href="tel:+359878112454"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
                              >
                                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                                <span>{t.callBtn}</span>
                              </a>
                              <Link
                                href="/house/reserve"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors shadow-md"
                              >
                                <span>{t.reserveBtn}</span>
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                              </Link>
                            </div>
                          </div>
                      </div>
                    </div>
                    );
}
