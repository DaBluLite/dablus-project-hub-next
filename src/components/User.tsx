/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserAvatar() {
    const { data: session } = useSession()

    if (!session?.user) return <button type="submit" className="button button-accent" onClick={() => signIn("discord")}>Login</button>

    return (
        <div className="flex gap-2 items-center">
            <div className="flex items-center md:shadow-lg md:shadow-primary-700/20 bg-white rounded-full md:px-3 md:py-1 md:border md:border-primary-400/20 select-none">
                <img width={34} height={34} className="rounded-full" src={session.user.image as string} alt="User Avatar" />
                <span className="ml-2 text-sm hidden md:block">{session.user.name}</span>
            </div>
            <button type="submit" className="button button-danger button-icon !p-2" onClick={() => signOut()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}