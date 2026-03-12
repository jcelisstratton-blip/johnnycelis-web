"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const savings = hours * 20 * 4 * 0.80; 
  const electricPurple = "#9D00FF";

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #000 !important; }
        .hero-video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)); z-index: -1; }
        .text-stroke { -webkit-text-stroke: 1px #444; color: transparent; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 35px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-block; border: none; cursor: pointer; }
        .btn-glow:hover { box-shadow: 0 0 30px ${electricPurple}; transform: scale(1.05); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.9); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        .glass-panel { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 50px; transition: 0.4s; }
        .glass-panel:hover { border-color: ${electricPurple}; transform: translateY(-5px); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        @media (max-width: 1024px) { .desktop-links { display: none !important; } .hamburger { display: block !important; } }
      `}} />

      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '25px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem' }}>STRATT-ON</span>
        <div className="desktop-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#sistemas" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>Sistemas</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>ROI</a>
          <a href="#agendar" className="btn-glow" style={{ padding: '12px 25px', fontSize: '10px' }}>Book a Call</a>
        </div>
      </nav>

      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        {/* LINK EXTERNO DIRECTO PARA EVITAR BLOQUEOS DE FIREBASE */}
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}>
          <source src="https://cdn.pixabay.com/video/2023/10/20/185795-876319803_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />

        <div style={{ padding: '0 20px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.8, margin: '0 0 30px 0' }}>
            Automate<br /><span className="text-stroke">To Elevate</span>
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 40px', color: '#ccc', fontSize: '1.2rem' }}>
            Agentes de Voz e IA que transforman tu operación en una maquinaria autónoma.
          </p>
          <a href="#agendar" className="btn-glow">Auditoría Estratégica</a>
        </div>
      </section>

      <div style={{ background: '#030303', overflow: 'hidden', padding: '30px 0', borderY: '1px solid #111' }}>
        <div className="animate-marquee">
          {[1, 2].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '60px', paddingRight: '60px' }}>
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN"].map(word => (
                <span key={word} style={{ fontSize: '1.5rem', fontWeight: 900, color: '#222' }}>{word}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="sistemas" style={{ padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {["Inbound IA", "Outbound Growth", "n8n Architecture"].map((title, i) => (
            <div key={i} className="glass-panel">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{title}</h3>
              <p style={{ color: '#888' }}>Sistemas autónomos diseñados para escalar ingresos sin intervención humana.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roi" style={{ padding: '100px 5%', background: '#fff', color: '#000' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '50px' }}>CALCULA TU LIBERTAD</h2>
          <input type="range" min="10" max="200" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%', accentColor: electricPurple }} />
          <div style={{ fontSize: '5rem', fontWeight: 900, marginTop: '30px' }}>${savings.toLocaleString()} <span style={{ fontSize: '1rem', color: '#666' }}>USD/MES</span></div>
        </div>
      </section>

      <footer id="agendar" style={{ padding: '100px 5%', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '40px' }}>SCALE FASTER.</h2>
        <a href="#agendar" className="btn-glow">Agendar Llamada</a>
        <p style={{ marginTop: '100px', opacity: 0.2, fontSize: '10px', letterSpacing: '5px' }}>STRATT-ON AGENCY // 2026</p>
      </footer>
    </main>
  );
} 