'use client';

import React, {useEffect, useState} from "react";
import "./alfons.css"
import ToolTip from "@/components/tooltip";

function getRndInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default function AlfonsPage() {
    const [isHat, setHat] = useState(false);
    const [isBlink, setBlink] = useState(true);
    const handleClick = () => setHat(() => true);

    const cls = [];
    if (isHat) cls.push("klobuk")
    if (isBlink) cls.push("blink")

    useEffect(() => {
        if (isHat) setTimeout(() => setHat(false), 2000)
    }, [isHat])

    useEffect(() => {
        if (isBlink){
            setTimeout(() => setBlink(false), 200)
            setTimeout(() => setBlink(true), getRndInteger(1000,6000))
        }
    }, [isBlink]);

    return <main>
        <ToolTip text="This is my character, Alfons! Can you see that he blinks? Awesome, right?">

        <svg className={cls.join(" ")} width="500" height="500" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Alfons Right-Side Looking">
                <path id="Body"
                      d="M187.692 804.615C187.692 719.649 256.572 650.769 341.538 650.769H664.615C749.582 650.769 818.461 719.648 818.461 804.615V984.615C818.461 993.112 811.574 1000 803.077 1000H203.077C194.58 1000 187.692 993.112 187.692 984.615V804.615Z"
                      fill="#370407"/>
                <path id="Right-Wrist"
                      d="M795.385 592.308C795.385 558.321 822.936 530.769 856.923 530.769H861.539C895.525 530.769 923.077 558.321 923.077 592.308V616.923H795.385V592.308Z"
                      fill="#E5C2A6"/>
                <rect id="Hat-Stripe" x="229.231" y="175.385" width="546.154" height="87.6923" fill="#CB8C7A"/>
                <path id="Top-Hat"
                      d="M229.231 169.231C229.231 84.2639 298.11 15.3846 383.077 15.3846H621.539C706.505 15.3846 775.385 84.2639 775.385 169.231V175.385H229.231V169.231Z"
                      fill="#3CA0A2"/>
                <path id="Flower"
                      d="M272.959 102.648C279.495 91.0801 297.19 96.6463 295.926 109.873L291.198 159.375C290.432 167.392 297.445 173.972 305.397 172.698L354.498 164.831C367.617 162.728 374.298 180.033 363.169 187.292L321.519 214.459C314.773 218.859 314.001 228.444 319.955 233.867L356.72 267.35C366.544 276.297 357.18 292.309 344.565 288.134L297.357 272.509C289.712 269.978 281.736 275.351 281.209 283.387L277.953 333.008C277.083 346.266 258.726 348.929 254.125 336.463L236.907 289.812C234.119 282.257 224.945 279.371 218.334 283.97L177.509 312.362C166.6 319.948 153.074 307.256 159.951 295.887L185.689 253.339C189.857 246.448 186.394 237.477 178.677 235.175L131.025 220.959C118.292 217.161 119.782 198.671 132.958 196.96L182.271 190.555C190.257 189.517 195.112 181.216 192.1 173.747L173.504 127.628C168.535 115.305 183.919 104.941 193.473 114.176L229.227 148.737C235.017 154.334 244.534 152.954 248.496 145.942L272.959 102.648Z"
                      fill="#C6745C"/>
                <circle id="Flower-Middle" cx="249.231" cy="220" r="23.0769" fill="#391A15"/>
                <rect id="Bottom-Hat" x="55.3846" y="263.077" width="890.769" height="286.154" rx="115.385"
                      fill="#3CA0A2"/>
                <path id="Left-Hand"
                      d="M63.0769 624.615C63.0769 620.367 66.5209 616.923 70.7692 616.923H221.538C225.787 616.923 229.231 620.367 229.231 624.615V803.077C229.231 845.56 194.791 880 152.308 880H140C97.5165 880 63.0769 845.56 63.0769 803.077V624.615Z"
                      fill="#370407"/>
                <path id="Left-Wrist"
                      d="M83.0769 592.308C83.0769 558.321 110.629 530.769 144.615 530.769H147.692C181.679 530.769 209.231 558.321 209.231 592.308V616.923H83.0769V592.308Z"
                      fill="#E5C2A6"/>
                <path id="Right-Hand"
                      d="M775.385 624.615C775.385 620.367 778.829 616.923 783.077 616.923H935.385C939.633 616.923 943.077 620.367 943.077 624.615V803.077C943.077 845.56 908.637 880 866.154 880H852.308C809.824 880 775.385 845.56 775.385 803.077V624.615Z"
                      fill="#370407"/>
                <path id="Head"
                      d="M241.538 423.077C241.538 389.09 269.09 361.538 303.077 361.538H703.077C737.064 361.538 764.615 389.09 764.615 423.077V496.923C764.615 581.89 695.736 650.769 610.769 650.769H395.385C310.418 650.769 241.538 581.89 241.538 496.923V423.077Z"
                      fill="#E5C2A6"/>
                <rect id="Left-outer-Eye" x="338.462" y="366.154" width="100" height="47.6923" rx="23.8462"
                      fill="white"/>
                <rect id="Left-inner-Eye" x="381.538" y="366.154" width="55.3846" height="40" rx="20" fill="black"/>
                <rect id="Right-outer-Eye" x="561.538" y="366.154" width="100" height="47.6923" rx="23.8462"
                      fill="white"/>
                <rect id="Right-inner-Eye" x="604.615" y="366.154" width="55.3846" height="40" rx="20" fill="black"/>
                <path id="Mouth"
                      d="M432.308 441.538C448.738 460 483.165 460 500.117 460C517.069 460 552.8 460 569.231 441.538"
                      stroke="black" stroke-width="6.15385" stroke-linecap="round"/>
                <path id="Nose"
                      d="M496.997 372.308C506.983 377.245 512.911 404.658 501.347 408.577C488.297 413 483.077 393.538 483.077 393.538"
                      stroke="black" stroke-width="6.15385" stroke-linecap="round"/>
                <ellipse id="Left-eye-Spark" cx="387.692" cy="384.615" rx="3.07692" ry="7.69231" fill="white"/>
                <ellipse id="Right-eye-Spark" cx="613.077" cy="384.615" rx="2.30769" ry="7.69231" fill="white"/>
            </g>
        </svg>
        </ToolTip>

        <div className="m-12">
            <ToolTip text="Press for making my hat movin' tho!">
                <button className="p-2 active:bg-black active:text-white duration-200 active:duration-0 hover:bg-white w-fit transition-colors px-4 bg-[#fff5] border border-[#fff8] rounded" onClick={handleClick}>Move with hat</button>
            </ToolTip>

        </div>
    </main>
}