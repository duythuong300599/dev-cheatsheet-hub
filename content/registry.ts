import { CATEGORIES, type CategoryMeta } from "@/content/categories";
import { CheatsheetSchema, type Cheatsheet, type Bilingual } from "@/content/schema";
import javascript from "@/content/cheatsheets/javascript";
import git from "@/content/cheatsheets/git";
import css from "@/content/cheatsheets/css";
import typescript from "@/content/cheatsheets/typescript";
import python from "@/content/cheatsheets/python";
import nodejs from "@/content/cheatsheets/nodejs";
import docker from "@/content/cheatsheets/docker";
import sql from "@/content/cheatsheets/sql";
import bash from "@/content/cheatsheets/bash";
import react from "@/content/cheatsheets/react";
import html from "@/content/cheatsheets/html";
import mongodb from "@/content/cheatsheets/mongodb";
import regex from "@/content/cheatsheets/regex";
import markdown from "@/content/cheatsheets/markdown";
import go from "@/content/cheatsheets/go";
import vue from "@/content/cheatsheets/vue";
import kubernetes from "@/content/cheatsheets/kubernetes";
import rust from "@/content/cheatsheets/rust";
import java from "@/content/cheatsheets/java";
import php from "@/content/cheatsheets/php";

const RAW_CHEATSHEETS: Cheatsheet[] = [
  javascript,
  git,
  css,
  typescript,
  python,
  nodejs,
  docker,
  sql,
  bash,
  react,
  html,
  mongodb,
  regex,
  markdown,
  go,
  vue,
  kubernetes,
  rust,
  java,
  php,
];

export const ALL_CHEATSHEETS: Cheatsheet[] = RAW_CHEATSHEETS.map((raw) =>
  CheatsheetSchema.parse(raw),
);

export function getPublishedCheatsheets(): Cheatsheet[] {
  return ALL_CHEATSHEETS.filter((c) => c.status === "published").sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

export function getCheatsheetBySlug(slug: string): Cheatsheet | undefined {
  return ALL_CHEATSHEETS.find((c) => c.slug === slug && c.status === "published");
}

export interface CategoryWithCheatsheets extends CategoryMeta {
  cheatsheets: Cheatsheet[];
}

export function getCategoriesWithCheatsheets(): CategoryWithCheatsheets[] {
  const byCategory = new Map<string, Cheatsheet[]>();
  for (const c of ALL_CHEATSHEETS) {
    const list = byCategory.get(c.category) ?? [];
    list.push(c);
    byCategory.set(c.category, list);
  }

  return [...CATEGORIES]
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      ...category,
      cheatsheets: (byCategory.get(category.id) ?? []).sort((a, b) => {
        if (a.status !== b.status) return a.status === "published" ? -1 : 1;
        return a.title.localeCompare(b.title);
      }),
    }));
}

export interface FlatSnippetIndexItem {
  cheatsheetSlug: string;
  cheatsheetTitle: string;
  sectionId: string;
  sectionTitle: Bilingual;
  snippetId: string;
  snippetTitle: Bilingual;
  snippetDescription?: Bilingual;
  language: string;
}

export function getAllSnippetsFlatIndex(): FlatSnippetIndexItem[] {
  const index: FlatSnippetIndexItem[] = [];
  for (const cheatsheet of getPublishedCheatsheets()) {
    for (const section of cheatsheet.sections) {
      for (const snippet of section.snippets) {
        index.push({
          cheatsheetSlug: cheatsheet.slug,
          cheatsheetTitle: cheatsheet.title,
          sectionId: section.id,
          sectionTitle: section.title,
          snippetId: snippet.id,
          snippetTitle: snippet.title,
          snippetDescription: snippet.description,
          language: snippet.language,
        });
      }
    }
  }
  return index;
}
