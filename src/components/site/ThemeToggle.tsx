import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
      className="group inline-flex h-10 w-10 items-center justify-center border-[3px] border-on-surface bg-surface-container text-on-surface shadow-[3px_3px_0_0_var(--on-surface)] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-primary dark:bg-surface-container-high dark:text-primary dark:shadow-[3px_3px_0_0_var(--primary)]"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={2.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={2.5} />
      )}
    </button>
  );
}
