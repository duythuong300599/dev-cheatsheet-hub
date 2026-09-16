"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useCommandPalette } from "@/components/command-palette-provider";
import { filterSnippets, groupByCheatsheet } from "@/lib/search";
import type { FlatSnippetIndexItem } from "@/content/registry";

export function CommandPalette({ index }: { index: FlatSnippetIndexItem[] }) {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => filterSnippets(query, index), [query, index]);
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
      title="Tìm kiếm cheat sheet"
      description="Gõ từ khoá để tìm snippet trong toàn bộ cheat sheet"
    >
      <CommandInput
        placeholder="Tìm snippet, cheat sheet..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>Không tìm thấy kết quả. Thử duyệt theo danh mục ở sidebar.</CommandEmpty>
        {[...grouped.entries()].map(([cheatsheetTitle, items]) => (
          <CommandGroup key={cheatsheetTitle} heading={cheatsheetTitle}>
            {items.map((item) => (
              <CommandItem
                key={`${item.cheatsheetSlug}-${item.snippetId}`}
                value={`${item.cheatsheetTitle} ${item.snippetTitle} ${item.sectionTitle}`}
                onSelect={() => handleSelect(item)}
              >
                <span>{item.snippetTitle}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {item.sectionTitle}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
