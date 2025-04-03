import Login from "@/app/login/page";
import { auth } from "@/auth";
import SubmitPage from "@/components/SubmitPage";

export default async function Home() {
    const session = await auth()
    if (!session) return <Login />

    return <SubmitPage/>;
}