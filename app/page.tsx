'use client';

import { useTranslations } from '@/app/lib/translations';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {t.home.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t.home.description}
          </p>
        </div>
      </div>
    </div>
  );
}
