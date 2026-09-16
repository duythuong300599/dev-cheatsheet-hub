import type { Cheatsheet } from "@/content/schema";

const git: Cheatsheet = {
  slug: "git",
  title: "Git",
  category: "tool",
  description: "Lệnh Git cơ bản: branch, commit, merge, rebase, stash, remote.",
  status: "published",
  sections: [
    {
      id: "init-config",
      title: "Khởi tạo & Cấu hình",
      snippets: [
        {
          id: "git-init",
          title: "Khởi tạo repo mới",
          language: "bash",
          code: "git init",
          description: "Tạo repository Git mới trong thư mục hiện tại.",
        },
        {
          id: "git-config-user",
          title: "Cấu hình tên/email",
          language: "bash",
          code: 'git config --global user.name "Tên bạn"\ngit config --global user.email "ban@example.com"',
          description: "Thiết lập thông tin tác giả commit cho toàn bộ máy.",
        },
        {
          id: "git-clone",
          title: "Clone repo",
          language: "bash",
          code: "git clone https://example.com/repo.git",
          description: "Sao chép repo từ xa về máy, giữ nguyên toàn bộ lịch sử.",
        },
      ],
    },
    {
      id: "branch-checkout",
      title: "Branch & Checkout",
      snippets: [
        {
          id: "git-branch-create",
          title: "Tạo branch mới",
          language: "bash",
          code: "git branch feature/login",
          description: "Tạo branch mới nhưng chưa chuyển sang branch đó.",
        },
        {
          id: "git-switch",
          title: "Chuyển branch",
          language: "bash",
          code: "git switch feature/login\n# hoặc: git checkout feature/login",
          description: "Chuyển working directory sang branch khác.",
        },
        {
          id: "git-switch-create",
          title: "Tạo + chuyển branch trong 1 lệnh",
          language: "bash",
          code: "git switch -c feature/login\n# hoặc: git checkout -b feature/login",
          description: "Tạo branch mới và chuyển sang ngay lập tức.",
        },
        {
          id: "git-branch-delete",
          title: "Xoá branch",
          language: "bash",
          code: "git branch -d feature/login\ngit branch -D feature/login  # ép xoá dù chưa merge",
          description: "Xoá branch cục bộ đã merge (-d) hoặc chưa merge (-D).",
        },
      ],
    },
    {
      id: "commit-history",
      title: "Commit & History",
      snippets: [
        {
          id: "git-add-commit",
          title: "Add + commit",
          language: "bash",
          code: 'git add .\ngit commit -m "feat: thêm chức năng đăng nhập"',
          description: "Đưa thay đổi vào staging area rồi tạo commit mới.",
        },
        {
          id: "git-commit-amend",
          title: "Sửa commit gần nhất",
          language: "bash",
          code: "git commit --amend -m \"message mới\"",
          description: "Sửa message hoặc gộp thêm thay đổi vào commit vừa tạo (chưa push).",
        },
        {
          id: "git-log-oneline",
          title: "Xem lịch sử ngắn gọn",
          language: "bash",
          code: "git log --oneline --graph --decorate",
          description: "Xem lịch sử commit dạng cây, mỗi commit 1 dòng.",
        },
        {
          id: "git-diff",
          title: "Xem thay đổi chưa commit",
          language: "bash",
          code: "git diff              # thay đổi chưa staged\ngit diff --staged     # thay đổi đã staged",
          description: "So sánh nội dung file hiện tại với lần commit gần nhất.",
        },
      ],
    },
    {
      id: "merge-rebase",
      title: "Merge & Rebase",
      snippets: [
        {
          id: "git-merge",
          title: "Merge branch vào nhánh hiện tại",
          language: "bash",
          code: "git switch main\ngit merge feature/login",
          description: "Gộp lịch sử của feature/login vào main, tạo merge commit nếu cần.",
        },
        {
          id: "git-rebase",
          title: "Rebase lên main mới nhất",
          language: "bash",
          code: "git switch feature/login\ngit rebase main",
          description: "Viết lại lịch sử branch hiện tại để nối tiếp commit mới nhất của main.",
        },
        {
          id: "git-rebase-continue",
          title: "Tiếp tục rebase sau khi giải quyết conflict",
          language: "bash",
          code: "# sửa file conflict xong\ngit add .\ngit rebase --continue",
          description: "Đánh dấu conflict đã xử lý và tiếp tục quá trình rebase.",
        },
        {
          id: "git-rebase-interactive-squash",
          title: "Gộp commit bằng rebase -i",
          language: "bash",
          code: "git rebase -i HEAD~3\n# đổi \"pick\" thành \"squash\" cho các commit muốn gộp",
          description: "Gộp nhiều commit gần nhất thành 1 commit sạch trước khi push.",
        },
      ],
    },
    {
      id: "stash-undo",
      title: "Stash & Undo",
      snippets: [
        {
          id: "git-stash",
          title: "Tạm cất thay đổi",
          language: "bash",
          code: 'git stash push -m "wip: đang dở form đăng ký"',
          description: "Lưu tạm thay đổi chưa commit để chuyển việc khác, working directory sạch trở lại.",
        },
        {
          id: "git-stash-pop",
          title: "Lấy lại thay đổi đã stash",
          language: "bash",
          code: "git stash list\ngit stash pop",
          description: "Áp dụng lại thay đổi đã stash gần nhất và xoá khỏi danh sách stash.",
        },
        {
          id: "git-reset-soft",
          title: "Undo commit, giữ thay đổi",
          language: "bash",
          code: "git reset --soft HEAD~1",
          description: "Bỏ commit gần nhất nhưng giữ nguyên thay đổi ở staging area.",
        },
        {
          id: "git-revert",
          title: "Revert commit đã push",
          language: "bash",
          code: "git revert <commit-hash>",
          description: "Tạo commit mới đảo ngược thay đổi, an toàn cho lịch sử đã chia sẻ.",
        },
      ],
    },
    {
      id: "remote",
      title: "Remote",
      snippets: [
        {
          id: "git-remote-add",
          title: "Thêm remote",
          language: "bash",
          code: "git remote add origin https://example.com/repo.git",
          description: "Liên kết repo cục bộ với repo từ xa tên là origin.",
        },
        {
          id: "git-push-upstream",
          title: "Push branch mới, đặt upstream",
          language: "bash",
          code: "git push -u origin feature/login",
          description: "Push branch lần đầu và liên kết theo dõi với branch trên remote.",
        },
        {
          id: "git-pull",
          title: "Cập nhật từ remote",
          language: "bash",
          code: "git pull origin main",
          description: "Kéo và merge (hoặc rebase, tuỳ config) thay đổi mới nhất từ remote.",
        },
      ],
    },
  ],
};

export default git;
