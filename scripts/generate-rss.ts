import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://ayushmh.com";
const AUTHOR = "Ayush Mahajan";
const EMAIL = "hi@ayushmh.com";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

function getAllPosts(): BlogPost[] {
  const postsDir = path.resolve(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts: BlogPost[] = files.map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const parsed = matter(content);
    return {
      slug: file.replace(".md", ""),
      title: parsed.data.title,
      date: parsed.data.date,
      excerpt: parsed.data.excerpt,
      content: parsed.content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateRss(): string {
  const posts = getAllPosts();
  const lastBuildDate = new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(AUTHOR)} — Field Notes</title>
    <link>${SITE_URL}/blog</link>
    <description>Thoughts on AI systems, founder journeys, and building intelligence where systems meet execution.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <author>${EMAIL} (${escapeXml(AUTHOR)})</author>${items}
  </channel>
</rss>`;
}

function main() {
  const rss = generateRss();
  const outputPath = path.resolve(process.cwd(), "public/rss.xml");
  fs.writeFileSync(outputPath, rss);
  console.log(`RSS feed generated at ${outputPath}`);
}

main();
