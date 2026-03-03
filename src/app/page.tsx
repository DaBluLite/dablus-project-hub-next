/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import featuredProject from "./featured-project.json";
import Link from "next/link";
import MouseScrollIndicator from "@/components/MouseScrollIndicator";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <section className="h-screen flex items-center justify-center text-black dark:text-white relative w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 px-5">
          <img className="w-20 h-20 rounded-full" src="https://avatars.githubusercontent.com/u/73998678" alt="dablulite profile picture" />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Hello, I&apos;m DaBluLite</h1>
            <span className="text-lg">I am a web developer that likes to experiment with different designs. I like music and coding, and I&apos;m always open to testing new things.</span>
            <div className="flex flex-wrap gap-2">
              <Link href="#featured" className="button button-accent">
                Featured Project
              </Link>
              <Link href="/projects" className="button button-primary">
                All Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4 justify-center flex-col">
          <div className="flex items-end gap-4">
            <MouseScrollIndicator className="scale-75 opacity-70" />
          </div>
        </div>
      </section>
      <section id="featured" className="h-screen flex flex-col items-start gap-8 justify-center text-black dark:text-white relative">
        <div className="flex items-center justify-between gap-8 w-full px-5 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold">Featured Project</h1>
          <div className="flex items-center gap-4">
            {featuredProject.actions.map(({ color, text, href, internal }, i) => {
              if (internal) return <Link key={i} className={`button button-${color}`} href={href} >{text}</Link>
              return <a key={i} className={`button button-${color}`} href={href} target="_blank">{text}</a>
            })}
          </div>
        </div>
        <div className="flex bg-primary-600 rounded-xl relative mb-4 w-full aspect-9/13 md:aspect-video">
          <Image
            className="rounded-xl w-full h-full absolute object-top object-cover"
            src={`/${featuredProject.image}`}
            alt="Featured Project Screenshot"
            width={1920}
            height={0}
            quality={100}
          />
          <div className="absolute w-full rounded-b-xl bottom-0 left-0 p-2 bg-linear-to-t from-primary-100 dark:from-zinc-950 to-transparent">
            <div className="flex flex-col shadow-none select-none px-2">
              <h1 className="text-2xl flex gap-2 items-center text-white">{featuredProject.title}</h1>
              <span className="text-primary-900 dark:text-primary-200">{featuredProject.description}</span>
            </div>
          </div>
        </div>
        <Link href="/projects" className="button button-accent px-8! py-4! mx-auto">
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </>
  );
}
