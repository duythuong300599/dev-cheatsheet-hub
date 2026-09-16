import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCheatsheetBySlug,
  getPublishedCheatsheets,
} from "@/content/registry";
import { CATEGORIES } from "@/content/categories";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { SectionBlock } from "@/components/cheatsheet/section-block";
import { T } from "@/components/i18n-text";

export function generateStaticParams() {
  return getPublishedCheatsheets().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cheatsheet = getCheatsheetBySlug(slug);
  if (!cheatsheet) return {};
  return {
    title: `${cheatsheet.title} — Dev Cheatsheet Hub`,
    description: cheatsheet.description.vi,
  };
}

export default async function CheatsheetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cheatsheet = getCheatsheetBySlug(slug);
  if (!cheatsheet) notFound();

  const categoryLabel = CATEGORIES.find((c) => c.id === cheatsheet.category)?.label ?? {
    vi: cheatsheet.category,
    en: cheatsheet.category,
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">
      <BreadcrumbNav categoryLabel={categoryLabel} title={cheatsheet.title} />
      <div>
        <h1 className="font-sans text-2xl font-bold">{cheatsheet.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          <T text={cheatsheet.description} />
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {cheatsheet.sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
