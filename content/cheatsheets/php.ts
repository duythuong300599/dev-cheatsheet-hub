import type { Cheatsheet } from "@/content/schema";

const php: Cheatsheet = {
  slug: "php",
  title: "PHP",
  category: "language",
  description: "Biến/kiểu dữ liệu, mảng, hàm, class/interface và xử lý exception cơ bản.",
  status: "published",
  sections: [
    {
      id: "variables-types",
      title: "Variables & Types",
      snippets: [
        {
          id: "variable-basic-php",
          title: "Khai báo biến + type hint",
          language: "php",
          code: '<?php\ndeclare(strict_types=1);\n\nfunction greet(string $name): string {\n    return "Xin chào {$name}";\n}',
          description: "strict_types=1 buộc PHP kiểm tra kiểu tham số/return nghiêm ngặt, không tự ép kiểu ngầm.",
        },
        {
          id: "nullable-union-type",
          title: "Nullable & union type",
          language: "php",
          code: "function findUser(int $id): ?array {\n    return $id === 1 ? [\"name\" => \"An\"] : null;\n}\n\nfunction format(int|string $value): string {\n    return (string) $value;\n}",
          description: "?type cho phép null; type1|type2 (PHP 8+) cho phép nhiều kiểu.",
        },
      ],
    },
    {
      id: "arrays",
      title: "Arrays",
      snippets: [
        {
          id: "indexed-associative-array",
          title: "Mảng chỉ số vs mảng kết hợp",
          language: "php",
          code: '$fruits = ["apple", "banana"];\n$user = ["name" => "An", "age" => 25];\necho $user["name"];',
          description: "Mảng PHP vừa có thể đánh số tự động vừa dùng key dạng chuỗi (associative).",
        },
        {
          id: "array-map-filter",
          title: "array_map / array_filter",
          language: "php",
          code: '$doubled = array_map(fn($n) => $n * 2, [1, 2, 3]);\n$evens = array_filter([1, 2, 3, 4], fn($n) => $n % 2 === 0);',
          description: "Biến đổi và lọc mảng theo hàm callback, tương tự map/filter ở JS.",
        },
      ],
    },
    {
      id: "functions-arrow",
      title: "Functions & Arrow Functions",
      snippets: [
        {
          id: "default-named-args",
          title: "Tham số mặc định + named argument",
          language: "php",
          code: 'function createUser(string $name, string $role = "member") {\n    return ["name" => $name, "role" => $role];\n}\n\ncreateUser(name: "An", role: "admin");',
          description: "Named argument (PHP 8+) cho phép truyền tham số theo tên, bỏ qua thứ tự.",
        },
        {
          id: "arrow-function",
          title: "Arrow function (fn)",
          language: "php",
          code: "$multiplier = 3;\n$triple = fn($n) => $n * $multiplier;\necho $triple(5); // 15",
          description: "fn tự động capture biến bên ngoài (không cần use như closure thường).",
        },
      ],
    },
    {
      id: "classes-interfaces",
      title: "Classes & Interfaces",
      snippets: [
        {
          id: "constructor-promotion",
          title: "Constructor property promotion",
          language: "php",
          code: "class User {\n    public function __construct(\n        private string $name,\n        private int $age = 0,\n    ) {}\n\n    public function getName(): string {\n        return $this->name;\n    }\n}",
          description: "PHP 8+ cho phép khai báo và gán property ngay trong constructor, không cần lặp lại.",
        },
        {
          id: "interface-implement",
          title: "Interface",
          language: "php",
          code: "interface Payable {\n    public function pay(float $amount): bool;\n}\n\nclass CreditCard implements Payable {\n    public function pay(float $amount): bool {\n        return true;\n    }\n}",
          description: "Interface định nghĩa hợp đồng phương thức, class implements phải hiện thực đủ.",
        },
      ],
    },
    {
      id: "error-handling",
      title: "Error Handling",
      snippets: [
        {
          id: "try-catch-php",
          title: "try/catch",
          language: "php",
          code: 'try {\n    $result = 10 / $divisor;\n} catch (DivisionByZeroError $e) {\n    echo "Lỗi: " . $e->getMessage();\n} finally {\n    echo "Đã xử lý xong";\n}',
          description: "Bắt lỗi cụ thể theo loại Error/Exception, finally luôn chạy sau cùng.",
        },
        {
          id: "custom-exception-php",
          title: "Custom exception",
          language: "php",
          code: "class InsufficientFundsException extends \\Exception {}\n\nfunction withdraw(float $balance, float $amount): float {\n    if ($amount > $balance) {\n        throw new InsufficientFundsException(\"Số dư không đủ\");\n    }\n    return $balance - $amount;\n}",
          description: "Kế thừa \\Exception để tạo exception riêng, dễ phân biệt khi bắt lỗi ở tầng trên.",
        },
      ],
    },
  ],
};

export default php;
