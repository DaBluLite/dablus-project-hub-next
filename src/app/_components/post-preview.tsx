import { type Author } from "@/interfaces/author";
import { Link } from "next-view-transitions";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/60 dark:border-accent-600/20 bg-white/60 dark:bg-accent-950/60 backdrop-blur-2xl text-black dark:text-white flex-col flex shadow-lg shadow-primary-700/20">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-col gap-2 p-6 select-none pb-4">
        <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/post/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
