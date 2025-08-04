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
                <div className="justify-center items-center flex lg:!hidden cursor-pointer size-8 button button-icon button-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </MenuHandler>
            <MenuList className="!fixed !left-0 !top-0 z-40 m-2 h-fit rounded-2xl rounded-t-3xl shadow-2xl shadow-primary-700 bg-primary-100 border-none p-2 flex flex-col gap-2 justify-items-stretch w-[calc(100%-theme(space.4))] pt-20" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Link href="/" className="rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 outline-none hover:bg-white transition p-4">Home</Link>
                <Link href="/cyan" className="rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 outline-none hover:bg-white transition p-4">Cyan</Link>
                <Link href="/colorish" className="rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 outline-none hover:bg-white transition p-4">Colorish</Link>
                <Link href="/discordcolorways" className="rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 outline-none hover:bg-white transition p-4">DiscordColorways</Link>
                <Link href="/about" className="rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 outline-none hover:bg-white transition p-4">About Me</Link>
                <Link href="/blog" className="rounded-xl shadow-md shadow-transparent hover:shadow-primary-700/20 outline-none hover:bg-white transition p-4">Blog</Link>
            </MenuList>
        </Menu>
    );
}