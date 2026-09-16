import { describe, it, expect } from "vitest";
import { filterSnippets, groupByCheatsheet } from "@/lib/search";
import { getAllSnippetsFlatIndex } from "@/content/registry";

const index = getAllSnippetsFlatIndex();

describe("filterSnippets", () => {
  it("returns full index when query is empty", () => {
    expect(filterSnippets("", index, "vi")).toHaveLength(index.length);
    expect(filterSnippets("   ", index, "vi")).toHaveLength(index.length);
  });

  it("matches by snippet title (case-insensitive) in the active locale", () => {
    const result = filterSnippets("MAP()", index, "vi");
    expect(result.some((r) => r.snippetTitle.vi === "map()")).toBe(true);
  });

  it("does not match the other locale's text", () => {
    // "single value" chỉ xuất hiện trong bản mô tả tiếng Anh của reduce()
    const result = filterSnippets("single value", index, "vi");
    expect(result).toHaveLength(0);
  });

  it("matches by cheatsheet title", () => {
    const result = filterSnippets("rebase", index, "vi");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((r) => r.cheatsheetTitle === "Git")).toBe(true);
  });

  it("returns empty array when nothing matches", () => {
    expect(filterSnippets("khong-ton-tai-xyz", index, "vi")).toHaveLength(0);
  });
});

describe("groupByCheatsheet", () => {
  it("groups flat items by cheatsheet title", () => {
    const groups = groupByCheatsheet(index);
    expect(groups.has("JavaScript")).toBe(true);
    expect(groups.has("Git")).toBe(true);
    expect(groups.has("CSS")).toBe(true);
  });
});
