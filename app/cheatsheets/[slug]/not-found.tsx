"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";

export default function CheatsheetNotFound() {
  const { locale } = useLocale();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 className="font-sans text-2xl font-bold">{pick(UI_TEXT.notFoundTitle, locale)}</h1>
      <p className="text-sm text-muted-foreground">{pick(UI_TEXT.notFoundDescription, locale)}</p>
      <Button render={<Link href="/" />}>{pick(UI_TEXT.backToHome, locale)}</Button>
    </div>
  );
}
