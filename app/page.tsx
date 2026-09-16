import { Hero } from "@/components/home/hero";
import { CheatsheetGrid } from "@/components/home/cheatsheet-grid";
import { getCategoriesWithCheatsheets } from "@/content/registry";

export default function Home() {
  const categories = getCategoriesWithCheatsheets();

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-8">
        <CheatsheetGrid categories={categories} />
      </div>
    </div>
  );
}
