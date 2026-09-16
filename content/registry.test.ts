import { describe, it, expect } from "vitest";
import { CheatsheetSchema } from "@/content/schema";
import { CATEGORIES } from "@/content/categories";
import {
  getPublishedCheatsheets,
  getCheatsheetBySlug,
  getCategoriesWithCheatsheets,
  getAllSnippetsFlatIndex,
} from "@/content/registry";

describe("content schema", () => {
  it("throws when a required field is missing", () => {
    const invalid = {
      slug: "broken",
      title: "Broken",
      category: "tool",
      // description missing on purpose
      status: "published",
      sections: [],
    };
    expect(() => CheatsheetSchema.parse(invalid)).toThrow();
  });
});

describe("registry loader", () => {
  it("returns published cheatsheets sorted by title", () => {
    const published = getPublishedCheatsheets();
    expect(published.length).toBeGreaterThan(0);
    expect(published.every((c) => c.status === "published")).toBe(true);
  });

  it("finds a cheatsheet by slug", () => {
    const found = getCheatsheetBySlug("javascript");
    expect(found?.title).toBe("JavaScript");
  });

  it("returns undefined for unknown slug", () => {
    expect(getCheatsheetBySlug("does-not-exist")).toBeUndefined();
  });

  it("groups cheatsheets by category, one group per defined category", () => {
    const categories = getCategoriesWithCheatsheets();
    expect(categories).toHaveLength(CATEGORIES.length);
    const toolCategory = categories.find((c) => c.id === "tool");
    expect(toolCategory?.cheatsheets.length).toBeGreaterThan(0);
    for (const category of categories) {
      expect(category.cheatsheets.every((c) => c.category === category.id)).toBe(true);
    }
  });

  it("flattens all snippets across published cheatsheets", () => {
    const flat = getAllSnippetsFlatIndex();
    const expectedCount = getPublishedCheatsheets().reduce(
      (sum, c) => sum + c.sections.reduce((s, sec) => s + sec.snippets.length, 0),
      0,
    );
    expect(flat.length).toBe(expectedCount);
  });
});
