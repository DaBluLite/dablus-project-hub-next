import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import UserAvatar from "@/components/User";
import HamburgerMenu from "@/components/HamburgerMenu";
import { ViewTransitions } from 'next-view-transitions'
import { ContextMenuLayer } from "@/components/ContextMenu";
import { ModalLayer } from "@/components/Modals";
import { SessionProvider } from "next-auth/react"
import ProjectsContextMenu from "@/components/ContextMenu/ProjectsContextMenu";

export const metadata: Metadata = {
  title: "DaBluLite's Project Hub",
  description: "The place to be for all of my projects",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <ViewTransitions>
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          </head>
          <body className="h-full min-h-screen flex relative">
            <div className="bg-primary-100 fixed top-0 left-0 h-screen w-screen" />
            <ModalLayer />
            <div className="relative flex w-full flex-col font-schibsted">
              <nav className="fixed top-0 right-0 left-0 isolate z-[9999] mx-auto flex w-full shrink-0 flex-row items-center px-2 py-2 lg:py-5">
                <div className={`relative mx-auto flex h-full w-full max-w-[80rem] flex-row items-center lg:justify-between gap-2 lg:gap-8 rounded-full transition-all bg-white shadow-md shadow-primary-700/20 backdrop-blur-md border border-primary-400/20 px-5 py-2 navbar`}>
                  <div className="flex gap-2 items-center">
                    <HamburgerMenu />
                    <Link href="/" className="p-0">
                      <Image src={"/project_hub_logo.jpg"} alt="DaBluLite's Project Hub Logo" width={32} height={32} className="rounded-full" />
                    </Link>
                  </div>
                  <div className="flex lg:hidden items-center h-full">
                    <h1 className="select-none tracking-wide">DaBluLite&apos;s Project Hub</h1>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 justify-self-center h-full flex-1 flex-row items-center justify-center text-sm select-none hidden lg:flex">
                    <ProjectsContextMenu />
                    <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                      <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/about">About Me</Link>
                      <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-400/20" />
                    </div>
                    <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                      <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/blog">Blog</Link>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center ml-auto lg:ml-0">
                    <UserAvatar />
                  </div>
                </div>
              </nav>
              <div className="px-2 h-full pb-4">
                <div className={`flex flex-col mx-auto grow pt-20 lg:pt-[88px] gap-2 h-full max-w-[70rem]`}>
                  {children}
                </div>
              </div>
            </div>
            <ContextMenuLayer />
          </body>
        </html>
      </ViewTransitions>
    </SessionProvider>
  );
}
