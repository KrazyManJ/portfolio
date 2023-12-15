import React from 'react';
import {useTheme} from "next-themes";
import ContaineredSquircle from "@/components/ContaineredSquircle";

const ThemeToggle = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    console.log(systemTheme, theme)
    const toggle = () => {
        if (theme == "system") return systemTheme == 'dark' ? 'light' : 'dark';
        return theme == 'dark' ? 'light' : 'dark';
    }

    return (
        <ContaineredSquircle
            onClick={() => setTheme(toggle())}
            cornerRadius={10}
            cornerSmoothing={1}
            containerClassName={"shadow w-fit"}
            className={"w-fit dark:bg-white bg-black transition-colors text-white dark:text-black"}
        >
            <button className={"p-2"}>Toggle to {toggle()} theme</button>
        </ContaineredSquircle>
    );
};

export default ThemeToggle;