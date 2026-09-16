import type { Cheatsheet } from "@/content/schema";

const javascript: Cheatsheet = {
  slug: "javascript",
  title: "JavaScript",
  category: "language",
  description: "Cú pháp ES6+ hay dùng: mảng, destructuring, Promise, module, optional chaining.",
  status: "published",
  sections: [
    {
      id: "arrays-iteration",
      title: "Arrays & Iteration",
      snippets: [
        {
          id: "array-map",
          title: "map()",
          language: "javascript",
          code: "const doubled = [1, 2, 3].map((n) => n * 2);\n// [2, 4, 6]",
          description: "Tạo mảng mới bằng cách biến đổi từng phần tử.",
        },
        {
          id: "array-filter",
          title: "filter()",
          language: "javascript",
          code: "const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);\n// [2, 4]",
          description: "Giữ lại phần tử thoả điều kiện.",
        },
        {
          id: "array-reduce",
          title: "reduce()",
          language: "javascript",
          code: "const total = [1, 2, 3].reduce((sum, n) => sum + n, 0);\n// 6",
          description: "Gộp mảng thành 1 giá trị duy nhất.",
        },
        {
          id: "array-find-some-every",
          title: "find / some / every",
          language: "javascript",
          code: "const users = [{ age: 17 }, { age: 20 }];\nusers.find((u) => u.age >= 18);   // { age: 20 }\nusers.some((u) => u.age >= 18);   // true\nusers.every((u) => u.age >= 18);  // false",
          description: "Tìm phần tử đầu tiên khớp, hoặc kiểm tra điều kiện trên toàn mảng.",
        },
      ],
    },
    {
      id: "destructuring-spread",
      title: "Destructuring & Spread",
      snippets: [
        {
          id: "array-destructuring",
          title: "Array destructuring",
          language: "javascript",
          code: "const [first, second, ...rest] = [1, 2, 3, 4];\n// first = 1, second = 2, rest = [3, 4]",
          description: "Tách phần tử mảng ra biến riêng, phần còn lại gom vào mảng con.",
        },
        {
          id: "object-destructuring",
          title: "Object destructuring + rename + default",
          language: "javascript",
          code: "const { name: userName = \"Ẩn danh\", age } = { age: 25 };\n// userName = \"Ẩn danh\", age = 25",
          description: "Đổi tên biến và đặt giá trị mặc định khi destructure object.",
        },
        {
          id: "spread-merge-object",
          title: "Spread gộp object",
          language: "javascript",
          code: "const base = { theme: \"dark\" };\nconst merged = { ...base, fontSize: 14 };\n// { theme: \"dark\", fontSize: 14 }",
          description: "Gộp/nhân bản object mà không mutate object gốc.",
        },
        {
          id: "rest-params",
          title: "Rest parameters",
          language: "javascript",
          code: "function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6",
          description: "Gom số lượng tham số tuỳ ý thành 1 mảng trong hàm.",
        },
      ],
    },
    {
      id: "promises-async",
      title: "Promises & Async",
      snippets: [
        {
          id: "promise-basic",
          title: "Tạo Promise",
          language: "javascript",
          code: "const wait = (ms) =>\n  new Promise((resolve) => setTimeout(resolve, ms));\n\nwait(100).then(() => console.log(\"done\"));",
          description: "Bọc một tác vụ bất đồng bộ (vd timer) thành Promise.",
        },
        {
          id: "async-await-try-catch",
          title: "async/await + try/catch",
          language: "javascript",
          code: "async function loadUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    return await res.json();\n  } catch (err) {\n    console.error(\"Load user failed\", err);\n  }\n}",
          description: "Xử lý bất đồng bộ tuần tự, bắt lỗi bằng try/catch.",
        },
        {
          id: "promise-all",
          title: "Promise.all",
          language: "javascript",
          code: "const [a, b] = await Promise.all([\n  fetch(\"/a\").then((r) => r.json()),\n  fetch(\"/b\").then((r) => r.json()),\n]);",
          description: "Chạy song song nhiều Promise, chờ tất cả hoàn tất.",
        },
        {
          id: "promise-race",
          title: "Promise.race (timeout pattern)",
          language: "javascript",
          code: "const timeout = (ms) =>\n  new Promise((_, reject) => setTimeout(() => reject(new Error(\"timeout\")), ms));\n\nawait Promise.race([fetch(\"/slow\"), timeout(3000)]);",
          description: "Lấy kết quả của Promise nào hoàn tất trước — thường dùng để giới hạn thời gian chờ.",
        },
      ],
    },
    {
      id: "modules",
      title: "Modules (import/export)",
      snippets: [
        {
          id: "named-export-import",
          title: "Named export/import",
          language: "javascript",
          code: "// math.js\nexport function add(a, b) { return a + b; }\n\n// main.js\nimport { add } from \"./math.js\";",
          description: "Export/import nhiều giá trị được đặt tên rõ ràng trong 1 module.",
        },
        {
          id: "default-export-import",
          title: "Default export/import",
          language: "javascript",
          code: "// button.js\nexport default function Button() { /* ... */ }\n\n// main.js\nimport Button from \"./button.js\";",
          description: "Mỗi module chỉ có 1 default export, import không cần dấu ngoặc nhọn.",
        },
        {
          id: "re-export",
          title: "Re-export từ module khác",
          language: "javascript",
          code: "// index.js\nexport { add } from \"./math.js\";\nexport { default as Button } from \"./button.js\";",
          description: "Gom nhiều export từ các file khác vào 1 file barrel duy nhất.",
        },
      ],
    },
    {
      id: "optional-chaining-nullish",
      title: "Optional Chaining & Nullish Coalescing",
      snippets: [
        {
          id: "optional-chaining-property",
          title: "Optional chaining thuộc tính",
          language: "javascript",
          code: "const city = user?.address?.city;\n// undefined nếu user hoặc address không tồn tại, không throw lỗi",
          description: "Truy cập thuộc tính lồng nhau an toàn, không cần kiểm tra null từng cấp.",
        },
        {
          id: "optional-chaining-method",
          title: "Optional chaining gọi hàm",
          language: "javascript",
          code: "user.onSave?.();\n// chỉ gọi onSave nếu nó tồn tại",
          description: "Gọi hàm chỉ khi nó thực sự được định nghĩa.",
        },
        {
          id: "nullish-coalescing",
          title: "?? so với ||",
          language: "javascript",
          code: "const count = 0;\ncount || 10;  // 10 (0 bị coi là falsy)\ncount ?? 10;  // 0  (?? chỉ fallback khi null/undefined)",
          description: "?? chỉ thay giá trị mặc định khi null/undefined, không bị ảnh hưởng bởi 0 hay chuỗi rỗng.",
        },
      ],
    },
  ],
};

export default javascript;
