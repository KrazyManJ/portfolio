import React, {CSSProperties, forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import styles from "@/components/Alfons/alfons.module.css";
import {cn, mergeObjectsDefaults, randInt} from "@/utils";
import {LeftArm, RightArm} from "@/components/Alfons/parts/hands";

interface AlfonsAppearanceOptions {
    lookDirection?: "left" | "right"

    leftHandAngle?: number
    leftArmInFront?: boolean

    rightHandAngle?: number
    rightArmInFront?: boolean
}

export interface AlfonsProps extends React.SVGProps<SVGSVGElement> {
    /** Size of Alfons image */
    size: number
    /** Makes Alfons hands to fit container, so they won't crop */
    fitHands?: boolean
    /** Alfons options related to his appearance */
    appearance?: AlfonsAppearanceOptions
}

export interface AlfonsRef {
    tiltHat: () => void
}

const DEFAULT_APPEARANCE: Required<AlfonsAppearanceOptions> = {
    lookDirection: "right",
    leftHandAngle: 0,
    leftArmInFront: true,
    rightHandAngle: 0,
    rightArmInFront: false,
} as const;

const ANIM_TIMES = {
    blink: 150,
    hatTilt: 2000
} as const;

const Alfons = forwardRef<AlfonsRef, AlfonsProps>((
    {
        size,
        className,
        fitHands = false,
        appearance = DEFAULT_APPEARANCE,
        ...props
    }: AlfonsProps, ref
) => {

    const opts = mergeObjectsDefaults(DEFAULT_APPEARANCE, appearance)

    const [isBlink, setBlink] = useState(true);
    const [isHatTilted, setHatTilted] = useState(false);

    const svgRef = useRef<SVGSVGElement>(null);

    useImperativeHandle(ref, () => ({
        tiltHat: () => setHatTilted(true)
    }))

    useEffect(() => {
        const timeoutId = setTimeout(() => setBlink(!isBlink), isBlink ? ANIM_TIMES.blink : randInt(1000, 8000));
        return () => clearTimeout(timeoutId);
    }, [isBlink]);

    useEffect(() => {
        if (isHatTilted) {
            const timeout = setTimeout(() => setHatTilted(false), ANIM_TIMES.hatTilt);
            return () => clearTimeout(timeout);
        }
    }, [isHatTilted]);

    const cssVars = {
        "--leftHandAngle": -opts.leftHandAngle,
        "--rightHandAngle": opts.rightHandAngle
    } as CSSProperties;

    const conditionalStyles = {
        [styles.blink]: isBlink,
        [styles.hatTilt]: isHatTilted,
        [styles.leftLooking]: opts.lookDirection == "left"
    }


    return (
        <svg
            className={cn(className, styles.alfons, conditionalStyles)}
            width={size * (fitHands ? 1.2 : 1)}
            height={size}
            ref={svgRef}
            style={cssVars}

            {...props}

            viewBox={`0 0 1000 ${1000 * (fitHands ? 1.1 : 1)}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path className={styles.body}
                  d="M185 800C185 717.157 252.157 650 335 650H665C747.843 650 815 717.157 815 800V985C815 993.284 808.284 1000 800 1000H200C191.716 1000 185 993.284 185 985V800Z"
                  fill="#370407"/>
            {!opts.leftArmInFront && <LeftArm/>}
            {!opts.rightArmInFront && <RightArm/>}
            <g className={styles.hat}>
                <rect x="225" y="185" width="550" height="90" fill="#CB8C7A"/>
                <path
                    d="M225 175C225 92.1573 292.157 25 375 25H625C707.843 25 775 92.1573 775 175V185H225V175Z"
                    fill="#3CA0A2"/>
                <path
                    d="M289.992 110.514C296.274 99.1836 313.569 104.471 312.441 117.377L307.9 169.345C307.217 177.167 314.106 183.528 321.849 182.223L373.289 173.554C386.064 171.401 392.714 188.22 381.92 195.385L338.459 224.236C331.917 228.579 331.24 237.931 337.087 243.171L375.937 277.984C385.586 286.63 376.582 302.314 364.251 298.343L314.596 282.352C307.122 279.945 299.388 285.246 298.937 293.085L295.942 345.165C295.198 358.099 277.322 360.839 272.738 348.722L254.281 299.93C251.503 292.586 242.537 289.844 236.127 294.379L193.541 324.509C182.966 331.991 169.678 319.723 176.293 308.585L202.933 263.734C206.943 256.982 203.495 248.263 195.953 246.079L145.845 231.57C133.401 227.967 134.708 209.929 147.541 208.156L199.217 201.02C206.995 199.945 211.663 191.814 208.668 184.555L188.77 136.333C183.828 124.357 198.746 114.132 208.133 123.061L245.932 159.013C251.621 164.424 260.889 163.004 264.697 156.136L289.992 110.514Z"
                    fill="#C6745C"/>
                <circle cx="266.5" cy="229.5" r="22.5" fill="#391A15"/>
                <rect x="60" y="275" width="880" height="300" rx="115" fill="#3CA0A2"/>
            </g>
            {opts.leftArmInFront && <LeftArm/>}
            {opts.rightArmInFront && <RightArm/>}
            <g className={styles.head}>
                <path
                    d="M220 460C220 446.193 231.193 435 245 435H260V485H245C231.193 485 220 473.807 220 460V460Z"
                    fill="#E5C2A6"/>
                <path
                    d="M740 435H755C768.807 435 780 446.193 780 460V460C780 473.807 768.807 485 755 485H740V435Z"
                    fill="#E5C2A6"/>
                <path
                    d="M250 436.538C250 402.552 277.552 375 311.538 375H688.462C722.448 375 750 402.552 750 436.538V496.154C750 581.121 681.121 650 596.154 650H403.846C318.879 650 250 581.121 250 496.154V436.538Z"
                    fill="#E5C2A6"/>
                <g className={styles.face}>
                    <path className={styles.mouth}
                          d="M425 455C443 475 480.715 475 499.285 475C517.856 475 557 475 575 455"
                          stroke="black" strokeWidth="7" strokeLinecap="round"/>
                    <g id="upper_face">
                        <g className={styles.left_eye}>
                            <rect x="343" y="380" width="100" height="45" rx="22.5"
                                  fill="white"/>
                            <rect className={styles.left_inner_eye} x="388" y="380" width="55" height="40" rx="20"
                                  fill="black"/>
                            <ellipse className={styles.left_eye_spark} cx="395" cy="397.5" rx="3" ry="7.5"
                                     fill="white"/>
                        </g>
                        <path className={styles.nose}
                              d="M502.138 385C512.28 390.349 518.3 420.046 506.556 424.292C493.301 429.083 488 408 488 408"
                              stroke="black" strokeWidth="7" strokeLinecap="round"/>
                        <g className={styles.right_eye}>
                            <rect x="558" y="380" width="100" height="45" rx="22.5"
                                  fill="white"/>
                            <rect className={styles.right_inner_eye} x="604" y="380" width="54" height="40" rx="20"
                                  fill="black"/>
                            <ellipse className={styles.right_eye_spark} cx="610.5" cy="397.5" rx="2.5" ry="7.5"
                                     fill="white"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
});

Alfons.displayName = "Alfons";

export default Alfons;