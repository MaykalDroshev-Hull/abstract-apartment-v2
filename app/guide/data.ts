import { GuideItem } from './page';

export const guideData: GuideItem[] = [
  // Taverns
  {
    id: 'tavern-1',
    title: 'Taverna To Limani',
    subtitle: 'Traditional Greek seafood by the harbor',
    category: 'Taverns',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Taverna To Limani overlooking the harbor',
    description: 'A family-run taverna serving fresh seafood caught daily. Located right by the harbor, it offers stunning sunset views and authentic Greek hospitality. The menu features traditional dishes like grilled octopus, fresh fish, and local specialties.',
    highlights: [
      'Fresh daily catch from local fishermen',
      'Outdoor seating with harbor views',
      'Family recipes passed down generations',
      'Live traditional music on weekends'
    ],
    tips: [
      'Best time to visit: Evening for sunset views',
      'Try the grilled sardines and Greek salad',
      'Reservations recommended in peak season'
    ],
    distance: '~ 3 min walk',
    mapsUrl: 'https://maps.google.com/?q=Taverna+To+Limani+Paralia+Ofriniou'
  },
  {
    id: 'tavern-2',
    title: 'Ouzeri Paralia',
    subtitle: 'Cozy spot for meze and ouzo',
    category: 'Taverns',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Ouzeri Paralia traditional Greek ouzeri',
    description: 'A charming ouzeri offering an extensive selection of meze plates perfect for sharing. The atmosphere is relaxed and authentic, making it ideal for a leisurely evening with friends. Known for their excellent ouzo selection and friendly service.',
    highlights: [
      'Wide selection of meze plates',
      'Authentic Greek ouzo varieties',
      'Cozy, traditional atmosphere',
      'Great for groups and families'
    ],
    tips: [
      'Order several meze plates to share',
      'Try the tzatziki and fried zucchini',
      'Open late, perfect for evening drinks'
    ],
    distance: '~ 5 min walk',
    mapsUrl: 'https://maps.google.com/?q=Ouzeri+Paralia+Ofriniou'
  },
  {
    id: 'tavern-3',
    title: 'Kafeneio To Kyma',
    subtitle: 'Beachfront dining with sea views',
    category: 'Taverns',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Kafeneio To Kyma beachfront restaurant',
    description: 'A beachfront taverna offering both traditional Greek cuisine and modern Mediterranean dishes. The location is unbeatable, with tables right on the sand. Perfect for lunch after a morning at the beach or a romantic dinner.',
    highlights: [
      'Direct beach access',
      'Mix of traditional and modern dishes',
      'Beautiful sea views',
      'Beach bar for drinks'
    ],
    tips: [
      'Great for lunch after swimming',
      'Try the moussaka and fresh salads',
      'Sunset dinners are particularly special'
    ],
    distance: '~ 2 min walk',
    mapsUrl: 'https://maps.google.com/?q=Kafeneio+To+Kyma+Paralia+Ofriniou'
  },
  
  // Beaches
  {
    id: 'beach-1',
    title: 'Paralia Ofriniou Main Beach',
    subtitle: 'The main sandy beach with facilities',
    category: 'Beaches',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Paralia Ofriniou main beach',
    description: 'The main beach of Paralia Ofriniou stretches along the coastline with soft golden sand and calm, clear waters. Well-organized with sunbeds, umbrellas, and nearby tavernas. Perfect for families with shallow waters and gentle waves.',
    highlights: [
      'Soft golden sand',
      'Calm, shallow waters',
      'Sunbeds and umbrellas available',
      'Close to restaurants and cafes'
    ],
    tips: [
      'Best visited in morning or late afternoon',
      'Free public access areas available',
      'Parking available nearby'
    ],
    distance: '~ 2 min walk',
    mapsUrl: 'https://maps.google.com/?q=Paralia+Ofriniou+Beach'
  },
  {
    id: 'beach-2',
    title: 'Agios Georgios Beach',
    subtitle: 'Secluded cove with crystal clear water',
    category: 'Beaches',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Agios Georgios Beach cove',
    description: 'A smaller, more secluded beach just a short drive away. The cove offers crystal clear waters and a peaceful atmosphere away from the main beach crowds. Great for snorkeling and a more private beach experience.',
    highlights: [
      'Crystal clear waters',
      'Less crowded than main beach',
      'Good for snorkeling',
      'Natural, unspoiled setting'
    ],
    tips: [
      'Bring your own supplies',
      'Best for morning visits',
      'Parking available at the top'
    ],
    distance: '~ 8 min drive',
    mapsUrl: 'https://maps.google.com/?q=Agios+Georgios+Beach+Ofriniou'
  },
  
  // Walks
  {
    id: 'walk-1',
    title: 'Harbor Promenade',
    subtitle: 'Scenic walk along the waterfront',
    category: 'Walks',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Harbor promenade walk',
    description: 'A pleasant paved walkway that follows the harbor and coastline. The path is flat and accessible, making it perfect for all ages. You\'ll pass by fishing boats, tavernas, and enjoy beautiful sea views throughout.',
    highlights: [
      'Flat, accessible path',
      'Beautiful harbor views',
      'Passes by local tavernas',
      'Great for evening strolls'
    ],
    tips: [
      'Best at sunset for golden hour',
      'Wear comfortable shoes',
      'Stops for coffee along the way'
    ],
    distance: '~ 1 min walk to start',
    mapsUrl: 'https://maps.google.com/?q=Paralia+Ofriniou+Harbor'
  },
  {
    id: 'walk-2',
    title: 'Coastal Path to Nea Peramos',
    subtitle: 'Scenic coastal route to nearby village',
    category: 'Walks',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Coastal path walk',
    description: 'A longer coastal walk that takes you along the sea towards the neighboring village of Nea Peramos. The path offers stunning views of the Aegean Sea and passes through natural coastal landscapes. Moderate difficulty with some elevation changes.',
    highlights: [
      'Stunning coastal views',
      'Natural landscapes',
      'Connects to Nea Peramos',
      'Great for photography'
    ],
    tips: [
      'Wear sturdy walking shoes',
      'Bring water, especially in summer',
      'Allow 1-2 hours for the full walk',
      'Start early to avoid midday heat'
    ],
    distance: '~ 5 min walk to trailhead',
    mapsUrl: 'https://maps.google.com/?q=Coastal+Path+Ofriniou+Nea+Peramos'
  },
  
  // Events
  {
    id: 'event-1',
    title: 'Summer Music Festival',
    subtitle: 'Traditional Greek music and dance',
    category: 'Events',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Summer music festival',
    description: 'An annual summer festival featuring traditional Greek music, dancing, and local culture. Held in the main square, it brings the community together with live performances, food stalls, and a festive atmosphere. Free and open to all.',
    highlights: [
      'Traditional Greek music performances',
      'Local dance groups',
      'Food and drink vendors',
      'Family-friendly atmosphere'
    ],
    tips: [
      'Check local calendar for dates',
      'Arrive early for best spots',
      'Great opportunity to experience local culture'
    ],
    distance: '~ 3 min walk',
    mapsUrl: 'https://maps.google.com/?q=Paralia+Ofriniou+Main+Square'
  },
  {
    id: 'event-2',
    title: 'Fisherman\'s Day',
    subtitle: 'Celebrating local fishing heritage',
    category: 'Events',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Fisherman\'s Day celebration',
    description: 'A community celebration honoring the local fishing tradition. Features fresh seafood tastings, boat displays, and demonstrations of traditional fishing techniques. A great way to learn about the area\'s maritime heritage.',
    highlights: [
      'Fresh seafood tastings',
      'Traditional boat displays',
      'Fishing demonstrations',
      'Local crafts and products'
    ],
    tips: [
      'Usually held in late summer',
      'Great for families with children',
      'Try the fresh grilled fish'
    ],
    distance: '~ 2 min walk',
    mapsUrl: 'https://maps.google.com/?q=Paralia+Ofriniou+Harbor'
  },
  
  // Day Trips
  {
    id: 'trip-1',
    title: 'Nea Peramos',
    subtitle: 'Charming neighboring fishing village',
    category: 'Day Trips',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Nea Peramos village',
    description: 'A picturesque fishing village just a short drive away. Nea Peramos offers a quieter atmosphere with its own harbor, beaches, and excellent seafood restaurants. Perfect for a half-day trip to explore a different side of the region.',
    highlights: [
      'Charming fishing village atmosphere',
      'Excellent seafood restaurants',
      'Beautiful harbor and beaches',
      'Less touristy than main areas'
    ],
    tips: [
      'Best visited in the morning',
      'Try the local tavernas',
      'Combine with coastal walk',
      'Parking available in village center'
    ],
    distance: '~ 8 min drive',
    mapsUrl: 'https://maps.google.com/?q=Nea+Peramos+Greece'
  },
  {
    id: 'trip-2',
    title: 'Eleftheroupoli',
    subtitle: 'Historic town with traditional architecture',
    category: 'Day Trips',
    imageSrc: '/Images/index/DEMO-hero-image.jpg',
    imageAlt: 'Eleftheroupoli historic town',
    description: 'A historic inland town known for its traditional architecture and local markets. Eleftheroupoli offers a glimpse into traditional Greek life away from the coast. Visit the local market, explore the old town, and enjoy authentic Greek coffee in the main square.',
    highlights: [
      'Traditional architecture',
      'Local markets',
      'Authentic Greek cafes',
      'Historic old town'
    ],
    tips: [
      'Visit the morning market for fresh produce',
      'Try traditional Greek coffee',
      'Allow 2-3 hours for exploration',
      'Great for shopping local products'
    ],
    distance: '~ 25 min drive',
    mapsUrl: 'https://maps.google.com/?q=Eleftheroupoli+Greece'
  }
];

