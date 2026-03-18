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
  
  // AJUSTE: Valor de hora fijado en 20 USD
  const savings = hours * 20; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; scroll-behavior: smooth; }
        .hero-video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: -1; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 35px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; }
        .btn-glow:hover { box-shadow: 0 0 30px ${electricPurple}; transform: scale(1.05); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.8); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        .social-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; display: flex; align-items: center; gap: 15px; text-decoration: none; color: #fff; transition: 0.3s; width: 100%; max-width: 400px; margin: 10px auto; }
        .social-card:hover { transform: scale(1.02); background: rgba(255,255,255,0.07); border-color: ${electricPurple}; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
      `}} />

      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '25px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem' }}>STRATT-ON</span>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#sistemas" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>SISTEMAS</a>
          <a href="#social" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>REDES</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>ROI</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" className="btn-glow" style={{ padding: '10px 20px', fontSize: '10px' }}>BOOK A CALL</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
        >
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

      {/* SECCIÓN SOCIAL */}
      <section id="social" style={{ padding: '100px 5%', background: '#050505', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '50px' }}>CONECTA CON NOSOTROS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { name: "Instagram", user: "@JohnnyCelis.AI", color: "#E1306C", link: "https://www.instagram.com/johnnycelis.AI" },
            { name: "LinkedIn", user: "Stratt-On Agency", color: "#0077B5", link: "https://www.linkedin.com/company/105200333" },
            { name: "TikTok", user: "@stratt_on", color: "#00f2ea", link: "https://www.tiktok.com/@stratt_on" },
            { name: "WhatsApp", user: "Soporte Directo", color: "#25D366", link: "https://wa.link/430g3p" },
            { name: "Facebook", user: "JohnnyCelis.AI", color: "#1877F2", link: "https://www.facebook.com/Johnnycelis.ia" }
          ].map((red, i) => (
            <a key={i} href={red.link} target="_blank" className="social-card" style={{ borderLeft: `5px solid ${red.color}` }}>
              <div style={{ background: red.color, width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{red.name[0]}</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{red.name}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{red.user}</div>
              </div>
            </a>
          ))}
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
              <p style={{ fontWeight: 'bold', color: '#666' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section id="roi" style={{ padding: '100px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>CALCULA TU LIBERTAD</h2>
        <input type="range" min="10" max="200" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '80%', maxWidth: '600px', accentColor: electricPurple, margin: '40px 0' }} />
        <div style={{ fontSize: '5rem', fontWeight: 900 }}>${savings.toLocaleString()} <span style={{ fontSize: '1rem', color: electricPurple }}>USD/MES</span></div>
        <p style={{ color: '#666' }}>Basado en un costo operativo de $20 USD por hora.</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 5%', textAlign: 'center', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: '3rem', marginBottom: '40px' }}>SCALE FASTER.</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', opacity: 0.5, fontSize: '10px' }}>
          <a href="/politicadeprivacidad" style={{ color: '#fff', textDecoration: 'none' }}>PRIVACIDAD</a>
          <span>|</span>
          <a href="/terminosycondiciones" style={{ color: '#fff', textDecoration: 'none' }}>TÉRMINOS</a>
        </div>
      </footer>
    </main>
  );
}