import { Post } from "../data/posts";
import ReadTime from "./ReadTime";

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
                <span className="metadata-separator" aria-hidden="true">·</span>
                <ReadTime minutes={post.readTime} />
            </small>
        </footer>
    </article>
</a>
  );
}