'use client'
import {
    Menu,
    MenuHandler,
    MenuList
} from "@material-tailwind/react";
import { Link } from "next-view-transitions";

export default function HamburgerMenu() {
    return (
        <Menu placement="bottom-start">
            <MenuHandler>
                <div className="justify-center items-center flex lg:hidden cursor-pointer size-8 bg-primary-500 hover:bg-primary-700 transition rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </div>
            </MenuHandler>
            <MenuList className="!fixed !left-0 !top-0 z-40 rounded-none h-full bg-primary-500 border-none p-2 flex flex-col gap-2 justify-items-stretch shadow-primary-800 w-full justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Link href="/" className="border-none outline-none hover:bg-primary-700 transition p-4 rounded-lg">Home</Link>
                <Link href="/cyan" className="border-none outline-none hover:bg-primary-700 transition p-4 rounded-lg">Cyan 2</Link>
                <Link href="/nexus" className="border-none outline-none hover:bg-primary-700 transition p-4 rounded-lg">Nexus Remastered</Link>
                <Link href="/colorways" className="border-none outline-none hover:bg-primary-700 transition p-4 rounded-lg">Project Colorway</Link>
                <Link href="/csssnippets" className="border-none outline-none hover:bg-primary-700 transition p-4 rounded-lg">CSS Snippets</Link>
                <Link href="/blog" className="border-none outline-none hover:bg-primary-700 transition p-4 rounded-lg">Blog</Link>
            </MenuList>
        </Menu>
    );
}