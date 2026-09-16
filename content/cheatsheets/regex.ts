import type { Cheatsheet } from "@/content/schema";

const regex: Cheatsheet = {
  slug: "regex",
  title: "Regex",
  category: "tool",
  description: "Character class, quantifier, group/alternation, lookaround và pattern hay dùng.",
  status: "published",
  sections: [
    {
      id: "character-classes-anchors",
      title: "Character Classes & Anchors",
      snippets: [
        {
          id: "character-classes",
          title: "Character class cơ bản",
          language: "javascript",
          code: "/[a-z]/i   // 1 chữ cái, không phân biệt hoa/thường\n/[0-9]/    // 1 chữ số, tương đương /\\d/\n/[^0-9]/   // KHÔNG phải chữ số (^ trong [] là phủ định)",
          description: "[] định nghĩa 1 tập ký tự chấp nhận; ^ đầu tiên trong [] nghĩa là phủ định.",
        },
        {
          id: "shorthand-classes",
          title: "Shorthand class",
          language: "javascript",
          code: "\\d  // chữ số\n\\w  // chữ cái, số, gạch dưới\n\\s  // khoảng trắng (space, tab, newline)",
          description: "Viết tắt cho các nhóm ký tự thường dùng, viết hoa (\\D \\W \\S) là phủ định.",
        },
        {
          id: "anchors",
          title: "Anchor: ^ và $",
          language: "javascript",
          code: '/^https:\\/\\//.test("https://example.com"); // true\n/\\.com$/.test("example.com");          // true',
          description: "^ khớp đầu chuỗi, $ khớp cuối chuỗi.",
        },
      ],
    },
    {
      id: "quantifiers",
      title: "Quantifiers",
      snippets: [
        {
          id: "quantifiers-basic",
          title: "* + ? {n,m}",
          language: "javascript",
          code: "/ab*c/     // 'ac', 'abc', 'abbbc' (0 hoặc nhiều 'b')\n/ab+c/     // cần ít nhất 1 'b'\n/ab?c/     // 'b' có hoặc không\n/a{2,4}/   // 2 đến 4 lần 'a'",
          description: "*: 0+, +: 1+, ?: 0-1, {n,m}: số lần lặp cụ thể.",
        },
        {
          id: "greedy-vs-lazy",
          title: "Greedy vs lazy",
          language: "javascript",
          code: '"<a><b>".match(/<.+>/);   // \'<a><b>\' (greedy, khớp dài nhất)\n"<a><b>".match(/<.+?>/);  // \'<a>\' (lazy, khớp ngắn nhất)',
          description: "Thêm ? sau quantifier để chuyển sang chế độ lazy (khớp ít nhất có thể).",
        },
      ],
    },
    {
      id: "groups-alternation",
      title: "Groups & Alternation",
      snippets: [
        {
          id: "capturing-group",
          title: "Capturing group",
          language: "javascript",
          code: 'const match = "2026-09-16".match(/(\\d{4})-(\\d{2})-(\\d{2})/);\n// match[1] = "2026", match[2] = "09", match[3] = "16"',
          description: "() tạo nhóm, có thể truy cập lại từng phần khớp qua chỉ số.",
        },
        {
          id: "named-group",
          title: "Named group",
          language: "javascript",
          code: 'const m = "2026-09-16".match(/(?<year>\\d{4})-(?<month>\\d{2})/);\nm.groups.year;  // "2026"',
          description: "Đặt tên cho group để truy cập rõ ràng hơn thay vì nhớ chỉ số.",
        },
        {
          id: "alternation",
          title: "Alternation (|)",
          language: "javascript",
          code: '/cat|dog/.test("I have a dog"); // true',
          description: "Khớp 1 trong nhiều lựa chọn được ngăn cách bởi dấu |.",
        },
      ],
    },
    {
      id: "lookaround",
      title: "Lookahead/Lookbehind",
      snippets: [
        {
          id: "positive-lookahead",
          title: "Positive lookahead (?=...)",
          language: "javascript",
          code: '"100px".match(/\\d+(?=px)/); // "100" — khớp số đứng trước "px"',
          description: "Khớp phần trước, nhưng không bao gồm phần trong lookahead vào kết quả.",
        },
        {
          id: "negative-lookahead",
          title: "Negative lookahead (?!...)",
          language: "javascript",
          code: '"foo.txt".match(/^(?!.*\\.exe$).*$/); // khớp vì không kết thúc bằng .exe',
          description: "Chỉ khớp khi phần sau KHÔNG thoả điều kiện trong lookahead.",
        },
      ],
    },
    {
      id: "common-patterns",
      title: "Common Patterns",
      snippets: [
        {
          id: "email-pattern",
          title: "Kiểm tra định dạng email (đơn giản)",
          language: "javascript",
          code: "const emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nemailRe.test(\"an@example.com\"); // true",
          description: "Pattern đơn giản đủ dùng cho validate client-side cơ bản, không thay thế xác minh email thật.",
        },
        {
          id: "extract-numbers",
          title: "Trích tất cả số trong chuỗi",
          language: "javascript",
          code: '"Giá: 120000, giảm 15%".match(/\\d+/g);\n// ["120000", "15"]',
          description: "Cờ /g trả về toàn bộ các đoạn khớp thay vì chỉ đoạn đầu tiên.",
        },
      ],
    },
  ],
};

export default regex;
