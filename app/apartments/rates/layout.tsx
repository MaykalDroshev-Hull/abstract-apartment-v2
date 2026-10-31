import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getApartmentRatesJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Seasonal Rates & Policies – Abstract Apartment Paralia Ofriniou",
  description: "Check seasonal nightly rates, 7+1 free night long-stay promotion, and booking policies for Abstract Apartment and Abstract Studio in Paralia Ofriniou, Greece.",
  path: "/apartments/rates",
  property: "apartments",
  aiSummary: "May–October nightly EUR rates in Paralia Ofriniou: Abstract Apartment (up to 6 guests) is €100/night in May & October, €130/night in June & September, and €160/night in July & August. Abstract Studio is €80/night in May & October, €100/night in June & September, and €110/night in July & August. Minimum stay: 3 nights. Deposit: 30%. Long-stay offer: Book 7 nights and get 1 night FREE.",
  keywords: [
      "Abstract Apartment Paralia Ofriniou prices availability calendar",
      "Costa Ofrynio apartment rental rates May June July August September October",
      "цени и свободни дати Апартамент Абстракт Офринио 7 нощувки + 1 безплатна",
      "τιμές διαθεσιμότητα διαμέρισμα Παραλία Οφρυνίου Μάιος Οκτώβριος"
  ],
  ogImage: "/Images/Gallery/KitchenArea.jpg",
  ogAlt: "Abstract Apartment in Paralia Ofriniou – seasonal rates and availability",
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
            { name: "Rates & Availability", path: "/apartments/rates" },
          ]),
          getApartmentRatesJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
