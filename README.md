# Dev Cheatsheet Hub

Trang tra cứu cheat sheet lập trình nhanh — phong cách "editor tối màu" (dark editor), hỗ trợ song ngữ Việt/Anh, tìm kiếm nhanh bằng command palette.

🔗 Demo local: `npm run dev` → `http://localhost:3000`

## Tính năng

- **20 cheat sheet gốc**, tự viết (không copy từ nguồn khác): JavaScript, TypeScript, Python, Go, Rust, Java, PHP, HTML, CSS, React, Vue, Node.js, SQL, MongoDB, Docker, Kubernetes, Bash, Git, Markdown, Regex
- **Song ngữ Việt/Anh** — toggle ở header, không đổi URL, lưu lựa chọn vào `localStorage`
- **Dark/Light theme** — mặc định tối, chống flash (FOUC) bằng inline script
- **Command palette (⌘K / Ctrl+K)** — tìm nhanh theo tên snippet, cheat sheet, mô tả
- **Copy code 1 chạm** trên mỗi snippet, có syntax highlight (shiki)
- **Sidebar điều hướng theo danh mục**: Ngôn ngữ, Frontend, Backend, Database, DevOps, Công cụ
- Site tĩnh hoàn toàn (SSG) — không backend, không database

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (dựa trên [Base UI](https://base-ui.com))
- [Zod](https://zod.dev) — validate schema nội dung
- [Shiki](https://shiki.style) — syntax highlighting
- [cmdk](https://cmdk.paco.me) — command palette
- [Vitest](https://vitest.dev) + Testing Library

## Bắt đầu

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

### Script khác

```bash
npm run build   # build production
npm run start   # chạy bản build
npm run lint    # eslint
npm test        # chạy test (vitest)
```

## Cấu trúc dự án

```
app/                    # Next.js App Router (route + layout)
components/             # UI components (layout, home, cheatsheet, ui/ shadcn)
content/
  schema.ts             # Zod schema cho cheat sheet (song ngữ {vi, en})
  categories.ts          # Danh mục cố định (Ngôn ngữ, Frontend, ...)
  cheatsheets/*.ts       # Nội dung từng cheat sheet
  registry.ts            # Loader: validate + truy vấn nội dung
lib/
  i18n.ts               # Dictionary UI song ngữ
  search.ts             # Logic filter cho command palette
  highlight.ts          # Wrapper shiki
```

## Thêm cheat sheet mới

1. Tạo file mới trong `content/cheatsheets/`, export 1 object đúng `Cheatsheet` schema (`content/schema.ts`), `title`/`description` của section & snippet là `{ vi, en }`.
2. Import + thêm vào mảng `RAW_CHEATSHEETS` trong `content/registry.ts`.
3. Nếu category chưa tồn tại, thêm vào `content/categories.ts`.

Không cần sửa code UI — trang chủ, sidebar, command palette tự động nhận nội dung mới.

## License

Nội dung cheat sheet là tự viết, dùng cho mục đích cá nhân/học tập.
