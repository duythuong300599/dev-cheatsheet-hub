"use client";

import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLocale();

  return (
    <div className="flex flex-col gap-2 border-b border-border px-4 py-8 text-center sm:py-12">
      <h1 className="font-sans text-3xl font-bold sm:text-4xl">{pick(UI_TEXT.heroTitle, locale)}</h1>
      <p className="mx-auto max-w-xl text-sm text-muted-foreground">
        {pick(UI_TEXT.heroSubtitlePrefix, locale)} {pick(UI_TEXT.heroSubtitleShortcut, locale)}{" "}
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>{" "}
        {pick(UI_TEXT.heroSubtitleSuffix, locale)}
      </p>
    </div>
  );
}
