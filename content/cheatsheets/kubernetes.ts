import type { Cheatsheet } from "@/content/schema";

const kubernetes: Cheatsheet = {
  slug: "kubernetes",
  title: "Kubernetes",
  category: "devops",
  description: {
    vi: "Pod/Deployment, Service, ConfigMap/Secret, scaling và lệnh kubectl hay dùng.",
    en: "Pod/Deployment, Service, ConfigMap/Secret, scaling and common kubectl commands.",
  },
  status: "published",
  sections: [
    {
      id: "pods-deployments",
      title: { vi: "Pods & Deployments", en: "Pods & Deployments" },
      snippets: [
        {
          id: "deployment-basic",
          title: { vi: "Deployment cơ bản", en: "Basic Deployment" },
          language: "bash",
          code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      containers:\n        - name: api\n          image: myapp:1.0\n          ports:\n            - containerPort: 3000",
          description: {
            vi: "Deployment quản lý số lượng Pod mong muốn (replicas) và tự phục hồi khi Pod chết.",
            en: "A Deployment manages the desired Pod count (replicas) and self-heals when Pods die.",
          },
        },
        {
          id: "apply-manifest",
          title: { vi: "Áp dụng manifest", en: "Applying a manifest" },
          language: "bash",
          code: "kubectl apply -f deployment.yaml\nkubectl get pods\nkubectl get deployments",
          description: {
            vi: "apply tạo mới hoặc cập nhật resource theo file YAML mô tả trạng thái mong muốn.",
            en: "apply creates or updates resources based on a YAML file describing the desired state.",
          },
        },
      ],
    },
    {
      id: "services-networking",
      title: { vi: "Services & Networking", en: "Services & Networking" },
      snippets: [
        {
          id: "service-clusterip",
          title: { vi: "Service (ClusterIP mặc định)", en: "Service (ClusterIP default)" },
          language: "bash",
          code: "apiVersion: v1\nkind: Service\nmetadata:\n  name: api-service\nspec:\n  selector:\n    app: api\n  ports:\n    - port: 80\n      targetPort: 3000",
          description: {
            vi: "Service cấp 1 địa chỉ ổn định để truy cập tới các Pod có cùng label (selector).",
            en: "A Service provides a stable address to reach Pods sharing the same label (selector).",
          },
        },
        {
          id: "service-nodeport-lb",
          title: { vi: "NodePort vs LoadBalancer", en: "NodePort vs LoadBalancer" },
          language: "bash",
          code: "spec:\n  type: LoadBalancer   # hoặc NodePort\n  ports:\n    - port: 80\n      targetPort: 3000",
          description: {
            vi: "LoadBalancer cấp IP public qua cloud provider, NodePort mở cổng cố định trên mỗi node.",
            en: "LoadBalancer provisions a public IP via the cloud provider; NodePort opens a fixed port on every node.",
          },
        },
      ],
    },
    {
      id: "configmap-secret",
      title: { vi: "ConfigMap & Secret", en: "ConfigMap & Secret" },
      snippets: [
        {
          id: "configmap-basic",
          title: { vi: "ConfigMap", en: "ConfigMap" },
          language: "bash",
          code: "kubectl create configmap app-config \\\n  --from-literal=LOG_LEVEL=info",
          description: {
            vi: "Lưu cấu hình không nhạy cảm (env var, file config) tách biệt khỏi image.",
            en: "Store non-sensitive config (env vars, config files) separately from the image.",
          },
        },
        {
          id: "secret-basic",
          title: { vi: "Secret", en: "Secret" },
          language: "bash",
          code: "kubectl create secret generic db-secret \\\n  --from-literal=DB_PASSWORD=supersecret",
          description: {
            vi: "Lưu dữ liệu nhạy cảm (mật khẩu, token), Kubernetes tự mã hoá base64 khi lưu trữ.",
            en: "Store sensitive data (passwords, tokens); Kubernetes automatically base64-encodes it at rest.",
          },
        },
        {
          id: "env-from-configmap",
          title: { vi: "Dùng ConfigMap làm env var", en: "Using a ConfigMap as env vars" },
          language: "bash",
          code: "spec:\n  containers:\n    - name: api\n      envFrom:\n        - configMapRef:\n            name: app-config",
          description: {
            vi: "Nạp toàn bộ key trong ConfigMap thành biến môi trường cho container.",
            en: "Load every key in a ConfigMap as environment variables for the container.",
          },
        },
      ],
    },
    {
      id: "scaling-rollout",
      title: { vi: "Scaling & Rollout", en: "Scaling & Rollout" },
      snippets: [
        {
          id: "kubectl-scale",
          title: { vi: "Scale thủ công", en: "Manual scaling" },
          language: "bash",
          code: "kubectl scale deployment api-deployment --replicas=5",
          description: {
            vi: "Tăng/giảm số lượng Pod đang chạy ngay lập tức.",
            en: "Increase/decrease the number of running Pods immediately.",
          },
        },
        {
          id: "rollout-status-undo",
          title: { vi: "Theo dõi & rollback rollout", en: "Tracking & rolling back a rollout" },
          language: "bash",
          code: "kubectl rollout status deployment/api-deployment\nkubectl rollout undo deployment/api-deployment",
          description: {
            vi: "Xem tiến trình deploy phiên bản mới, hoặc rollback về phiên bản trước nếu lỗi.",
            en: "Watch a new deploy's progress, or roll back to the previous version on failure.",
          },
        },
      ],
    },
    {
      id: "kubectl-commands",
      title: { vi: "kubectl Common Commands", en: "kubectl Common Commands" },
      snippets: [
        {
          id: "kubectl-logs-describe",
          title: { vi: "Xem log và describe", en: "Viewing logs and describe" },
          language: "bash",
          code: "kubectl logs -f pod-name\nkubectl describe pod pod-name",
          description: {
            vi: "logs xem output container, describe xem chi tiết event/trạng thái để debug.",
            en: "logs shows container output; describe shows detailed events/status for debugging.",
          },
        },
        {
          id: "kubectl-exec-delete",
          title: { vi: "Exec vào Pod / xoá resource", en: "Exec into a Pod / delete a resource" },
          language: "bash",
          code: "kubectl exec -it pod-name -- sh\nkubectl delete pod pod-name\nkubectl delete -f deployment.yaml",
          description: {
            vi: "Mở shell tương tác trong Pod để debug, hoặc xoá resource theo tên/file.",
            en: "Open an interactive shell inside a Pod for debugging, or delete a resource by name/file.",
          },
        },
      ],
    },
  ],
};

export default kubernetes;
