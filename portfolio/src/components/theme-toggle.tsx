"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (theme ?? resolvedTheme) === "dark" || resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 w-9 h-9 hover:bg-black/5 dark:hover:bg-white/5"
      onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
