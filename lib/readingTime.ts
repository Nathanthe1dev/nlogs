export function getReadingTime(content: string) {
    const trimmedContent = content.trim();
    const wordCount = trimmedContent === "" ? 0 : trimmedContent.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 200));
}