import type { Cheatsheet } from "@/content/schema";

const javascript: Cheatsheet = {
  slug: "javascript",
  title: "JavaScript",
  category: "language",
  description: {
    vi: "Cú pháp ES6+ hay dùng: mảng, destructuring, Promise, module, optional chaining.",
    en: "Commonly used ES6+ syntax: arrays, destructuring, Promises, modules, optional chaining.",
  },
  status: "published",
  sections: [
    {
      id: "arrays-iteration",
      title: { vi: "Arrays & Iteration", en: "Arrays & Iteration" },
      snippets: [
        {
          id: "array-map",
          title: { vi: "map()", en: "map()" },
          language: "javascript",
          code: "const doubled = [1, 2, 3].map((n) => n * 2);\n// [2, 4, 6]",
          description: {
            vi: "Tạo mảng mới bằng cách biến đổi từng phần tử.",
            en: "Create a new array by transforming each element.",
          },
        },
        {
          id: "array-filter",
          title: { vi: "filter()", en: "filter()" },
          language: "javascript",
          code: "const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);\n// [2, 4]",
          description: {
            vi: "Giữ lại phần tử thoả điều kiện.",
            en: "Keep only elements that satisfy a condition.",
          },
        },
        {
          id: "array-reduce",
          title: { vi: "reduce()", en: "reduce()" },
          language: "javascript",
          code: "const total = [1, 2, 3].reduce((sum, n) => sum + n, 0);\n// 6",
          description: {
            vi: "Gộp mảng thành 1 giá trị duy nhất.",
            en: "Reduce an array to a single value.",
          },
        },
        {
          id: "array-find-some-every",
          title: { vi: "find / some / every", en: "find / some / every" },
          language: "javascript",
          code: "const users = [{ age: 17 }, { age: 20 }];\nusers.find((u) => u.age >= 18);   // { age: 20 }\nusers.some((u) => u.age >= 18);   // true\nusers.every((u) => u.age >= 18);  // false",
          description: {
            vi: "Tìm phần tử đầu tiên khớp, hoặc kiểm tra điều kiện trên toàn mảng.",
            en: "Find the first matching element, or check a condition across the whole array.",
          },
        },
      ],
    },
    {
      id: "destructuring-spread",
      title: { vi: "Destructuring & Spread", en: "Destructuring & Spread" },
      snippets: [
        {
          id: "array-destructuring",
          title: { vi: "Array destructuring", en: "Array destructuring" },
          language: "javascript",
          code: "const [first, second, ...rest] = [1, 2, 3, 4];\n// first = 1, second = 2, rest = [3, 4]",
          description: {
            vi: "Tách phần tử mảng ra biến riêng, phần còn lại gom vào mảng con.",
            en: "Unpack array elements into separate variables, gathering the rest into a sub-array.",
          },
        },
        {
          id: "object-destructuring",
          title: {
            vi: "Object destructuring + rename + default",
            en: "Object destructuring + rename + default",
          },
          language: "javascript",
          code: 'const { name: userName = "Ẩn danh", age } = { age: 25 };\n// userName = "Ẩn danh", age = 25',
          description: {
            vi: "Đổi tên biến và đặt giá trị mặc định khi destructure object.",
            en: "Rename a variable and set a default value while destructuring an object.",
          },
        },
        {
          id: "spread-merge-object",
          title: { vi: "Spread gộp object", en: "Spread to merge objects" },
          language: "javascript",
          code: 'const base = { theme: "dark" };\nconst merged = { ...base, fontSize: 14 };\n// { theme: "dark", fontSize: 14 }',
          description: {
            vi: "Gộp/nhân bản object mà không mutate object gốc.",
            en: "Merge/clone an object without mutating the original.",
          },
        },
        {
          id: "rest-params",
          title: { vi: "Rest parameters", en: "Rest parameters" },
          language: "javascript",
          code: "function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6",
          description: {
            vi: "Gom số lượng tham số tuỳ ý thành 1 mảng trong hàm.",
            en: "Collect an arbitrary number of arguments into a single array parameter.",
          },
        },
      ],
    },
    {
      id: "promises-async",
      title: { vi: "Promises & Async", en: "Promises & Async" },
      snippets: [
        {
          id: "promise-basic",
          title: { vi: "Tạo Promise", en: "Creating a Promise" },
          language: "javascript",
          code: 'const wait = (ms) =>\n  new Promise((resolve) => setTimeout(resolve, ms));\n\nwait(100).then(() => console.log("done"));',
          description: {
            vi: "Bọc một tác vụ bất đồng bộ (vd timer) thành Promise.",
            en: "Wrap an asynchronous task (e.g. a timer) in a Promise.",
          },
        },
        {
          id: "async-await-try-catch",
          title: { vi: "async/await + try/catch", en: "async/await + try/catch" },
          language: "javascript",
          code: 'async function loadUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    return await res.json();\n  } catch (err) {\n    console.error("Load user failed", err);\n  }\n}',
          description: {
            vi: "Xử lý bất đồng bộ tuần tự, bắt lỗi bằng try/catch.",
            en: "Handle async code sequentially, catching errors with try/catch.",
          },
        },
        {
          id: "promise-all",
          title: { vi: "Promise.all", en: "Promise.all" },
          language: "javascript",
          code: 'const [a, b] = await Promise.all([\n  fetch("/a").then((r) => r.json()),\n  fetch("/b").then((r) => r.json()),\n]);',
          description: {
            vi: "Chạy song song nhiều Promise, chờ tất cả hoàn tất.",
            en: "Run several Promises in parallel and wait for all of them to finish.",
          },
        },
        {
          id: "promise-race",
          title: { vi: "Promise.race (timeout pattern)", en: "Promise.race (timeout pattern)" },
          language: "javascript",
          code: 'const timeout = (ms) =>\n  new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms));\n\nawait Promise.race([fetch("/slow"), timeout(3000)]);',
          description: {
            vi: "Lấy kết quả của Promise nào hoàn tất trước — thường dùng để giới hạn thời gian chờ.",
            en: "Resolve with whichever Promise settles first — commonly used to enforce a timeout.",
          },
        },
      ],
    },
    {
      id: "modules",
      title: { vi: "Modules (import/export)", en: "Modules (import/export)" },
      snippets: [
        {
          id: "named-export-import",
          title: { vi: "Named export/import", en: "Named export/import" },
          language: "javascript",
          code: '// math.js\nexport function add(a, b) { return a + b; }\n\n// main.js\nimport { add } from "./math.js";',
          description: {
            vi: "Export/import nhiều giá trị được đặt tên rõ ràng trong 1 module.",
            en: "Export/import multiple named values from a single module.",
          },
        },
        {
          id: "default-export-import",
          title: { vi: "Default export/import", en: "Default export/import" },
          language: "javascript",
          code: '// button.js\nexport default function Button() { /* ... */ }\n\n// main.js\nimport Button from "./button.js";',
          description: {
            vi: "Mỗi module chỉ có 1 default export, import không cần dấu ngoặc nhọn.",
            en: "Each module has exactly one default export; importing it doesn't need curly braces.",
          },
        },
        {
          id: "re-export",
          title: { vi: "Re-export từ module khác", en: "Re-exporting from another module" },
          language: "javascript",
          code: '// index.js\nexport { add } from "./math.js";\nexport { default as Button } from "./button.js";',
          description: {
            vi: "Gom nhiều export từ các file khác vào 1 file barrel duy nhất.",
            en: "Gather exports from several files into a single barrel file.",
          },
        },
      ],
    },
    {
      id: "optional-chaining-nullish",
      title: {
        vi: "Optional Chaining & Nullish Coalescing",
        en: "Optional Chaining & Nullish Coalescing",
      },
      snippets: [
        {
          id: "optional-chaining-property",
          title: { vi: "Optional chaining thuộc tính", en: "Optional chaining on properties" },
          language: "javascript",
          code: "const city = user?.address?.city;\n// undefined nếu user hoặc address không tồn tại, không throw lỗi",
          description: {
            vi: "Truy cập thuộc tính lồng nhau an toàn, không cần kiểm tra null từng cấp.",
            en: "Safely access nested properties without checking null at every level.",
          },
        },
        {
          id: "optional-chaining-method",
          title: { vi: "Optional chaining gọi hàm", en: "Optional chaining on method calls" },
          language: "javascript",
          code: "user.onSave?.();\n// chỉ gọi onSave nếu nó tồn tại",
          description: {
            vi: "Gọi hàm chỉ khi nó thực sự được định nghĩa.",
            en: "Call a function only if it is actually defined.",
          },
        },
        {
          id: "nullish-coalescing",
          title: { vi: "?? so với ||", en: "?? vs ||" },
          language: "javascript",
          code: "const count = 0;\ncount || 10;  // 10 (0 bị coi là falsy)\ncount ?? 10;  // 0  (?? chỉ fallback khi null/undefined)",
          description: {
            vi: "?? chỉ thay giá trị mặc định khi null/undefined, không bị ảnh hưởng bởi 0 hay chuỗi rỗng.",
            en: "?? only falls back on null/undefined, unlike || which also triggers on 0 or an empty string.",
          },
        },
      ],
    },
  ],
};

export default javascript;
