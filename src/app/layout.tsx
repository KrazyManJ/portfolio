import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Theme from "@/providers/Theme";
import React from "react";
import {DeviceProvider} from "@/contexts/DeviceContext";

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'KrazyManJ | Software Developer',
    description: 'Portfolio of Jaroslav Korčák known as KrazyManJ',
}

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <DeviceProvider>
                    <Theme>
                        <div className={"min-h-screen bg-[#dedede] dark:bg-[#111]"}>
                            {children}
                        </div>
                    </Theme>
                </DeviceProvider>
            </body>
        </html>
    )
}
