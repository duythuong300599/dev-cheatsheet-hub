import { describe, it, expect } from "vitest";
import { filterSnippets, groupByCheatsheet } from "@/lib/search";
import { getAllSnippetsFlatIndex } from "@/content/registry";

const index = getAllSnippetsFlatIndex();

describe("filterSnippets", () => {
  it("returns full index when query is empty", () => {
    expect(filterSnippets("", index)).toHaveLength(index.length);
    expect(filterSnippets("   ", index)).toHaveLength(index.length);
  });

  it("matches by snippet title (case-insensitive)", () => {
    const result = filterSnippets("MAP()", index);
    expect(result.some((r) => r.snippetTitle === "map()")).toBe(true);
  });

  it("matches by cheatsheet title", () => {
    const result = filterSnippets("rebase", index);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((r) => r.cheatsheetTitle === "Git")).toBe(true);
  });

  it("returns empty array when nothing matches", () => {
    expect(filterSnippets("khong-ton-tai-xyz", index)).toHaveLength(0);
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
