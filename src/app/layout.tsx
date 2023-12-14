import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'KrazyManJ | Software Developer',
    description: 'Portfolio of Jaroslav Korčák known as KrazyManJ',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-[#dedede]">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
