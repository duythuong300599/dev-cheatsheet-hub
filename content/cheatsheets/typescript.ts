import type { Cheatsheet } from "@/content/schema";

const typescript: Cheatsheet = {
  slug: "typescript",
  title: "TypeScript",
  category: "language",
  description: "Type cơ bản, interface, generic, utility type và type narrowing hay dùng.",
  status: "published",
  sections: [
    {
      id: "type-basics",
      title: "Type Basics",
      snippets: [
        {
          id: "primitive-types",
          title: "Kiểu nguyên thuỷ",
          language: "typescript",
          code: "let age: number = 25;\nlet name: string = \"An\";\nlet isActive: boolean = true;\nlet ids: number[] = [1, 2, 3];\nlet tuple: [string, number] = [\"x\", 1];",
          description: "Khai báo type tường minh cho biến, mảng và tuple (mảng có số phần tử/kiểu cố định).",
        },
        {
          id: "union-type",
          title: "Union type",
          language: "typescript",
          code: 'type Status = "idle" | "loading" | "success" | "error";\nlet current: Status = "idle";',
          description: "Giới hạn giá trị biến chỉ được là 1 trong các kiểu/literal liệt kê.",
        },
        {
          id: "type-alias-vs-interface",
          title: "type alias vs interface",
          language: "typescript",
          code: "type Point = { x: number; y: number };\ninterface Point2 { x: number; y: number; }",
          description: "Cả 2 đều mô tả shape object; interface hỗ trợ khai báo lại (declaration merging), type alias linh hoạt hơn cho union/tuple.",
        },
      ],
    },
    {
      id: "interfaces-types",
      title: "Interfaces & Types",
      snippets: [
        {
          id: "optional-readonly-props",
          title: "Optional & readonly property",
          language: "typescript",
          code: "interface User {\n  readonly id: string;\n  name: string;\n  nickname?: string;\n}",
          description: "readonly ngăn gán lại sau khi khởi tạo, ?: đánh dấu property không bắt buộc.",
        },
        {
          id: "extend-interface",
          title: "Kế thừa interface",
          language: "typescript",
          code: "interface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }",
          description: "Mở rộng 1 interface có sẵn, gộp thêm property mới.",
        },
        {
          id: "function-type",
          title: "Kiểu cho hàm",
          language: "typescript",
          code: "type Comparator<T> = (a: T, b: T) => number;\nconst byLength: Comparator<string> = (a, b) => a.length - b.length;",
          description: "Định nghĩa chữ ký hàm tái sử dụng được (tham số + kiểu trả về).",
        },
      ],
    },
    {
      id: "generics",
      title: "Generics",
      snippets: [
        {
          id: "generic-function",
          title: "Hàm generic",
          language: "typescript",
          code: "function firstOf<T>(list: T[]): T | undefined {\n  return list[0];\n}\nfirstOf([1, 2, 3]); // number | undefined",
          description: "Viết hàm dùng chung cho nhiều kiểu mà vẫn giữ type-safety, không cần any.",
        },
        {
          id: "generic-constraint",
          title: "Ràng buộc generic (extends)",
          language: "typescript",
          code: "function getLength<T extends { length: number }>(item: T): number {\n  return item.length;\n}",
          description: "Giới hạn T phải có thuộc tính length, cho phép truy cập an toàn bên trong hàm.",
        },
        {
          id: "generic-interface",
          title: "Interface generic",
          language: "typescript",
          code: "interface ApiResponse<T> {\n  data: T;\n  error: string | null;\n}\nconst res: ApiResponse<User> = { data: user, error: null };",
          description: "Mô tả cấu trúc response tái dùng được cho nhiều kiểu dữ liệu khác nhau.",
        },
      ],
    },
    {
      id: "utility-types",
      title: "Utility Types",
      snippets: [
        {
          id: "partial-required",
          title: "Partial / Required",
          language: "typescript",
          code: "interface User { id: string; name: string; }\ntype DraftUser = Partial<User>;   // mọi field optional\ntype StrictUser = Required<User>; // mọi field bắt buộc",
          description: "Biến toàn bộ field của 1 type thành optional hoặc bắt buộc.",
        },
        {
          id: "pick-omit",
          title: "Pick / Omit",
          language: "typescript",
          code: "interface User { id: string; name: string; password: string; }\ntype PublicUser = Omit<User, \"password\">;\ntype UserPreview = Pick<User, \"id\" | \"name\">;",
          description: "Tạo type mới bằng cách loại bỏ (Omit) hoặc chỉ giữ lại (Pick) một số field.",
        },
        {
          id: "record-type",
          title: "Record",
          language: "typescript",
          code: 'type Role = "admin" | "editor" | "viewer";\nconst permissions: Record<Role, string[]> = {\n  admin: ["read", "write", "delete"],\n  editor: ["read", "write"],\n  viewer: ["read"],\n};',
          description: "Tạo kiểu object với key giới hạn theo union type, value cùng 1 kiểu.",
        },
      ],
    },
    {
      id: "type-guards-narrowing",
      title: "Type Guards & Narrowing",
      snippets: [
        {
          id: "typeof-guard",
          title: "Narrowing với typeof",
          language: "typescript",
          code: "function format(value: string | number) {\n  if (typeof value === \"string\") {\n    return value.trim();\n  }\n  return value.toFixed(2);\n}",
          description: "TypeScript tự thu hẹp kiểu bên trong nhánh if dựa theo typeof.",
        },
        {
          id: "custom-type-guard",
          title: "Custom type guard",
          language: "typescript",
          code: "interface Cat { meow(): void; }\ninterface Dog { bark(): void; }\n\nfunction isCat(pet: Cat | Dog): pet is Cat {\n  return \"meow\" in pet;\n}",
          description: "Hàm trả về `x is T` giúp TypeScript hiểu và thu hẹp kiểu sau khi gọi hàm này.",
        },
        {
          id: "discriminated-union",
          title: "Discriminated union",
          language: "typescript",
          code: 'type Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; side: number };\n\nfunction area(shape: Shape) {\n  if (shape.kind === "circle") return Math.PI * shape.radius ** 2;\n  return shape.side ** 2;\n}',
          description: "Dùng 1 field chung (discriminant) để TypeScript tự suy luận đúng nhánh union.",
        },
      ],
    },
  ],
};

export default typescript;
