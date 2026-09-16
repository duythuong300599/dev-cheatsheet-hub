import type { Cheatsheet } from "@/content/schema";

const go: Cheatsheet = {
  slug: "go",
  title: "Go",
  category: "language",
  description: {
    vi: "Biến/kiểu dữ liệu, hàm, struct/method, slice/map và goroutine cơ bản.",
    en: "Variables/types, functions, structs/methods, slices/maps and basic goroutines.",
  },
  status: "published",
  sections: [
    {
      id: "variables-types",
      title: { vi: "Variables & Types", en: "Variables & Types" },
      snippets: [
        {
          id: "var-declaration",
          title: { vi: "Khai báo biến", en: "Declaring variables" },
          language: "go",
          code: 'var age int = 25\nname := "An" // short declaration, tự suy ra kiểu string\nconst Pi = 3.14',
          description: {
            vi: ":= chỉ dùng được bên trong hàm, tự động suy luận kiểu dữ liệu.",
            en: ":= only works inside functions and automatically infers the type.",
          },
        },
        {
          id: "zero-values",
          title: { vi: "Zero value", en: "Zero value" },
          language: "go",
          code: 'var count int      // 0\nvar name string    // ""\nvar active bool     // false',
          description: {
            vi: 'Biến chưa gán giá trị trong Go luôn có "zero value" mặc định theo kiểu, không phải undefined.',
            en: 'An unassigned variable in Go always has a type-specific "zero value", not undefined.',
          },
        },
      ],
    },
    {
      id: "functions-multiple-returns",
      title: { vi: "Functions & Multiple Returns", en: "Functions & Multiple Returns" },
      snippets: [
        {
          id: "multiple-return-values",
          title: { vi: "Hàm trả về nhiều giá trị", en: "Functions returning multiple values" },
          language: "go",
          code: 'func divide(a, b float64) (float64, error) {\n  if b == 0 {\n    return 0, fmt.Errorf("chia cho 0")\n  }\n  return a / b, nil\n}',
          description: {
            vi: "Pattern (value, error) rất phổ biến trong Go thay vì dùng exception.",
            en: "The (value, error) pattern is very common in Go instead of exceptions.",
          },
        },
        {
          id: "named-return-values",
          title: { vi: "Named return values", en: "Named return values" },
          language: "go",
          code: "func split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return // trả về x, y đã đặt tên\n}",
          description: {
            vi: "Đặt tên sẵn cho giá trị trả về, return trống sẽ trả đúng các biến đó.",
            en: "Pre-name return values; a bare return returns those exact variables.",
          },
        },
      ],
    },
    {
      id: "structs-methods",
      title: { vi: "Structs & Methods", en: "Structs & Methods" },
      snippets: [
        {
          id: "struct-definition",
          title: { vi: "Định nghĩa struct", en: "Defining a struct" },
          language: "go",
          code: 'type User struct {\n  Name string\n  Age  int\n}\n\nu := User{Name: "An", Age: 25}',
          description: {
            vi: "Struct gom nhóm các field liên quan, tương tự object/class ở ngôn ngữ khác.",
            en: "A struct groups related fields, similar to an object/class in other languages.",
          },
        },
        {
          id: "method-with-receiver",
          title: { vi: "Method với receiver", en: "Method with a receiver" },
          language: "go",
          code: 'func (u User) Greet() string {\n  return "Xin chào " + u.Name\n}\n\nu.Greet()',
          description: {
            vi: "(u User) là receiver, biến struct thành đối tượng gắn được method.",
            en: "(u User) is the receiver, turning a struct into an object that can have methods.",
          },
        },
        {
          id: "pointer-receiver",
          title: { vi: "Pointer receiver (sửa được state)", en: "Pointer receiver (mutates state)" },
          language: "go",
          code: "func (u *User) SetName(name string) {\n  u.Name = name\n}",
          description: {
            vi: "Dùng con trỏ (*User) khi method cần thay đổi giá trị field gốc thay vì bản sao.",
            en: "Use a pointer (*User) when a method needs to mutate the original field instead of a copy.",
          },
        },
      ],
    },
    {
      id: "slices-maps",
      title: { vi: "Slices & Maps", en: "Slices & Maps" },
      snippets: [
        {
          id: "slice-basics",
          title: { vi: "Slice cơ bản", en: "Basic slices" },
          language: "go",
          code: "nums := []int{1, 2, 3}\nnums = append(nums, 4)\nsub := nums[1:3] // [2 3]",
          description: {
            vi: "Slice là mảng động, append thêm phần tử, [start:end] cắt slice con.",
            en: "A slice is a dynamic array; append adds elements, [start:end] creates a sub-slice.",
          },
        },
        {
          id: "map-basics",
          title: { vi: "Map cơ bản", en: "Basic maps" },
          language: "go",
          code: 'ages := map[string]int{"an": 25, "binh": 30}\nage, ok := ages["an"] // ok = true nếu key tồn tại',
          description: {
            vi: "Truy cập map trả về 2 giá trị: value và bool báo key có tồn tại hay không.",
            en: "Accessing a map returns two values: the value and a bool indicating whether the key exists.",
          },
        },
      ],
    },
    {
      id: "goroutines-channels",
      title: { vi: "Goroutines & Channels", en: "Goroutines & Channels" },
      snippets: [
        {
          id: "goroutine-basic",
          title: { vi: "Khởi chạy goroutine", en: "Launching a goroutine" },
          language: "go",
          code: 'go func() {\n  fmt.Println("chạy song song")\n}()',
          description: {
            vi: "Từ khoá go chạy hàm bất đồng bộ trên 1 goroutine riêng (lightweight thread).",
            en: "The go keyword runs a function asynchronously on its own goroutine (a lightweight thread).",
          },
        },
        {
          id: "channel-communication",
          title: { vi: "Giao tiếp qua channel", en: "Communicating via a channel" },
          language: "go",
          code: 'ch := make(chan string)\ngo func() {\n  ch <- "done"\n}()\nresult := <-ch // chờ nhận giá trị từ channel',
          description: {
            vi: "Channel dùng để goroutine gửi/nhận dữ liệu an toàn giữa nhau.",
            en: "Channels let goroutines safely send/receive data to/from each other.",
          },
        },
      ],
    },
  ],
};

export default go;
