"use client";
import React, { useState, useEffect, useRef } from 'react';

// 1. COMPONENTE DE CONTEO ANIMADO
const Counter = ({ end, duration = 2000 }: { end: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setIsVisible(true); 
    }, { threshold: 0.5 });
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
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5", svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "TikTok", link: "https://www.tiktok.com/@stratt_on", color: "#fff", svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.44 6.44 0 0 1-1.87-1.43v7.33c.01 5.89-6.38 9.57-11.13 6.13-4.07-2.8-4.43-8.87-1.12-12.18 1.47-1.51 3.53-2.31 5.63-2.13v4.03c-1.41-.09-2.89.47-3.6 1.74-.83 1.52-.25 3.65 1.34 4.54 1.48.86 3.52.16 4.12-1.47.16-.4.24-.82.23-1.25V.02z" },
    { name: "WhatsApp", link: "https://wa.link/430g3p", color: "#25D366", svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
    { name: "Facebook", link: "https://www.facebook.com/Johnnycelis.ia", color: "#1877F2", svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
  ];

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; scroll-behavior: smooth; }
        .hero-video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: -1; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 35px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; }
        .btn-glow:hover { box-shadow: 0 0 30px ${electricPurple}; transform: scale(1.05); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.8); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        .social-icon { width: 55px; height: 55px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.4); transition: 0.4s; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
      `}} />

      {/* Nav */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '25px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem' }}>STRATT-ON</span>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>SOLUCIONES</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold' }}>ROI</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '10px 20px', fontSize: '10px' }}>BOOK A CALL</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <video 
          key="hero-video-v3"
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div style={{ zIndex: 1, padding: '0 20px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.9 }}>
            Automate<br /><span style={{ WebkitTextStroke: '1px #444', color: 'transparent' }}>To Elevate</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '30px auto', fontSize: '1.3rem', fontWeight: 500, opacity: 0.9 }}>
            Agentes de Voz e IA que transforman tu operación en una maquinaria autónoma.
          </p>
          <a href="https://wa.link/430g3p" className="btn-glow">Auditoría Estratégica</a>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: '#030303', overflow: 'hidden', padding: '30px 0', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
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

      {/* SECCIÓN SOLUCIONES */}
      <section id="soluciones" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '60px' }}>Infraestructura de <span style={{ color: electricPurple }}>Soluciones</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: "Inbound IA", desc: "Agentes de voz con latencia ultra-baja y empatía humana que atienden, califican y agendan citas 24/7 sin perder un solo lead." },
              { title: "Growth Outbound", desc: "Maquinaria de prospección multicanal que utiliza IA para hiper-personalizar contactos a escala en LinkedIn y Email." },
              { title: "n8n Architecture", desc: "El sistema nervioso central de tu negocio. Conectamos APIs, CRMs y modelos de IA bajo arquitecturas lógicas." }
            ].map((s, i) => (
              <div key={i} style={{ padding: '60px 40px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.5s ease', cursor: 'default' }}
                onMouseOver={(e) => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='#000'; }}
                onMouseOut={(e) => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#fff'; }}>
                <h3 style={{ fontWeight: 900, marginBottom: '20px', fontSize: '1.6rem', textTransform: 'uppercase' }}>{s.title}</h3>
                <p style={{ opacity: 0.8, lineHeight: '1.7', fontSize: '1.05rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN RESULTADOS */}
      <section id="resultados" style={{ padding: '120px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
          {[
            { val: "- 80%", label: "Carga Operativa" },
            { val: "300%", label: "Aumento en Ventas" },
            { val: "60%", label: "Reducción Errores" },
            { val: "7s", label: "Tiempo Respuesta" }
          ].map((stat, i) => (
            <div key={i} style={{ flex: '1', minWidth: '280px', padding: '60px 20px', border: '1px solid #f0f0f0', borderRadius: '20px', background: '#fff' }}>
              <div style={{ fontSize: '5rem', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '15px' }}>
                <Counter end={stat.val} />
              </div>
              <p style={{ fontWeight: 800, color: '#444', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN ROI */}
      <section id="roi" style={{ padding: '120px 5%', background: '#fff', color: '#000', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px' }}>Calcula tu libertad</h2>
        <p style={{ color: '#888', marginBottom: '50px', fontSize: '1.1rem' }}>Desliza para ver tu ahorro mensual basado en un costo de $20 USD/hora.</p>
        <input 
          type="range" min="10" max="200" value={hours} 
          onChange={e => setHours(parseInt(e.target.value))} 
          style={{ width: '80%', maxWidth: '600px', accentColor: electricPurple, height: '8px', cursor: 'pointer' }} 
        />
        <div style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 900, marginTop: '40px', lineHeight: 1 }}>
          ${savings.toLocaleString()} <span style={{ fontSize: '1.2rem', color: electricPurple, verticalAlign: 'middle' }}>USD/MES</span>
        </div>
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#555' }}>{hours} horas automatizadas al mes</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '120px 5%', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '60px', textTransform: 'uppercase' }}>Scale Faster.</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '80px' }}>
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = social.color;
                e.currentTarget.style.color = social.color;
                e.currentTarget.style.boxShadow = `0 0 25px ${social.color}44`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg viewBox="0 0 24 24"><path d={social.svg}/></svg>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px', opacity: 0.4, fontSize: '11px', letterSpacing: '3px', fontWeight: 'bold' }}>
            <a href="/politicadeprivacidad" style={{ color: '#fff', textDecoration: 'none' }}>PRIVACIDAD</a>
            <span style={{ color: '#333' }}>|</span>
            <a href="/terminosycondiciones" style={{ color: '#fff', textDecoration: 'none' }}>TÉRMINOS</a>
          </div>
          <p style={{ opacity: 0.15, fontSize: '10px', letterSpacing: '10px', textTransform: 'uppercase' }}>STRATT-ON AGENCY // 2026</p>
        </div>
      </footer>
    </main>
  );
}