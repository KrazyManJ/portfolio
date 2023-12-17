'use client';

import React, {useEffect, useState} from 'react';
import ContaineredSquircle from "@/components/ContaineredSquircle";
import yaml from "js-yaml";

const jsonFetch = async <T, >(link: string): Promise<T> => {
    const j = await fetch(link);
    return await j.json();
}

const fetchRepoLangs = async () => {
    return jsonFetch<Record<string, any>[]>("https://api.github.com/users/krazymanj/repos")
        .then((j) => j.map(repo => repo["languages_url"])) as Promise<string[]>
}

const fetchLinguist = async () => {
    return fetch("https://raw.githubusercontent.com/github-linguist/linguist/master/lib/linguist/languages.yml")
        .then(r => r.text())
        .then(y => yaml.load(y) as Record<string, LinguistLangData>)
}

interface LangsData {
    sum: number,
    langs: Record<string, number>
}

interface LinguistLangData {
    color: string
}

const CondIcon = ({k, col}: { k: string, col: string }) => {

    const [iconState, setIconState] = useState(true);
    if (!iconState) return <></>

    const ICON_MAP: Record<string, string> = {
        "scss": "sass",
        "c#": "csharp",
        "c++": "cplusplus",
        "tsql": "mysql",
        "html": "html5",
        "css": "css3",
    }
    const original = ["sass"]

    const urlLang = (id: string) => ICON_MAP[id.toLowerCase()] ?? id.toLowerCase();
    const url = `url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${urlLang(k)}/${urlLang(k)}-${original.includes(urlLang(k)) ? "original" : "plain"}.svg)`

    return <div
        onError={() => setIconState(false)}
        className={"w-5 h-5"}
        style={{
            WebkitMask: url,
            mask: url,
            backgroundColor: col
        }}
    />
    // return <><Image
    //     src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${urlLang(k)}/${urlLang(k)}-plain.svg`}
    //     alt={""}
    //     width={24}
    //     height={24}
    //     onError={() => setIconState(false)}
    //     hidden={!iconState}
    // /></>
}

const LangStats = () => {

    const [data, setData] = useState<LangsData | null>(null);
    const [linguist, setLinguist] = useState<Record<string, LinguistLangData> | null>(null)


    useEffect(() => {
        fetchRepoLangs().then(async links => {
            let sum = 0;
            const langs: Record<string, number> = {}
            await Promise.all(links.map(async link => {
                await jsonFetch<Record<string, number>>(link)
                    .then(data => {
                        Object.entries(data).forEach(([lang, bytes]) => {
                            sum += bytes;
                            if (!langs[lang]) langs[lang] = 0;
                            langs[lang] += bytes;
                        })
                    })

            }))
            setData({
                sum: sum,
                langs: Object.fromEntries(Object.entries(langs).sort(([, a], [, b]) => a - b).reverse())
            })
        })
        fetchLinguist().then(linguist => setLinguist(linguist));
    }, []);
    if (!data || !linguist) return <div></div>


    return (
        <ContaineredSquircle
            className={"bg-[#fff8] border border-[#fffa] p-10"}
            containerClassName={"drop-shadow-lg"}
            cornerSmoothing={1}
            cornerRadius={75}
        >
            <table className={"w-full"}>
                {Object.entries(data.langs).map(([k, v], i) => (
                    <tr key={i} className={"gap-1 py-[1px]"}>
                        <td className={"align-middle text-xs h-full text-right"}
                            style={{color: linguist[k].color}}
                        >{k}</td>
                        {/*<td>*/}
                        {/*    <CondIcon k={k} col={linguist[k].color}/>*/}
                        {/*</td>*/}
                        <td className={"w-full h-5 pl-2"}>
                            <div className={"h-2 bg-red-600 shadow-lg rounded-md transition-all"}
                                 style={{
                                     backgroundColor: linguist[k].color,
                                     width: (v / data.sum * (1 / (Object.values(data.langs)[0] / data.sum))) * 100 + "%"
                                 }}
                            >

                            </div>

                        </td>
                    </tr>
                ))}
            </table>
        </ContaineredSquircle>
    )
};

export default LangStats;