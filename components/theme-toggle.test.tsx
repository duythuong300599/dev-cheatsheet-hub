import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { ThemeToggle } from "@/components/theme-toggle";

beforeEach(() => {
  document.documentElement.className = "";
  localStorage.clear();
});

function renderWithProvider() {
  return render(
    <LocaleProvider>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </LocaleProvider>,
  );
}

describe("ThemeToggle", () => {
  it("mounts and renders a toggle button", async () => {
    renderWithProvider();
    await waitFor(() => {
      expect(screen.getByRole("button")).not.toBeDisabled();
    });
  });

  it("switches to dark theme and persists to localStorage on click", async () => {
    renderWithProvider();
    const button = await screen.findByRole("button");
    await waitFor(() => expect(button).not.toBeDisabled());

    fireEvent.click(button);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("switches back to light theme on second click", async () => {
    renderWithProvider();
    const button = await screen.findByRole("button");
    await waitFor(() => expect(button).not.toBeDisabled());

    fireEvent.click(button);
    await waitFor(() => expect(document.documentElement.classList.contains("dark")).toBe(true));

    fireEvent.click(button);
    await waitFor(() => expect(document.documentElement.classList.contains("dark")).toBe(false));
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
