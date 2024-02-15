"use client";

import { cva } from "class-variance-authority";
import { Circle, Moon, Sun } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const itemVariants = cva(
  "inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground",
  {
    variants: {
      active: {
        true: "text-secondary-foreground",
      },
    },
  }
);

export function ThemeSwitch(): JSX.Element {
  const { setTheme } = useTheme();

  const [active, setActive] = useState(false);

  return (
    <>
      <button
        type="button"
        className="dark:inline-flex hidden items-center rounded-full border p-0.5 max-lg:hidden"
        aria-label="Toggle Theme"
        onClick={() => {
          setActive((prev) => !prev);
          setTheme(active ? "light" : "dark");
        }}
      >
        <>
          <Sun className="lucide lucide-sun size-7 rounded-full p-1.5 bg-accent text-accent-foreground dark:bg-transparent dark:text-muted-foreground" />
          <Moon className="lucide lucide-moon size-7 rounded-full p-1.5 text-muted-foreground dark:bg-accent dark:text-accent-foreground" />
        </>
      </button>

      <button
        type="button"
        className="dark:hidden inline-flex items-center rounded-full border p-0.5"
        aria-label="Toggle Theme"
        onClick={() => {
          setActive((prev) => !prev);
          setTheme(active ? "light" : "dark");
        }}
      >
        <>
          <Sun className="lucide lucide-sun size-7 rounded-full p-1.5 bg-accent text-accent-foreground dark:bg-transparent dark:text-muted-foreground" />
          <Moon className="lucide lucide-moon size-7 rounded-full p-1.5 text-muted-foreground dark:bg-accent dark:text-accent-foreground" />
        </>
      </button>
    </>
  );
}
