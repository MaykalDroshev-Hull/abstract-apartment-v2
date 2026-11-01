'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLanguage } from '@/app/lib/translations';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bed,
  Bath,
  Mountain,
  Waves,
} from 'lucide-react';

export function HouseRoomsSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const h = t.house;

  const ui =
    language === 'bg'
      ? {
          eyebrow: 'САМОСТОЯТЕЛНО НАЕМАНЕ • ЦЯЛАТА КЪЩА',
          subtitle: 'Пълно уединение за вашата компания – 4 възрожденски спални и просторна механа с камина.',
          ctaText: 'Разгледайте стаите и механата',
          stats: [
            { value: '14', suffix: '', label: 'Макс. гости', sublabel: '8–10 възрастни + 4 деца' },
            { value: '4', suffix: '', label: 'Спални', sublabel: 'възрожденски стил и уют' },
            { value: '4', suffix: '', label: 'Бани', sublabel: '2 собствени и 2 етажни' },
            { value: '100', suffix: '%', label: 'Само за вас', sublabel: 'без други гости в имота' },
            { value: '1', suffix: '', label: 'Механа с камина', sublabel: 'с включени дърва за огрев' },
          ],
          cards: [
            {
              tagline: 'Глинено огнище и планинска тераса',
              badges: [
                { icon: Bed, text: '2 + 2 места' },
                { icon: Bath, text: 'Етажна баня' },
                { icon: Mountain, text: 'Планина' },
              ],
            },
            {
              tagline: 'Вековни греди и панорамна тераса',
              badges: [
                { icon: Bed, text: '2 + 2 места' },
                { icon: Bath, text: 'Етажна баня' },
                { icon: Mountain, text: 'Тераса' },
              ],
            },
            {
              tagline: 'Слънчев уют над градината и басейна',
              badges: [
                { icon: Bed, text: '2 + 2 места' },
                { icon: Bath, text: 'Собствена баня' },
                { icon: Waves, text: 'Басейн' },
              ],
            },
            {
              tagline: 'Директен излаз към чардака и двора',
              badges: [
                { icon: Bed, text: '2 + 2 места' },
                { icon: Bath, text: 'Собствена баня' },
                { icon: Waves, text: 'Градина' },
              ],
            },
          ],
          alts: [
            'Стая с огнище в Къща за гости Абстракт – автентично глинено огнище с висящо котле, тъкани черги, двойно легло с дантела и дървени греди',
            'Голяма възрожденска спалня на първия етаж с двойно легло, разтегателен диван, масивна дървена маса и тавански греди',
            'Слънчева панорамна стая със самостоятелна баня, дантелени пердета, дървена ракла и гледка към двора и басейна',
            'Панорамна спалня с двойно легло, автентични дървени мебели и директен излаз към остъкления чардак',
          ],
        }
      : language === 'el'
      ? {
          eyebrow: 'ΑΠΟΚΛΕΙΣΤΙΚΗ ΧΡΗΣΗ • ΟΛΟΚΛΗΡΟ ΤΟ ΣΠΙΤΙ',
          subtitle: 'Πλήρης ιδιωτικότητα για την παρέα σας – 4 παραδοσιακά υπνοδωμάτια και ταβέρνα με τζάκι.',
          ctaText: 'Δείτε τα δωμάτια και την ταβέρνα',
          stats: [
            { value: '14', suffix: '', label: 'Επισκέπτες', sublabel: '8–10 ενήλικες + 4 παιδιά' },
            { value: '4', suffix: '', label: 'Υπνοδωμάτια', sublabel: 'παραδοσιακή αρχοντιά & άνεση' },
            { value: '4', suffix: '', label: 'Μπάνια', sublabel: '2 ιδιωτικά και 2 ορόφου' },
            { value: '100', suffix: '%', label: 'Ιδιωτικότητα', sublabel: 'κανένας άλλος επισκέπτης' },
            { value: '1', suffix: '', label: 'Ταβέρνα με τζάκι', sublabel: 'με δωρεάν καυσόξυλα' },
          ],
            cards: [
              {
                tagline: 'Παραδοσιακό τζάκι & μπαλκόνι βουνού',
                badges: [
                  { icon: Bed, text: '2 + 2 άτομα' },
                  { icon: Bath, text: 'Μπάνιο ορόφου' },
                  { icon: Mountain, text: 'Θέα βουνό' },
                ],
              },
              {
                tagline: 'Ξύλινα δοκάρια & πανοραμική βεράντα',
                badges: [
                  { icon: Bed, text: '2 + 2 άτομα' },
                  { icon: Bath, text: 'Μπάνιο ορόφου' },
                  { icon: Mountain, text: 'Βεράντα' },
                ],
              },
              {
                tagline: 'Φωτεινό δωμάτιο πάνω από την πισίνα',
                badges: [
                  { icon: Bed, text: '2 + 2 άτομα' },
                  { icon: Bath, text: 'Ιδιωτικό μπάνιο' },
                  { icon: Waves, text: 'Θέα πισίνα' },
                ],
              },
              {
                tagline: 'Άμεση έξοδος στο ηλιόλουστο χαγιάτι',
                badges: [
                  { icon: Bed, text: '2 + 2 άτομα' },
                  { icon: Bath, text: 'Ιδιωτικό μπάνιο' },
                  { icon: Waves, text: 'Θέα κήπος' },
                ],
              },
            ],
              alts: [
                'Δωμάτιο με παραδοσιακό τζάκι, υφαντά χαλιά, διπλό κρεβάτι και αυθεντικά ξύλινα δοκάρια στον Ξενώνα Abstract',
                'Ευρύχωρο υπνοδωμάτιο με διπλό κρεβάτι, καναπέ-κρεβάτι, ξύλινο τραπέζι και παραδοσιακή διακόσμηση',
                'Φωτεινό πανοραμικό δωμάτιο με ιδιωτικό μπάνιο, δαντελωτές κουρτίνες και θέα στην πισίνα',
                'Πανοραμικό υπνοδωμάτιο με διπλό κρεβάτι και άμεση πρόσβαση στην ηλιόλουστη βεράντα',
              ],
        }
      : {
          eyebrow: 'EXCLUSIVE RENTAL • ENTIRE ESTATE',
          subtitle: 'Total privacy for your group — 4 Revival bedrooms plus a stone-fireplace gathering tavern.',
          ctaText: 'Explore All Rooms & Mehana',
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
                badges: [
                  { icon: Bed, text: 'Sleeps 2+2' },
                  { icon: Bath, text: 'Floor Bath' },
                  { icon: Mountain, text: 'Mountain' },
                ],
              },
              {
                tagline: 'Timber ceiling beams & scenic terrace',
                badges: [
                  { icon: Bed, text: 'Sleeps 2+2' },
                  { icon: Bath, text: 'Floor Bath' },
                  { icon: Mountain, text: 'Terrace' },
                ],
              },
              {
                tagline: 'Sunlit sanctuary above the heated pool',
                badges: [
                  { icon: Bed, text: 'Sleeps 2+2' },
                  { icon: Bath, text: 'Ensuite' },
                  { icon: Waves, text: 'Pool View' },
                ],
              },
              {
                tagline: 'Direct doorway onto the glazed veranda',
                badges: [
                  { icon: Bed, text: 'Sleeps 2+2' },
                  { icon: Bath, text: 'Ensuite' },
                  { icon: Waves, text: 'Garden View' },
                ],
              },
            ],
              alts: [
                'Hearth Room at Abstract Guest House – authentic open clay fireplace with hanging cauldron, woven cherga rugs, lace-trimmed double bed, and timber ceiling beams',
                'Spacious upstairs Large Bedroom with double bed, pull-out sofa bed, rustic wooden table, and dark timber beams',
                'Sunlit Panoramic Room 1 with en-suite bathroom, twin lace-curtained windows, carved wooden chest, and garden pool view',
                'Panoramic Room 2 featuring double bed, traditional woodwork shelves, and direct doorway onto the sunlit veranda',
              ],
        };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
            {/* Compact Visual Header + 5-Stat Counter Bar */}
            <div className="mb-12 sm:mb-14">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
                    {ui.eyebrow}
                  </span>
                  <h2
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {h.rooms.intro.headline}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-zinc-600 max-w-md leading-relaxed lg:text-right">
                  {ui.subtitle}
                </p>
              </div>

              {/* At-a-Glance Minimal Borderless Stat Strip (3 top + 2 centered bottom on tablet & PC) */}
              <div className="max-w-5xl mx-auto py-8 sm:py-10 flex flex-wrap justify-center gap-y-10 sm:gap-y-12">
                {ui.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="w-1/2 sm:w-1/3 px-3 sm:px-6 text-center flex flex-col items-center"
                  >
                    <div
                      className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#5B7A3A] leading-none"
                      style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
                    >
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-0.5">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 text-sm sm:text-base font-bold text-zinc-900 tracking-tight">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 leading-snug">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

                  {/* 4 Photo-First Room Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {h.rooms.items.map((room, index) => {
                      const cardMeta = ui.cards[index] || ui.cards[0];
                      return (
                        <motion.div
                          key={index}
                          className="relative h-[400px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-sm"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-80px' }}
                          variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <Image
                              src={room.image}
                              alt={ui.alts[index] || room.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </div>

                            {/* Subtle Low-Opacity Black Overlay for Crisp Readability */}
                            <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
                              aria-hidden="true"
                            />

                            {/* Bottom Visual Spec Content */}
                            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                              <h3
                                className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm mb-1"
                                style={{ fontFamily: 'var(--font-serif)' }}
                              >
                                {room.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/90 leading-snug line-clamp-2 drop-shadow-sm mb-3">
                                {cardMeta.tagline}
                              </p>

                              {/* 3 Compact Icon Spec Chips */}
                              <div className="flex flex-wrap gap-1.5">
                                {cardMeta.badges.map((badge, bi) => {
                                  const BadgeIcon = badge.icon;
                                  return (
                                    <span
                                      key={bi}
                                      className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/35 text-white/95 backdrop-blur-sm border border-white/15"
                                    >
                                      <BadgeIcon className="w-3 h-3 text-white/85" aria-hidden="true" />
                                      <span>{badge.text}</span>
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                        </motion.div>
              );
          })}
            </div>

            {/* Bottom CTA to /house/details */}
              <div className="mt-10 sm:mt-12 text-center">
                <Link
                  href="/house/details"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5B7A3A] text-white font-medium text-sm sm:text-base hover:bg-[#4d6831] transition-colors shadow-sm"
                >
                  <span>{ui.ctaText}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
          );
}
