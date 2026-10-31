import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getApartmentFaqJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions & Policies – Abstract Apartment Paralia Ofriniou",
  description: "Quick answers about check-in/check-out times, 3-night minimum stay, 7+1 free night discount, 30% booking deposit, parking, and house policies at Abstract Apartment.",
  path: "/apartments/faq",
  property: "apartments",
  aiSummary: "Abstract Apartment Policies & FAQ: Check-in after 15:00, check-out until 10:00. Minimum stay: 3 nights. Discount: Book 7 nights, get 8th night free. Deposit: 30% upon reservation confirmation. Dedicated private parking & baby crib available for the Apartment. No indoor smoking; pets considered upon prior inquiry.",
  keywords: [
      "Abstract Apartment Paralia Ofriniou FAQ check-in deposit parking policies",
      "условия за настаняване Апартамент Абстракт Офринио капаро паркинг",
      "συχνές ερωτήσεις πολιτικές κράτησης Abstract Apartment Παραλία Οφρυνίου"
  ],
  ogImage: "/Images/Gallery/KitchenArea.jpg",
  ogAlt: "Frequently asked questions for Abstract Apartment in Paralia Ofriniou",
  siteName: "Abstract Apartment",
});

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={[
          getBreadcrumbJsonLd([
            { name: "Abstract Apartment", path: "/apartments" },
            { name: "FAQ & Policies", path: "/apartments/faq" },
          ]),
          getApartmentFaqJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
