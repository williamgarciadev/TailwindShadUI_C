import * as React from "react";

export type ColorTheme = "black" | "blue" | "teal" | "green" | "orange" | "pink";

interface ColorThemeColors {
  primary: string;
  accent: string;
  ring: string;
  sidebarPrimary: string;
  chart1: string;
}

const colorThemes: Record<ColorTheme, ColorThemeColors> = {
  black: {
    primary: "0 0% 9%",
    accent: "262 80% 60%",
    ring: "0 0% 9%",
    sidebarPrimary: "0 0% 9%",
    chart1: "262 80% 60%",
  },
  blue: {
    primary: "217 91% 60%",
    accent: "142 71% 45%",
    ring: "217 91% 60%",
    sidebarPrimary: "217 91% 60%",
    chart1: "217 91% 60%",
  },
  teal: {
    primary: "189 94% 43%",
    accent: "199 89% 48%",
    ring: "189 94% 43%",
    sidebarPrimary: "189 94% 43%",
    chart1: "189 94% 43%",
  },
  green: {
    primary: "142 71% 45%",
    accent: "217 91% 60%",
    ring: "142 71% 45%",
    sidebarPrimary: "142 71% 45%",
    chart1: "142 71% 45%",
  },
  orange: {
    primary: "25 95% 53%",
    accent: "262 80% 60%",
    ring: "25 95% 53%",
    sidebarPrimary: "25 95% 53%",
    chart1: "25 95% 53%",
  },
  pink: {
    primary: "340 82% 52%",
    accent: "262 80% 60%",
    ring: "340 82% 52%",
    sidebarPrimary: "340 82% 52%",
    chart1: "340 82% 52%",
  },
};

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ColorThemeContext = React.createContext<ColorThemeContextType | undefined>(
  undefined
);

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = React.useState<ColorTheme>(() => {
    const saved = localStorage.getItem("color-theme");
    return (saved as ColorTheme) || "blue";
  });

  const setColorTheme = React.useCallback((theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem("color-theme", theme);

    const colors = colorThemes[theme];
    const root = document.documentElement;

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--ring", colors.ring);
    root.style.setProperty("--sidebar-primary", colors.sidebarPrimary);
    root.style.setProperty("--chart-1", colors.chart1);
  }, []);

  React.useEffect(() => {
    // Apply colors on mount
    const colors = colorThemes[colorTheme];
    const root = document.documentElement;

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--ring", colors.ring);
    root.style.setProperty("--sidebar-primary", colors.sidebarPrimary);
    root.style.setProperty("--chart-1", colors.chart1);
  }, [colorTheme]);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = React.useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
