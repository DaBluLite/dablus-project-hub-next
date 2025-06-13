import SignIn from "@/components/signin";

export default function Login() {
    return (
        <div className="flex justify-between items-center mt-auto mb-auto max-w-200 w-full mx-auto select-none">
            <div className="flex flex-col gap-4 w-full justify-center">
                <h1 className="text-4xl">You are logged out</h1>
                <span className="text-lg font-light text-primary-200">You need to log in to access the resources in this page</span>
            </div>
            <SignIn/>
        </div>
    );
}
