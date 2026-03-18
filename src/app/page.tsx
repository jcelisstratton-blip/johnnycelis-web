"use client";
import React, { useState, useEffect, useRef } from 'react';

// COMPONENTE DE CONTEO ANIMADO
const Counter = ({ end, duration = 2000 }: { end: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.5 });
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
  const savings = hours * 20; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5" },
    { name: "TikTok", link: "https://www.tiktok.com/@stratt_on", color: "#ffffff" },
    { name: "WhatsApp", link: "https://wa.link/430g3p", color: "#25D366" },
    { name: "Facebook", link: "https://www.facebook.com/Johnnycelis.ia", color: "#1877F2" }
  ];

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; scroll-behavior: smooth; }
        .hero-video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: -1; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 35px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; }
        .btn-glow:hover { box-shadow: 0 0 30px ${electricPurple}; transform: scale(1.05); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.8); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        .social-icon { width: 45px; height: 45px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: #fff; transition: 0.4s; font-size: 0.8rem; font-weight: bold; }
        .social-icon:hover { border-color: ${electricPurple}; transform: translateY(-5px); color: #fff; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
      `}} />

      {/* Nav */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '25px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem' }}>STRATT-ON</span>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#sistemas" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>SISTEMAS</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>ROI</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" className="btn-glow" style={{ padding: '10px 20px', fontSize: '10px' }}>BOOK A CALL</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <video autoPlay muted loop playsInline preload="auto" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}>
          <source src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div style={{ zIndex: 1, padding: '0 20px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.9 }}>
            Automate<br /><span style={{ WebkitTextStroke: '1px #444', color: 'transparent' }}>To Elevate</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '30px auto', fontSize: '1.2rem', opacity: 0.8 }}>Agentes de Voz e IA que transforman tu operación en una maquinaria autónoma.</p>
          <a href="https://wa.link/430g3p" className="btn-glow">Auditoría Estratégica</a>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: '#030303', overflow: 'hidden', padding: '30px 0', borderTop: '1px solid #111' }}>
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

      {/* SECCIÓN SISTEMAS (Vuelve a aparecer) */}
      <section id="sistemas" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '60px' }}>Infraestructura de <span style={{ color: electricPurple }}>Ingresos</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: "Inbound IA", desc: "Agentes de voz con latencia ultra-baja y empatía humana que atienden, califican y agendan citas 24/7 sin perder un solo lead." },
              { title: "Growth Outbound", desc: "Maquinaria de prospección multicanal que utiliza IA para hiper-personalizar contactos a escala en LinkedIn y Email." },
              { title: "n8n Architecture", desc: "El sistema nervioso central de tu negocio. Conectamos APIs, CRMs y modelos de IA bajo arquitecturas lógicas." }
            ].map((s, i) => (
              <div key={i} style={{ padding: '50px 40px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.4s' }}
                onMouseOver={(e) => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='#000'; }}
                onMouseOut={(e) => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#fff'; }}>
                <h3 style={{ fontWeight: 900, marginBottom: '20px', fontSize: '1.5rem' }}>{s.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN RESULTADOS */}
      <section id="resultados" style={{ padding: '100px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[
            { val: "- 80%", label: "Carga Operativa" },
            { val: "300%", label: "Aumento en Ventas" },
            { val: "60%", label: "Reducción Errores" },
            { val: "7s", label: "Tiempo Respuesta" }
          ].map((stat, i) => (
            <div key={i} style={{ flex: '1', minWidth: '280px', padding: '50px 20px', border: '1px solid #eee', borderRadius: '15px' }}>
              <div style={{ fontSize: '4.5rem', fontWeight: 900, color: electricPurple }}><Counter end={stat.val} /></div>
              <p style={{ fontWeight: 'bold', color: '#666', textTransform: 'uppercase', fontSize: '0.8rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section id="roi" style={{ padding: '120px 5%', background: '#fff', color: '#000', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase' }}>Calcula tu libertad</h2>
        <input type="range" min="10" max="200" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '80%', maxWidth: '600px', accentColor: electricPurple, margin: '50px 0' }} />
        <div style={{ fontSize: 'clamp(4rem, 10vw, 6rem)', fontWeight: 900 }}>${savings.toLocaleString()} <span style={{ fontSize: '1rem', color: electricPurple }}>USD/MES</span></div>
        <p style={{ color: '#888', marginTop: '20px' }}>Ahorro proyectado basado en un costo operativo de $20 USD/hora.</p>
      </section>

      {/* Footer Minimalista con Redes */}
      <footer style={{ padding: '100px 5%', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '50px' }}>SCALE FASTER.</h2>
        
        {/* Redes Sociales Minimalistas */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px' }}>
          {socialLinks.map((social, i) => (
            <a key={i} href={social.link} target="_blank" className="social-icon" onMouseOver={(e) => e.currentTarget.style.backgroundColor = social.color}>
              {social.name[0]}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', opacity: 0.4, fontSize: '10px', letterSpacing: '2px' }}>
            <a href="/politicadeprivacidad" style={{ color: '#fff', textDecoration: 'none' }}>PRIVACIDAD</a>
            <span>|</span>
            <a href="/terminosycondiciones" style={{ color: '#fff', textDecoration: 'none' }}>TÉRMINOS</a>
          </div>
          <p style={{ opacity: 0.2, fontSize: '9px', letterSpacing: '5px' }}>STRATT-ON AGENCY // 2026</p>
        </div>
      </footer>
    </main>
  );
}