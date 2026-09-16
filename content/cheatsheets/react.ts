import type { Cheatsheet } from "@/content/schema";

const react: Cheatsheet = {
  slug: "react",
  title: "React",
  category: "frontend",
  description: {
    vi: "Component/props, state/effect, sự kiện/form, list và custom hook cơ bản.",
    en: "Components/props, state/effects, events/forms, lists and basic custom hooks.",
  },
  status: "published",
  sections: [
    {
      id: "components-props",
      title: { vi: "Components & Props", en: "Components & Props" },
      snippets: [
        {
          id: "function-component-props",
          title: { vi: "Function component + props", en: "Function component + props" },
          language: "typescript",
          code: 'interface CardProps {\n  title: string;\n  onClose?: () => void;\n}\n\nfunction Card({ title, onClose }: CardProps) {\n  return (\n    <div>\n      <h3>{title}</h3>\n      {onClose && <button onClick={onClose}>Đóng</button>}\n    </div>\n  );\n}',
          description: {
            vi: "Component nhận props qua tham số đầu tiên, destructure trực tiếp cho gọn.",
            en: "A component receives props via its first argument; destructure directly for brevity.",
          },
        },
        {
          id: "children-prop",
          title: { vi: "children prop", en: "children prop" },
          language: "typescript",
          code: "function Panel({ children }: { children: React.ReactNode }) {\n  return <section className=\"panel\">{children}</section>;\n}\n\n<Panel>\n  <p>Nội dung bên trong</p>\n</Panel>;",
          description: {
            vi: "children chứa nội dung được lồng giữa 2 thẻ mở/đóng của component.",
            en: "children holds the content nested between a component's opening and closing tags.",
          },
        },
      ],
    },
    {
      id: "state-effects",
      title: { vi: "State & Effects", en: "State & Effects" },
      snippets: [
        {
          id: "use-state",
          title: { vi: "useState", en: "useState" },
          language: "typescript",
          code: "const [count, setCount] = useState(0);\n\nfunction increment() {\n  setCount((prev) => prev + 1);\n}",
          description: {
            vi: "Dùng dạng hàm cập nhật (prev => ...) khi giá trị mới phụ thuộc giá trị cũ.",
            en: "Use the updater function form (prev => ...) when the new value depends on the old one.",
          },
        },
        {
          id: "use-effect-cleanup",
          title: { vi: "useEffect + cleanup", en: "useEffect + cleanup" },
          language: "typescript",
          code: 'useEffect(() => {\n  const id = setInterval(() => console.log("tick"), 1000);\n  return () => clearInterval(id);\n}, []);',
          description: {
            vi: "Hàm return trong effect chạy khi unmount hoặc trước lần effect kế tiếp — dùng để dọn dẹp.",
            en: "The return function in an effect runs on unmount or before the next effect — used for cleanup.",
          },
        },
        {
          id: "use-effect-deps",
          title: { vi: "Dependency array", en: "Dependency array" },
          language: "typescript",
          code: "useEffect(() => {\n  fetchUser(userId);\n}, [userId]); // chỉ chạy lại khi userId đổi",
          description: {
            vi: "Effect chỉ chạy lại khi 1 trong các giá trị trong mảng dependency thay đổi.",
            en: "An effect only re-runs when one of the values in the dependency array changes.",
          },
        },
      ],
    },
    {
      id: "events-forms",
      title: { vi: "Event Handling & Forms", en: "Event Handling & Forms" },
      snippets: [
        {
          id: "controlled-input",
          title: { vi: "Controlled input", en: "Controlled input" },
          language: "typescript",
          code: 'const [value, setValue] = useState("");\n\n<input value={value} onChange={(e) => setValue(e.target.value)} />;',
          description: {
            vi: "Giá trị input do React state kiểm soát hoàn toàn (single source of truth).",
            en: "The input's value is fully controlled by React state (single source of truth).",
          },
        },
        {
          id: "form-submit",
          title: { vi: "Xử lý submit form", en: "Handling form submit" },
          language: "typescript",
          code: 'function handleSubmit(e: React.FormEvent) {\n  e.preventDefault();\n  console.log("Submitted:", value);\n}\n\n<form onSubmit={handleSubmit}>...</form>;',
          description: {
            vi: "preventDefault() ngăn trình duyệt reload trang khi submit form.",
            en: "preventDefault() stops the browser from reloading the page on form submit.",
          },
        },
      ],
    },
    {
      id: "lists-keys",
      title: { vi: "Lists & Keys", en: "Lists & Keys" },
      snippets: [
        {
          id: "render-list",
          title: { vi: "Render danh sách", en: "Rendering a list" },
          language: "typescript",
          code: "{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}",
          description: {
            vi: "key giúp React nhận diện phần tử nào thay đổi giữa các lần render, nên dùng id ổn định thay vì index.",
            en: "key helps React identify which items changed between renders — use a stable id, not the index.",
          },
        },
        {
          id: "conditional-render",
          title: { vi: "Render có điều kiện", en: "Conditional rendering" },
          language: "typescript",
          code: "{isLoading ? <Spinner /> : <UserList users={users} />}\n{error && <ErrorBanner message={error} />}",
          description: {
            vi: "Toán tử ba ngôi cho 2 nhánh, && khi chỉ cần render lúc điều kiện đúng.",
            en: "Ternary for two branches; && when you only need to render when the condition is true.",
          },
        },
      ],
    },
    {
      id: "context-custom-hooks",
      title: { vi: "Context & Custom Hooks", en: "Context & Custom Hooks" },
      snippets: [
        {
          id: "create-context",
          title: { vi: "Tạo và dùng Context", en: "Creating and using Context" },
          language: "typescript",
          code: 'const ThemeContext = createContext<"dark" | "light">("dark");\n\nfunction ThemeLabel() {\n  const theme = useContext(ThemeContext);\n  return <span>{theme}</span>;\n}',
          description: {
            vi: "Chia sẻ dữ liệu xuyên nhiều tầng component mà không cần truyền props thủ công.",
            en: "Share data across many component levels without manually passing props.",
          },
        },
        {
          id: "custom-hook",
          title: { vi: "Custom hook", en: "Custom hook" },
          language: "typescript",
          code: "function useToggle(initial = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue((v) => !v);\n  return [value, toggle] as const;\n}",
          description: {
            vi: "Đóng gói logic state có thể tái sử dụng giữa nhiều component.",
            en: "Encapsulate state logic that can be reused across multiple components.",
          },
        },
      ],
    },
  ],
};

export default react;
