import type { Cheatsheet } from "@/content/schema";

const go: Cheatsheet = {
  slug: "go",
  title: "Go",
  category: "language",
  description: "Biến/kiểu dữ liệu, hàm, struct/method, slice/map và goroutine cơ bản.",
  status: "published",
  sections: [
    {
      id: "variables-types",
      title: "Variables & Types",
      snippets: [
        {
          id: "var-declaration",
          title: "Khai báo biến",
          language: "go",
          code: 'var age int = 25\nname := "An" // short declaration, tự suy ra kiểu string\nconst Pi = 3.14',
          description: ":= chỉ dùng được bên trong hàm, tự động suy luận kiểu dữ liệu.",
        },
        {
          id: "zero-values",
          title: "Zero value",
          language: "go",
          code: 'var count int      // 0\nvar name string    // ""\nvar active bool     // false',
          description: "Biến chưa gán giá trị trong Go luôn có \"zero value\" mặc định theo kiểu, không phải undefined.",
        },
      ],
    },
    {
      id: "functions-multiple-returns",
      title: "Functions & Multiple Returns",
      snippets: [
        {
          id: "multiple-return-values",
          title: "Hàm trả về nhiều giá trị",
          language: "go",
          code: 'func divide(a, b float64) (float64, error) {\n  if b == 0 {\n    return 0, fmt.Errorf("chia cho 0")\n  }\n  return a / b, nil\n}',
          description: "Pattern (value, error) rất phổ biến trong Go thay vì dùng exception.",
        },
        {
          id: "named-return-values",
          title: "Named return values",
          language: "go",
          code: "func split(sum int) (x, y int) {\n  x = sum * 4 / 9\n  y = sum - x\n  return // trả về x, y đã đặt tên\n}",
          description: "Đặt tên sẵn cho giá trị trả về, return trống sẽ trả đúng các biến đó.",
        },
      ],
    },
    {
      id: "structs-methods",
      title: "Structs & Methods",
      snippets: [
        {
          id: "struct-definition",
          title: "Định nghĩa struct",
          language: "go",
          code: 'type User struct {\n  Name string\n  Age  int\n}\n\nu := User{Name: "An", Age: 25}',
          description: "Struct gom nhóm các field liên quan, tương tự object/class ở ngôn ngữ khác.",
        },
        {
          id: "method-with-receiver",
          title: "Method với receiver",
          language: "go",
          code: 'func (u User) Greet() string {\n  return "Xin chào " + u.Name\n}\n\nu.Greet()',
          description: "(u User) là receiver, biến struct thành đối tượng gắn được method.",
        },
        {
          id: "pointer-receiver",
          title: "Pointer receiver (sửa được state)",
          language: "go",
          code: "func (u *User) SetName(name string) {\n  u.Name = name\n}",
          description: "Dùng con trỏ (*User) khi method cần thay đổi giá trị field gốc thay vì bản sao.",
        },
      ],
    },
    {
      id: "slices-maps",
      title: "Slices & Maps",
      snippets: [
        {
          id: "slice-basics",
          title: "Slice cơ bản",
          language: "go",
          code: 'nums := []int{1, 2, 3}\nnums = append(nums, 4)\nsub := nums[1:3] // [2 3]',
          description: "Slice là mảng động, append thêm phần tử, [start:end] cắt slice con.",
        },
        {
          id: "map-basics",
          title: "Map cơ bản",
          language: "go",
          code: 'ages := map[string]int{"an": 25, "binh": 30}\nage, ok := ages["an"] // ok = true nếu key tồn tại',
          description: "Truy cập map trả về 2 giá trị: value và bool báo key có tồn tại hay không.",
        },
      ],
    },
    {
      id: "goroutines-channels",
      title: "Goroutines & Channels",
      snippets: [
        {
          id: "goroutine-basic",
          title: "Khởi chạy goroutine",
          language: "go",
          code: 'go func() {\n  fmt.Println("chạy song song")\n}()',
          description: "Từ khoá go chạy hàm bất đồng bộ trên 1 goroutine riêng (lightweight thread).",
        },
        {
          id: "channel-communication",
          title: "Giao tiếp qua channel",
          language: "go",
          code: 'ch := make(chan string)\ngo func() {\n  ch <- "done"\n}()\nresult := <-ch // chờ nhận giá trị từ channel',
          description: "Channel dùng để goroutine gửi/nhận dữ liệu an toàn giữa nhau.",
        },
      ],
    },
  ],
};

export default go;
