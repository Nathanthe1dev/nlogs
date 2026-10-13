import fs from "node:fs/promises";
import path from "node:path";

export async function getPostContent(slug: string): Promise<string> {
    const filePath = path.join(process.cwd(), "content", "posts", `${slug}.md`);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
}