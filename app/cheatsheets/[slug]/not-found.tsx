import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheatsheetNotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 className="font-sans text-2xl font-bold">Không tìm thấy cheat sheet</h1>
      <p className="text-sm text-muted-foreground">
        Cheat sheet bạn tìm không tồn tại hoặc chưa được xuất bản.
      </p>
      <Button render={<Link href="/" />}>Về trang chủ</Button>
    </div>
  );
}
