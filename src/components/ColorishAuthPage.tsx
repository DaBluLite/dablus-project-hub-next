/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function ColorishAuthPage({ username, image, callbackUrl }: { username: string, image: string, callbackUrl: string | null }) {
    const [status, setStatus] = useState<"asking" | "posting" | "success" | "failure" | "rejected" | "loading">("loading");

    useEffect(() => {
        if (!callbackUrl) {
            setStatus("failure");
        } else {
            setStatus("asking");
        }
    }, []);

    return (
        <div className="flex justify-between items-center mt-auto mb-auto max-w-200 w-full mx-auto select-none">
            <div className="flex flex-col gap-4 w-full justify-center">
                {status === "asking" ? <>
                    <h1 className="text-4xl">Authorization Request</h1>
                    <span className="text-lg font-light text-primary-200">A Colorish instance wants to log in using your Discord profile.</span>
                    <span className="text-lg font-light text-primary-200">It will have access to:</span>
                    <ul className="flex gap-2 flex-col pl-4">
                        <li className="list-disc">Your Discord username</li>
                        <li className="list-disc">Your Discord profile image</li>
                    </ul>
                    <div className="flex gap-2">
                        <div className="button button-primary" onClick={async () => {
                            setStatus("posting");
                            try {
                                await fetch(callbackUrl as string, {
                                    body: JSON.stringify({ username, image, status: 200 }),
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    method: "POST"
                                });
                                setStatus("success");
                            } catch (e) {
                                console.warn(e);
                                console.warn("Colorish Client not authenticating currently");
                                setStatus("failure");
                            }
                        }}>Accept</div>
                        <div className="button button-accent" onClick={() => setStatus("rejected")}>Reject</div>
                    </div>
                </> : <></>}
                {status === "posting" ? <>
                    <h1 className="text-4xl">Sending Info...</h1>
                    <span className="text-lg font-light text-primary-200">Please wait while we authenticate Colorish.</span>
                </> : <></>}
                {status === "loading" ? <>
                    <div className="flex items-center"><Spinner className="text-white"/></div>
                </> : <></>}
                {status === "success" ? <>
                    <h1 className="text-4xl">Colorish Authenticated</h1>
                    <span className="text-lg font-light text-primary-200">Your user details have been transfered to Colorish, continue in the app.</span>
                </> : <></>}
                {status === "failure" ? <>
                    <h1 className="text-4xl">Colorish Authentication Failed</h1>
                    <span className="text-lg font-light text-primary-200">Could not connect to Colorish, try restarting the app.</span>
                </> : <></>}
                {status === "rejected" ? <>
                    <h1 className="text-4xl">Authentication Request Rejected</h1>
                </> : <></>}
            </div>
        </div>
    );
}
