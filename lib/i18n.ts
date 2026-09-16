export type Locale = "vi" | "en";

export interface Bilingual {
  vi: string;
  en: string;
}

export function pick(text: Bilingual, locale: Locale): string {
  return text[locale];
}

/**
 * Chuỗi tĩnh cho UI chrome (header, sidebar, empty state...). Nội dung
 * cheat sheet (title/description snippet) nằm trực tiếp trong content/*
 * dưới dạng { vi, en }, không qua dictionary này.
 */
export const UI_TEXT = {
  searchPlaceholder: { vi: "Tìm kiếm...", en: "Search..." },
  commandPaletteTitle: { vi: "Tìm kiếm cheat sheet", en: "Search cheat sheets" },
  commandPaletteDescription: {
    vi: "Gõ từ khoá để tìm snippet trong toàn bộ cheat sheet",
    en: "Type a keyword to find a snippet across all cheat sheets",
  },
  commandInputPlaceholder: { vi: "Tìm snippet, cheat sheet...", en: "Search snippets, cheat sheets..." },
  commandEmpty: {
    vi: "Không tìm thấy kết quả. Thử duyệt theo danh mục ở sidebar.",
    en: "No results found. Try browsing by category in the sidebar.",
  },
  categoriesNavLabel: { vi: "Danh mục cheat sheet", en: "Cheat sheet categories" },
  comingSoon: { vi: "Sắp ra mắt", en: "Coming soon" },
  comingSoonTooltip: { vi: "Cheat sheet này sắp ra mắt", en: "This cheat sheet is coming soon" },
  openCategoryMenu: { vi: "Mở menu danh mục", en: "Open category menu" },
  categoriesTitle: { vi: "Danh mục", en: "Categories" },
  heroTitle: { vi: "Dev Cheatsheet Hub", en: "Dev Cheatsheet Hub" },
  heroSubtitlePrefix: {
    vi: "Tra cứu cú pháp nhanh cho ngôn ngữ, framework và công cụ bạn dùng hàng ngày.",
    en: "Quick syntax reference for the languages, frameworks and tools you use every day.",
  },
  heroSubtitleShortcut: { vi: "Nhấn", en: "Press" },
  heroSubtitleSuffix: { vi: "để tìm kiếm bất cứ đâu.", en: "to search from anywhere." },
  snippetCount: { vi: "snippet", en: "snippets" },
  breadcrumbHome: { vi: "Trang chủ", en: "Home" },
  copyCode: { vi: "Copy code", en: "Copy code" },
  copied: { vi: "Đã copy", en: "Copied" },
  copyFailed: { vi: "Không thể copy, vui lòng thử lại", en: "Could not copy, please try again" },
  themeToLight: { vi: "Chuyển sang giao diện sáng", en: "Switch to light theme" },
  themeToDark: { vi: "Chuyển sang giao diện tối", en: "Switch to dark theme" },
  themeToggleLoading: { vi: "Đổi giao diện", en: "Toggle theme" },
  languageToggleLabel: { vi: "Chuyển sang English", en: "Switch to Vietnamese" },
  notFoundTitle: { vi: "Không tìm thấy cheat sheet", en: "Cheat sheet not found" },
  notFoundDescription: {
    vi: "Cheat sheet bạn tìm không tồn tại hoặc chưa được xuất bản.",
    en: "The cheat sheet you're looking for doesn't exist or isn't published yet.",
  },
  backToHome: { vi: "Về trang chủ", en: "Back to home" },
} satisfies Record<string, Bilingual>;
