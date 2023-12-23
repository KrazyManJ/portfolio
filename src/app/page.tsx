'use client';
import React, {useEffect, useRef} from "react";


import TechBadge from "@/components/TechBadge";
import {motion} from "framer-motion";
import TOOLS from "@/data/tools";
import FRAMEWORKS from "@/data/frameworks";
import Alfons, {AlfonsRef} from "@/components/Alfons/Alfons";
import ThemeToggle from "@/components/ThemeToggle";
import LangStats from "@/components/LangStats";

const Title = ({children}: { children: string }) => <h2 className="font-bold transition-colors text-5xl">{children}</h2>

export default function Main() {
    const alfonsRef = useRef<AlfonsRef>(null);
    useEffect(() => {
        const int = setInterval(() => alfonsRef.current?.tiltHat(), 5000);
        return () => clearInterval(int);
    });
    return (
        <main className="p-8 pb-32">
            <div className={"flex justify-end px-24"}>
                <ThemeToggle/>

            </div>
            <div className="flex items-center gap-10 justify-evenly">
                <div className={"mb-14 w-min"}>
                    <motion.h1
                        className={"font-extrabold text-8xl mb-5"}
                        animate={{x: [0, 20, 0]}}
                        transition={{repeat: Infinity, duration: 8, ease: "easeInOut"}}
                    >KrazyManJ
                    </motion.h1>
                    <motion.div
                        className={"font-medium text-4xl"}
                        animate={{x: [0, 40, 0]}}
                        transition={{repeat: Infinity, duration: 8, delay: 0.4, ease: "easeInOut"}}
                    >Software developer
                    </motion.div>
                </div>
                <Alfons
                    size={500}
                    className="drop-shadow-md flex-shrink-0"
                    ref={alfonsRef}
                    fitHands
                    appearance={{
                        lookDirection: "left",
                        leftHandAngle: 50
                    }}
                />
            </div>
            <Title>Tools I am using</Title>
            <div className="flex gap-4 my-8 mx-24 flex-wrap justify-stretch">
                {TOOLS.map((v, i) => <TechBadge {...v} key={i}/>)}
            </div>
            <Title>Frameworks / Libraries</Title>
            <div className="flex gap-4 my-8 mx-24 flex-wrap justify-stretch">
                {FRAMEWORKS.map((v, i) => <TechBadge {...v} key={i}/>)}
            </div>
            <Title>Languages</Title>
            <div className={"p-5"}>
                <LangStats/>
            </div>
        </main>
    )
}
