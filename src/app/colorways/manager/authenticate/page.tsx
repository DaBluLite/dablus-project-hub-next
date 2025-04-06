import Login from "@/app/login/page";
import { auth } from "@/auth";
import ColorishAuthPage from "@/components/ColorishAuthPage";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
    const session = await auth();
    const sp = await searchParams;
    if (!session || !session.user) return <Login />

    return <ColorishAuthPage username={session.user.name as string} image={session.user.image as string} callbackUrl={sp["callback"] || null} />;
}