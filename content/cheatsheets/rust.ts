import type { Cheatsheet } from "@/content/schema";

const rust: Cheatsheet = {
  slug: "rust",
  title: "Rust",
  category: "language",
  description: "Ownership/borrowing, struct/enum, pattern matching, Result/Option và trait/generic.",
  status: "published",
  sections: [
    {
      id: "variables-ownership",
      title: "Variables & Ownership",
      snippets: [
        {
          id: "immutable-mutable",
          title: "Biến immutable/mutable",
          language: "rust",
          code: "let age = 25;       // mặc định immutable\nlet mut count = 0;  // mut cho phép thay đổi\ncount += 1;",
          description: "Biến Rust mặc định không đổi được, phải khai báo mut nếu cần gán lại.",
        },
        {
          id: "ownership-move",
          title: "Ownership move",
          language: "rust",
          code: 'let s1 = String::from("hello");\nlet s2 = s1; // s1 bị move, không dùng được nữa\nprintln!("{}", s2);',
          description: "Gán String cho biến khác sẽ chuyển quyền sở hữu (move), biến gốc hết hiệu lực.",
        },
        {
          id: "borrowing-reference",
          title: "Borrowing (tham chiếu)",
          language: "rust",
          code: "fn print_length(s: &String) {\n    println!(\"Độ dài: {}\", s.len());\n}\n\nlet name = String::from(\"An\");\nprint_length(&name); // mượn, không mất ownership",
          description: "& mượn giá trị thay vì lấy ownership, sau khi hàm kết thúc biến gốc vẫn dùng được.",
        },
      ],
    },
    {
      id: "structs-enums",
      title: "Structs & Enums",
      snippets: [
        {
          id: "struct-basic",
          title: "Struct cơ bản",
          language: "rust",
          code: "struct User {\n    name: String,\n    age: u32,\n}\n\nlet user = User { name: String::from(\"An\"), age: 25 };",
          description: "Gom nhóm dữ liệu liên quan lại thành 1 kiểu có tên.",
        },
        {
          id: "enum-with-data",
          title: "Enum chứa dữ liệu",
          language: "rust",
          code: "enum Shape {\n    Circle(f64),\n    Rectangle(f64, f64),\n}\n\nlet c = Shape::Circle(2.5);",
          description: "Mỗi biến thể enum có thể mang theo dữ liệu riêng, mạnh hơn enum thông thường.",
        },
      ],
    },
    {
      id: "pattern-matching",
      title: "Pattern Matching",
      snippets: [
        {
          id: "match-expression",
          title: "match cơ bản",
          language: "rust",
          code: "fn area(shape: Shape) -> f64 {\n    match shape {\n        Shape::Circle(r) => 3.14 * r * r,\n        Shape::Rectangle(w, h) => w * h,\n    }\n}",
          description: "match bắt buộc xử lý đủ mọi biến thể (exhaustive), trình biên dịch báo lỗi nếu thiếu.",
        },
        {
          id: "if-let",
          title: "if let (match rút gọn)",
          language: "rust",
          code: "let maybe_number: Option<i32> = Some(5);\n\nif let Some(n) = maybe_number {\n    println!(\"Giá trị: {}\", n);\n}",
          description: "Chỉ quan tâm 1 nhánh match, ngắn gọn hơn viết match đầy đủ.",
        },
      ],
    },
    {
      id: "error-handling",
      title: "Error Handling (Result/Option)",
      snippets: [
        {
          id: "option-type",
          title: "Option<T>",
          language: "rust",
          code: "fn find_user(id: u32) -> Option<String> {\n    if id == 1 {\n        Some(String::from(\"An\"))\n    } else {\n        None\n    }\n}",
          description: "Option biểu diễn giá trị có thể có hoặc không (thay thế null).",
        },
        {
          id: "result-question-mark",
          title: "Result<T, E> + toán tử ?",
          language: "rust",
          code: "fn parse_age(input: &str) -> Result<u32, std::num::ParseIntError> {\n    let age = input.parse::<u32>()?;\n    Ok(age)\n}",
          description: "? tự động return lỗi sớm nếu Result là Err, giúp code ngắn gọn hơn xử lý match thủ công.",
        },
      ],
    },
    {
      id: "traits-generics",
      title: "Traits & Generics",
      snippets: [
        {
          id: "trait-definition",
          title: "Định nghĩa và implement trait",
          language: "rust",
          code: "trait Greet {\n    fn greet(&self) -> String;\n}\n\nimpl Greet for User {\n    fn greet(&self) -> String {\n        format!(\"Xin chào {}\", self.name)\n    }\n}",
          description: "Trait giống interface, định nghĩa hành vi chung mà nhiều kiểu có thể implement.",
        },
        {
          id: "generic-function-rust",
          title: "Hàm generic với trait bound",
          language: "rust",
          code: "fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {\n    let mut max = list[0];\n    for &item in list {\n        if item > max {\n            max = item;\n        }\n    }\n    max\n}",
          description: "Ràng buộc generic T phải implement PartialOrd + Copy để dùng được toán tử so sánh.",
        },
      ],
    },
  ],
};

export default rust;
