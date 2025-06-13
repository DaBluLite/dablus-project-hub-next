import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default async function Index() {
    const allPosts = await getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return (
        <main>
            <Container>
                <section className="flex-col md:flex-row flex items-center md:justify-between my-4 select-none">
                    <h1 className="text-2xl font-bold tracking-tighter leading-tight md:pr-8">
                        DaBlu&apos;s Blog
                    </h1>
                </section>
                <HeroPost
                    title={heroPost.metadata.title}
                    coverImage={heroPost.metadata.coverImage}
                    date={heroPost.metadata.date}
                    author={heroPost.metadata.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.metadata.excerpt}
                />
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </main>
    );
}