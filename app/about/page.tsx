'use client';

import { AboutHero } from './components/AboutHero';
import { StorySection } from './components/StorySection';
import { ValuesGrid } from './components/ValuesGrid';
import { TeamSection } from './components/TeamSection';
import { AboutCta } from './components/AboutCta';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED] dark:bg-zinc-900">
      <AboutHero />
      <StorySection />
      <ValuesGrid />
      <TeamSection />
      <AboutCta />
    </main>
  );
}

