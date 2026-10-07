export default function Home() {
  return (
       <main> 
        <section className="posts">     
          <a href="#">
            <article>
              <div className="article-label">
                WRITINGS / 01
              </div>
               <div className="article-content">
                <h2><span>Why CS?</span></h2>
                <p>Discover why i chose computer science as my field of study and how it has shaped my career path.</p>
              </div>
              <footer>
                <small>
                  <time dateTime="2026-10-08">8th October, 2026</time>
                  <span>·</span>
                  <span>5 min read</span>
                </small>
              </footer>
            </article>
          </a>

          <a href="#">
            <article>
              <div className="article-label">
                WRITINGS / 02
              </div>
              <div className="article-content">
                <h2><span>Understanding Version Control Systems</span></h2>
                <p>Learn about the fundamentals of version control systems and how they can help you manage your codebase effectively.</p>
              </div>
              <footer>
                <small>
                  <time dateTime="2026-10-01">1st October, 2026</time>
                  <span>·</span>
                  <span>10 min read</span>
                </small>
              </footer>
            </article>
          </a>
        </section>
      </main>
  );
}
