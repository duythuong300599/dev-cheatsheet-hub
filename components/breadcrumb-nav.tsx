"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";
import type { Bilingual } from "@/content/schema";

export function BreadcrumbNav({
  categoryLabel,
  title,
}: {
  categoryLabel: Bilingual;
  title: string;
}) {
  const { locale } = useLocale();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/" />}>
            {pick(UI_TEXT.breadcrumbHome, locale)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>{pick(categoryLabel, locale)}</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
