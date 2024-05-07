"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const value = JSON.parse(localStorage.getItem("theme"));
        return value || "light";
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    console.log(theme);
    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};


