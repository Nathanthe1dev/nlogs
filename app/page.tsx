import { posts } from "./data/posts";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
       <main> 
        <section className="posts">     
           {posts.map((post) => (
            <PostCard key={post.number} post={post} />
          ))}
        </section>
      </main>
  );
}
