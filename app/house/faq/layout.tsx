import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseFaqJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ & House Rules – Abstract Guest House Golets | Къща за гости Абстракт",
  description: "Answers to common questions about renting Abstract Guest House: whole-house exclusivity, 14-guest capacity, check-in/out times, winter jacuzzi operation, heated pool season, free firewood, and free pet policy.",
  path: "/house/faq",
  property: "house",
  aiSummary: "Key House Rules & FAQs: Whole-house exclusive rental only (max 14 guests: 8–10 adults + 4 children). Check-in from 12:00 PM by arrangement, check-out by 11:00 AM. 5-seat outdoor hot jacuzzi works all winter in snow; heated outdoor pool open April–October; 3-seat infrared sauna year-round. Unlimited free firewood for mehana & BBQ. Pets stay FREE in fenced yard. Outdoor music until 22:00, indoor mehana parties all night.",
  keywords: [
      "въпроси и правила Къща за гости Абстракт Голец",
      "работи ли външното джакузи през зимата",
      "къща за гости за парти и рожден ден механа без ограничения",
      "къща за гости безплатно с куче домашен любимец",
      "Abstract Guest House FAQ house rules pet policy jacuzzi winter",
      "συχνές ερωτήσεις κανόνες Ξενώνας Abstract Γκόλετς"
  ],
  ogImage: "/Images/House/house-facade-pool-courtyard.jpg",
  ogAlt: "Abstract Guest House in Golets – frequently asked questions and guest policies",
  siteName: "Abstract Guest House",
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
            { name: "Abstract Guest House", path: "/house" },
            { name: "Frequently Asked Questions", path: "/house/faq" },
          ]),
          getHouseFaqJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
