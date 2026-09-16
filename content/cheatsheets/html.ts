import type { Cheatsheet } from "@/content/schema";

const html: Cheatsheet = {
  slug: "html",
  title: "HTML",
  category: "frontend",
  description: {
    vi: "Cấu trúc tài liệu, form/input, thẻ semantic, media/link và thuộc tính accessibility.",
    en: "Document structure, forms/inputs, semantic tags, media/links and accessibility attributes.",
  },
  status: "published",
  sections: [
    {
      id: "document-structure",
      title: { vi: "Document Structure", en: "Document Structure" },
      snippets: [
        {
          id: "html-boilerplate",
          title: { vi: "Khung tài liệu cơ bản", en: "Basic document boilerplate" },
          language: "html",
          code: '<!DOCTYPE html>\n<html lang="vi">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>Trang của tôi</title>\n</head>\n<body>\n  <!-- nội dung -->\n</body>\n</html>',
          description: {
            vi: "meta viewport bắt buộc để trang hiển thị đúng trên mobile.",
            en: "The viewport meta tag is required for the page to display correctly on mobile.",
          },
        },
        {
          id: "head-meta-tags",
          title: { vi: "Meta tag hay dùng", en: "Common meta tags" },
          language: "html",
          code: '<meta name="description" content="Mô tả ngắn cho SEO" />\n<link rel="icon" href="/favicon.ico" />\n<link rel="stylesheet" href="/styles.css" />',
          description: {
            vi: "Description hỗ trợ SEO, link rel=\"icon\" đặt favicon cho tab trình duyệt.",
            en: 'The description tag helps SEO; link rel="icon" sets the browser tab favicon.',
          },
        },
      ],
    },
    {
      id: "forms-inputs",
      title: { vi: "Forms & Inputs", en: "Forms & Inputs" },
      snippets: [
        {
          id: "form-basic",
          title: { vi: "Form cơ bản", en: "Basic form" },
          language: "html",
          code: '<form action="/submit" method="post">\n  <label for="email">Email</label>\n  <input id="email" name="email" type="email" required />\n  <button type="submit">Gửi</button>\n</form>',
          description: {
            vi: "label for phải khớp id của input để trình đọc màn hình liên kết đúng nhãn.",
            en: "label's for must match the input's id so screen readers associate the label correctly.",
          },
        },
        {
          id: "input-types",
          title: { vi: "Các loại input phổ biến", en: "Common input types" },
          language: "html",
          code: '<input type="password" />\n<input type="number" min="0" max="100" />\n<input type="checkbox" checked />\n<input type="radio" name="plan" value="pro" />',
          description: {
            vi: "Trình duyệt tự validate/hiện bàn phím phù hợp theo type (vd number hiện numpad trên mobile).",
            en: "The browser auto-validates and shows an appropriate keyboard per type (e.g. number shows a numpad on mobile).",
          },
        },
      ],
    },
    {
      id: "semantic-elements",
      title: { vi: "Semantic Elements", en: "Semantic Elements" },
      snippets: [
        {
          id: "semantic-layout",
          title: { vi: "Bố cục semantic", en: "Semantic layout" },
          language: "html",
          code: "<header>...</header>\n<nav>...</nav>\n<main>\n  <article>...</article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>",
          description: {
            vi: "Dùng thẻ mô tả đúng vai trò thay vì toàn <div>, giúp SEO và accessibility tốt hơn.",
            en: "Use tags that describe their role instead of all <div>, improving SEO and accessibility.",
          },
        },
        {
          id: "details-summary",
          title: {
            vi: "details/summary (accordion không cần JS)",
            en: "details/summary (accordion without JS)",
          },
          language: "html",
          code: "<details>\n  <summary>Xem thêm</summary>\n  <p>Nội dung ẩn cho tới khi click summary.</p>\n</details>",
          description: {
            vi: "Tạo khối thu gọn/mở rộng thuần HTML, không cần JavaScript.",
            en: "Create a collapsible/expandable block in pure HTML, no JavaScript needed.",
          },
        },
      ],
    },
    {
      id: "media-links",
      title: { vi: "Media & Links", en: "Media & Links" },
      snippets: [
        {
          id: "img-picture",
          title: { vi: "img với alt và loading", en: "img with alt and loading" },
          language: "html",
          code: '<img src="/banner.jpg" alt="Mô tả ảnh" width="800" height="400" loading="lazy" />',
          description: {
            vi: "alt bắt buộc cho accessibility; width/height tránh layout shift; loading=lazy trì hoãn tải ảnh ngoài màn hình.",
            en: "alt is required for accessibility; width/height prevent layout shift; loading=lazy defers off-screen images.",
          },
        },
        {
          id: "anchor-attributes",
          title: { vi: "Thuộc tính thẻ a", en: "Anchor tag attributes" },
          language: "html",
          code: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">\n  Mở tab mới\n</a>',
          description: {
            vi: 'rel="noopener noreferrer" ngăn tab mới truy cập window.opener — cần thiết khi dùng target=_blank.',
            en: 'rel="noopener noreferrer" prevents the new tab from accessing window.opener — required with target=_blank.',
          },
        },
      ],
    },
    {
      id: "accessibility-attributes",
      title: { vi: "Accessibility Attributes", en: "Accessibility Attributes" },
      snippets: [
        {
          id: "aria-label",
          title: { vi: "aria-label cho nút chỉ có icon", en: "aria-label for icon-only buttons" },
          language: "html",
          code: '<button aria-label="Đóng thông báo">\n  <svg>...</svg>\n</button>',
          description: {
            vi: "Cung cấp tên có thể đọc được cho phần tử không có text hiển thị.",
            en: "Provides a readable name for elements with no visible text.",
          },
        },
        {
          id: "aria-live",
          title: { vi: "aria-live cho nội dung động", en: "aria-live for dynamic content" },
          language: "html",
          code: '<div role="status" aria-live="polite">\n  Đã lưu thành công\n</div>',
          description: {
            vi: "Trình đọc màn hình tự động thông báo khi nội dung trong vùng này thay đổi.",
            en: "Screen readers automatically announce when content in this region changes.",
          },
        },
      ],
    },
  ],
};

export default html;
