'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type Device = "mobile" | "desktop";


const MOBILE_WIDTH = 768;

const getCurrentDevice = (): Device => window.innerWidth <= MOBILE_WIDTH ? "mobile" : "desktop";


const DeviceContext = createContext<Device>(getCurrentDevice());

export const DeviceProvider = ({children}: { children: ReactNode }) => {
    const [mobile, setMobile] = useState<Device>(getCurrentDevice());

    const handle = () => setMobile(getCurrentDevice());

    useEffect(() => {
        window.addEventListener("resize", handle);
        return () => window.removeEventListener('resize', handle)
    }, []);

    return <DeviceContext.Provider value={mobile}>{children}</DeviceContext.Provider>
}

export const useDevice = (): Device => {
    const context = useContext(DeviceContext);
    if (!context) throw new Error("Hook `useDevice()` Must be used in children of `DeviceProvider`.")
    return context;
};

