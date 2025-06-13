import { Author } from "@/interfaces/author";
import { notFound } from "next/navigation";

export type PostMetadata = {
    title: string,
    excerpt: string,
    date: string,
    coverImage: string,
    ogImage: {
      url: string
    },
    author: Author
  };

export type BlogPostData = {
    slug: string;
    metadata: PostMetadata;
};

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
    try {
        const file = await import("@/_posts/" + slug + ".mdx");
        if (file?.metadata) {
            if (!file.metadata.title || !file.metadata.excerpt) {
                throw new Error(`Missing some required metadata fields in: ${slug}`);
            }
            return {
                slug,
                metadata: file.metadata,
            };
        } else {
            throw new Error(`Unable to find metadata for ${slug}.mdx`);
        }
    } catch(e) {
        new Error(e as string);
        return notFound();
    }
}