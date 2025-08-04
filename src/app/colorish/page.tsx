import { ImageModal } from "@/components/ImageModal";

export const dynamic = "force-static";

export default function Home() {
    return (
        <div className="flex flex-col gap-2 max-w-[70rem] mx-auto w-full">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">Colorish</h1>
                <a className="button button-accent relative" href="https://github.com/ProjectColorway/colorish/releases/tag/v2.0.0">
                    Download
                </a>
                <a className="button button-primary relative" href="https://github.com/ProjectColorway/colorish/">
                    GitHub
                </a>
            </div>
            <span className="mb-4 text-pretty">The official manager for Colorways-compatible apps.</span>
            <div className="flex flex-col gap-4 w-full p-5 rounded-xl bg-white shadow-xl shadow-primary-700/20">
                <h1 className="text-2xl">Features</h1>
                <ul className="flex gap-2 flex-col pl-4">
                    <li className="list-disc">Real-time management of all your colorways for all apps from one place</li>
                    <li className="list-disc">Access to online and offline sources, as well as sources from connected apps.</li>
                    <li className="list-disc">Robust colorway and source creators and managers.</li>
                    <li className="list-disc">Simple to use.</li>
                </ul>
                <h1 className="text-2xl">Screenshots</h1>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <ImageModal
                        src={`/colorish-screenshot-1.png`}
                        alt="Colorish v2 Main Interface"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/colorish-screenshot-2.png`}
                        alt="Colorish v2 Colorway Manager"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/colorish-screenshot-3.png`}
                        alt="Colorish v2 Source Manager"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <ImageModal
                        src={`/colorish-screenshot-4.png`}
                        alt="Colorish v2 Settings"
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