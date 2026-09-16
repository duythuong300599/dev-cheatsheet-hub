"use client";

import * as React from "react";
import type { Locale } from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "locale";

/**
 * Mặc định luôn khởi tạo "vi" ở cả server lẫn lần render đầu tiên của client
 * (không đọc localStorage lúc init) để tránh hydration mismatch. Sau khi
 * mount, effect đọc localStorage và cập nhật nếu người dùng đã chọn "en"
 * trước đó — chấp nhận 1 nhịp chuyển ngôn ngữ ngắn cho lần đầu ghé trang.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("vi");

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "vi") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      // localStorage không khả dụng — giữ mặc định "vi"
    }
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // bỏ qua an toàn
    }
  }, []);

  const value = React.useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
