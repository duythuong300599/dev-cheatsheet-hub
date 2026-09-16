"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { CategoryWithCheatsheets } from "@/content/registry";

export function Sidebar({
  categories,
  onNavigate,
}: {
  categories: CategoryWithCheatsheets[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(categories.map((c) => c.id)),
  );

  function toggle(categoryId: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) next.delete(categoryId);
      else next.add(categoryId);
      return next;
    });
  }

  return (
    <nav aria-label="Danh mục cheat sheet" className="flex flex-col gap-1 p-3">
      {categories.map((category) => {
        const isExpanded = expanded.has(category.id);
        return (
          <div key={category.id}>
            <button
              type="button"
              onClick={() => toggle(category.id)}
              aria-expanded={isExpanded}
              className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase hover:text-foreground"
            >
              {category.label}
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform",
                  isExpanded ? "rotate-0" : "-rotate-90",
                )}
              />
            </button>
            {isExpanded && (
              <ul className="mb-2 flex flex-col gap-0.5">
                {category.cheatsheets.length === 0 && (
                  <li className="px-2 py-1 text-xs text-muted-foreground">
                    Sắp ra mắt
                  </li>
                )}
                {category.cheatsheets.map((cheatsheet) => {
                  const href = `/cheatsheets/${cheatsheet.slug}`;
                  const isActive = pathname === href;
                  const isComingSoon = cheatsheet.status === "coming-soon";

                  if (isComingSoon) {
                    return (
                      <li key={cheatsheet.slug}>
                        <Tooltip>
                          <TooltipTrigger
                            render={
                              <span
                                aria-disabled="true"
                                className="block cursor-not-allowed rounded-md px-2 py-1.5 text-sm text-muted-foreground/50"
                              />
                            }
                          >
                            {cheatsheet.title}
                          </TooltipTrigger>
                          <TooltipContent>Sắp ra mắt</TooltipContent>
                        </Tooltip>
                      </li>
                    );
                  }

                  return (
                    <li key={cheatsheet.slug}>
                      <Link
                        href={href}
                        onClick={onNavigate}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                          isActive &&
                            "bg-accent font-medium text-accent-foreground ring-1 ring-inset ring-ring/40",
                        )}
                      >
                        {cheatsheet.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
