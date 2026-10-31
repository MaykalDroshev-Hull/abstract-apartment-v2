'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type GalleryCategory = 'all' | 'exterior' | 'pool' | 'hearth' | 'interior';

interface PhotoItem {
  id: number;
  src: string;
  category: Exclude<GalleryCategory, 'all'>;
  objectPosition?: string;
  title: {
    bg: string;
    el: string;
    en: string;
  };
  alt: {
    bg: string;
    el: string;
    en: string;
  };
}

const PHOTOS: PhotoItem[] = [
  {
    id: 1,
    src: '/Images/House/house-facade-pool-courtyard.jpg',
    category: 'exterior',
    title: {
      bg: 'Възрожденска фасада, остъклен чардак и отопляем басейн',
      el: 'Παραδοσιακή πρόσοψη, βεράντα και θερμαινόμενη πισίνα',
      en: 'Revival Facade, Glazed Veranda & Heated Pool',
    },
    alt: {
      bg: 'Къща за гости Абстракт в с. Голец - фасада, чардак, зелен двор и басейн',
      el: 'Ξενώνας Abstract στο Γκόλετς - πρόσοψη, κήπος και πισίνα',
      en: 'Guest House Abstract in Golets - traditional facade, glazed veranda, lawn and pool',
    },
  },
  {
    id: 2,
    src: '/Images/House/hearth-room-wide.jpg',
    category: 'hearth',
    title: {
      bg: 'Стая с огнище – глинено огнище, бакъри и троянска керамика',
      el: 'Δωμάτιο με τζάκι – παραδοσιακή εστία και χειροποίητα κειμήλια',
      en: 'Hearth Room – Open Clay Fireplace, Copper Cauldrons & Troyan Pottery',
    },
    alt: {
      bg: 'Стая с автентично огнище, висящо котле, черги и дантелено легло',
      el: 'Παραδοσιακό δωμάτιο με αυθεντικό τζάκι και υφαντά χαλιά',
      en: 'Traditional Bulgarian Hearth Room with clay fireplace, woven cherga rug and lace bed',
    },
  },
  {
    id: 3,
    src: '/Images/House/pool-turquoise-water-closeup.jpg',
    category: 'pool',
    title: {
      bg: 'Отопляем открит басейн с кристална вода (април – октомври)',
      el: 'Θερμαινόμενη εξωτερική πισίνα με κρυστάλλινα νερά',
      en: 'Heated Outdoor Pool with Crystal-Clear Water (April – October)',
    },
    alt: {
      bg: 'Близък план на отопляемия открит басейн с каменна настилка',
      el: 'Κοντινή λήψη της θερμαινόμενης εξωτερικής πισίνας',
      en: 'Close-up of the sunlit turquoise heated swimming pool and granite steps',
    },
  },
  {
    id: 4,
    src: '/Images/House/hearth-room-folk-costume.jpg',
    category: 'hearth',
    objectPosition: 'object-top',
    title: {
      bg: 'Български възрожденски дух и фолклорно наследство',
      el: 'Βουλγαρική παραδοσιακή κληρονομιά και ατμόσφαιρα',
      en: 'Living Bulgarian Revival Heritage & Folkloric Tradition',
    },
    alt: {
      bg: 'Българска народна носия в автентичната стая с огнище',
      el: 'Παραδοσιακή φορεσιά στο αυθεντικό δωμάτιο με τζάκι',
      en: 'Editorial portrait in traditional Bulgarian folkloric costume inside the Hearth Room',
    },
  },
  {
    id: 5,
    src: '/Images/House/house-facade-veranda-stone-wall.jpg',
    category: 'exterior',
    title: {
      bg: 'Каменна зидария, дървен чардак и градинска алея',
      el: 'Πέτρινη τοιχοποιία, ξύλινη βεράντα και κήπος',
      en: 'Hand-Stacked Stone Masonry, Timber Veranda & Garden Walk',
    },
    alt: {
      bg: 'Двуетажна възрожденска къща с каменна стена и вечнозелени растения',
      el: 'Διώροφο παραδοσιακό σπίτι με πέτρινο τοίχο',
      en: 'Two-story Revival guest house with tiered stone planter wall and flagstone path',
    },
  },
  {
    id: 6,
    src: '/Images/House/large-room-wide.jpg',
    category: 'interior',
    title: {
      bg: 'Голяма стая – двойна спалня, диван и кът за сядане',
      el: 'Μεγάλο δωμάτιο – διπλό κρεβάτι, καναπές και καθιστικό',
      en: 'Large Bedroom – Double Bed, Sofa Bed & Rustic Seating Nook',
    },
    alt: {
      bg: 'Просторна спалня с вълнено покривало, дантелен диван, дървена маса и черга',
      el: 'Ευρύχωρο υπνοδωμάτιο με ξύλινα έπιπλα και παραδοσιακό χαλί',
      en: 'Spacious bedroom with wool bedspread, lace-draped sofa, rustic table and cherga rug',
    },
  },
  {
    id: 7,
    src: '/Images/House/courtyard-pool-from-porch.jpg',
    category: 'exterior',
    title: {
      bg: 'Поглед изпод дървения навес към двора и басейна',
      el: 'Θέα από το ξύλινο χαγιάτι προς τον κήπο και την πισίνα',
      en: 'Courtyard & Pool Framed Under Dark Timber Porch Beams',
    },
    alt: {
      bg: 'Ограденият зелен двор и басейнът, снимани изпод дървените греди на верандата',
      el: 'Ο περιφραγμένος κήπος και η πισίνα κάτω από τα ξύλινα δοκάρια',
      en: 'View from beneath the wooden porch roof across the green lawn toward the pool',
    },
  },
  {
    id: 8,
    src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
    category: 'pool',
    title: {
      bg: 'Вечерна атмосфера с ретро фенер и осветен двор',
      el: 'Βραδινή ατμόσφαιρα με παραδοσιακό φανάρι στην αυλή',
      en: 'Twilight Ambience with Glowing Porch Lantern & Lit Stone Wall',
    },
    alt: {
      bg: 'Вечерен изглед към осветения каменен зид, басейна и градинския фенер',
      el: 'Βραδινή όψη της φωτισμένης αυλής και της πισίνας',
      en: 'Vintage Edison-bulb porch lantern glowing over the green lawn and pool at dusk',
    },
  },
  {
    id: 9,
    src: '/Images/House/hearth-room-rocking-chair.jpg',
    category: 'hearth',
    title: {
      bg: 'Кът за отдих с люлеещ се стол край огнището',
      el: 'Γωνιά χαλάρωσης με κουνιστή πολυθρόνα δίπλα στο τζάκι',
      en: 'Fireside Reading Corner with Cushioned Rocking Chair',
    },
    alt: {
      bg: 'Уютен люлеещ се стол върху овча кожа до каменното огнище',
      el: 'Κουνιστή πολυθρόνα δίπλα στο παραδοσιακό πέτρινο τζάκι',
      en: 'Cozy cushioned rocking chair on sheepskin beside the open clay hearth',
    },
  },
  {
    id: 10,
    src: '/Images/House/large-room-seating-windows.jpg',
    category: 'interior',
    title: {
      bg: 'Слънчева спалня с дантелени пердета и масивни греди',
      el: 'Ηλιόλουστο υπνοδωμάτιο με ξύλινα δοκάρια οροφής',
      en: 'Sunlit Bedroom with Lace Curtains & Original Ceiling Beams',
    },
    alt: {
      bg: 'Светла спалня с два прозореца, дървена ракла, черга и тъмни тавански греди',
      el: 'Φωτεινό υπνοδωμάτιο με παραδοσιακή ξύλινη κασέλα και δοκάρια',
      en: 'Natural sunlight streaming through twin lace-curtained windows across woven cherga rug',
    },
  },
  {
    id: 11,
    src: '/Images/House/hearth-room-toward-veranda.jpg',
    category: 'hearth',
    title: {
      bg: 'Излаз от стаята с огнище към слънчевия чардак',
      el: 'Πρόσβαση από το δωμάτιο με τζάκι στην ηλιόλουστη βεράντα',
      en: 'Hearth Room Opening Directly onto the Sunlit Veranda',
    },
    alt: {
      bg: 'Поглед от леглото към отворената врата на чардака и рафтовете с дамаджани',
      el: 'Θέα από το δωμάτιο προς την ανοιχτή πόρτα της βεράντας',
      en: 'View from the Hearth Room toward the open veranda door, framed by antique shelves',
    },
  },
  {
    id: 12,
    src: '/Images/House/bathroom-vintage-brass.jpg',
    category: 'interior',
    title: {
      bg: 'Баня в ретро стил с орнаментирано месингово огледало',
      el: 'Μπάνιο σε ρετρό στυλ με μπρούτζινες λεπτομέρειες',
      en: 'Traditional-Style Bathroom with Ornate Antique Brass Fixtures',
    },
    alt: {
      bg: 'Баня с релефни бронзови плочки, старинно месингово огледало и душ',
      el: 'Μπάνιο με ανάγλυφα πλακάκια, μπρούτζινο καθρέφτη και ντους',
      en: 'Vintage-inspired bathroom featuring embossed bronze tiles, brass oval mirror and rain shower',
    },
  },
  {
    id: 13,
    src: '/Images/House/courtyard-pool-dusk-wide.jpg',
    category: 'exterior',
    title: {
      bg: 'Каменна пътека, тревен двор и басейн по здрач',
      el: 'Πέτρινο μονοπάτι, κήπος και πισίνα το σούρουπο',
      en: 'Flagstone Stepping Path, Lawn & Illuminated Pool Wall at Dusk',
    },
    alt: {
      bg: 'Широк вечерен изглед към двора, каменните стъпки и осветения басейн',
      el: 'Ευρυγώνια βραδινή λήψη του κήπου και της πισίνας',
      en: 'Wide twilight view across the enclosed green lawn and flagstone path toward the pool',
    },
  },
  {
    id: 14,
    src: '/Images/House/hearth-room-cauldron-shelves.jpg',
    category: 'hearth',
    title: {
      bg: 'Автентични детайли – верига с котле, овчи кожи и бакъри',
      el: 'Αυθεντικές λεπτομέρειες – χάλκινα σκεύη και τζάκι',
      en: 'Heritage Craft Details – Hanging Cauldron, Sheepskins & Copperware',
    },
    alt: {
      bg: 'Поглед от огнището с дърва за огрев, котле и стелажи със старинни съдове',
      el: 'Λεπτομέρειες από το παραδοσιακό τζάκι και τα ράφια με τα κειμήλια',
      en: 'Close perspective from the hearth canopy showing firewood, iron cauldron and antique copper shelves',
    },
  },
  {
    id: 15,
    src: '/Images/House/large-room-ceiling-beams-wardrobe.jpg',
    category: 'interior',
    title: {
      bg: 'Резбована ракла, масивен гардероб и вековни дървени греди',
      el: 'Ξυλόγλυπτη κασέλα, ντουλάπα και αυθεντικά ξύλινα δοκάρια',
      en: 'Carved Wooden Chest, Antique Wardrobe & Dark Timber Beams',
    },
    alt: {
      bg: 'Интериорен детайл от Голямата стая с дървени греди, свещник и старинна ракла',
      el: 'Εσωτερική λεπτομέρεια του μεγάλου δωματίου με ξύλινη οροφή',
      en: 'Vertical interior view highlighting dark timber ceiling beams, candelabra table and wooden chest',
    },
  },
];

export default function HouseGalleryPage() {
  const { language } = useLanguage();
  const lang = (language === 'bg' || language === 'el' || language === 'en' ? language : 'en') as 'bg' | 'el' | 'en';
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const content = {
    bg: {
      eyebrow: 'ФОТОГАЛЕРИЯ',
      title: 'Потопете се в атмосферата на къщата',
      subtitle: 'Разгледайте автентичния възрожденски уют, стаята с огнище, просторните спални, зеления ограден двор и отопляемия басейн.',
      enlargeLabel: 'Увеличи снимката',
      closeLabel: 'Затвори снимката',
      prevLabel: 'Предишна снимка',
      nextLabel: 'Следваща снимка',
      categories: {
        all: 'Всички снимки',
        exterior: 'Двор & Фасада',
        pool: 'Басейн & Вечер',
        hearth: 'Стая с огнище',
        interior: 'Спални & Баня',
      },
      ctaTitle: 'Харесва ли ви това, което виждате?',
      ctaSubtitle: 'Резервирайте цялата къща за вашето следващо незабравимо бягство сред природата.',
      ctaReserve: 'Резервирай сега',
      ctaContact: 'Свържи се с нас',
    },
    el: {
      eyebrow: 'ΦΩΤΟΓΡΑΦΙΕΣ',
      title: 'Η ατμόσφαιρα του ξενώνα Abstract',
      subtitle: 'Εξερευνήστε την αυθεντική παραδοσιακή αρχιτεκτονική, το δωμάτιο με το τζάκι, τον περιφραγμένο κήπο και τη θερμαινόμενη πισίνα.',
      enlargeLabel: 'Μεγέθυνση φωτογραφίας',
      closeLabel: 'Κλείσιμο προβολής',
      prevLabel: 'Προηγούμενη φωτογραφία',
      nextLabel: 'Επόμενη φωτογραφία',
      categories: {
        all: 'Όλες οι φωτογραφίες',
        exterior: 'Κήπος & Όψη',
        pool: 'Πισίνα & Βράδυ',
        hearth: 'Δωμάτιο με Τζάκι',
        interior: 'Υπνοδωμάτια & Μπάνιο',
      },
      ctaTitle: 'Σας αρέσει αυτό που βλέπετε;',
      ctaSubtitle: 'Κάντε κράτηση για ολόκληρο το σπίτι για τις επόμενες διακοπές σας.',
      ctaReserve: 'Κράτηση',
      ctaContact: 'Επικοινωνία',
    },
    en: {
      eyebrow: 'PHOTO GALLERY',
      title: 'Immerse Yourself in the Atmosphere',
      subtitle: 'Explore authentic Bulgarian Revival craftsmanship, our signature Hearth Room, sunlit bedrooms, enclosed green courtyard, and heated pool.',
      enlargeLabel: 'Click to enlarge',
      closeLabel: 'Close lightbox',
      prevLabel: 'Previous photo',
      nextLabel: 'Next photo',
      categories: {
        all: 'All Photos',
        exterior: 'Facade & Courtyard',
        pool: 'Pool & Twilight',
        hearth: 'Hearth Room',
        interior: 'Bedrooms & Bath',
      },
      ctaTitle: 'Love What You See?',
      ctaSubtitle: 'Reserve the whole house for your family or friends retreat in the Balkan foothills.',
      ctaReserve: 'Book Now',
      ctaContact: 'Contact Hosts',
    },
  };

  const t = content[lang];

  const filteredPhotos =
    activeCategory === 'all'
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : null
    );
  }, [filteredPhotos.length]);

  const prevImage = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeImageIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
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

        {/* Filters */}
        <div
          role="group"
          aria-label={t.eyebrow}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {(['all', 'exterior', 'pool', 'hearth', 'interior'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#5B7A3A] text-white shadow-md'
                  : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'
              }`}
            >
              {t.categories[cat]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              role="button"
              tabIndex={0}
              aria-label={`${photo.title[lang]} – ${t.enlargeLabel}`}
              onClick={() => openLightbox(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
              className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-200 cursor-pointer shadow-sm border border-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7A3A] focus-visible:ring-offset-2"
            >
              <Image
                src={photo.src}
                alt={photo.alt[lang]}
                fill
                className={`object-cover ${photo.objectPosition || ''} group-hover:scale-105 transition-transform duration-500`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/80 via-[#3D2B1F]/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <p className="font-bold text-base mb-1">{photo.title[lang]}</p>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.enlargeLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && filteredPhotos[activeImageIndex] && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={filteredPhotos[activeImageIndex].title[lang]}
            className="fixed inset-0 z-50 bg-[#1F1610]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label={t.closeLabel}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label={t.prevLabel}
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="relative max-w-5xl max-h-[85vh] w-full h-[75vh]">
              <Image
                src={filteredPhotos[activeImageIndex].src}
                alt={filteredPhotos[activeImageIndex].alt[lang]}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <div
                aria-live="polite"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#3D2B1F]/80 backdrop-blur-sm px-5 py-2 rounded-full text-white text-xs sm:text-sm font-medium text-center max-w-[90%]"
              >
                {filteredPhotos[activeImageIndex].title[lang]} ({activeImageIndex + 1} / {filteredPhotos.length})
              </div>
            </div>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label={t.nextLabel}
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mb-3">
            {t.ctaTitle}
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/house/reserve"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors shadow-md"
            >
              {t.ctaReserve}
            </Link>
            <Link
              href="/house/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-zinc-300 text-zinc-800 font-medium text-sm hover:bg-zinc-50 transition-colors"
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
