import { Post } from "../data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <a href={`/posts/${post.slug}`}>
    <article>
        <div className="article-content">
            <span className="article-label">{post.number}</span>
            <h2><span>{post.title}</span></h2>
            <p>{post.description}</p>
        </div>

        <footer>
            <small>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
            </small>
        </footer>
    </article>
</a>
  );
}