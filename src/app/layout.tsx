import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Theme from "@/components/Providers";
import React from "react";

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'KrazyManJ | Software Developer',
    description: 'Portfolio of Jaroslav Korčák known as KrazyManJ',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme>
                    <div className={"bg-[#dedede] dark:bg-[#111]"}>
                        {children}
                    </div>
                </Theme>
            </body>
        </html>
    )
}
