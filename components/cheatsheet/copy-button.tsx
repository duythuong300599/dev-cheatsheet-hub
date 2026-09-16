"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API không khả dụng");
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Đã copy");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Không thể copy, vui lòng thử lại");
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label="Copy code"
      onClick={handleCopy}
      className="shrink-0"
    >
      {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
    </Button>
  );
}
