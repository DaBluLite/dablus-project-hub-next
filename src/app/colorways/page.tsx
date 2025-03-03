/* eslint-disable react/jsx-key */
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-full p-5 rounded-md bg-primary-600 flex-col gap-2 flex">
                        <h1 className="text-2xl">Discord Colorways</h1>
                        <span>DiscordColorways is the official plugin that offers easy access to Project Colorway and all of its features.</span>
                        <div className="flex gap-2">
                            <Link className="accent-button" href="https://github.com/DaBluLite/DiscordColorways-VencordUserplugin/" >Download for Vencord</Link>
                            <Link className="primary-button" href="https://github.com/DaBluLite/DiscordColorways/raw/refs/heads/master/DiscordColorways.plugin.js" >Download for BetterDiscord</Link>
                            <Link className="primary-button" href="/colorways/discord" >Learn More</Link>
                        </div>
                    </div>
                    <div className="w-full p-5 rounded-md bg-primary-600 flex-col gap-2 flex">
                        <h1 className="text-2xl">Colorish</h1>
                        <span>The official manager for Project Colorway-compatible apps.</span>
                        <div className="flex gap-2">
                            <Link className="accent-button" href="https://github.com/ProjectColorway/colorish/releases/latest" >Download</Link>
                            <Link className="primary-button" href="/colorways/manager" >Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="flex bg-primary-700 rounded-md w-full lg:w-md p-5 flex-col gap-2">
                    <h1 className="text-2xl">Project Colorway</h1>
                    <span>Project Colorway is a theming standard made for the masses, with the goal of a more seamless and vast theming experience, for a vastly colorful web.</span>
                    <h1 className="text-xl">How to contribute</h1>
                    <ul className="flex gap-2 flex-col pl-4">
                        <li className="list-disc">Make colorways. Really, that is all it takes for you to support this project. Make colorways, upload them and share them. The goal of this porject is neither to spread my name nor this project's name. The goal is to create a universal way of theming apps in an easy and accessible manner.</li>
                        <li className="list-disc">Use the tools provided by instances of Project Colorway. As of DiscordColorways v5.7.0 and Colorish v1, and exporting colorway sources is possible from inside the plugin/app itself. Submissions for colorway sources or colorways are open to anyone from <Link href="/colorways/submit" className="p-0 decoration-1 decoration-solid underline">here</Link>.</li>
                        <li className="list-disc">Create Project Colorway-compatible apps. By properly following Project Colorway's specifications for apps and manager communication, you can help create a more seamless theming experience across apps.</li>
                        <li className="list-disc">Support for online Project Colorway features for GitHub Desktop is being worked on...</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
