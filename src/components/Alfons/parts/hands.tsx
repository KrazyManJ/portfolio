import React from 'react';
import styles from "@/components/Alfons/alfons.module.css";

export const LeftArm = () => <g className={styles.left_arm}>
    <path
        d="M80 590C80 556.863 106.863 530 140 530H145C178.137 530 205 556.863 205 590V615H80V590Z"
        fill="#E5C2A6"/>
    <path
        d="M60 625C60 619.477 64.4772 615 70 615H215C220.523 615 225 619.477 225 625V807.5C225 853.063 188.063 890 142.5 890C96.9365 890 60 853.063 60 807.5V625Z"
        fill="#370407"/>
</g>

export const RightArm = () => <g className={styles.right_arm}>
    <path
        d="M795 590C795 556.863 821.863 530 855 530H860C893.137 530 920 556.863 920 590V615H795V590Z"
        fill="#E5C2A6"/>
    <path
        d="M775 625C775 619.477 779.477 615 785 615H930C935.523 615 940 619.477 940 625V807.5C940 853.063 903.063 890 857.5 890C811.937 890 775 853.063 775 807.5V625Z"
        fill="#370407"/>
</g>