import type { Cheatsheet } from "@/content/schema";

const css: Cheatsheet = {
  slug: "css",
  title: "CSS",
  category: "frontend",
  description: {
    vi: "Flexbox, Grid, selector, transition/animation và responsive cơ bản.",
    en: "Flexbox, Grid, selectors, transitions/animations and basic responsive design.",
  },
  status: "published",
  sections: [
    {
      id: "flexbox",
      title: { vi: "Flexbox", en: "Flexbox" },
      snippets: [
        {
          id: "flex-container",
          title: { vi: "Khởi tạo flex container", en: "Creating a flex container" },
          language: "css",
          code: ".row {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n}",
          description: {
            vi: "Biến phần tử thành flex container, các con xếp theo hàng ngang.",
            en: "Turn an element into a flex container, laying children out horizontally.",
          },
        },
        {
          id: "flex-justify-content",
          title: { vi: "justify-content", en: "justify-content" },
          language: "css",
          code: ".row {\n  display: flex;\n  justify-content: space-between;\n}",
          description: {
            vi: "Căn chỉnh khoảng cách các item theo trục chính (ngang mặc định).",
            en: "Align spacing of items along the main axis (horizontal by default).",
          },
        },
        {
          id: "flex-align-items",
          title: { vi: "align-items", en: "align-items" },
          language: "css",
          code: ".row {\n  display: flex;\n  align-items: center;\n}",
          description: {
            vi: "Căn giữa các item theo trục ngang (vuông góc với trục chính).",
            en: "Center items along the cross axis (perpendicular to the main axis).",
          },
        },
        {
          id: "flex-grow-shrink-basis",
          title: { vi: "flex shorthand", en: "flex shorthand" },
          language: "css",
          code: ".sidebar {\n  flex: 0 0 240px; /* grow shrink basis */\n}\n.content {\n  flex: 1 1 auto;\n}",
          description: {
            vi: "Chỉ định cách 1 item co giãn: sidebar cố định 240px, content chiếm phần còn lại.",
            en: "Control how an item grows/shrinks: a fixed 240px sidebar, content filling the rest.",
          },
        },
      ],
    },
    {
      id: "grid",
      title: { vi: "Grid", en: "Grid" },
      snippets: [
        {
          id: "grid-template-columns",
          title: { vi: "grid-template-columns", en: "grid-template-columns" },
          language: "css",
          code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
          description: {
            vi: "Tạo lưới 3 cột bằng nhau, tự động co giãn theo chiều rộng container.",
            en: "Create a grid with 3 equal columns that scale with the container width.",
          },
        },
        {
          id: "grid-template-areas",
          title: { vi: "grid-template-areas", en: "grid-template-areas" },
          language: "css",
          code: '.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar content";\n  grid-template-columns: 240px 1fr;\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }',
          description: {
            vi: "Đặt tên vùng bố cục, dễ hình dung layout hơn so với chỉ số dòng/cột.",
            en: "Name layout regions, making the layout easier to visualize than row/column indexes.",
          },
        },
        {
          id: "grid-gap",
          title: { vi: "gap (row + column)", en: "gap (row + column)" },
          language: "css",
          code: ".grid {\n  display: grid;\n  row-gap: 8px;\n  column-gap: 16px;\n}",
          description: {
            vi: "Khoảng cách riêng biệt giữa các hàng và cột trong grid.",
            en: "Set separate spacing between rows and columns in a grid.",
          },
        },
        {
          id: "grid-place-items",
          title: { vi: "place-items (căn giữa nhanh)", en: "place-items (quick centering)" },
          language: "css",
          code: ".center {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n}",
          description: {
            vi: "Căn giữa cả 2 trục chỉ với 1 dòng — cách phổ biến nhất để center bằng grid.",
            en: "Center on both axes with a single line — the most common way to center with grid.",
          },
        },
      ],
    },
    {
      id: "selectors",
      title: { vi: "Selectors", en: "Selectors" },
      snippets: [
        {
          id: "attribute-selector",
          title: { vi: "Attribute selector", en: "Attribute selector" },
          language: "css",
          code: 'input[type="email"] {\n  border-color: var(--accent-cyan);\n}',
          description: {
            vi: "Chọn phần tử dựa theo giá trị thuộc tính HTML.",
            en: "Select an element based on an HTML attribute value.",
          },
        },
        {
          id: "nth-child",
          title: { vi: ":nth-child()", en: ":nth-child()" },
          language: "css",
          code: "tr:nth-child(even) {\n  background: var(--muted);\n}",
          description: {
            vi: "Tô màu xen kẽ các dòng chẵn trong bảng.",
            en: "Stripe alternate (even) rows in a table.",
          },
        },
        {
          id: "before-pseudo-element",
          title: { vi: "::before", en: "::before" },
          language: "css",
          code: '.required::before {\n  content: "*";\n  color: red;\n  margin-right: 4px;\n}',
          description: {
            vi: "Chèn nội dung trang trí trước phần tử mà không cần thêm thẻ HTML.",
            en: "Insert decorative content before an element without adding an HTML tag.",
          },
        },
        {
          id: "combinator-child-sibling",
          title: { vi: "Combinator (child / sibling)", en: "Combinators (child / sibling)" },
          language: "css",
          code: ".menu > li {\n  /* chỉ chọn li con trực tiếp */\n}\nh2 + p {\n  /* chọn p ngay sau h2 */\n  margin-top: 4px;\n}",
          description: {
            vi: ">  chọn con trực tiếp, + chọn phần tử liền kề ngay sau.",
            en: "> selects direct children, + selects the immediately following sibling.",
          },
        },
      ],
    },
    {
      id: "transitions-animations",
      title: { vi: "Transitions & Animations", en: "Transitions & Animations" },
      snippets: [
        {
          id: "transition-shorthand",
          title: { vi: "transition shorthand", en: "transition shorthand" },
          language: "css",
          code: ".button {\n  transition: background-color 150ms ease, transform 150ms ease;\n}\n.button:hover {\n  transform: translateY(-1px);\n}",
          description: {
            vi: "Chuyển động mượt khi thuộc tính CSS thay đổi (vd hover).",
            en: "Smoothly animate a CSS property change (e.g. on hover).",
          },
        },
        {
          id: "transform-hover",
          title: { vi: "transform khi hover", en: "transform on hover" },
          language: "css",
          code: ".card:hover {\n  transform: scale(1.02);\n}",
          description: {
            vi: "Phóng to nhẹ phần tử khi rê chuột qua.",
            en: "Slightly scale up an element on hover.",
          },
        },
        {
          id: "keyframes-animation",
          title: { vi: "@keyframes + animation", en: "@keyframes + animation" },
          language: "css",
          code: "@keyframes fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.toast {\n  animation: fade-in 200ms ease-out;\n}",
          description: {
            vi: "Định nghĩa chuỗi trạng thái rồi gán animation chạy tự động.",
            en: "Define a sequence of states, then attach an animation that runs automatically.",
          },
        },
        {
          id: "animation-timing-function",
          title: {
            vi: "animation-timing-function tuỳ chỉnh",
            en: "Custom animation-timing-function",
          },
          language: "css",
          code: ".spinner {\n  animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}",
          description: {
            vi: "Dùng cubic-bezier để kiểm soát tốc độ animation theo đường cong riêng.",
            en: "Use cubic-bezier to control animation speed with a custom easing curve.",
          },
        },
      ],
    },
    {
      id: "responsive",
      title: { vi: "Responsive (Media Query)", en: "Responsive (Media Query)" },
      snippets: [
        {
          id: "media-query-basic",
          title: { vi: "Media query theo breakpoint", en: "Media query by breakpoint" },
          language: "css",
          code: ".sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    display: block;\n  }\n}",
          description: {
            vi: "Ẩn sidebar trên mobile, hiện lại từ breakpoint tablet trở lên.",
            en: "Hide the sidebar on mobile, showing it again from the tablet breakpoint up.",
          },
        },
        {
          id: "prefers-color-scheme",
          title: { vi: "prefers-color-scheme", en: "prefers-color-scheme" },
          language: "css",
          code: "@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #0d1117;\n  }\n}",
          description: {
            vi: "Đổi theme mặc định theo cấu hình hệ điều hành của người dùng.",
            en: "Switch the default theme based on the user's OS setting.",
          },
        },
        {
          id: "container-query",
          title: { vi: "Container query", en: "Container query" },
          language: "css",
          code: ".card-wrapper {\n  container-type: inline-size;\n}\n@container (min-width: 400px) {\n  .card {\n    flex-direction: row;\n  }\n}",
          description: {
            vi: "Đổi layout dựa theo kích thước container cha, không phụ thuộc viewport toàn trang.",
            en: "Change layout based on the parent container's size, independent of the page viewport.",
          },
        },
      ],
    },
  ],
};

export default css;
