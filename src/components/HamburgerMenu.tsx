'use client'
import {
    Menu,
    MenuHandler,
    MenuList
} from "@material-tailwind/react";
import Link from "next/link";

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
            <MenuList className="z-40 rounded-sm bg-primary-600 border-none w-fit p-2 flex flex-col gap-2 justify-items-stretch mt-2 ml-[-.5rem] shadow-primary-800">
                <Link href="/cyan" className="border-none outline-none hover:bg-primary-700 transition px-4 py-2 rounded-sm">Cyan 2</Link>
                <Link href="/nexus" className="border-none outline-none hover:bg-primary-700 transition px-4 py-2 rounded-sm">Nexus Remastered</Link>
                <Link href="/colorways" className="border-none outline-none hover:bg-primary-700 transition px-4 py-2 rounded-sm">Project Colorway</Link>
                <Link href="/csssnippets" className="border-none outline-none hover:bg-primary-700 transition px-4 py-2 rounded-sm">CSS Snippets</Link>
            </MenuList>
        </Menu>
    );
}