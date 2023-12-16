'use client';

import {motion} from "framer-motion";
import Image from "next/image";
import React, {useState} from "react";
import ToolTip from "@/components/ToolTip";
import ContaineredSquircle from "@/components/ContaineredSquircle";
import {cn} from "@/utils";

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
    const [isLoaded, setLoaded] = useState(false);
    const [aspectW, aspectH] = aspectRatio;
    return <ToolTip label={tooltip}>
        <a href={link ?? ""} target="_blank">
            <motion.div
                transition={{type:"spring",bounce:0.7}}
                whileHover={{scale:1.1}}
            >
                <ContaineredSquircle
                    containerClassName={cn("drop-shadow-lg transition-opacity",{"opacity-1": isLoaded, "opacity-0": !isLoaded})}
                    className={"flex group gap-2 items-center p-3 select-none transition-colors hover:bg-white dark:bg-[#6668] dark:hover:bg-[#222] bg-[#eee] dark:border-[#fff5] border-[#fff8] border"}
                    cornerRadius={15}
                    cornerSmoothing={1}
                    onLoad={() => setLoaded(true)}
                >
                    <Image height={24} width={24/aspectH*aspectW} src={img} draggable={false} loading={"lazy"} alt=""/>
                    <span className="font-medium text-lg">{label}</span>
                </ContaineredSquircle>
            </motion.div>
        </a>
    </ToolTip>
}

export default TechBadge;
