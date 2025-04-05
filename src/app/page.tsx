import Image from "next/image";
import featuredProject from "./featured-project.json";
import projects from "./project-list.json";
import { Link } from "next-view-transitions";
import { ImageModal } from "@/components/ImageModal";

export default function Home() {
  return (
    <>
      <div className="flex bg-primary-600 rounded-xl min-h-[300px] max-h-[300px] relative shadow-xl shadow-black/40 mb-4 border border-primary-400/20">
        <Image
          className="rounded-xl w-full h-[300px] absolute object-top object-cover"
          src={`/${featuredProject.image}`}
          alt="Featured Project Screenshot"
          width={1920}
          height={0}
          quality={100}
        />
        <div className="absolute w-full bottom-0 left-0 p-2 flex justify-between items-end rounded-b-xl">
          <div className="flex flex-col shadow-lg shadow-black/40 select-none py-2 px-4 bg-black/80 backdrop-blur-2xl rounded-xl">
            <h1 className="text-2xl flex gap-2 items-center">{featuredProject.title}<span className="px-3 py-0.5 rounded-md bg-accent-500 text-white text-sm">Featured</span></h1>
            <span className="text-primary-200">{featuredProject.description}</span>
          </div>
          <div className="flex gap-2 shadow-lg shadow-black/40 select-none p-2 bg-black/80 backdrop-blur-2xl rounded-xl">
            {featuredProject.actions.map(({ color, text, href, internal }, i) => {
              if (internal) return <Link key={i} className={`button button-${color}`} href={href} >{text}</Link>
              return <a key={i} className={`button button-${color}`} href={href} target="_blank">{text}</a>
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-start pb-5 flex-col-reverse lg:flex-row">
        <div className="grid grid-cols-2 gap-2 w-full">
          {projects.map(({ title, description, image, actions }, i) => <div key={i} className="w-full rounded-xl bg-primary-700 flex-col flex border border-primary-400/20">
            <ImageModal
              className="rounded-t-xl !w-full !h-auto max-h-60 object-cover object-center"
              src={`/${image}`}
              alt="Featured Project Screenshot"
              width={1920}
              quality={100}
              height={0}
            />
            <div className="flex flex-col gap-2 p-5 select-none justify-end h-full">
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
