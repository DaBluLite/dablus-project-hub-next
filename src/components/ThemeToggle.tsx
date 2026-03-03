"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sunny, Monitor, MoonStars } from '@nine-thirty-five/material-symbols-react/rounded/filled';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
        onClick={() => {
          if (theme === "light") setTheme("dark");
          else if (theme === "dark") setTheme("system");
          else setTheme("light");
        }}
        className="bg-white/60 dark:bg-accent-800/20 hover:bg-primary-50/60 dark:hover:bg-accent-800/60 flex items-center gap-2 p-3 rounded-full cursor-pointer border-primary-700/20 dark:border-accent-700/20 shadow-sm shadow-primary-700/10 dark:shadow-black/10 md:border-0.5 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" && <Sunny className="text-black dark:text-white" height={20} width={20}/>}
        {theme === "system" && <Monitor className="text-black dark:text-white" height={20} width={20}/>}
        {theme === "dark" && <MoonStars className="text-black dark:text-white" height={20} width={20}/>}
      </button>
  );
}
