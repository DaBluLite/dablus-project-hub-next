import { Link } from "next-view-transitions";

export const dynamic = "force-static";

export default function Home() {
    return (
        <div className="flex flex-col gap-2 max-w-[70rem] mx-auto">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">Project Colorway</h1>
                <a href="https://github.com/ProjectColorway" target="_blank" className="button button-primary">GitHub</a>
            </div>
            <span className="text-pretty select-none mb-4">Project Colorway is a theming standard made for the masses, with the goal of a more seamless and vast theming experience, for a vastly colorful web.</span>
            <div className="flex flex-col gap-2 w-full">
                <div className="w-full p-5 rounded-xl bg-primary-700 flex-col gap-2 flex border border-primary-400/20">
                    <h1 className="text-2xl">DiscordColorways</h1>
                    <span>DiscordColorways is the official plugin that offers easy access to Project Colorway and all of its features.</span>
                    <div className="flex gap-2">
                        <Link className="button button-accent" href="https://github.com/DaBluLite/DiscordColorways-VencordUserplugin/" >Download for Vencord</Link>
                        <Link className="button button-primary" href="https://github.com/DaBluLite/DiscordColorways/raw/refs/heads/master/DiscordColorways.plugin.js" >Download for BetterDiscord</Link>
                        <Link className="button button-primary" href="/colorways/discord" >Learn More</Link>
                    </div>
                </div>
                <div className="w-full p-5 rounded-xl bg-primary-700 flex-col gap-2 flex border border-primary-400/20">
                    <h1 className="text-2xl">Colorish</h1>
                    <span>The official manager for Project Colorway-compatible apps.</span>
                    <div className="flex gap-2">
                        <Link className="button button-accent relative" href="https://github.com/ProjectColorway/colorish/releases/tag/v2.0.0-beta">Download v2 (Beta)
                            <span className="absolute -top-1 -right-1 flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                            </span>
                        </Link>
                        <Link className="button button-primary" href="https://github.com/ProjectColorway/colorish/releases/latest" >Download v1 (Legacy)</Link>
                        <Link className="button button-primary" href="/colorways/manager" >Learn More</Link>
                    </div>
                </div>
                <div className="w-full p-5 rounded-xl bg-primary-700 flex-col gap-2 flex border border-primary-400/20">
                    <h1 className="text-2xl">Colorway Generator</h1>
                    <span>Generate CSS imports/URLs for any colorway.</span>
                    <div className="flex gap-2">
                        <Link className="button button-accent" href="/colorways/generator" >Go to page</Link>
                    </div>
                </div>
                <div className="w-full p-5 rounded-xl bg-primary-700 flex-col gap-2 flex border border-primary-400/20">
                    <h1 className="text-xl select-none">How to contribute</h1>
                    <ul className="flex gap-2 flex-col pl-4 select-none">
                        <li className="list-disc">Make colorways. Really, that is all it takes for you to support this project. Make colorways, upload them and share them. The goal of this porject is neither to spread my name nor this project&apos;s name. The goal is to create a universal way of theming apps in an easy and accessible manner.</li>
                        <li className="list-disc">Use the tools provided by instances of Project Colorway. As of DiscordColorways v5.7.0 and Colorish v1, and exporting colorway sources is possible from inside the plugin/app itself. Submissions for colorway sources or colorways are open to anyone from <Link href="/colorways/submit" className="p-0 decoration-1 decoration-solid underline">here</Link>.</li>
                        <li className="list-disc">Create Project Colorway-compatible apps. By properly following Project Colorway&apos;s specifications for apps and manager communication, you can help create a more seamless theming experience across apps.</li>
                        <li className="list-disc">Support for online Project Colorway features for GitHub Desktop is being worked on...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

