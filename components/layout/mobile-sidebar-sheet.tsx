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

export function MobileSidebarSheet({
  categories,
}: {
  categories: CategoryWithCheatsheets[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Mở menu danh mục" />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b border-border">
          <SheetTitle>Danh mục</SheetTitle>
        </SheetHeader>
        <Sidebar categories={categories} onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
