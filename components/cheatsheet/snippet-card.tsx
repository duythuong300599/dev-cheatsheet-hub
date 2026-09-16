import { highlightCode } from "@/lib/highlight";
import { CopyButton } from "@/components/cheatsheet/copy-button";
import { Badge } from "@/components/ui/badge";
import { T } from "@/components/i18n-text";
import type { Snippet } from "@/content/schema";

export async function SnippetCard({ snippet }: { snippet: Snippet }) {
  const highlighted = await highlightCode(snippet.code, snippet.language);

  return (
    <div
      id={`snippet-${snippet.id}`}
      className="scroll-mt-20 rounded-md border border-border bg-card"
    >
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm font-medium">
            <T text={snippet.title} />
          </span>
          <Badge variant="secondary" className="font-mono text-[10px]">
            {snippet.language}
          </Badge>
        </div>
        <CopyButton code={snippet.code} />
      </div>
      {snippet.description && (
        <p className="border-b border-border px-3 py-2 text-xs text-muted-foreground">
          <T text={snippet.description} />
        </p>
      )}
      <div
        className="overflow-x-auto p-3 font-mono text-sm [&_pre]:bg-transparent! [&_pre]:whitespace-pre-wrap [&_pre]:break-words"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
