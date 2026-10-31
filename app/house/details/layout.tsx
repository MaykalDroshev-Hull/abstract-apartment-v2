import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Rooms, Mehana & Spa Details – Abstract Guest House Golets | Къща за гости Абстракт",
  description: "Explore the 4 bedrooms (up to 14 guests), traditional Balkan mehana with fireplace, fully equipped kitchen, year-round outdoor hot jacuzzi, infrared sauna, and heated pool at Abstract Guest House in Golets.",
  path: "/house/details",
  property: "house",
  aiSummary: "4 bedrooms sleeping up to 14 guests (8–10 adults + 4 children): Room with Fireplace, Large Room, Panoramic Room 1 (en-suite), and Panoramic Room 2 (en-suite), each with 1 double bed + 1 pull-out sofa bed. Plus ground-floor traditional mehana tavern with wood fireplace (free firewood) & bathroom, full modern kitchen with dishwasher, year-round 5-person outdoor hot jacuzzi, 3-person infrared sauna, seasonal heated pool (Apr–Oct), pellet central heating, workation Wi-Fi, and 4 free parking spaces.",
  keywords: [
      "спални Къща за гости Абстракт Голец",
      "стая с огнище възрожденска къща",
      "къща за гости с 4 спални и механа с камина",
      "къща с 5 местно външно джакузи и инфрачервена сауна",
      "Abstract Guest House 4 bedrooms mehana spa details",
      "Bulgarian Revival hearth room vacation rental",
      "Ξενώνας Abstract δωμάτια ταβέρνα σπα τζακούζι"
  ],
  ogImage: "/Images/House/hearth-room-wide.jpg",
  ogAlt: "Traditional Bulgarian Hearth Room with open clay fireplace and woven rugs at Abstract Guest House",
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
            { name: "Rooms, Mehana & Spa Details", path: "/house/details" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
