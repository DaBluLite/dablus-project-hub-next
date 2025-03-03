/* eslint-disable react/jsx-key */
import CopyButton from "@/components/CopyButton";
import { GET as getCssSnippets } from "../api/csssnippets/route";
import Image from "@/components/Image";

export default async function Home() {
    const res = getCssSnippets();
    const data: { screenshot?: string, import: string, name: string, description: string }[] = await res.json();
    return (
        <>
            <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 w-full">
                    {data.map(({ screenshot, name, description, import: im }, i) => <div key={i} className="w-full p-5 rounded-md bg-primary-600 flex-col gap-2 flex">
                        {screenshot ? <div className="relative w-full h-50">
                            <Image
                                className="rounded-md object-cover object-top"
                                src={screenshot}
                                alt="Featured Project Screenshot"
                                fill
                            />
                        </div> : null}
                        <h1 className="text-2xl">{name}</h1>
                        <span>{description}</span>
                        <div className="flex gap-2">
                            <CopyButton text={im}/>
                        </div>
                    </div>)}
                </div>
                <div className="flex bg-primary-700 rounded-md w-full lg:w-md p-5 flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl">CSS Snippets</h1>
                        <a href="https://github.com/DaBluLite/css-snippets" target="_blank" className="accent-button">GitHub</a>
                    </div>
                    <span>A repo with all of my CSS snippets for Discord, Vesktop and BetterDiscord.</span>
                </div>
            </div>
        </>
    );
}
