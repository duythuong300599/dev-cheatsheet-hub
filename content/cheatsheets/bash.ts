import type { Cheatsheet } from "@/content/schema";

const bash: Cheatsheet = {
  slug: "bash",
  title: "Bash",
  category: "tool",
  description: {
    vi: "Biến, điều kiện/vòng lặp, xử lý chuỗi, thao tác file và pipe/redirect cơ bản.",
    en: "Variables, conditionals/loops, string handling, file operations and basic pipes/redirection.",
  },
  status: "published",
  sections: [
    {
      id: "variables-basics",
      title: { vi: "Variables & Basics", en: "Variables & Basics" },
      snippets: [
        {
          id: "variable-basic",
          title: { vi: "Khai báo biến", en: "Declaring variables" },
          language: "bash",
          code: 'name="An"\necho "Xin chào $name"\necho "Xin chào ${name}!"',
          description: {
            vi: "Không có khoảng trắng quanh dấu =; dùng $ hoặc ${} để đọc giá trị biến.",
            en: "No spaces around =; use $ or ${} to read a variable's value.",
          },
        },
        {
          id: "command-substitution",
          title: { vi: "Command substitution", en: "Command substitution" },
          language: "bash",
          code: 'current_dir=$(pwd)\nfile_count=$(ls | wc -l)\necho "Có $file_count file trong $current_dir"',
          description: {
            vi: "Gán kết quả của 1 lệnh vào biến bằng cú pháp $(...).",
            en: "Assign a command's output to a variable using $(...) syntax.",
          },
        },
        {
          id: "positional-params",
          title: { vi: "Tham số dòng lệnh", en: "Command-line parameters" },
          language: "bash",
          code: '#!/bin/bash\necho "Script: $0"\necho "Tham số 1: $1"\necho "Tổng số tham số: $#"',
          description: {
            vi: "$0 là tên script, $1 $2... là tham số truyền vào, $# là số lượng tham số.",
            en: "$0 is the script name, $1 $2... are passed arguments, $# is the argument count.",
          },
        },
      ],
    },
    {
      id: "conditionals-loops",
      title: { vi: "Conditionals & Loops", en: "Conditionals & Loops" },
      snippets: [
        {
          id: "if-else",
          title: { vi: "if / elif / else", en: "if / elif / else" },
          language: "bash",
          code: 'if [ -f "config.json" ]; then\n  echo "Đã có config"\nelif [ -f "config.example.json" ]; then\n  echo "Dùng file mẫu"\nelse\n  echo "Không tìm thấy config"\nfi',
          description: {
            vi: "-f kiểm tra file tồn tại; luôn đặt khoảng trắng quanh [ ] trong test.",
            en: "-f checks whether a file exists; always put spaces around [ ] in a test.",
          },
        },
        {
          id: "for-loop",
          title: { vi: "for loop", en: "for loop" },
          language: "bash",
          code: 'for file in *.log; do\n  echo "Đang xử lý $file"\ndone',
          description: {
            vi: "Duyệt qua danh sách file khớp pattern *.log trong thư mục hiện tại.",
            en: "Iterate over files matching the *.log pattern in the current directory.",
          },
        },
        {
          id: "while-loop",
          title: { vi: "while loop", en: "while loop" },
          language: "bash",
          code: 'count=0\nwhile [ $count -lt 5 ]; do\n  echo "Lần $count"\n  count=$((count + 1))\ndone',
          description: {
            vi: "Lặp khi điều kiện còn đúng; $((...)) dùng cho phép tính số học.",
            en: "Loop while a condition holds; $((...)) is used for arithmetic.",
          },
        },
      ],
    },
    {
      id: "string-manipulation",
      title: { vi: "String Manipulation", en: "String Manipulation" },
      snippets: [
        {
          id: "string-length-substring",
          title: { vi: "Độ dài và cắt chuỗi", en: "String length and substrings" },
          language: "bash",
          code: 'text="Hello World"\necho ${#text}        # 11\necho ${text:0:5}     # Hello\necho ${text:6}       # World',
          description: {
            vi: "${#var} lấy độ dài, ${var:start:length} cắt chuỗi con.",
            en: "${#var} gets the length, ${var:start:length} extracts a substring.",
          },
        },
        {
          id: "string-replace",
          title: { vi: "Thay thế chuỗi con", en: "Replacing a substring" },
          language: "bash",
          code: 'path="/usr/local/bin"\necho ${path/local/opt}   # /usr/opt/bin',
          description: {
            vi: "${var/old/new} thay thế lần xuất hiện đầu tiên của old bằng new.",
            en: "${var/old/new} replaces the first occurrence of old with new.",
          },
        },
        {
          id: "string-default-value",
          title: { vi: "Giá trị mặc định nếu biến rỗng", en: "Default value when a variable is empty" },
          language: "bash",
          code: 'port=${PORT:-3000}\necho "Chạy trên cổng $port"',
          description: {
            vi: "${var:-default} trả về default nếu var chưa set hoặc rỗng.",
            en: "${var:-default} returns default if var is unset or empty.",
          },
        },
      ],
    },
    {
      id: "file-operations",
      title: { vi: "File Operations", en: "File Operations" },
      snippets: [
        {
          id: "find-command",
          title: { vi: "find — tìm file", en: "find — search for files" },
          language: "bash",
          code: 'find . -name "*.test.js" -type f\nfind . -mtime -1   # sửa đổi trong 1 ngày gần nhất',
          description: {
            vi: "Tìm file theo tên, loại (-type f là file thường) hoặc thời gian sửa đổi.",
            en: "Find files by name, type (-type f is a regular file), or modification time.",
          },
        },
        {
          id: "chmod-permissions",
          title: { vi: "chmod — phân quyền file", en: "chmod — file permissions" },
          language: "bash",
          code: "chmod +x deploy.sh\nchmod 644 config.json",
          description: {
            vi: "+x thêm quyền thực thi; 644 = rw-r--r-- (owner đọc/ghi, người khác chỉ đọc).",
            en: "+x adds execute permission; 644 = rw-r--r-- (owner read/write, others read-only).",
          },
        },
        {
          id: "mkdir-p",
          title: { vi: "Tạo thư mục lồng nhau", en: "Creating nested directories" },
          language: "bash",
          code: "mkdir -p src/components/ui",
          description: {
            vi: "-p tự tạo các thư mục cha nếu chưa tồn tại, không báo lỗi nếu đã có.",
            en: "-p creates parent directories as needed, without erroring if they already exist.",
          },
        },
      ],
    },
    {
      id: "permissions-ownership",
      title: { vi: "Permissions & Ownership", en: "Permissions & Ownership" },
      snippets: [
        {
          id: "read-ls-permissions",
          title: { vi: "Đọc quyền qua ls -l", en: "Reading permissions with ls -l" },
          language: "bash",
          code: "ls -l deploy.sh\n# -rwxr-xr-- 1 ubuntu ubuntu 128 Sep 17 10:00 deploy.sh\n#  ^^^^^^^^^\n#  owner(rwx) group(r-x) others(r--)",
          description: {
            vi: "10 ký tự đầu: loại file (- là file thường, d là thư mục), sau đó 3 nhóm quyền rwx cho owner/group/others.",
            en: "First 10 characters: file type (- regular file, d directory), then 3 rwx groups for owner/group/others.",
          },
        },
        {
          id: "chmod-symbolic-numeric",
          title: { vi: "chmod: ký hiệu vs số", en: "chmod: symbolic vs numeric" },
          language: "bash",
          code: "chmod u+x deploy.sh        # thêm quyền thực thi cho owner\nchmod g-w,o-rwx config.json # bỏ write của group, bỏ hết quyền others\nchmod 755 script.sh         # rwxr-xr-x (7=rwx, 5=r-x, 5=r-x)\nchmod -R 644 ./public       # áp dụng đệ quy cho cả thư mục con",
          description: {
            vi: "Ký hiệu (u/g/o + /-/=) sửa từng phần; số (r=4, w=2, x=1 cộng lại) gán trạng thái tuyệt đối trong 1 lệnh. -R áp dụng đệ quy.",
            en: "Symbolic (u/g/o with +/-/=) edits specific bits; numeric (r=4, w=2, x=1 summed) sets absolute state in one command. -R applies recursively.",
          },
        },
        {
          id: "chown-chgrp",
          title: { vi: "chown / chgrp — đổi owner/group", en: "chown / chgrp — change owner/group" },
          language: "bash",
          code: "sudo chown app:app /var/www/app     # đổi cả owner lẫn group\nsudo chown -R app ./dist            # chỉ đổi owner, đệ quy\nsudo chgrp docker /var/run/docker.sock",
          description: {
            vi: "chown đổi owner (và group nếu ghi owner:group); chgrp chỉ đổi group. Thường cần sudo vì đổi quyền sở hữu file người khác.",
            en: "chown changes the owner (and group if written owner:group); chgrp changes only the group. Usually needs sudo since you're changing another file's ownership.",
          },
        },
        {
          id: "special-permission-bits",
          title: { vi: "Special bit: setuid/setgid/sticky", en: "Special bits: setuid/setgid/sticky" },
          language: "bash",
          code: "chmod u+s /usr/bin/some-binary   # setuid — chạy với quyền owner thay vì người gọi\nchmod g+s ./shared-folder         # setgid — file mới tạo trong thư mục thừa kế group\nchmod +t /tmp                     # sticky bit — chỉ owner mới xoá được file của mình",
          description: {
            vi: "3 bit đặc biệt ít dùng nhưng hay bị hỏi: setuid/setgid đổi quyền thực thi theo owner/group, sticky bit (thường thấy ở /tmp) ngăn user khác xoá file không phải của mình dù có quyền ghi thư mục.",
            en: "3 special bits, rarely used but commonly asked about: setuid/setgid run with the file's owner/group identity, sticky bit (common on /tmp) stops other users from deleting files they don't own even with write access to the directory.",
          },
        },
        {
          id: "umask-default-permission",
          title: { vi: "umask — quyền mặc định khi tạo file", en: "umask — default permission on creation" },
          language: "bash",
          code: "umask          # xem giá trị hiện tại, vd 0022\numask 0027     # đặt umask mới cho session hiện tại\n# File mới tạo: 666 - umask; thư mục mới: 777 - umask",
          description: {
            vi: "umask trừ bớt quyền mặc định khi file/thư mục mới được tạo — umask 022 khiến file mới thành 644 thay vì 666.",
            en: "umask subtracts from the default permissions of newly created files/directories — umask 022 makes new files 644 instead of 666.",
          },
        },
        {
          id: "sudo-basics",
          title: { vi: "sudo — chạy lệnh với quyền cao hơn", en: "sudo — run a command with elevated privileges" },
          language: "bash",
          code: "sudo systemctl restart nginx\nsudo -u postgres psql          # chạy lệnh với quyền user khác (không phải root)\nsudo -n true && echo \"passwordless sudo OK\"",
          description: {
            vi: "sudo -u <user> chạy lệnh dưới danh nghĩa user cụ thể, không nhất thiết phải là root. sudo -n kiểm tra có cấu hình passwordless sudo hay không (hữu ích khi tự động hoá qua script/CI).",
            en: "sudo -u <user> runs a command as a specific user, not necessarily root. sudo -n checks whether passwordless sudo is configured (useful when automating via scripts/CI).",
          },
        },
      ],
    },
    {
      id: "pipes-redirection",
      title: { vi: "Pipes & Redirection", en: "Pipes & Redirection" },
      snippets: [
        {
          id: "pipe-grep",
          title: { vi: "Pipe kết hợp grep", en: "Piping with grep" },
          language: "bash",
          code: 'ps aux | grep "node"\ncat access.log | grep "500" | wc -l',
          description: {
            vi: "Chuyển output của lệnh trước làm input cho lệnh sau qua dấu |.",
            en: "Pass one command's output as input to the next via the | operator.",
          },
        },
        {
          id: "redirect-output",
          title: { vi: "Redirect output ra file", en: "Redirecting output to a file" },
          language: "bash",
          code: 'npm run build > build.log 2>&1\necho "done" >> build.log',
          description: {
            vi: "> ghi đè file, >> nối thêm vào cuối; 2>&1 gộp cả stderr vào cùng output.",
            en: "> overwrites a file, >> appends; 2>&1 merges stderr into the same output.",
          },
        },
        {
          id: "heredoc",
          title: { vi: "Heredoc — nhập nhiều dòng", en: "Heredoc — multi-line input" },
          language: "bash",
          code: "cat << EOF > notes.txt\nDòng 1\nDòng 2\nEOF",
          description: {
            vi: "Ghi nội dung nhiều dòng vào file mà không cần echo từng dòng.",
            en: "Write multi-line content to a file without echoing each line.",
          },
        },
      ],
    },
  ],
};

export default bash;
