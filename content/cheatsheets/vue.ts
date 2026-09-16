import type { Cheatsheet } from "@/content/schema";

const vue: Cheatsheet = {
  slug: "vue",
  title: "Vue",
  category: "frontend",
  description: "Template directive, reactivity, computed/watch, props/emit và lifecycle Composition API.",
  status: "published",
  sections: [
    {
      id: "template-directives",
      title: "Template Syntax & Directives",
      snippets: [
        {
          id: "v-bind-v-on",
          title: "v-bind và v-on (shorthand)",
          language: "html",
          code: '<img :src="avatarUrl" :alt="userName" />\n<button @click="handleClick">Lưu</button>',
          description: ": là shorthand cho v-bind, @ là shorthand cho v-on.",
        },
        {
          id: "v-if-v-for",
          title: "v-if và v-for",
          language: "html",
          code: '<p v-if="isLoading">Đang tải...</p>\n<ul>\n  <li v-for="item in items" :key="item.id">{{ item.name }}</li>\n</ul>',
          description: "v-for luôn cần :key duy nhất để Vue theo dõi từng phần tử hiệu quả.",
        },
        {
          id: "v-model",
          title: "v-model (two-way binding)",
          language: "html",
          code: '<input v-model="searchQuery" placeholder="Tìm kiếm..." />',
          description: "Ràng buộc 2 chiều giữa input và biến — thay đổi input tự cập nhật biến và ngược lại.",
        },
      ],
    },
    {
      id: "reactivity",
      title: "Reactivity (ref/reactive)",
      snippets: [
        {
          id: "ref-basic",
          title: "ref cho giá trị nguyên thuỷ",
          language: "javascript",
          code: 'import { ref } from "vue";\n\nconst count = ref(0);\ncount.value++; // phải dùng .value trong script',
          description: "ref bọc giá trị thành object reactive, truy cập/gán qua .value trong <script>.",
        },
        {
          id: "reactive-object",
          title: "reactive cho object",
          language: "javascript",
          code: 'import { reactive } from "vue";\n\nconst state = reactive({ count: 0, name: "An" });\nstate.count++; // không cần .value',
          description: "reactive dùng cho object/array, truy cập trực tiếp property không cần .value.",
        },
      ],
    },
    {
      id: "computed-watch",
      title: "Computed & Watch",
      snippets: [
        {
          id: "computed-basic",
          title: "computed",
          language: "javascript",
          code: 'import { computed } from "vue";\n\nconst fullName = computed(() => `${firstName.value} ${lastName.value}`);',
          description: "Giá trị tự tính lại khi dependency thay đổi, có cache — chỉ tính lại khi cần.",
        },
        {
          id: "watch-basic",
          title: "watch",
          language: "javascript",
          code: 'import { watch } from "vue";\n\nwatch(searchQuery, (newValue, oldValue) => {\n  console.log(`Đổi từ ${oldValue} sang ${newValue}`);\n});',
          description: "Chạy side effect khi 1 giá trị reactive thay đổi, nhận cả giá trị mới và cũ.",
        },
      ],
    },
    {
      id: "props-emits",
      title: "Props & Emits",
      snippets: [
        {
          id: "define-props",
          title: "defineProps",
          language: "javascript",
          code: "const props = defineProps<{\n  title: string;\n  count?: number;\n}>();",
          description: "Khai báo props mà component con nhận từ component cha (Composition API + TypeScript).",
        },
        {
          id: "define-emits",
          title: "defineEmits",
          language: "javascript",
          code: 'const emit = defineEmits<{\n  (e: "update", value: string): void;\n}>();\n\nemit("update", "giá trị mới");',
          description: "Khai báo và phát sự kiện tuỳ chỉnh lên component cha.",
        },
      ],
    },
    {
      id: "composition-lifecycle",
      title: "Composition API Lifecycle",
      snippets: [
        {
          id: "on-mounted",
          title: "onMounted",
          language: "javascript",
          code: 'import { onMounted } from "vue";\n\nonMounted(() => {\n  console.log("Component đã render xong");\n});',
          description: "Chạy code sau khi component đã gắn vào DOM — thường dùng để fetch data hoặc setup listener.",
        },
        {
          id: "composable-function",
          title: "Composable function",
          language: "javascript",
          code: 'function useCounter(initial = 0) {\n  const count = ref(initial);\n  const increment = () => count.value++;\n  return { count, increment };\n}',
          description: "Đóng gói logic reactive tái sử dụng được giữa nhiều component, tương tự custom hook.",
        },
      ],
    },
  ],
};

export default vue;
