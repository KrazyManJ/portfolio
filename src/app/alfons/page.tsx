'use client';

import React, {useEffect, useState} from "react";
import ToolTip from "@/components/ToolTip";
import Alfons from "@/components/Alfons/Alfons";



export default function AlfonsPage() {
    const [isHat, setHat] = useState(false);
    const [isLeft, setLeft] = useState(false);
    const handleClick = () => setHat(() => true);

    useEffect(() => {
        if (isHat) setTimeout(() => setHat(false), 2000)
    }, [isHat])


    return <main>
        <Alfons hat={isHat} size={500} leftLooking={isLeft}/>
        <div className="m-12 flex gap-3">
            <ToolTip text="Press to make my hat move!">
                <button
                    className="p-2 active:bg-black active:text-white duration-200 active:duration-0 hover:bg-white w-fit transition-colors px-4 bg-[#fff5] border border-[#fff8] rounded"
                    onClick={handleClick}
                >Move with hat
                </button>
            </ToolTip>
            <button
                className="p-2 active:bg-black active:text-white duration-200 active:duration-0 hover:bg-white w-fit transition-colors px-4 bg-[#fff5] border border-[#fff8] rounded"
                onClick={() => setLeft(!isLeft)}
            >Switch sides
            </button>
        </div>
    </main>
}