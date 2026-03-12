"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const savings = hours * 20 * 4 * 0.80; 
  const yearlySavings = savings * 12;

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      
      {/* CAPA DE ESTILOS UX */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-video-overlay { background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1)); }
        .electric-btn:hover { background-color: white !important; color: black !important; box-shadow: 0 0 50px #9D00FF !important; transform: scale(1.05); }
        .glass-card { background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.6s; }
        .glass-card:hover { border-color: #9D00FF; background: rgba(157, 0, 255, 0.05); }
        .nav-active { background: rgba(0,0,0,0.95); border-bottom: 1px solid rgba(157, 0, 255, 0.2); padding: 15px 40px !important; }
        @media (max-width: 640px) { .mobile-hero { padding-top: 100px !important; } }
      `}} />

      {/* NAVEGACIÓN */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        padding: '25px 40px', display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', transition: '0.4s ease-in-out'
      }} className={scrolled ? 'nav-active' : ''}>
        <span className="font-black italic text-2xl tracking-tighter uppercase">STRATT-ON</span>
        <a href="#agendar" className="bg-[#9D00FF] text-white text-[10px] font-bold px-6 py-2 tracking-widest electric-btn no-underline">BOOK NOW</a>
      </nav>

      {/* HERO (Estilo Automaxia) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-[-2] opacity-50">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-video-overlay z-[-1]" />
        
        <div className="mobile-hero">
          <h1 className="font-black italic uppercase leading-[0.85] tracking-tighter" style={{ fontSize: 'clamp(3rem, 11vw, 9rem)' }}>
            Automate<br /><span className="not-italic text-gray-500">To Elevate</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Implementamos <span className="text-white font-bold border-b-2 border-[#9D00FF]">Agentes de Voz e IA</span> que transforman Stratt-On Agency en una maquinaria de ingresos autónoma.
          </p>
          <div className="mt-12">
            <a href="#agendar" className="bg-[#9D00FF] text-white font-black px-12 py-5 tracking-widest electric-btn no-underline uppercase text-sm">
              Agendar Auditoría IA
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-10 bg-black border-y border-white/5 overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3].map(g => (
            <div key={g} className="flex items-center">
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN"].map((w, i) => (
                <div key={i} className="mx-12 flex items-center gap-6">
                  <span className="text-2xl md:text-4xl font-black opacity-10 italic uppercase tracking-tighter">{w}</span>
                  <div className="w-3 h-3 bg-[#9D00FF] rotate-45 shadow-[0_0_15px_#9D00FF]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-20">Expert Systems</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Inbound IA", d: "Atención al cliente 24/7 con voces clonadas indestinguibles de un humano." },
            { t: "Growth Outbound", d: "Prospección masiva y calificación de leads sin intervención humana." },
            { t: "n8n Flow", d: "Arquitectura de backend para conectar todo tu ecosistema digital." }
          ].map((s, i) => (
            <div key={i} className="glass-card p-12">
              <span className="text-[#9D00FF] font-black text-xs tracking-[0.3em]">0{i+1}</span>
              <h3 className="text-2xl font-black uppercase mt-6 mb-4">{s.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI CALCULATOR (Contraste para Autoridad) */}
      <section id="roi" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black italic leading-[0.9] tracking-tighter uppercase">
              Calcula tu<br /><span className="text-[#9D00FF]">Retorno</span>
            </h2>
            <div className="mt-12">
              <div className="flex justify-between font-bold text-xs uppercase tracking-widest mb-4">
                <span>Tareas Semanales: {hours}h</span>
                <span className="text-[#9D00FF]">$20/HR</span>
              </div>
              <input type="range" min="5" max="150" value={hours} onChange={e => setHours(parseInt(e.target.value))} className="w-full h-1 bg-gray-200 accent-[#9D00FF] cursor-pointer" />
            </div>
          </div>
          <div className="bg-black text-white p-16 text-center shadow-2xl">
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.5em] uppercase">Ahorro Mensual</span>
            <div className="text-7xl md:text-8xl font-black italic tracking-tighter my-6 border-b-4 border-[#9D00FF] pb-4">
              ${savings.toLocaleString()}
            </div>
            <div className="mt-8">
              <span className="text-[10px] text-[#9D00FF] font-bold uppercase tracking-widest">Ahorro Anual:</span>
              <div className="text-3xl font-black">${yearlySavings.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="agendar" className="py-32 bg-black text-center px-6 border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-12 tracking-tighter">Ready to Automate?</h2>
        <a href="https://calendly.com/tu-link" className="bg-[#9D00FF] text-white font-black px-16 py-6 tracking-widest electric-btn no-underline inline-block uppercase text-lg">
          Reservar Llamada
        </a>
        <div className="mt-40 opacity-20 text-[10px] font-black tracking-[1em] uppercase">STRATT-ON // 2026</div>
      </footer>
    </main>
  );
}