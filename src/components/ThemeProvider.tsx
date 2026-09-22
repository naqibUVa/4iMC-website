"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light-academic" | "dark-scientific" | "multiplex-imaging";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { id: Theme; label: string; icon: string; description: string }[];
}

const THEMES: { id: Theme; label: string; icon: string; description: string }[] = [
  {
    id: "light-academic",
    label: "Light Academic",
    icon: "🏛️",
    description: "Duke-blue accents on clean academic white canvas",
  },
  {
    id: "dark-scientific",
    label: "Dark Scientific",
    icon: "🔭",
    description: "Dark navy observatory feel with bright cyan data accents",
  },
  {
    id: "multiplex-imaging",
    label: "Multiplex Imaging",
    icon: "🔬",
    description: "Multi-spectral fluorescent microscopy palette (cyan, magenta, purple)",
  },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "4imc_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark-scientific");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (savedTheme && ["light-academic", "dark-scientific", "multiplex-imaging"].includes(savedTheme)) {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        // Default to Dark Scientific for scientific high-tech visual impact
        document.documentElement.setAttribute("data-theme", "dark-scientific");
      }
    } catch {
      // LocalStorage fallback
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      <div className={!mounted ? "invisible" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
