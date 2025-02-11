import React, { createContext, useState } from "react";
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
