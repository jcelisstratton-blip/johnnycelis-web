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
  const electricPurple = "#9D00FF";

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #000 !important; }
        .hero-video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)); z-index: -1; }
        .text-stroke { -webkit-text-stroke: 1px #444; color: transparent; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 35px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; }
        .btn-glow:hover { box-shadow: 0 0 30px ${electricPurple}; transform: scale(1.05); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.9); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
      `}} />

      {/* Navegación */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '25px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem' }}>STRATT-ON</span>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#sistemas" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>Sistemas</a>
          <a href="#resultados" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>Resultados</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '12px 25px', fontSize: '10px' }}>Book a Call</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
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
          <a href="https://wa.link/430g3p" className="btn-glow">Auditoría Estratégica</a>
        </div>
      </section>

      {/* Marquee */}
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

      {/* SECCIÓN RESULTADOS (NUEVA) */}
      <section id="resultados" style={{ padding: '100px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <span style={{ fontSize: '2.5rem' }}>🏆</span> Resultados que Impactan tu Negocio
          </h2>
          <p style={{ color: '#666', marginBottom: '80px', fontSize: '1.2rem', fontWeight: 500 }}>
            No hablamos de promesas. Con nuestros Agentes IA, las empresas no solo automatizan... <span style={{color: electricPurple}}>escalan.</span>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { val: "- 80%", label: "Carga Operativa" },
              { val: "300%", label: "Aumento en Ventas" },
              { val: "60%", label: "Reducción Errores" },
              { val: "7s", label: "Tiempo Respuesta" }
            ].map((stat, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(157,0,255,0.15)', padding: '50px 30px', transition: '0.4s' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = electricPurple; e.currentTarget.style.boxShadow = '0 10px 30px rgba(157,0,255,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(157,0,255,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '20px' }}>{stat.val}</div>
                <p style={{ color: '#333', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SISTEMAS (CON EFECTO CONTRASTE) */}
      <section id="sistemas" style={{ padding: '120px 5%', background: '#000', color: '#fff', transition: '0.8s ease' }}
        onMouseOver={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '80px', lineHeight: 0.9 }}>
            Infraestructura <br /> de <span style={{ color: electricPurple }}>Ingresos</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: "Inbound IA", desc: "Agentes de voz con latencia ultra-baja y empatía humana que atienden, califican y agendan citas 24/7 sin perder un solo lead." },
              { title: "Growth Outbound", desc: "Maquinaria de prospección multicanal que utiliza IA para hiper-personalizar contactos a escala en LinkedIn y Email, llenando tu embudo de ventas." },
              { title: "n8n Architecture", desc: "El sistema nervioso central de tu negocio. Conectamos APIs, CRMs y modelos de IA bajo arquitecturas lógicas que eliminan el trabajo manual." }
            ].map((service, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '50px 40px', transition: '0.6s' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '900', textTransform: 'uppercase', color: 'inherit', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '15px' }}>{service.title}</h3>
                <p style={{ color: 'inherit', lineHeight: '1.8', fontSize: '1rem', opacity: 0.8 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi" style={{ padding: '100px 5%', background: '#fff', color: '#000' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '50px' }}>CALCULA TU LIBERTAD</h2>
          <input type="range" min="10" max="200" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%', accentColor: electricPurple }} />
          <div style={{ fontSize: '5rem', fontWeight: 900, marginTop: '30px' }}>${savings.toLocaleString()} <span style={{ fontSize: '1rem', color: '#666' }}>USD/MES</span></div>
        </div>
      </section>

      {/* Footer */}
      <footer id="agendar" style={{ padding: '100px 5%', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '40px' }}>SCALE FASTER.</h2>
        <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Agendar Llamada
        </a>
        <p style={{ marginTop: '100px', opacity: 0.2, fontSize: '10px', letterSpacing: '5px' }}>STRATT-ON AGENCY // 2026</p>
        <div style={{ marginTop: '20px', display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="/politicadeprivacidad" style={{ color: '#444', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.3s' }} 
            onMouseOver={(e) => e.currentTarget.style.color = electricPurple} onMouseOut={(e) => e.currentTarget.style.color = '#444'}>Privacidad</a>
          <span style={{ color: '#222', fontSize: '10px' }}>|</span>
          <a href="/terminosycondiciones" style={{ color: '#444', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.3s' }} 
            onMouseOver={(e) => e.currentTarget.style.color = electricPurple} onMouseOut={(e) => e.currentTarget.style.color = '#444'}>Términos</a>
        </div>
      </footer>
    </main>
  );
}