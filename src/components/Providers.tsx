'use client';

import React from 'react';
import {ThemeProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";

const Theme = ({children}: ThemeProviderProps) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default Theme;