import { createContext, useContext, useState, type ReactNode } from "react";
import { themes, type ThemeId } from "../types/themes";

interface ThemeContextValue {
  themeId: ThemeId;
  theme: (typeof themes)[ThemeId];
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>("light");

  return (
    <ThemeContext.Provider value={{ themeId, theme: themes[themeId], setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
