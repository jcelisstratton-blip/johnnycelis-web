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
    title: `${post.title} | Stratt-On`,
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
    <main className="text-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="max-w-[820px] mx-auto px-[5%] pt-36 md:pt-44 pb-24">
        <Link href="/insights" className="st-link text-humo">
          <span className="text-accent">←</span> Insights
        </Link>

        <span className="st-status-line mt-10 mb-6" />
        <span className="st-eyebrow block"><b>{post.tag}</b></span>
        <h1 className="text-3xl md:text-5xl uppercase leading-[1.04] mt-4 mb-6 text-white">
          {post.title}
        </h1>
        <div className="st-eyebrow mb-12">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>

        <div
          className="insight-content border-t border-white/10 pt-10 text-blanco/80 text-base md:text-lg leading-relaxed"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-16 st-frame p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="m-0 text-white font-extrabold uppercase text-lg">¿Esto aplica a tu operación?</p>
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="st-btn st-btn-primary"
          >
            Analizar mi caso operativo <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
