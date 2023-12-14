'use client';

import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";
import ToolTip from "@/components/ToolTip";
import ShadowSquircle from "@/components/ShadowSquircle";

export interface TechBadgeProps {
    img: string,
    label: string,
    link: string,
    tooltip: string
}

const TechBadge = (props: TechBadgeProps) =>
    <ToolTip label={props.tooltip}>
        <a href={props.link ?? ""} target="_blank">
            <motion.div
                transition={{type:"spring",bounce:0.7}}
                whileHover={{scale:1.1}}
            >
                <ShadowSquircle
                    className={"flex group gap-2 items-center p-3 select-none"}
                    squircleClassName={"transition-colors group-hover:bg-white dark:bg-[#6668] dark:group-hover:bg-[#222] bg-[#fff8] dark:border-[#fff5] border-[#fff8] border"}
                    cornerRadius={10}
                    cornerSmoothing={1}
                >
                    <Image width={0} height={0} className={"h-[24px] w-auto"} src={props.img} draggable={false} alt=""/>
                    <span className="font-medium text-lg">{props.label}</span>
                </ShadowSquircle>
            </motion.div>
        </a>
    </ToolTip>

export default TechBadge;