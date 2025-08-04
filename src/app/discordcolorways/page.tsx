import { ImageModal } from "@/components/ImageModal";

export const dynamic = "force-static";

export default function Home() {
    return (
        <div className="flex flex-col gap-2 max-w-[70rem] mx-auto w-full">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">DiscordColorways</h1>
                <a className="button button-accent text-center" href="https://github.com/DaBluLite/DiscordColorways-VencordUserplugin/" >Download for Vencord</a>
                <a className="button button-primary text-center" href="https://github.com/DaBluLite/DiscordColorways/raw/refs/heads/master/DiscordColorways.plugin.js" >Download for BetterDiscord</a>
            </div>
            <span className="text-pretty select-none mb-4">DiscordColorways is the official plugin that offers easy access to Colorways and all of their features.</span>
            <div className="flex flex-col gap-4 w-full p-5 rounded-xl bg-white shadow-xl shadow-primary-700/20">
                <h1 className="text-2xl">Features</h1>
                <ul className="flex gap-2 flex-col pl-4">
                    <li className="list-disc">An Easy-to-use interface</li>
                    <li className="list-disc">All Colorway and Preset sources in the official source repository.</li>
                    <li className="list-disc">Access to presets and colorway themes.</li>
                    <li className="list-disc">Robust colorway, preset and source creators.</li>
                    <li className="list-disc">Compatibility with Colorways managers, designed with Colorish in mind.</li>
                </ul>
                <h1 className="text-2xl">Screenshots (v8.5 Beta)</h1>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <ImageModal
                        src={`/dc/main-v8.5.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/dc/gs-v8.5.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <h1 className="text-2xl">Screenshots (v8)</h1>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <ImageModal
                        src={`/dc/main.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/dc/settings.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/dc/creator.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
