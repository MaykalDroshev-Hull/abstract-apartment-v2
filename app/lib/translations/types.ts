export type Language = 'en' | 'bg' | 'el';

export interface MenuItem {
  label: string;
  description: string;
  href: string;
  icon: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface FeaturedCard {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Translations {
  header: {
    logo: string;
    explore: string;
    plan: string;
    reserve: string;
    exploreSections: {
      theVilla: MenuSection;
      visualJourney: MenuSection;
      guestExperience: MenuSection;
    };
    planSections: {
      bookingInfo: MenuSection;
      travelLogistics: MenuSection;
      getInTouch: MenuSection;
    };
    featuredCard: FeaturedCard;
  };
  footer: {
    company: string;
    about: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    follow: string;
    description: string;
    copyright: string;
    quickLinks: string;
    contacts: string;
    phone: string;
    email: string;
    address: string;
    niki: string;
    kika: string;
    copyrightText: string;
    createdBy: string;
  };
  common: {
    welcome: string;
    loading: string;
    error: string;
  };
  home: {
    title: string;
    description: string;
    hero: {
      image: string;
      imageAlt: string;
      location: string;
      title: string;
      cta: string;
      details: {
        guests: string;
        bedrooms: string;
        bathrooms: string;
      };
    };
    villas: {
      intro: {
        headline: string;
        description: string;
      };
      villa1: {
        name: string;
        image: string;
        imageAlt: string;
        details: {
          beds: string;
          couch: string;
          sleepCapacity: string;
          bathrooms: string;
        };
        cta?: string;
      };
      villa2: {
        name: string;
        image: string;
        imageAlt: string;
        details: {
          beds: string;
          sleepCapacity: string;
          bathrooms: string;
        };
        cta?: string;
      };
    };
    amenities: {
      intro: {
        title: string;
        subtitle?: string;
        paragraphs: string[];
      };
      items: Array<{
        icon: string;
        title: string;
        description?: string;
      }>;
      details: {
        title: string;
        paragraphs: string[];
        rooms?: Array<{
          name: string;
          features: string;
        }>;
        note?: string;
      };
      video: {
        url?: string;
        label: string;
      };
    };
    journey: {
      title: string;
      intro: string;
      address: string;
      mapLink: string;
      mapEmbedUrl: string;
      mapTitle: string;
      openInMaps: string;
      seeDirections: string;
      steps: Array<{
        icon: string;
        label: string;
        subtext?: string;
      }>;
      details?: {
        title: string;
        byCar?: {
          title: string;
          routes: Array<{
            from: string;
            distance: string;
            duration: string;
          }>;
          recommendations?: string;
        };
        byFlight?: {
          title: string;
          description: string;
          options: string[];
        };
      };
    };
    ctaReviews: {
      title: string;
      subtitle: string;
      seeDetails: string;
      cards: Array<{
        href: string;
        eyebrow: string;
        title: string;
        description: string;
        imageSrc: string;
      }>;
      reviews: Array<{
        name: string;
        body: string;
        meta?: string;
      }>;
    };
  };
  floorPlan: {
    title: string;
    description: string;
    placeholder: string;
    apartment: {
      title: string;
      image?: string;
    };
    studio: {
      title: string;
      image?: string;
    };
  };
  gallery: {
    title: string;
    description: string;
    sections: Array<{
      id: string;
      title: string;
      images: Array<{
        src: string;
        alt: string;
        caption?: string;
      }>;
    }>;
  };
  guide: {
    title: string;
    description: string;
    reserve: string;
    contactUs: string;
    categories: {
      all: string;
      taverns: string;
      beaches: string;
      walks: string;
      events: string;
      dayTrips: string;
    };
    modal: {
      highlights: string;
      tips: string;
      distance: string;
      openInMaps: string;
    };
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    story: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    values: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    team: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      cta: string;
      members: Array<{
        name: string;
        role: string;
        bio: string;
        imageSrc: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };
  contact: {
    hero: {
      title: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      required: string;
      invalidEmail: string;
      successMessage: string;
      subjects: Array<{
        value: string;
        label: string;
      }>;
    };
    info: {
      address: {
        label: string;
        value: string;
        mapsUrl: string;
        mapsLink: string;
      };
      phone: {
        label: string;
        numbers: Array<{
          phone: string;
          name: string;
        }>;
      };
      email: {
        label: string;
        value: string;
      };
    };
    faq: {
      title: string;
      items: Array<{
        q: string;
        a: string;
      }>;
    };
  };
  rates: {
    hero: {
      title: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    search: {
      checkIn: string;
      checkOut: string;
      guests: string;
      guest: string;
      button: string;
    };
    section: {
      title: string;
      caption: string;
    };
    units: {
      apartment: {
        unit: string;
        seasons: Array<{
          name: string;
          dateRange: string;
          price: string;
          highlights: string[];
          availableDates?: string;
        }>;
        extras?: string[];
      };
      studio: {
        unit: string;
        seasons: Array<{
          name: string;
          dateRange: string;
          price: string;
          highlights: string[];
          availableDates?: string;
        }>;
        extras?: string[];
      };
    };
    extras: {
      title: string;
    };
  };
}

