"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/components/locale-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UI_TEXT, pick } from "@/lib/i18n";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { locale } = useLocale();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Chỉ đọc theme thật sau khi mount ở client để tránh hydration mismatch
    // (server luôn render theo giá trị mặc định, không biết theme đã lưu trước đó).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label={pick(UI_TEXT.themeToggleLoading, locale)} disabled />
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={pick(isDark ? UI_TEXT.themeToLight : UI_TEXT.themeToDark, locale)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
