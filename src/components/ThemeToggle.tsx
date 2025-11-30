import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full text-left py-3 text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Sun size={20} />
          <span>Modo Claro</span>
        </>
      ) : (
        <>
          <Moon size={20} />
          <span>Modo Escuro</span>
        </>
      )}
    </button>
  );
};
