import { auth, signIn, signOut } from "@/auth";

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return <form
        action={async () => {
            "use server"
            await signIn("discord")
        }}
    >
        <button type="submit" className="button button-accent">Login</button>
    </form>

    return (
        <>
            <img width={32} height={32} className="rounded-md border border-primary-400/20" src={session.user.image as string} alt="User Avatar" />
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type="submit" className="button button-primary">Logout</button>
            </form>
        </>
    )
}