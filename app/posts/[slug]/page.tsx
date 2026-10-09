import { posts } from "../../data/posts";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

 if (!post) {
  notFound();
}
  return (
  <main>
    <header className="post-header">
      <p>{post.number}</p>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
    </header>

    <article className="post-body">
      <h2>Where it started</h2>
      <p>
        Computer science began as a curiosity. Over time, it became a way
        to understand how things work and build things of my own.
      </p>
      <p>
        Some ideas take a while to make sense. Writing helps me work through
        them, one thought at a time.
      </p>
    </article>
  </main>
);
}
