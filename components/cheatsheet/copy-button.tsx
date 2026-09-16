"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLocale } from "@/components/locale-provider";
import { UI_TEXT, pick } from "@/lib/i18n";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);
  const { locale } = useLocale();

  async function handleCopy() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API not available");
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(pick(UI_TEXT.copied, locale));
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error(pick(UI_TEXT.copyFailed, locale));
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={pick(UI_TEXT.copyCode, locale)}
      onClick={handleCopy}
      className="shrink-0"
    >
      {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
    </Button>
  );
}
