'use client'
import {
    Menu,
    MenuHandler,
    MenuList
} from "@material-tailwind/react";
import { Link } from "next-view-transitions";

export default function HamburgerMenu() {
    return (
        <Menu
            placement="bottom-start"
            animate={{
                mount: { y: 0 },
                unmount: { y: -20 },
            }}
        >
            <MenuHandler>
                <div className="bg-white/60 dark:bg-accent-800/20 hover:bg-primary-50/60 dark:hover:bg-accent-800/60 flex lg:hidden items-center gap-2 p-3 rounded-full cursor-pointer border-1/2 border-primary-700/20 dark:border-accent-700/20 shadow-sm shadow-primary-700/10 dark:shadow-black/10 md:border transition-colors text-black dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </MenuHandler>
            <MenuList className="!fixed !left-0 !top-0 z-40 m-2 mt-15 h-fit rounded-xl shadow-2xl shadow-primary-700 bg-white/60 backdrop-blur-lg dark:bg-accent-800/20 border-none p-1 flex flex-col gap-2 justify-items-stretch w-fit border border-white/20 dark:border-accent-700/20" placeholder={() => {}} onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <Link href="/" className="hamburger-item">Home</Link>
                <Link href="/projects" className="hamburger-item">Projects</Link>
                <Link href="/blog" className="hamburger-item">Blog</Link>
            </MenuList>
        </Menu>
    );
}