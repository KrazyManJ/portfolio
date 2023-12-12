'use client';
import React from "react";


import IconLabel from "@/components/IconLabel";
import {motion} from "framer-motion";
import TOOLS from "@/data/tools";
import FRAMEWORKS from "@/data/frameworks";
import Alfons from "@/components/Alfons/Alfons";

const Title = ({children}: { children: string }) => <h2 className="font-bold transition-colors text-5xl">{children}</h2>

export default function Main() {
    return (
        <main className="p-8">
            <div className="flex items-center gap-10 justify-evenly">
                <div className={"mb-14 w-min"}>
                    <motion.h1
                        className={"font-extrabold text-8xl mb-5"}
                        animate={{x: [0, 20, 0]}}
                        transition={{repeat: Infinity, duration: 8, ease: "easeInOut"}}
                    >KrazyManJ</motion.h1>
                    <motion.div
                        className={"font-medium text-4xl"}
                        animate={{x: [0, 40, 0]}}
                        transition={{repeat: Infinity, duration: 8, delay: 0.4, ease: "easeInOut"}}
                    >Software developer</motion.div>
                </div>
                <Alfons size={500} hat={false} leftLooking className="drop-shadow-lg"/>
            </div>
            <Title>Tools I am using</Title>
            <div className="flex gap-4 my-8 mx-24 flex-wrap justify-stretch">
                { TOOLS.map((v,i) => <IconLabel {...v} key={i} />) }
            </div>
            <Title>Frameworks / Libraries</Title>
            <div className="flex gap-4 my-8 mx-24 flex-wrap justify-stretch">
                { FRAMEWORKS.map((v,i) => <IconLabel {...v} key={i} />) }
            </div>
        </main>
    )
}
