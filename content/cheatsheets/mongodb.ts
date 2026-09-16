import type { Cheatsheet } from "@/content/schema";

const mongodb: Cheatsheet = {
  slug: "mongodb",
  title: "MongoDB",
  category: "database",
  description: "CRUD cơ bản, toán tử truy vấn, aggregation pipeline, index và toán tử update.",
  status: "published",
  sections: [
    {
      id: "crud-basics",
      title: "CRUD Basics",
      snippets: [
        {
          id: "insert-one-many",
          title: "insertOne / insertMany",
          language: "javascript",
          code: 'db.users.insertOne({ name: "An", age: 25 });\ndb.users.insertMany([\n  { name: "Binh", age: 30 },\n  { name: "Chi", age: 22 },\n]);',
          description: "Thêm 1 hoặc nhiều document vào collection.",
        },
        {
          id: "find-basic",
          title: "find với điều kiện",
          language: "javascript",
          code: 'db.users.find({ age: { $gte: 18 } }).sort({ age: -1 }).limit(10);',
          description: "Lọc, sắp xếp giảm dần và giới hạn số document trả về.",
        },
        {
          id: "find-one",
          title: "findOne",
          language: "javascript",
          code: 'db.users.findOne({ email: "an@example.com" });',
          description: "Trả về document đầu tiên khớp điều kiện, hoặc null nếu không có.",
        },
      ],
    },
    {
      id: "query-operators",
      title: "Query Operators",
      snippets: [
        {
          id: "comparison-operators",
          title: "Toán tử so sánh",
          language: "javascript",
          code: 'db.products.find({ price: { $gt: 100000, $lte: 500000 } });',
          description: "$gt, $gte, $lt, $lte, $ne dùng để so sánh giá trị field.",
        },
        {
          id: "in-operator",
          title: "$in / $nin",
          language: "javascript",
          code: 'db.users.find({ role: { $in: ["admin", "editor"] } });',
          description: "Kiểm tra giá trị field có thuộc (hoặc không thuộc) 1 danh sách cho trước.",
        },
        {
          id: "logical-operators",
          title: "$and / $or",
          language: "javascript",
          code: 'db.users.find({\n  $or: [{ age: { $lt: 18 } }, { verified: false }],\n});',
          description: "Kết hợp nhiều điều kiện bằng logic AND/OR.",
        },
      ],
    },
    {
      id: "aggregation-pipeline",
      title: "Aggregation Pipeline",
      snippets: [
        {
          id: "match-group",
          title: "$match + $group",
          language: "javascript",
          code: "db.orders.aggregate([\n  { $match: { status: \"completed\" } },\n  { $group: { _id: \"$userId\", total: { $sum: \"$amount\" } } },\n]);",
          description: "Lọc document trước ($match), sau đó gộp nhóm và tính tổng theo userId.",
        },
        {
          id: "sort-limit-stage",
          title: "$sort + $limit trong pipeline",
          language: "javascript",
          code: "db.orders.aggregate([\n  { $group: { _id: \"$userId\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } },\n  { $limit: 5 },\n]);",
          description: "Tìm top 5 user chi tiêu nhiều nhất bằng chuỗi stage nối tiếp.",
        },
        {
          id: "lookup-stage",
          title: "$lookup (join collection)",
          language: "javascript",
          code: "db.orders.aggregate([\n  {\n    $lookup: {\n      from: \"users\",\n      localField: \"userId\",\n      foreignField: \"_id\",\n      as: \"user\",\n    },\n  },\n]);",
          description: "Join dữ liệu từ collection khác, tương tự LEFT JOIN trong SQL.",
        },
      ],
    },
    {
      id: "indexes",
      title: "Indexes",
      snippets: [
        {
          id: "create-index",
          title: "Tạo index",
          language: "javascript",
          code: 'db.users.createIndex({ email: 1 }, { unique: true });',
          description: "1 = tăng dần; unique đảm bảo không có 2 document trùng giá trị field.",
        },
        {
          id: "explain-query",
          title: "Kiểm tra query có dùng index không",
          language: "javascript",
          code: 'db.users.find({ email: "an@example.com" }).explain("executionStats");',
          description: "Xem query có scan toàn bộ collection (COLLSCAN) hay dùng index (IXSCAN).",
        },
      ],
    },
    {
      id: "update-operators",
      title: "Update Operators",
      snippets: [
        {
          id: "update-set",
          title: "$set — cập nhật field",
          language: "javascript",
          code: 'db.users.updateOne(\n  { _id: userId },\n  { $set: { status: "active" } },\n);',
          description: "Chỉ cập nhật field chỉ định, giữ nguyên các field khác.",
        },
        {
          id: "update-inc-push",
          title: "$inc và $push",
          language: "javascript",
          code: 'db.posts.updateOne(\n  { _id: postId },\n  { $inc: { viewCount: 1 }, $push: { tags: "featured" } },\n);',
          description: "$inc tăng/giảm số, $push thêm phần tử vào mảng.",
        },
      ],
    },
  ],
};

export default mongodb;
