import React from 'react';
import {useTheme} from "next-themes";
import ShadowSquircle from "@/components/ShadowSquircle";

const ThemeToggle = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    console.log(systemTheme, theme)
    const toggle = () => {
        if (theme == "system") return systemTheme == 'dark' ? 'light' : 'dark';
        return theme == 'dark' ? 'light' : 'dark';
    }

    return (
        <ShadowSquircle
            onClick={() => setTheme(toggle())}
            squircleClassName={"dark:bg-white bg-black transition-colors"}
            cornerRadius={10}
            cornerSmoothing={1}
            className={"text-white dark:text-black  transition-colors"}
        >
            <button className={"p-2"}>Toggle to {toggle()} theme</button>
        </ShadowSquircle>
    );
};

export default ThemeToggle;