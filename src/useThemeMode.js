import { useState, useEffect } from "react";

const useThemeMode = () => {
    const [theme, setTheme] = useState("default");
    const localTheme = window.localStorage.getItem("theme");

    useEffect(() => {
        localTheme && setTheme(localTheme);
    }, []);
    const toggleTheme = () => {
        if(theme==="default"){
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
            return;
        }
        window.localStorage.setItem("theme", "default");
        setTheme("default");
    }
    return [theme, toggleTheme];
}

export default useThemeMode;