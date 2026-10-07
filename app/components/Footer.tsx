import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
        <p>© 2026 nlogs</p>
        <p>Built & written by Nathan.</p>
        <div className="footer-socials">
            <a href="https://github.com/Nathanthe1dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/the-nathan-holt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/nathan___holt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=holtnathan3003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
            >
                <FaEnvelope />
            </a>
        </div>
    </footer>
  );
}