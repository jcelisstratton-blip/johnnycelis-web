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
  const [hours, setHours] = useState(50);
  const [scrolled, setScrolled] = useState(false);
  const electricPurple = "#9D00FF";
  const savings = hours * 20; 

  // FIX DEFINITIVO DEL VIDEO: Control programático anti-bloqueo
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay mitigado por el navegador, esperando interacción:", error);
      });
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5", svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "TikTok", link: "https://www.tiktok.com/@stratt_on", color: "#fff", svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.44 6.44 0 0 1-1.87-1.43v7.33c.01 5.89-6.38 9.57-11.13 6.13-4.07-2.8-4.43-8.87-1.12-12.18 1.47-1.51 3.53-2.31 5.63-2.13v4.03c-1.41-.09-2.89.47-3.6 1.74-.83 1.52-.25 3.65 1.34 4.54 1.48.86 3.52.16 4.12-1.47.16-.4.24-.82.23-1.25V.02z" },
    { name: "WhatsApp", link: "https://wa.link/430g3p", color: "#25D366", svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" },
    { name: "Facebook", link: "https://www.facebook.com/Johnnycelis.ia", color: "#1877F2", svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
  ];

  const reviews = [
    { name: "Carlos M.", role: "CEO, E-commerce Retail", text: "Stratt-On Agency redujo nuestro tiempo de respuesta a segundos. Las ventas nocturnas aumentaron un 45% en el primer mes gracias al agente IA." },
    { name: "Laura V.", role: "Directora Comercial B2B", text: "La arquitectura n8n nos ahorró el equivalente a 3 salarios operativos. Escalar ahora es solo cuestión de presupuesto publicitario, no de contratar más." },
    { name: "David R.", role: "Founder, Inmobiliaria", text: "Nuestro agente de voz califica y agenda leads sin que nosotros movamos un dedo. Es indistinguible de un humano. Simplemente brutal." }
  ];

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; scroll-behavior: smooth; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%); z-index: -1; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border: none; cursor: pointer; border-radius: 4px; }
        .btn-glow:hover { box-shadow: 0 0 40px ${electricPurple}; transform: translateY(-3px); background: #fff !important; color: #000 !important; }
        .btn-outline { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.15); }
        .sales-list li { margin-bottom: 15px; display: flex; align-items: flex-start; gap: 15px; font-size: 1.1rem; color: #ccc; line-height: 1.4; }
        .sales-list svg { color: ${electricPurple}; flex-shrink: 0; margin-top: 3px; }
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 40px; transition: 0.4s; }
        .glass-card:hover { border-color: ${electricPurple}; background: rgba(157,0,255,0.05); transform: translateY(-5px); }
        .social-icon { width: 55px; height: 55px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.4); transition: 0.4s; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        @keyframes scrollCarousel { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .carousel-container { display: flex; width: max-content; animation: scrollCarousel 40s linear infinite; }
        .carousel-container:hover { animation-play-state: paused; }
      `}} />

      {/* NAVEGACIÓN */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '1px' }}>STRATT-ON</span>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Soluciones</a>
          <a href="#resultados" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Resultados</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>ROI</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '12px 24px', fontSize: '11px' }}>AUDITORÍA IA</a>
        </div>
      </nav>

      {/* HERO SECTION (MÁXIMA CONVERSIÓN + FIX VIDEO) */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '100px 0 50px' }}>
        <video 
          ref={videoRef}
          playsInline 
          autoPlay 
          muted 
          loop 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        
        <div style={{ zIndex: 1, padding: '0 5%', width: '100%', maxWidth: '1400px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', border: `1px solid ${electricPurple}`, borderRadius: '20px', color: electricPurple, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '25px', textTransform: 'uppercase', background: 'rgba(157,0,255,0.05)' }}>
              Agencia de Automatización B2B
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px', textTransform: 'uppercase' }}>
              Tu embudo no duerme.<br />Tu equipo <span style={{ color: electricPurple }}>sí.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px', fontWeight: 500 }}>
              Implementamos Agentes de Inteligencia Artificial que atienden, califican y agendan llamadas 24/7. Escala tu E-commerce o empresa sin explotar a tu equipo.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">Agendar Llamada</a>
              <a href="https://wa.link/430g3p" target="_blank" rel="noopener noreferrer" className="btn-outline">Ver Demo en Vivo</a>
            </div>
          </div>

          {/* GATILLOS DE VENTA (Estilo Neurofy) */}
          <div style={{ flex: '1 1 400px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)', padding: '45px', borderLeft: `3px solid ${electricPurple}`, borderRadius: '0 20px 20px 0', boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Conversión en Piloto Automático</h3>
            <ul className="sales-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Respuesta inmediata en <strong>menos de 7 segundos</strong>.</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Calificación y agendamiento <strong>B2B 24/7</strong>.</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Reducción de costos operativos hasta un <strong>80%</strong>.</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Sistemas <strong>n8n</strong> con eliminación de errores humanos.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DOBLE BANDA: TECH + AUTORIDAD */}
      <div style={{ background: '#030303', overflow: 'hidden', padding: '25px 0', borderTop: '1px solid #111' }}>
        <div className="animate-marquee">
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '60px', paddingRight: '60px' }}>
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN"].map(word => (
                <span key={word} style={{ fontSize: '1.2rem', fontWeight: 900, color: '#222' }}>{word}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#080808', borderBottom: '1px solid #111', padding: '30px 0', overflow: 'hidden' }}>
        <div className="carousel-container">
          {[1, 2, 3].map((group) => (
            <div key={group} style={{ display: 'flex', alignItems: 'center', gap: '80px', paddingRight: '80px' }}>
              {["E-COMMERCE PRO", "TECH LOGISTICS", "REAL ESTATE GROUP", "SAAS LATAM", "B2B ENTERPRISE"].map((logo, i) => (
                <span key={i} style={{ fontSize: '1.2rem', fontWeight: 900, color: '#444', textTransform: 'uppercase', letterSpacing: '3px' }}>{logo}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN SOLUCIONES (CON TU HOVER BLANCO/NEGRO ORIGINAL) */}
      <section id="soluciones" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase' }}>Infraestructura de <span style={{ color: electricPurple }}>Soluciones</span></h2>
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto 0' }}>Diseñamos ecosistemas tecnológicos que operan tu negocio mientras tú te enfocas en la estrategia.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: "Inbound IA", desc: "Agentes de voz con latencia ultra-baja y empatía humana que atienden, califican y agendan citas 24/7 sin perder un solo lead." },
              { title: "Growth Outbound", desc: "Maquinaria de prospección multicanal que utiliza IA para hiper-personalizar contactos a escala en LinkedIn y Email." },
              { title: "n8n Architecture", desc: "El sistema nervioso central de tu negocio. Conectamos APIs, CRMs y modelos de IA bajo arquitecturas lógicas e infalibles." }
            ].map((s, i) => (
              <div key={i} style={{ padding: '60px 40px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.4s ease', cursor: 'default', background: 'rgba(255,255,255,0.02)' }}
                onMouseOver={(e) => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='#000'; e.currentTarget.style.transform='translateY(-10px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.02)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(0)'; }}>
                <h3 style={{ fontWeight: 900, marginBottom: '20px', fontSize: '1.6rem', textTransform: 'uppercase', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '15px' }}>{s.title}</h3>
                <p style={{ opacity: 0.8, lineHeight: '1.7', fontSize: '1.05rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN RESULTADOS (LA BANDA BLANCA ORIGINAL RECUPERADA) */}
      <section id="resultados" style={{ padding: '120px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '80px' }}>Resultados que Impactan</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
            {[
              { val: "- 80%", label: "Carga Operativa" },
              { val: "300%", label: "Aumento en Ventas" },
              { val: "60%", label: "Reducción Errores" },
              { val: "7s", label: "Tiempo Respuesta" }
            ].map((stat, i) => (
              <div key={i} style={{ flex: '1', minWidth: '250px', padding: '60px 20px', border: '1px solid #eaeaea', borderRadius: '20px', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '15px' }}>
                  <Counter end={stat.val} />
                </div>
                <p style={{ fontWeight: 800, color: '#555', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN REVIEWS (NUEVA AUTORIDAD) */}
      <section id="autoridad" style={{ padding: '120px 5%', background: '#050505' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', marginBottom: '80px' }}>Lo que dicen los <span style={{ color: electricPurple }}>Líderes</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {reviews.map((rev, i) => (
              <div key={i} className="glass-card" style={{ position: 'relative' }}>
                <div style={{ fontSize: '5rem', color: electricPurple, position: 'absolute', top: '10px', right: '30px', opacity: 0.15, fontFamily: 'serif', lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '1.1rem', color: '#ddd', lineHeight: 1.8, marginBottom: '30px', position: 'relative', zIndex: 1 }}>"{rev.text}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <h4 style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '5px' }}>{rev.name}</h4>
                  <span style={{ color: electricPurple, fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ROI (SAAS STYLE) */}
      <section id="roi" style={{ padding: '120px 5%', background: '#111', color: '#fff', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px' }}>Calcula tu <span style={{ color: electricPurple }}>Libertad</span></h2>
        <p style={{ color: '#888', marginBottom: '60px', fontSize: '1.2rem' }}>Descubre cuánto dinero recuperas al mes (Basado en $20 USD/hora operativa).</p>
        
        <input 
          type="range" min="10" max="200" value={hours} 
          onChange={e => setHours(parseInt(e.target.value))} 
          style={{ width: '100%', maxWidth: '800px', accentColor: electricPurple, height: '8px', cursor: 'pointer', marginBottom: '60px' }} 
        />
        
        <div style={{ background: '#000', padding: '60px 40px', borderRadius: '24px', display: 'inline-block', border: `1px solid ${electricPurple}`, boxShadow: `0 0 60px rgba(157,0,255,0.15)`, minWidth: '300px' }}>
          <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '15px', fontSize: '0.9rem' }}>Ahorro Proyectado</p>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 1 }}>
            ${savings.toLocaleString()} <span style={{ fontSize: '1.5rem', color: electricPurple, verticalAlign: 'middle' }}>USD/MES</span>
          </div>
          <p style={{ marginTop: '25px', fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}>{hours} horas automatizadas.</p>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer style={{ padding: '100px 5% 50px', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scale Faster.</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px', marginBottom: '80px' }}>
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
                e.currentTarget.style.transform = 'translateY(-5px)';
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
          <div style={{ display: 'flex', gap: '30px', opacity: 0.6, fontSize: '11px', letterSpacing: '3px', fontWeight: 'bold' }}>
            <a href="/politicadeprivacidad" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e=>e.currentTarget.style.color=electricPurple} onMouseOut={e=>e.currentTarget.style.color='#fff'}>PRIVACIDAD</a>
            <span style={{ color: '#333' }}>|</span>
            <a href="/terminosycondiciones" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e=>e.currentTarget.style.color=electricPurple} onMouseOut={e=>e.currentTarget.style.color='#fff'}>TÉRMINOS</a>
          </div>
          <p style={{ opacity: 0.2, fontSize: '11px', letterSpacing: '8px', textTransform: 'uppercase', marginTop: '20px' }}>STRATT-ON AGENCY // 2026</p>
        </div>
      </footer>
    </main>
  );
}