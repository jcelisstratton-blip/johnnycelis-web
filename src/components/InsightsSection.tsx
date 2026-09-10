import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../config/site';
import type { InsightMeta } from '@/lib/insights';

export default function InsightsSection({ posts }: { posts: InsightMeta[] }) {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-wrap gap-10">
      {/* Grid de Artículos */}
      <div className="flex-[2_1_600px] grid grid-template-cols-1 sm:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="bg-grafito border border-white/5 rounded p-6 md:p-8 transition-all duration-400 cursor-pointer h-full flex flex-col justify-between hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,59,47,0.15)] max-md:border-accent max-md:shadow-[0_0_25px_rgba(255,59,47,0.15)]"
          >
            <div>
              <span className="st-label text-[11px] font-bold text-accent">{post.tag}</span>
              <h3 className="text-lg md:text-xl mt-3 mb-4 text-white leading-snug">{post.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{post.description}</p>
            </div>
            <div className="st-label flex items-center gap-2 text-white text-xs hover:text-accent hover:gap-4 transition-all duration-400 self-start">
              Leer artículo <span className="text-accent">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tarjeta de Acceso VIP (Whop) */}
      <div className="flex-1 min-w-[320px]">
        <div className="bg-grafito text-white rounded p-8 md:p-10 relative overflow-hidden border border-white/5 flex flex-col justify-between h-full min-h-[350px]">
          {/* Fondo decorativo con la letra W */}
          <div className="absolute -right-5 -bottom-10 text-[15rem] font-display opacity-[0.04] leading-none pointer-events-none select-none">
            W
          </div>

          <div className="relative z-2">
            <span className="st-status-line mb-6" />
            <span className="st-label block mb-4 text-humo">Acceso VIP</span>
            <h3 className="text-2xl md:text-3xl mb-4 leading-none">Comunidad Stratt-On</h3>
            <p className="text-sm md:text-base leading-relaxed text-white/80 mb-8">
              Únete a nuestro círculo privado en Whop. Accede a arquitecturas operativas y haz networking con directores B2B.
            </p>
            <div className="bg-carbon p-4 border border-white/10 rounded mb-8">
              <span className="st-label block mb-1 text-humo text-[10px]">Último recurso añadido:</span>
              <p className="font-bold text-xs md:text-sm">&quot;Plantilla de Orquestación: Calificación B2B v2.0&quot;</p>
            </div>
          </div>

          <a
            href={siteConfig.whopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="st-label bg-accent text-carbon py-4 rounded-st text-xs text-center hover:bg-white hover:text-carbon transition-all duration-300 relative z-2"
          >
            Unirme en Whop
          </a>
        </div>
      </div>
    </div>
  );
}
