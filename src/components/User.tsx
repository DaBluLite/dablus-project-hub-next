/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserAvatar() {
    const { data: session } = useSession()

    if (!session?.user) return <button type="submit" className="button button-accent" onClick={() => signIn("discord")}>Login</button>

    return (
        <>
            <img width={32} height={32} className="rounded-md border border-primary-400/20" src={session.user.image as string} alt="User Avatar" />
            <button type="submit" className="button button-primary" onClick={() => signOut()}>Logout</button>
        </>
    )
}