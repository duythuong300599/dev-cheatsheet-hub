import Link from "next/link";
import { TerminalSquare } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchTrigger } from "@/components/search-trigger";
import { MobileSidebarSheet } from "@/components/layout/mobile-sidebar-sheet";
import type { CategoryWithCheatsheets } from "@/content/registry";

export function Header({ categories }: { categories: CategoryWithCheatsheets[] }) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <MobileSidebarSheet categories={categories} />
      <Link href="/" className="flex items-center gap-2 font-sans font-semibold">
        <TerminalSquare className="size-5 text-primary" />
        <span className="hidden sm:inline">Dev Cheatsheet Hub</span>
      </Link>
      <div className="ml-auto flex items-center gap-2">
        <SearchTrigger />
        <ThemeToggle />
      </div>
    </header>
  );
}
