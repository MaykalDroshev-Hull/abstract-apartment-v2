'use client';

import { usePageTitle } from '@/app/hooks/usePageTitle';

export function PageTitleUpdater() {
  usePageTitle();
  return null; // This component doesn't render anything
}
