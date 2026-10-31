'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
    JacuzziIcon,
    FireplaceIcon,
  } from '@/app/house/components/HouseAmenityIcons';
import {
  Heart,
  ShieldCheck,
  Trees,
  Phone,
  MapPin,
  Dog,
} from 'lucide-react';

export default function HouseAboutPage() {
  const { language } = useLanguage();

  const content = {
    bg: {
      eyebrow: 'ЗА НАС • ИСТОРИЯТА НА КЪЩАТА',
      title: 'Където модерното среща традицията',
        subtitle: 'Уютно възрожденско имение в с. Голец, създадено за пълно уединение със семейство и приятели.',
        storyBadge: 'НАШАТА ФИЛОСОФИЯ',
        pullQuote: '„Истинската почивка започва там, където цялата къща, огнището и градината са само за вас.“',
        storyPoints: [
          {
            title: 'В сърцето на Предбалкана',
            desc: 'На 1 ч. 40 мин от София и на 23 мин от Ловеч и Троян сред тишина и чист въздух.',
          },
          {
            title: 'Възрожденски дух + 365-дневен СПА',
            desc: 'Каменна механа с безплатни дърва, сауна, басейн и горещо зимно джакузи.',
          },
          {
            title: 'Сигурен двор за деца и любимци',
            desc: 'Над 1000 кв.м оградена зелена морава без никаква такса за домашни любимци.',
          },
        ],
        imageAlts: {
          facade: 'Двуетажна възрожденска фасада на Къща за гости Абстракт в с. Голец с каменна зидария, дървен чардак и градинска алея',
          folk: 'Българска народна носия в автентичната стая с глинено огнище, бакъри и тъкани черги',
          dusk: 'Вечерен изглед към оградения зелен двор, осветения каменен зид и отопляемия басейн по здрач',
        },
        valuesTitle: 'Нашите четири стълба',
        values: [
          {
            stat: '100% за вас',
            title: 'Самостоятелен имот',
            desc: 'Цялата къща за вашата компания до 14 гости.',
          },
          {
            stat: '365 дни',
            title: 'Целогодишен СПА',
            desc: 'Зимно джакузи, сауна и сезонен отопляем басейн.',
          },
          {
            stat: '14+ места',
            title: 'Механа с огнище',
            desc: 'Безплатни дърва и барбекю под голям навес.',
          },
          {
            stat: '0 € такса',
            title: 'Домашни любимци',
            desc: 'Свободна игра в изцяло оградения двор.',
          },
        ],
        hostsTitle: 'Вашите домакини',
        hostsDesc: 'Кристина и Камелия Иванови – винаги насреща за безгрижния ви престой.',
        kristinaInitials: 'КИ',
        kristinaName: 'Кристина Иванова',
        kristinaRole: 'Ко-домакин и резервации',
        kristinaPhoneLabel: '+359 878 112 454 (Viber)',
        kameliyaInitials: 'КИ',
        kameliyaName: 'Камелия Иванова',
        kameliyaRole: 'Ко-домакин и посрещане',
        kameliyaPhoneLabel: '+359 889 226 794',
        ctaTitle: 'Заповядайте в Къща за гости „Абстракт“',
        ctaSubtitle: 'Топъл огън, чист балкански въздух и пълно спокойствие.',
        ctaReserve: 'Резервирай цялата къща',
        ctaContact: 'Свържи се с нас',
    },
    el: {
      eyebrow: 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ',
      title: 'Εκεί όπου το μοντέρνο συναντά την παράδοση',
        subtitle: 'Παραδοσιακό αρχοντικό στο Γκόλετς σχεδιασμένο για απόλυτη ιδιωτικότητα με φίλους και οικογένεια.',
        storyBadge: 'Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ',
        pullQuote: '«Η αληθινή ξεκούραση ξεκινά εκεί όπου ολόκληρο το σπίτι, το τζάκι και ο κήπος ανήκουν αποκλειστικά σε εσάς.»',
        storyPoints: [
          {
            title: 'Στην καρδιά της φύσης',
            desc: 'Μόλις 1 ώρα 40λ από τη Σόφια και 23 λεπτά από το Λόβετς και το Τρογιάν.',
          },
          {
            title: 'Παράδοση & Σπα 365 ημερών',
            desc: 'Πέτρινη ταβέρνα με δωρεάν ξύλα, σάουνα, πισίνα και χειμερινό τζακούζι.',
          },
          {
            title: 'Ασφαλής κήπος για παιδιά & κατοικίδια',
            desc: 'Πάνω από 1.000 τ.μ. περιφραγμένου κήπου χωρίς καμία χρέωση για κατοικίδια.',
          },
        ],
        imageAlts: {
          facade: 'Παραδοσιακή διώροφη πρόσοψη του Ξενώνα Abstract στο Γκόλετς με πέτρινη τοιχοποιία και ξύλινη βεράντα',
          folk: 'Παραδοσιακή βουλγαρική φορεσιά στο αυθεντικό δωμάτιο με το πέτρινο τζάκι και τα υφαντά χαλιά',
          dusk: 'Βραδινή όψη του περιφραγμένου κήπου και της θερμαινόμενης πισίνας με ζεστό φωτισμό',
        },
        valuesTitle: 'Οι τέσσερις αξίες μας',
        values: [
          {
            stat: '100% δικό σας',
            title: 'Αποκλειστική χρήση',
            desc: 'Ολόκληρο το κτήμα για έως 14 άτομα.',
          },
          {
            stat: '365 ημέρες',
            title: 'Σπα 4 εποχών',
            desc: 'Ζεστό τζακούζι, σάουνα και θερμαινόμενη πισίνα.',
          },
          {
            stat: '14+ θέσεις',
            title: 'Ταβέρνα με τζάκι',
            desc: 'Δωρεάν καυσόξυλα και στεγασμένο BBQ.',
          },
          {
            stat: '0 € χρέωση',
            title: 'Κατοικίδια δωρεάν',
            desc: 'Ελεύθερο παιχνίδι στον ασφαλή κήπο.',
          },
        ],
        hostsTitle: 'Οι οικοδεσπότες σας',
        hostsDesc: 'Η Κριστίνα και η Καμέλια είναι πάντα στη διάθεσή σας.',
        kristinaInitials: 'ΚΙ',
        kristinaName: 'Κριστίνα Ιβάνοβα',
        kristinaRole: 'Κρατήσεις',
        kristinaPhoneLabel: '+359 878 112 454 (Viber)',
        kameliyaInitials: 'ΚΙ',
        kameliyaName: 'Καμέλια Ιβάνοβα',
        kameliyaRole: 'Φιλοξενία',
        kameliyaPhoneLabel: '+359 889 226 794',
        ctaTitle: 'Σας περιμένουμε στον Ξενώνα Abstract',
        ctaSubtitle: 'Ζεστή εστία, καθαρός αέρας βουνού και απόλυτη ηρεμία.',
        ctaReserve: 'Κράτηση',
        ctaContact: 'Επικοινωνία',
    },
    en: {
      eyebrow: 'ABOUT US • OUR STORY',
      title: 'Where Modern Meets Tradition',
        subtitle: 'A private Bulgarian Revival estate in Golets built for unhurried gatherings with family and friends.',
        storyBadge: 'OUR PHILOSOPHY',
        pullQuote: '“True rest begins when the entire house, hearth, and garden belong exclusively to the people you love.”',
        storyPoints: [
          {
            title: 'In the Pre-Balkan Foothills',
            desc: '1h 40m from Sofia and 23 min from Lovech & Troyan amid crisp mountain quiet.',
          },
          {
            title: 'Revival Craft + 365-Day Spa',
            desc: 'Stone mehana with free firewood, infrared sauna, heated pool, and winter hot tub.',
          },
          {
            title: 'Child & Pet-Safe Grounds',
            desc: '1,000+ sq.m of fully fenced green lawn where dogs stay completely free.',
          },
        ],
        imageAlts: {
          facade: 'Two-story Bulgarian Revival facade of Abstract Guest House in Golets with hand-stacked stone masonry, timber veranda, and garden walkway',
          folk: 'Traditional Bulgarian folkloric heritage portrait inside the Hearth Room beside the open clay fireplace and woven cherga rugs',
          dusk: 'Twilight view of the enclosed private garden, glowing porch lantern, and heated outdoor pool at Abstract Guest House',
        },
        valuesTitle: 'Our Four Core Pillars',
        values: [
          {
            stat: '100% Private',
            title: 'Whole-House Only',
            desc: 'Dedicated solely to your group of up to 14.',
          },
          {
            stat: '365 Days',
            title: 'Four-Season Spa',
            desc: 'Winter hot jacuzzi, sauna, and heated pool.',
          },
          {
            stat: '14+ Seats',
            title: 'Fireside Mehana',
            desc: 'Unlimited free firewood and covered BBQ.',
          },
          {
            stat: '0 € Fee',
            title: 'Free Pet Haven',
            desc: 'Off-leash freedom across fenced lawns.',
          },
        ],
        hostsTitle: 'Meet Your Hosts',
        hostsDesc: 'Kristina and Kameliya Ivanova — personally dedicated to an effortless stay.',
        kristinaInitials: 'KI',
        kristinaName: 'Kristina Ivanova',
        kristinaRole: 'Co-Host & Reservations',
        kristinaPhoneLabel: '+359 878 112 454 (Viber)',
        kameliyaInitials: 'KI',
        kameliyaName: 'Kameliya Ivanova',
        kameliyaRole: 'Co-Host & Guest Hospitality',
        kameliyaPhoneLabel: '+359 889 226 794',
        ctaTitle: 'Join Us at Abstract Guest House',
        ctaSubtitle: 'Crackling fires, pure mountain air, and restorative spa evenings await.',
        ctaReserve: 'Book The Entire House',
        ctaContact: 'Contact Us',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

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

                      {/* Visual Editorial Story Section */}
                      <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          {/* Left Pull-Quote + 3 Visual Story Rows */}
                          <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#5B7A3A]/10 text-[#5B7A3A]">
                              <Heart className="w-4 h-4" aria-hidden="true" />
                              <span>{t.storyBadge}</span>
                            </div>

                              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#3D2B1F] leading-snug border-l-4 border-[#5B7A3A] pl-4">
                                {t.pullQuote}
                              </h2>

                              <div className="space-y-3.5 pt-1">
                                {t.storyPoints.map((pt, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F9F7F7] border border-zinc-100"
                                  >
                                    <div className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0">
                                      {idx === 0 && <MapPin className="w-5 h-5" aria-hidden="true" />}
                                      {idx === 1 && <FireplaceIcon className="w-5 h-5" />}
                                      {idx === 2 && <Trees className="w-5 h-5" aria-hidden="true" />}
                                    </div>
                                    <div>
                                      <h3 className="text-sm sm:text-base font-bold text-zinc-900">{pt.title}</h3>
                                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">{pt.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                          </div>

                          {/* Right 3-Photo Mosaic */}
                          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                              <div className="col-span-2 relative h-60 sm:h-68 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                  src="/Images/House/house-facade-veranda-stone-wall.jpg"
                                  alt={t.imageAlts.facade}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1024px) 100vw, 40vw"
                                  priority
                                />
                              </div>
                                <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-md">
                                  <Image
                                    src="/Images/House/hearth-room-folk-costume.jpg"
                                    alt={t.imageAlts.folk}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 50vw, 20vw"
                                  />
                                </div>
                                  <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                      src="/Images/House/courtyard-pool-dusk-lantern.jpg"
                                      alt={t.imageAlts.dusk}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 1024px) 50vw, 20vw"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                                {/* Core Values - 4 Visual Stat Tiles */}
                                <div className="mb-12">
                                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 text-center mb-7">
                                    {t.valuesTitle}
                                  </h2>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                                      {t.values.map((val, idx) => (
                                          <div
                                            key={idx}
                                            className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
                                          >
                                            <div>
                                                <div className="flex items-center justify-between gap-2 mb-3.5">
                                                  <div
                                                    className="w-10 h-10 rounded-xl bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center flex-shrink-0"
                                                    aria-hidden="true"
                                                  >
                                                    {idx === 0 ? <ShieldCheck className="w-5 h-5" /> :
                                                      idx === 1 ? <JacuzziIcon className="w-5 h-5" /> :
                                                        idx === 2 ? <FireplaceIcon className="w-5 h-5" /> :
                                                          <Dog className="w-5 h-5" />}
                                                  </div>
                                                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A]">
                                                    {val.stat}
                                                  </span>
                                                </div>
                                                <h3 className="text-base font-bold text-zinc-900 mb-1">{val.title}</h3>
                                                <p className="text-xs text-zinc-600 leading-snug">{val.desc}</p>
                                              </div>
                                            </div>
            ))}
                                          </div>
                                        </div>

        {/* Hosts Section */ }
                                          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm mb-12 text-center">
                                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-1.5">
                                              {t.hostsTitle}
                                            </h2>
                                              <p className="text-zinc-600 text-sm max-w-lg mx-auto mb-8">
                                                {t.hostsDesc}
                                              </p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                                  {/* Kristina */}
                                                  <div className="p-6 rounded-2xl bg-[#F9F7F7] border border-zinc-100 flex flex-col items-center">
                                                      <div
                                                        className="w-14 h-14 rounded-full bg-[#5B7A3A] text-white flex items-center justify-center text-lg font-bold mb-3 shadow"
                                                        aria-hidden="true"
                                                      >
                                                        {t.kristinaInitials}
                                                      </div>
                                                        <h3 className="text-base font-bold text-zinc-900">{t.kristinaName}</h3>
                                                        <p className="text-xs text-[#5B7A3A] font-semibold uppercase tracking-wider mb-3">
                                                          {t.kristinaRole}
                                                        </p>
                                                        <a
                                                          href="tel:+359878112454"
                                                          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-[#5B7A3A] transition-colors"
                                                        >
                                                          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                                                          <span>{t.kristinaPhoneLabel}</span>
                                                        </a>
                                                    </div>

                                                    {/* Kameliya */}
                                                    <div className="p-6 rounded-2xl bg-[#F9F7F7] border border-zinc-100 flex flex-col items-center">
                                                        <div
                                                          className="w-14 h-14 rounded-full bg-[#5B7A3A] text-white flex items-center justify-center text-lg font-bold mb-3 shadow"
                                                          aria-hidden="true"
                                                        >
                                                          {t.kameliyaInitials}
                                                        </div>
                                                          <h3 className="text-base font-bold text-zinc-900">{t.kameliyaName}</h3>
                                                          <p className="text-xs text-[#5B7A3A] font-semibold uppercase tracking-wider mb-3">
                                                            {t.kameliyaRole}
                                                          </p>
                                                          <a
                                                            href="tel:+359889226794"
                                                            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-[#5B7A3A] transition-colors"
                                                          >
                                                            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                                                            <span>{t.kameliyaPhoneLabel}</span>
                                                          </a>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  {/* Bottom CTA */}
                                                      <div className="bg-[#5B7A3A] rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl">
                                                        <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-2">
                                                          {t.ctaTitle}
                                                        </h2>
                                                          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm sm:text-base">
                                                            {t.ctaSubtitle}
                                                          </p>
                                                          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                                            <Link
                                                              href="/house/reserve"
                                                              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#5B7A3A] font-bold text-sm hover:bg-zinc-100 transition-colors shadow-md"
                                                            >
                                                              {t.ctaReserve}
                                                            </Link>
                                                            <Link
                                                              href="/house/contact"
                                                              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                                                            >
                                                              {t.ctaContact}
                                                            </Link>
                                                          </div>
                                                      </div>
                                                  </div>
                                                </div>
                                                );
}
