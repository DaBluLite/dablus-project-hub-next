import type { Metadata } from "next";
import "./globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import { ViewTransitions } from 'next-view-transitions'
import { ContextMenuLayer } from "@/components/ContextMenu";
import { ModalLayer } from "@/components/Modals";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/contexts/ThemeContext";
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
              <nav className="fixed bottom-0 right-0 left-0 isolate z-[9999] mx-auto flex shrink-0 flex-row items-center px-5 py-5 lg:py-5 lg:px-5">
                <div className={`relative mx-auto flex h-full w-full flex-row items-center lg:justify-between gap-2 lg:gap-8 rounded-full transition-all`}>
                  <HamburgerMenu />
                </div>
              </nav>
              <div className="px-2 h-full pb-4">
                <div className={`flex flex-col mx-auto grow gap-2 h-full max-w-[70rem]`}>
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
