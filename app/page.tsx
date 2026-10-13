import { posts } from "./data/posts";
import PostCard from "./components/PostCard";
import { getPostContent } from "@/lib/posts";
import { getReadingTime } from "@/lib/readingTime";

export default async function Home() {
  const postsWithReadingTime = await Promise.all(
  posts.map(async (post) => {
    try {
    const content = await getPostContent(post.slug);
    const readTime = getReadingTime(content);
    return { ...post, readTime };
    } catch {
      return null;
    }})
  );
  const validPosts = postsWithReadingTime.filter((post) => post !== null);
  return (
  <main>
    <section className="posts">
      {validPosts.map((post) => (
        <PostCard key={post.number} post={post} />
      ))}
    </section>
  </main>
  );
}
