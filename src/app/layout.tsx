import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";
import { ViewTransitions } from 'next-view-transitions'
import { ContextMenuLayer } from "@/components/ContextMenu";
import { ModalLayer } from "@/components/Modals";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "DaBluLite",
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
        <html lang="en" suppressHydrationWarning>
          <head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <ThemeScript />
          </head>
          <body className="h-full min-h-screen flex relative">
            <ThemeProvider>
              <ModalLayer />
              <div className="relative flex w-full flex-col font-schibsted">
              <nav className="fixed top-0 right-0 left-0 isolate z-[9999] mx-auto flex shrink-0 flex-row items-center px-2 py-2 lg:py-5">
                <div className={`relative mx-auto flex h-full w-full max-w-[80rem] flex-row items-center lg:justify-between gap-2 lg:gap-8 rounded-full transition-all`}>
                  <HamburgerMenu />
                  <div className="md:bg-white/60 dark:md:bg-accent-800/20 items-stretch h-[44px] hidden lg:flex gap-2 shadow-md shadow-transparent md:shadow-primary-700/10 dark:md:shadow-black/10 md:border md:border-white/20 dark:md:border-accent-700/20 p-0.5 md:backdrop-blur-lg rounded-full">
                    <div className="group hover:bg-primary-50/60 dark:hover:bg-accent-800/60 border border-transparent hover:border-primary-700/20 dark:hover:border-accent-700/20 rounded-full transition-all duration-200 shadow-sm shadow-transparent hover:shadow-primary-700/20 relative flex h-full flex-row items-center justify-center text-sm focus:outline-0 text-black dark:text-white">
                      <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400" href="/">Home</Link>
                    </div>
                    <div className="group hover:bg-primary-50/60 dark:hover:bg-accent-800/60 border border-transparent hover:border-primary-700/20 dark:hover:border-accent-700/20 rounded-full transition-all duration-200 shadow-sm shadow-transparent hover:shadow-primary-700/20 relative flex h-full flex-row items-center justify-center text-sm focus:outline-0 text-black dark:text-white">
                      <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400" href="/projects">Projects</Link>
                    </div>
                    <div className="group hover:bg-primary-50/60 dark:hover:bg-accent-800/60 border border-transparent hover:border-primary-700/20 dark:hover:border-accent-700/20 rounded-full transition-all duration-200 shadow-sm shadow-transparent hover:shadow-primary-700/20 relative flex h-full flex-row items-center justify-center text-sm focus:outline-0 text-black dark:text-white">
                      <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400" href="/blog">Blog</Link>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center md:ml-auto">
                    <ThemeToggle />
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
            </ThemeProvider>
          </body>
        </html>
      </ViewTransitions>
    </SessionProvider>
  );
}
