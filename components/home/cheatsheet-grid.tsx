import { CheatsheetCard } from "@/components/home/cheatsheet-card";
import { ComingSoonCard } from "@/components/home/coming-soon-card";
import type { CategoryWithCheatsheets } from "@/content/registry";

/**
 * Gộp toàn bộ cheat sheet (mọi category) vào 1 grid duy nhất thay vì chia
 * lưới riêng theo từng category — tránh hàng trống khi 1 category chỉ có
 * 1-2 item. Category vẫn hiển thị qua badge trên từng card.
 */
export function CheatsheetGrid({ categories }: { categories: CategoryWithCheatsheets[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        if (category.cheatsheets.length === 0) {
          return (
            <ComingSoonCard
              key={category.id}
              label={category.label}
              categoryLabel={category.label}
            />
          );
        }

        return category.cheatsheets.map((cheatsheet) =>
          cheatsheet.status === "published" ? (
            <CheatsheetCard
              key={cheatsheet.slug}
              cheatsheet={cheatsheet}
              categoryLabel={category.label}
            />
          ) : (
            <ComingSoonCard
              key={cheatsheet.slug}
              label={cheatsheet.title}
              categoryLabel={category.label}
            />
          ),
        );
      })}
    </div>
  );
}
