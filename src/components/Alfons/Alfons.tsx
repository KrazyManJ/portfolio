import React, {useEffect, useState} from 'react';
import styles from "@/components/Alfons/alfons.module.css";
import {cn, randInt} from "@/utils";

export interface AlfonsProps extends React.SVGProps<SVGSVGElement> {
    size: number,
    hat: boolean,
    leftLooking?: boolean
}

const Alfons = ({size, hat, leftLooking, className, ...props}: AlfonsProps) => {
    const [isBlink, setBlink] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setBlink(!isBlink), isBlink ? 150 : randInt(1000,8000))
        return () => clearTimeout(timeoutId);
    }, [isBlink]);

    return (
        <svg
            className={cn(className, styles.alfons, {
                [styles.blink]: isBlink,
                [styles.hatTilt]: hat,
                [styles.leftLooking]: leftLooking
            })}
            width={size} height={size} {...props} viewBox="0 0 1000 1000" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g id="Alfons Vector">
                <path id="body"
                      d="M185 800C185 717.157 252.157 650 335 650H665C747.843 650 815 717.157 815 800V985C815 993.284 808.284 1000 800 1000H200C191.716 1000 185 993.284 185 985V800Z"
                      fill="#370407"/>
                <g className={styles.right_arm}>
                    <path id="right_wrist"
                          d="M795 590C795 556.863 821.863 530 855 530H860C893.137 530 920 556.863 920 590V615H795V590Z"
                          fill="#E5C2A6"/>
                    <path id="right_upper_arm"
                          d="M775 625C775 619.477 779.477 615 785 615H930C935.523 615 940 619.477 940 625V807.5C940 853.063 903.063 890 857.5 890C811.937 890 775 853.063 775 807.5V625Z"
                          fill="#370407"/>
                </g>
                <g className={styles.hat}>
                    <rect id="Hat-Stripe" x="225" y="185" width="550" height="90" fill="#CB8C7A"/>
                    <path id="Top-Hat"
                          d="M225 175C225 92.1573 292.157 25 375 25H625C707.843 25 775 92.1573 775 175V185H225V175Z"
                          fill="#3CA0A2"/>
                    <path id="Flower"
                          d="M289.992 110.514C296.274 99.1836 313.569 104.471 312.441 117.377L307.9 169.345C307.217 177.167 314.106 183.528 321.849 182.223L373.289 173.554C386.064 171.401 392.714 188.22 381.92 195.385L338.459 224.236C331.917 228.579 331.24 237.931 337.087 243.171L375.937 277.984C385.586 286.63 376.582 302.314 364.251 298.343L314.596 282.352C307.122 279.945 299.388 285.246 298.937 293.085L295.942 345.165C295.198 358.099 277.322 360.839 272.738 348.722L254.281 299.93C251.503 292.586 242.537 289.844 236.127 294.379L193.541 324.509C182.966 331.991 169.678 319.723 176.293 308.585L202.933 263.734C206.943 256.982 203.495 248.263 195.953 246.079L145.845 231.57C133.401 227.967 134.708 209.929 147.541 208.156L199.217 201.02C206.995 199.945 211.663 191.814 208.668 184.555L188.77 136.333C183.828 124.357 198.746 114.132 208.133 123.061L245.932 159.013C251.621 164.424 260.889 163.004 264.697 156.136L289.992 110.514Z"
                          fill="#C6745C"/>
                    <circle id="Flower-Middle" cx="266.5" cy="229.5" r="22.5" fill="#391A15"/>
                    <rect id="Bottom-Hat" x="60" y="275" width="880" height="300" rx="115" fill="#3CA0A2"/>
                </g>
                <g className={styles.left_arm}>
                    <path id="left_wrist"
                          d="M80 590C80 556.863 106.863 530 140 530H145C178.137 530 205 556.863 205 590V615H80V590Z"
                          fill="#E5C2A6"/>
                    <path id="left_upper_arm"
                          d="M60 625C60 619.477 64.4772 615 70 615H215C220.523 615 225 619.477 225 625V807.5C225 853.063 188.063 890 142.5 890C96.9365 890 60 853.063 60 807.5V625Z"
                          fill="#370407"/>
                </g>
                <g className={styles.head}>
                    <path id="left_ear"
                          d="M220 460C220 446.193 231.193 435 245 435H260V485H245C231.193 485 220 473.807 220 460V460Z"
                          fill="#E5C2A6"/>
                    <path id="right_ear"
                          d="M740 435H755C768.807 435 780 446.193 780 460V460C780 473.807 768.807 485 755 485H740V435Z"
                          fill="#E5C2A6"/>
                    <path id="head_base"
                          d="M250 436.538C250 402.552 277.552 375 311.538 375H688.462C722.448 375 750 402.552 750 436.538V496.154C750 581.121 681.121 650 596.154 650H403.846C318.879 650 250 581.121 250 496.154V436.538Z"
                          fill="#E5C2A6"/>

                    <g id="face">
                        <path id="Mouth" d="M425 455C443 475 480.715 475 499.285 475C517.856 475 557 475 575 455"
                              stroke="black" strokeWidth="7" strokeLinecap="round"/>
                        <g id="upper_face">
                            <g className={styles.left_eye}>
                                <rect id="Left-outer-Eye" x="343" y="380" width="100" height="45" rx="22.5"
                                      fill="white"/>
                                <rect className={styles.left_inner_eye} x="388" y="380" width="55" height="40" rx="20"
                                      fill="black"/>
                                <ellipse className={styles.left_eye_spark} cx="395" cy="397.5" rx="3" ry="7.5" fill="white"/>
                            </g>
                            <path className={styles.nose}
                                  d="M502.138 385C512.28 390.349 518.3 420.046 506.556 424.292C493.301 429.083 488 408 488 408"
                                  stroke="black" strokeWidth="7" strokeLinecap="round"/>
                            <g className={styles.right_eye}>
                                <rect id="Right-outer-Eye" x="558" y="380" width="100" height="45" rx="22.5"
                                      fill="white"/>
                                <rect className={styles.right_inner_eye} x="604" y="380" width="54" height="40" rx="20"
                                      fill="black"/>
                                <ellipse className={styles.right_eye_spark} cx="610.5" cy="397.5" rx="2.5" ry="7.5" fill="white"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Alfons;