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
      <h1>{post.title}</h1>
    </main>
  );
}
