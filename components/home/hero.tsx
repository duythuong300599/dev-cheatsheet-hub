export function Hero() {
  return (
    <div className="flex flex-col gap-2 border-b border-border px-4 py-8 text-center sm:py-12">
      <h1 className="font-sans text-3xl font-bold sm:text-4xl">Dev Cheatsheet Hub</h1>
      <p className="mx-auto max-w-xl text-sm text-muted-foreground">
        Tra cứu cú pháp nhanh cho ngôn ngữ, framework và công cụ bạn dùng hàng ngày. Nhấn{" "}
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>{" "}
        để tìm kiếm bất cứ đâu.
      </p>
    </div>
  );
}
