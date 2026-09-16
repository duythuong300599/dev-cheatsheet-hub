import type { Cheatsheet } from "@/content/schema";

const markdown: Cheatsheet = {
  slug: "markdown",
  title: "Markdown",
  category: "tool",
  description: "Định dạng chữ, heading/list, link/ảnh, code/blockquote và bảng cơ bản.",
  status: "published",
  sections: [
    {
      id: "text-formatting",
      title: "Text Formatting",
      snippets: [
        {
          id: "bold-italic",
          title: "In đậm / in nghiêng",
          language: "markdown",
          code: "**In đậm**\n*In nghiêng*\n***In đậm và nghiêng***\n~~Gạch ngang~~",
          description: "** hoặc __ cho đậm, * hoặc _ cho nghiêng, ~~ cho gạch ngang.",
        },
        {
          id: "inline-code",
          title: "Inline code",
          language: "markdown",
          code: "Dùng lệnh `npm install` để cài dependency.",
          description: "Bọc bằng dấu backtick (`) để hiển thị dạng code trong 1 dòng văn bản.",
        },
      ],
    },
    {
      id: "headings-lists",
      title: "Headings & Lists",
      snippets: [
        {
          id: "headings",
          title: "Heading các cấp",
          language: "markdown",
          code: "# Heading 1\n## Heading 2\n### Heading 3",
          description: "Số dấu # tương ứng với cấp heading (1-6), càng nhiều # càng nhỏ.",
        },
        {
          id: "unordered-ordered-list",
          title: "List không thứ tự / có thứ tự",
          language: "markdown",
          code: "- Mục 1\n- Mục 2\n  - Mục con\n\n1. Bước 1\n2. Bước 2",
          description: "Dùng -, * hoặc + cho list không thứ tự; số + dấu chấm cho list có thứ tự; thụt lề để lồng cấp.",
        },
        {
          id: "task-list",
          title: "Task list (checkbox)",
          language: "markdown",
          code: "- [x] Viết plan\n- [ ] Implement\n- [ ] Viết test",
          description: "[x] đánh dấu đã hoàn thành, [ ] chưa hoàn thành — GitHub render thành checkbox thật.",
        },
      ],
    },
    {
      id: "links-images",
      title: "Links & Images",
      snippets: [
        {
          id: "link-syntax",
          title: "Link",
          language: "markdown",
          code: "[Tên hiển thị](https://example.com)\n[Link có tooltip](https://example.com \"Tooltip khi hover\")",
          description: "Cú pháp [text](url), có thể thêm tooltip trong dấu ngoặc kép.",
        },
        {
          id: "image-syntax",
          title: "Ảnh",
          language: "markdown",
          code: "![Mô tả ảnh](https://example.com/logo.png)",
          description: "Giống link nhưng thêm dấu ! ở đầu; text trong [] là alt text.",
        },
      ],
    },
    {
      id: "code-blockquote",
      title: "Code & Blockquote",
      snippets: [
        {
          id: "code-block",
          title: "Code block có highlight ngôn ngữ",
          language: "markdown",
          code: '```javascript\nconst greet = (name) => `Xin chào ${name}`;\n```',
          description: "Bọc bằng 3 dấu backtick, ghi tên ngôn ngữ ngay sau để bật syntax highlight.",
        },
        {
          id: "blockquote",
          title: "Blockquote",
          language: "markdown",
          code: "> Đây là 1 trích dẫn.\n> Có thể xuống dòng vẫn trong cùng khối quote.",
          description: "Dấu > ở đầu dòng tạo khối trích dẫn thụt lề.",
        },
      ],
    },
    {
      id: "tables",
      title: "Tables",
      snippets: [
        {
          id: "table-basic",
          title: "Bảng cơ bản",
          language: "markdown",
          code: "| Tên   | Tuổi |\n|-------|------|\n| An    | 25   |\n| Bình  | 30   |",
          description: "Dòng thứ 2 (--- ) là bắt buộc để phân tách header với dữ liệu.",
        },
        {
          id: "table-alignment",
          title: "Căn lề cột trong bảng",
          language: "markdown",
          code: "| Trái | Giữa | Phải |\n|:-----|:----:|-----:|\n| a    | b    | c    |",
          description: "Dấu : ở 2 đầu dòng phân tách quyết định căn trái/giữa/phải cho từng cột.",
        },
      ],
    },
  ],
};

export default markdown;
