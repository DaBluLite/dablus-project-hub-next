/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Dispatcher } from "@/api";
import { Colorway } from "@/types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import Radio from "./Radio";
import ColorwayItem from "./ColorwayItem";
import { colorToHex } from "@/api/Colors";

const _sources = {
    sources: [
        {
            name: "Project Colorway",
            description: "The official colorway source for Project Colorway apps to get you started",
            id: "project-colorway",
            authorGh: "ProjectColorway",
            url: "https://raw.githubusercontent.com/ProjectColorway/ProjectColorway/master/index.json"
        },
        {
            name: "DaBluLite's Personal Colorways",
            description: "A list of my personal colorways, that's all",
            id: "dablulites-personal-colorways",
            authorGh: "DaBluLite",
            url: "https://raw.githubusercontent.com/DaBluLite/dablulite.github.io/master/colorways/index.json"
        },
        {
            name: "Computer-Made Colorways",
            description: "Custom Colorways made for the Discord Plugin \"DiscordColorways\"",
            id: "computer-made-colorways",
            authorGh: "kingofcube",
            url: "https://raw.githubusercontent.com/kingofcube/computermade-colorways/main/colorways.json"
        }
    ]
}

export default function GeneratorPage() {
    const [accent, setAccent] = useState("#5865f2");
    const [primary, setPrimary] = useState("#313338");
    const [secondary, setSecondary] = useState("#2b2d31");
    const [tertiary, setTertiary] = useState("#1e1f22");
    const [colorwayData, setColorwayData] = useState<{ source: string, colorways: Colorway[] }[]>([]);
    const [visibleSources, setVisibleSources] = useState<string>("all");
    const [app, setApp] = useState("discord");

    const apps = [
        {
            name: "Discord",
            id: "discord"
        },
        {
            name: "GitHub",
            id: "github"
        },
        {
            name: "Cyan",
            id: "cyan"
        },
        {
            name: "Cyan 1 (Legacy) (Discord Theme)",
            id: "cyanlegacy"
        },
        {
            name: "Nexus Remastered (Discord Theme)",
            id: "nexusremastered"
        },
        {
            name: "Modular (Discord Theme)",
            id: "modular"
        },
        {
            name: "Virtual-Boy (Discord Theme)",
            id: "virtualboy"
        },
        {
            name: "Solana (Discord Theme)",
            id: "solana"
        }
    ]

    const filters = [
        {
            name: "All Sources",
            id: "all",
            sources: colorwayData
        },
        ...colorwayData.map(source => ({
            name: source.source,
            id: source.source.toLowerCase().replaceAll(" ", "-"),
            sources: [source]
        }))
    ];

    useEffect(() => {
        (async () => {
            const reses = Promise.all(_sources.sources.map(async source => {
                try {
                    const data = await fetch(source.url);
                    return {
                        name: source.name,
                        res: data
                    }
                } catch (e) {
                    console.warn(e);
                    return {
                        name: source.name,
                        res: new Response()
                    }
                }
            }))
            const colors = Promise.all((await reses).map(async res => {
                try {
                    const data = await res.res.json();
                    return {
                        source: res.name,
                        colorways: data.colorways as Colorway[]
                    }
                } catch (e) {
                    console.warn(e);
                    return {
                        source: res.name,
                        colorways: [] as Colorway[]
                    }
                }
            }))
            setColorwayData(await colors);
        })()
    }, []);

    return <div className='flex flex-col gap-3'>
        <div className="flex gap-2">
            <button className="rounded-sm button button-primary py-1 cursor-pointer px-4 w-fit shrink-0" onClick={(e) => {
                e.stopPropagation();
                Dispatcher.emit("OPEN_CONTEXT_MENU", {
                    render() {
                        function Menu() {
                            const targetRef = useRef(null);
                            const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                            useLayoutEffect(() => {
                                if (targetRef.current) {
                                    setDimensions({
                                        width: (targetRef.current as any).offsetWidth,
                                        height: (targetRef.current as any).offsetHeight
                                    });
                                }
                            }, []);
                            return <div ref={targetRef} className={`contextmenu overflow-auto no-scrollbar !fixed`} onClick={e => e.stopPropagation()} style={{
                                top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                            }}>
                                <div className="contextmenu-label">Source</div>
                                {filters.map(({ name, id }, i: number) => {
                                    return <div className="contextmenu-item" key={i} onClick={() => {
                                        Dispatcher.emit("CLOSE_CONTEXT_MENU", null);
                                        setVisibleSources(id);
                                    }}>
                                        <div className="flex flex-col">
                                            <span className="w-full text-sm text-start">{name}</span>
                                        </div>
                                        <Radio checked={visibleSources === id} style={{
                                            marginLeft: "8px"
                                        }} />
                                    </div>;
                                })}
                                <div className="contextmenu-divider" />
                                <div className="contextmenu-label">App</div>
                                {apps.map(({ name, id }, i: number) => {
                                    return <div className="contextmenu-item" key={i} onClick={() => {
                                        Dispatcher.emit("CLOSE_CONTEXT_MENU", null);
                                        setApp(id);
                                    }}>
                                        <div className="flex flex-col">
                                            <span className="w-full text-sm text-start">{name}</span>
                                        </div>
                                        <Radio checked={app === id} style={{
                                            marginLeft: "8px"
                                        }} />
                                    </div>;
                                })}
                            </div>;
                        }
                        return <Menu />;
                    }
                });
            }}>
                Options
            </button>
        </div>
        <div className="colorway-selector max-h-[50vh]">
            {(filters
                .find(filter => filter.id === visibleSources) as { name: string, id: string, sources: { source: string, colorways: Colorway[], type: "online" }[]; } || { name: "null", id: "null", sources: [] }).sources
                .map(({ colorways, source, type }) => (colorways || []).map((colorway: Colorway) => ({ ...colorway, sourceType: type, source: source, preset: colorway.preset || (colorway.isGradient ? "Gradient" : "Default") })))
                .flat()
                .map((color: Colorway, i: number) => <ColorwayItem
                    key={i}
                    id={"colorway-" + color.name}
                    onClick={() => {
                        setAccent("#" + colorToHex(color.accent))
                        setPrimary("#" + colorToHex(color.primary))
                        setSecondary("#" + colorToHex(color.secondary))
                        setTertiary("#" + colorToHex(color.tertiary))
                    }}
                    colors={Object.values({
                        accent: color.accent,
                        primary: color.primary,
                        secondary: color.secondary,
                        tertiary: color.tertiary
                    })}
                    text={color.name}
                    descriptions={[`by ${color.author}`, `from ${color.source}`]}
                />)
            }
        </div>
        <div className="flex gap-2">
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: accent,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${accent}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={accent} onChange={setAccent} />
                                    <input type="text" onChange={(e) => setAccent(e.currentTarget.value)} value={accent} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Accent
            </div>
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: primary,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${primary}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={primary} onChange={setPrimary} />
                                    <input type="text" onChange={(e) => setPrimary(e.currentTarget.value)} value={primary} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Primary
            </div>
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: secondary,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${secondary}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={secondary} onChange={setSecondary} />
                                    <input type="text" onChange={(e) => setSecondary(e.currentTarget.value)} value={secondary} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Secondary
            </div>
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: tertiary,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${tertiary}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={tertiary} onChange={setTertiary} />
                                    <input type="text" onChange={(e) => setTertiary(e.currentTarget.value)} value={tertiary} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Tertiary
            </div>
        </div>
        <div className="flex gap-2">
            <button className="rounded-sm button button-accent py-1 cursor-pointer px-4 w-fit" onClick={() => {
                navigator.clipboard.writeText(
                    `@import url("https://dablulite.dev/api/colorways/gen?app=${app}&accent=${accent.replace(
                        '#',
                        ''
                    )}&primary=${primary.replace('#', '')}&secondary=${secondary.replace(
                        '#',
                        ''
                    )}&tertiary=${tertiary.replace('#', '')}");`
                );
            }}>
                Copy Import
            </button>
            <button className="rounded-sm button button-accent py-1 cursor-pointer px-4 w-fit" onClick={() => {
                navigator.clipboard.writeText(
                    `https://dablulite.dev/api/colorways/gen?app=${app}&accent=${accent.replace(
                        '#',
                        ''
                    )}&primary=${primary.replace('#', '')}&secondary=${secondary.replace(
                        '#',
                        ''
                    )}&tertiary=${tertiary.replace('#', '')}`
                );
            }}>
                Copy CSS URL
            </button>
        </div>
    </div>
}