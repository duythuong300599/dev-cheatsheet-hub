import type { Cheatsheet } from "@/content/schema";

const sql: Cheatsheet = {
  slug: "sql",
  title: "SQL",
  category: "database",
  description: "SELECT, JOIN, GROUP BY, subquery/CTE và các lệnh thay đổi dữ liệu cơ bản.",
  status: "published",
  sections: [
    {
      id: "select-basics",
      title: "SELECT Basics",
      snippets: [
        {
          id: "select-where",
          title: "SELECT + WHERE",
          language: "sql",
          code: "SELECT id, name, email\nFROM users\nWHERE created_at >= '2026-01-01'\nORDER BY created_at DESC\nLIMIT 20;",
          description: "Lấy cột cụ thể, lọc điều kiện, sắp xếp và giới hạn số dòng trả về.",
        },
        {
          id: "select-distinct",
          title: "DISTINCT",
          language: "sql",
          code: "SELECT DISTINCT country FROM users;",
          description: "Loại bỏ giá trị trùng lặp trong kết quả trả về.",
        },
        {
          id: "select-like",
          title: "LIKE và IN",
          language: "sql",
          code: "SELECT * FROM users\nWHERE email LIKE '%@gmail.com'\n  AND country IN ('VN', 'SG', 'TH');",
          description: "LIKE tìm theo mẫu chuỗi (% là ký tự đại diện), IN kiểm tra thuộc 1 tập giá trị.",
        },
      ],
    },
    {
      id: "joins",
      title: "Joins",
      snippets: [
        {
          id: "inner-join",
          title: "INNER JOIN",
          language: "sql",
          code: "SELECT o.id, u.name, o.total\nFROM orders o\nINNER JOIN users u ON u.id = o.user_id;",
          description: "Chỉ lấy dòng có khớp ở cả 2 bảng.",
        },
        {
          id: "left-join",
          title: "LEFT JOIN",
          language: "sql",
          code: "SELECT u.name, o.id AS order_id\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;",
          description: "Lấy toàn bộ user kể cả chưa có đơn hàng nào (order_id sẽ là NULL).",
        },
        {
          id: "multiple-joins",
          title: "Join nhiều bảng",
          language: "sql",
          code: "SELECT o.id, u.name, p.title\nFROM orders o\nJOIN users u ON u.id = o.user_id\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p ON p.id = oi.product_id;",
          description: "Nối chuỗi nhiều bảng liên quan để lấy dữ liệu từ 1 truy vấn duy nhất.",
        },
      ],
    },
    {
      id: "aggregation-group-by",
      title: "Aggregation & GROUP BY",
      snippets: [
        {
          id: "group-by-count",
          title: "GROUP BY + COUNT",
          language: "sql",
          code: "SELECT country, COUNT(*) AS total_users\nFROM users\nGROUP BY country\nORDER BY total_users DESC;",
          description: "Đếm số user theo từng nhóm quốc gia.",
        },
        {
          id: "having-clause",
          title: "HAVING (lọc sau khi group)",
          language: "sql",
          code: "SELECT user_id, SUM(total) AS total_spent\nFROM orders\nGROUP BY user_id\nHAVING SUM(total) > 1000000;",
          description: "WHERE lọc trước khi group, HAVING lọc trên kết quả đã tổng hợp.",
        },
        {
          id: "aggregate-functions",
          title: "Hàm tổng hợp thường dùng",
          language: "sql",
          code: "SELECT\n  AVG(total) AS avg_order,\n  MAX(total) AS max_order,\n  MIN(total) AS min_order\nFROM orders;",
          description: "AVG, MAX, MIN, SUM, COUNT là các hàm tổng hợp phổ biến nhất.",
        },
      ],
    },
    {
      id: "subqueries-cte",
      title: "Subqueries & CTE",
      snippets: [
        {
          id: "subquery-in",
          title: "Subquery trong WHERE",
          language: "sql",
          code: "SELECT name FROM users\nWHERE id IN (\n  SELECT user_id FROM orders WHERE total > 500000\n);",
          description: "Lọc user dựa trên kết quả của 1 truy vấn con.",
        },
        {
          id: "cte-with",
          title: "CTE với WITH",
          language: "sql",
          code: "WITH big_spenders AS (\n  SELECT user_id, SUM(total) AS total_spent\n  FROM orders\n  GROUP BY user_id\n  HAVING SUM(total) > 1000000\n)\nSELECT u.name, b.total_spent\nFROM big_spenders b\nJOIN users u ON u.id = b.user_id;",
          description: "Đặt tên cho 1 truy vấn con, giúp câu lệnh dài dễ đọc và tái sử dụng được.",
        },
      ],
    },
    {
      id: "data-modification",
      title: "Data Modification",
      snippets: [
        {
          id: "insert-statement",
          title: "INSERT",
          language: "sql",
          code: "INSERT INTO users (name, email)\nVALUES ('An Nguyen', 'an@example.com');",
          description: "Thêm 1 dòng dữ liệu mới vào bảng.",
        },
        {
          id: "update-statement",
          title: "UPDATE",
          language: "sql",
          code: "UPDATE users\nSET email = 'new-email@example.com'\nWHERE id = 42;",
          description: "Luôn dùng WHERE khi UPDATE, tránh cập nhật nhầm toàn bộ bảng.",
        },
        {
          id: "delete-statement",
          title: "DELETE",
          language: "sql",
          code: "DELETE FROM sessions\nWHERE expires_at < NOW();",
          description: "Xoá dữ liệu theo điều kiện, ở đây là dọn session đã hết hạn.",
        },
      ],
    },
  ],
};

export default sql;
