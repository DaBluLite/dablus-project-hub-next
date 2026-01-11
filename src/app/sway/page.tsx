/* eslint-disable @next/next/no-img-element */
import MouseScrollIndicator from "@/components/MouseScrollIndicator";
import Link from "next/link";

export default function SwayPage() {
    return <>
        <section className="h-[calc(100vh-88px)] flex items-center justify-center text-black dark:text-white relative w-full">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-5xl font-bold">Sway</h1>
                <span className="text-lg">A new way to listen to radio stations worldwide.</span>
                <div className="flex flex-wrap gap-2">
                    <Link href="#featured" className="button button-accent">
                        Open Sway
                    </Link>
                    <Link href="/projects" className="button button-primary">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4 justify-center flex-col">
                <div className="flex items-end gap-4">
                    <MouseScrollIndicator className="scale-75 opacity-70" />
                </div>
            </div>
        </section>
    </>
}