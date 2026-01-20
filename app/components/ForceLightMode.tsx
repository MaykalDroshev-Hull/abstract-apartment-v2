'use client';

import { useEffect } from 'react';

export function ForceLightMode() {
  useEffect(() => {
    // Remove any dark class from html element
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    
    // Set color-scheme to light
    document.documentElement.style.colorScheme = 'light';
    
    // Prevent dark mode from being detected
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
      if (document.documentElement.style.colorScheme !== 'light') {
        document.documentElement.style.colorScheme = 'light';
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
