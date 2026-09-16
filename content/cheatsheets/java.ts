import type { Cheatsheet } from "@/content/schema";

const java: Cheatsheet = {
  slug: "java",
  title: "Java",
  category: "language",
  description: "Biến/kiểu dữ liệu, class/object, Collections, Streams API và xử lý exception.",
  status: "published",
  sections: [
    {
      id: "variables-types",
      title: "Variables & Types",
      snippets: [
        {
          id: "primitive-vs-wrapper",
          title: "Kiểu nguyên thuỷ vs wrapper",
          language: "java",
          code: "int age = 25;\nInteger boxedAge = 25; // wrapper class, dùng được với Collections\nvar name = \"An\"; // var suy luận kiểu (Java 10+)",
          description: "Wrapper class cần thiết khi dùng với generic (vd List<Integer>, không thể List<int>).",
        },
        {
          id: "final-variable",
          title: "final (hằng số)",
          language: "java",
          code: "final double PI = 3.14159;\n// PI = 3.14; // lỗi compile, không gán lại được",
          description: "final ngăn gán lại giá trị sau khi khởi tạo, tương tự const ở ngôn ngữ khác.",
        },
      ],
    },
    {
      id: "classes-objects",
      title: "Classes & Objects",
      snippets: [
        {
          id: "class-constructor",
          title: "Class + constructor",
          language: "java",
          code: "public class User {\n    private String name;\n\n    public User(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}",
          description: "Constructor cùng tên với class, this phân biệt field với tham số cùng tên.",
        },
        {
          id: "record-java",
          title: "record (Java 16+)",
          language: "java",
          code: "public record Point(double x, double y) {}\n\nPoint p = new Point(1.0, 2.0);\np.x(); // getter tự sinh",
          description: "Tự sinh constructor, getter, equals/hashCode/toString cho class chỉ chứa dữ liệu.",
        },
      ],
    },
    {
      id: "collections",
      title: "Collections (List/Map)",
      snippets: [
        {
          id: "list-basics-java",
          title: "List cơ bản",
          language: "java",
          code: 'List<String> names = new ArrayList<>();\nnames.add("An");\nnames.add("Binh");\nnames.get(0); // "An"',
          description: "ArrayList là implementation List phổ biến nhất, hỗ trợ truy cập theo index.",
        },
        {
          id: "map-basics-java",
          title: "Map cơ bản",
          language: "java",
          code: 'Map<String, Integer> ages = new HashMap<>();\nages.put("An", 25);\nint age = ages.getOrDefault("Binh", 0);',
          description: "getOrDefault tránh NullPointerException khi key không tồn tại.",
        },
      ],
    },
    {
      id: "streams-api",
      title: "Streams API",
      snippets: [
        {
          id: "stream-filter-map",
          title: "filter + map + collect",
          language: "java",
          code: 'List<String> result = names.stream()\n    .filter(n -> n.length() > 2)\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());',
          description: "Xử lý collection theo pipeline khai báo thay vì vòng lặp thủ công.",
        },
        {
          id: "stream-reduce",
          title: "reduce",
          language: "java",
          code: "int total = numbers.stream()\n    .reduce(0, Integer::sum);",
          description: "Gộp toàn bộ phần tử stream thành 1 giá trị duy nhất, có giá trị khởi tạo ban đầu.",
        },
      ],
    },
    {
      id: "exception-handling",
      title: "Exception Handling",
      snippets: [
        {
          id: "try-catch-finally-java",
          title: "try/catch/finally",
          language: "java",
          code: "try {\n    int result = 10 / divisor;\n} catch (ArithmeticException e) {\n    System.out.println(\"Lỗi: \" + e.getMessage());\n} finally {\n    System.out.println(\"Đã xử lý xong\");\n}",
          description: "Bắt lỗi cụ thể theo loại exception, finally luôn chạy dù có lỗi hay không.",
        },
        {
          id: "custom-exception-java",
          title: "Custom exception",
          language: "java",
          code: "public class InsufficientFundsException extends RuntimeException {\n    public InsufficientFundsException(String message) {\n        super(message);\n    }\n}",
          description: "Kế thừa RuntimeException (unchecked) hoặc Exception (checked) để tạo exception riêng cho domain.",
        },
      ],
    },
  ],
};

export default java;
