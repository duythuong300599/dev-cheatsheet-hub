import { codeToHtml } from "shiki";

/**
 * Highlight theo cả 2 theme cùng lúc (dual-theme output của shiki), dùng chung
 * biến CSS --shiki-light/--shiki-dark để chuyển đổi tức thì theo class `.dark`
 * mà không cần render lại phía client. Xem rule CSS tương ứng trong globals.css.
 */
export async function highlightCode(code: string, lang: string): Promise<string> {
  return codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });
}
