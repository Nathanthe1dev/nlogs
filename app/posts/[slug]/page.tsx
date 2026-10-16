import { posts } from "../../data/posts";
import { notFound } from "next/navigation";
import { getPostContent } from "@/lib/posts";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { getReadingTime } from "@/lib/readingTime";

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
  let fileContent: string;

  try {
    fileContent = await getPostContent(post.slug);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Post not found: ")
    ) {
      notFound();
    }

    throw error;
  }
  
  const readingTime = getReadingTime(fileContent);
  const htmlContent = await marked.parse(fileContent);
  const sanitizedHtml = sanitizeHtml(htmlContent);

  return (
  <main>
    <header className="post-header">
      <p>{post.number}</p>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{readingTime} min read</p>
    </header>

    <article className="post-body">
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </article>
  </main>
);
}
