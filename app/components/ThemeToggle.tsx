"use client";
import { useEffect } from "react";

export default function ThemeToggle() {
    function toggleTheme() {
        const currentlyDark = document.documentElement.dataset.theme === "dark";
        const nextIsDark = !currentlyDark;
        document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.dataset.theme = "dark";
        } else {
            document.documentElement.dataset.theme = "light";
        }
    }, []);

    return (
    <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={toggleTheme}
    >
        <span className="theme-icon-light" aria-hidden="true">☾</span>
        <span className="theme-icon-dark" aria-hidden="true">☼</span>
    </button>
);
}