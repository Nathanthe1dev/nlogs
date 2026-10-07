import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="about">
        <div className="about-image">
            <Image
                src="/images/Hi.png"
                alt="Hi img"
                width={200}
                height={200}
            />
        </div>
        <div className="about-content">
            <h1>Hey! Nathan here.</h1>
            <p>A CS undergrad figuring things out, bit by bit. I&apos;ve been writing since grade 8 — one of my go-to hobbies when I&apos;m completely done with life. I write about what I see, learn, and occasionally obsess over.</p>
            <Link href="/">
                Do check them out <span>→</span>
            </Link>
        </div>
        <div className="about-links">
            <a href="https://github.com/Nathanthe1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
            >
                My Projects!
            </a>
            <a href="https://www.linkedin.com/in/the-nathan-holt/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
            >
                Connect with me!
            </a>
        </div>
      </section>
    </main>
  );
}
