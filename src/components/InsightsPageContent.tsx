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
      {/* HEADER DE LA PÁGINA BLOG */}
      <header className="relative bg-gradient-to-b from-grafito to-carbon pt-44 pb-20 text-center px-[5%] overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-radial-gradient from-accent/15 to-transparent/0 -z-1" />

        <div className="relative z-1 max-w-[1000px] mx-auto">
          <span className="st-status-line mb-8" />
          <h1 className="text-4xl md:text-7xl uppercase leading-none mb-6 text-white">
            Insights <span className="text-accent">Operativos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[800px] mx-auto font-medium">
            Conocimiento avanzado sobre automatización B2B, ecosistemas autónomos y orquestación operativa. Descubre cómo las empresas top están eliminando el trabajo manual.
          </p>
        </div>
      </header>

      {/* GRID DE ARTÍCULOS */}
      <section className="max-w-[1400px] mx-auto px-[5%] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="bg-grafito border border-white/5 rounded p-6 md:p-8 transition-all duration-400 cursor-pointer h-full flex flex-col justify-between hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,59,47,0.15)] max-md:border-accent max-md:shadow-[0_0_25px_rgba(255,59,47,0.15)]"
            >
              <div>
                <span className="st-label text-[11px] font-bold text-accent">{post.tag}</span>
                <h3 className="text-lg md:text-xl mt-3 mb-4 text-white leading-snug">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{post.description}</p>
              </div>
              <div className="st-label flex items-center gap-2 text-white text-xs hover:text-accent hover:gap-4 transition-all duration-400 self-start mt-auto">
                <time dateTime={post.date} className="text-white/30 normal-case font-normal">
                  {formatDate(post.date)} · {post.readingTime}
                </time>
              </div>
              <div className="st-label flex items-center gap-2 text-white text-xs mt-2 self-start">
                Leer artículo <span className="text-accent">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
