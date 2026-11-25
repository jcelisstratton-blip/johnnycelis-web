import React from 'react';
import Link from 'next/link';
import { getAllInsights } from '@/lib/insights';

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function InsightsPageContent() {
  const posts = getAllInsights();

  return (
    <>
      <header className="relative pt-40 md:pt-48 pb-16 md:pb-24 px-[5%] overflow-hidden border-b border-white/10">
        <div className="st-grid-bg" />
        <div className="relative max-w-[1280px] mx-auto st-ignite">
          <span className="st-status-line mb-6" />
          <div className="st-eyebrow mb-6"><b>[03]</b> Insights</div>
          <h1 className="text-4xl md:text-7xl uppercase leading-[1.02] mb-8 text-white">
            Insights <span className="text-accent">operativos</span>
          </h1>
          <p className="text-base md:text-lg text-humo leading-relaxed max-w-[680px]">
            Conocimiento avanzado sobre automatización B2B, ecosistemas autónomos y orquestación operativa. Descubre cómo las empresas top están eliminando el trabajo manual.
          </p>
        </div>
      </header>

      <section className="max-w-[1280px] mx-auto px-[5%] py-16 md:py-24">
        <div className="st-cells grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="st-cell-hover group p-7 md:p-9 flex flex-col justify-between no-underline min-h-[300px]"
            >
              <div>
                <span className="st-eyebrow"><b>{post.tag}</b></span>
                <h3 className="text-lg md:text-xl mt-4 mb-4 text-white leading-snug">{post.title}</h3>
                <p className="text-humo text-sm leading-relaxed mb-8">{post.description}</p>
              </div>
              <div>
                <time dateTime={post.date} className="st-eyebrow block mb-3 text-[10px]">
                  {formatDate(post.date)} · {post.readingTime}
                </time>
                <span className="st-link">
                  Leer artículo <span className="text-accent">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
