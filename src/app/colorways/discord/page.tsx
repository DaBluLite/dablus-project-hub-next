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
                        src={`/dc/main.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <Image
                        src={`/dc/settings.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <Image
                        src={`/dc/creator.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <div className="flex bg-primary-700 rounded-md w-full lg:w-md p-5 flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">Discord Colorways</h1>
                        <div className="flex gap-2 flex-col">
                            Download for:
                            <Link className="accent-button text-center" href="https://github.com/DaBluLite/DiscordColorways-VencordUserplugin/" >Vencord</Link>
                            <Link className="primary-button text-center" href="https://github.com/DaBluLite/DiscordColorways/raw/refs/heads/master/DiscordColorways.plugin.js" >BetterDiscord</Link>
                        </div>
                    </div>
                    <span>DiscordColorways is the official plugin that offers easy access to Project Colorway and all of its features.</span>
                    <h1 className="text-xl">It offers features like:</h1>
                    <ul className="flex gap-2 flex-col pl-4">
                        <li className="list-disc">An Easy-to-use interface</li>
                        <li className="list-disc">All Colorway and Preset sources in the official source repository.</li>
                        <li className="list-disc">Access to presets and colorway themes.</li>
                        <li className="list-disc">Robust colorway, preset and source creators.</li>
                        <li className="list-disc">Compatibility with Project Colorway managers, designed with Colorish in mind.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
