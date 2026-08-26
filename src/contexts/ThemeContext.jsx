import { createContext, useState } from "react";

//cria contexto
export const ThemeContext = createContext();

// cria provider pra fornecer info

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')

    const value = { theme, toggleTheme };
   
    return (
    <ThemeContext value={value}>
        {children}
    </ThemeContext>
);
}

