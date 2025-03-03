/* eslint-disable react/jsx-key */
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 w-full p-5 rounded-md bg-primary-600">
                    <h1 className="text-2xl">Screenshots</h1>
                    <Image
                        src={`/nr-screenshot.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <Image
                        src={`/nr-screenshot-2.png`}
                        alt="Featured Project Screenshot"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <div className="flex bg-primary-700 rounded-md w-full lg:w-md p-5 flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl">Nexus Remastered</h1>
                        <a href="https://github.com/DaBluLite/NexusRemastered" target="_blank" className="accent-button">GitHub</a>
                    </div>
                    <span>Nexus Remastered is the answer to "what could have been", had Nexus not become Cyan. It's a love letter to the theme that it all started from. Simple UI from across all 3 generations of Cyan, paired with a ton of features.</span>
                </div>
            </div>
        </>
    );
}
