import { createContext, useEffect, useState } from "react";

export const OSThemContext = createContext();

export function OSThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const listenForTheme = window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setTheme(event.matches ? "dark" : "light");
      });

    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listenForTheme);
  }, []);

  return (
    <OSThemContext.Provider value={{ theme }}>
      {children}
    </OSThemContext.Provider>
  );
}
