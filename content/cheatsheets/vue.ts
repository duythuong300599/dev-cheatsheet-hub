import type { Cheatsheet } from "@/content/schema";

const vue: Cheatsheet = {
  slug: "vue",
  title: "Vue",
  category: "frontend",
  description: {
    vi: "Template directive, reactivity, computed/watch, props/emit và lifecycle Composition API.",
    en: "Template directives, reactivity, computed/watch, props/emit and Composition API lifecycle.",
  },
  status: "published",
  sections: [
    {
      id: "template-directives",
      title: { vi: "Template Syntax & Directives", en: "Template Syntax & Directives" },
      snippets: [
        {
          id: "v-bind-v-on",
          title: { vi: "v-bind và v-on (shorthand)", en: "v-bind and v-on (shorthand)" },
          language: "html",
          code: '<img :src="avatarUrl" :alt="userName" />\n<button @click="handleClick">Lưu</button>',
          description: {
            vi: ": là shorthand cho v-bind, @ là shorthand cho v-on.",
            en: ": is shorthand for v-bind, @ is shorthand for v-on.",
          },
        },
        {
          id: "v-if-v-for",
          title: { vi: "v-if và v-for", en: "v-if and v-for" },
          language: "html",
          code: '<p v-if="isLoading">Đang tải...</p>\n<ul>\n  <li v-for="item in items" :key="item.id">{{ item.name }}</li>\n</ul>',
          description: {
            vi: "v-for luôn cần :key duy nhất để Vue theo dõi từng phần tử hiệu quả.",
            en: "v-for always needs a unique :key so Vue can track each item efficiently.",
          },
        },
        {
          id: "v-model",
          title: { vi: "v-model (two-way binding)", en: "v-model (two-way binding)" },
          language: "html",
          code: '<input v-model="searchQuery" placeholder="Tìm kiếm..." />',
          description: {
            vi: "Ràng buộc 2 chiều giữa input và biến — thay đổi input tự cập nhật biến và ngược lại.",
            en: "Two-way binding between input and variable — changing the input updates the variable and vice versa.",
          },
        },
      ],
    },
    {
      id: "reactivity",
      title: { vi: "Reactivity (ref/reactive)", en: "Reactivity (ref/reactive)" },
      snippets: [
        {
          id: "ref-basic",
          title: { vi: "ref cho giá trị nguyên thuỷ", en: "ref for primitive values" },
          language: "javascript",
          code: 'import { ref } from "vue";\n\nconst count = ref(0);\ncount.value++; // phải dùng .value trong script',
          description: {
            vi: "ref bọc giá trị thành object reactive, truy cập/gán qua .value trong <script>.",
            en: "ref wraps a value in a reactive object; access/assign it via .value inside <script>.",
          },
        },
        {
          id: "reactive-object",
          title: { vi: "reactive cho object", en: "reactive for objects" },
          language: "javascript",
          code: 'import { reactive } from "vue";\n\nconst state = reactive({ count: 0, name: "An" });\nstate.count++; // không cần .value',
          description: {
            vi: "reactive dùng cho object/array, truy cập trực tiếp property không cần .value.",
            en: "reactive is used for objects/arrays; access properties directly without .value.",
          },
        },
      ],
    },
    {
      id: "computed-watch",
      title: { vi: "Computed & Watch", en: "Computed & Watch" },
      snippets: [
        {
          id: "computed-basic",
          title: { vi: "computed", en: "computed" },
          language: "javascript",
          code: 'import { computed } from "vue";\n\nconst fullName = computed(() => `${firstName.value} ${lastName.value}`);',
          description: {
            vi: "Giá trị tự tính lại khi dependency thay đổi, có cache — chỉ tính lại khi cần.",
            en: "A value that recomputes when its dependencies change, cached — only recalculated when needed.",
          },
        },
        {
          id: "watch-basic",
          title: { vi: "watch", en: "watch" },
          language: "javascript",
          code: 'import { watch } from "vue";\n\nwatch(searchQuery, (newValue, oldValue) => {\n  console.log(`Đổi từ ${oldValue} sang ${newValue}`);\n});',
          description: {
            vi: "Chạy side effect khi 1 giá trị reactive thay đổi, nhận cả giá trị mới và cũ.",
            en: "Run a side effect when a reactive value changes, receiving both the new and old value.",
          },
        },
      ],
    },
    {
      id: "props-emits",
      title: { vi: "Props & Emits", en: "Props & Emits" },
      snippets: [
        {
          id: "define-props",
          title: { vi: "defineProps", en: "defineProps" },
          language: "javascript",
          code: "const props = defineProps<{\n  title: string;\n  count?: number;\n}>();",
          description: {
            vi: "Khai báo props mà component con nhận từ component cha (Composition API + TypeScript).",
            en: "Declare the props a child component receives from its parent (Composition API + TypeScript).",
          },
        },
        {
          id: "define-emits",
          title: { vi: "defineEmits", en: "defineEmits" },
          language: "javascript",
          code: 'const emit = defineEmits<{\n  (e: "update", value: string): void;\n}>();\n\nemit("update", "giá trị mới");',
          description: {
            vi: "Khai báo và phát sự kiện tuỳ chỉnh lên component cha.",
            en: "Declare and emit a custom event up to the parent component.",
          },
        },
      ],
    },
    {
      id: "composition-lifecycle",
      title: { vi: "Composition API Lifecycle", en: "Composition API Lifecycle" },
      snippets: [
        {
          id: "on-mounted",
          title: { vi: "onMounted", en: "onMounted" },
          language: "javascript",
          code: 'import { onMounted } from "vue";\n\nonMounted(() => {\n  console.log("Component đã render xong");\n});',
          description: {
            vi: "Chạy code sau khi component đã gắn vào DOM — thường dùng để fetch data hoặc setup listener.",
            en: "Run code after the component mounts to the DOM — commonly used to fetch data or set up listeners.",
          },
        },
        {
          id: "composable-function",
          title: { vi: "Composable function", en: "Composable function" },
          language: "javascript",
          code: "function useCounter(initial = 0) {\n  const count = ref(initial);\n  const increment = () => count.value++;\n  return { count, increment };\n}",
          description: {
            vi: "Đóng gói logic reactive tái sử dụng được giữa nhiều component, tương tự custom hook.",
            en: "Encapsulate reactive logic that's reusable across components, similar to a custom hook.",
          },
        },
      ],
    },
  ],
};

export default vue;
