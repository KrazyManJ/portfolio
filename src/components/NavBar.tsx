import React from 'react';
import ThemeToggle from "@/components/ThemeToggle";
import {cn} from "@/utils";
import {Fira_Code} from "next/font/google";

const code = Fira_Code({subsets: ['latin']})

const NavBar = () => {
    return (
        <div className={"flex p-5"}>
            <div className={"flex-1"}>

            </div>
            <div className={cn("flex-[12] text-center text-3xl", code.className)}>
                krazymanj.dev
            </div>
            <div className={"flex-1"}>
                <ThemeToggle/>
            </div>
        </div>
    );
};

export default NavBar;