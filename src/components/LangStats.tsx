'use client';

import React, {useEffect, useState} from 'react';
import ContaineredSquircle from "@/components/ContaineredSquircle";

const LangStats = () => {

    // fetch("https://api.github.com/users/krazymanj/repos")
    //     .then(r => r.json())
    //     .then(j => {
    //         fetch("https://api.github.com/repos/krazymanj/"+j["name"]+"/languages")
    //             .then(r => r.json())
    //             .then(j => console.log(j))
    //     })
    const [data, setData] = useState<Record<string,number>>({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.github.com/repos/krazymanj/portfolio/languages")
            .then((res) => res.json())
            .then((d) => {
                setData(d)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    return (
        <ContaineredSquircle className="bg-white p-5 py-10 m-5 w-fit"
                             cornerRadius={40} cornerSmoothing={1}
        >
            {Object.entries(data).map(([lang,val]) => {
                return <>
                    <div className="my-4">
                        <div>{lang}</div>
                        <div className="bg-gray-300 h-2 w-64 rounded overflow-hidden">
                            <div className={`bg-purple-400 h-full`} style={{width:val/Object.values(data).reduce((partialSum, a) => partialSum + a, 0)*100+"%"}} />
                        </div>
                    </div>
                </>
            })}
        </ContaineredSquircle>
    )
};

export default LangStats;