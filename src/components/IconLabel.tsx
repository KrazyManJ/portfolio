'use client';

import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";
import ToolTip from "@/components/tooltip";

export interface IconLabelProps {
    img: string,
    label: string,
    link: string,
    tooltip: string
}

const IconLabel = (props: IconLabelProps) =>
    <ToolTip text={props.tooltip}>
        <a href={props.link ?? ""} target="_blank">
            <motion.span
                transition={{type:"spring",bounce:0.7}}
                whileHover={{scale:1.1}}
                className={"flex group relative gap-2 items-center p-3 rounded-lg shadow-lg select-none transition-colors hover:bg-white bg-[#fff5] border-[#fffa] border"}
            >
                <Image width={24} height={24} objectFit={'contain'} src={props.img} draggable={false} alt=""/>
                <span className="font-medium text-lg">{props.label}</span>
            </motion.span>
        </a>
    </ToolTip>

export default IconLabel;