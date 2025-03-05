import { PostPreview } from "./post-preview";
import { BlogPostData } from "../blog/_lib/getBlogPostData";

type Props = {
  posts: BlogPostData[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.metadata.title}
            coverImage={post.metadata.coverImage}
            date={post.metadata.date}
            author={post.metadata.author}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
