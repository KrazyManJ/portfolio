import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}