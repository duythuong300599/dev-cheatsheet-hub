import type { Cheatsheet } from "@/content/schema";

const kubernetes: Cheatsheet = {
  slug: "kubernetes",
  title: "Kubernetes",
  category: "devops",
  description: "Pod/Deployment, Service, ConfigMap/Secret, scaling và lệnh kubectl hay dùng.",
  status: "published",
  sections: [
    {
      id: "pods-deployments",
      title: "Pods & Deployments",
      snippets: [
        {
          id: "deployment-basic",
          title: "Deployment cơ bản",
          language: "bash",
          code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      containers:\n        - name: api\n          image: myapp:1.0\n          ports:\n            - containerPort: 3000",
          description: "Deployment quản lý số lượng Pod mong muốn (replicas) và tự phục hồi khi Pod chết.",
        },
        {
          id: "apply-manifest",
          title: "Áp dụng manifest",
          language: "bash",
          code: "kubectl apply -f deployment.yaml\nkubectl get pods\nkubectl get deployments",
          description: "apply tạo mới hoặc cập nhật resource theo file YAML mô tả trạng thái mong muốn.",
        },
      ],
    },
    {
      id: "services-networking",
      title: "Services & Networking",
      snippets: [
        {
          id: "service-clusterip",
          title: "Service (ClusterIP mặc định)",
          language: "bash",
          code: "apiVersion: v1\nkind: Service\nmetadata:\n  name: api-service\nspec:\n  selector:\n    app: api\n  ports:\n    - port: 80\n      targetPort: 3000",
          description: "Service cấp 1 địa chỉ ổn định để truy cập tới các Pod có cùng label (selector).",
        },
        {
          id: "service-nodeport-lb",
          title: "NodePort vs LoadBalancer",
          language: "bash",
          code: "spec:\n  type: LoadBalancer   # hoặc NodePort\n  ports:\n    - port: 80\n      targetPort: 3000",
          description: "LoadBalancer cấp IP public qua cloud provider, NodePort mở cổng cố định trên mỗi node.",
        },
      ],
    },
    {
      id: "configmap-secret",
      title: "ConfigMap & Secret",
      snippets: [
        {
          id: "configmap-basic",
          title: "ConfigMap",
          language: "bash",
          code: "kubectl create configmap app-config \\\n  --from-literal=LOG_LEVEL=info",
          description: "Lưu cấu hình không nhạy cảm (env var, file config) tách biệt khỏi image.",
        },
        {
          id: "secret-basic",
          title: "Secret",
          language: "bash",
          code: "kubectl create secret generic db-secret \\\n  --from-literal=DB_PASSWORD=supersecret",
          description: "Lưu dữ liệu nhạy cảm (mật khẩu, token), Kubernetes tự mã hoá base64 khi lưu trữ.",
        },
        {
          id: "env-from-configmap",
          title: "Dùng ConfigMap làm env var",
          language: "bash",
          code: "spec:\n  containers:\n    - name: api\n      envFrom:\n        - configMapRef:\n            name: app-config",
          description: "Nạp toàn bộ key trong ConfigMap thành biến môi trường cho container.",
        },
      ],
    },
    {
      id: "scaling-rollout",
      title: "Scaling & Rollout",
      snippets: [
        {
          id: "kubectl-scale",
          title: "Scale thủ công",
          language: "bash",
          code: "kubectl scale deployment api-deployment --replicas=5",
          description: "Tăng/giảm số lượng Pod đang chạy ngay lập tức.",
        },
        {
          id: "rollout-status-undo",
          title: "Theo dõi & rollback rollout",
          language: "bash",
          code: "kubectl rollout status deployment/api-deployment\nkubectl rollout undo deployment/api-deployment",
          description: "Xem tiến trình deploy phiên bản mới, hoặc rollback về phiên bản trước nếu lỗi.",
        },
      ],
    },
    {
      id: "kubectl-commands",
      title: "kubectl Common Commands",
      snippets: [
        {
          id: "kubectl-logs-describe",
          title: "Xem log và describe",
          language: "bash",
          code: "kubectl logs -f pod-name\nkubectl describe pod pod-name",
          description: "logs xem output container, describe xem chi tiết event/trạng thái để debug.",
        },
        {
          id: "kubectl-exec-delete",
          title: "Exec vào Pod / xoá resource",
          language: "bash",
          code: "kubectl exec -it pod-name -- sh\nkubectl delete pod pod-name\nkubectl delete -f deployment.yaml",
          description: "Mở shell tương tác trong Pod để debug, hoặc xoá resource theo tên/file.",
        },
      ],
    },
  ],
};

export default kubernetes;
