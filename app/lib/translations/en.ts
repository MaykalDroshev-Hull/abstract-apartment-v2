import { Translations } from './types';

export const en: Translations = {
  header: {
    logo: 'My App',
    explore: 'Discover',
    plan: 'Plan',
    reserve: 'Reserve',
    exploreSections: {
      theVilla: {
        title: 'THE VILLA',
        items: [
          {
            label: 'The villa',
            description: 'Open living spaces designed to flow toward the sea.',
            href: '/details',
            icon: 'Home',
          },
          {
            label: 'Floor plan',
            description: 'An overview of the villa layout and flow.',
            href: '/floor-plan',
            icon: 'Layout',
          },
        ],
      },
      visualJourney: {
        title: 'VISUAL JOURNEY',
        items: [
          {
            label: 'Gallery',
            description: 'Moments captured throughout the villa.',
            href: '/gallery',
            icon: 'Image',
          },
          {
            label: 'Facebook',
            description: 'Follow us on Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
          },
          {
            label: 'Instagram',
            description: 'Follow us on Instagram.',
            href: 'https://instagram.com',
            icon: 'Instagram',
          },
        ],
      },
      guestExperience: {
        title: 'GUEST EXPERIENCE',
        items: [
          {
            label: 'Local Guide',
            description: 'Curated recommendations for food, beaches, walks, and day trips.',
            href: '/guide',
            icon: 'MapPin',
          },
          {
            label: 'About us',
            description: 'The story and people behind Abstract Apartments.',
            href: '/about',
            icon: 'Users',
          },
          {
            label: 'Guest reviews',
            description: 'Stories of our past guests\' unforgettable stays.',
            href: '/reviews',
            icon: 'Star',
          },
          {
            label: 'Contact',
            description: 'Get in touch with our team.',
            href: '/contact',
            icon: 'Mail',
          },
        ],
      },
    },
    planSections: {
      bookingInfo: {
        title: 'BOOKING INFO',
        items: [
          {
            label: 'Rates & calendar',
            description: 'View seasonal rates and villa availability for your preferred dates.',
            href: '/rates',
            icon: 'DollarSign',
          },
          {
            label: 'FAQs',
            description: 'Everything you need to know before your stay.',
            href: '/faq',
            icon: 'HelpCircle',
          },
        ],
      },
      travelLogistics: {
        title: 'TRAVEL & LOGISTICS',
        items: [
          {
            label: 'Getting here',
            description: 'Discover the easiest routes and transfer options to reach the villa.',
            href: '/getting-here',
            icon: 'MapPin',
          },
        ],
      },
      getInTouch: {
        title: 'GET IN TOUCH',
        items: [
          {
            label: 'Contact us',
            description: 'Reach out to our team for villa inquiries or personalized assistance.',
            href: '/contact',
            icon: 'Mail',
          },
          {
            label: 'Pre-booking form',
            description: 'A few details to begin your stay.',
            href: '/pre-booking',
            icon: 'FileText',
          },
          {
            label: 'Facebook',
            description: 'Follow us on Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
          },
        ],
      },
    },
    featuredCard: {
      title: 'The Coconut Telegraph',
      description: 'Stories, guides, and island notes from Abstract Apartment. Thoughtful insights on travel, design, and life.',
      image: '/Images/index/DEMO-hero-image.jpg',
      ctaText: 'Explore our Instagram',
      ctaLink: 'https://instagram.com',
    },
  },
  footer: {
    company: 'Company',
    about: 'About Us',
    contact: 'Contact Us',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    follow: 'Follow Us',
    description: 'Experience luxury and comfort at Abstract Apartment. Your perfect getaway in Paralia Ofriniou.',
    copyright: '© 2024 My App. All rights reserved.',
    quickLinks: 'Quick Links',
    contacts: 'Contacts',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    niki: 'Niki',
    kika: 'Kika',
    copyrightText: 'Abstract Apartments. All rights reserved.',
    createdBy: 'Created by',
  },
  common: {
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'An error occurred',
  },
  home: {
    title: 'Welcome',
    description: 'This is your main content area. The header and footer are always visible, and you can switch between English, Bulgarian, and Greek using the language switcher in the header.',
    hero: {
      image: '/Images/Gallery/ApartmentFromOutside.jpg',
      imageAlt: 'Luxury vacation rental villa',
      location: 'Paralia Ofriniou',
      title: 'Abstract Apartment',
      cta: 'Explore Villa',
      details: {
        guests: '8 Guests',
        bedrooms: '4 Bedrooms',
        bathrooms: '3 Bathrooms',
      },
    },
    villas: {
      intro: {
        headline: 'Two Distinct Villas\nDesigned for Comfort and Flexibility',
        description: 'Each villa offers a unique experience tailored to your needs. Whether you seek spacious accommodations for family gatherings or a cozy retreat for intimate moments, our properties blend modern comfort with thoughtful design to create unforgettable stays.',
      },
      villa1: {
        name: 'Abstract Apartment',
        image: '/Images/Gallery/ApartmentFromOutside.jpg',
        imageAlt: 'Abstract Apartment exterior view',
        details: {
          beds: '2 Beds',
          couch: '1 Couch',
          sleepCapacity: 'Sleeps up to 6 guests',
          bathrooms: '1 Bathroom',
        },
        cta: 'View More',
      },
      villa2: {
        name: 'Abstract Studio',
        image: '/Images/Gallery/LivingArea1.jpg',
        imageAlt: 'Abstract Studio interior view',
        details: {
          beds: '2 Beds',
          sleepCapacity: 'Sleeps up to 4 guests',
          bathrooms: '1 Bathroom',
        },
        cta: 'View More',
      },
    },
    amenities: {
      intro: {
        title: 'Capacity & Amenities',
        subtitle: 'Everything you need for a peaceful stay',
        paragraphs: [
          'Abstract Apartment offers a comfortable home away from home, just a 2-minute walk from the beach and local tavernas. Experience the beautiful Greek sea and enjoy peace and relaxation in Paralia Ofriniou.',
          'Our fully equipped apartment accommodates up to 6 guests, with modern amenities and thoughtful touches throughout. Each room is designed for comfort, featuring air conditioning, terraces, and all the essentials for an unforgettable stay.',
        ],
      },
      items: [
        {
          icon: 'capacity',
          title: 'Capacity: 6 people',
          description: 'Comfortable accommodation for up to six guests',
        },
        {
          icon: 'beds',
          title: '2 bedrooms + 1 sofa bed',
          description: 'Sofa bed accommodates two additional guests',
        },
        {
          icon: 'kitchen',
          title: 'Living room with kitchenette',
          description: 'Fully equipped kitchen for all your culinary needs',
        },
        {
          icon: 'bedrooms',
          title: '2 bedrooms',
          description: 'Two comfortable bedrooms with double beds',
        },
        {
          icon: 'ac',
          title: 'Air conditioners',
          description: 'Climate control in every room for your comfort',
        },
        {
          icon: 'bathroom',
          title: 'Private bathroom',
          description: 'Bathroom with toilet for your exclusive use',
        },
        {
          icon: 'washer',
          title: 'Washing machine',
          description: 'Convenient laundry facilities available',
        },
        {
          icon: 'terrace',
          title: 'Large terrace with BBQ',
          description: 'Spacious outdoor area with barbecue and fireplace',
        },
        {
          icon: 'tv',
          title: 'TV in each room',
          description: 'Entertainment available throughout the apartment',
        },
        {
          icon: 'smartTv',
          title: 'Smart TV in living room',
          description: 'Stream your favorite content in the main living area',
        },
        {
          icon: 'wifi',
          title: 'WiFi',
          description: 'High-speed wireless internet connection',
        },
        {
          icon: 'bgTv',
          title: 'Bulgarian TV',
          description: 'Access to Bulgarian television channels',
        },
      ],
      details: {
        title: 'Abstract Apartment',
        paragraphs: [
          'Welcome to Abstract Apartment – your home away from home. Be our guest during the summer months and enjoy the beautiful Greek sea, peace and relaxation in Paralia Ofriniou.',
          'The apartment is just a 2-minute walk from the beach and tavernas. Enjoy nearly 60 tavernas where you can try aromatic Greek coffee, juicy seafood, fresh fish, or crispy zucchini.',
          'Our kitchen is fully equipped to meet all your needs. You can enjoy your meals on the large terrace, perfect for relaxing evenings with a glass of ouzo. A barbecue is available throughout your stay. For added convenience, we provide private parking and fast wireless internet.',
        ],
        rooms: [
          {
            name: 'Room 1',
            features: 'Double bed, air conditioning, terrace',
          },
          {
            name: 'Room 2',
            features: 'Double bed, air conditioning, terrace',
          },
          {
            name: 'Room 3',
            features: 'Sofa bed',
          },
        ],
        note: 'Baby cot available upon request',
      },
      video: {
        label: 'Video Tour',
      },
    },
    journey: {
      title: 'Your Journey',
      intro: 'Our villas are located in Paralia Ofriniou, easily accessible by car from Bulgaria or via Thessaloniki airport. Open the map below for exact navigation and directions to your destination.',
      address: 'Martini 7, Paralia Ofriniou 640 08, Greece',
      mapLink: 'https://maps.app.goo.gl/8E1imSzn85aoWghi9',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.123456789!2d23.9069595!3d40.7631274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a925004600a899%3A0x31c94259f0b702ec!2sAbstract%20Apartment!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
      mapTitle: 'Location of Abstract Apartment in Paralia Ofriniou, Greece',
      openInMaps: 'Open in Google Maps',
      seeDirections: 'See directions and map',
      steps: [
        {
          icon: 'address',
          label: 'Martini 7, Paralia Ofriniou',
          subtext: 'Our exact location in the heart of Paralia Ofriniou',
        },
      ],
      details: {
        title: 'How to Get Here',
        byCar: {
          title: 'Arriving from Bulgaria (By Car)',
          routes: [
            {
              from: 'From Sofia',
              distance: '~300 km',
              duration: '4–5 hours',
            },
            {
              from: 'From Plovdiv',
              distance: '~230 km',
              duration: '3.5–4 hours',
            },
          ],
          recommendations: 'Recommended border: Kulata–Promachonas. Route: Promachonas → Serres → Kavala → Paralia Ofriniou',
        },
        byFlight: {
          title: 'Arriving by Flight',
          description: 'Nearest airport: Thessaloniki International (SKG). Distance: ~95 km / ~1.5 hours by car.',
          options: [
            'Car rental (recommended)',
            'Taxi',
            'Private transfer',
          ],
        },
      },
    },
    ctaReviews: {
      title: 'Experience serenity by the sea',
      subtitle: 'Discover everything you need to plan your perfect stay at Abstract Apartment. From availability and rates to learning more about our story and getting in touch with our team.',
      seeDetails: 'See details',
      cards: [
        {
          href: '/availability',
          eyebrow: 'Plan Your Trip',
          title: 'Rates & Availability',
          description: 'View seasonal rates and check availability for your preferred dates. Plan your perfect getaway with transparent pricing.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
        {
          href: '/about',
          eyebrow: 'Meet Us',
          title: 'Our Story',
          description: 'Learn about the vision and people behind Abstract Apartment. Discover what makes our property special.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
        {
          href: '/contact',
          eyebrow: 'Get in Touch',
          title: 'Contact Us',
          description: 'Have questions or need assistance? Reach out to our team. We\'re here to help make your stay unforgettable.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
      ],
      reviews: [
        {
          name: 'Svetoslav Todorov',
          body: 'We had a great stay here as four friends on a trip. What a great place to be in. It has great living space comfortable beds fully equipped kitchen and a washing machine which was vey useful. The apartment is located about 300 metres from the beach. The parking was free and easy. Had everything we needed.',
        },
        {
          name: 'Ivan Ivanov',
          body: 'Beautiful apartment! Clean, spacious and very well equipped - has everything you need for a comfortable stay. The location is excellent - just a 2 minute walk from the beach, but at the same time in a quiet and peaceful place. The large terrace and barbecue are great. The hosts are extremely hospitable and responsive - ready to help with any questions. I would definitely visit again and highly recommend to anyone looking for a nice and comfortable place to stay in Paralia Ofrinio!',
        },
        {
          name: 'Gavril Valentinov',
          body: 'Clean, nice and well furnished. The apartment is very close to the beach and restaurants, has a spacious terrace with a swing. The place is quiet and peaceful. The hosts are very responsive. We will definitely visit again!',
        },
      ],
    },
  },
  floorPlan: {
    title: 'Floor Plan',
    description: 'An overview of the villa layout and flow for both Abstract Apartment and Abstract Studio.',
    placeholder: 'Floor plan coming soon',
    apartment: {
      title: 'Abstract Apartment',
    },
    studio: {
      title: 'Abstract Studio',
    },
  },
  gallery: {
    title: 'Gallery',
    description: 'Explore our spaces through carefully curated images showcasing the comfort and elegance of Abstract Apartment and Abstract Studio.',
    sections: [
      {
        id: 'apartment-rooms',
        title: 'Abstract Apartment - Rooms',
        images: [
          {
            src: '/Images/Gallery/Bedroom1.jpg',
            alt: 'Bedroom 1',
            caption: 'Comfortable bedroom with double bed',
          },
          {
            src: '/Images/Gallery/Bedroom1_1.jpg',
            alt: 'Bedroom 1 view 1',
          },
          {
            src: '/Images/Gallery/Bedroom1_2.jpg',
            alt: 'Bedroom 1 view 2',
          },
          {
            src: '/Images/Gallery/Bedroom1_3.jpg',
            alt: 'Bedroom 1 view 3',
          },
          {
            src: '/Images/Gallery/Bedroom1_4.jpg',
            alt: 'Bedroom 1 view 4',
          },
          {
            src: '/Images/Gallery/Bedroom2.jpg',
            alt: 'Bedroom 2',
            caption: 'Second bedroom with double bed',
          },
          {
            src: '/Images/Gallery/Bedroom2_2.jpg',
            alt: 'Bedroom 2 view 2',
          },
          {
            src: '/Images/Gallery/Bedroom2_3.jpg',
            alt: 'Bedroom 2 view 3',
          },
          {
            src: '/Images/Gallery/Bathroom.jpg',
            alt: 'Bathroom',
            caption: 'Private bathroom with modern amenities',
          },
        ],
      },
      {
        id: 'apartment-gallery',
        title: 'Abstract Apartment - Living Spaces',
        images: [
          {
            src: '/Images/Gallery/ApartmentFromOutside.jpg',
            alt: 'Apartment exterior',
            caption: 'Abstract Apartment exterior view',
          },
          {
            src: '/Images/Gallery/LivingArea1.jpg',
            alt: 'Living area',
            caption: 'Spacious living area',
          },
          {
            src: '/Images/Gallery/LivingAreaTable.jpg',
            alt: 'Living area with table',
          },
          {
            src: '/Images/Gallery/LivingRoom2.jpg',
            alt: 'Living room view 2',
          },
          {
            src: '/Images/Gallery/LivingRoom4.jpg',
            alt: 'Living room view 4',
          },
          {
            src: '/Images/Gallery/LivingRoom5.jpg',
            alt: 'Living room view 5',
          },
          {
            src: '/Images/Gallery/LivingRoom7.jpg',
            alt: 'Living room view 7',
          },
          {
            src: '/Images/Gallery/LivingRoom8.jpg',
            alt: 'Living room view 8',
          },
          {
            src: '/Images/Gallery/LivingRoom9.jpg',
            alt: 'Living room view 9',
          },
          {
            src: '/Images/Gallery/KitchenArea.jpg',
            alt: 'Kitchen area',
            caption: 'Fully equipped kitchen',
          },
          {
            src: '/Images/Gallery/KitchenAreaCloser1.jpg',
            alt: 'Kitchen area close-up',
          },
          {
            src: '/Images/Gallery/BigTerrace.jpg',
            alt: 'Large terrace',
            caption: 'Spacious terrace with outdoor seating',
          },
          {
            src: '/Images/Gallery/BigTerrace2.jpg',
            alt: 'Large terrace view 2',
          },
          {
            src: '/Images/Gallery/BigTerrace3.jpg',
            alt: 'Large terrace view 3',
          },
          {
            src: '/Images/Gallery/BigTerrace5.jpg',
            alt: 'Large terrace view 5',
          },
          {
            src: '/Images/Gallery/BigTerrace6.jpg',
            alt: 'Large terrace view 6',
          },
          {
            src: '/Images/Gallery/BigTerrace8.jpg',
            alt: 'Large terrace view 8',
          },
          {
            src: '/Images/Gallery/BigTerrace9.jpg',
            alt: 'Large terrace view 9',
          },
          {
            src: '/Images/Gallery/SmallTerrace.jpg',
            alt: 'Small terrace',
          },
          {
            src: '/Images/Gallery/SmallTerrace2.jpg',
            alt: 'Small terrace view 2',
          },
          {
            src: '/Images/Gallery/MainDoor.jpg',
            alt: 'Main entrance',
          },
          {
            src: '/Images/Gallery/Garage.jpg',
            alt: 'Garage',
          },
          {
            src: '/Images/Gallery/ElectricalAndInfoCloser.jpg',
            alt: 'Electrical and information panel',
          },
        ],
      },
      {
        id: 'studio-rooms',
        title: 'Abstract Studio - Rooms',
        images: [
          {
            src: '/Images/Gallery/LivingArea1.jpg',
            alt: 'Studio living area',
            caption: 'Comfortable studio space',
          },
        ],
      },
      {
        id: 'studio-gallery',
        title: 'Abstract Studio - Gallery',
        images: [
          {
            src: '/Images/Gallery/LivingArea1.jpg',
            alt: 'Studio interior',
            caption: 'Abstract Studio interior view',
          },
        ],
      },
    ],
  },
  guide: {
    title: 'Local Guide',
    description: 'Curated recommendations nearby for food, beaches, walks, events, and easy day trips. Discover the best of Paralia Ofriniou and the surrounding area.',
    reserve: 'Reserve',
    contactUs: 'Contact us',
    categories: {
      all: 'All',
      taverns: 'Taverns',
      beaches: 'Beaches',
      walks: 'Walks',
      events: 'Events',
      dayTrips: 'Day Trips',
    },
    modal: {
      highlights: 'Highlights',
      tips: 'Tips',
      distance: 'Distance from the apartment:',
      openInMaps: 'Open in Google Maps',
    },
  },
  about: {
    hero: {
      title: 'About Abstract Apartments',
      subtitle: 'A calm seaside retreat in Paralia Ofriniou. Comfort, simplicity, and everything you need for a peaceful stay, just a short walk from the beach.',
      ctaPrimary: 'Explore the apartments',
      ctaSecondary: 'View gallery',
    },
    story: {
      eyebrow: 'OUR STORY',
      title: 'A stay shaped by comfort and the sea',
      paragraphs: [
        'Abstract Apartments were created with the idea of calm, comfortable seaside living. Every detail has been thoughtfully considered to provide practicality and ease in a peaceful setting.',
        'Located in Paralia Ofriniou, the apartments offer easy access to the beach and local tavernas while maintaining the tranquility of a quiet neighborhood. The focus is on cleanliness, convenience, and attentive service that makes your stay easy and enjoyable.',
        'We believe the best stay is one where you feel at home, but with the beauty of the Greek sea just steps away.',
      ],
    },
    values: [
      {
        title: 'Comfort first',
        description: 'Every detail is thoughtfully considered for your comfort and peace of mind.',
        icon: 'Home',
      },
      {
        title: 'Clean & cared for',
        description: 'We maintain high standards for cleanliness and maintenance.',
        icon: 'Sparkles',
      },
      {
        title: 'Walkable location',
        description: 'Just minutes from the beach, tavernas, and everything you need.',
        icon: 'MapPin',
      },
      {
        title: 'Helpful hosts',
        description: 'Always available for tips and support during your stay.',
        icon: 'Heart',
      },
    ],
    team: {
      eyebrow: 'MEET YOUR HOSTS',
      title: 'The people behind Abstract Apartments',
      paragraphs: [
        'We are a local team dedicated to ensuring a pleasant and hassle-free stay. We are ready to answer questions, share local tips, and make your stay as comfortable as possible.',
        'Our goal is for you to feel welcome and supported from the moment you arrive until you depart.',
      ],
      cta: 'Get in touch',
      members: [
        {
          name: 'Niki',
          role: 'Host',
          bio: 'Always available for questions and tips. Loves sharing local hidden gems and helping guests make the most of their stay.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
        {
          name: 'Kika',
          role: 'Host',
          bio: 'Dedicated to ensuring cleanliness and comfort. Ready to help with everything needed for a calm and pleasant stay.',
          imageSrc: '/Images/index/DEMO-hero-image.jpg',
        },
      ],
    },
    cta: {
      title: 'Ready for a quiet seaside stay?',
      description: 'Check availability, make a reservation, or contact us with questions.',
      primaryButton: 'Reserve',
      secondaryButton: 'Contact us',
    },
  },
  contact: {
    hero: {
      title: 'Contact',
      description: 'Questions about availability, travel, or the apartments? Send us a message and we\'ll get back to you.',
      ctaPrimary: 'Reserve',
      ctaSecondary: 'View gallery',
    },
    form: {
      title: 'Send us a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      phone: 'Phone',
      phonePlaceholder: '+1...',
      subject: 'Subject',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      submit: 'Send message',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      successMessage: 'Your message has been sent successfully! We\'ll get back to you soon.',
      subjects: [
        { value: 'Reservation', label: 'Reservation' },
        { value: 'Question', label: 'Question' },
        { value: 'Policies', label: 'Policies' },
        { value: 'Other', label: 'Other' },
      ],
    },
    info: {
      address: {
        label: 'Address',
        value: 'Martini 7, Paralia Ofriniou 640 08, Greece',
        mapsUrl: 'https://maps.google.com/?q=Martini+7+Paralia+Ofriniou+640+08+Greece',
        mapsLink: 'Open in Google Maps',
      },
      phone: {
        label: 'Phone',
        numbers: [
          { phone: '+359886790681', name: 'Niki' },
          { phone: '+359884535509', name: 'Kika' },
        ],
      },
      email: {
        label: 'Email',
        value: 'abstract.apartments@gmail.com',
      },
    },
    faq: {
      title: 'Policies and Terms',
      items: [
        {
          q: 'Check-in',
          a: 'After 3:00 PM.',
        },
        {
          q: 'Check-out',
          a: 'Until 10:00 AM.',
        },
        {
          q: 'Smoking',
          a: 'Prohibited in all rooms.',
        },
        {
          q: 'Pets',
          a: 'Upon prior inquiry.',
        },
        {
          q: 'Minimum stay',
          a: '3 nights.',
        },
        {
          q: 'Discount for longer stay',
          a: 'Book 7 nights and get the 8th night free.',
        },
        {
          q: 'Deposit',
          a: '30% of the stay value upon reservation.',
        },
      ],
    },
  },
  rates: {
    hero: {
      title: 'Rates & Calendar',
      description: 'Browse availability and seasonal rates. Find the perfect time for your stay.',
      ctaPrimary: 'Reserve',
      ctaSecondary: 'Contact us',
    },
    search: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      guest: 'Guest',
      button: 'Search',
    },
    section: {
      title: 'Rates',
      caption: 'Rates are subject to change. For the most accurate pricing, search your desired dates above.',
    },
    units: {
      apartment: {
        unit: 'Abstract Apartment',
        seasons: [
          {
            name: 'May',
            dateRange: 'May 1 - May 31',
            price: '€ 110 / night',
            highlights: [
              'Best time for vacation',
              'Lower prices',
              'Fewer tourists',
            ],
            availableDates: 'Available dates May',
          },
          {
            name: 'June',
            dateRange: 'June 1 - June 30',
            price: '€ 130 / night',
            highlights: [
              'Warm weather',
              'Perfect for the sea',
              'Still peaceful',
            ],
            availableDates: 'Available dates June',
          },
          {
            name: 'July',
            dateRange: 'July 1 - July 31',
            price: '€ 160 / night',
            highlights: [
              'Hot summer',
              'Many events',
              'Perfect for families',
            ],
            availableDates: 'Available dates July',
          },
          {
            name: 'August',
            dateRange: 'August 1 - August 31',
            price: '€ 160 / night',
            highlights: [
              'Peak of summer',
              'Holidays and festivals',
              'Warm sea',
            ],
            availableDates: 'Available dates August',
          },
          {
            name: 'September',
            dateRange: 'September 1 - September 30',
            price: '€ 130 / night',
            highlights: [
              'Warm sea',
              'More peaceful atmosphere',
              'Lower prices',
            ],
            availableDates: 'Available dates September',
          },
          {
            name: 'October',
            dateRange: 'October 1 - October 31',
            price: '€ 100 / night',
            highlights: [
              'True vacation – no crowds',
              'Most affordable prices for the season',
              'More space, less stress',
            ],
            availableDates: 'Available dates October',
          },
        ],
        extras: [
          'Minimum stay: 3 nights',
          'Deposit: 30% of stay value upon reservation',
        ],
      },
      studio: {
        unit: 'Abstract Studio',
        seasons: [
          {
            name: 'May',
            dateRange: 'May 1 - May 31',
            price: '€ 80 / night',
            highlights: [
              'Best time for vacation',
              'Lower prices',
              'Fewer tourists',
            ],
            availableDates: 'Available dates May',
          },
          {
            name: 'June',
            dateRange: 'June 1 - June 30',
            price: '€ 95 / night',
            highlights: [
              'Warm weather',
              'Perfect for the sea',
              'Still peaceful',
            ],
            availableDates: 'Available dates June',
          },
          {
            name: 'July',
            dateRange: 'July 1 - July 31',
            price: '€ 120 / night',
            highlights: [
              'Hot summer',
              'Many events',
              'Perfect for families',
            ],
            availableDates: 'Available dates July',
          },
          {
            name: 'August',
            dateRange: 'August 1 - August 31',
            price: '€ 120 / night',
            highlights: [
              'Peak of summer',
              'Holidays and festivals',
              'Warm sea',
            ],
            availableDates: 'Available dates August',
          },
          {
            name: 'September',
            dateRange: 'September 1 - September 30',
            price: '€ 95 / night',
            highlights: [
              'Warm sea',
              'More peaceful atmosphere',
              'Lower prices',
            ],
            availableDates: 'Available dates September',
          },
          {
            name: 'October',
            dateRange: 'October 1 - October 31',
            price: '€ 75 / night',
            highlights: [
              'True vacation – no crowds',
              'Most affordable prices for the season',
              'More space, less stress',
            ],
            availableDates: 'Available dates October',
          },
        ],
        extras: [
          'Minimum stay: 3 nights',
          'Deposit: 30% of stay value upon reservation',
        ],
      },
    },
    extras: {
      title: 'Additional Information',
    },
  },
};

