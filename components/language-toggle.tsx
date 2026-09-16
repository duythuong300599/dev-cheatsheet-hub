"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={pick(UI_TEXT.languageToggleLabel, locale)}
      onClick={() => setLocale(locale === "vi" ? "en" : "vi")}
    >
      <span className="sr-only">{pick(UI_TEXT.languageToggleLabel, locale)}</span>
      <span className="flex items-center gap-1 font-mono text-[10px] font-semibold">
        <Languages className="size-4" />
        {locale.toUpperCase()}
      </span>
    </Button>
  );
}
