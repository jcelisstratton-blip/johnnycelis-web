"use client";
import React, { useState } from 'react';
import { siteConfig } from '../config/site';

interface Post {
  tag: string;
  title: string;
  desc: string;
  content: string;
}

export default function InsightsSection() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  // Mostrar solo los primeros 3 posts en el Home
  const featuredPosts = siteConfig.blogPosts.slice(0, 3);

  return (
    <>
      <div className="flex flex-wrap gap-10">
        {/* Grid de Artículos */}
        <div className="flex-[2_1_600px] grid grid-template-cols-1 sm:grid-cols-2 gap-8">
          {featuredPosts.map((post, i) => (
            <div
              key={i}
              className="bg-grafito border border-white/5 rounded p-6 md:p-8 transition-all duration-400 cursor-pointer h-full flex flex-col justify-between hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,59,47,0.15)] max-md:border-accent max-md:shadow-[0_0_25px_rgba(255,59,47,0.15)]"
              onClick={() => setActivePost(post)}
            >
              <div>
                <span className="st-label text-[11px] font-bold text-accent">{post.tag}</span>
                <h3 className="text-lg md:text-xl mt-3 mb-4 text-white leading-snug">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{post.desc}</p>
              </div>
              <div className="st-label flex items-center gap-2 text-white text-xs hover:text-accent hover:gap-4 transition-all duration-400 self-start">
                Leer artículo <span className="text-accent">→</span>
              </div>
            </div>
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

      {/* Modal de Lectura */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md z-1000 flex justify-center items-center p-5 transition-opacity duration-300 ${
          activePost ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setActivePost(null)}
      >
        <div
          className={`bg-grafito border border-accent/30 rounded w-full max-w-[800px] max-h-[90vh] overflow-y-auto relative p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-transform duration-400 ${
            activePost ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-5 right-5 bg-transparent border-none text-white cursor-pointer transition-colors hover:bg-white/10 w-10 h-10 flex justify-center items-center rounded-full focus:outline-none"
            onClick={() => setActivePost(null)}
            aria-label="Cerrar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          {activePost && (
            <>
              <span className="st-label text-xs font-bold text-accent">{activePost.tag}</span>
              <h2 className="text-2xl md:text-4xl my-5 text-white leading-tight">{activePost.title}</h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">{activePost.desc}</p>
              <div className="border-t border-white/10 pt-8 text-white/90 text-sm md:text-base leading-loose text-justify whitespace-pre-line">
                {activePost.content}
              </div>
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={siteConfig.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-label bg-accent text-carbon text-xs md:text-sm px-8 py-4 rounded-st hover:bg-white hover:text-carbon transition-all duration-400 w-full sm:w-auto text-center"
                >
                  Agendar reunión consultiva
                </a>
                <a
                  href="/insights"
                  className="text-accent font-bold text-sm underline hover:opacity-80 transition-opacity"
                >
                  Ver todos los artículos →
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
