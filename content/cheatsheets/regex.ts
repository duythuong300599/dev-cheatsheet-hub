import type { Cheatsheet } from "@/content/schema";

const regex: Cheatsheet = {
  slug: "regex",
  title: "Regex",
  category: "tool",
  description: {
    vi: "Character class, quantifier, group/alternation, lookaround và pattern hay dùng.",
    en: "Character classes, quantifiers, groups/alternation, lookaround and common patterns.",
  },
  status: "published",
  sections: [
    {
      id: "character-classes-anchors",
      title: { vi: "Character Classes & Anchors", en: "Character Classes & Anchors" },
      snippets: [
        {
          id: "character-classes",
          title: { vi: "Character class cơ bản", en: "Basic character classes" },
          language: "javascript",
          code: "/[a-z]/i   // 1 chữ cái, không phân biệt hoa/thường\n/[0-9]/    // 1 chữ số, tương đương /\\d/\n/[^0-9]/   // KHÔNG phải chữ số (^ trong [] là phủ định)",
          description: {
            vi: "[] định nghĩa 1 tập ký tự chấp nhận; ^ đầu tiên trong [] nghĩa là phủ định.",
            en: "[] defines a set of accepted characters; a leading ^ inside [] means negation.",
          },
        },
        {
          id: "shorthand-classes",
          title: { vi: "Shorthand class", en: "Shorthand classes" },
          language: "javascript",
          code: "\\d  // chữ số\n\\w  // chữ cái, số, gạch dưới\n\\s  // khoảng trắng (space, tab, newline)",
          description: {
            vi: "Viết tắt cho các nhóm ký tự thường dùng, viết hoa (\\D \\W \\S) là phủ định.",
            en: "Shorthand for common character groups; uppercase (\\D \\W \\S) is the negation.",
          },
        },
        {
          id: "anchors",
          title: { vi: "Anchor: ^ và $", en: "Anchors: ^ and $" },
          language: "javascript",
          code: '/^https:\\/\\//.test("https://example.com"); // true\n/\\.com$/.test("example.com");          // true',
          description: {
            vi: "^ khớp đầu chuỗi, $ khớp cuối chuỗi.",
            en: "^ matches the start of a string, $ matches the end.",
          },
        },
      ],
    },
    {
      id: "quantifiers",
      title: { vi: "Quantifiers", en: "Quantifiers" },
      snippets: [
        {
          id: "quantifiers-basic",
          title: { vi: "* + ? {n,m}", en: "* + ? {n,m}" },
          language: "javascript",
          code: "/ab*c/     // 'ac', 'abc', 'abbbc' (0 hoặc nhiều 'b')\n/ab+c/     // cần ít nhất 1 'b'\n/ab?c/     // 'b' có hoặc không\n/a{2,4}/   // 2 đến 4 lần 'a'",
          description: {
            vi: "*: 0+, +: 1+, ?: 0-1, {n,m}: số lần lặp cụ thể.",
            en: "*: 0+, +: 1+, ?: 0-1, {n,m}: a specific repeat range.",
          },
        },
        {
          id: "greedy-vs-lazy",
          title: { vi: "Greedy vs lazy", en: "Greedy vs lazy" },
          language: "javascript",
          code: '"<a><b>".match(/<.+>/);   // \'<a><b>\' (greedy, khớp dài nhất)\n"<a><b>".match(/<.+?>/);  // \'<a>\' (lazy, khớp ngắn nhất)',
          description: {
            vi: "Thêm ? sau quantifier để chuyển sang chế độ lazy (khớp ít nhất có thể).",
            en: "Add ? after a quantifier to switch to lazy mode (match as little as possible).",
          },
        },
      ],
    },
    {
      id: "groups-alternation",
      title: { vi: "Groups & Alternation", en: "Groups & Alternation" },
      snippets: [
        {
          id: "capturing-group",
          title: { vi: "Capturing group", en: "Capturing group" },
          language: "javascript",
          code: 'const match = "2026-09-16".match(/(\\d{4})-(\\d{2})-(\\d{2})/);\n// match[1] = "2026", match[2] = "09", match[3] = "16"',
          description: {
            vi: "() tạo nhóm, có thể truy cập lại từng phần khớp qua chỉ số.",
            en: "() creates a group, letting you access each matched part by index.",
          },
        },
        {
          id: "named-group",
          title: { vi: "Named group", en: "Named group" },
          language: "javascript",
          code: 'const m = "2026-09-16".match(/(?<year>\\d{4})-(?<month>\\d{2})/);\nm.groups.year;  // "2026"',
          description: {
            vi: "Đặt tên cho group để truy cập rõ ràng hơn thay vì nhớ chỉ số.",
            en: "Name a group for clearer access instead of remembering indexes.",
          },
        },
        {
          id: "alternation",
          title: { vi: "Alternation (|)", en: "Alternation (|)" },
          language: "javascript",
          code: '/cat|dog/.test("I have a dog"); // true',
          description: {
            vi: "Khớp 1 trong nhiều lựa chọn được ngăn cách bởi dấu |.",
            en: "Match one of several alternatives separated by |.",
          },
        },
      ],
    },
    {
      id: "lookaround",
      title: { vi: "Lookahead/Lookbehind", en: "Lookahead/Lookbehind" },
      snippets: [
        {
          id: "positive-lookahead",
          title: { vi: "Positive lookahead (?=...)", en: "Positive lookahead (?=...)" },
          language: "javascript",
          code: '"100px".match(/\\d+(?=px)/); // "100" — khớp số đứng trước "px"',
          description: {
            vi: "Khớp phần trước, nhưng không bao gồm phần trong lookahead vào kết quả.",
            en: "Matches the preceding part, but excludes the lookahead part from the result.",
          },
        },
        {
          id: "negative-lookahead",
          title: { vi: "Negative lookahead (?!...)", en: "Negative lookahead (?!...)" },
          language: "javascript",
          code: '"foo.txt".match(/^(?!.*\\.exe$).*$/); // khớp vì không kết thúc bằng .exe',
          description: {
            vi: "Chỉ khớp khi phần sau KHÔNG thoả điều kiện trong lookahead.",
            en: "Only matches when the following part does NOT satisfy the lookahead condition.",
          },
        },
      ],
    },
    {
      id: "common-patterns",
      title: { vi: "Common Patterns", en: "Common Patterns" },
      snippets: [
        {
          id: "email-pattern",
          title: {
            vi: "Kiểm tra định dạng email (đơn giản)",
            en: "Checking a basic email format",
          },
          language: "javascript",
          code: 'const emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nemailRe.test("an@example.com"); // true',
          description: {
            vi: "Pattern đơn giản đủ dùng cho validate client-side cơ bản, không thay thế xác minh email thật.",
            en: "A simple pattern good enough for basic client-side validation — not a replacement for real email verification.",
          },
        },
        {
          id: "extract-numbers",
          title: { vi: "Trích tất cả số trong chuỗi", en: "Extracting all numbers from a string" },
          language: "javascript",
          code: '"Giá: 120000, giảm 15%".match(/\\d+/g);\n// ["120000", "15"]',
          description: {
            vi: "Cờ /g trả về toàn bộ các đoạn khớp thay vì chỉ đoạn đầu tiên.",
            en: "The /g flag returns every match instead of just the first one.",
          },
        },
      ],
    },
  ],
};

export default regex;
