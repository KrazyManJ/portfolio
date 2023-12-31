'use client';

import React from "react";
import {motion} from "framer-motion";

interface ToolTipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: string | React.ReactElement,
    showTime?: number
}

const ToolTip = (
    {
        children,
        label,
        showTime = 0.5,
        ...props
    }: ToolTipProps
) =>
    <motion.div className="relative w-fit group/tooltip" whileHover="hover">
        {children}
        <motion.div
            className="pointer-events-none absolute mt-2 z-10 flex justify-center w-[150%] -left-[25%]"
            variants={{hover: {opacity: 1, transition: {delay: showTime}}}}
            initial={{opacity: 0}}
        >
            <motion.div
                transition={{delay: 0, type: "spring", bounce: 0.3}}
                initial={{scale: 0}}
                variants={{hover: {scale: 1, transition: {delay: showTime}}}}
                style={{originY: 0}}

            >
                <div {...props}
                     className={"pointer-events-auto whitespace-pre p-1 px-2 text-center text-xs bg-white dark:bg-[#333] rounded-lg shadow-md"}
                >
                    {label}
                </div>
            </motion.div>
        </motion.div>
    </motion.div>


export default ToolTip;