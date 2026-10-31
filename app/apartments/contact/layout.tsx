import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getApartmentContactJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us – Abstract Apartment Paralia Ofriniou, Greece",
  description: "Get in touch with Abstract Apartment in Paralia Ofriniou, Greece by phone (+359 886 790 681 / +359 878 112 454), Viber, email, or online inquiry form.",
  path: "/apartments/contact",
  property: "apartments",
  aiSummary: "Direct contacts for Abstract Apartment & Studio (Martini 7, Paralia Ofriniou 640 08, Greece): Niki (+359 886 790 681, Phone & Viber), Kika (+359 878 112 454, Phone & Viber), email abstract.apartments@gmail.com.",
  keywords: [
      "contact Abstract Apartment Paralia Ofriniou phone Viber email",
      "контакти телефон Апартамент Абстракт Офринио Гърция Viber",
      "επικοινωνία τηλέφωνο Abstract Apartment Παραλία Οφρυνίου"
  ],
  ogImage: "/Images/Gallery/LivingArea1.jpg",
  ogAlt: "Contact Abstract Apartment in Paralia Ofriniou, Greece",
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
            { name: "Contact Us", path: "/apartments/contact" },
          ]),
          getApartmentContactJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
