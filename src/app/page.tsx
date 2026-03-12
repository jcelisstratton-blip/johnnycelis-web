"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const savings = hours * 20 * 4 * 0.80; 
  const yearlySavings = savings * 12;
  const electricPurple = "#9D00FF";

  const faqs = [
    { q: "¿Se nota que es una IA?", a: "Nuestros agentes utilizan modelos acústicos de última generación. La latencia ultra-baja y la modulación natural los hacen indistinguibles de un humano en una llamada telefónica." },
    { q: "¿Cómo se integra a nuestra operación?", a: "Diseñamos la arquitectura en n8n para que el agente actualice tu CRM, agende reuniones y notifique a tu equipo de forma invisible y automática." },
    { q: "¿Cuánto tiempo toma el despliegue?", a: "Un ecosistema de prospección o atención inbound está listo, entrenado y conectado a tus sistemas en 2 a 3 semanas." }
  ];

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #000 !important; color: #fff; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }
        .hero-video-overlay { background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%); }
        .text-stroke { -webkit-text-stroke: 1px #444; color: transparent; font-style: normal; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 20px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; font-size: 13px; transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); display: inline-block; border: none; cursor: pointer; text-align: center; }
        .btn-glow:hover { box-shadow: 0 0 50px rgba(157,0,255,0.7); transform: scale(1.05); background-color: white !important; color: black !important; }
        .glass-panel { background: rgba(255,255,255,0.01); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.05); transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); padding: 60px 40px; }
        .glass-panel:hover { border-color: ${electricPurple}; background: rgba(157,0,255,0.07); transform: translateY(-10px); }
        .nav-blur { background: rgba(0,0,0,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1px; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 35s linear infinite; }
        input[type="range"] { accent-color: ${electricPurple}; cursor: pointer; }
        .mobile-menu { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.98); backdrop-filter: blur(10px); z-index: 99; flex-direction: column; justify-content: center; align-items: center; gap: 40px; transform: translateX(100%); transition: 0.5s ease; }
        .mobile-menu.open { transform: translateX(0); }
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: white; font-size: 30px; z-index: 100; padding: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) { .desktop-links { display: none !important; } .hamburger { display: block !important; } .mobile-menu { display: flex; } }
        @media (max-width: 768px) { .mobile-hero-padding { padding-top: 150px !important; } .grid-2 { grid-template-columns: 1fr; } }
      `}} />

      {/* --- NAVEGACIÓN --- */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, transition: 'all 0.5s', padding: scrolled ? '15px 50px' : '40px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', letterSpacing: '-2px' }}>STRATT-ON</span>
        <div className="desktop-links" style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
          <a href="#sistemas" style={{ color: 'white', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Sistemas</a>
          <a href="#resultados" style={{ color: 'white', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Resultados</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>ROI</a>
          <a href="#agendar" className="btn-glow" style={{ padding: '14px 28px', fontSize: '10px' }}>Book a Call</a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
      </nav>

      {/* --- HERO CINEMATOGRÁFICO --- */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center', textAlign: 'center', padding: '120px 20px 50px', overflow: 'hidden' }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2, opacity: 0.5 }}
        >
          {/* USAMOS RUTA DIRECTA CON UN CACHE BUSTER PARA QUE FIREBASE NO SE CONFUNDA */}
          <source src="/bg-stratt.mp4?v=2" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

        <div className="mobile-hero-padding" style={{ animation: 'fadeIn 1s ease-out forwards' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 14vw, 11rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.8, margin: '0 0 40px 0', letterSpacing: '-4px' }}>
            Automate<br /><span className="text-stroke">To Elevate</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto 60px', color: '#bbb', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: 1.6, fontStyle: 'italic' }}>
            Construimos sistemas de <strong style={{ color: 'white' }}>Agentes de Voz e IA</strong> que transforman Stratt-On Agency en una maquinaria de ingresos autónoma.
          </p>
          <a href="#agendar" className="btn-glow">Agendar Auditoría IA</a>
        </div>
      </section>

      {/* --- EL RESTO DE LAS SECCIONES SE MANTIENEN IGUAL --- */}
      <div style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#030303', overflow: 'hidden', display: 'flex' }}>
        <div className="animate-marquee">
          {[1, 2, 3, 4].map(g => (
            <div key={g} style={{ display: 'flex', alignItems: 'center' }}>
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "SCALABLE SYSTEMS", "ROI DRIVEN"].map((w, i) => (
                <div key={i} style={{ margin: '0 60px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <span style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#222', fontStyle: 'italic', textTransform: 'uppercase' }}>{w}</span>
                  <div style={{ width: '15px', height: '15px', background: electricPurple, transform: 'rotate(45deg)', boxShadow: `0 0 15px ${electricPurple}` }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="sistemas" style={{ padding: '150px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <div className="grid-3">
          {[
            { t: "Inbound IA", d: "Atiende, califica y agenda citas con voces clonadas indestinguibles de un humano." },
            { t: "Growth Outbound", d: "Prospección masiva y calificación de leads sin intervención humana." },
            { t: "n8n Architecture", d: "Diseño de backend avanzado y automatización total de flujos." }
          ].map((s, i) => (
            <div key={i} className="glass-panel">
              <span style={{ color: electricPurple, fontWeight: 900, fontSize: '13px', display: 'block', marginBottom: '40px' }}>0{i+1}</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase' }}>{s.t}</h3>
              <p style={{ color: '#aaa' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roi" style={{ padding: '150px 20px', background: 'white', color: 'black' }}>
        <div className="grid-2" style={{ maxWidth: '1300px', margin: '0 auto', gap: '100px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase' }}>Calcula tu<br /><span style={{ color: electricPurple }}>Libertad</span></h2>
            <input type="range" min="10" max="250" step="5" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%' }} />
          </div>
          <div style={{ background: '#000', color: 'white', padding: '80px 60px', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, fontStyle: 'italic' }}>${savings.toLocaleString()}</div>
            <span style={{ color: electricPurple }}>Retorno Anual Proyectado</span>
          </div>
        </div>
      </section>

      <footer id="agendar" style={{ padding: '180px 20px', textAlign: 'center', background: '#000', borderTop: `1px solid rgba(157,0,255,0.2)` }}>
        <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: '0 0 80px 0' }}>Scale Faster.</h2>
        <a href="https://calendly.com/tu-link" className="btn-glow">Agendar Auditoría IA</a>
      </footer>
    </main>
  );
}