"use client";
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
const themeArray = ["dark", "light"];
const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] text-white dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      {/* <span className="sr-only">Toggle theme</span> */}
    </Button>
  );
};

export default ToggleTheme;
