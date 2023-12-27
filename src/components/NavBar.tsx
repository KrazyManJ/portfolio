import React from 'react';
import ThemeToggle from "@/components/ThemeToggle";
import {cn} from "@/utils";
import {Fira_Code} from "next/font/google";

const code = Fira_Code({subsets: ['latin']})

const NavBar = () => {
    return (
        <div className={"flex p-5 mx-16 items-center"}>
            <div/>
            <div className={cn("flex-1 text-center text-3xl", code.className)}>
                krazymanj.dev
            </div>
            <div>
                <ThemeToggle/>
            </div>
        </div>
    );
};

export default NavBar;