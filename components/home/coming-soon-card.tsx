"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";
import type { Bilingual } from "@/content/schema";

export function ComingSoonCard({
  label,
  categoryLabel,
}: {
  label: Bilingual;
  categoryLabel: Bilingual;
}) {
  const { locale } = useLocale();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <div
            aria-disabled="true"
            className="flex cursor-not-allowed flex-col gap-2 rounded-md border border-dashed border-border p-4 opacity-50"
          />
        }
      >
        <h3 className="font-sans font-semibold">{pick(label, locale)}</h3>
        <p className="text-sm text-muted-foreground">{pick(UI_TEXT.comingSoon, locale)}</p>
        <Badge variant="outline" className="mt-auto w-fit font-mono text-[10px] font-normal">
          {pick(categoryLabel, locale)}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{pick(UI_TEXT.comingSoonTooltip, locale)}</TooltipContent>
    </Tooltip>
  );
}
