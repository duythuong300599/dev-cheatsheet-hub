import type { Cheatsheet } from "@/content/schema";

const css: Cheatsheet = {
  slug: "css",
  title: "CSS",
  category: "frontend",
  description: "Flexbox, Grid, selector, transition/animation và responsive cơ bản.",
  status: "published",
  sections: [
    {
      id: "flexbox",
      title: "Flexbox",
      snippets: [
        {
          id: "flex-container",
          title: "Khởi tạo flex container",
          language: "css",
          code: ".row {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n}",
          description: "Biến phần tử thành flex container, các con xếp theo hàng ngang.",
        },
        {
          id: "flex-justify-content",
          title: "justify-content",
          language: "css",
          code: ".row {\n  display: flex;\n  justify-content: space-between;\n}",
          description: "Căn chỉnh khoảng cách các item theo trục chính (ngang mặc định).",
        },
        {
          id: "flex-align-items",
          title: "align-items",
          language: "css",
          code: ".row {\n  display: flex;\n  align-items: center;\n}",
          description: "Căn giữa các item theo trục ngang (vuông góc với trục chính).",
        },
        {
          id: "flex-grow-shrink-basis",
          title: "flex shorthand",
          language: "css",
          code: ".sidebar {\n  flex: 0 0 240px; /* grow shrink basis */\n}\n.content {\n  flex: 1 1 auto;\n}",
          description: "Chỉ định cách 1 item co giãn: sidebar cố định 240px, content chiếm phần còn lại.",
        },
      ],
    },
    {
      id: "grid",
      title: "Grid",
      snippets: [
        {
          id: "grid-template-columns",
          title: "grid-template-columns",
          language: "css",
          code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
          description: "Tạo lưới 3 cột bằng nhau, tự động co giãn theo chiều rộng container.",
        },
        {
          id: "grid-template-areas",
          title: "grid-template-areas",
          language: "css",
          code: '.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar content";\n  grid-template-columns: 240px 1fr;\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }',
          description: "Đặt tên vùng bố cục, dễ hình dung layout hơn so với chỉ số dòng/cột.",
        },
        {
          id: "grid-gap",
          title: "gap (row + column)",
          language: "css",
          code: ".grid {\n  display: grid;\n  row-gap: 8px;\n  column-gap: 16px;\n}",
          description: "Khoảng cách riêng biệt giữa các hàng và cột trong grid.",
        },
        {
          id: "grid-place-items",
          title: "place-items (căn giữa nhanh)",
          language: "css",
          code: ".center {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n}",
          description: "Căn giữa cả 2 trục chỉ với 1 dòng — cách phổ biến nhất để center bằng grid.",
        },
      ],
    },
    {
      id: "selectors",
      title: "Selectors",
      snippets: [
        {
          id: "attribute-selector",
          title: "Attribute selector",
          language: "css",
          code: 'input[type="email"] {\n  border-color: var(--accent-cyan);\n}',
          description: "Chọn phần tử dựa theo giá trị thuộc tính HTML.",
        },
        {
          id: "nth-child",
          title: ":nth-child()",
          language: "css",
          code: "tr:nth-child(even) {\n  background: var(--muted);\n}",
          description: "Tô màu xen kẽ các dòng chẵn trong bảng.",
        },
        {
          id: "before-pseudo-element",
          title: "::before",
          language: "css",
          code: '.required::before {\n  content: "*";\n  color: red;\n  margin-right: 4px;\n}',
          description: "Chèn nội dung trang trí trước phần tử mà không cần thêm thẻ HTML.",
        },
        {
          id: "combinator-child-sibling",
          title: "Combinator (child / sibling)",
          language: "css",
          code: ".menu > li {\n  /* chỉ chọn li con trực tiếp */\n}\nh2 + p {\n  /* chọn p ngay sau h2 */\n  margin-top: 4px;\n}",
          description: ">  chọn con trực tiếp, + chọn phần tử liền kề ngay sau.",
        },
      ],
    },
    {
      id: "transitions-animations",
      title: "Transitions & Animations",
      snippets: [
        {
          id: "transition-shorthand",
          title: "transition shorthand",
          language: "css",
          code: ".button {\n  transition: background-color 150ms ease, transform 150ms ease;\n}\n.button:hover {\n  transform: translateY(-1px);\n}",
          description: "Chuyển động mượt khi thuộc tính CSS thay đổi (vd hover).",
        },
        {
          id: "transform-hover",
          title: "transform khi hover",
          language: "css",
          code: ".card:hover {\n  transform: scale(1.02);\n}",
          description: "Phóng to nhẹ phần tử khi rê chuột qua.",
        },
        {
          id: "keyframes-animation",
          title: "@keyframes + animation",
          language: "css",
          code: "@keyframes fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.toast {\n  animation: fade-in 200ms ease-out;\n}",
          description: "Định nghĩa chuỗi trạng thái rồi gán animation chạy tự động.",
        },
        {
          id: "animation-timing-function",
          title: "animation-timing-function tuỳ chỉnh",
          language: "css",
          code: ".spinner {\n  animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}",
          description: "Dùng cubic-bezier để kiểm soát tốc độ animation theo đường cong riêng.",
        },
      ],
    },
    {
      id: "responsive",
      title: "Responsive (Media Query)",
      snippets: [
        {
          id: "media-query-basic",
          title: "Media query theo breakpoint",
          language: "css",
          code: ".sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    display: block;\n  }\n}",
          description: "Ẩn sidebar trên mobile, hiện lại từ breakpoint tablet trở lên.",
        },
        {
          id: "prefers-color-scheme",
          title: "prefers-color-scheme",
          language: "css",
          code: "@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #0d1117;\n  }\n}",
          description: "Đổi theme mặc định theo cấu hình hệ điều hành của người dùng.",
        },
        {
          id: "container-query",
          title: "Container query",
          language: "css",
          code: ".card-wrapper {\n  container-type: inline-size;\n}\n@container (min-width: 400px) {\n  .card {\n    flex-direction: row;\n  }\n}",
          description: "Đổi layout dựa theo kích thước container cha, không phụ thuộc viewport toàn trang.",
        },
      ],
    },
  ],
};

export default css;
