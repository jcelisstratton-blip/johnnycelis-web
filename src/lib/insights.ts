import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
};

export type Insight = InsightMeta & { html: string };

function slugsFromDisk(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readRaw(slug: string) {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.md`);
  return fs.readFileSync(filePath, "utf8");
}

export function getAllSlugs(): string[] {
  return slugsFromDisk();
}

export function getAllInsights(): InsightMeta[] {
  return slugsFromDisk()
    .map((slug) => {
      const { data, content } = matter(readRaw(slug));
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        tag: data.tag as string,
        date: data.date as string,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  if (!slugsFromDisk().includes(slug)) return null;
  const { data, content } = matter(readRaw(slug));
  const html = (await remark().use(remarkHtml).process(content)).toString();
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    tag: data.tag as string,
    date: data.date as string,
    readingTime: readingTime(content).text,
    html,
  };
}
