'use client';

import React from 'react';
import {ThemeProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";

const Theme = ({attribute, ...props}: ThemeProviderProps) =>
    <ThemeProvider attribute="class" {...props}/>

export default Theme;