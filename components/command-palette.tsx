"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useCommandPalette } from "@/components/command-palette-provider";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";
import { filterSnippets, groupByCheatsheet } from "@/lib/search";
import type { FlatSnippetIndexItem } from "@/content/registry";

export function CommandPalette({ index }: { index: FlatSnippetIndexItem[] }) {
  const { open, setOpen } = useCommandPalette();
  const { locale } = useLocale();
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => filterSnippets(query, index, locale), [query, index, locale]);
  const grouped = React.useMemo(() => groupByCheatsheet(filtered), [filtered]);

  function handleSelect(item: FlatSnippetIndexItem) {
    setOpen(false);
    setQuery("");
    router.push(`/cheatsheets/${item.cheatsheetSlug}#snippet-${item.snippetId}`);
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title={pick(UI_TEXT.commandPaletteTitle, locale)}
      description={pick(UI_TEXT.commandPaletteDescription, locale)}
    >
      <Command shouldFilter={false}>
        <CommandInput
          placeholder={pick(UI_TEXT.commandInputPlaceholder, locale)}
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>{pick(UI_TEXT.commandEmpty, locale)}</CommandEmpty>
          {[...grouped.entries()].map(([cheatsheetTitle, items]) => (
            <CommandGroup key={cheatsheetTitle} heading={cheatsheetTitle}>
              {items.map((item) => (
                <CommandItem
                  key={`${item.cheatsheetSlug}-${item.snippetId}`}
                  value={`${item.cheatsheetSlug}-${item.snippetId}`}
                  onSelect={() => handleSelect(item)}
                >
                  <span>{pick(item.snippetTitle, locale)}</span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {pick(item.sectionTitle, locale)}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
