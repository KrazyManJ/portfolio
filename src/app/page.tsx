import React from "react";
import {Fira_Code} from "next/font/google";


import IconLabel from "@/components/IconLabel";


const FONT_FIRA_CODE = Fira_Code({
    subsets: ["latin"]
});


const Title = ({children}: { children: string }) => <h2 className="font-bold transition-colors text-5xl">{children}</h2>

export default function Home() {
    return (
        <main className="p-8">
            <div className={"text-center mb-14"}>
                <h1 className={"font-extrabold text-8xl mb-5"}>KrazyManJ</h1>
                <div className={"font-medium text-4xl"}>Software developer</div>
            </div>
            <Title>Tools i am using</Title>
            <div className="flex gap-4 my-8 mx-24 flex-wrap justify-stretch">
                <IconLabel
                    img="/icons/cloudflare.svg"
                    label="Cloudflare"
                    link="https://www.cloudflare.com"
                    tooltip={"Network Management (DNS)"}
                />
                <IconLabel
                    img="/icons/latex.svg"
                    label="LaTeX"
                    link="https://www.latex-project.org"
                    tooltip="Typesetting system software for documents"
                />
                <IconLabel
                    img="/icons/figma.svg"
                    label="Figma"
                    link="https://www.figma.com"
                    tooltip="Vector editor for UI designing"
                />
                <IconLabel
                    img="/icons/jetbrains/idea.svg"
                    label="IntelliJ IDEA"
                    link="https://www.jetbrains.com/idea/"
                    tooltip="IDE for Java/Kotlin"
                />
                <IconLabel
                    img="/icons/jetbrains/pycharm.svg"
                    label="PyCharm"
                    link="https://www.jetbrains.com/pycharm/"
                    tooltip="IDE for Python"
                />
                <IconLabel
                    img="/icons/jetbrains/phpstorm.svg"
                    label="PhpStorm"
                    link="https://www.jetbrains.com/phpstorm/"
                    tooltip={"IDE for all-kind of Web Development"}
                />
                <IconLabel
                    img="/icons/jetbrains/clion.svg"
                    label="Clion"
                    link="https://www.jetbrains.com/clion/"
                    tooltip={"IDE for C++"}
                />
                <IconLabel
                    img="/icons/vscode.svg"
                    label="Visual Studio Code"
                    link="https://code.visualstudio.com"
                    tooltip={"Text editor commonly used for\nweb or python development"}
                />
                <IconLabel
                    img="/icons/diagramsnet.svg"
                    label="Diagrams.net"
                    link={"https://www.drawio.com"}
                    tooltip={"Graph drawing software for creating\nflowcharts, UML or network diagrams\n and much more"}
                />
                <IconLabel
                    img="/icons/git.svg"
                    label="Git"
                    link={"https://git-scm.com"}
                    tooltip={"Version control system for managing versions of projects"}
                />
                <IconLabel
                    img="/icons/maven.svg"
                    label="Maven"
                    link={"https://maven.apache.org"}
                    tooltip={"Java project manager software using XML"}
                />
                <IconLabel
                    img="/icons/gradle.svg"
                    label="Gradle"
                    link={"https://gradle.org"}
                    tooltip={"Java project manager software using Kotlin/Groovy"}
                />
                <IconLabel
                    img="/icons/visualstudio.svg"
                    label="Visual Studio"
                    link="https://visualstudio.microsoft.com/"
                    tooltip={"IDE for Windows apps mainly (C,C#,C++)"}
                />
                <IconLabel
                    img="/icons/termius.svg"
                    label="Termius"
                    link="https://termius.com"
                    tooltip={"SSH Client for accessing remote device"}
                />
                <IconLabel
                    img="/icons/xampp.svg"
                    label="XAMPP"
                    link="https://www.apachefriends.org"
                    tooltip={"Software containing MariaDB, PHP and Perl"}
                />
                <IconLabel
                    img="/icons/phpmyadmin.svg"
                    label="PhpMyAdmin"
                    link={"https://www.phpmyadmin.net"}
                    tooltip={"Administration tool for MariaDB or MySQL databases"}
                />
                <IconLabel
                    img="/icons/github.svg"
                    label="GitHub"
                    link={"https://github.com"}
                    tooltip={"Cloud-based platform for software development\nand version control"}
                />
            </div>
            <Title>Frameworks / Libraries</Title>
            <div className="flex gap-4 my-8 mx-24 flex-wrap">
                <IconLabel
                    img={"/icons/tailwind.svg"}
                    label="Tailwind CSS"
                    link={"https://tailwindcss.com"}
                    tooltip={"CSS Framework for designing via predefined classes"}
                />
                <IconLabel
                    img={"/icons/fastapi.svg"}
                    label="FastAPI"
                    link={"https://fastapi.tiangolo.com"}
                    tooltip={"Python framework for building APIs"}
                />
                <IconLabel
                    img={"/icons/nextjs.svg"}
                    label="Next.js"
                    link={"https://nextjs.org"}
                    tooltip={"Web deelopment framework based on React with\nallowance of serverside rendering"}
                />
                <IconLabel
                    img={"/icons/qt.svg"}
                    label="PyQt"
                    link={"https://riverbankcomputing.com/software/pyqt"}
                    tooltip={"Python library based on QT (C++ version)\nto create GUI applications"}
                />
                <IconLabel
                    img={"/icons/sass.svg"}
                    label="Sass"
                />
                <IconLabel
                    img={"/icons/react.svg"}
                    label="React"
                />
                <IconLabel
                    img={"/icons/manim.svg"}
                    label="Manim"
                    link="https://www.manim.community"/>
                <IconLabel
                    img={"/icons/framer-motion.svg"}
                    label="Framer Motion"
                />
                <IconLabel
                    img={"/icons/mermaidjs.svg"}
                    label="Mermaid.js"
                />
            </div>
            {/*<Latex>{"$$\\Huge\\frac{d}{dx}\\left( \\frac{\\lim\\limits_{ h \\to \\infty } \\frac{ (x+h)^{3}-x^{3} }{h} \\cdot \\sum\\limits_{n=0}^{\\infty} \\frac{ x^{n+1} }{ n+1 }}{\\int\\limits_{0}^{x} \\ln t \\, dt }  \\right)$$"}</Latex>*/}
        </main>
    )
}
