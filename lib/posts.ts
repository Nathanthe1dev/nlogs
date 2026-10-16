import fs from "node:fs/promises";
import path from "node:path";

export async function getPostContent(slug: string): Promise<string> {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        throw new Error("Invalid slug format");
    }

    const filePath = path.join(process.cwd(), "content", "posts", `${slug}.md`);

    try {
        const content = await fs.readFile(filePath, "utf-8");
        return content;
    } catch (error) {
        if (
            error instanceof Error &&
            "code" in error &&
            error.code === "ENOENT"
        ) {
            throw new Error(`Post not found: ${slug}`);
        }

        throw error;
    }
}