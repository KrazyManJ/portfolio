'use client';

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {LucideProps, Moon, Sun} from 'lucide-react';
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

    const Icon = (props: LucideProps) => nextThemeState() == 'light' ? <Sun {...props}/> : <Moon {...props}/>

    return (
        <ToolTip label={`Switch to ${nextThemeState()} mode`}>
            <motion.div
                transition={{type: "spring",bounce: 0.7}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95, transition: {duration: 0.05}}}
            >
                <button
                    onClick={() => setTheme(nextThemeState())}
                    className={"p-2 bg-black transition-colors  dark:bg-white  rounded-xl"}
                >
                    <Icon className={"text-white dark:text-black"}/>
                </button>
            </motion.div>
        </ToolTip>
    );
};

export default ThemeToggle;