import dynamic from "next/dynamic";
import { getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import type { Metadata } from "next/types";
import { PostHeader } from "@/app/_components/post-header";
import Header from "@/app/_components/header";
import markdownStyles from "@/app/_components/markdown-styles.module.css";

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getBlogPostMetadata(slug);
  if (metadata) {
    return {
      ...metadata,
      title: metadata.title + " | DaBlu's Blog"
    };
  } else {
    throw new Error(`No metadata found for blog post: ${slug}`);
  }
}

type BlogPageProps = { params: Promise<{ slug: string }> };

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { metadata } = await getBlogPostMetadata(slug);
  const BlogMarkdown = dynamic(() => import("@/_posts/" + slug + ".mdx"));
  return (
    <div className="container mx-auto p-4">
      <Header />
      <PostHeader slug={slug} title={metadata.title} coverImage={metadata.coverImage} date={metadata.date} author={metadata.author} />
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles["markdown"]}
        >
          <BlogMarkdown />
        </div>
      </div>
    </div>
  );
}