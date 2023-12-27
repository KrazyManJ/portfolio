import React from "react";
import NavBar from "@/components/NavBar";
import TOOLS from "@/data/tools";
import TechBadge from "@/components/TechBadge";
import FRAMEWORKS from "@/data/frameworks";


export default function Main() {
    return (
        <main>
            <NavBar/>
            <div className={"flex flex-wrap gap-4 p-10"}>
                {[...TOOLS, ...FRAMEWORKS]
                    .sort((a,b) => a.label.localeCompare(b.label))
                    .map(({...props},i) =><TechBadge {...props} key={i} />)
                }
            </div>
        </main>
    )
}
