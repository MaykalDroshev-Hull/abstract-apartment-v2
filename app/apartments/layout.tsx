import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import {
  buildPageMetadata,
  getApartmentLodgingJsonLd,
  getBreadcrumbJsonLd,
} from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Abstract Apartment – Beachfront Holiday Villa & Studio in Paralia Ofriniou, Greece',
  description:
    'Abstract Apartment offers beachfront holiday accommodation in Paralia Ofriniou (Costa Ofrynio), Greece — just 2 minutes walk to the beach and taverns. Book our spacious 2-bedroom apartment with BBQ terrace or cozy studio.',
  path: '/apartments',
  property: 'apartments',
  aiSummary:
    'Abstract Apartment & Abstract Studio (AMA 00003339938) at Martini 7, Paralia Ofriniou (Costa Ofrynio) 640 08, Kavala Region, Greece — a 2-minute flat walk from the sandy Aegean Sea beach and taverns. Offers a 2-bedroom Apartment (up to 6 guests, full kitchen, washing machine, AC in every room, large BBQ terrace, private parking; €100–€160/night May–Oct) and a cozy Studio (double bed + sofa bed, kitchenette, private bath, AC, balcony; €80–€110/night May–Oct). Minimum stay 3 nights; Book 7 nights and receive 1 night free.',
  keywords: [
    'Abstract Apartment',
    'Abstract Studio Paralia Ofriniou',
    'Paralia Ofriniou beachfront apartment',
    'Costa Ofrynio holiday rental Greece',
    'family apartment Paralia Ofriniou BBQ terrace private parking',
    'beachfront accommodation near Kavala Greece 6 guests',
    'Апартамент Абстракт Офринио',
    'апартамент под наем Офринио Гърция близо до плажа',
    'нощувки Паралия Офринио Коста Офринио за 6 човека',
    'студио и апартамент Офринио с тераса барбекю и паркинг',
    'διαμέρισμα Παραλία Οφρυνίου Costa Ofrynio',
    'ενοικιαζόμενα διαμερίσματα Παραλία Οφρυνίου δίπλα στη θάλασσα',
    'διακοπές Καβάλα Οφρύνιο οικογένεια πάρκινγκ μπάρμπεκιου',
  ],
  ogImage: '/Images/Gallery/KitchenArea.jpg',
  ogAlt: 'Abstract Apartment in Paralia Ofriniou, Greece – modern beachfront holiday apartment',
  siteName: 'Abstract Apartment',
});

export default function ApartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={[
          getApartmentLodgingJsonLd(),
          getBreadcrumbJsonLd([{ name: 'Abstract Apartment', path: '/apartments' }]),
        ]}
      />
      {children}
    </>
  );
}
