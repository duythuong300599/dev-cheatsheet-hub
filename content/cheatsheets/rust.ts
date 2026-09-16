import type { Cheatsheet } from "@/content/schema";

const rust: Cheatsheet = {
  slug: "rust",
  title: "Rust",
  category: "language",
  description: {
    vi: "Ownership/borrowing, struct/enum, pattern matching, Result/Option và trait/generic.",
    en: "Ownership/borrowing, structs/enums, pattern matching, Result/Option and traits/generics.",
  },
  status: "published",
  sections: [
    {
      id: "variables-ownership",
      title: { vi: "Variables & Ownership", en: "Variables & Ownership" },
      snippets: [
        {
          id: "immutable-mutable",
          title: { vi: "Biến immutable/mutable", en: "Immutable/mutable variables" },
          language: "rust",
          code: "let age = 25;       // mặc định immutable\nlet mut count = 0;  // mut cho phép thay đổi\ncount += 1;",
          description: {
            vi: "Biến Rust mặc định không đổi được, phải khai báo mut nếu cần gán lại.",
            en: "Rust variables are immutable by default; declare mut if you need to reassign.",
          },
        },
        {
          id: "ownership-move",
          title: { vi: "Ownership move", en: "Ownership move" },
          language: "rust",
          code: 'let s1 = String::from("hello");\nlet s2 = s1; // s1 bị move, không dùng được nữa\nprintln!("{}", s2);',
          description: {
            vi: "Gán String cho biến khác sẽ chuyển quyền sở hữu (move), biến gốc hết hiệu lực.",
            en: "Assigning a String to another variable moves ownership; the original variable becomes invalid.",
          },
        },
        {
          id: "borrowing-reference",
          title: { vi: "Borrowing (tham chiếu)", en: "Borrowing (references)" },
          language: "rust",
          code: "fn print_length(s: &String) {\n    println!(\"Độ dài: {}\", s.len());\n}\n\nlet name = String::from(\"An\");\nprint_length(&name); // mượn, không mất ownership",
          description: {
            vi: "& mượn giá trị thay vì lấy ownership, sau khi hàm kết thúc biến gốc vẫn dùng được.",
            en: "& borrows a value instead of taking ownership — the original variable is still usable after the call.",
          },
        },
      ],
    },
    {
      id: "structs-enums",
      title: { vi: "Structs & Enums", en: "Structs & Enums" },
      snippets: [
        {
          id: "struct-basic",
          title: { vi: "Struct cơ bản", en: "Basic struct" },
          language: "rust",
          code: 'struct User {\n    name: String,\n    age: u32,\n}\n\nlet user = User { name: String::from("An"), age: 25 };',
          description: {
            vi: "Gom nhóm dữ liệu liên quan lại thành 1 kiểu có tên.",
            en: "Group related data into a single named type.",
          },
        },
        {
          id: "enum-with-data",
          title: { vi: "Enum chứa dữ liệu", en: "Enum with associated data" },
          language: "rust",
          code: "enum Shape {\n    Circle(f64),\n    Rectangle(f64, f64),\n}\n\nlet c = Shape::Circle(2.5);",
          description: {
            vi: "Mỗi biến thể enum có thể mang theo dữ liệu riêng, mạnh hơn enum thông thường.",
            en: "Each enum variant can carry its own data, more powerful than a plain enum.",
          },
        },
      ],
    },
    {
      id: "pattern-matching",
      title: { vi: "Pattern Matching", en: "Pattern Matching" },
      snippets: [
        {
          id: "match-expression",
          title: { vi: "match cơ bản", en: "Basic match" },
          language: "rust",
          code: "fn area(shape: Shape) -> f64 {\n    match shape {\n        Shape::Circle(r) => 3.14 * r * r,\n        Shape::Rectangle(w, h) => w * h,\n    }\n}",
          description: {
            vi: "match bắt buộc xử lý đủ mọi biến thể (exhaustive), trình biên dịch báo lỗi nếu thiếu.",
            en: "match must handle every variant (exhaustive); the compiler errors if one is missing.",
          },
        },
        {
          id: "if-let",
          title: { vi: "if let (match rút gọn)", en: "if let (shorthand match)" },
          language: "rust",
          code: "let maybe_number: Option<i32> = Some(5);\n\nif let Some(n) = maybe_number {\n    println!(\"Giá trị: {}\", n);\n}",
          description: {
            vi: "Chỉ quan tâm 1 nhánh match, ngắn gọn hơn viết match đầy đủ.",
            en: "Care about only one match branch — more concise than a full match.",
          },
        },
      ],
    },
    {
      id: "error-handling",
      title: { vi: "Error Handling (Result/Option)", en: "Error Handling (Result/Option)" },
      snippets: [
        {
          id: "option-type",
          title: { vi: "Option<T>", en: "Option<T>" },
          language: "rust",
          code: 'fn find_user(id: u32) -> Option<String> {\n    if id == 1 {\n        Some(String::from("An"))\n    } else {\n        None\n    }\n}',
          description: {
            vi: "Option biểu diễn giá trị có thể có hoặc không (thay thế null).",
            en: "Option represents a value that may or may not exist (a replacement for null).",
          },
        },
        {
          id: "result-question-mark",
          title: { vi: "Result<T, E> + toán tử ?", en: "Result<T, E> + the ? operator" },
          language: "rust",
          code: "fn parse_age(input: &str) -> Result<u32, std::num::ParseIntError> {\n    let age = input.parse::<u32>()?;\n    Ok(age)\n}",
          description: {
            vi: "? tự động return lỗi sớm nếu Result là Err, giúp code ngắn gọn hơn xử lý match thủ công.",
            en: "? automatically returns early on Err, making code shorter than manual match handling.",
          },
        },
      ],
    },
    {
      id: "traits-generics",
      title: { vi: "Traits & Generics", en: "Traits & Generics" },
      snippets: [
        {
          id: "trait-definition",
          title: { vi: "Định nghĩa và implement trait", en: "Defining and implementing a trait" },
          language: "rust",
          code: "trait Greet {\n    fn greet(&self) -> String;\n}\n\nimpl Greet for User {\n    fn greet(&self) -> String {\n        format!(\"Xin chào {}\", self.name)\n    }\n}",
          description: {
            vi: "Trait giống interface, định nghĩa hành vi chung mà nhiều kiểu có thể implement.",
            en: "A trait is like an interface, defining shared behavior that many types can implement.",
          },
        },
        {
          id: "generic-function-rust",
          title: { vi: "Hàm generic với trait bound", en: "Generic function with a trait bound" },
          language: "rust",
          code: "fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {\n    let mut max = list[0];\n    for &item in list {\n        if item > max {\n            max = item;\n        }\n    }\n    max\n}",
          description: {
            vi: "Ràng buộc generic T phải implement PartialOrd + Copy để dùng được toán tử so sánh.",
            en: "Constrain generic T to implement PartialOrd + Copy so comparison operators can be used.",
          },
        },
      ],
    },
  ],
};

export default rust;
