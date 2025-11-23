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
                            className="rounded-t-xl !w-full !h-auto max-h-60 object-cover object-center"
                            src={`/${image}`}
                            alt="Featured Project Screenshot"
                            width={1920}
                            quality={100}
                            height={0}
                        />
                        <div className="flex flex-col gap-2 p-5 select-none justify-end h-full relative pt-8">
                            <Image
                                className="rounded-2xl absolute -top-8 left-4 border-3 border-white bg-white dark:border-black dark:bg-black"
                                src={`/${icon}`}
                                alt="Project Icon"
                                width={64}
                                height={64}
                                quality={100}
                            />
                            <h1 className="text-2xl">{title}</h1>
                            <span className="mb-auto">{description}</span>
                            <div className="flex gap-2">
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
