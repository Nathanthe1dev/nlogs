"use client";
import { useSyncExternalStore } from "react";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("theme-change", callback);
  return () => window.removeEventListener("theme-change", callback);
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      <span className="theme-icon-light" aria-hidden="true">☾</span>
      <span className="theme-icon-dark" aria-hidden="true">☼</span>
    </button>
  );
}