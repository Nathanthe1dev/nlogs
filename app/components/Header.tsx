import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="container">
          <nav>
           <a href="/about">About</a>
          </nav>
          <Link href="/" className="logo">nlogs</Link>
          <ThemeToggle />
        </header>
    );
}