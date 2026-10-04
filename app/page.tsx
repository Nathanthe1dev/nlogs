export default function Home() {
  return (
       <main>
         <header className="container">
          <nav>
           <a href="#">About</a>
          </nav>
          <a href="/" className="logo">nlogs</a>
          <button className="theme-toggle">☼</button>
        </header>
        
        <section className="posts">     
          <h1>Latest writings</h1>
          <article>
            <h2>
              <a href="#">Why CS?</a>
            </h2>
            <p>Discover why i chose computer science as my field of study and how it has shaped my career path.</p>
            <footer>
              <small>
                <time dateTime="2026-10-08">8th October, 2026</time>
                <span>·</span>
                <span>5 min read</span>
              </small>
            </footer>
          </article>

          <article>
            <h2>
              <a href="#">Understanding Version Control Systems</a>
            </h2>
            <p>Learn about the fundamentals of version control systems and how they can help you manage your codebase effectively.</p>
            <footer>
              <small>
                <time dateTime="2026-10-01">1st October, 2026</time>
                <span>·</span>
                <span>10 min read</span>
              </small>
            </footer>
          </article>
        </section>
      </main>
  );
}
