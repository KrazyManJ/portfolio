import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mergeObjectsDefaults<T extends Object>(obj1: Required<T>, obj2: T): Required<T> {
    return {
        ...obj1,
        ...Object.fromEntries(Object.entries(obj2).filter(([_, v]) => v !== undefined))
    };
}