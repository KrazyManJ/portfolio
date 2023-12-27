'use client';

import React, {ReactNode, useEffect, useState} from 'react';

const NoTransitionsOnLoadProvider = ({children}: {children:ReactNode}) => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const handle = () => setLoaded(true)
        window.addEventListener("load",handle)
        return () => window.removeEventListener("load",handle)
    }, []);

    return (
        <div className={loaded ? undefined : "preload"}>
            <style>{`.preload * {transition: none !important;}`}</style>
            {children}
        </div>
    );
};

export default NoTransitionsOnLoadProvider;