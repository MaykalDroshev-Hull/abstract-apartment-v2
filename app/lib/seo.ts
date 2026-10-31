import type { Metadata } from 'next';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://abstractapartment.com';

export interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  aiSummary?: string;
  property?: 'house' | 'apartments';
  ogImage?: string;
  ogAlt?: string;
  siteName?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  aiSummary,
  property,
  ogImage = '/Images/Gallery/KitchenArea.jpg',
  ogAlt = 'Abstract Apartment – Beachfront Holiday Accommodation',
  siteName = 'Abstract Apartment & Guest House',
}: PageSeoOptions): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const resolvedProperty: 'house' | 'apartments' =
    property ?? (canonicalPath.startsWith('/house') ? 'house' : 'apartments');

  const geoMeta: Record<string, string> =
    resolvedProperty === 'house'
      ? {
          'geo.region': 'BG-11',
          'geo.placename': 'Golets, Ugarchin, Lovech, Bulgaria',
          'geo.position': '43.0800;24.5200',
          ICBM: '43.0800, 24.5200',
          'ai:entity':
            'Abstract Guest House (Къща за гости „Абстракт“) – Private Balkan Spa Villa in Golets, Lovech Province, Bulgaria',
          'ai:booking-url': `${SITE_URL}/house/reserve`,
        }
      : {
          'geo.region': 'GR-55',
          'geo.placename': 'Paralia Ofriniou, Kavala, Greece',
          'geo.position': '40.7745;23.9038',
          ICBM: '40.7745, 23.9038',
          'ai:entity':
            'Abstract Apartment & Abstract Studio – Beachfront Holiday Rental in Paralia Ofriniou (Costa Ofrynio), Kavala, Greece (AMA 00003339938)',
          'ai:booking-url': `${SITE_URL}/apartments/reserve`,
        };

  return {
    title,
    description,
    category: 'Travel & Vacation Rentals',
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['bg_BG', 'el_GR'],
      url: canonicalPath,
      siteName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    other: {
      bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      perplexitybot: 'index, follow, max-snippet:-1, max-image-preview:large',
      gptbot: 'index, follow',
      'oai-searchbot': 'index, follow',
      claudebot: 'index, follow',
      'google-extended': 'index, follow',
      'tdm-reservation': '0',
      'ai:llms-txt': `${SITE_URL}/llms.txt`,
      'ai:llms-full-txt': `${SITE_URL}/llms-full.txt`,
      'ai:languages': 'en, bg, el',
      'ai:summary': aiSummary || description,
      ...geoMeta,
    },
  };
}

export function getGlobalWebsiteJsonLd(): Array<Record<string, unknown>> {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Abstract Hospitality – Abstract Apartment (Greece) & Abstract Guest House (Bulgaria)',
      alternateName: [
        'Abstract Apartment',
        'Abstract Guest House',
        'Къща за гости Абстракт',
        'Апартамент Абстракт Офринио',
        'Ξενώνας Abstract',
      ],
      url: SITE_URL,
      email: 'abstract.apartments@gmail.com',
      telephone: '+359878112454',
      knowsLanguage: ['en', 'bg', 'el'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'reservations',
          name: 'Abstract Guest House Reservations (Golets, Bulgaria)',
          telephone: '+359878112454',
          email: 'abstract.apartments@gmail.com',
          areaServed: ['BG', 'GR', 'EU'],
          availableLanguage: ['Bulgarian', 'English', 'Greek'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'reservations',
          name: 'Abstract Apartment & Studio Reservations (Paralia Ofriniou, Greece)',
          telephone: '+359886790681',
          email: 'abstract.apartments@gmail.com',
          areaServed: ['GR', 'BG', 'EU'],
          availableLanguage: ['English', 'Bulgarian', 'Greek'],
        },
      ],
      sameAs: [
        'https://www.facebook.com/profile.php?id=61575061973914',
        'https://www.instagram.com/abstract_apartment/',
      ],
      subjectOf: [
        {
          '@type': 'DigitalDocument',
          name: 'Abstract Hospitality LLM Summary (llms.txt)',
          encodingFormat: 'text/markdown',
          url: `${SITE_URL}/llms.txt`,
        },
        {
          '@type': 'DigitalDocument',
          name: 'Abstract Hospitality Complete AI Knowledge Base (llms-full.txt)',
          encodingFormat: 'text/markdown',
          url: `${SITE_URL}/llms-full.txt`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Abstract Apartment & Abstract Guest House',
      url: SITE_URL,
      inLanguage: ['en', 'bg', 'el'],
      publisher: { '@id': `${SITE_URL}/#organization` },
      about: [
        { '@id': `${SITE_URL}/apartments#lodging` },
        { '@id': `${SITE_URL}/house#lodging` },
      ],
    },
  ];
}

export function getBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

export const HOUSE_IMAGES_META = [
  {
    src: '/Images/House/house-facade-pool-courtyard.jpg',
    name: 'Abstract Guest House Revival Facade, Veranda & Heated Pool',
    description:
      'Two-story Bulgarian Revival guest house in Golets with stone masonry, glazed wooden veranda (chardak), enclosed green lawn, and heated outdoor swimming pool.',
  },
  {
    src: '/Images/House/hearth-room-wide.jpg',
    name: 'Hearth Room with Authentic Open Clay Fireplace',
    description:
      'Traditional Bulgarian Hearth Room featuring a hand-plastered clay fireplace, hanging iron cauldron, antique copperware, woven cherga rugs, and double bed with lace bedspread.',
  },
  {
    src: '/Images/House/pool-turquoise-water-closeup.jpg',
    name: 'Heated Outdoor Swimming Pool',
    description:
      'Crystal-clear heated outdoor swimming pool with granite sun terrace, open seasonally from April through October.',
  },
  {
    src: '/Images/House/house-facade-veranda-stone-wall.jpg',
    name: 'Hand-Stacked Stone Masonry & Timber Veranda',
    description:
      'Exterior architectural view of Abstract Guest House showcasing hand-stacked Balkan stone walls, dark timber beams, and a flagstone garden path.',
  },
  {
    src: '/Images/House/large-room-wide.jpg',
    name: 'Spacious Revival Bedroom with Double Bed & Sofa Bed',
    description:
      'Generously sized upstairs bedroom with exposed dark timber ceiling beams, double bed, lace-draped pull-out sofa bed, rustic wooden table, and handwoven rug.',
  },
  {
    src: '/Images/House/courtyard-pool-from-porch.jpg',
    name: 'Enclosed Private Courtyard Viewed from Porch',
    description:
      'View from beneath the shaded wooden veranda across the child- and pet-safe enclosed green garden toward the heated swimming pool.',
  },
  {
    src: '/Images/House/courtyard-pool-dusk-lantern.jpg',
    name: 'Evening Courtyard Ambience Under Lantern Light',
    description:
      'Warm Edison-bulb porch lantern illuminating the stone masonry wall, manicured lawn, and heated pool at twilight.',
  },
  {
    src: '/Images/House/hearth-room-folk-costume.jpg',
    name: 'Bulgarian Revival Heritage & Folklore Atmosphere',
    description:
      'Authentic Bulgarian Revival interior atmosphere inside the Hearth Room highlighting traditional craftsmanship and textiles.',
  },
  {
    src: '/Images/House/hearth-room-rocking-chair.jpg',
    name: 'Fireside Reading Nook with Rocking Chair',
    description:
      'Cushioned wooden rocking chair set on sheepskin beside the open hearth fireplace and antique shelves.',
  },
  {
    src: '/Images/House/large-room-seating-windows.jpg',
    name: 'Sunlit Bedroom with Lace Curtains & Timber Ceiling Beams',
    description:
      'Daylight streaming through twin lace-curtained windows onto woven cherga rugs, carved wooden chest, and timber ceiling beams.',
  },
  {
    src: '/Images/House/hearth-room-toward-veranda.jpg',
    name: 'Hearth Room Direct Access to Sunlit Veranda',
    description:
      'View from the Hearth Room toward the open wooden door leading onto the panoramic glazed veranda.',
  },
  {
    src: '/Images/House/bathroom-vintage-brass.jpg',
    name: 'Vintage-Style Bathroom with Antique Brass Fixtures',
    description:
      'Traditional-style bathroom appointed with embossed bronze tiles, ornate oval antique brass mirror, and modern rain shower.',
  },
  {
    src: '/Images/House/courtyard-pool-dusk-wide.jpg',
    name: 'Flagstone Garden Path & Illuminated Pool at Dusk',
    description:
      'Wide twilight perspective across the enclosed green lawn and flagstone stepping path toward the illuminated pool.',
  },
  {
    src: '/Images/House/hearth-room-cauldron-shelves.jpg',
    name: 'Traditional Hearth Cauldron, Firewood & Copperware Shelves',
    description:
      'Detail of the open hearth canopy with firewood logs, hanging iron cauldron, sheepskins, and shelves of Troyan pottery.',
  },
  {
    src: '/Images/House/large-room-ceiling-beams-wardrobe.jpg',
    name: 'Carved Wooden Dowry Chest, Antique Wardrobe & Ceiling Beams',
    description:
      'Authentic Bulgarian woodwork details including dark ceiling beams, solid timber wardrobe, candelabra table, and carved wooden chest.',
  },
];

export function getHouseLodgingJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['VacationRental', 'LodgingBusiness'],
    '@id': `${SITE_URL}/house#lodging`,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    name: 'Abstract Guest House (Къща за гости „Абстракт“)',
    alternateName: [
      'Къща за гости Абстракт',
      'Къща за гости Абстракт с. Голец',
      'Guest House Abstract Golets',
      'Ξενώνας Abstract Γκόλετς',
    ],
    slogan: 'Where Modern Comfort Meets Bulgarian Tradition (Където модерното среща традицията)',
    description:
      'Exclusive whole-house vacation rental in Golets village, Ugarchin Municipality, Lovech Province, Bulgaria (up to 14 guests: 8–10 adults + 4 children across 4 bedrooms and 4 bathrooms). Features Bulgarian Revival stone-and-timber architecture, traditional mehana tavern with free firewood, year-round 5-seater outdoor hot jacuzzi (works in winter snow), 3-seater infrared sauna, heated seasonal outdoor pool (April–October), pellet central heating, 4 free parking spaces, and an enclosed pet-friendly garden (pets stay free).',
    url: `${SITE_URL}/house`,
    logo: `${SITE_URL}/Images/House/house-logo.png`,
    hasMap: 'https://maps.app.goo.gl/2p3M23H97QCURvqN7',
    telephone: '+359878112454',
    email: 'abstract.apartments@gmail.com',
    knowsLanguage: ['bg', 'en', 'el'],
    priceRange: '€300 - €350 per night (entire house up to 14 guests)',
    currenciesAccepted: 'EUR, BGN',
    checkinTime: '12:00:00',
    checkoutTime: '11:00:00',
    petsAllowed: true,
    numberOfRooms: 4,
    maximumAttendeeCapacity: 14,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Vasil Levski',
      addressLocality: 'Golets, Ugarchin Municipality',
      addressRegion: 'Lovech Province',
      postalCode: '5584',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.08,
      longitude: 24.52,
    },
    containsPlace: [
      {
        '@type': 'Accommodation',
        name: 'Room with Fireplace (Стая с огнище)',
        description:
          '1st-floor mountain-view bedroom with authentic open clay fireplace, 1 double bed + 1 pull-out sofa bed, shared modern floor bathroom, veranda access, Smart TV, and Wi-Fi.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      },
      {
        '@type': 'Accommodation',
        name: 'Large Room (Голяма стая)',
        description:
          'Spacious 1st-floor mountain-view bedroom with exposed timber beams, 1 double bed + 1 pull-out sofa bed, shared modern floor bathroom, veranda access, Smart TV, and Wi-Fi.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      },
      {
        '@type': 'Accommodation',
        name: 'Panoramic Room 1 (Панорамна стая 1)',
        description:
          'En-suite bedroom overlooking the courtyard and heated swimming pool, with 1 double bed + 1 pull-out sofa bed, private bathroom, air conditioning, Smart satellite TV, and Wi-Fi.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      },
      {
        '@type': 'Accommodation',
        name: 'Panoramic Room 2 (Панорамна стая 2)',
        description:
          'En-suite bedroom overlooking the courtyard and heated swimming pool, with 1 double bed + 1 pull-out sofa bed, private bathroom, air conditioning, Smart satellite TV, and Wi-Fi.',
        occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Weekday Whole-House Package (Sunday – Thursday)',
        description:
          'Exclusive rental of the entire Abstract Guest House (up to 14 guests, minimum 1 night), including year-round outdoor hot jacuzzi, infrared sauna, seasonal heated pool, firewood, and free pet stays.',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 300,
          priceCurrency: 'EUR',
          unitCode: 'DAY',
        },
        url: `${SITE_URL}/house/reserve`,
      },
      {
        '@type': 'Offer',
        name: 'Weekend Whole-House Package (Friday – Saturday)',
        description:
          'Exclusive weekend rental of the entire Abstract Guest House (up to 14 guests, minimum 2 nights), including year-round outdoor hot jacuzzi, infrared sauna, seasonal heated pool, firewood, and free pet stays.',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 350,
          priceCurrency: 'EUR',
          unitCode: 'DAY',
        },
        url: `${SITE_URL}/house/reserve`,
      },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Exclusive Whole-House Rental (Up to 14 Guests)', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Year-Round 5-Seater Outdoor Hot Jacuzzi (Works in Winter Snow)', value: true },
      { '@type': 'LocationFeatureSpecification', name: '3-Seater Infrared Sauna', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Heated Outdoor Swimming Pool (April–October)', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Traditional Mehana Tavern with Wood Fireplace & Free Firewood', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Covered Wood BBQ & Outdoor Dining Pavilion for 14+ Guests', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fully Equipped Modern Kitchen with Dishwasher & Coffee Maker', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pellet Central Heating & Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Work-From-Home High-Speed Wi-Fi & Smart Satellite TVs', value: true },
      { '@type': 'LocationFeatureSpecification', name: '4 Free Private Parking Spaces & Paved Asphalt Access Year-Round', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Enclosed Child-Safe & Free Pet-Friendly Courtyard', value: true },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '5',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/house/reserve`,
        inLanguage: ['bg', 'en', 'el'],
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'LodgingReservation',
        name: 'Reserve Entire Abstract Guest House',
      },
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2'],
    },
    image: HOUSE_IMAGES_META.slice(0, 8).map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${img.src}`,
      url: `${SITE_URL}${img.src}`,
      name: img.name,
      caption: img.description,
      description: img.description,
    })),
    sameAs: [
      'https://www.facebook.com/profile.php?id=61575061973914',
      'https://www.instagram.com/abstract_apartment/',
    ],
  };
}

export function getHouseRatesJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Abstract Guest House Whole-House Rental Rates (Golets, Bulgaria)',
    url: `${SITE_URL}/house/rates`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@id': `${SITE_URL}/house#lodging` },
        name: 'Weekday Whole-House Rate (Sunday – Thursday)',
        description:
          '€300 per night (approx. 586 BGN) for the entire house up to 14 guests. Minimum stay: 1 night. Includes outdoor hot jacuzzi, infrared sauna, seasonal heated pool, firewood, Wi-Fi, parking, and free pets.',
        price: '300',
        priceCurrency: 'EUR',
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 1, unitText: 'NIGHT' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@id': `${SITE_URL}/house#lodging` },
        name: 'Weekend Whole-House Rate (Friday – Saturday)',
        description:
          '€350 per night (approx. 684 BGN) for the entire house up to 14 guests. Minimum stay: 2 nights. Includes outdoor hot jacuzzi, infrared sauna, seasonal heated pool, firewood, Wi-Fi, parking, and free pets.',
        price: '350',
        priceCurrency: 'EUR',
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 2, unitText: 'NIGHT' },
      },
    ],
  };
}

export function getHouseGuideJsonLd(): Record<string, unknown> {
  const attractions = [
    { name: 'Kavuka Waterfall (Водопад Кавука)', distance: '2 km (5 min) in Golets village' },
    { name: 'Golets Village Lakes (Селските язовири на Голец)', distance: '1.5 km (3 min) fishing & picnics' },
    { name: 'Sopot Dam / Lake Sopot (Язовир Сопот)', distance: '15 km (15 min) boating, kayaking & fish taverns' },
    { name: 'Tabashka Cave (Табашка пещера)', distance: '24 km (22 min) prehistoric riverside cave' },
    { name: 'Lovech Covered Bridge, Varosha Old Town & Medieval Fortress', distance: '25 km (23 min) Kolyo Ficheto landmark' },
    { name: 'Lovech Zoo in Stratesh Park (Зоопарк Ловеч)', distance: '26 km (24 min) 2nd largest zoo in Bulgaria' },
    { name: 'Dupkata Natural Rock Arch, Aglen (Скална арка „Дупката“ с. Ъглен)', distance: '28 km (25 min) Vit river canyon' },
    { name: 'Sostra Roman Fortress, Lomets (Римска крепост Состра)', distance: '30 km (25 min) ancient Via Trajana castellum' },
    { name: 'Iskar–Panega Geopark Eco-Trail (Екопътека Искър – Панега)', distance: '35 km (30 min) turquoise canyon & cliff boardwalks' },
    { name: 'Devetashka Cave (Деветашка пещера)', distance: '45 km (40 min) colossal cave with 7 ceiling skylights' },
    { name: 'Krushuna Waterfalls (Крушунски водопади)', distance: '55 km (45 min) Bulgaria’s largest turquoise travertine cascades' },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '11 Attractions & Natural Wonders Near Abstract Guest House (Golets, Lovech & Troyan)',
    url: `${SITE_URL}/house/guide`,
    numberOfItems: attractions.length,
    itemListElement: attractions.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'TouristAttraction',
        name: item.name,
        description: `${item.distance} from Abstract Guest House in Golets, Lovech Province, Bulgaria.`,
      },
    })),
  };
}

export function getHouseReviewsJsonLd(): Record<string, unknown> {
  const reviews = [
    {
      author: 'Georgi & Friends (Sofia)',
      datePublished: '2026-01-15',
      reviewBody:
        'The outdoor hot tub jacuzzi in the snow and the mehana fireplace were the absolute highlight of our stay! Spotlessly clean, abundant free firewood, and wonderfully responsive hosts Kristina and Kameliya.',
    },
    {
      author: 'Dimitrovi Family (Varna)',
      datePublished: '2025-09-20',
      reviewBody:
        'We rented the whole house for a birthday with 12 people, 3 kids, and a dog. The fenced yard is huge and super safe, the heated pool was warm and clean, and the covered BBQ area is fantastic.',
    },
    {
      author: 'Martin S. (Plovdiv)',
      datePublished: '2025-11-10',
      reviewBody:
        'Spacious and authentic traditional mehana with party speaker, reliable pellet central heating keeping every room warm, and very comfortable beds.',
    },
    {
      author: 'Desislava M. (Lovech)',
      datePublished: '2025-08-18',
      reviewBody:
        'A true oasis of tranquility just 25 minutes from Lovech. The heated pool, loungers, infrared sauna, and fully equipped kitchen for a large group were superb.',
    },
    {
      author: 'Aleksandar & Group (Ruse)',
      datePublished: '2025-12-22',
      reviewBody:
        'Great location near Devetashka Cave and Krushuna Waterfalls. Unforgettable winter evenings by the hearth and under the stars in the hot outdoor jacuzzi.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Verified Guest Reviews for Abstract Guest House (Golets, Bulgaria)',
    url: `${SITE_URL}/house/reviews`,
    itemListElement: reviews.map((rev, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Review',
        itemReviewed: { '@id': `${SITE_URL}/house#lodging` },
        author: { '@type': 'Person', name: rev.author },
        datePublished: rev.datePublished,
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        reviewBody: rev.reviewBody,
      },
    })),
  };
}

export function getHouseDirectionsJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Abstract Guest House Location & Driving Access (Golets, Bulgaria)',
    url: `${SITE_URL}/house/getting-here`,
    hasMap: 'https://maps.app.goo.gl/2p3M23H97QCURvqN7',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Vasil Levski',
      addressLocality: 'Golets, Ugarchin Municipality',
      addressRegion: 'Lovech Province',
      postalCode: '5584',
      addressCountry: 'BG',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 43.08, longitude: 24.52 },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Driving distance from Sofia', value: '130 km (1 hour 40 minutes via Hemus A2)' },
      { '@type': 'PropertyValue', name: 'Driving distance from Plovdiv', value: '160 km (2 hours 30 minutes)' },
      { '@type': 'PropertyValue', name: 'Driving distance from Lovech & Troyan', value: '25 km (23 minutes)' },
      { '@type': 'PropertyValue', name: 'Road access', value: 'Direct paved asphalt road year-round; no 4x4 vehicle needed in winter' },
      { '@type': 'PropertyValue', name: 'Nearest grocery shop', value: '2-minute walk in Golets village' },
    ],
  };
}

export function getHouseContactJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Hosts Kristina & Kameliya Ivanova – Abstract Guest House Golets',
    url: `${SITE_URL}/house/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Abstract Guest House (Къща за гости „Абстракт“)',
      email: 'abstract.apartments@gmail.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          name: 'Kristina Ivanova (Co-Host & Reservations, Phone & Viber)',
          telephone: '+359878112454',
          contactType: 'reservations',
          availableLanguage: ['Bulgarian', 'English', 'Greek'],
        },
        {
          '@type': 'ContactPoint',
          name: 'Kameliya Ivanova (Co-Host & Guest Care)',
          telephone: '+359889226794',
          contactType: 'customer support',
          availableLanguage: ['Bulgarian', 'English'],
        },
      ],
    },
  };
}

export function getHouseGalleryJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Abstract Guest House Photo Gallery – Golets, Bulgaria',
    description:
      'Curated photographs of Abstract Guest House in Golets, Lovech Province: Bulgarian Revival stone-and-timber architecture, authentic Hearth Room, spacious bedrooms, vintage brass bathroom, enclosed lawn, and heated outdoor pool.',
    url: `${SITE_URL}/house/gallery`,
    about: { '@id': `${SITE_URL}/house#lodging` },
    associatedMedia: HOUSE_IMAGES_META.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${img.src}`,
      url: `${SITE_URL}${img.src}`,
      name: img.name,
      caption: img.description,
      description: img.description,
    })),
  };
}

export function getHouseFaqJsonLd(): Record<string, unknown> {
  const faqs = [
    {
      q: 'Can we rent individual rooms or only the whole house?',
      a: 'Abstract Guest House is rented exclusively as an entire house for up to 14 guests, guaranteeing 100% privacy and peaceful seclusion for your group.',
    },
    {
      q: 'What is the maximum guest capacity of Abstract Guest House?',
      a: 'Up to 14 guests (8–10 adults plus 4 children) across 4 bedrooms equipped with double beds and pull-out sofa beds, plus 4 bathrooms.',
    },
    {
      q: 'What are the check-in and check-out times?',
      a: 'Check-in is from 12:00 PM (by prior arrangement) and check-out is by 11:00 AM.',
    },
    {
      q: 'Does the outdoor jacuzzi operate in winter in the snow?',
      a: 'Yes, the 5-person outdoor hot tub jacuzzi operates 365 days a year with heated water, including during snowy winter evenings, and is included free in the price.',
    },
    {
      q: 'When is the outdoor swimming pool heated and open?',
      a: 'The heated outdoor swimming pool is open seasonally from April through October inclusive.',
    },
    {
      q: 'Is firewood provided free for the fireplace and BBQ?',
      a: 'Yes, unlimited complimentary firewood is provided for both the indoor mehana fireplace and the outdoor barbecue.',
    },
    {
      q: 'Are pets allowed and is there a pet fee?',
      a: 'Well-behaved pets and dogs are welcome completely free of charge inside our fully fenced, secure garden.',
    },
    {
      q: 'Are parties and music allowed?',
      a: 'Yes! Outdoor loud music is permitted until 10:00 PM (22:00); after 10:00 PM celebrations and music continue inside the insulated traditional mehana tavern without time limits.',
    },
    {
      q: 'What are the nightly rates and minimum stay requirements?',
      a: 'Weekdays (Sunday–Thursday): €300 per night for the entire house (1 night minimum). Weekends (Friday–Saturday): €350 per night for the entire house (2 nights minimum).',
    },
    {
      q: 'Is parking available on site and do we need a 4x4 car in winter?',
      a: '4 dedicated private parking spaces directly in front of the house are included free of charge, and a paved asphalt road leads right to the gate (no 4x4 needed in winter).',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function getApartmentLodgingJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['VacationRental', 'LodgingBusiness'],
    '@id': `${SITE_URL}/apartments#lodging`,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    name: 'Abstract Apartment & Abstract Studio – Paralia Ofriniou, Greece',
    alternateName: [
      'Abstract Apartment',
      'Abstract Studio Paralia Ofriniou',
      'Апартамент Абстракт Офринио',
      'Апартамент Абстракт Коста Офринио',
      'Abstract Apartment Costa Ofrynio',
    ],
    identifier: 'AMA 00003339938',
    description:
      'Beachfront holiday accommodation at Martini 7, Paralia Ofriniou (Costa Ofrynio) 640 08, Kavala Region, Greece — just a 2-minute flat walk from the sandy Aegean Sea beach and seaside taverns. Offering a spacious 2-bedroom Apartment with large BBQ terrace & private parking (up to 6 guests, €100–€160/night May–October) and a cozy Studio (€80–€110/night May–October), with a Book 7 Nights Get 1 Night Free promotion.',
    url: `${SITE_URL}/apartments`,
    hasMap: 'https://maps.google.com/?q=Martini+7+Paralia+Ofriniou+640+08+Greece',
    telephone: '+359886790681',
    email: 'abstract.apartments@gmail.com',
    knowsLanguage: ['en', 'bg', 'el'],
    priceRange: '€80 - €160 per night (€180 - €270 combined)',
    currenciesAccepted: 'EUR',
    checkinTime: '15:00:00',
    checkoutTime: '10:00:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Martini 7',
      addressLocality: 'Paralia Ofriniou',
      addressRegion: 'Kavala',
      postalCode: '640 08',
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7745,
      longitude: 23.9038,
    },
    containsPlace: [
      {
        '@type': 'Accommodation',
        name: 'Abstract Apartment (2-Bedroom Apartment with BBQ Terrace)',
        description:
          'Spacious family apartment sleeping up to 6 guests: 2 double bedrooms, open-plan living room with pull-out sofa bed, full kitchen, washing machine, AC in every room, Smart TV, large furnished BBQ terrace, and dedicated private parking.',
        numberOfBedrooms: 2,
        numberOfBathroomsTotal: 1,
        occupancy: { '@type': 'QuantitativeValue', maxValue: 6 },
      },
      {
        '@type': 'Accommodation',
        name: 'Abstract Studio',
        description:
          'Cozy air-conditioned studio with double bed, sofa bed, equipped kitchenette, private bathroom, TV, fast free Wi-Fi, and furnished balcony just 2 minutes from the beach.',
        numberOfBedrooms: 1,
        numberOfBathroomsTotal: 1,
        occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Abstract Apartment Seasonal Rental (May – October)',
        description:
          '€100/night (May & October), €130/night (June & September), €160/night (July & August). Minimum stay 3 nights. Book 7 nights and receive 1 night free.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 100,
          maxPrice: 160,
          priceCurrency: 'EUR',
        },
        url: `${SITE_URL}/apartments/reserve?villa=apartment`,
      },
      {
        '@type': 'Offer',
        name: 'Abstract Studio Seasonal Rental (May – October)',
        description:
          '€80/night (May & October), €100/night (June & September), €110/night (July & August). Minimum stay 3 nights. Book 7 nights and receive 1 night free.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 80,
          maxPrice: 110,
          priceCurrency: 'EUR',
        },
        url: `${SITE_URL}/apartments/reserve?villa=studio`,
      },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '2 Minutes Walk to the Sandy Aegean Beach & Taverns', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning in Every Room', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fully Equipped Kitchen & Kitchenette', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Large Furnished Terrace with Built-In BBQ', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Private Dedicated Parking Space (Apartment)', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fast Free Wi-Fi, Smart TV & Washing Machine', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Book 7 Nights, Get 8th Night Free Promotion', value: true },
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/apartments/reserve`,
        inLanguage: ['en', 'bg', 'el'],
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'LodgingReservation',
        name: 'Reserve Abstract Apartment or Abstract Studio',
      },
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2'],
    },
    image: [
      {
        '@type': 'ImageObject',
        contentUrl: `${SITE_URL}/Images/Gallery/LivingArea1.jpg`,
        url: `${SITE_URL}/Images/Gallery/LivingArea1.jpg`,
        name: 'Abstract Apartment Open-Plan Living & Dining Area',
        description: 'Bright open-plan living and dining room at Abstract Apartment in Paralia Ofriniou, Greece.',
      },
      {
        '@type': 'ImageObject',
        contentUrl: `${SITE_URL}/Images/Gallery/BigTerrace.jpg`,
        url: `${SITE_URL}/Images/Gallery/BigTerrace.jpg`,
        name: 'Spacious Outdoor Dining Terrace with BBQ',
        description: 'Large furnished terrace for outdoor dining and relaxation at Abstract Apartment.',
      },
      {
        '@type': 'ImageObject',
        contentUrl: `${SITE_URL}/Images/Gallery/KitchenArea.jpg`,
        url: `${SITE_URL}/Images/Gallery/KitchenArea.jpg`,
        name: 'Fully Equipped Modern Kitchen',
        description: 'Modern fully equipped kitchen area at Abstract Apartment in Paralia Ofriniou.',
      },
      {
        '@type': 'ImageObject',
        contentUrl: `${SITE_URL}/Images/Gallery/Bedroom1.jpg`,
        url: `${SITE_URL}/Images/Gallery/Bedroom1.jpg`,
        name: 'Air-Conditioned Double Bedroom with Terrace Access',
        description: 'Comfortable double bedroom with air conditioning and terrace access at Abstract Apartment.',
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61575061973914',
      'https://www.instagram.com/abstract_apartment/',
    ],
  };
}

export function getApartmentRatesJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Abstract Apartment & Studio Seasonal Rates (Paralia Ofriniou, Greece)',
    url: `${SITE_URL}/apartments/rates`,
    description:
      'Monthly nightly EUR rates from May through October. Minimum stay: 3 nights. Reservation deposit: 30%. Long-stay promotion: Book 7 nights and receive 1 night free.',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Abstract Apartment – May & October',
        price: '100',
        priceCurrency: 'EUR',
        description: '€100/night for up to 6 guests (May 1–31 and October 1–31).',
      },
      {
        '@type': 'Offer',
        name: 'Abstract Apartment – June & September',
        price: '130',
        priceCurrency: 'EUR',
        description: '€130/night for up to 6 guests (June 1–30 and September 1–30).',
      },
      {
        '@type': 'Offer',
        name: 'Abstract Apartment – July & August',
        price: '160',
        priceCurrency: 'EUR',
        description: '€160/night for up to 6 guests (July 1–31 and August 1–31).',
      },
      {
        '@type': 'Offer',
        name: 'Abstract Studio – May & October',
        price: '80',
        priceCurrency: 'EUR',
        description: '€80/night for Abstract Studio (May 1–31 and October 1–31).',
      },
      {
        '@type': 'Offer',
        name: 'Abstract Studio – June & September',
        price: '100',
        priceCurrency: 'EUR',
        description: '€100/night for Abstract Studio (June 1–30 and September 1–30).',
      },
      {
        '@type': 'Offer',
        name: 'Abstract Studio – July & August',
        price: '110',
        priceCurrency: 'EUR',
        description: '€110/night for Abstract Studio (July 1–31 and August 1–31).',
      },
    ],
  };
}

export function getApartmentGalleryJsonLd(): Record<string, unknown> {
  const photos = [
    {
      src: '/Images/Gallery/LivingArea1.jpg',
      name: 'Abstract Apartment Open-Plan Living & Dining Room',
      description: 'Sunlit air-conditioned open-plan living room with sofa bed and dining table at Abstract Apartment in Paralia Ofriniou.',
    },
    {
      src: '/Images/Gallery/BigTerrace.jpg',
      name: 'Large Outdoor Dining Terrace with BBQ',
      description: 'Spacious private outdoor terrace with dining table and built-in barbecue at Abstract Apartment.',
    },
    {
      src: '/Images/Gallery/KitchenArea.jpg',
      name: 'Fully Equipped Modern Kitchen',
      description: 'Full kitchen with oven, stove, refrigerator, coffee maker, and cookware at Abstract Apartment.',
    },
    {
      src: '/Images/Gallery/Bedroom1.jpg',
      name: 'Primary Double Bedroom with Terrace Access',
      description: 'Comfortable air-conditioned double bedroom at Abstract Apartment in Paralia Ofriniou, Greece.',
    },
    {
      src: '/Images/Gallery/Bedroom2.jpg',
      name: 'Second Double Bedroom',
      description: 'Bright second double bedroom with air conditioning and storage at Abstract Apartment.',
    },
    {
      src: '/Images/abstract%20Studio/abstract-studio%20(3).jpg',
      name: 'Abstract Studio Interior',
      description: 'Cozy air-conditioned Abstract Studio with double bed, kitchenette, and private bathroom in Paralia Ofriniou.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Abstract Apartment & Studio Photo Gallery – Paralia Ofriniou, Greece',
    url: `${SITE_URL}/apartments/gallery`,
    about: { '@id': `${SITE_URL}/apartments#lodging` },
    associatedMedia: photos.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}${img.src}`,
      url: `${SITE_URL}${img.src}`,
      name: img.name,
      caption: img.description,
      description: img.description,
    })),
  };
}

export function getApartmentGuideJsonLd(): Record<string, unknown> {
  const spots = [
    { name: 'Paralia Ofriniou Beach & Promenade (Costa Ofrynio)', desc: '2-minute walk from Abstract Apartment — 15 km sandy Aegean beach, beach bars, and seafood taverns.' },
    { name: 'Lion of Amphipolis & Ancient Amphipolis Museum', desc: '10-minute drive — iconic 4th-century BC monument and archaeological museum.' },
    { name: 'Ammolofoi Sand Dunes Beach (Nea Peramos)', desc: '35-minute drive — crystal-clear turquoise lagoons and fine golden sand dunes.' },
    { name: 'Aggitis River Cave & Alistrati Cave', desc: '45-minute drive — spectacular underground stalactite caves in Northern Greece.' },
    { name: 'Kavala Old Town, Aqueduct & Fortress', desc: '45-minute drive — scenic amphitheatrical Aegean port city and Philippi UNESCO site.' },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Beaches, Taverns & Day Trips Near Paralia Ofriniou – Abstract Apartment Guide',
    url: `${SITE_URL}/apartments/guide`,
    numberOfItems: spots.length,
    itemListElement: spots.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.desc,
      },
    })),
  };
}

export function getApartmentDirectionsJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Abstract Apartment & Studio Location (Martini 7, Paralia Ofriniou, Greece)',
    url: `${SITE_URL}/apartments/getting-here`,
    hasMap: 'https://maps.google.com/?q=Martini+7+Paralia+Ofriniou+640+08+Greece',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Martini 7',
      addressLocality: 'Paralia Ofriniou',
      addressRegion: 'Kavala',
      postalCode: '640 08',
      addressCountry: 'GR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.7745, longitude: 23.9038 },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Walking distance to Aegean beach & taverns', value: '2 minutes flat walk' },
      { '@type': 'PropertyValue', name: 'Private parking', value: 'Dedicated on-site parking space included for Abstract Apartment' },
    ],
  };
}

export function getApartmentContactJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Hosts Niki & Kika – Abstract Apartment Paralia Ofriniou',
    url: `${SITE_URL}/apartments/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Abstract Apartment & Studio (Paralia Ofriniou, Greece)',
      email: 'abstract.apartments@gmail.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          name: 'Niki (Host & Reservations)',
          telephone: '+359886790681',
          contactType: 'reservations',
          availableLanguage: ['English', 'Bulgarian', 'Greek'],
        },
        {
          '@type': 'ContactPoint',
          name: 'Kika (Host & Guest Care)',
          telephone: '+359878112454',
          contactType: 'reservations',
          availableLanguage: ['English', 'Bulgarian', 'Greek'],
        },
      ],
    },
  };
}

export function getApartmentFaqJsonLd(): Record<string, unknown> {
  const faqs = [
    { q: 'How far is Abstract Apartment from the beach in Paralia Ofriniou?', a: 'Abstract Apartment and Abstract Studio at Martini 7, Paralia Ofriniou are just a 2-minute flat walk from the sandy Aegean Sea beach and local taverns.' },
    { q: 'What are the check-in and check-out times at Abstract Apartment?', a: 'Check-in is after 3:00 PM (15:00) and check-out is until 10:00 AM.' },
    { q: 'What is the minimum stay requirement?', a: 'Minimum stay is 3 nights.' },
    { q: 'Is there a discount for longer stays?', a: 'Yes — book 7 nights and receive the 8th night free (automatically applied in the online reservation calculator).' },
    { q: 'What are the seasonal nightly prices?', a: 'Abstract Apartment (up to 6 guests): €100/night in May & October, €130/night in June & September, €160/night in July & August. Abstract Studio: €80/night in May & October, €100/night in June & September, €110/night in July & August.' },
    { q: 'What deposit is required to confirm a reservation?', a: '30% of the stay value upon reservation confirmation; the remainder is arranged upon check-in.' },
    { q: 'Is smoking or pets allowed?', a: 'Smoking is prohibited in all indoor rooms. Pets are considered upon prior inquiry.' },
    { q: 'Is parking available?', a: 'A dedicated private parking space is provided free of charge for the apartment.' },
    { q: 'Is a baby crib available?', a: 'Yes, a baby crib is available upon request for the apartment.' },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
