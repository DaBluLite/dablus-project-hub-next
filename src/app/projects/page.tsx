import { ImageModal } from '@/components/ImageModal';
import projects from '../project-list.json';
import Image from "next/image";
import Link from 'next/link';

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Projects</h1>

            <div className="flex gap-2 items-start pb-5 flex-col md:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                    {projects.map(({ title, description, image, actions, icon }, i) => <div key={i} className="w-full rounded-2xl border border-white/60 dark:border-accent-600/20 bg-white/60 dark:bg-accent-950/60 backdrop-blur-2xl text-black dark:text-white flex-col flex shadow-lg shadow-primary-700/20">
                        <ImageModal
                            className="rounded-2xl !w-full !h-auto max-h-60 object-cover object-center"
                            src={`/${image}`}
                            alt="Featured Project Screenshot"
                            width={1920}
                            quality={100}
                            height={0}
                        />
                        <div className="flex flex-col gap-2 p-6 pb-4 select-none justify-end h-full relative">
                            <Image
                                className="border-primary-400/10 dark:border-white/30 rounded-full absolute -top-18 left-2 border-1 bg-white dark:bg-black shadow-lg shadow- shadow-primary-800/30"
                                src={`/${icon}`}
                                alt="Project Icon"
                                width={64}
                                height={64}
                                quality={100}
                            />
                            <h1 className="text-2xl">{title}</h1>
                            <span className="mb-auto">{description}</span>
                            <div className="flex gap-4">
                                {actions.map(({ color, text, href, internal }, i) => {
                                    if (internal) return <Link key={i} className={`button button-${color}`} href={href} >{text}</Link>
                                    return <a key={i} className={`button button-${color}`} href={href} target="_blank">{text}</a>
                                })}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}
