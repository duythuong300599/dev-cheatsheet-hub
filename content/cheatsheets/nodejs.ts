import type { Cheatsheet } from "@/content/schema";

const nodejs: Cheatsheet = {
  slug: "nodejs",
  title: "Node.js",
  category: "backend",
  description: {
    vi: "Module ESM/CommonJS, file system, HTTP server và biến môi trường cơ bản.",
    en: "ESM/CommonJS modules, file system, HTTP server and basic environment variables.",
  },
  status: "published",
  sections: [
    {
      id: "modules",
      title: { vi: "Modules (CommonJS/ESM)", en: "Modules (CommonJS/ESM)" },
      snippets: [
        {
          id: "commonjs-export-require",
          title: { vi: "CommonJS: export/require", en: "CommonJS: export/require" },
          language: "javascript",
          code: '// math.js\nmodule.exports = { add: (a, b) => a + b };\n\n// main.js\nconst { add } = require("./math");',
          description: {
            vi: "Kiểu module truyền thống của Node, dùng require() để nạp đồng bộ.",
            en: "Node's traditional module style, using require() for synchronous loading.",
          },
        },
        {
          id: "esm-import-export",
          title: { vi: "ESM: import/export", en: "ESM: import/export" },
          language: "javascript",
          code: '// package.json cần "type": "module"\nexport const add = (a, b) => a + b;\nimport { add } from "./math.js";',
          description: {
            vi: 'Module chuẩn ES hiện đại, cần khai báo "type": "module" trong package.json.',
            en: 'Modern standard ES modules, requiring "type": "module" in package.json.',
          },
        },
        {
          id: "dirname-esm",
          title: { vi: "Lấy __dirname trong ESM", en: "Getting __dirname in ESM" },
          language: "javascript",
          code: 'import { fileURLToPath } from "node:url";\nimport { dirname } from "node:path";\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = dirname(__filename);',
          description: {
            vi: "__dirname không có sẵn trong ESM, cần tự suy ra từ import.meta.url.",
            en: "__dirname isn't available in ESM; derive it manually from import.meta.url.",
          },
        },
      ],
    },
    {
      id: "file-system",
      title: { vi: "File System", en: "File System" },
      snippets: [
        {
          id: "fs-read-write-async",
          title: { vi: "Đọc/ghi file bất đồng bộ", en: "Reading/writing files asynchronously" },
          language: "javascript",
          code: 'import { readFile, writeFile } from "node:fs/promises";\n\nconst content = await readFile("data.txt", "utf-8");\nawait writeFile("out.txt", content.toUpperCase());',
          description: {
            vi: "API Promise-based hiện đại, dùng được trực tiếp với await.",
            en: "The modern Promise-based API, usable directly with await.",
          },
        },
        {
          id: "fs-watch",
          title: { vi: "Theo dõi thay đổi file", en: "Watching for file changes" },
          language: "javascript",
          code: 'import { watch } from "node:fs";\n\nwatch("./src", { recursive: true }, (event, filename) => {\n  console.log(event, filename);\n});',
          description: {
            vi: "Lắng nghe sự kiện thay đổi file/thư mục — nền tảng cho các công cụ hot-reload.",
            en: "Listen for file/directory change events — the foundation of hot-reload tooling.",
          },
        },
        {
          id: "path-join",
          title: { vi: "Ghép đường dẫn an toàn", en: "Safely joining paths" },
          language: "javascript",
          code: 'import { join } from "node:path";\n\nconst filePath = join(process.cwd(), "data", "input.json");',
          description: {
            vi: "path.join xử lý dấu / hoặc \\ đúng theo hệ điều hành, tránh lỗi đường dẫn thủ công.",
            en: "path.join handles / or \\ correctly per OS, avoiding manual path-building bugs.",
          },
        },
      ],
    },
    {
      id: "http-server",
      title: { vi: "HTTP Server", en: "HTTP Server" },
      snippets: [
        {
          id: "http-basic-server",
          title: { vi: "HTTP server cơ bản", en: "Basic HTTP server" },
          language: "javascript",
          code: 'import { createServer } from "node:http";\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("Hello");\n});\nserver.listen(3000);',
          description: {
            vi: "Tạo server HTTP thuần, không cần framework, phù hợp học nguyên lý cơ bản.",
            en: "Create a plain HTTP server with no framework — good for learning the fundamentals.",
          },
        },
        {
          id: "http-json-response",
          title: { vi: "Trả JSON response", en: "Returning a JSON response" },
          language: "javascript",
          code: 'res.writeHead(200, { "Content-Type": "application/json" });\nres.end(JSON.stringify({ ok: true, data: [1, 2, 3] }));',
          description: {
            vi: "Set đúng Content-Type và serialize object thành chuỗi JSON trước khi trả về.",
            en: "Set the correct Content-Type and serialize the object to JSON before responding.",
          },
        },
      ],
    },
    {
      id: "environment-process",
      title: { vi: "Environment & Process", en: "Environment & Process" },
      snippets: [
        {
          id: "process-env",
          title: { vi: "Đọc biến môi trường", en: "Reading environment variables" },
          language: "javascript",
          code: 'const port = process.env.PORT ?? 3000;\nconst isProd = process.env.NODE_ENV === "production";',
          description: {
            vi: "Đọc cấu hình từ biến môi trường, có giá trị fallback khi chưa set.",
            en: "Read config from environment variables, with a fallback when unset.",
          },
        },
        {
          id: "process-exit-signals",
          title: {
            vi: "Xử lý tín hiệu thoát (graceful shutdown)",
            en: "Handling exit signals (graceful shutdown)",
          },
          language: "javascript",
          code: 'process.on("SIGTERM", async () => {\n  console.log("Đang đóng server...");\n  await server.close();\n  process.exit(0);\n});',
          description: {
            vi: "Dọn dẹp tài nguyên (đóng DB, server) trước khi tiến trình thực sự thoát.",
            en: "Clean up resources (close DB, server) before the process actually exits.",
          },
        },
      ],
    },
    {
      id: "npm-package-json",
      title: { vi: "npm scripts & package.json", en: "npm scripts & package.json" },
      snippets: [
        {
          id: "package-json-scripts",
          title: { vi: "Khai báo scripts", en: "Declaring scripts" },
          language: "json",
          code: '{\n  "scripts": {\n    "dev": "node --watch src/index.js",\n    "build": "tsc",\n    "test": "vitest run"\n  }\n}',
          description: {
            vi: "Định nghĩa lệnh tắt chạy qua npm run <tên-script>.",
            en: "Define shortcut commands run via npm run <script-name>.",
          },
        },
        {
          id: "npm-run-shorthand",
          title: { vi: "Chạy script", en: "Running a script" },
          language: "bash",
          code: "npm run dev\nnpm test        # shorthand cho npm run test\nnpm start       # shorthand cho npm run start",
          description: {
            vi: 'test và start có shorthand riêng, không cần gõ đủ "run".',
            en: 'test and start have their own shorthand, no need to type "run" in full.',
          },
        },
      ],
    },
  ],
};

export default nodejs;
