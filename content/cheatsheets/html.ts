import type { Cheatsheet } from "@/content/schema";

const html: Cheatsheet = {
  slug: "html",
  title: "HTML",
  category: "frontend",
  description: "Cấu trúc tài liệu, form/input, thẻ semantic, media/link và thuộc tính accessibility.",
  status: "published",
  sections: [
    {
      id: "document-structure",
      title: "Document Structure",
      snippets: [
        {
          id: "html-boilerplate",
          title: "Khung tài liệu cơ bản",
          language: "html",
          code: '<!DOCTYPE html>\n<html lang="vi">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>Trang của tôi</title>\n</head>\n<body>\n  <!-- nội dung -->\n</body>\n</html>',
          description: "meta viewport bắt buộc để trang hiển thị đúng trên mobile.",
        },
        {
          id: "head-meta-tags",
          title: "Meta tag hay dùng",
          language: "html",
          code: '<meta name="description" content="Mô tả ngắn cho SEO" />\n<link rel="icon" href="/favicon.ico" />\n<link rel="stylesheet" href="/styles.css" />',
          description: "Description hỗ trợ SEO, link rel=\"icon\" đặt favicon cho tab trình duyệt.",
        },
      ],
    },
    {
      id: "forms-inputs",
      title: "Forms & Inputs",
      snippets: [
        {
          id: "form-basic",
          title: "Form cơ bản",
          language: "html",
          code: '<form action="/submit" method="post">\n  <label for="email">Email</label>\n  <input id="email" name="email" type="email" required />\n  <button type="submit">Gửi</button>\n</form>',
          description: "label for phải khớp id của input để trình đọc màn hình liên kết đúng nhãn.",
        },
        {
          id: "input-types",
          title: "Các loại input phổ biến",
          language: "html",
          code: '<input type="password" />\n<input type="number" min="0" max="100" />\n<input type="checkbox" checked />\n<input type="radio" name="plan" value="pro" />',
          description: "Trình duyệt tự validate/hiện bàn phím phù hợp theo type (vd number hiện numpad trên mobile).",
        },
      ],
    },
    {
      id: "semantic-elements",
      title: "Semantic Elements",
      snippets: [
        {
          id: "semantic-layout",
          title: "Bố cục semantic",
          language: "html",
          code: "<header>...</header>\n<nav>...</nav>\n<main>\n  <article>...</article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>",
          description: "Dùng thẻ mô tả đúng vai trò thay vì toàn <div>, giúp SEO và accessibility tốt hơn.",
        },
        {
          id: "details-summary",
          title: "details/summary (accordion không cần JS)",
          language: "html",
          code: "<details>\n  <summary>Xem thêm</summary>\n  <p>Nội dung ẩn cho tới khi click summary.</p>\n</details>",
          description: "Tạo khối thu gọn/mở rộng thuần HTML, không cần JavaScript.",
        },
      ],
    },
    {
      id: "media-links",
      title: "Media & Links",
      snippets: [
        {
          id: "img-picture",
          title: "img với alt và loading",
          language: "html",
          code: '<img src="/banner.jpg" alt="Mô tả ảnh" width="800" height="400" loading="lazy" />',
          description: "alt bắt buộc cho accessibility; width/height tránh layout shift; loading=lazy trì hoãn tải ảnh ngoài màn hình.",
        },
        {
          id: "anchor-attributes",
          title: "Thuộc tính thẻ a",
          language: "html",
          code: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">\n  Mở tab mới\n</a>',
          description: "rel=\"noopener noreferrer\" ngăn tab mới truy cập window.opener — cần thiết khi dùng target=_blank.",
        },
      ],
    },
    {
      id: "accessibility-attributes",
      title: "Accessibility Attributes",
      snippets: [
        {
          id: "aria-label",
          title: "aria-label cho nút chỉ có icon",
          language: "html",
          code: '<button aria-label="Đóng thông báo">\n  <svg>...</svg>\n</button>',
          description: "Cung cấp tên có thể đọc được cho phần tử không có text hiển thị.",
        },
        {
          id: "aria-live",
          title: "aria-live cho nội dung động",
          language: "html",
          code: '<div role="status" aria-live="polite">\n  Đã lưu thành công\n</div>',
          description: "Trình đọc màn hình tự động thông báo khi nội dung trong vùng này thay đổi.",
        },
      ],
    },
  ],
};

export default html;
