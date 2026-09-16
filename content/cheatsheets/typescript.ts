import type { Cheatsheet } from "@/content/schema";

const typescript: Cheatsheet = {
  slug: "typescript",
  title: "TypeScript",
  category: "language",
  description: {
    vi: "Type cơ bản, interface, generic, utility type và type narrowing hay dùng.",
    en: "Basic types, interfaces, generics, utility types and common type narrowing.",
  },
  status: "published",
  sections: [
    {
      id: "type-basics",
      title: { vi: "Type Basics", en: "Type Basics" },
      snippets: [
        {
          id: "primitive-types",
          title: { vi: "Kiểu nguyên thuỷ", en: "Primitive types" },
          language: "typescript",
          code: 'let age: number = 25;\nlet name: string = "An";\nlet isActive: boolean = true;\nlet ids: number[] = [1, 2, 3];\nlet tuple: [string, number] = ["x", 1];',
          description: {
            vi: "Khai báo type tường minh cho biến, mảng và tuple (mảng có số phần tử/kiểu cố định).",
            en: "Explicitly declare types for variables, arrays, and tuples (fixed-length/typed arrays).",
          },
        },
        {
          id: "union-type",
          title: { vi: "Union type", en: "Union type" },
          language: "typescript",
          code: 'type Status = "idle" | "loading" | "success" | "error";\nlet current: Status = "idle";',
          description: {
            vi: "Giới hạn giá trị biến chỉ được là 1 trong các kiểu/literal liệt kê.",
            en: "Restrict a variable's value to one of the listed types/literals.",
          },
        },
        {
          id: "type-alias-vs-interface",
          title: { vi: "type alias vs interface", en: "type alias vs interface" },
          language: "typescript",
          code: "type Point = { x: number; y: number };\ninterface Point2 { x: number; y: number; }",
          description: {
            vi: "Cả 2 đều mô tả shape object; interface hỗ trợ khai báo lại (declaration merging), type alias linh hoạt hơn cho union/tuple.",
            en: "Both describe an object shape; interfaces support declaration merging, while type aliases are more flexible for unions/tuples.",
          },
        },
      ],
    },
    {
      id: "interfaces-types",
      title: { vi: "Interfaces & Types", en: "Interfaces & Types" },
      snippets: [
        {
          id: "optional-readonly-props",
          title: { vi: "Optional & readonly property", en: "Optional & readonly properties" },
          language: "typescript",
          code: "interface User {\n  readonly id: string;\n  name: string;\n  nickname?: string;\n}",
          description: {
            vi: "readonly ngăn gán lại sau khi khởi tạo, ?: đánh dấu property không bắt buộc.",
            en: "readonly prevents reassignment after initialization; ?: marks a property as optional.",
          },
        },
        {
          id: "extend-interface",
          title: { vi: "Kế thừa interface", en: "Extending an interface" },
          language: "typescript",
          code: "interface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }",
          description: {
            vi: "Mở rộng 1 interface có sẵn, gộp thêm property mới.",
            en: "Extend an existing interface with additional properties.",
          },
        },
        {
          id: "function-type",
          title: { vi: "Kiểu cho hàm", en: "Function types" },
          language: "typescript",
          code: "type Comparator<T> = (a: T, b: T) => number;\nconst byLength: Comparator<string> = (a, b) => a.length - b.length;",
          description: {
            vi: "Định nghĩa chữ ký hàm tái sử dụng được (tham số + kiểu trả về).",
            en: "Define a reusable function signature (parameters + return type).",
          },
        },
      ],
    },
    {
      id: "generics",
      title: { vi: "Generics", en: "Generics" },
      snippets: [
        {
          id: "generic-function",
          title: { vi: "Hàm generic", en: "Generic function" },
          language: "typescript",
          code: "function firstOf<T>(list: T[]): T | undefined {\n  return list[0];\n}\nfirstOf([1, 2, 3]); // number | undefined",
          description: {
            vi: "Viết hàm dùng chung cho nhiều kiểu mà vẫn giữ type-safety, không cần any.",
            en: "Write a function that works for many types while staying type-safe, without any.",
          },
        },
        {
          id: "generic-constraint",
          title: { vi: "Ràng buộc generic (extends)", en: "Generic constraints (extends)" },
          language: "typescript",
          code: "function getLength<T extends { length: number }>(item: T): number {\n  return item.length;\n}",
          description: {
            vi: "Giới hạn T phải có thuộc tính length, cho phép truy cập an toàn bên trong hàm.",
            en: "Restrict T to have a length property, allowing safe access inside the function.",
          },
        },
        {
          id: "generic-interface",
          title: { vi: "Interface generic", en: "Generic interface" },
          language: "typescript",
          code: "interface ApiResponse<T> {\n  data: T;\n  error: string | null;\n}\nconst res: ApiResponse<User> = { data: user, error: null };",
          description: {
            vi: "Mô tả cấu trúc response tái dùng được cho nhiều kiểu dữ liệu khác nhau.",
            en: "Describe a response shape that's reusable across different data types.",
          },
        },
      ],
    },
    {
      id: "utility-types",
      title: { vi: "Utility Types", en: "Utility Types" },
      snippets: [
        {
          id: "partial-required",
          title: { vi: "Partial / Required", en: "Partial / Required" },
          language: "typescript",
          code: "interface User { id: string; name: string; }\ntype DraftUser = Partial<User>;   // mọi field optional\ntype StrictUser = Required<User>; // mọi field bắt buộc",
          description: {
            vi: "Biến toàn bộ field của 1 type thành optional hoặc bắt buộc.",
            en: "Turn every field of a type into optional or required.",
          },
        },
        {
          id: "pick-omit",
          title: { vi: "Pick / Omit", en: "Pick / Omit" },
          language: "typescript",
          code: 'interface User { id: string; name: string; password: string; }\ntype PublicUser = Omit<User, "password">;\ntype UserPreview = Pick<User, "id" | "name">;',
          description: {
            vi: "Tạo type mới bằng cách loại bỏ (Omit) hoặc chỉ giữ lại (Pick) một số field.",
            en: "Create a new type by removing (Omit) or keeping only (Pick) certain fields.",
          },
        },
        {
          id: "record-type",
          title: { vi: "Record", en: "Record" },
          language: "typescript",
          code: 'type Role = "admin" | "editor" | "viewer";\nconst permissions: Record<Role, string[]> = {\n  admin: ["read", "write", "delete"],\n  editor: ["read", "write"],\n  viewer: ["read"],\n};',
          description: {
            vi: "Tạo kiểu object với key giới hạn theo union type, value cùng 1 kiểu.",
            en: "Create an object type whose keys are limited to a union type, with values of one type.",
          },
        },
      ],
    },
    {
      id: "type-guards-narrowing",
      title: { vi: "Type Guards & Narrowing", en: "Type Guards & Narrowing" },
      snippets: [
        {
          id: "typeof-guard",
          title: { vi: "Narrowing với typeof", en: "Narrowing with typeof" },
          language: "typescript",
          code: 'function format(value: string | number) {\n  if (typeof value === "string") {\n    return value.trim();\n  }\n  return value.toFixed(2);\n}',
          description: {
            vi: "TypeScript tự thu hẹp kiểu bên trong nhánh if dựa theo typeof.",
            en: "TypeScript automatically narrows the type inside an if branch based on typeof.",
          },
        },
        {
          id: "custom-type-guard",
          title: { vi: "Custom type guard", en: "Custom type guard" },
          language: "typescript",
          code: 'interface Cat { meow(): void; }\ninterface Dog { bark(): void; }\n\nfunction isCat(pet: Cat | Dog): pet is Cat {\n  return "meow" in pet;\n}',
          description: {
            vi: "Hàm trả về `x is T` giúp TypeScript hiểu và thu hẹp kiểu sau khi gọi hàm này.",
            en: "A function returning `x is T` helps TypeScript narrow the type after calling it.",
          },
        },
        {
          id: "discriminated-union",
          title: { vi: "Discriminated union", en: "Discriminated union" },
          language: "typescript",
          code: 'type Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; side: number };\n\nfunction area(shape: Shape) {\n  if (shape.kind === "circle") return Math.PI * shape.radius ** 2;\n  return shape.side ** 2;\n}',
          description: {
            vi: "Dùng 1 field chung (discriminant) để TypeScript tự suy luận đúng nhánh union.",
            en: "Use a shared discriminant field so TypeScript can infer the correct union branch.",
          },
        },
      ],
    },
  ],
};

export default typescript;
