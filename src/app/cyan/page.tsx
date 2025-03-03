/* eslint-disable react/jsx-key */
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 w-full p-5 rounded-md bg-primary-600">
                    <h1 className="text-2xl">Screenshots</h1>
                    <Image
                        src={`/cyan2-screenshot-1.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <Image
                        src={`/cyan2-screenshot-2.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <div className="flex bg-primary-700 rounded-md w-full lg:w-md p-5 flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl">Cyan</h1>
                        <a href="https://betterdiscord.app/theme/Cyan" target="_blank" className="accent-button">Download</a>
                    </div>
                    <span>A theme that aims to re-imagine the Discord User Experience in the most drastic
                        way possible. Subtle curves and shadows, various Quality-of-life improvements and a
                        beautiful frosted glass material, paired with massive amounts of customizability and an
                        extensive amount of addons to choose from.</span>
                </div>
            </div>
        </>
    );
}
