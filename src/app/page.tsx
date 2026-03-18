"use client";
import React, { useState, useEffect, useRef } from 'react';

// COMPONENTE DE CONTEO ANIMADO CON SENSOR DE SCROLL
const Counter = ({ end, duration = 2000 }: { end: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, numericEnd, duration]);

  return <span ref={countRef}>{suffix.startsWith('-') ? '-' : ''}{count}{suffix.replace('-', '')}</span>;
};

export default function Home() {
  const [hours, setHours] = useState(20);
  const [scrolled, setScrolled] = useState(false);
  const electricPurple = "#9D00FF";
  const savings = hours * 20 * 4 * 0.80; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #000 !important; }
        .hero-video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: -1; }
        .text-stroke { -webkit-text-stroke: 1px #444; color: transparent; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 35px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; }
        .btn-glow:hover { box-shadow: 0 0 30px ${electricPurple}; transform: scale(1.05); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.8); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
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

      {/* Hero Section con Video Full de Fondo */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}>
          <source src="https://cdn.pixabay.com/video/2023/10/20/185795-876319803_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div style={{ padding: '0 20px', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.9, margin: '0 0 30px 0' }}>
            Automate<br /><span className="text-stroke">To Elevate</span>
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 40px', color: '#fff', fontSize: '1.4rem', fontWeight: 500 }}>
            Agentes de Voz e IA que transforman tu operación en una maquinaria autónoma.
          </p>
          <a href="https://wa.link/430g3p" className="btn-glow">Auditoría Estratégica</a>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: '#030303', overflow: 'hidden', padding: '30px 0' }}>
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

      {/* SECCIÓN RESULTADOS (Cuadros en una sola línea) */}
      <section id="resultados" style={{ padding: '120px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '80px' }}>Resultados que Impactan</h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'nowrap', // FUERZA UNA SOLA LÍNEA
            gap: '20px',
            overflowX: 'auto' // SCROLL EN MÓVILES PARA NO ROMPER DISEÑO
          }}>
            {[
              { val: "- 80%", label: "Carga Operativa" },
              { val: "300%", label: "Aumento en Ventas" },
              { val: "60%", label: "Reducción Errores" },
              { val: "7s", label: "Tiempo Respuesta" }
            ].map((stat, i) => (
              <div key={i} style={{ flex: '1', minWidth: '250px', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '60px 20px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '4.5rem', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '20px' }}>
                  <Counter end={stat.val} />
                </div>
                <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.8rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SISTEMAS (Hover localizado) */}
      <section id="sistemas" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '80px' }}>
            Infraestructura <br /> de <span style={{ color: electricPurple }}>Ingresos</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: "Inbound IA", desc: "Agentes de voz con latencia ultra-baja y empatía humana que atienden, califican y agendan citas 24/7 sin perder un solo lead." },
              { title: "Growth Outbound", desc: "Maquinaria de prospección multicanal que utiliza IA para hiper-personalizar contactos a escala en LinkedIn y Email, llenando tu embudo de ventas." },
              { title: "n8n Architecture", desc: "El sistema nervioso central de tu negocio. Conectamos APIs, CRMs y modelos de IA bajo arquitecturas lógicas que eliminan el trabajo manual." }
            ].map((service, i) => (
              <div key={i} 
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '50px 40px', transition: '0.5s', color: '#fff' }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.color = '#fff'; }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '900', textTransform: 'uppercase', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '15px' }}>{service.title}</h3>
                <p style={{ lineHeight: '1.8', opacity: 0.8 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El resto del código (ROI, Footer) se mantiene igual... */}
      {/* (Omitido por brevedad pero inclúyelo en tu archivo) */}

    </main>
  );
}