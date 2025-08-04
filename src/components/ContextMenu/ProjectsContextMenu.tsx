/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Dispatcher } from "@/api";
import { useState } from "react";
import { Link } from "next-view-transitions";
import projects from "../../app/project-list.json";
import { useLayoutEffect, useRef } from "react";
import Image from "../Image";

export default function ProjectsContextMenu() {
    const cont: any = useRef(null);
    const [mouseInButton, setMouseInButton] = useState(false);
    const [mouseInMenu, setMouseInMenu] = useState(false);
    const yPos = "bottom";
    return <div ref={cont} onMouseEnter={(e) => {
        setMouseInButton(true);
        e.stopPropagation();
        Dispatcher.emit("OPEN_CONTEXT_MENU", {
            render() {
                function Menu() {
                    const [pos, setPos] = useState({ x: 0, y: 0 });
                    const [currentProj, setCurrentProj] = useState<typeof projects[number]>(projects[0]);

                    useLayoutEffect(() => {
                        if (cont.current) {
                            setPos({
                                x: (cont.current as any).getBoundingClientRect().x,
                                y: (cont.current as any).getBoundingClientRect().y
                            });
                        }
                    }, []);

                    return <div onMouseEnter={() => setMouseInMenu(true)} onMouseLeave={() => {
                        setMouseInMenu(false);
                        setTimeout(() => {
                            if (!mouseInButton && !mouseInMenu) Dispatcher.emit("CLOSE_CONTEXT_MENU", {});
                        }, 200);
                    }} className={`rounded-2xl border border-primary-400/20 bg-white backdrop-blur-md animate-ttb dc-contextmenu overflow-auto no-scrollbar !fixed px-2 left-1/2 justify-center p-2 flex gap-2 w-fit -translate-x-1/2 shadow-md shadow-primary-700/20`} onClick={e => e.stopPropagation()} style={{
                        top: `${yPos === "bottom" ? pos.y + cont.current.offsetHeight + 8 : window.innerHeight - pos.y - cont.current.offsetHeight - 8}px`,
                        maxHeight: `calc(100vh - 4px - ${yPos === "bottom" ? pos.y + cont.current.offsetHeight + 8 : window.innerHeight - pos.y - cont.current.offsetHeight - 8}px)`
                    }}>
                        <div className="flex flex-col w-60 items-stretch">
                            {projects.map((proj, i) => {
                                return <Link onClick={() => {
                                    setMouseInButton(false);
                                    setMouseInMenu(false);
                                    Dispatcher.emit("CLOSE_CONTEXT_MENU", {});
                                }} key={i} className="dc-contextmenu-item flex flex-col hover:bg-primary-100/60 transition duration-200 ease-in-out px-5 py-3 rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20" href={proj.actions[0].href} onMouseEnter={() => setCurrentProj(proj)}>{proj.title}</Link>
                            })}
                        </div>
                        <Link href={currentProj.actions[0].href} onClick={() => {
                            setMouseInButton(false);
                            setMouseInMenu(false);
                            Dispatcher.emit("CLOSE_CONTEXT_MENU", {});
                        }} className="w-[512px] rounded-xl flex-col flex shadow-md shadow-primary-700/20">
                            <Image
                                className="rounded-t-xl !w-full !h-auto max-h-60 object-cover object-center"
                                src={`/${currentProj.image}`}
                                alt="Featured Project Screenshot"
                                width={1920}
                                quality={100}
                                height={0}
                            />
                            <div className="flex flex-col gap-2 p-5 select-none justify-end h-full relative pt-8">
                                <Image
                                    className="rounded-2xl absolute -top-8 left-4 border-3 border-white"
                                    src={`/${currentProj.icon}`}
                                    alt="Project Icon"
                                    width={64}
                                    height={64}
                                    quality={100}
                                />
                                <h1 className="text-2xl">{currentProj.title}</h1>
                                <span className="mb-auto">{currentProj.description}</span>
                            </div>
                        </Link>
                    </div>;
                }
                return <Menu />;
            }
        });
    }} onMouseLeave={() => {
        setMouseInButton(false);
        setTimeout(() => {
            if (!mouseInButton && !mouseInMenu) Dispatcher.emit("CLOSE_CONTEXT_MENU", {});
        }, 200);
    }} className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0 cursor-pointer">
        <span className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined">Projects</span>
        <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-400/20" />
    </div>;
}
