import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const STORAGE_KEY = "mu-portfolio-theme";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

function getInitialTheme(defaultTheme: Theme, switchable: boolean): Theme {
  if (!switchable || typeof window === "undefined") return defaultTheme;

  const queryTheme = new URLSearchParams(window.location.search).get("theme");
  if (queryTheme === "light" || queryTheme === "dark") return queryTheme;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : defaultTheme;
}

export function ThemeProvider({ children, defaultTheme = "light", switchable = false }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(defaultTheme, switchable));

  useEffect(() => {
    const root = document.documentElement;
    const themeColor = document.querySelector('meta[name="theme-color"]');

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#080f1f" : "#0b1428");

    if (switchable) window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, switchable]);

  const toggleTheme = switchable ? () => setTheme((current) => (current === "light" ? "dark" : "light")) : undefined;

  return <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
