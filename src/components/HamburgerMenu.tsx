'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={menuRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white/60 dark:bg-accent-800/20 backdrop-blur-lg hover:bg-primary-50/60 dark:hover:bg-accent-800/60 flex items-center gap-2 p-3 rounded-full cursor-pointer shadow-2xl shadow-primary-700/20 transition-colors text-black dark:text-white"
                aria-label="Toggle menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="fixed left-0 bottom-0 z-40 m-2 mb-20 h-fit rounded-2xl shadow-2xl shadow-primary-700/20 bg-white/60 backdrop-blur-lg dark:bg-accent-800/20 p-3 flex flex-col gap-3 justify-items-stretch w-fit border border-white/20 dark:border-accent-700/20"
                    style={{
                        animation: 'hamburger-menu-mount 0.2s ease-out'
                    }}
                >
                    <Link href="/" className="hamburger-item" onClick={() => setIsOpen(false)}>
                        <span className="hamburger-item-title">Home</span>
                    </Link>
                    <Link href="/projects" className="hamburger-item" onClick={() => setIsOpen(false)}>
                        <span className="hamburger-item-title">Projects</span>
                    </Link>
                    <Link href="/blog" className="hamburger-item" onClick={() => setIsOpen(false)}>
                        <span className="hamburger-item-title">Blog</span>
                    </Link>
                    <div className="flex justify-end gap-3">
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </div>
    );
}