export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "introducing-endpnt",
    title: "Introducing endpnt.dev — Developer APIs that just work",
    description: "Why we built a platform of 9 essential developer APIs with zero AI dependencies and a focus on reliability.",
    publishedAt: "2026-04-13",
    author: "JK",
    readTime: "5 min read",
    tags: ["announcement", "platform", "apis"],
    featured: true,
  },
  {
    slug: "no-ai-dependencies",
    title: "Why we built 5 APIs with zero AI dependencies",
    description: "AI APIs are unreliable, expensive, and unpredictable. Here's why we chose deterministic, fast, traditional processing for developer tools.",
    publishedAt: "2026-04-12",
    author: "JK",
    readTime: "7 min read",
    tags: ["philosophy", "architecture", "ai"],
  },
  {
    slug: "screenshot-api-guide",
    title: "How to capture website screenshots with the endpnt Screenshot API",
    description: "Complete guide to capturing pixel-perfect screenshots programmatically. Covers full-page capture, device emulation, and optimization tips.",
    publishedAt: "2026-04-10",
    author: "JK",
    readTime: "12 min read",
    tags: ["tutorial", "screenshot", "guide"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}