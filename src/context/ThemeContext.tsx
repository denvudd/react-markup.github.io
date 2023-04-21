import React, { createContext, useState } from "react";

interface ThemeContextValue {
  theme: string;
  toggleTheme: (value: string) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: (value: string) => {},
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;