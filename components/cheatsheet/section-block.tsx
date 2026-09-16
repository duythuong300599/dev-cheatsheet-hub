import { SnippetCard } from "@/components/cheatsheet/snippet-card";
import { T } from "@/components/i18n-text";
import type { Section } from "@/content/schema";

export function SectionBlock({ section }: { section: Section }) {
  return (
    <section aria-labelledby={`section-${section.id}`} className="flex flex-col gap-3">
      <h2 id={`section-${section.id}`} className="font-sans text-lg font-semibold">
        <T text={section.title} />
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {section.snippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </section>
  );
}
