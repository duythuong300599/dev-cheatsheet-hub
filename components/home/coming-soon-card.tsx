import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export function ComingSoonCard({
  label,
  categoryLabel,
}: {
  label: string;
  categoryLabel: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <div
            aria-disabled="true"
            className="flex cursor-not-allowed flex-col gap-2 rounded-md border border-dashed border-border p-4 opacity-50"
          />
        }
      >
        <h3 className="font-sans font-semibold">{label}</h3>
        <p className="text-sm text-muted-foreground">Sắp ra mắt</p>
        <Badge variant="outline" className="mt-auto w-fit font-mono text-[10px] font-normal">
          {categoryLabel}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>Cheat sheet này sắp ra mắt</TooltipContent>
    </Tooltip>
  );
}
