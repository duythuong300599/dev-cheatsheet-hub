import type { Cheatsheet } from "@/content/schema";

const git: Cheatsheet = {
  slug: "git",
  title: "Git",
  category: "tool",
  description: {
    vi: "Lệnh Git cơ bản: branch, commit, merge, rebase, stash, remote.",
    en: "Basic Git commands: branch, commit, merge, rebase, stash, remote.",
  },
  status: "published",
  sections: [
    {
      id: "init-config",
      title: { vi: "Khởi tạo & Cấu hình", en: "Init & Config" },
      snippets: [
        {
          id: "git-init",
          title: { vi: "Khởi tạo repo mới", en: "Initialize a new repo" },
          language: "bash",
          code: "git init",
          description: {
            vi: "Tạo repository Git mới trong thư mục hiện tại.",
            en: "Create a new Git repository in the current directory.",
          },
        },
        {
          id: "git-config-user",
          title: { vi: "Cấu hình tên/email", en: "Configure name/email" },
          language: "bash",
          code: 'git config --global user.name "Tên bạn"\ngit config --global user.email "ban@example.com"',
          description: {
            vi: "Thiết lập thông tin tác giả commit cho toàn bộ máy.",
            en: "Set the commit author info globally on this machine.",
          },
        },
        {
          id: "git-clone",
          title: { vi: "Clone repo", en: "Clone a repo" },
          language: "bash",
          code: "git clone https://example.com/repo.git",
          description: {
            vi: "Sao chép repo từ xa về máy, giữ nguyên toàn bộ lịch sử.",
            en: "Copy a remote repo to your machine, keeping the full history.",
          },
        },
      ],
    },
    {
      id: "branch-checkout",
      title: { vi: "Branch & Checkout", en: "Branch & Checkout" },
      snippets: [
        {
          id: "git-branch-create",
          title: { vi: "Tạo branch mới", en: "Create a new branch" },
          language: "bash",
          code: "git branch feature/login",
          description: {
            vi: "Tạo branch mới nhưng chưa chuyển sang branch đó.",
            en: "Create a new branch without switching to it.",
          },
        },
        {
          id: "git-switch",
          title: { vi: "Chuyển branch", en: "Switch branch" },
          language: "bash",
          code: "git switch feature/login\n# hoặc: git checkout feature/login",
          description: {
            vi: "Chuyển working directory sang branch khác.",
            en: "Switch the working directory to another branch.",
          },
        },
        {
          id: "git-switch-create",
          title: {
            vi: "Tạo + chuyển branch trong 1 lệnh",
            en: "Create + switch branch in one command",
          },
          language: "bash",
          code: "git switch -c feature/login\n# hoặc: git checkout -b feature/login",
          description: {
            vi: "Tạo branch mới và chuyển sang ngay lập tức.",
            en: "Create a new branch and switch to it immediately.",
          },
        },
        {
          id: "git-branch-delete",
          title: { vi: "Xoá branch", en: "Delete a branch" },
          language: "bash",
          code: "git branch -d feature/login\ngit branch -D feature/login  # ép xoá dù chưa merge",
          description: {
            vi: "Xoá branch cục bộ đã merge (-d) hoặc chưa merge (-D).",
            en: "Delete a local branch that's merged (-d) or force-delete an unmerged one (-D).",
          },
        },
      ],
    },
    {
      id: "commit-history",
      title: { vi: "Commit & History", en: "Commit & History" },
      snippets: [
        {
          id: "git-add-commit",
          title: { vi: "Add + commit", en: "Add + commit" },
          language: "bash",
          code: 'git add .\ngit commit -m "feat: thêm chức năng đăng nhập"',
          description: {
            vi: "Đưa thay đổi vào staging area rồi tạo commit mới.",
            en: "Stage changes and create a new commit.",
          },
        },
        {
          id: "git-commit-amend",
          title: { vi: "Sửa commit gần nhất", en: "Amend the last commit" },
          language: "bash",
          code: 'git commit --amend -m "message mới"',
          description: {
            vi: "Sửa message hoặc gộp thêm thay đổi vào commit vừa tạo (chưa push).",
            en: "Edit the message or fold more changes into the commit you just made (not pushed yet).",
          },
        },
        {
          id: "git-log-oneline",
          title: { vi: "Xem lịch sử ngắn gọn", en: "View concise history" },
          language: "bash",
          code: "git log --oneline --graph --decorate",
          description: {
            vi: "Xem lịch sử commit dạng cây, mỗi commit 1 dòng.",
            en: "View commit history as a graph, one line per commit.",
          },
        },
        {
          id: "git-diff",
          title: { vi: "Xem thay đổi chưa commit", en: "View uncommitted changes" },
          language: "bash",
          code: "git diff              # thay đổi chưa staged\ngit diff --staged     # thay đổi đã staged",
          description: {
            vi: "So sánh nội dung file hiện tại với lần commit gần nhất.",
            en: "Compare the current file contents against the last commit.",
          },
        },
      ],
    },
    {
      id: "merge-rebase",
      title: { vi: "Merge & Rebase", en: "Merge & Rebase" },
      snippets: [
        {
          id: "git-merge",
          title: { vi: "Merge branch vào nhánh hiện tại", en: "Merge a branch into the current one" },
          language: "bash",
          code: "git switch main\ngit merge feature/login",
          description: {
            vi: "Gộp lịch sử của feature/login vào main, tạo merge commit nếu cần.",
            en: "Merge feature/login's history into main, creating a merge commit if needed.",
          },
        },
        {
          id: "git-rebase",
          title: { vi: "Rebase lên main mới nhất", en: "Rebase onto the latest main" },
          language: "bash",
          code: "git switch feature/login\ngit rebase main",
          description: {
            vi: "Viết lại lịch sử branch hiện tại để nối tiếp commit mới nhất của main.",
            en: "Rewrite the current branch's history to build on main's latest commit.",
          },
        },
        {
          id: "git-rebase-continue",
          title: {
            vi: "Tiếp tục rebase sau khi giải quyết conflict",
            en: "Continue a rebase after resolving conflicts",
          },
          language: "bash",
          code: "# sửa file conflict xong\ngit add .\ngit rebase --continue",
          description: {
            vi: "Đánh dấu conflict đã xử lý và tiếp tục quá trình rebase.",
            en: "Mark conflicts as resolved and continue the rebase.",
          },
        },
        {
          id: "git-rebase-interactive-squash",
          title: { vi: "Gộp commit bằng rebase -i", en: "Squash commits with rebase -i" },
          language: "bash",
          code: 'git rebase -i HEAD~3\n# đổi "pick" thành "squash" cho các commit muốn gộp',
          description: {
            vi: "Gộp nhiều commit gần nhất thành 1 commit sạch trước khi push.",
            en: "Squash several recent commits into one clean commit before pushing.",
          },
        },
      ],
    },
    {
      id: "stash-undo",
      title: { vi: "Stash & Undo", en: "Stash & Undo" },
      snippets: [
        {
          id: "git-stash",
          title: { vi: "Tạm cất thay đổi", en: "Stash changes" },
          language: "bash",
          code: 'git stash push -m "wip: đang dở form đăng ký"',
          description: {
            vi: "Lưu tạm thay đổi chưa commit để chuyển việc khác, working directory sạch trở lại.",
            en: "Temporarily save uncommitted changes to switch tasks, leaving a clean working directory.",
          },
        },
        {
          id: "git-stash-pop",
          title: { vi: "Lấy lại thay đổi đã stash", en: "Restore stashed changes" },
          language: "bash",
          code: "git stash list\ngit stash pop",
          description: {
            vi: "Áp dụng lại thay đổi đã stash gần nhất và xoá khỏi danh sách stash.",
            en: "Reapply the most recent stash and remove it from the stash list.",
          },
        },
        {
          id: "git-reset-soft",
          title: { vi: "Undo commit, giữ thay đổi", en: "Undo a commit, keep the changes" },
          language: "bash",
          code: "git reset --soft HEAD~1",
          description: {
            vi: "Bỏ commit gần nhất nhưng giữ nguyên thay đổi ở staging area.",
            en: "Remove the last commit but keep its changes staged.",
          },
        },
        {
          id: "git-revert",
          title: { vi: "Revert commit đã push", en: "Revert a pushed commit" },
          language: "bash",
          code: "git revert <commit-hash>",
          description: {
            vi: "Tạo commit mới đảo ngược thay đổi, an toàn cho lịch sử đã chia sẻ.",
            en: "Create a new commit that undoes changes — safe for shared history.",
          },
        },
      ],
    },
    {
      id: "remote",
      title: { vi: "Remote", en: "Remote" },
      snippets: [
        {
          id: "git-remote-add",
          title: { vi: "Thêm remote", en: "Add a remote" },
          language: "bash",
          code: "git remote add origin https://example.com/repo.git",
          description: {
            vi: "Liên kết repo cục bộ với repo từ xa tên là origin.",
            en: "Link the local repo to a remote repo named origin.",
          },
        },
        {
          id: "git-push-upstream",
          title: { vi: "Push branch mới, đặt upstream", en: "Push a new branch and set upstream" },
          language: "bash",
          code: "git push -u origin feature/login",
          description: {
            vi: "Push branch lần đầu và liên kết theo dõi với branch trên remote.",
            en: "Push a branch for the first time and link it to track the remote branch.",
          },
        },
        {
          id: "git-pull",
          title: { vi: "Cập nhật từ remote", en: "Update from remote" },
          language: "bash",
          code: "git pull origin main",
          description: {
            vi: "Kéo và merge (hoặc rebase, tuỳ config) thay đổi mới nhất từ remote.",
            en: "Fetch and merge (or rebase, depending on config) the latest changes from remote.",
          },
        },
      ],
    },
  ],
};

export default git;
