/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Dispatcher } from "@/api";
import { useState } from "react";
import { Link } from "next-view-transitions";
import projects from "../../app/project-list.json";
import { useRef } from "react";

export default function ProjectsContextMenu() {
    const cont: any = useRef(null);
    const [mouseInButton, setMouseInButton] = useState(false);
    return <div ref={cont} onMouseEnter={() => {
        setMouseInButton(true);
    }} onMouseLeave={() => {
        setMouseInButton(false);
    }} className={"group hover:bg-primary-50/60 dark:hover:bg-accent-800/60 !border-b-0 border border-transparent hover:border-primary-700/20 dark:hover:border-accent-700/20 transition-all duration-200 shadow-sm shadow-transparent hover:shadow-primary-700/20 flex h-full flex-row items-center justify-center text-sm focus:outline-0 text-black dark:text-white cursor-default relative rounded-t-3xl"}>
        <span className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined">Projects</span>
        <div className={"absolute rounded-b-3xl rounded-tr-3xl top-9.25 -left-[1px] bg-primary-50/60 dark:bg-accent-800/60 backdrop-blur-2xl p-2 border border-primary-700/20 dark:border-accent-700/20 !border-t-0" + (mouseInButton ? " opacity-100 visible" : " opacity-0 invisible") + " transition-all duration-200 shadow-xl shadow-primary-700/40"}>
            {projects.map((proj, i) => {
                return <Link onClick={() => {
                    setMouseInButton(false);
                    Dispatcher.emit("CLOSE_CONTEXT_MENU", {});
                }} key={i} className="dc-contextmenu-item flex flex-col hover:bg-primary-200/60 dark:hover:bg-accent-800/60 transition duration-200 ease-in-out px-5 py-3 rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 !text-black dark:!text-white" href={proj.actions[0].href}>{proj.title}</Link>
            })}
            </div>
    </div>;
}
