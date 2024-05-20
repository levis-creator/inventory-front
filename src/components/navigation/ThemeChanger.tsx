"use client";
import { Moon, Sun } from "lucide-react";
import IconButton from "../form/IconButton";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <IconButton
      icon={theme === "light" ? <Sun /> : <Moon />}
      iconDescription="Theme changer"
      onClick={handleThemeChange}
    />
  );
};

export default ThemeChanger;
