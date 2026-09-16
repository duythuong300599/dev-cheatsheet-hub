import type { Cheatsheet } from "@/content/schema";

const markdown: Cheatsheet = {
  slug: "markdown",
  title: "Markdown",
  category: "tool",
  description: {
    vi: "Định dạng chữ, heading/list, link/ảnh, code/blockquote và bảng cơ bản.",
    en: "Text formatting, headings/lists, links/images, code/blockquotes and basic tables.",
  },
  status: "published",
  sections: [
    {
      id: "text-formatting",
      title: { vi: "Text Formatting", en: "Text Formatting" },
      snippets: [
        {
          id: "bold-italic",
          title: { vi: "In đậm / in nghiêng", en: "Bold / italic" },
          language: "markdown",
          code: "**In đậm**\n*In nghiêng*\n***In đậm và nghiêng***\n~~Gạch ngang~~",
          description: {
            vi: "** hoặc __ cho đậm, * hoặc _ cho nghiêng, ~~ cho gạch ngang.",
            en: "** or __ for bold, * or _ for italic, ~~ for strikethrough.",
          },
        },
        {
          id: "inline-code",
          title: { vi: "Inline code", en: "Inline code" },
          language: "markdown",
          code: "Dùng lệnh `npm install` để cài dependency.",
          description: {
            vi: "Bọc bằng dấu backtick (`) để hiển thị dạng code trong 1 dòng văn bản.",
            en: "Wrap with backticks (`) to render as code within a line of text.",
          },
        },
      ],
    },
    {
      id: "headings-lists",
      title: { vi: "Headings & Lists", en: "Headings & Lists" },
      snippets: [
        {
          id: "headings",
          title: { vi: "Heading các cấp", en: "Heading levels" },
          language: "markdown",
          code: "# Heading 1\n## Heading 2\n### Heading 3",
          description: {
            vi: "Số dấu # tương ứng với cấp heading (1-6), càng nhiều # càng nhỏ.",
            en: "The number of # symbols corresponds to the heading level (1-6) — more # means smaller.",
          },
        },
        {
          id: "unordered-ordered-list",
          title: { vi: "List không thứ tự / có thứ tự", en: "Unordered / ordered lists" },
          language: "markdown",
          code: "- Mục 1\n- Mục 2\n  - Mục con\n\n1. Bước 1\n2. Bước 2",
          description: {
            vi: "Dùng -, * hoặc + cho list không thứ tự; số + dấu chấm cho list có thứ tự; thụt lề để lồng cấp.",
            en: "Use -, * or + for unordered lists; a number + period for ordered lists; indent to nest.",
          },
        },
        {
          id: "task-list",
          title: { vi: "Task list (checkbox)", en: "Task list (checkbox)" },
          language: "markdown",
          code: "- [x] Viết plan\n- [ ] Implement\n- [ ] Viết test",
          description: {
            vi: "[x] đánh dấu đã hoàn thành, [ ] chưa hoàn thành — GitHub render thành checkbox thật.",
            en: "[x] marks done, [ ] marks not done — GitHub renders these as real checkboxes.",
          },
        },
      ],
    },
    {
      id: "links-images",
      title: { vi: "Links & Images", en: "Links & Images" },
      snippets: [
        {
          id: "link-syntax",
          title: { vi: "Link", en: "Link" },
          language: "markdown",
          code: '[Tên hiển thị](https://example.com)\n[Link có tooltip](https://example.com "Tooltip khi hover")',
          description: {
            vi: "Cú pháp [text](url), có thể thêm tooltip trong dấu ngoặc kép.",
            en: "The [text](url) syntax, with an optional tooltip in quotes.",
          },
        },
        {
          id: "image-syntax",
          title: { vi: "Ảnh", en: "Image" },
          language: "markdown",
          code: "![Mô tả ảnh](https://example.com/logo.png)",
          description: {
            vi: "Giống link nhưng thêm dấu ! ở đầu; text trong [] là alt text.",
            en: "Same as a link but prefixed with !; the text in [] is the alt text.",
          },
        },
      ],
    },
    {
      id: "code-blockquote",
      title: { vi: "Code & Blockquote", en: "Code & Blockquote" },
      snippets: [
        {
          id: "code-block",
          title: {
            vi: "Code block có highlight ngôn ngữ",
            en: "Code block with language highlighting",
          },
          language: "markdown",
          code: '```javascript\nconst greet = (name) => `Xin chào ${name}`;\n```',
          description: {
            vi: "Bọc bằng 3 dấu backtick, ghi tên ngôn ngữ ngay sau để bật syntax highlight.",
            en: "Wrap with three backticks, followed by the language name to enable syntax highlighting.",
          },
        },
        {
          id: "blockquote",
          title: { vi: "Blockquote", en: "Blockquote" },
          language: "markdown",
          code: "> Đây là 1 trích dẫn.\n> Có thể xuống dòng vẫn trong cùng khối quote.",
          description: {
            vi: "Dấu > ở đầu dòng tạo khối trích dẫn thụt lề.",
            en: "A > at the start of a line creates an indented quote block.",
          },
        },
      ],
    },
    {
      id: "tables",
      title: { vi: "Tables", en: "Tables" },
      snippets: [
        {
          id: "table-basic",
          title: { vi: "Bảng cơ bản", en: "Basic table" },
          language: "markdown",
          code: "| Tên   | Tuổi |\n|-------|------|\n| An    | 25   |\n| Bình  | 30   |",
          description: {
            vi: "Dòng thứ 2 (--- ) là bắt buộc để phân tách header với dữ liệu.",
            en: "The second row (--- ) is required to separate the header from the data.",
          },
        },
        {
          id: "table-alignment",
          title: { vi: "Căn lề cột trong bảng", en: "Aligning table columns" },
          language: "markdown",
          code: "| Trái | Giữa | Phải |\n|:-----|:----:|-----:|\n| a    | b    | c    |",
          description: {
            vi: "Dấu : ở 2 đầu dòng phân tách quyết định căn trái/giữa/phải cho từng cột.",
            en: "Colons at the ends of the separator row decide left/center/right alignment per column.",
          },
        },
      ],
    },
  ],
};

export default markdown;
