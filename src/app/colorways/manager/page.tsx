import { ImageModal } from "@/components/ImageModal";

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">Colorish</h1>
                <a className="button button-accent relative" href="https://github.com/ProjectColorway/colorish/releases/tag/v2.0.0-beta">Download v2 (Beta)
                    <span className="absolute -top-1 -right-1 flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                    </span>
                </a>
                <a className="button button-primary" href="https://github.com/ProjectColorway/colorish/releases/latest" >Download v1 (Legacy)</a>
            </div>
            <span className="mb-4 text-pretty">The official manager for Project Colorway-compatible apps.</span>
            <div className="flex flex-col gap-4 w-full p-3 rounded-xl bg-primary-800 border border-primary-400/20">
                <h1 className="text-2xl">Features</h1>
                <ul className="flex gap-2 flex-col pl-4">
                    <li className="list-disc">Real-time management of all your colorways for all apps from one place</li>
                    <li className="list-disc">Access to online and offline sources, as well as sources from connected apps.</li>
                    <li className="list-disc">Robust colorway and source creators and managers.</li>
                    <li className="list-disc">Simple to use.</li>
                </ul>
                <h1 className="text-2xl">Screenshots (v2 Beta)</h1>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <ImageModal
                        src={`/manager/main-v2.png`}
                        alt="Colorish v2 Main Interface"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/manager/gs-v2.png`}
                        alt="Colorish v2 Global Search"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/manager/settings-v2.png`}
                        alt="Colorish v2 Settings"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <h1 className="text-2xl">Screenshots (v1)</h1>
                <ImageModal
                    src={`/manager/colorish.png`}
                    alt="Colorish v1 Main Interface"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </div>
    );
}