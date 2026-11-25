import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../config/site';
import type { InsightMeta } from '@/lib/insights';

export default function InsightsSection({ posts }: { posts: InsightMeta[] }) {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
      <div className="st-cells grid-cols-1 sm:grid-cols-2">
        {featuredPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className={`st-cell-hover group p-7 md:p-9 flex flex-col justify-between no-underline min-h-[280px] ${
              i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            <div>
              <span className="st-eyebrow mb-5"><b>{post.tag}</b></span>
              <h3 className="text-lg md:text-2xl mt-3 mb-4 text-white leading-snug">{post.title}</h3>
              <p className="text-humo text-sm leading-relaxed mb-6">{post.description}</p>
            </div>
            <span className="st-link self-start group-hover:text-accent">
              Leer artículo <span className="text-accent">→</span>
            </span>
          </Link>
        ))}
      </div>

      {/* Acceso VIP (Whop) */}
      <div className="st-frame p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[350px]">
        <div className="absolute -right-5 -bottom-10 text-[15rem] font-display opacity-[0.04] leading-none pointer-events-none select-none">
          W
        </div>

        <div className="relative z-2">
          <span className="st-status-line mb-6" />
          <span className="st-eyebrow mb-4">Acceso VIP</span>
          <h3 className="text-2xl md:text-3xl mt-4 mb-4 leading-none text-white uppercase">Comunidad Stratt-On</h3>
          <p className="text-sm md:text-base leading-relaxed text-humo mb-8">
            Únete a nuestro círculo privado en Whop. Accede a arquitecturas operativas y haz networking con directores B2B.
          </p>
          <div className="bg-carbon p-4 border border-white/10 rounded-st mb-8">
            <span className="st-eyebrow block mb-2 text-[10px]">Último recurso añadido</span>
            <p className="font-bold text-xs md:text-sm m-0">&quot;Plantilla de Orquestación: Calificación B2B v2.0&quot;</p>
          </div>
        </div>

        <a
          href={siteConfig.whopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="st-btn st-btn-primary relative z-2"
        >
          Unirme en Whop <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
