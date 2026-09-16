import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { CommandPaletteProvider } from "@/components/command-palette-provider";
import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import {
  getCategoriesWithCheatsheets,
  getAllSnippetsFlatIndex,
} from "@/content/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Cheatsheet Hub",
  description: "Cheat sheet lập trình tra cứu nhanh, giao diện editor tối màu.",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored === "dark" || (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const categories = getCategoriesWithCheatsheets();
  const snippetIndex = getAllSnippetsFlatIndex();

  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <ThemeProvider>
          <TooltipProvider delay={200}>
            <CommandPaletteProvider>
              <Header categories={categories} />
              <div className="flex flex-1">
                <aside className="hidden w-64 shrink-0 border-r border-border md:block">
                  <Sidebar categories={categories} />
                </aside>
                <main className="min-w-0 flex-1">{children}</main>
              </div>
              <CommandPalette index={snippetIndex} />
            </CommandPaletteProvider>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
