import type { CategoryId, Bilingual } from "@/content/schema";

export interface CategoryMeta {
  id: CategoryId;
  label: Bilingual;
  description: Bilingual;
  order: number;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "language",
    label: { vi: "Ngôn ngữ", en: "Languages" },
    description: {
      vi: "Cú pháp cốt lõi của các ngôn ngữ lập trình",
      en: "Core syntax of programming languages",
    },
    order: 1,
  },
  {
    id: "frontend",
    label: { vi: "Frontend", en: "Frontend" },
    description: {
      vi: "HTML, CSS, framework giao diện",
      en: "HTML, CSS, UI frameworks",
    },
    order: 2,
  },
  {
    id: "backend",
    label: { vi: "Backend", en: "Backend" },
    description: {
      vi: "Server, API, runtime phía server",
      en: "Server, API, server-side runtime",
    },
    order: 3,
  },
  {
    id: "database",
    label: { vi: "Database", en: "Database" },
    description: {
      vi: "SQL, NoSQL, truy vấn dữ liệu",
      en: "SQL, NoSQL, data querying",
    },
    order: 4,
  },
  {
    id: "devops",
    label: { vi: "DevOps", en: "DevOps" },
    description: {
      vi: "Container, CI/CD, hạ tầng",
      en: "Containers, CI/CD, infrastructure",
    },
    order: 5,
  },
  {
    id: "tool",
    label: { vi: "Công cụ", en: "Tools" },
    description: {
      vi: "Git và các công cụ dòng lệnh khác",
      en: "Git and other command-line tools",
    },
    order: 6,
  },
];
