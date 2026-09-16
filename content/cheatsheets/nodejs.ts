import type { Cheatsheet } from "@/content/schema";

const nodejs: Cheatsheet = {
  slug: "nodejs",
  title: "Node.js",
  category: "backend",
  description: "Module ESM/CommonJS, file system, HTTP server và biến môi trường cơ bản.",
  status: "published",
  sections: [
    {
      id: "modules",
      title: "Modules (CommonJS/ESM)",
      snippets: [
        {
          id: "commonjs-export-require",
          title: "CommonJS: export/require",
          language: "javascript",
          code: '// math.js\nmodule.exports = { add: (a, b) => a + b };\n\n// main.js\nconst { add } = require("./math");',
          description: "Kiểu module truyền thống của Node, dùng require() để nạp đồng bộ.",
        },
        {
          id: "esm-import-export",
          title: "ESM: import/export",
          language: "javascript",
          code: '// package.json cần "type": "module"\nexport const add = (a, b) => a + b;\nimport { add } from "./math.js";',
          description: "Module chuẩn ES hiện đại, cần khai báo \"type\": \"module\" trong package.json.",
        },
        {
          id: "dirname-esm",
          title: "Lấy __dirname trong ESM",
          language: "javascript",
          code: 'import { fileURLToPath } from "node:url";\nimport { dirname } from "node:path";\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = dirname(__filename);',
          description: "__dirname không có sẵn trong ESM, cần tự suy ra từ import.meta.url.",
        },
      ],
    },
    {
      id: "file-system",
      title: "File System",
      snippets: [
        {
          id: "fs-read-write-async",
          title: "Đọc/ghi file bất đồng bộ",
          language: "javascript",
          code: 'import { readFile, writeFile } from "node:fs/promises";\n\nconst content = await readFile("data.txt", "utf-8");\nawait writeFile("out.txt", content.toUpperCase());',
          description: "API Promise-based hiện đại, dùng được trực tiếp với await.",
        },
        {
          id: "fs-watch",
          title: "Theo dõi thay đổi file",
          language: "javascript",
          code: 'import { watch } from "node:fs";\n\nwatch("./src", { recursive: true }, (event, filename) => {\n  console.log(event, filename);\n});',
          description: "Lắng nghe sự kiện thay đổi file/thư mục — nền tảng cho các công cụ hot-reload.",
        },
        {
          id: "path-join",
          title: "Ghép đường dẫn an toàn",
          language: "javascript",
          code: 'import { join } from "node:path";\n\nconst filePath = join(process.cwd(), "data", "input.json");',
          description: "path.join xử lý dấu / hoặc \\ đúng theo hệ điều hành, tránh lỗi đường dẫn thủ công.",
        },
      ],
    },
    {
      id: "http-server",
      title: "HTTP Server",
      snippets: [
        {
          id: "http-basic-server",
          title: "HTTP server cơ bản",
          language: "javascript",
          code: 'import { createServer } from "node:http";\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("Hello");\n});\nserver.listen(3000);',
          description: "Tạo server HTTP thuần, không cần framework, phù hợp học nguyên lý cơ bản.",
        },
        {
          id: "http-json-response",
          title: "Trả JSON response",
          language: "javascript",
          code: 'res.writeHead(200, { "Content-Type": "application/json" });\nres.end(JSON.stringify({ ok: true, data: [1, 2, 3] }));',
          description: "Set đúng Content-Type và serialize object thành chuỗi JSON trước khi trả về.",
        },
      ],
    },
    {
      id: "environment-process",
      title: "Environment & Process",
      snippets: [
        {
          id: "process-env",
          title: "Đọc biến môi trường",
          language: "javascript",
          code: 'const port = process.env.PORT ?? 3000;\nconst isProd = process.env.NODE_ENV === "production";',
          description: "Đọc cấu hình từ biến môi trường, có giá trị fallback khi chưa set.",
        },
        {
          id: "process-exit-signals",
          title: "Xử lý tín hiệu thoát (graceful shutdown)",
          language: "javascript",
          code: 'process.on("SIGTERM", async () => {\n  console.log("Đang đóng server...");\n  await server.close();\n  process.exit(0);\n});',
          description: "Dọn dẹp tài nguyên (đóng DB, server) trước khi tiến trình thực sự thoát.",
        },
      ],
    },
    {
      id: "npm-package-json",
      title: "npm scripts & package.json",
      snippets: [
        {
          id: "package-json-scripts",
          title: "Khai báo scripts",
          language: "json",
          code: '{\n  "scripts": {\n    "dev": "node --watch src/index.js",\n    "build": "tsc",\n    "test": "vitest run"\n  }\n}',
          description: "Định nghĩa lệnh tắt chạy qua npm run <tên-script>.",
        },
        {
          id: "npm-run-shorthand",
          title: "Chạy script",
          language: "bash",
          code: "npm run dev\nnpm test        # shorthand cho npm run test\nnpm start       # shorthand cho npm run start",
          description: "test và start có shorthand riêng, không cần gõ đủ \"run\".",
        },
      ],
    },
  ],
};

export default nodejs;
