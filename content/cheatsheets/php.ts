import type { Cheatsheet } from "@/content/schema";

const php: Cheatsheet = {
  slug: "php",
  title: "PHP",
  category: "language",
  description: {
    vi: "Biến/kiểu dữ liệu, mảng, hàm, class/interface và xử lý exception cơ bản.",
    en: "Variables/types, arrays, functions, classes/interfaces and basic exception handling.",
  },
  status: "published",
  sections: [
    {
      id: "variables-types",
      title: { vi: "Variables & Types", en: "Variables & Types" },
      snippets: [
        {
          id: "variable-basic-php",
          title: { vi: "Khai báo biến + type hint", en: "Declaring variables + type hints" },
          language: "php",
          code: '<?php\ndeclare(strict_types=1);\n\nfunction greet(string $name): string {\n    return "Xin chào {$name}";\n}',
          description: {
            vi: "strict_types=1 buộc PHP kiểm tra kiểu tham số/return nghiêm ngặt, không tự ép kiểu ngầm.",
            en: "strict_types=1 forces PHP to strictly check parameter/return types instead of implicit coercion.",
          },
        },
        {
          id: "nullable-union-type",
          title: { vi: "Nullable & union type", en: "Nullable & union types" },
          language: "php",
          code: 'function findUser(int $id): ?array {\n    return $id === 1 ? ["name" => "An"] : null;\n}\n\nfunction format(int|string $value): string {\n    return (string) $value;\n}',
          description: {
            vi: "?type cho phép null; type1|type2 (PHP 8+) cho phép nhiều kiểu.",
            en: "?type allows null; type1|type2 (PHP 8+) allows multiple types.",
          },
        },
      ],
    },
    {
      id: "arrays",
      title: { vi: "Arrays", en: "Arrays" },
      snippets: [
        {
          id: "indexed-associative-array",
          title: { vi: "Mảng chỉ số vs mảng kết hợp", en: "Indexed vs associative arrays" },
          language: "php",
          code: '$fruits = ["apple", "banana"];\n$user = ["name" => "An", "age" => 25];\necho $user["name"];',
          description: {
            vi: "Mảng PHP vừa có thể đánh số tự động vừa dùng key dạng chuỗi (associative).",
            en: "PHP arrays can be auto-indexed or use string keys (associative).",
          },
        },
        {
          id: "array-map-filter",
          title: { vi: "array_map / array_filter", en: "array_map / array_filter" },
          language: "php",
          code: '$doubled = array_map(fn($n) => $n * 2, [1, 2, 3]);\n$evens = array_filter([1, 2, 3, 4], fn($n) => $n % 2 === 0);',
          description: {
            vi: "Biến đổi và lọc mảng theo hàm callback, tương tự map/filter ở JS.",
            en: "Transform and filter arrays with a callback, similar to map/filter in JS.",
          },
        },
      ],
    },
    {
      id: "functions-arrow",
      title: { vi: "Functions & Arrow Functions", en: "Functions & Arrow Functions" },
      snippets: [
        {
          id: "default-named-args",
          title: {
            vi: "Tham số mặc định + named argument",
            en: "Default parameters + named arguments",
          },
          language: "php",
          code: 'function createUser(string $name, string $role = "member") {\n    return ["name" => $name, "role" => $role];\n}\n\ncreateUser(name: "An", role: "admin");',
          description: {
            vi: "Named argument (PHP 8+) cho phép truyền tham số theo tên, bỏ qua thứ tự.",
            en: "Named arguments (PHP 8+) let you pass parameters by name, regardless of order.",
          },
        },
        {
          id: "arrow-function",
          title: { vi: "Arrow function (fn)", en: "Arrow function (fn)" },
          language: "php",
          code: "$multiplier = 3;\n$triple = fn($n) => $n * $multiplier;\necho $triple(5); // 15",
          description: {
            vi: "fn tự động capture biến bên ngoài (không cần use như closure thường).",
            en: "fn automatically captures outer variables (no need for use like a regular closure).",
          },
        },
      ],
    },
    {
      id: "classes-interfaces",
      title: { vi: "Classes & Interfaces", en: "Classes & Interfaces" },
      snippets: [
        {
          id: "constructor-promotion",
          title: { vi: "Constructor property promotion", en: "Constructor property promotion" },
          language: "php",
          code: "class User {\n    public function __construct(\n        private string $name,\n        private int $age = 0,\n    ) {}\n\n    public function getName(): string {\n        return $this->name;\n    }\n}",
          description: {
            vi: "PHP 8+ cho phép khai báo và gán property ngay trong constructor, không cần lặp lại.",
            en: "PHP 8+ lets you declare and assign properties directly in the constructor, avoiding repetition.",
          },
        },
        {
          id: "interface-implement",
          title: { vi: "Interface", en: "Interface" },
          language: "php",
          code: "interface Payable {\n    public function pay(float $amount): bool;\n}\n\nclass CreditCard implements Payable {\n    public function pay(float $amount): bool {\n        return true;\n    }\n}",
          description: {
            vi: "Interface định nghĩa hợp đồng phương thức, class implements phải hiện thực đủ.",
            en: "An interface defines a method contract; implementing classes must fulfill it fully.",
          },
        },
      ],
    },
    {
      id: "error-handling",
      title: { vi: "Error Handling", en: "Error Handling" },
      snippets: [
        {
          id: "try-catch-php",
          title: { vi: "try/catch", en: "try/catch" },
          language: "php",
          code: 'try {\n    $result = 10 / $divisor;\n} catch (DivisionByZeroError $e) {\n    echo "Lỗi: " . $e->getMessage();\n} finally {\n    echo "Đã xử lý xong";\n}',
          description: {
            vi: "Bắt lỗi cụ thể theo loại Error/Exception, finally luôn chạy sau cùng.",
            en: "Catch a specific Error/Exception type; finally always runs last.",
          },
        },
        {
          id: "custom-exception-php",
          title: { vi: "Custom exception", en: "Custom exception" },
          language: "php",
          code: "class InsufficientFundsException extends \\Exception {}\n\nfunction withdraw(float $balance, float $amount): float {\n    if ($amount > $balance) {\n        throw new InsufficientFundsException(\"Số dư không đủ\");\n    }\n    return $balance - $amount;\n}",
          description: {
            vi: "Kế thừa \\Exception để tạo exception riêng, dễ phân biệt khi bắt lỗi ở tầng trên.",
            en: "Extend \\Exception to create a custom exception, easy to distinguish when caught upstream.",
          },
        },
      ],
    },
  ],
};

export default php;
