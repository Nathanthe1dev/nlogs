import { Post } from "../data/posts";
import ReadTime from "./ReadTime";
type PostCardProps = {
  post: Post & { readTime: number };
};

export default function PostCard({ post }: PostCardProps) {
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