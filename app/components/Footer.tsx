'use client';

import { useTranslations } from '@/app/lib/translations';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="w-full max-w-[1600px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {t.footer.company}
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {t.footer.legal}
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {t.footer.follow}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t.footer.description}
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

