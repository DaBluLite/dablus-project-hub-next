import CopyButton from "@/components/CopyButton";
import { GET as getCssSnippets } from "../api/csssnippets/route";
import { ImageModal } from "@/components/ImageModal";

export default async function Home() {
    const res = getCssSnippets();
    const data: { screenshot?: string, import: string, name: string, description: string }[] = await res.json();
    return (
        <>
            <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 w-full">
                    {data.map(({ screenshot, name, description, import: im }, i) => <div key={i} className="w-full rounded-xl bg-primary-700 border border-primary-400/20 flex-col flex">
                        {screenshot ? <ImageModal
                            loader="static"
                            className="rounded-t-xl w-full h-auto max-h-[500px] object-cover object-top"
                            src={screenshot}
                            alt="Featured Project Screenshot"
                            width={720}
                            height={0}
                            quality={100}
                        /> : null}
                        <div className="flex-col flex gap-2 p-5">
                            <h1 className="text-2xl">{name}</h1>
                            <span>{description}</span>
                            <div className="flex gap-2">
                                <CopyButton text={im} />
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="side-piece">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl">CSS Snippets</h1>
                        <a href="https://github.com/DaBluLite/css-snippets" target="_blank" className="button button-accent">GitHub</a>
                    </div>
                    <span>A repo with all of my CSS snippets for Discord, Vesktop and BetterDiscord.</span>
                </div>
            </div>
        </>
    );
}
