"use client";

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        onClick={() => setLanguage('en')}
        className="min-w-[80px]"
      >
        {translations.en}
      </Button>
      <Button
        variant={language === 'jp' ? 'default' : 'outline'}
        onClick={() => setLanguage('jp')}
        className="min-w-[80px]"
      >
        {translations.jp}
      </Button>
    </div>
  );
} 