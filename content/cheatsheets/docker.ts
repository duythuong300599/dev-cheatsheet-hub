import type { Cheatsheet } from "@/content/schema";

const docker: Cheatsheet = {
  slug: "docker",
  title: "Docker",
  category: "devops",
  description: "Dockerfile cơ bản, build/run container, volume/network và docker-compose.",
  status: "published",
  sections: [
    {
      id: "dockerfile-basics",
      title: "Dockerfile Basics",
      snippets: [
        {
          id: "dockerfile-minimal",
          title: "Dockerfile tối thiểu",
          language: "bash",
          code: 'FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json .\nRUN npm ci\nCOPY . .\nCMD ["node", "index.js"]',
          description: "Base image nhẹ, copy dependency trước để tận dụng layer cache khi build lại.",
        },
        {
          id: "dockerfile-multistage",
          title: "Multi-stage build",
          language: "bash",
          code: 'FROM node:20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCMD ["node", "dist/index.js"]',
          description: "Tách stage build và stage runtime, giảm kích thước image cuối cùng.",
        },
      ],
    },
    {
      id: "build-run",
      title: "Build & Run",
      snippets: [
        {
          id: "docker-build",
          title: "Build image",
          language: "bash",
          code: "docker build -t myapp:1.0 .",
          description: "Build image từ Dockerfile trong thư mục hiện tại, gắn tag myapp:1.0.",
        },
        {
          id: "docker-run",
          title: "Chạy container",
          language: "bash",
          code: "docker run -d -p 3000:3000 --name myapp-container myapp:1.0",
          description: "Chạy nền (-d), map cổng host:container (-p), đặt tên container để dễ quản lý.",
        },
        {
          id: "docker-logs-exec",
          title: "Xem log / vào shell container",
          language: "bash",
          code: "docker logs -f myapp-container\ndocker exec -it myapp-container sh",
          description: "Theo dõi log real-time (-f) hoặc mở shell tương tác bên trong container đang chạy.",
        },
      ],
    },
    {
      id: "volumes-networks",
      title: "Volumes & Networks",
      snippets: [
        {
          id: "docker-volume",
          title: "Mount volume lưu dữ liệu",
          language: "bash",
          code: "docker run -d -v db_data:/var/lib/postgresql/data postgres:16",
          description: "Dữ liệu trong volume tồn tại độc lập, không mất khi container bị xoá.",
        },
        {
          id: "docker-bind-mount",
          title: "Bind mount cho development",
          language: "bash",
          code: 'docker run -v "$(pwd)":/app -p 3000:3000 node:20-alpine npm run dev',
          description: "Map thư mục source trên máy host vào container, hỗ trợ hot-reload khi code thay đổi.",
        },
        {
          id: "docker-network",
          title: "Tạo network riêng cho các service",
          language: "bash",
          code: "docker network create app-net\ndocker run -d --network app-net --name api myapp:1.0",
          description: "Các container cùng network gọi nhau qua tên container thay vì IP.",
        },
      ],
    },
    {
      id: "docker-compose",
      title: "docker-compose",
      snippets: [
        {
          id: "compose-basic",
          title: "docker-compose.yml cơ bản",
          language: "bash",
          code: "services:\n  api:\n    build: .\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secret",
          description: "Định nghĩa nhiều service liên quan nhau, tự tạo network chung.",
        },
        {
          id: "compose-commands",
          title: "Lệnh compose hay dùng",
          language: "bash",
          code: "docker compose up -d\ndocker compose logs -f api\ndocker compose down",
          description: "Khởi động toàn bộ stack nền, xem log 1 service, dừng và dọn dẹp toàn bộ.",
        },
      ],
    },
    {
      id: "image-management",
      title: "Image Management",
      snippets: [
        {
          id: "docker-images-list",
          title: "Liệt kê & xoá image",
          language: "bash",
          code: "docker images\ndocker rmi myapp:1.0\ndocker image prune -f  # xoá image không dùng (dangling)",
          description: "Quản lý dung lượng ổ đĩa bằng cách dọn dẹp image cũ/không dùng.",
        },
        {
          id: "docker-ps-cleanup",
          title: "Dọn dẹp container đã dừng",
          language: "bash",
          code: "docker ps -a\ndocker container prune -f",
          description: "Xem tất cả container (kể cả đã dừng) và xoá những container không còn chạy.",
        },
      ],
    },
  ],
};

export default docker;
