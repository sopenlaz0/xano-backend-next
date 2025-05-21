"use client";

import { useLanguage } from '@/lib/language-context';

export function ExampleComponent() {
  const { translations } = useLanguage();

  return (
    <div>
      <h1>{translations.dashboard}</h1>
      <p>{translations.welcome}</p>
      <button>{translations.submit}</button>
    </div>
  );
} 