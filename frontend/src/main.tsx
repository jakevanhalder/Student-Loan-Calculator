import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.tsx";
import { ThemeContext } from "./contexts/ThemeContext.ts";
import darkTheme, { lightTheme } from "./utils/theme.ts";

/* eslint-disable react-refresh/only-export-components */
const Root = () => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    try {
      const stored = localStorage.getItem("color-mode");
      console.log("Stored color mode:", stored);
      return stored === "dark" ? "dark" : "light";
    } catch {
      console.error("Failed to read color mode from localStorage");
      return "dark";
    }
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          try {
            localStorage.setItem("color-mode", newMode);
          } catch {
            // ignore localStorage errors
          }
          return newMode;
        });
      },
      mode,
    }),
    [mode],
  );

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);