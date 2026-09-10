import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllSlugs, getInsightBySlug } from "@/lib/insights";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Stratt-On Agency`,
    description: post.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/insights/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Stratt-On Agency" },
    publisher: { "@type": "Organization", name: "Stratt-On Agency" },
    mainEntityOfPage: `https://www.stratt-on.com/insights/${slug}`,
  };

  return (
    <main className="bg-carbon text-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="max-w-[800px] mx-auto px-[5%] pt-44 pb-24">
        <Link
          href="/insights"
          className="st-label text-white/50 hover:text-accent transition-colors text-xs"
        >
          ← Insights
        </Link>

        <span className="st-label block mt-8 text-[11px] font-bold text-accent">{post.tag}</span>
        <h1 className="text-3xl md:text-5xl uppercase leading-tight mt-3 mb-4 text-white">
          {post.title}
        </h1>
        <div className="st-label flex items-center gap-2 text-white/40 text-xs mb-12">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <div
          className="insight-content border-t border-white/10 pt-10 text-white/80 text-base md:text-lg leading-relaxed"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-16 flex justify-center">
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="st-label bg-accent text-carbon text-xs md:text-sm px-8 py-4 rounded-st hover:bg-white hover:text-carbon transition-all duration-400 w-full sm:w-auto text-center"
          >
            Analizar mi caso operativo
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
