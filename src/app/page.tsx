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
  const electricPurple = "#9D00FF";

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      
      {/* CAPA DE ESTILOS UX */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-video-overlay { background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1)); }
        .electric-btn:hover { background-color: white !important; color: black !important; box-shadow: 0 0 50px ${electricPurple} !important; transform: scale(1.05); }
        .glass-card { background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .glass-card:hover { border-color: ${electricPurple}; background: rgba(157, 0, 255, 0.05); transform: translateY(-10px); }
        .nav-active { background: rgba(0,0,0,0.9); border-bottom: 1px solid ${electricPurple}33; padding: 15px 40px !important; }
        @media (max-width: 768px) { .mobile-hero { padding-top: 120px !important; } }
      `}} />

      {/* --- NAVEGACIÓN UX --- */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        padding: '25px 40px', display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', transition: '0.4s ease-in-out'
      }} className={scrolled ? 'nav-active' : ''}>
        <span className="font-black italic text-2xl tracking-tighter uppercase">STRATT-ON</span>
        <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-widest">
          <a href="#servicios" className="text-white hover:text-[#9D00FF] no-underline">SISTEMAS</a>
          <a href="#roi" className="text-white hover:text-[#9D00FF] no-underline">ROI</a>
          <a href="#agendar" className="bg-[#9D00FF] px-6 py-2 electric-btn no-underline">AGENDAR AUDITORÍA</a>
        </div>
      </nav>

      {/* --- HERO CINEMATOGRÁFICO (Inspirado en Automaxia) --- */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* VIDEO DE FONDO */}
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-[-2] opacity-60">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-video-overlay z-[-1]" />
        
        <div className="reveal mobile-hero">
          <h1 className="font-black italic uppercase leading-[0.8] tracking-tighter" style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}>
            Automate<br /><span className="not-italic text-gray-500">To Elevate</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-10 text-gray-400 text-lg md:text-2xl font-light leading-relaxed">
            Sistemas de <span className="text-white font-bold border-b-2 border-[#9D00FF]">Agentes de Voz e IA</span> que escalan Stratt-On Agency con precisión absoluta.
          </p>
          <div className="mt-14 flex flex-col md:flex-row gap-6 justify-center">
            <a href="#agendar" className="bg-[#9D00FF] text-white font-black px-12 py-5 tracking-widest electric-btn no-underline uppercase text-sm">
              Empieza el Cambio
            </a>
          </div>
        </div>
      </section>

      {/* --- MARQUEE DE AUTORIDAD --- */}
      <div className="py-12 bg-black border-y border-white/5 overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3].map(g => (
            <div key={g} className="flex items-center">
              {["PROCESS AUTOMATION", "AI VOICE AGENTS", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS"].map((w, i) => (
                <div key={i} className="mx-16 flex items-center gap-8">
                  <span className="text-3xl md:text-5xl font-black opacity-10 italic uppercase tracking-tighter">{w}</span>
                  <div className="w-4 h-4 bg-[#9D00FF] rotate-45 shadow-[0_0_20px_#9D00FF]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN SERVICIOS (FLUÍDA) --- */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-20">Nuestros Sistemas</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "Inbound AI", d: "IA que atiende, califica y agenda citas con una voz humana indistinguible." },
            { t: "Growth Outbound", d: "Prospección masiva personalizada para dominar mercados en tiempo récord." },
            { t: "Custom n8n", d: "Arquitectura de procesos para eliminar el 80% de las tareas operativas." }
          ].map((s, i) => (
            <div key={i} className="glass-card p-14 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-[#9D00FF] font-black text-xs tracking-[0.5em] block mb-8">SISTEMA 0{i+1}</span>
                <h3 className="text-3xl font-black uppercase mb-6 leading-tight">{s.t}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-lg">{s.d}</p>
              </div>
              <div className="mt-10 border-t border-white/10 pt-6">
                <span className="text-[10px] font-black tracking-widest uppercase text-white/40">Explore Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALCULADORA ROI (BLANCO Y NEGRO PARA AUTORIDAD) --- */}
      <section id="roi" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-7xl md:text-8xl font-black italic leading-[0.85] tracking-tighter uppercase">
              Calcula tu<br /><span className="text-[#9D00FF]">Retorno</span>
            </h2>
            <div className="mt-16">
              <div className="flex justify-between font-bold text-sm uppercase tracking-widest mb-6">
                <span>Horas Manuales Semanales: {hours}H</span>
                <span className="text-[#9D00FF]">$20/HR</span>
              </div>
              <input type="range" min="5" max="160" value={hours} onChange={e => setHours(parseInt(e.target.value))} className="w-full h-1 bg-gray-200 accent-[#9D00FF] cursor-pointer" />
            </div>
          </div>
          <div className="bg-black text-white p-16 md:p-24 text-center shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
            <span className="text-[11px] font-bold text-[#9D00FF] tracking-[0.6em] uppercase block mb-8">Ahorro Mensual Stratt-On</span>
            <div className="text-8xl md:text-9xl font-black italic tracking-tighter my-8 border-b-8 border-[#9D00FF] pb-6">
              ${savings.toLocaleString()}
            </div>
            <div className="mt-12 flex justify-between items-center opacity-40 uppercase font-black text-[11px] tracking-widest">
              <span>Proyección Anual</span>
              <span>${yearlySavings.toLocaleString()} USD</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER FINAL --- */}
      <footer id="agendar" className="py-40 bg-black text-center px-6 border-t border-white/5">
        <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-16 tracking-tighter">Scale Faster.</h2>
        <a href="https://calendly.com/tu-link" className="bg-[#9D00FF] text-white font-black px-16 py-7 tracking-[0.2em] electric-btn no-underline inline-block uppercase text-lg shadow-[0_0_60px_rgba(157,0,255,0.4)]">
          Reservar Auditoría
        </a>
        <div className="mt-48 opacity-10 text-[11px] font-black tracking-[1.5em] uppercase">STRATT-ON AGENCY // 2026</div>
      </footer>
    </main>
  );
}