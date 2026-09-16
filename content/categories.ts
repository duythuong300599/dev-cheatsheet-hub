import type { CategoryId } from "@/content/schema";

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  description: string;
  order: number;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: "language", label: "Ngôn ngữ", description: "Cú pháp cốt lõi của các ngôn ngữ lập trình", order: 1 },
  { id: "frontend", label: "Frontend", description: "HTML, CSS, framework giao diện", order: 2 },
  { id: "backend", label: "Backend", description: "Server, API, runtime phía server", order: 3 },
  { id: "database", label: "Database", description: "SQL, NoSQL, truy vấn dữ liệu", order: 4 },
  { id: "devops", label: "DevOps", description: "Container, CI/CD, hạ tầng", order: 5 },
  { id: "tool", label: "Công cụ", description: "Git và các công cụ dòng lệnh khác", order: 6 },
];
