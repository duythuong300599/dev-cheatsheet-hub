import type { Cheatsheet } from "@/content/schema";

const python: Cheatsheet = {
  slug: "python",
  title: "Python",
  category: "language",
  description: "Cấu trúc dữ liệu, comprehension, hàm, class và xử lý ngoại lệ hay dùng.",
  status: "published",
  sections: [
    {
      id: "basics-data-structures",
      title: "Basics & Data Structures",
      snippets: [
        {
          id: "list-basics",
          title: "List cơ bản",
          language: "python",
          code: "fruits = [\"apple\", \"banana\"]\nfruits.append(\"cherry\")\nfruits[0]      # \"apple\"\nfruits[-1]     # \"cherry\"\nfruits[0:2]    # [\"apple\", \"banana\"]",
          description: "Tạo, thêm phần tử và cắt lát (slicing) trên list.",
        },
        {
          id: "dict-basics",
          title: "Dict cơ bản",
          language: "python",
          code: 'user = {"name": "An", "age": 25}\nuser.get("email", "chưa có")  # giá trị mặc định nếu thiếu key\nuser["age"] = 26',
          description: "Truy cập dict an toàn bằng .get() kèm giá trị mặc định thay vì bị KeyError.",
        },
        {
          id: "tuple-set",
          title: "Tuple & Set",
          language: "python",
          code: "point = (1, 2)          # immutable\nunique_ids = {1, 2, 2, 3}  # {1, 2, 3}",
          description: "Tuple không đổi được sau khi tạo; set tự loại bỏ phần tử trùng lặp.",
        },
      ],
    },
    {
      id: "comprehensions",
      title: "List/Dict Comprehension",
      snippets: [
        {
          id: "list-comprehension",
          title: "List comprehension",
          language: "python",
          code: "squares = [n * n for n in range(5)]\n# [0, 1, 4, 9, 16]\nevens = [n for n in range(10) if n % 2 == 0]",
          description: "Tạo list mới ngắn gọn từ 1 iterable, có thể lọc kèm điều kiện if.",
        },
        {
          id: "dict-comprehension",
          title: "Dict comprehension",
          language: "python",
          code: 'names = ["an", "binh"]\nlengths = {name: len(name) for name in names}\n# {"an": 2, "binh": 4}',
          description: "Tạo dict mới từ 1 iterable theo cặp key-value tuỳ biến.",
        },
        {
          id: "generator-expression",
          title: "Generator expression",
          language: "python",
          code: "total = sum(n * n for n in range(1000000))",
          description: "Giống list comprehension nhưng lười tính (lazy), tiết kiệm bộ nhớ với dữ liệu lớn.",
        },
      ],
    },
    {
      id: "functions-args",
      title: "Functions & Args",
      snippets: [
        {
          id: "default-args",
          title: "Tham số mặc định + keyword-only",
          language: "python",
          code: "def greet(name, greeting=\"Xin chào\", *, loud=False):\n    msg = f\"{greeting}, {name}\"\n    return msg.upper() if loud else msg",
          description: "Tham số sau dấu * bắt buộc phải truyền theo tên (keyword-only argument).",
        },
        {
          id: "args-kwargs",
          title: "*args và **kwargs",
          language: "python",
          code: "def log(*args, **kwargs):\n    print(args)    # tuple các positional arg\n    print(kwargs)  # dict các keyword arg",
          description: "Nhận số lượng tham số vị trí/từ khoá tuỳ ý trong 1 hàm.",
        },
        {
          id: "lambda",
          title: "Lambda function",
          language: "python",
          code: "pairs = [(1, \"b\"), (2, \"a\")]\npairs.sort(key=lambda p: p[1])",
          description: "Hàm ẩn danh 1 dòng, thường dùng làm key cho sort/filter/map.",
        },
      ],
    },
    {
      id: "classes-dataclasses",
      title: "Classes & Dataclasses",
      snippets: [
        {
          id: "class-basics",
          title: "Class cơ bản",
          language: "python",
          code: "class User:\n    def __init__(self, name: str):\n        self.name = name\n\n    def greet(self) -> str:\n        return f\"Xin chào {self.name}\"",
          description: "__init__ là constructor, self tham chiếu tới instance hiện tại.",
        },
        {
          id: "dataclass",
          title: "dataclass",
          language: "python",
          code: "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: float\n    y: float",
          description: "Tự sinh __init__, __repr__, __eq__ cho class chỉ chứa dữ liệu, giảm code lặp.",
        },
        {
          id: "inheritance",
          title: "Kế thừa class",
          language: "python",
          code: "class Animal:\n    def speak(self) -> str:\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self) -> str:\n        return \"Gâu\"",
          description: "Override method của class cha bằng cách định nghĩa lại cùng tên ở class con.",
        },
      ],
    },
    {
      id: "context-managers-exceptions",
      title: "Context Managers & Exceptions",
      snippets: [
        {
          id: "with-statement",
          title: "with statement",
          language: "python",
          code: 'with open("data.txt") as f:\n    content = f.read()\n# file tự đóng khi ra khỏi khối with',
          description: "Đảm bảo tài nguyên (file, connection) được giải phóng đúng cách, kể cả khi có lỗi.",
        },
        {
          id: "try-except-finally",
          title: "try/except/finally",
          language: "python",
          code: 'try:\n    value = int(user_input)\nexcept ValueError as e:\n    print(f"Input không hợp lệ: {e}")\nfinally:\n    print("Đã xử lý xong")',
          description: "Bắt lỗi cụ thể (ValueError), finally luôn chạy dù có lỗi hay không.",
        },
        {
          id: "custom-exception",
          title: "Custom exception",
          language: "python",
          code: 'class InsufficientFundsError(Exception):\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError("Số dư không đủ")\n    return balance - amount',
          description: "Định nghĩa exception riêng cho domain, dễ phân biệt khi bắt lỗi ở tầng trên.",
        },
      ],
    },
  ],
};

export default python;
