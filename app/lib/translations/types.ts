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
    cta: {
      title: string;
      description: string;
    };
  };
  gallery: {
    title: string;
    description: string;
    sections: Array<{
      id: string;
      title: string;
      titleMobile?: string;
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
      website: string;
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
  reserve: {
    title: string;
    subtitle: string;
    steps: {
      villa: string;
      dates: string;
      details: string;
      review: string;
    };
    villa: {
      title: string;
      apartment: {
        name: string;
        description: string;
        features: string[];
      };
      studio: {
        name: string;
        description: string;
        features: string[];
      };
      perNight: string;
    };
    dates: {
      title: string;
      datesLabel: string;
      checkIn: string;
      checkOut: string;
      guestsLabel: string;
      adults: string;
      children: string;
      childrenOptional: string;
      adult: string;
      child: string;
    };
    details: {
      title: string;
      fullName: string;
      email: string;
      phone: string;
      country: string;
      countryOptional: string;
      notes: string;
      notesOptional: string;
      note: string;
      required: string;
    };
    review: {
      title: string;
      villa: string;
      dates: string;
      checkIn: string;
      checkOut: string;
      nights: string;
      night: string;
      guests: string;
      contactInfo: string;
      name: string;
      email: string;
      phone: string;
      country: string;
      notes: string;
      reserve: string;
      processing: string;
    };
    summary: {
      title: string;
      dates: string;
      guests: string;
      total: string;
      deposit: string;
      depositNote: string;
      perNight: string;
    };
    success: {
      title: string;
      message: string;
      note: string;
      backHome: string;
      contactUs: string;
    };
    validation: {
      villaRequired: string;
      checkInRequired: string;
      checkOutRequired: string;
      checkOutAfterCheckIn: string;
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
    };
    buttons: {
      ok: string;
      goBack: string;
    };
  };
  details: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      highlights: Array<{
        text: string;
        icon: string;
      }>;
    };
    general: {
      welcome: string;
      paragraphs: string[];
    };
    tabs: {
      apartment: string;
      studio: string;
    };
    apartment: {
      roomsTitle: string;
      amenitiesTitle: string;
      rooms: Array<{
        label: string;
        details: string;
        icon: string;
      }>;
      amenities: Array<{
        title: string;
        description?: string;
        icon: string;
      }>;
    };
    studio: {
      roomsTitle: string;
      amenitiesTitle: string;
      rooms: Array<{
        label: string;
        details: string;
        icon: string;
      }>;
      amenities: Array<{
        title: string;
        description?: string;
        icon: string;
      }>;
      note?: string;
    };
    cta: {
      reserve: string;
      gallery: string;
    };
  };
  faq: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    policies: {
      title: string;
      items: Array<{
        q: string;
        a: string;
      }>;
    };
    booking: {
      title: string;
      items: Array<{
        q: string;
        a: string;
      }>;
    };
    needHelp: {
      title: string;
      description: string;
      call: string;
      email: string;
    };
  };
  gettingHere: {
    hero: {
      caption: string;
      title: string;
      subtitle: string;
      cta: {
        reserve: string;
        contact: string;
      };
    };
    sectionTitle: string;
    helperNote: string;
  };
  admin: {
    login: {
      title: string;
      subtitle: string;
      username: string;
      password: string;
      usernamePlaceholder: string;
      passwordPlaceholder: string;
      loginButton: string;
      loginError: string;
      loginSuccess: string;
      logoutSuccess: string;
    };
    dashboard: {
      title: string;
      logout: string;
      loading: string;
      addBooking: string;
      editBooking: string;
      saveChanges: string;
      cancel: string;
      deleteConfirm: string;
      deleteSuccess: string;
      addSuccess: string;
      updateSuccess: string;
      loadError: string;
      addError: string;
      updateError: string;
      deleteError: string;
      showAll: string;
      showUpcoming: string;
      upcomingBookings: string;
      allBookings: string;
      noBookings: string;
      form: {
        apartment: string;
        apartmentOptions: {
          apartment: string;
          studio: string;
        };
        checkIn: string;
        checkOut: string;
        firstName: string;
        lastName: string;
        telephone: string;
        fullPrice: string;
        paidPrice: string;
        comments: string;
        commentsPlaceholder: string;
        required: string;
        checkOutAfterCheckIn: string;
      };
      table: {
        apartment: string;
        guest: string;
        contact: string;
        checkIn: string;
        checkOut: string;
        price: string;
        paid: string;
        comments: string;
        actions: string;
      };
      validation: {
        checkInRequired: string;
        checkOutRequired: string;
        firstNameRequired: string;
        lastNameRequired: string;
        telephoneRequired: string;
        fullPriceRequired: string;
        paidPriceRequired: string;
      };
    };
  };
  reviews: {
    hero: {
      title: string;
      subtitle: string;
    };
    sectionTitle: string;
    sectionSubtitle: string;
    moreReviewsText: string;
    readMore: string;
    leaveReview: string;
    metaTitle: string;
  };
}

