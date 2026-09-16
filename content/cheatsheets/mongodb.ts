import type { Cheatsheet } from "@/content/schema";

const mongodb: Cheatsheet = {
  slug: "mongodb",
  title: "MongoDB",
  category: "database",
  description: {
    vi: "CRUD cơ bản, toán tử truy vấn, aggregation pipeline, index và toán tử update.",
    en: "Basic CRUD, query operators, aggregation pipeline, indexes and update operators.",
  },
  status: "published",
  sections: [
    {
      id: "crud-basics",
      title: { vi: "CRUD Basics", en: "CRUD Basics" },
      snippets: [
        {
          id: "insert-one-many",
          title: { vi: "insertOne / insertMany", en: "insertOne / insertMany" },
          language: "javascript",
          code: 'db.users.insertOne({ name: "An", age: 25 });\ndb.users.insertMany([\n  { name: "Binh", age: 30 },\n  { name: "Chi", age: 22 },\n]);',
          description: {
            vi: "Thêm 1 hoặc nhiều document vào collection.",
            en: "Insert one or multiple documents into a collection.",
          },
        },
        {
          id: "find-basic",
          title: { vi: "find với điều kiện", en: "find with a condition" },
          language: "javascript",
          code: "db.users.find({ age: { $gte: 18 } }).sort({ age: -1 }).limit(10);",
          description: {
            vi: "Lọc, sắp xếp giảm dần và giới hạn số document trả về.",
            en: "Filter, sort descending, and limit the number of documents returned.",
          },
        },
        {
          id: "find-one",
          title: { vi: "findOne", en: "findOne" },
          language: "javascript",
          code: 'db.users.findOne({ email: "an@example.com" });',
          description: {
            vi: "Trả về document đầu tiên khớp điều kiện, hoặc null nếu không có.",
            en: "Return the first matching document, or null if none is found.",
          },
        },
      ],
    },
    {
      id: "query-operators",
      title: { vi: "Query Operators", en: "Query Operators" },
      snippets: [
        {
          id: "comparison-operators",
          title: { vi: "Toán tử so sánh", en: "Comparison operators" },
          language: "javascript",
          code: "db.products.find({ price: { $gt: 100000, $lte: 500000 } });",
          description: {
            vi: "$gt, $gte, $lt, $lte, $ne dùng để so sánh giá trị field.",
            en: "$gt, $gte, $lt, $lte, $ne are used to compare field values.",
          },
        },
        {
          id: "in-operator",
          title: { vi: "$in / $nin", en: "$in / $nin" },
          language: "javascript",
          code: 'db.users.find({ role: { $in: ["admin", "editor"] } });',
          description: {
            vi: "Kiểm tra giá trị field có thuộc (hoặc không thuộc) 1 danh sách cho trước.",
            en: "Check whether a field's value is (or isn't) in a given list.",
          },
        },
        {
          id: "logical-operators",
          title: { vi: "$and / $or", en: "$and / $or" },
          language: "javascript",
          code: "db.users.find({\n  $or: [{ age: { $lt: 18 } }, { verified: false }],\n});",
          description: {
            vi: "Kết hợp nhiều điều kiện bằng logic AND/OR.",
            en: "Combine multiple conditions with AND/OR logic.",
          },
        },
      ],
    },
    {
      id: "aggregation-pipeline",
      title: { vi: "Aggregation Pipeline", en: "Aggregation Pipeline" },
      snippets: [
        {
          id: "match-group",
          title: { vi: "$match + $group", en: "$match + $group" },
          language: "javascript",
          code: 'db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } },\n]);',
          description: {
            vi: "Lọc document trước ($match), sau đó gộp nhóm và tính tổng theo userId.",
            en: "Filter documents first ($match), then group and sum by userId.",
          },
        },
        {
          id: "sort-limit-stage",
          title: { vi: "$sort + $limit trong pipeline", en: "$sort + $limit in a pipeline" },
          language: "javascript",
          code: 'db.orders.aggregate([\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } },\n  { $sort: { total: -1 } },\n  { $limit: 5 },\n]);',
          description: {
            vi: "Tìm top 5 user chi tiêu nhiều nhất bằng chuỗi stage nối tiếp.",
            en: "Find the top 5 highest-spending users with a chain of stages.",
          },
        },
        {
          id: "lookup-stage",
          title: { vi: "$lookup (join collection)", en: "$lookup (joining a collection)" },
          language: "javascript",
          code: 'db.orders.aggregate([\n  {\n    $lookup: {\n      from: "users",\n      localField: "userId",\n      foreignField: "_id",\n      as: "user",\n    },\n  },\n]);',
          description: {
            vi: "Join dữ liệu từ collection khác, tương tự LEFT JOIN trong SQL.",
            en: "Join data from another collection, similar to a LEFT JOIN in SQL.",
          },
        },
      ],
    },
    {
      id: "indexes",
      title: { vi: "Indexes", en: "Indexes" },
      snippets: [
        {
          id: "create-index",
          title: { vi: "Tạo index", en: "Creating an index" },
          language: "javascript",
          code: "db.users.createIndex({ email: 1 }, { unique: true });",
          description: {
            vi: "1 = tăng dần; unique đảm bảo không có 2 document trùng giá trị field.",
            en: "1 = ascending; unique ensures no two documents share the same field value.",
          },
        },
        {
          id: "explain-query",
          title: { vi: "Kiểm tra query có dùng index không", en: "Checking whether a query uses an index" },
          language: "javascript",
          code: 'db.users.find({ email: "an@example.com" }).explain("executionStats");',
          description: {
            vi: "Xem query có scan toàn bộ collection (COLLSCAN) hay dùng index (IXSCAN).",
            en: "See whether a query does a full collection scan (COLLSCAN) or uses an index (IXSCAN).",
          },
        },
      ],
    },
    {
      id: "update-operators",
      title: { vi: "Update Operators", en: "Update Operators" },
      snippets: [
        {
          id: "update-set",
          title: { vi: "$set — cập nhật field", en: "$set — updating a field" },
          language: "javascript",
          code: 'db.users.updateOne(\n  { _id: userId },\n  { $set: { status: "active" } },\n);',
          description: {
            vi: "Chỉ cập nhật field chỉ định, giữ nguyên các field khác.",
            en: "Only update the specified field, leaving the others unchanged.",
          },
        },
        {
          id: "update-inc-push",
          title: { vi: "$inc và $push", en: "$inc and $push" },
          language: "javascript",
          code: 'db.posts.updateOne(\n  { _id: postId },\n  { $inc: { viewCount: 1 }, $push: { tags: "featured" } },\n);',
          description: {
            vi: "$inc tăng/giảm số, $push thêm phần tử vào mảng.",
            en: "$inc increments/decrements a number, $push adds an element to an array.",
          },
        },
      ],
    },
  ],
};

export default mongodb;
