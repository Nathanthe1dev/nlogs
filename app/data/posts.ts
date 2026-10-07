export type Post = {
    number: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
};

export const posts: Post[] = [
    {
        number: "Log 1.0",
        title: "Why CS?",
        description: "Discover why i chose computer science as my field of study and how it has shaped my career path.",
        date: "8th October, 2026",
        readTime: "5 min read",
    },
    {
        number: "Log 2.0",
        title: "Understanding Version Control Systems",
        description: "Learn about the fundamentals of version control systems and how they can help you manage your codebase effectively.",
        date: "8th October, 2026",
        readTime: "5 min read",
    }
];