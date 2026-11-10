import { createContext, useContext } from "react";

interface ThemeContextType {
    toggleColorMode: () => void;
    mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType>({
    toggleColorMode: () => { },
    mode: "dark",
});

export const useColorMode = () => useContext(ThemeContext);