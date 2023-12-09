'use client';

import React from "react";
import {motion} from "framer-motion";

interface ToolTipProps {
    text: string,
    children: React.ReactElement
}

const SHOWTIME = 0.5;

const ToolTip = (props: ToolTipProps) =>
    <motion.div className="flex-shrink-0 relative group/tooltip" whileHover="hover">
        {props.children}
        <motion.div
            className="pointer-events-none absolute mt-2 z-10 flex justify-center w-[150%] -left-[25%]"
            variants={{hover: {opacity: 1, transition: {delay: SHOWTIME}}}}
            initial={{opacity: 0}}
        >
            <motion.span
                className="pointer-events-auto p-1 px-2 text-center rounded-lg bg-white shadow border border-white text-xs whitespace-pre"
                transition={{delay: 0, type: "spring", bounce: 0.3}}
                initial={{scale: 0}}
                variants={{hover: {scale: 1, transition: {delay: SHOWTIME}}}}
                style={{originY: 0}}
            >
                {props.text}
            </motion.span>
        </motion.div>
    </motion.div>


export default ToolTip;