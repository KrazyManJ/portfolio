'use client';

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import ContaineredSquircle from "@/components/ContaineredSquircle";
import {Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import ToolTip from './ToolTip';

const ThemeToggle = () => {
    const {systemTheme, theme, setTheme} = useTheme()

    // This is for not throwing error
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);
    if (!hasMounted) return null;

    const nextThemeState = () => {
        if (theme == "system") return systemTheme == 'dark' ? 'light' : 'dark';
        return theme == 'dark' ? 'light' : 'dark';
    }

    return (
        <ToolTip label={`Switch to ${nextThemeState()} mode`}>
            <motion.div
                transition={{type: "spring",bounce: 0.7}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95, transition: {duration: 0.05}}}
                className={"w-fit"}
            >
                <ContaineredSquircle
                    onClick={() => setTheme(nextThemeState())}
                    cornerRadius={12}
                    cornerSmoothing={1}
                    containerClassName={"drop-shadow-lg w-fit"}
                    className={"w-fit dark:bg-white bg-black transition-colors text-white dark:text-black"}
                >
                    <button className={"p-2"}>
                        {nextThemeState() == 'light' ? <Sun/> : <Moon/>}
                    </button>
                </ContaineredSquircle>
            </motion.div>
        </ToolTip>
    );
};

export default ThemeToggle;