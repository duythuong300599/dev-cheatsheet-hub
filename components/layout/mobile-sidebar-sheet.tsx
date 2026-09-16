"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/layout/sidebar";
import type { CategoryWithCheatsheets } from "@/content/registry";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";

export function MobileSidebarSheet({
  categories,
}: {
  categories: CategoryWithCheatsheets[];
}) {
  const [open, setOpen] = React.useState(false);
  const { locale } = useLocale();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={pick(UI_TEXT.openCategoryMenu, locale)}
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b border-border">
          <SheetTitle>{pick(UI_TEXT.categoriesTitle, locale)}</SheetTitle>
        </SheetHeader>
        <Sidebar categories={categories} onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
