/* eslint-disable react/jsx-key */
import SignIn from "@/components/signin";

export default function Login() {
    return (
        <>
            <div className="flex flex-col gap-2 w-full p-5 rounded-md bg-primary-600">
                <h1 className="text-2xl">You are logged out</h1>
                <span>You need to log in to access the resources in this page</span>
                <SignIn/>
            </div>
        </>
    );
}
