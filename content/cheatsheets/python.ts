import type { Cheatsheet } from "@/content/schema";

const python: Cheatsheet = {
  slug: "python",
  title: "Python",
  category: "language",
  description: {
    vi: "Cấu trúc dữ liệu, comprehension, hàm, class và xử lý ngoại lệ hay dùng.",
    en: "Data structures, comprehensions, functions, classes and common exception handling.",
  },
  status: "published",
  sections: [
    {
      id: "basics-data-structures",
      title: { vi: "Basics & Data Structures", en: "Basics & Data Structures" },
      snippets: [
        {
          id: "list-basics",
          title: { vi: "List cơ bản", en: "Basic lists" },
          language: "python",
          code: 'fruits = ["apple", "banana"]\nfruits.append("cherry")\nfruits[0]      # "apple"\nfruits[-1]     # "cherry"\nfruits[0:2]    # ["apple", "banana"]',
          description: {
            vi: "Tạo, thêm phần tử và cắt lát (slicing) trên list.",
            en: "Create, append to, and slice a list.",
          },
        },
        {
          id: "dict-basics",
          title: { vi: "Dict cơ bản", en: "Basic dicts" },
          language: "python",
          code: 'user = {"name": "An", "age": 25}\nuser.get("email", "chưa có")  # giá trị mặc định nếu thiếu key\nuser["age"] = 26',
          description: {
            vi: "Truy cập dict an toàn bằng .get() kèm giá trị mặc định thay vì bị KeyError.",
            en: "Safely access a dict with .get() and a default value instead of raising KeyError.",
          },
        },
        {
          id: "tuple-set",
          title: { vi: "Tuple & Set", en: "Tuple & Set" },
          language: "python",
          code: "point = (1, 2)          # immutable\nunique_ids = {1, 2, 2, 3}  # {1, 2, 3}",
          description: {
            vi: "Tuple không đổi được sau khi tạo; set tự loại bỏ phần tử trùng lặp.",
            en: "Tuples are immutable once created; sets automatically drop duplicate elements.",
          },
        },
      ],
    },
    {
      id: "comprehensions",
      title: { vi: "List/Dict Comprehension", en: "List/Dict Comprehension" },
      snippets: [
        {
          id: "list-comprehension",
          title: { vi: "List comprehension", en: "List comprehension" },
          language: "python",
          code: "squares = [n * n for n in range(5)]\n# [0, 1, 4, 9, 16]\nevens = [n for n in range(10) if n % 2 == 0]",
          description: {
            vi: "Tạo list mới ngắn gọn từ 1 iterable, có thể lọc kèm điều kiện if.",
            en: "Build a new list concisely from an iterable, optionally filtered with an if clause.",
          },
        },
        {
          id: "dict-comprehension",
          title: { vi: "Dict comprehension", en: "Dict comprehension" },
          language: "python",
          code: 'names = ["an", "binh"]\nlengths = {name: len(name) for name in names}\n# {"an": 2, "binh": 4}',
          description: {
            vi: "Tạo dict mới từ 1 iterable theo cặp key-value tuỳ biến.",
            en: "Build a new dict from an iterable with custom key-value pairs.",
          },
        },
        {
          id: "generator-expression",
          title: { vi: "Generator expression", en: "Generator expression" },
          language: "python",
          code: "total = sum(n * n for n in range(1000000))",
          description: {
            vi: "Giống list comprehension nhưng lười tính (lazy), tiết kiệm bộ nhớ với dữ liệu lớn.",
            en: "Like a list comprehension but lazily evaluated, saving memory for large data.",
          },
        },
      ],
    },
    {
      id: "functions-args",
      title: { vi: "Functions & Args", en: "Functions & Args" },
      snippets: [
        {
          id: "default-args",
          title: {
            vi: "Tham số mặc định + keyword-only",
            en: "Default parameters + keyword-only",
          },
          language: "python",
          code: 'def greet(name, greeting="Xin chào", *, loud=False):\n    msg = f"{greeting}, {name}"\n    return msg.upper() if loud else msg',
          description: {
            vi: "Tham số sau dấu * bắt buộc phải truyền theo tên (keyword-only argument).",
            en: "Parameters after * must be passed by name (keyword-only arguments).",
          },
        },
        {
          id: "args-kwargs",
          title: { vi: "*args và **kwargs", en: "*args and **kwargs" },
          language: "python",
          code: "def log(*args, **kwargs):\n    print(args)    # tuple các positional arg\n    print(kwargs)  # dict các keyword arg",
          description: {
            vi: "Nhận số lượng tham số vị trí/từ khoá tuỳ ý trong 1 hàm.",
            en: "Accept an arbitrary number of positional/keyword arguments in a function.",
          },
        },
        {
          id: "lambda",
          title: { vi: "Lambda function", en: "Lambda function" },
          language: "python",
          code: 'pairs = [(1, "b"), (2, "a")]\npairs.sort(key=lambda p: p[1])',
          description: {
            vi: "Hàm ẩn danh 1 dòng, thường dùng làm key cho sort/filter/map.",
            en: "A one-line anonymous function, often used as a key for sort/filter/map.",
          },
        },
      ],
    },
    {
      id: "classes-dataclasses",
      title: { vi: "Classes & Dataclasses", en: "Classes & Dataclasses" },
      snippets: [
        {
          id: "class-basics",
          title: { vi: "Class cơ bản", en: "Basic class" },
          language: "python",
          code: 'class User:\n    def __init__(self, name: str):\n        self.name = name\n\n    def greet(self) -> str:\n        return f"Xin chào {self.name}"',
          description: {
            vi: "__init__ là constructor, self tham chiếu tới instance hiện tại.",
            en: "__init__ is the constructor; self refers to the current instance.",
          },
        },
        {
          id: "dataclass",
          title: { vi: "dataclass", en: "dataclass" },
          language: "python",
          code: "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: float\n    y: float",
          description: {
            vi: "Tự sinh __init__, __repr__, __eq__ cho class chỉ chứa dữ liệu, giảm code lặp.",
            en: "Auto-generates __init__, __repr__, __eq__ for data-only classes, cutting boilerplate.",
          },
        },
        {
          id: "inheritance",
          title: { vi: "Kế thừa class", en: "Class inheritance" },
          language: "python",
          code: 'class Animal:\n    def speak(self) -> str:\n        return "..."\n\nclass Dog(Animal):\n    def speak(self) -> str:\n        return "Gâu"',
          description: {
            vi: "Override method của class cha bằng cách định nghĩa lại cùng tên ở class con.",
            en: "Override a parent class method by redefining it with the same name in the subclass.",
          },
        },
      ],
    },
    {
      id: "context-managers-exceptions",
      title: { vi: "Context Managers & Exceptions", en: "Context Managers & Exceptions" },
      snippets: [
        {
          id: "with-statement",
          title: { vi: "with statement", en: "with statement" },
          language: "python",
          code: 'with open("data.txt") as f:\n    content = f.read()\n# file tự đóng khi ra khỏi khối with',
          description: {
            vi: "Đảm bảo tài nguyên (file, connection) được giải phóng đúng cách, kể cả khi có lỗi.",
            en: "Ensure resources (files, connections) are released properly, even on error.",
          },
        },
        {
          id: "try-except-finally",
          title: { vi: "try/except/finally", en: "try/except/finally" },
          language: "python",
          code: 'try:\n    value = int(user_input)\nexcept ValueError as e:\n    print(f"Input không hợp lệ: {e}")\nfinally:\n    print("Đã xử lý xong")',
          description: {
            vi: "Bắt lỗi cụ thể (ValueError), finally luôn chạy dù có lỗi hay không.",
            en: "Catch a specific error (ValueError); finally always runs regardless of errors.",
          },
        },
        {
          id: "custom-exception",
          title: { vi: "Custom exception", en: "Custom exception" },
          language: "python",
          code: 'class InsufficientFundsError(Exception):\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError("Số dư không đủ")\n    return balance - amount',
          description: {
            vi: "Định nghĩa exception riêng cho domain, dễ phân biệt khi bắt lỗi ở tầng trên.",
            en: "Define a domain-specific exception, easy to distinguish when caught upstream.",
          },
        },
      ],
    },
  ],
};

export default python;
