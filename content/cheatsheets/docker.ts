import type { Cheatsheet } from "@/content/schema";

const docker: Cheatsheet = {
  slug: "docker",
  title: "Docker",
  category: "devops",
  description: {
    vi: "Dockerfile cơ bản, build/run container, volume/network và docker-compose.",
    en: "Basic Dockerfiles, building/running containers, volumes/networks and docker-compose.",
  },
  status: "published",
  sections: [
    {
      id: "dockerfile-basics",
      title: { vi: "Dockerfile Basics", en: "Dockerfile Basics" },
      snippets: [
        {
          id: "dockerfile-minimal",
          title: { vi: "Dockerfile tối thiểu", en: "Minimal Dockerfile" },
          language: "bash",
          code: 'FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json .\nRUN npm ci\nCOPY . .\nCMD ["node", "index.js"]',
          description: {
            vi: "Base image nhẹ, copy dependency trước để tận dụng layer cache khi build lại.",
            en: "A lightweight base image; copy dependencies first to leverage layer caching on rebuilds.",
          },
        },
        {
          id: "dockerfile-multistage",
          title: { vi: "Multi-stage build", en: "Multi-stage build" },
          language: "bash",
          code: 'FROM node:20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCMD ["node", "dist/index.js"]',
          description: {
            vi: "Tách stage build và stage runtime, giảm kích thước image cuối cùng.",
            en: "Separate the build stage from the runtime stage to shrink the final image size.",
          },
        },
      ],
    },
    {
      id: "build-run",
      title: { vi: "Build & Run", en: "Build & Run" },
      snippets: [
        {
          id: "docker-build",
          title: { vi: "Build image", en: "Build an image" },
          language: "bash",
          code: "docker build -t myapp:1.0 .",
          description: {
            vi: "Build image từ Dockerfile trong thư mục hiện tại, gắn tag myapp:1.0.",
            en: "Build an image from the Dockerfile in the current directory, tagged myapp:1.0.",
          },
        },
        {
          id: "docker-run",
          title: { vi: "Chạy container", en: "Run a container" },
          language: "bash",
          code: "docker run -d -p 3000:3000 --name myapp-container myapp:1.0",
          description: {
            vi: "Chạy nền (-d), map cổng host:container (-p), đặt tên container để dễ quản lý.",
            en: "Run detached (-d), map host:container port (-p), and name the container for easier management.",
          },
        },
        {
          id: "docker-logs-exec",
          title: { vi: "Xem log / vào shell container", en: "View logs / enter a container shell" },
          language: "bash",
          code: "docker logs -f myapp-container\ndocker exec -it myapp-container sh",
          description: {
            vi: "Theo dõi log real-time (-f) hoặc mở shell tương tác bên trong container đang chạy.",
            en: "Tail logs in real time (-f) or open an interactive shell inside a running container.",
          },
        },
      ],
    },
    {
      id: "volumes-networks",
      title: { vi: "Volumes & Networks", en: "Volumes & Networks" },
      snippets: [
        {
          id: "docker-volume",
          title: { vi: "Mount volume lưu dữ liệu", en: "Mounting a volume for data" },
          language: "bash",
          code: "docker run -d -v db_data:/var/lib/postgresql/data postgres:16",
          description: {
            vi: "Dữ liệu trong volume tồn tại độc lập, không mất khi container bị xoá.",
            en: "Data in a volume persists independently and survives container removal.",
          },
        },
        {
          id: "docker-bind-mount",
          title: { vi: "Bind mount cho development", en: "Bind mount for development" },
          language: "bash",
          code: 'docker run -v "$(pwd)":/app -p 3000:3000 node:20-alpine npm run dev',
          description: {
            vi: "Map thư mục source trên máy host vào container, hỗ trợ hot-reload khi code thay đổi.",
            en: "Map the source directory on the host into the container, enabling hot-reload on code changes.",
          },
        },
        {
          id: "docker-network",
          title: { vi: "Tạo network riêng cho các service", en: "Creating a dedicated service network" },
          language: "bash",
          code: "docker network create app-net\ndocker run -d --network app-net --name api myapp:1.0",
          description: {
            vi: "Các container cùng network gọi nhau qua tên container thay vì IP.",
            en: "Containers on the same network can reach each other by container name instead of IP.",
          },
        },
      ],
    },
    {
      id: "docker-compose",
      title: { vi: "docker-compose", en: "docker-compose" },
      snippets: [
        {
          id: "compose-basic",
          title: { vi: "docker-compose.yml cơ bản", en: "Basic docker-compose.yml" },
          language: "bash",
          code: 'services:\n  api:\n    build: .\n    ports:\n      - "3000:3000"\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secret',
          description: {
            vi: "Định nghĩa nhiều service liên quan nhau, tự tạo network chung.",
            en: "Define multiple related services, which automatically share a network.",
          },
        },
        {
          id: "compose-commands",
          title: { vi: "Lệnh compose hay dùng", en: "Common compose commands" },
          language: "bash",
          code: "docker compose up -d\ndocker compose logs -f api\ndocker compose down",
          description: {
            vi: "Khởi động toàn bộ stack nền, xem log 1 service, dừng và dọn dẹp toàn bộ.",
            en: "Start the whole stack detached, tail one service's logs, and tear everything down.",
          },
        },
      ],
    },
    {
      id: "image-management",
      title: { vi: "Image Management", en: "Image Management" },
      snippets: [
        {
          id: "docker-images-list",
          title: { vi: "Liệt kê & xoá image", en: "Listing & removing images" },
          language: "bash",
          code: "docker images\ndocker rmi myapp:1.0\ndocker image prune -f  # xoá image không dùng (dangling)",
          description: {
            vi: "Quản lý dung lượng ổ đĩa bằng cách dọn dẹp image cũ/không dùng.",
            en: "Manage disk usage by cleaning up old/unused images.",
          },
        },
        {
          id: "docker-ps-cleanup",
          title: { vi: "Dọn dẹp container đã dừng", en: "Cleaning up stopped containers" },
          language: "bash",
          code: "docker ps -a\ndocker container prune -f",
          description: {
            vi: "Xem tất cả container (kể cả đã dừng) và xoá những container không còn chạy.",
            en: "List all containers (including stopped ones) and remove those no longer running.",
          },
        },
      ],
    },
  ],
};

export default docker;
