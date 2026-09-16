"use client";

import { useLocale } from "@/components/locale-provider";
import type { Bilingual } from "@/content/schema";

/**
 * Nhúng text song ngữ vào cây Server Component (vd trong SnippetCard đang
 * highlight code ở server) mà không phải convert cả component cha thành
 * client — chỉ đúng phần text nhỏ này mới cần đọc locale.
 */
export function T({ text }: { text: Bilingual }) {
  const { locale } = useLocale();
  return text[locale];
}
