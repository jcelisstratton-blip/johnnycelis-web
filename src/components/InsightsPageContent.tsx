"use client";
import React, { useState } from 'react';
import { siteConfig } from '../config/site';

interface Post {
  tag: string;
  title: string;
  desc: string;
  content: string;
}

export default function InsightsPageContent() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  return (
    <>
      {/* HEADER DE LA PÁGINA BLOG */}
      <header className="relative bg-gradient-to-b from-[#050505] to-black pt-44 pb-20 text-center px-[5%] overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-radial-gradient from-accent/15 to-transparent/0 -z-1" />
        
        <div className="relative z-1 max-w-[1000px] mx-auto">
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-none mb-6 text-white">
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
          {siteConfig.blogPosts.map((post, i) => (
            <div 
              key={i} 
              className="bg-white/2 border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-400 cursor-pointer h-full flex flex-col justify-between hover:border-accent hover:bg-black hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,245,212,0.15)] max-md:border-accent max-md:bg-black max-md:shadow-[0_0_25px_rgba(0,245,212,0.15)]"
              onClick={() => setActivePost(post)}
            >
              <div>
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider">{post.tag}</span>
                <h3 className="text-lg md:text-xl font-black mt-3 mb-4 text-white leading-snug">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{post.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-wider hover:text-accent hover:gap-4 transition-all duration-400 self-start mt-auto">
                Leer artículo <span className="text-accent">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DE LECTURA */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md z-1000 flex justify-center items-center p-5 transition-opacity duration-300 ${
          activePost ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setActivePost(null)}
      >
        <div 
          className={`bg-[#0a0a0a] border border-accent/30 rounded-2xl w-full max-w-[800px] max-h-[90vh] overflow-y-auto relative p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-transform duration-400 ${
            activePost ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <button 
            className="absolute top-5 right-5 bg-transparent border-none text-white text-2xl cursor-pointer transition-colors hover:bg-white/10 w-10 h-10 flex justify-center items-center rounded-full focus:outline-none"
            onClick={() => setActivePost(null)}
          >
            ✕
          </button>
          {activePost && (
            <>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{activePost.tag}</span>
              <h2 className="text-2xl md:text-4xl font-black my-5 text-white leading-tight">{activePost.title}</h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">{activePost.desc}</p>
              <div className="border-t border-white/10 pt-8 text-white/90 text-sm md:text-base leading-loose text-justify whitespace-pre-line">
                {activePost.content}
              </div>
              <div className="mt-12 flex justify-center">
                <a 
                  href={siteConfig.calendarUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-accent text-black font-black text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-[4px] hover:shadow-[0_0_40px_var(--accent)] hover:bg-white hover:text-black transition-all duration-400 w-full sm:w-auto text-center"
                >
                  Analizar mi caso operativo
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
