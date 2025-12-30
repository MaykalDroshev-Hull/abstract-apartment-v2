import { Translations } from './types';

export const el: Translations = {
  header: {
    logo: 'Η Εφαρμογή Μου',
    explore: 'Εξερεύνηση',
    plan: 'Σχεδιασμός',
    reserve: 'Κράτηση',
    exploreSections: {
      theVilla: {
        title: 'Η ΒΙΛΑ',
        items: [
          {
            label: 'Η βίλα',
            description: 'Ανοιχτοί χώροι διαβίωσης σχεδιασμένοι να ρέουν προς τη θάλασσα.',
            href: '/details',
            icon: 'Home',
          },
          {
            label: 'Σχέδιο ορόφου',
            description: 'Μια επισκόπηση της διάταξης και της ροής της βίλας.',
            href: '/floor-plan',
            icon: 'Layout',
          },
        ],
      },
      visualJourney: {
        title: 'ΟΠΤΙΚΟ ΤΑΞΙΔΙ',
        items: [
          {
            label: 'Συλλογή',
            description: 'Στιγμές που καταγράφηκαν σε όλη τη βίλα.',
            href: '/gallery',
            icon: 'Image',
          },
        ],
      },
      guestExperience: {
        title: 'ΕΜΠΕΙΡΙΑ ΕΠΙΣΚΕΠΤΗ',
        items: [
          {
            label: 'Υπηρεσίες κονσιέρζ',
            description: 'Εμπειρίες νησιού, προσεκτικά επιλεγμένες.',
            href: '/concierge',
            icon: 'Sparkles',
          },
          {
            label: 'Αξιολογήσεις επισκεπτών',
            description: 'Ιστορίες από τις αξέχαστες διαμονές των προηγούμενων επισκεπτών μας.',
            href: '/reviews',
            icon: 'Star',
          },
          {
            label: 'Η ιστορία και η ομάδα μας',
            description: 'Οι άνθρωποι και το όραμα πίσω από τη βίλα.',
            href: '/our-story',
            icon: 'Users',
          },
          {
            label: 'Επαφές',
            description: 'Επικοινωνήστε με την ομάδα μας.',
            href: '/contacts',
            icon: 'Mail',
          },
          {
            label: 'Ιστολόγιο',
            description: 'Τελευταία νέα και ενημερώσεις από τη βίλα.',
            href: '/blog',
            icon: 'BookOpen',
          },
          {
            label: 'Facebook',
            description: 'Ακολουθήστε μας στο Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
          },
        ],
      },
    },
    planSections: {
      bookingInfo: {
        title: 'ΠΛΗΡΟΦΟΡΙΕΣ ΚΡΑΤΗΣΗΣ',
        items: [
          {
            label: 'Τιμές και ημερολόγιο',
            description: 'Δείτε τις εποχιακές τιμές και τη διαθεσιμότητα της βίλας για τις προτιμώμενες ημερομηνίες σας.',
            href: '/rates',
            icon: 'DollarSign',
          },
          {
            label: 'Οδηγός Κράτησης',
            description: 'Μάθετε πώς να κρατήσετε το Abstract Apartment.',
            href: '/booking-guide',
            icon: 'CheckCircle',
          },
          {
            label: 'Συχνές Ερωτήσεις',
            description: 'Όλα όσα χρειάζεται να γνωρίζετε πριν τη διαμονή σας.',
            href: '/faq',
            icon: 'HelpCircle',
          },
        ],
      },
      travelLogistics: {
        title: 'ΤΑΞΙΔΙ ΚΑΙ ΛΟΓΙΣΤΙΚΗ',
        items: [
          {
            label: 'Πώς να φτάσετε',
            description: 'Ανακαλύψτε τις πιο εύκολες διαδρομές και τις επιλογές μεταφοράς για να φτάσετε στη βίλα.',
            href: '/getting-here',
            icon: 'MapPin',
          },
        ],
      },
      getInTouch: {
        title: 'ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ',
        items: [
          {
            label: 'Επικοινωνήστε μαζί μας',
            description: 'Επικοινωνήστε με την ομάδα μας για ερωτήματα σχετικά με τη βίλα ή εξατομικευμένη βοήθεια.',
            href: '/contact',
            icon: 'Mail',
          },
          {
            label: 'Φόρμα προ-κράτησης',
            description: 'Μερικές λεπτομέρειες για να ξεκινήσετε τη διαμονή σας.',
            href: '/pre-booking',
            icon: 'FileText',
          },
          {
            label: 'Facebook',
            description: 'Ακολουθήστε μας στο Facebook.',
            href: 'https://facebook.com',
            icon: 'Facebook',
          },
        ],
      },
    },
    featuredCard: {
      title: 'Ο Καρυοφυλλικός Τηλέγραφος',
      description: 'Ιστορίες, οδηγοί και σημειώσεις νησιού από το Abstract Apartment. Σκεπτικές γνώσεις για ταξίδια, σχεδιασμό και ζωή.',
      image: '/Images/index/DEMO-hero-image.jpg',
      ctaText: 'Εξερευνήστε το Instagram μας',
      ctaLink: 'https://instagram.com',
    },
  },
  footer: {
    company: 'Εταιρεία',
    about: 'Σχετικά με εμάς',
    contact: 'Επικοινωνήστε μαζί μας',
    legal: 'Νομικά',
    privacy: 'Πολιτική Απορρήτου',
    terms: 'Όροι Χρήσης',
    follow: 'Ακολουθήστε μας',
    description: 'Μείνετε συνδεδεμένοι μαζί μας στα κοινωνικά δίκτυα.',
    copyright: '© 2024 Η Εφαρμογή Μου. Όλα τα δικαιώματα διατηρούνται.',
  },
  common: {
    welcome: 'Καλώς ήρθατε',
    loading: 'Φόρτωση...',
    error: 'Παρουσιάστηκε σφάλμα',
  },
  home: {
    title: 'Καλώς ήρθατε',
    description: 'Αυτή είναι η κύρια περιοχή περιεχομένου σας. Η κεφαλίδα και το υποσέλιδο είναι πάντα ορατά, και μπορείτε να αλλάξετε μεταξύ Αγγλικά, Βουλγαρικά και Ελληνικά χρησιμοποιώντας τον μεταγωγέα γλώσσας στην κεφαλίδα.',
  },
};

