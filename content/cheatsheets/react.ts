import type { Cheatsheet } from "@/content/schema";

const react: Cheatsheet = {
  slug: "react",
  title: "React",
  category: "frontend",
  description: "Component/props, state/effect, sự kiện/form, list và custom hook cơ bản.",
  status: "published",
  sections: [
    {
      id: "components-props",
      title: "Components & Props",
      snippets: [
        {
          id: "function-component-props",
          title: "Function component + props",
          language: "typescript",
          code: 'interface CardProps {\n  title: string;\n  onClose?: () => void;\n}\n\nfunction Card({ title, onClose }: CardProps) {\n  return (\n    <div>\n      <h3>{title}</h3>\n      {onClose && <button onClick={onClose}>Đóng</button>}\n    </div>\n  );\n}',
          description: "Component nhận props qua tham số đầu tiên, destructure trực tiếp cho gọn.",
        },
        {
          id: "children-prop",
          title: "children prop",
          language: "typescript",
          code: "function Panel({ children }: { children: React.ReactNode }) {\n  return <section className=\"panel\">{children}</section>;\n}\n\n<Panel>\n  <p>Nội dung bên trong</p>\n</Panel>;",
          description: "children chứa nội dung được lồng giữa 2 thẻ mở/đóng của component.",
        },
      ],
    },
    {
      id: "state-effects",
      title: "State & Effects",
      snippets: [
        {
          id: "use-state",
          title: "useState",
          language: "typescript",
          code: "const [count, setCount] = useState(0);\n\nfunction increment() {\n  setCount((prev) => prev + 1);\n}",
          description: "Dùng dạng hàm cập nhật (prev => ...) khi giá trị mới phụ thuộc giá trị cũ.",
        },
        {
          id: "use-effect-cleanup",
          title: "useEffect + cleanup",
          language: "typescript",
          code: 'useEffect(() => {\n  const id = setInterval(() => console.log("tick"), 1000);\n  return () => clearInterval(id);\n}, []);',
          description: "Hàm return trong effect chạy khi unmount hoặc trước lần effect kế tiếp — dùng để dọn dẹp.",
        },
        {
          id: "use-effect-deps",
          title: "Dependency array",
          language: "typescript",
          code: "useEffect(() => {\n  fetchUser(userId);\n}, [userId]); // chỉ chạy lại khi userId đổi",
          description: "Effect chỉ chạy lại khi 1 trong các giá trị trong mảng dependency thay đổi.",
        },
      ],
    },
    {
      id: "events-forms",
      title: "Event Handling & Forms",
      snippets: [
        {
          id: "controlled-input",
          title: "Controlled input",
          language: "typescript",
          code: 'const [value, setValue] = useState("");\n\n<input value={value} onChange={(e) => setValue(e.target.value)} />;',
          description: "Giá trị input do React state kiểm soát hoàn toàn (single source of truth).",
        },
        {
          id: "form-submit",
          title: "Xử lý submit form",
          language: "typescript",
          code: 'function handleSubmit(e: React.FormEvent) {\n  e.preventDefault();\n  console.log("Submitted:", value);\n}\n\n<form onSubmit={handleSubmit}>...</form>;',
          description: "preventDefault() ngăn trình duyệt reload trang khi submit form.",
        },
      ],
    },
    {
      id: "lists-keys",
      title: "Lists & Keys",
      snippets: [
        {
          id: "render-list",
          title: "Render danh sách",
          language: "typescript",
          code: "{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}",
          description: "key giúp React nhận diện phần tử nào thay đổi giữa các lần render, nên dùng id ổn định thay vì index.",
        },
        {
          id: "conditional-render",
          title: "Render có điều kiện",
          language: "typescript",
          code: "{isLoading ? <Spinner /> : <UserList users={users} />}\n{error && <ErrorBanner message={error} />}",
          description: "Toán tử ba ngôi cho 2 nhánh, && khi chỉ cần render lúc điều kiện đúng.",
        },
      ],
    },
    {
      id: "context-custom-hooks",
      title: "Context & Custom Hooks",
      snippets: [
        {
          id: "create-context",
          title: "Tạo và dùng Context",
          language: "typescript",
          code: 'const ThemeContext = createContext<"dark" | "light">("dark");\n\nfunction ThemeLabel() {\n  const theme = useContext(ThemeContext);\n  return <span>{theme}</span>;\n}',
          description: "Chia sẻ dữ liệu xuyên nhiều tầng component mà không cần truyền props thủ công.",
        },
        {
          id: "custom-hook",
          title: "Custom hook",
          language: "typescript",
          code: "function useToggle(initial = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue((v) => !v);\n  return [value, toggle] as const;\n}",
          description: "Đóng gói logic state có thể tái sử dụng giữa nhiều component.",
        },
      ],
    },
  ],
};

export default react;
