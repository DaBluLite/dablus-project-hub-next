import { ImageModal } from "@/components/ImageModal";

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">Cyan</h1>
                <a href="https://betterdiscord.app/theme/Cyan" target="_blank" className="button button-accent">Download</a>
            </div>
            <span className="mb-4 text-pretty">A theme that aims to re-imagine the Discord User Experience in the most drastic
                way possible. Subtle curves and shadows, various Quality-of-life improvements and a
                beautiful frosted glass material, paired with massive amounts of customizability and an
                extensive amount of addons to choose from.</span>
            <div className="grid grid-cols-2 gap-2 w-full">
                <ImageModal
                    src={`/cyan2-screenshot-1.png`}
                    alt="Featured Project Screenshot"
                    width="720"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
                <ImageModal
                    src={`/cyan2-screenshot-2.png`}
                    alt="Featured Project Screenshot"
                    width="720"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </div>
    );
}
