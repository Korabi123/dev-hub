"use client"

import * as React from "react"
import { MoonIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Switch } from "./switch";

interface ToggleProps {
  showIcon?: boolean;
}

export function ModeToggle({ showIcon = false }: ToggleProps) {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <div className="flex items-center space-x-4">
      <>
        <Switch defaultValue={"dark"} defaultChecked={resolvedTheme === "dark" ? true : false} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          {showIcon ? <MoonIcon className="w-4 h-4 text-gray-900 dark:text-gray-100 translate-x-6" /> : null}
        </Switch>
        {showIcon ? <MoonIcon className="w-6 h-6" /> : null}
      </>
    </div>
  );
}
