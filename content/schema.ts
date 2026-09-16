import { z } from "zod";

export const BilingualSchema = z.object({
  vi: z.string().min(1),
  en: z.string().min(1),
});

export const SnippetSchema = z.object({
  id: z.string().min(1),
  title: BilingualSchema,
  language: z.string().min(1),
  code: z.string().min(1),
  description: BilingualSchema.optional(),
});

export const SectionSchema = z.object({
  id: z.string().min(1),
  title: BilingualSchema,
  snippets: z.array(SnippetSchema).min(1),
});

export const CategoryIdSchema = z.enum([
  "frontend",
  "backend",
  "devops",
  "database",
  "language",
  "tool",
]);

export const CheatsheetSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  category: CategoryIdSchema,
  description: BilingualSchema,
  status: z.enum(["published", "coming-soon"]),
  sections: z.array(SectionSchema).min(1),
});

export type Bilingual = z.infer<typeof BilingualSchema>;
export type Snippet = z.infer<typeof SnippetSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type CategoryId = z.infer<typeof CategoryIdSchema>;
export type Cheatsheet = z.infer<typeof CheatsheetSchema>;
