'use client';

import React, {useRef, useState} from "react";
import ToolTip from "@/components/ToolTip";
import Alfons, {AlfonsRef} from "@/components/Alfons/Alfons";
import NavBar from "@/components/NavBar";



export default function AlfonsPage() {
    const alfonsRef = useRef<AlfonsRef>(null);

    const [isLeft, setLeft] = useState(false);



    return <main>
        <NavBar/>
        <Alfons ref={alfonsRef} size={500} leftLooking={isLeft}/>
        <div className="m-12 flex gap-3">
            <ToolTip label="Press to make my hat move!">
                <button
                    className="p-2 active:bg-black active:text-white duration-200 active:duration-0 hover:bg-white w-fit transition-colors px-4 bg-[#fff5] border border-[#fff8] rounded"
                    onClick={() => alfonsRef.current?.tiltHat()}
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