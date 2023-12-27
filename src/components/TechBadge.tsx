'use client';

import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";
import ToolTip from "@/components/ToolTip";

export interface TechBadgeProps {
    img: string,
    label: string,
    link: string,
    tooltip: string,
    aspectRatio?: [number, number]
}

const TechBadge = ({
    tooltip,
    link,
    img,
    label,
    aspectRatio = [1,1]
}: TechBadgeProps
) => {
    const [aspectW, aspectH] = aspectRatio;
    return <ToolTip label={tooltip}>
        <a href={link ?? ""} target="_blank">
            <motion.div
                transition={{type:"spring",bounce:0.7}}
                whileHover={{scale:1.1}}
                className={"flex gap-2 items-center p-3 select-none transition-colors rounded-xl hover:bg-white dark:bg-[#6668] dark:hover:bg-[#222] bg-[#eee] dark:border-[#fff5] border-[#fff8] border"}
            >
                <Image height={24} width={24/aspectH*aspectW} src={img} draggable={false} loading={"lazy"} alt=""/>
                <span className="font-medium text-lg">{label}</span>
            </motion.div>
        </a>
    </ToolTip>
}

export default TechBadge;
