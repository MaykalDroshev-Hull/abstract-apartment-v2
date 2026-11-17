'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/lib/translations';
import { Star, Quote } from 'lucide-react';

interface HouseReview {
  id: number;
  author: string;
  location: string;
  date: string;
  rating: number;
  headline: string;
  text: string;
  stayType: string;
}

export default function HouseReviewsPage() {
  const { language } = useLanguage();

  const content = {
    bg: {
      eyebrow: 'ОТЗИВИ И ВПЕЧАТЛЕНИЯ',
      title: 'Какво споделят нашите гости? Отзиви за Къща за гости „Абстракт“',
      subtitle: 'Проверени отзиви от семейства и компании, наели Къща за гости „Абстракт“.',
      ratingScore: '5.0',
      ratingOutOf: 'от 5.0 звезди',
      basedOn: '100% петзвездни оценки от гости',
      formatStarsAria: (score: string | number) => `${score} от 5 звезди`,
      categories: [
        { label: 'Чистота и хигиена', score: '5.0' },
        { label: 'СПА и джакузи', score: '5.0' },
        { label: 'Механа и камина', score: '5.0' },
        { label: 'Гостоприемство', score: '5.0' },
      ],
      reviews: [
        {
          id: 1,
          author: 'Георги и приятели',
          location: 'София',
          date: 'Януари 2026',
          rating: 5,
          stayType: 'Зимен уикенд',
          headline: '„Топло джакузи сред снега!“',
          text: 'Горещото джакузи на открито и камината в механата бяха върхът! Безупречна чистота, изобилие от дърва и страхотно посрещане от Кристина и Камелия.',
        },
        {
          id: 2,
          author: 'Семейство Димитрови',
          location: 'Варна',
          date: 'Септември 2025',
          rating: 5,
          stayType: 'Семеен рожден ден',
          headline: '„Огромен двор за децата и кучето“',
          text: 'Бяхме 12 души с 3 деца и куче – ограденият двор е супер безопасен. Басейнът беше топъл и чист, а барбекюто под навеса събра цялата компания.',
        },
        {
          id: 3,
          author: 'Мартин С.',
          location: 'Пловдив',
          date: 'Ноември 2025',
          rating: 5,
          stayType: 'Уикенд с приятели',
          headline: '„Автентична механа и уют“',
          text: 'Механата е просторна, а Bluetooth колонката направи вечерта незабравима. Парното поддържаше цялата къща топла, а леглата са много удобни.',
        },
        {
          id: 4,
          author: 'Десислава М.',
          location: 'Ловеч',
          date: 'Август 2025',
          rating: 5,
          stayType: 'Лятна СПА почивка',
          headline: '„СПА оазис на 23 мин от Ловеч“',
          text: 'Басейнът, шезлонгите и сауната са прекрасни за пълно презареждане. Кухнята има абсолютно всичко за готвене на голяма група.',
        },
        {
          id: 5,
          author: 'Александър и компания',
          location: 'Русе',
          date: 'Декември 2025',
          rating: 5,
          stayType: 'Коледен уикенд',
          headline: '„Джакузи под звездите край Балкана“',
          text: 'Топ локация близо до Деветашката пещера и Крушунските водопади. Вечерите край огнището и горещото джакузи под звездите са незаменими.',
        },
      ] as HouseReview[],
      ctaTitle: 'Създайте и вие своите балкански спомени',
      ctaSubtitle: 'Запазете цялата къща директно за вашата компания.',
      ctaReserve: 'Резервирай сега',
      ctaContact: 'Свържи се с нас',
    },
    el: {
      eyebrow: 'ΚΡΙΤΙΚΕΣ ΕΠΙΣΚΕΠΤΩΝ',
      title: 'Τι μοιράζονται οι επισκέπτες μας; Κριτικές για τον Ξενώνα Abstract',
      subtitle: 'Επαληθευμένες εμπειρίες από παρέες και οικογένειες στον Ξενώνα Abstract.',
      ratingScore: '5.0',
      ratingOutOf: 'από 5.0 αστέρια',
      basedOn: '100% αξιολογήσεις 5 αστέρων',
      formatStarsAria: (score: string | number) => `${score} από 5 αστέρια`,
      categories: [
        { label: 'Καθαριότητα', score: '5.0' },
        { label: 'Σπα & Τζακούζι', score: '5.0' },
        { label: 'Ταβέρνα & Τζάκι', score: '5.0' },
        { label: 'Φιλοξενία', score: '5.0' },
      ],
      reviews: [
        {
          id: 1,
          author: 'Γκεόργκι & φίλοι',
          location: 'Σόφια',
          date: 'Ιανουάριος 2026',
          rating: 5,
          stayType: 'Χειμερινή απόδραση',
          headline: '«Ζεστό τζακούζι μέσα στο χιόνι!»',
          text: 'Το εξωτερικό τζακούζι στο χιόνι και το τζάκι στην ταβέρνα ήταν μοναδικά! Πεντακάθαροι χώροι, άφθονα ξύλα και άψογη φιλοξενία.',
        },
        {
          id: 2,
          author: 'Οικογένεια Ντιμιτρόφ',
          location: 'Βάρνα',
          date: 'Σεπτέμβριος 2025',
          rating: 5,
          stayType: 'Οικογενειακά γενέθλια',
          headline: '«Τεράστιος ασφαλής κήπος»',
          text: 'Μείναμε 12 άτομα με 3 παιδιά και σκύλο στην περιφραγμένη αυλή. Ζεστή πισίνα, υπέροχο σκεπαστό BBQ και απόλυτη ηρεμία.',
        },
        {
          id: 3,
          author: 'Μάρτιν Σ.',
          location: 'Πλόβντιβ',
          date: 'Νοέμβριος 2025',
          rating: 5,
          stayType: 'Σαββατοκύριακο με φίλους',
          headline: '«Αυθεντική ταβέρνα & ζεστασιά»',
          text: 'Ευρύχωρη ταβέρνα με ηχείο Bluetooth για αξέχαστες βραδιές. Η θέρμανση δούλευε άψογα και τα κρεβάτια ήταν εξαιρετικά άνετα.',
        },
        {
          id: 4,
          author: 'Ντεσισλάβα Μ.',
          location: 'Λόβετς',
          date: 'Αύγουστος 2025',
          rating: 5,
          stayType: 'Καλοκαιρινό σπα',
          headline: '«Όαση χαλάρωσης δίπλα στο Λόβετς»',
          text: 'Η θερμαινόμενη πισίνα, οι ξαπλώστρες και η σάουνα είναι υπέροχες. Πλήρως εξοπλισμένη κουζίνα για μεγάλη παρέα.',
        },
        {
          id: 5,
          author: 'Αλεξάνταρ & παρέα',
          location: 'Ρούσε',
          date: 'Δεκέμβριος 2025',
          rating: 5,
          stayType: 'Χριστουγεννιάτικο ΣΚ',
          headline: '«Τζακούζι κάτω από τα αστέρια»',
          text: 'Ιδανική βάση για το σπήλαιο Ντεβετάκι και τους καταρράκτες Κρουσούνα. Τα βράδια δίπλα στο τζάκι και στο ζεστό τζακούζι ήταν μαγικά.',
        },
      ] as HouseReview[],
      ctaTitle: 'Ζήστε τη δική σας απόδραση',
      ctaSubtitle: 'Κάντε κράτηση ολόκληρου του σπιτιού απευθείας.',
      ctaReserve: 'Κράτηση',
      ctaContact: 'Επικοινωνία',
    },
    en: {
      eyebrow: 'GUEST REVIEWS',
      title: 'What Do Our Guests Say? Verified Reviews for Abstract Guest House',
      subtitle: 'Verified stays from families and groups of friends at Abstract Guest House.',
      ratingScore: '5.0',
      ratingOutOf: 'out of 5.0 stars',
      basedOn: '100% five-star verified stays',
      formatStarsAria: (score: string | number) => `${score} out of 5 stars`,
      categories: [
        { label: 'Cleanliness & Care', score: '5.0' },
        { label: 'Spa & Hot Jacuzzi', score: '5.0' },
        { label: 'Tavern & Fireplace', score: '5.0' },
        { label: 'Host Hospitality', score: '5.0' },
      ],
      reviews: [
        {
          id: 1,
          author: 'Georgi & Friends',
          location: 'Sofia',
          date: 'January 2026',
          rating: 5,
          stayType: 'Winter Getaway',
          headline: '“Steaming hot tub in the snow!”',
          text: 'Soaking in the outdoor jacuzzi surrounded by snow and gathering around the tavern fireplace made the trip! Spotless rooms, abundant free firewood, and wonderful hosts.',
        },
        {
          id: 2,
          author: 'The Dimitrov Family',
          location: 'Varna',
          date: 'September 2025',
          rating: 5,
          stayType: 'Family Birthday',
          headline: '“Huge safe lawn for kids & our dog”',
          text: '12 guests, 3 kids, and a dog — the fenced garden gave everyone total freedom. Warm crystal-clear pool and a fantastic covered BBQ patio.',
        },
        {
          id: 3,
          author: 'Martin S.',
          location: 'Plovdiv',
          date: 'November 2025',
          rating: 5,
          stayType: 'Friends Weekend',
          headline: '“Authentic mehana & toasty rooms”',
          text: 'Spacious traditional tavern with a Bluetooth party speaker and zero curfew. Automated pellet heating kept every bedroom cozy all weekend.',
        },
        {
          id: 4,
          author: 'Desislava M.',
          location: 'Lovech',
          date: 'August 2025',
          rating: 5,
          stayType: 'Summer Spa Escape',
          headline: '“Private spa oasis 23 min from Lovech”',
          text: 'Heated pool, loungers, and sauna in complete countryside quiet. The kitchen had every appliance needed to cook effortlessly for a full house.',
        },
        {
          id: 5,
          author: 'Aleksandar & Group',
          location: 'Ruse',
          date: 'December 2025',
          rating: 5,
          stayType: 'Christmas Weekend',
          headline: '“Starlit jacuzzi near Krushuna Falls”',
          text: 'Perfect base for Devetashka Cave and Krushuna Waterfalls. Fireside dinners and the hot tub under winter stars were unforgettable.',
        },
      ] as HouseReview[],
      ctaTitle: 'Experience Your Own Balkan Retreat',
      ctaSubtitle: 'Book the whole estate directly for your family or group.',
      ctaReserve: 'Book The House',
      ctaContact: 'Contact Us',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <main className="min-h-screen bg-[#F5F2ED] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5B7A3A] mb-3">
            {t.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight mb-3 text-balance">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 text-pretty max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        {/* Rating Summary Card with Visual Score Bars */}
        <section aria-label={t.eyebrow} className="bg-white/80 backdrop-blur-xs rounded-2xl border border-zinc-300/80 p-6 sm:p-8 shadow-xs mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Big Score */}
                  <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-zinc-200/80 pb-6 lg:pb-0 lg:pr-8">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <span className="text-5xl sm:text-6xl font-serif font-extrabold text-[#5B7A3A] tabular-nums">
                        {t.ratingScore}
                      </span>
                      <div className="space-y-1">
                        <div
                          role="img"
                          aria-label={t.formatStarsAria(t.ratingScore)}
                          className="flex items-center gap-1 text-amber-500"
                        >
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                        <p className="text-xs font-semibold text-zinc-600">{t.ratingOutOf}</p>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-zinc-700">{t.basedOn}</p>
                  </div>

            {/* Category Score Bars */ }
                          < div className = "lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5" >
                          {
                            t.categories.map((cat, idx) => (
                              <div key={idx} className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                                <div className="flex items-center justify-between mb-2">
                                  <p className="text-xs font-bold text-zinc-800">{cat.label}</p>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-extrabold text-[#5B7A3A] tabular-nums">{cat.score}</span>
                                    <div
                                      role="img"
                                      aria-label={t.formatStarsAria(cat.score)}
                                      className="flex gap-0.5 text-amber-500"
                                    >
                                      {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" aria-hidden="true" />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden" aria-hidden="true">
                                  <div className="w-full h-full rounded-full bg-[#5B7A3A]" />
                                </div>
                              </div>
                            ))
                          }
                  </div>
                </div>
              </section>

              {/* Scannable Review Cards */}
              <section aria-label={t.title} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {t.reviews.map((rev) => (
                  <article
              key={rev.id}
              className="bg-white/80 backdrop-blur-xs rounded-2xl border border-zinc-300/80 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#5B7A3A]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    role="img"
                    aria-label={t.formatStarsAria(rev.rating)}
                    className="flex items-center gap-1 text-amber-500"
                  >
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-zinc-300" aria-hidden="true" />
                </div>

                <h2 className="text-base font-serif font-bold text-[#3D2B1F] mb-2 text-balance">
                  {rev.headline}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-5 text-pretty">
                  {rev.text}
                </p>
              </div>

                      <div className="pt-3.5 border-t border-zinc-200/80 flex items-center justify-between gap-2">
                        <div>
                          <p className="font-bold text-xs sm:text-sm text-zinc-900">{rev.author}</p>
                          <p className="text-xs text-zinc-600 tabular-nums">
                            {rev.location} • {rev.date}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[#5B7A3A] bg-[#5B7A3A]/10 px-2.5 py-1 rounded-md whitespace-nowrap">
                          {rev.stayType}
                        </span>
                      </div>
                    </article>
                  ))}
              </section>

          {/* Bottom CTA */}
          <section aria-label={t.ctaTitle} className="bg-[#5B7A3A] rounded-2xl p-8 sm:p-10 text-center text-white shadow-md relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-2 text-balance">
              {t.ctaTitle}
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm sm:text-base text-pretty">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/house/reserve"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#5B7A3A] font-bold text-sm hover:bg-zinc-100 transition-colors shadow-xs"
              >
                {t.ctaReserve}
              </Link>
              <Link
                href="/house/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors shadow-xs"
              >
                {t.ctaContact}
              </Link>
            </div>
          </section>
        </div>
      </main>
  );
}
