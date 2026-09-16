import type { Cheatsheet } from "@/content/schema";

const sql: Cheatsheet = {
  slug: "sql",
  title: "SQL",
  category: "database",
  description: {
    vi: "SELECT, JOIN, GROUP BY, subquery/CTE và các lệnh thay đổi dữ liệu cơ bản.",
    en: "SELECT, JOIN, GROUP BY, subqueries/CTEs and basic data modification statements.",
  },
  status: "published",
  sections: [
    {
      id: "select-basics",
      title: { vi: "SELECT Basics", en: "SELECT Basics" },
      snippets: [
        {
          id: "select-where",
          title: { vi: "SELECT + WHERE", en: "SELECT + WHERE" },
          language: "sql",
          code: "SELECT id, name, email\nFROM users\nWHERE created_at >= '2026-01-01'\nORDER BY created_at DESC\nLIMIT 20;",
          description: {
            vi: "Lấy cột cụ thể, lọc điều kiện, sắp xếp và giới hạn số dòng trả về.",
            en: "Select specific columns, filter by condition, sort, and limit the rows returned.",
          },
        },
        {
          id: "select-distinct",
          title: { vi: "DISTINCT", en: "DISTINCT" },
          language: "sql",
          code: "SELECT DISTINCT country FROM users;",
          description: {
            vi: "Loại bỏ giá trị trùng lặp trong kết quả trả về.",
            en: "Remove duplicate values from the result set.",
          },
        },
        {
          id: "select-like",
          title: { vi: "LIKE và IN", en: "LIKE and IN" },
          language: "sql",
          code: "SELECT * FROM users\nWHERE email LIKE '%@gmail.com'\n  AND country IN ('VN', 'SG', 'TH');",
          description: {
            vi: "LIKE tìm theo mẫu chuỗi (% là ký tự đại diện), IN kiểm tra thuộc 1 tập giá trị.",
            en: "LIKE matches a string pattern (% is a wildcard); IN checks membership in a set of values.",
          },
        },
      ],
    },
    {
      id: "joins",
      title: { vi: "Joins", en: "Joins" },
      snippets: [
        {
          id: "inner-join",
          title: { vi: "INNER JOIN", en: "INNER JOIN" },
          language: "sql",
          code: "SELECT o.id, u.name, o.total\nFROM orders o\nINNER JOIN users u ON u.id = o.user_id;",
          description: {
            vi: "Chỉ lấy dòng có khớp ở cả 2 bảng.",
            en: "Only return rows that match in both tables.",
          },
        },
        {
          id: "left-join",
          title: { vi: "LEFT JOIN", en: "LEFT JOIN" },
          language: "sql",
          code: "SELECT u.name, o.id AS order_id\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;",
          description: {
            vi: "Lấy toàn bộ user kể cả chưa có đơn hàng nào (order_id sẽ là NULL).",
            en: "Return all users even those without orders (order_id will be NULL).",
          },
        },
        {
          id: "multiple-joins",
          title: { vi: "Join nhiều bảng", en: "Joining multiple tables" },
          language: "sql",
          code: "SELECT o.id, u.name, p.title\nFROM orders o\nJOIN users u ON u.id = o.user_id\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p ON p.id = oi.product_id;",
          description: {
            vi: "Nối chuỗi nhiều bảng liên quan để lấy dữ liệu từ 1 truy vấn duy nhất.",
            en: "Chain several related tables together to pull data in a single query.",
          },
        },
      ],
    },
    {
      id: "aggregation-group-by",
      title: { vi: "Aggregation & GROUP BY", en: "Aggregation & GROUP BY" },
      snippets: [
        {
          id: "group-by-count",
          title: { vi: "GROUP BY + COUNT", en: "GROUP BY + COUNT" },
          language: "sql",
          code: "SELECT country, COUNT(*) AS total_users\nFROM users\nGROUP BY country\nORDER BY total_users DESC;",
          description: {
            vi: "Đếm số user theo từng nhóm quốc gia.",
            en: "Count users grouped by country.",
          },
        },
        {
          id: "having-clause",
          title: { vi: "HAVING (lọc sau khi group)", en: "HAVING (filtering after grouping)" },
          language: "sql",
          code: "SELECT user_id, SUM(total) AS total_spent\nFROM orders\nGROUP BY user_id\nHAVING SUM(total) > 1000000;",
          description: {
            vi: "WHERE lọc trước khi group, HAVING lọc trên kết quả đã tổng hợp.",
            en: "WHERE filters before grouping; HAVING filters on the aggregated result.",
          },
        },
        {
          id: "aggregate-functions",
          title: { vi: "Hàm tổng hợp thường dùng", en: "Common aggregate functions" },
          language: "sql",
          code: "SELECT\n  AVG(total) AS avg_order,\n  MAX(total) AS max_order,\n  MIN(total) AS min_order\nFROM orders;",
          description: {
            vi: "AVG, MAX, MIN, SUM, COUNT là các hàm tổng hợp phổ biến nhất.",
            en: "AVG, MAX, MIN, SUM, COUNT are the most common aggregate functions.",
          },
        },
      ],
    },
    {
      id: "subqueries-cte",
      title: { vi: "Subqueries & CTE", en: "Subqueries & CTE" },
      snippets: [
        {
          id: "subquery-in",
          title: { vi: "Subquery trong WHERE", en: "Subquery in WHERE" },
          language: "sql",
          code: "SELECT name FROM users\nWHERE id IN (\n  SELECT user_id FROM orders WHERE total > 500000\n);",
          description: {
            vi: "Lọc user dựa trên kết quả của 1 truy vấn con.",
            en: "Filter users based on the result of a subquery.",
          },
        },
        {
          id: "cte-with",
          title: { vi: "CTE với WITH", en: "CTE with WITH" },
          language: "sql",
          code: "WITH big_spenders AS (\n  SELECT user_id, SUM(total) AS total_spent\n  FROM orders\n  GROUP BY user_id\n  HAVING SUM(total) > 1000000\n)\nSELECT u.name, b.total_spent\nFROM big_spenders b\nJOIN users u ON u.id = b.user_id;",
          description: {
            vi: "Đặt tên cho 1 truy vấn con, giúp câu lệnh dài dễ đọc và tái sử dụng được.",
            en: "Name a subquery to make long statements more readable and reusable.",
          },
        },
      ],
    },
    {
      id: "data-modification",
      title: { vi: "Data Modification", en: "Data Modification" },
      snippets: [
        {
          id: "insert-statement",
          title: { vi: "INSERT", en: "INSERT" },
          language: "sql",
          code: "INSERT INTO users (name, email)\nVALUES ('An Nguyen', 'an@example.com');",
          description: {
            vi: "Thêm 1 dòng dữ liệu mới vào bảng.",
            en: "Add a new row of data to a table.",
          },
        },
        {
          id: "update-statement",
          title: { vi: "UPDATE", en: "UPDATE" },
          language: "sql",
          code: "UPDATE users\nSET email = 'new-email@example.com'\nWHERE id = 42;",
          description: {
            vi: "Luôn dùng WHERE khi UPDATE, tránh cập nhật nhầm toàn bộ bảng.",
            en: "Always use WHERE with UPDATE to avoid accidentally updating the whole table.",
          },
        },
        {
          id: "delete-statement",
          title: { vi: "DELETE", en: "DELETE" },
          language: "sql",
          code: "DELETE FROM sessions\nWHERE expires_at < NOW();",
          description: {
            vi: "Xoá dữ liệu theo điều kiện, ở đây là dọn session đã hết hạn.",
            en: "Delete data by condition — here, cleaning up expired sessions.",
          },
        },
      ],
    },
  ],
};

export default sql;
