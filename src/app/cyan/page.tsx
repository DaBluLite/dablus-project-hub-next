import { ImageModal } from "@/components/ImageModal";
import DownloadBtn from "./DownloadBtn";

export const dynamic = "force-static";

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <h1 className="text-4xl my-4">Cyan</h1>
                <DownloadBtn/>
                <a href="https://betterdiscord.app/theme/Cyan" className="button button-primary">Find it on BetterDiscord</a>
            </div>
            <span className="mb-4 text-pretty">A theme that aims to re-imagine the Discord User Experience in the most drastic
                way possible. Powerful UX, paired with stunning visuals and vast amounts of customizability, like never before.</span>
            <div className="grid grid-cols-2 gap-2 w-full">
                <ImageModal
                    src={`/cyan3-screenshot-1.png`}
                    alt="Featured Project Screenshot"
                    width="720"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-md"
                />
                <ImageModal
                    src={`/cyan3-screenshot-2.png`}
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
