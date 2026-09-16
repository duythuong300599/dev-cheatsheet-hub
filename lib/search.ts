import type { FlatSnippetIndexItem } from "@/content/registry";
import type { Locale } from "@/lib/i18n";

/**
 * Lọc snippet theo từ khoá (không phân biệt hoa/thường), khớp theo title snippet,
 * title cheat sheet, hoặc mô tả — chỉ so khớp theo ngôn ngữ đang chọn (locale).
 * Query rỗng trả về toàn bộ index (dùng khi mới mở palette).
 */
export function filterSnippets(
  query: string,
  index: FlatSnippetIndexItem[],
  locale: Locale,
): FlatSnippetIndexItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return index;

  return index.filter((item) => {
    return (
      item.snippetTitle[locale].toLowerCase().includes(q) ||
      item.cheatsheetTitle.toLowerCase().includes(q) ||
      item.sectionTitle[locale].toLowerCase().includes(q) ||
      (item.snippetDescription?.[locale].toLowerCase().includes(q) ?? false)
    );
  });
}

export function groupByCheatsheet(
  items: FlatSnippetIndexItem[],
): Map<string, FlatSnippetIndexItem[]> {
  const groups = new Map<string, FlatSnippetIndexItem[]>();
  for (const item of items) {
    const list = groups.get(item.cheatsheetTitle) ?? [];
    list.push(item);
    groups.set(item.cheatsheetTitle, list);
  }
  return groups;
}
