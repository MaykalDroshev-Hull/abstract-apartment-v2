'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HouseRoomsSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const h = t.house;

  const ui =
    language === 'bg'
      ? {
          eyebrow: 'Самостоятелно наемане • Цялата къща',
          subtitle:
            'Пълно уединение за вашата компания – 4 възрожденски спални и просторна механа с камина.',
          ctaText: 'Разгледайте стаите и механата',
          stats: [
            { value: '14', suffix: '', label: 'Макс. гости', sublabel: '8–10 възрастни + 4 деца' },
            { value: '4', suffix: '', label: 'Спални', sublabel: 'възрожденски уют и климатизация' },
            { value: '4', suffix: '', label: 'Бани', sublabel: '2 собствени и 2 етажни' },
            { value: '100', suffix: '%', label: 'Само за вас', sublabel: 'без други гости в имота' },
            { value: '1', suffix: '', label: 'Механа с камина', sublabel: 'включени дърва за огрев' },
          ],
          cards: [
            {
              tagline: 'Глинено огнище и планинска панорама',
              specs: '2 + 2 места • Етажна баня • Изглед планина',
            },
            {
              tagline: 'Вековни греди и просторна тераса',
              specs: '2 + 2 места • Етажна баня • Панорамна тераса',
            },
            {
              tagline: 'Слънчев простор над басейна и двора',
              specs: '2 + 2 места • Собствена баня • Изглед басейн',
            },
            {
              tagline: 'Директен излаз към остъкления чардак',
              specs: '2 + 2 места • Собствена баня • Излаз към чардака',
            },
          ],
          alts: [
            'Стая с огнище в Къща за гости Абстракт – автентично глинено огнище, тъкани черги, двойно легло и дървени греди',
            'Голяма възрожденска спалня на първия етаж с двойно легло, разтегателен диван и масивна дървена маса',
            'Слънчева панорамна стая със самостоятелна баня, дантелени пердета и гледка към двора и басейна',
            'Панорамна спалня с двойно легло, автентични дървени мебели и директен излаз към чардака',
          ],
        }
      : language === 'el'
      ? {
          eyebrow: 'Αποκλειστική χρήση • Ολόκληρο το σπίτι',
          subtitle:
            'Πλήρης ιδιωτικότητα για την παρέα σας – 4 παραδοσιακά υπνοδωμάτια και ταβέρνα με τζάκι.',
          ctaText: 'Δείτε τα δωμάτια και την ταβέρνα',
          stats: [
            { value: '14', suffix: '', label: 'Επισκέπτες', sublabel: '8–10 ενήλικες + 4 παιδιά' },
            { value: '4', suffix: '', label: 'Υπνοδωμάτια', sublabel: 'παραδοσιακή άνεση' },
            { value: '4', suffix: '', label: 'Μπάνια', sublabel: '2 ιδιωτικά και 2 ορόφου' },
            { value: '100', suffix: '%', label: 'Ιδιωτικότητα', sublabel: 'χωρίς άλλους επισκέπτες' },
            { value: '1', suffix: '', label: 'Ταβέρνα με τζάκι', sublabel: 'με δωρεάν καυσόξυλα' },
          ],
          cards: [
            {
              tagline: 'Παραδοσιακό τζάκι & μπαλκόνι βουνού',
              specs: '2 + 2 άτομα • Μπάνιο ορόφου • Θέα βουνό',
            },
            {
              tagline: 'Ξύλινα δοκάρια & πανοραμική βεράντα',
              specs: '2 + 2 άτομα • Μπάνιο ορόφου • Βεράντα',
            },
            {
              tagline: 'Φωτεινό δωμάτιο πάνω από την πισίνα',
              specs: '2 + 2 άτομα • Ιδιωτικό μπάνιο • Θέα πισίνα',
            },
            {
              tagline: 'Άμεση έξοδος στο ηλιόλουστο χαγιάτι',
              specs: '2 + 2 άτομα • Ιδιωτικό μπάνιο • Θέα κήπος',
            },
          ],
          alts: [
            'Δωμάτιο με παραδοσιακό τζάκι και ξύλινα δοκάρια στον Ξενώνα Abstract',
            'Ευρύχωρο υπνοδωμάτιο με διπλό κρεβάτι και ξύλινο τραπέζι',
            'Φωτεινό πανοραμικό δωμάτιο με θέα στην πισίνα',
            'Πανοραμικό υπνοδωμάτιο με άμεση πρόσβαση στη βεράντα',
          ],
        }
      : {
          eyebrow: 'Exclusive rental • Entire estate',
          subtitle:
            'Total privacy for your group — 4 Revival bedrooms plus a stone-fireplace gathering tavern.',
          ctaText: 'Explore All Rooms & Tavern',
          stats: [
            { value: '14', suffix: '', label: 'Max Guests', sublabel: '8–10 adults + 4 children' },
            { value: '4', suffix: '', label: 'Bedrooms', sublabel: 'Revival heritage & climate control' },
            { value: '4', suffix: '', label: 'Bathrooms', sublabel: '2 en-suite & 2 floor baths' },
            { value: '100', suffix: '%', label: 'Private Estate', sublabel: 'zero other guests on site' },
            { value: '1', suffix: '', label: 'Fireplace Tavern', sublabel: 'free firewood included' },
          ],
          cards: [
            {
              tagline: 'Authentic clay hearth & mountain balcony',
              specs: 'Sleeps 2+2 • Floor Bath • Mountain View',
            },
            {
              tagline: 'Timber ceiling beams & scenic terrace',
              specs: 'Sleeps 2+2 • Floor Bath • Scenic Terrace',
            },
            {
              tagline: 'Sunlit sanctuary above the heated pool',
              specs: 'Sleeps 2+2 • En-suite • Pool View',
            },
            {
              tagline: 'Direct doorway onto the glazed veranda',
              specs: 'Sleeps 2+2 • En-suite • Veranda Access',
            },
          ],
          alts: [
            'Hearth Room at Abstract Guest House – authentic open fireplace and timber ceiling beams',
            'Spacious upstairs Large Bedroom with double bed, pull-out sofa, and rustic wooden table',
            'Sunlit Panoramic Room with en-suite bathroom and pool garden view',
            'Panoramic Room featuring double bed and doorway onto the sunlit veranda',
          ],
        };

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
                {ui.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-zinc-900 text-balance">
                {h.rooms.intro.headline}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-700 max-w-md leading-relaxed text-pretty lg:text-right">
              {ui.subtitle}
            </p>
          </div>

          {/* At-a-Glance Clean Architectural Stat Strip with Tabular Numbers */}
          <div className="max-w-5xl mx-auto py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-6">
            {ui.stats.map((stat, idx) => (
              <div key={idx} className="text-center flex flex-col items-center px-2">
                <div className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-zinc-900 leading-none tracking-tight tabular-nums">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-2xl sm:text-3xl font-semibold ml-0.5 text-[#5B7A3A]">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="mt-2.5 text-sm sm:text-base font-bold text-zinc-900 tracking-tight text-balance">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-zinc-600 leading-snug text-pretty">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Clean Room Cards: Unobstructed photography, quiet metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {h.rooms.items.map((room, index) => {
            const cardMeta = ui.cards[index] || ui.cards[0];
            return (
              <motion.div
                key={index}
                className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden group border border-zinc-900/10 shadow-xs"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={room.image}
                    alt={ui.alts[index] || room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Scrim Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                  aria-hidden="true"
                />

                {/* Bottom Content (Clean typography, no cluttered pill badges) */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-balance mb-1 drop-shadow-xs">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-snug text-pretty mb-2.5 drop-shadow-xs">
                    {cardMeta.tagline}
                  </p>
                  <p className="text-[11px] sm:text-xs font-medium text-white/75 drop-shadow-xs">
                    {cardMeta.specs}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA to /house/details */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/house/details"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-semibold text-sm sm:text-base hover:bg-[#4d6831] active:scale-[0.98] transition-all"
          >
            <span>{ui.ctaText}</span>
            <ArrowRight className="w-4 h-4 translate-y-[0.5px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
