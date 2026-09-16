import type { Cheatsheet } from "@/content/schema";

const java: Cheatsheet = {
  slug: "java",
  title: "Java",
  category: "language",
  description: {
    vi: "Biến/kiểu dữ liệu, class/object, Collections, Streams API và xử lý exception.",
    en: "Variables/types, classes/objects, Collections, the Streams API and exception handling.",
  },
  status: "published",
  sections: [
    {
      id: "variables-types",
      title: { vi: "Variables & Types", en: "Variables & Types" },
      snippets: [
        {
          id: "primitive-vs-wrapper",
          title: { vi: "Kiểu nguyên thuỷ vs wrapper", en: "Primitive vs wrapper types" },
          language: "java",
          code: 'int age = 25;\nInteger boxedAge = 25; // wrapper class, dùng được với Collections\nvar name = "An"; // var suy luận kiểu (Java 10+)',
          description: {
            vi: "Wrapper class cần thiết khi dùng với generic (vd List<Integer>, không thể List<int>).",
            en: "Wrapper classes are needed with generics (e.g. List<Integer>, since List<int> is invalid).",
          },
        },
        {
          id: "final-variable",
          title: { vi: "final (hằng số)", en: "final (constants)" },
          language: "java",
          code: "final double PI = 3.14159;\n// PI = 3.14; // lỗi compile, không gán lại được",
          description: {
            vi: "final ngăn gán lại giá trị sau khi khởi tạo, tương tự const ở ngôn ngữ khác.",
            en: "final prevents reassignment after initialization, similar to const in other languages.",
          },
        },
      ],
    },
    {
      id: "classes-objects",
      title: { vi: "Classes & Objects", en: "Classes & Objects" },
      snippets: [
        {
          id: "class-constructor",
          title: { vi: "Class + constructor", en: "Class + constructor" },
          language: "java",
          code: "public class User {\n    private String name;\n\n    public User(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}",
          description: {
            vi: "Constructor cùng tên với class, this phân biệt field với tham số cùng tên.",
            en: "A constructor shares the class name; this distinguishes a field from a same-named parameter.",
          },
        },
        {
          id: "record-java",
          title: { vi: "record (Java 16+)", en: "record (Java 16+)" },
          language: "java",
          code: "public record Point(double x, double y) {}\n\nPoint p = new Point(1.0, 2.0);\np.x(); // getter tự sinh",
          description: {
            vi: "Tự sinh constructor, getter, equals/hashCode/toString cho class chỉ chứa dữ liệu.",
            en: "Auto-generates the constructor, getters, and equals/hashCode/toString for data-only classes.",
          },
        },
      ],
    },
    {
      id: "collections",
      title: { vi: "Collections (List/Map)", en: "Collections (List/Map)" },
      snippets: [
        {
          id: "list-basics-java",
          title: { vi: "List cơ bản", en: "Basic lists" },
          language: "java",
          code: 'List<String> names = new ArrayList<>();\nnames.add("An");\nnames.add("Binh");\nnames.get(0); // "An"',
          description: {
            vi: "ArrayList là implementation List phổ biến nhất, hỗ trợ truy cập theo index.",
            en: "ArrayList is the most common List implementation, supporting index-based access.",
          },
        },
        {
          id: "map-basics-java",
          title: { vi: "Map cơ bản", en: "Basic maps" },
          language: "java",
          code: 'Map<String, Integer> ages = new HashMap<>();\nages.put("An", 25);\nint age = ages.getOrDefault("Binh", 0);',
          description: {
            vi: "getOrDefault tránh NullPointerException khi key không tồn tại.",
            en: "getOrDefault avoids a NullPointerException when the key doesn't exist.",
          },
        },
      ],
    },
    {
      id: "streams-api",
      title: { vi: "Streams API", en: "Streams API" },
      snippets: [
        {
          id: "stream-filter-map",
          title: { vi: "filter + map + collect", en: "filter + map + collect" },
          language: "java",
          code: "List<String> result = names.stream()\n    .filter(n -> n.length() > 2)\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());",
          description: {
            vi: "Xử lý collection theo pipeline khai báo thay vì vòng lặp thủ công.",
            en: "Process a collection with a declarative pipeline instead of a manual loop.",
          },
        },
        {
          id: "stream-reduce",
          title: { vi: "reduce", en: "reduce" },
          language: "java",
          code: "int total = numbers.stream()\n    .reduce(0, Integer::sum);",
          description: {
            vi: "Gộp toàn bộ phần tử stream thành 1 giá trị duy nhất, có giá trị khởi tạo ban đầu.",
            en: "Combine all stream elements into a single value, with an initial seed value.",
          },
        },
      ],
    },
    {
      id: "exception-handling",
      title: { vi: "Exception Handling", en: "Exception Handling" },
      snippets: [
        {
          id: "try-catch-finally-java",
          title: { vi: "try/catch/finally", en: "try/catch/finally" },
          language: "java",
          code: 'try {\n    int result = 10 / divisor;\n} catch (ArithmeticException e) {\n    System.out.println("Lỗi: " + e.getMessage());\n} finally {\n    System.out.println("Đã xử lý xong");\n}',
          description: {
            vi: "Bắt lỗi cụ thể theo loại exception, finally luôn chạy dù có lỗi hay không.",
            en: "Catch a specific exception type; finally always runs regardless of errors.",
          },
        },
        {
          id: "custom-exception-java",
          title: { vi: "Custom exception", en: "Custom exception" },
          language: "java",
          code: "public class InsufficientFundsException extends RuntimeException {\n    public InsufficientFundsException(String message) {\n        super(message);\n    }\n}",
          description: {
            vi: "Kế thừa RuntimeException (unchecked) hoặc Exception (checked) để tạo exception riêng cho domain.",
            en: "Extend RuntimeException (unchecked) or Exception (checked) to create a domain-specific exception.",
          },
        },
      ],
    },
  ],
};

export default java;
