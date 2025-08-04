import Image from "next/image";
import featuredProject from "./featured-project.json";
import projects from "./project-list.json";
import { Link } from "next-view-transitions";
import { ImageModal } from "@/components/ImageModal";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <div className="flex bg-primary-600 rounded-t-xl min-h-[512px] max-h-[512px] relative mb-4">
        <Image
          className="rounded-xl w-full h-full absolute object-top object-cover"
          src={`/${featuredProject.image}`}
          alt="Featured Project Screenshot"
          width={1920}
          height={0}
          quality={100}
        />
        <div className="absolute w-full bottom-0 left-0 p-2 bg-gradient-to-t from-primary-100 from-40% to-transparent">
          <div className="flex justify-between backdrop-blur-2xl md:backdrop-blur-none rounded-xl shadow-lg shadow-primary-700/20 bg-white md:shadow-none md:bg-transparent items-center md:items-end p-2 md:p-0">
          <div className="flex flex-col shadow-none select-none md:shadow-lg px-2 md:py-2 md:px-4 md:backdrop-blur-2xl md:shadow-primary-700/20 md:bg-white rounded-xl">
            <h1 className="text-2xl flex gap-2 items-center">{featuredProject.title}<span className="px-3 py-0.5 rounded-md bg-accent-500 text-white text-sm">Featured</span></h1>
            <span className="text-primary-200">{featuredProject.description}</span>
          </div>
          <div className="flex gap-2 select-none">
            {featuredProject.actions.map(({ color, text, href, internal }, i) => {
              if (internal) return <Link key={i} className={`button button-${color}`} href={href} >{text}</Link>
              return <a key={i} className={`button button-${color}`} href={href} target="_blank">{text}</a>
            })}
          </div>
        </div>
        </div>
      </div>
      <div className="flex gap-2 items-start pb-5 flex-col md:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          {projects.map(({ title, description, image, actions, icon }, i) => <div key={i} className="w-full rounded-xl bg-white flex-col flex shadow-lg shadow-primary-700/20">
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
                className="rounded-2xl absolute -top-8 left-4 border-3 border-white bg-white"
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
    </>
  );
}
