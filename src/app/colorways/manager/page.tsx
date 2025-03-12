/* eslint-disable react/jsx-key */
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function Home() {
    return (
        <>
            <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 w-full p-5 rounded-md bg-primary-600">
                    <h1 className="text-2xl">Screenshots</h1>
                    <Image
                        src={`/manager/colorish.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <div className="flex bg-primary-700 rounded-md w-full lg:w-md p-5 flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">Colorish</h1>
                        <Link className="accent-button text-center" href="https://github.com/ProjectColorway/colorish/releases/latest" >Download</Link>
                    </div>
                    <span>The official manager for Project Colorway-compatible apps.</span>
                    <h1 className="text-xl">Features:</h1>
                    <ul className="flex gap-2 flex-col pl-4">
                        <li className="list-disc">Real-time management of all your colorways for all apps from one place</li>
                        <li className="list-disc">Access to online and offline sources, as well as sources from connected apps.</li>
                        <li className="list-disc">Robust colorway and source creators and managers.</li>
                        <li className="list-disc">Simple to use.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
