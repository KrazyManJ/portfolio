'use client';

import React from "react";
import {motion} from "framer-motion";
import ContaineredSquircle from "@/components/ContaineredSquircle";

interface ToolTipProps {
    label: string | React.ReactElement,
    children: React.ReactElement
}

const SHOWTIME = 0.5;

const ToolTip = (props: ToolTipProps) =>
    <motion.div className="flex-shrink-0 relative w-fit group/tooltip" whileHover="hover">
        {props.children}
        <motion.div
            className="pointer-events-none absolute mt-2 z-10 flex justify-center w-[150%] -left-[25%]"
            variants={{hover: {opacity: 1, transition: {delay: SHOWTIME}}}}
            initial={{opacity: 0}}
        >
            <motion.div
                transition={{delay: 0, type: "spring", bounce: 0.3}}
                initial={{scale: 0}}
                variants={{hover: {scale: 1, transition: {delay: SHOWTIME}}}}
                style={{originY: 0}}
            >
                <ContaineredSquircle
                    containerClassName={"shadow-lg"}
                    className="pointer-events-auto whitespace-pre p-1 px-2 text-center text-xs bg-white dark:bg-[#333]"
                    cornerSmoothing={1}
                    cornerRadius={8}
                >
                    {props.label}
                </ContaineredSquircle>
            </motion.div>
        </motion.div>
    </motion.div>


export default ToolTip;