import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import {
  buildPageMetadata,
  getHouseLodgingJsonLd,
  getBreadcrumbJsonLd,
} from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Abstract Guest House – Private Balkan Spa Villa in Golets, Bulgaria | Къща за гости Абстракт',
  description:
    'Book the entire Abstract Guest House (Къща за гости „Абстракт“) in Golets, Lovech Province, Bulgaria for up to 14 guests. Revival architecture, traditional mehana with fireplace, year-round outdoor hot jacuzzi, infrared sauna, heated pool & pet-friendly fenced garden.',
  path: '/house',
  property: 'house',
  aiSummary:
    'Abstract Guest House (Къща за гости „Абстракт“) in Golets village, Lovech Province, Bulgaria (1h 40m from Sofia, 23 min from Lovech & Troyan). Rented exclusively as an entire private house for up to 14 guests (8–10 adults + 4 children, 4 bedrooms, 4 bathrooms). Rates: €300/night weekdays (Sun–Thu, min 1 night), €350/night weekends (Fri–Sat, min 2 nights). Includes year-round 5-seater outdoor hot jacuzzi (works in winter snow), 3-seater infrared sauna, heated seasonal pool (Apr–Oct), traditional mehana tavern with free firewood, pellet central heating, 4 free parking spaces, and free pet stays in a fenced yard.',
  keywords: [
    'Къща за гости Абстракт',
    'Къща за гости Абстракт Голец',
    'самостоятелна къща за гости за 14 човека',
    'къща за гости Голец',
    'къща за гости Ловеч',
    'къща за гости Троян',
    'къща за гости Угърчин',
    'къща с външно джакузи през зимата и сауна',
    'къща с отопляем басейн и механа с камина',
    'къща за гости близо до София за компания',
    'къща за гости безплатни домашни любимци ограден двор',
    'къща за гости близо до Крушунски водопади и Деветашка пещера',
    'Abstract Guest House Golets Bulgaria',
    'private guest house Bulgaria with outdoor hot tub in winter',
    'Balkan Revival villa Lovech Troyan 14 guests',
    'pet friendly mountain villa Bulgaria fenced garden',
    'Ξενώνας Abstract Γκόλετς Βουλγαρία',
    'βίλα στο βουνό Βουλγαρία με εξωτερικό τζακούζι σάουνα και πισίνα',
  ],
  ogImage: '/Images/House/house-facade-pool-courtyard.jpg',
  ogAlt: 'Abstract Guest House in Golets – Bulgarian Revival facade, glazed veranda, green courtyard, and heated outdoor pool',
  siteName: 'Abstract Guest House',
});

export default function HouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={[
          getHouseLodgingJsonLd(),
          getBreadcrumbJsonLd([{ name: 'Abstract Guest House', path: '/house' }]),
        ]}
      />
      {children}
    </>
  );
}
