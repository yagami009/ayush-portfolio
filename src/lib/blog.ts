import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
}

// Import all blog posts using Vite's glob import
const blogFiles = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default", eager: true });

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogFiles)) {
    const slug = path.replace("../content/blog/", "").replace(".md", "");
    const parsed = matter(content as string);

    posts.push({
      slug,
      title: parsed.data.title,
      date: parsed.data.date,
      author: parsed.data.author,
      excerpt: parsed.data.excerpt,
      tags: parsed.data.tags || [],
      content: parsed.content,
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
