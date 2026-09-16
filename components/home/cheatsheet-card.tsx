"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";
import type { Cheatsheet, Bilingual } from "@/content/schema";

function countSnippets(cheatsheet: Cheatsheet): number {
  return cheatsheet.sections.reduce((sum, s) => sum + s.snippets.length, 0);
}

export function CheatsheetCard({
  cheatsheet,
  categoryLabel,
}: {
  cheatsheet: Cheatsheet;
  categoryLabel: Bilingual;
}) {
  const { locale } = useLocale();

  return (
    <Link
      href={`/cheatsheets/${cheatsheet.slug}`}
      className="group flex flex-col gap-2 rounded-md border border-border bg-card p-4 transition-colors hover:border-primary/60 hover:bg-accent"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-sans font-semibold">{cheatsheet.title}</h3>
        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {pick(cheatsheet.description, locale)}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <Badge variant="outline" className="font-mono text-[10px] font-normal">
          {pick(categoryLabel, locale)}
        </Badge>
        <span className="font-mono text-xs text-muted-foreground">
          {countSnippets(cheatsheet)} {pick(UI_TEXT.snippetCount, locale)}
        </span>
      </div>
    </Link>
  );
}
