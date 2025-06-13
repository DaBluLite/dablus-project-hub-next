import { BlogPostData, getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src/_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<BlogPostData[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(async (slug) => await getBlogPostMetadata(slug.replace(/\.mdx$/, ""))))
    
  return posts.sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1));;
}