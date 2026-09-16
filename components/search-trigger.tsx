"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCommandPalette } from "@/components/command-palette-provider";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";

export function SearchTrigger() {
  const { setOpen } = useCommandPalette();
  const { locale } = useLocale();

  return (
    <Button
      variant="outline"
      className="h-9 w-full max-w-xs justify-between gap-2 text-muted-foreground sm:w-56"
      onClick={() => setOpen(true)}
    >
      <span className="flex items-center gap-2">
        <Search className="size-4" />
        {pick(UI_TEXT.searchPlaceholder, locale)}
      </span>
      <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline-block">
        ⌘K
      </kbd>
    </Button>
  );
}
