import type { Cheatsheet } from "@/content/schema";

const bash: Cheatsheet = {
  slug: "bash",
  title: "Bash",
  category: "tool",
  description: "Biến, điều kiện/vòng lặp, xử lý chuỗi, thao tác file và pipe/redirect cơ bản.",
  status: "published",
  sections: [
    {
      id: "variables-basics",
      title: "Variables & Basics",
      snippets: [
        {
          id: "variable-basic",
          title: "Khai báo biến",
          language: "bash",
          code: 'name="An"\necho "Xin chào $name"\necho "Xin chào ${name}!"',
          description: "Không có khoảng trắng quanh dấu =; dùng $ hoặc ${} để đọc giá trị biến.",
        },
        {
          id: "command-substitution",
          title: "Command substitution",
          language: "bash",
          code: 'current_dir=$(pwd)\nfile_count=$(ls | wc -l)\necho "Có $file_count file trong $current_dir"',
          description: "Gán kết quả của 1 lệnh vào biến bằng cú pháp $(...).",
        },
        {
          id: "positional-params",
          title: "Tham số dòng lệnh",
          language: "bash",
          code: '#!/bin/bash\necho "Script: $0"\necho "Tham số 1: $1"\necho "Tổng số tham số: $#"',
          description: "$0 là tên script, $1 $2... là tham số truyền vào, $# là số lượng tham số.",
        },
      ],
    },
    {
      id: "conditionals-loops",
      title: "Conditionals & Loops",
      snippets: [
        {
          id: "if-else",
          title: "if / elif / else",
          language: "bash",
          code: 'if [ -f "config.json" ]; then\n  echo "Đã có config"\nelif [ -f "config.example.json" ]; then\n  echo "Dùng file mẫu"\nelse\n  echo "Không tìm thấy config"\nfi',
          description: "-f kiểm tra file tồn tại; luôn đặt khoảng trắng quanh [ ] trong test.",
        },
        {
          id: "for-loop",
          title: "for loop",
          language: "bash",
          code: 'for file in *.log; do\n  echo "Đang xử lý $file"\ndone',
          description: "Duyệt qua danh sách file khớp pattern *.log trong thư mục hiện tại.",
        },
        {
          id: "while-loop",
          title: "while loop",
          language: "bash",
          code: 'count=0\nwhile [ $count -lt 5 ]; do\n  echo "Lần $count"\n  count=$((count + 1))\ndone',
          description: "Lặp khi điều kiện còn đúng; $((...)) dùng cho phép tính số học.",
        },
      ],
    },
    {
      id: "string-manipulation",
      title: "String Manipulation",
      snippets: [
        {
          id: "string-length-substring",
          title: "Độ dài và cắt chuỗi",
          language: "bash",
          code: 'text="Hello World"\necho ${#text}        # 11\necho ${text:0:5}     # Hello\necho ${text:6}       # World',
          description: "${#var} lấy độ dài, ${var:start:length} cắt chuỗi con.",
        },
        {
          id: "string-replace",
          title: "Thay thế chuỗi con",
          language: "bash",
          code: 'path="/usr/local/bin"\necho ${path/local/opt}   # /usr/opt/bin',
          description: "${var/old/new} thay thế lần xuất hiện đầu tiên của old bằng new.",
        },
        {
          id: "string-default-value",
          title: "Giá trị mặc định nếu biến rỗng",
          language: "bash",
          code: 'port=${PORT:-3000}\necho "Chạy trên cổng $port"',
          description: "${var:-default} trả về default nếu var chưa set hoặc rỗng.",
        },
      ],
    },
    {
      id: "file-operations",
      title: "File Operations",
      snippets: [
        {
          id: "find-command",
          title: "find — tìm file",
          language: "bash",
          code: 'find . -name "*.test.js" -type f\nfind . -mtime -1   # sửa đổi trong 1 ngày gần nhất',
          description: "Tìm file theo tên, loại (-type f là file thường) hoặc thời gian sửa đổi.",
        },
        {
          id: "chmod-permissions",
          title: "chmod — phân quyền file",
          language: "bash",
          code: "chmod +x deploy.sh\nchmod 644 config.json",
          description: "+x thêm quyền thực thi; 644 = rw-r--r-- (owner đọc/ghi, người khác chỉ đọc).",
        },
        {
          id: "mkdir-p",
          title: "Tạo thư mục lồng nhau",
          language: "bash",
          code: "mkdir -p src/components/ui",
          description: "-p tự tạo các thư mục cha nếu chưa tồn tại, không báo lỗi nếu đã có.",
        },
      ],
    },
    {
      id: "pipes-redirection",
      title: "Pipes & Redirection",
      snippets: [
        {
          id: "pipe-grep",
          title: "Pipe kết hợp grep",
          language: "bash",
          code: 'ps aux | grep "node"\ncat access.log | grep "500" | wc -l',
          description: "Chuyển output của lệnh trước làm input cho lệnh sau qua dấu |.",
        },
        {
          id: "redirect-output",
          title: "Redirect output ra file",
          language: "bash",
          code: "npm run build > build.log 2>&1\necho \"done\" >> build.log",
          description: "> ghi đè file, >> nối thêm vào cuối; 2>&1 gộp cả stderr vào cùng output.",
        },
        {
          id: "heredoc",
          title: "Heredoc — nhập nhiều dòng",
          language: "bash",
          code: 'cat << EOF > notes.txt\nDòng 1\nDòng 2\nEOF',
          description: "Ghi nội dung nhiều dòng vào file mà không cần echo từng dòng.",
        },
      ],
    },
  ],
};

export default bash;
