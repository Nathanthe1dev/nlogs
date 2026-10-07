import Link from "next/link";

export default function Header() {
    return (
        <header className="container">
          <nav>
           <a href="/about">About</a>
          </nav>
          <Link href="/" className="logo">nlogs</Link>
          <button className="theme-toggle" aria-label="Toggle theme">☼</button>
        </header>
    );
}