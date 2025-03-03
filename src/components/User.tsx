import { auth, signIn, signOut } from "@/auth";

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return <form
        action={async () => {
            "use server"
            await signIn("discord")
        }}
    >
        <button type="submit" className="rounded-sm bg-accent-500 hover:bg-accent-600 transition text-white cursor-pointer py-1 px-4">Login</button>
    </form>

    return (
        <>
            <img width={28} height={28} className="rounded-sm" src={session.user.image as string} alt="User Avatar" />
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type="submit" className="rounded-sm bg-primary-500 hover:bg-primary-700 transition text-white cursor-pointer py-1 px-4">Logout</button>
            </form>
        </>
    )
}