import { ImageModal } from "@/components/ImageModal";

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">Nexus Remastered</h1>
                <a href="https://github.com/DaBluLite/NexusRemastered" target="_blank" className="button button-accent">GitHub</a>
            </div>
            <span className="mb-4 text-pretty">Nexus Remastered is the answer to &quot;what could have been&quot;, had Nexus not become Cyan. It&apos;s a love letter to the theme that it all started from. Simple UI from across all 3 generations of Cyan, paired with a ton of features.</span>
            <div className="grid grid-cols-2 gap-2 w-full">
                <ImageModal
                    src={`/nr-screenshot.png`}
                    alt="Featured Project Screenshot"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
                <ImageModal
                    src={`/nr-screenshot-2.png`}
                    alt="Featured Project Screenshot"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </div>
    );
}

