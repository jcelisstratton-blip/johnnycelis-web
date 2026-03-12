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
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* CAPA DE ESTILOS DE ÉLITE (UX + RESPONSIVE BLINDADO) */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #000 !important; color: #fff; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }
        a { transition: 0.3s; }
        
        /* Efectos Cinematográficos */
        .hero-video-overlay { background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%); }
        
        .btn-glow { background: ${electricPurple}; color: white; padding: 20px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; font-size: 13px; transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); display: inline-block; border: none; cursor: pointer; text-align: center; }
        .btn-glow:hover { box-shadow: 0 0 50px rgba(157,0,255,0.7); transform: scale(1.05); background-color: white !important; color: black !important; }
        
        .glass-panel { background: rgba(255,255,255,0.01); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.05); transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); padding: 60px 40px; }
        .glass-panel:hover { border-color: ${electricPurple}; background: rgba(157,0,255,0.07); transform: translateY(-10px); }
        
        .nav-blur { background: rgba(0,0,0,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        
        /* Grids Responsives */
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1px; }
        
        /* Marquee */
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 35s linear infinite; }
        
        /* Custom Inputs */
        input[type="range"] { accent-color: ${electricPurple}; cursor: pointer; }
        
        /* Mobile Hamburger & Styling */
        .mobile-menu { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.98); backdrop-filter: blur(10px); z-index: 99; flex-direction: column; justify-content: center; items: center; gap: 40px; transform: translateX(100%); transition: 0.5s ease; }
        .mobile-menu.open { transform: translateX(0); }
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: white; font-size: 30px; z-index: 100; padding: 0; }

        @media (max-width: 1024px) {
          .desktop-links { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-menu { display: flex; }
        }
        @media (max-width: 768px) {
          .mobile-hero-padding { padding-top: 150px !important; }
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}} />

      {/* --- MENÚ MÓVIL (HAMBURGER) --- */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#sistemas" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase' }}>Sistemas</a>
        <a href="#resultados" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase' }}>Resultados</a>
        <a href="#roi" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase' }}>ROI</a>
        <a href="#agendar" onClick={() => setMenuOpen(false)} className="btn-glow" style={{ padding: '15px 30px', fontSize: '11px' }}>Book a Call</a>
      </div>

      {/* --- NAVEGACIÓN UX --- */}
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
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px 50px', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2, opacity: 0.5 }}>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

        <div className="mobile-hero-padding" style={{ opacity: 0, animation: 'fadeIn 1s ease-out forwards' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 14vw, 11rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.8, margin: '0 0 40px 0', letterSpacing: '-4px' }}>
            Automate<br /><span style={{ color: 'transparent', webkitTextStroke: '1px #444', fontStyle: 'normal' }}>To Elevate</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto 60px', color: '#bbb', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: 1.6, fontStyle: 'italic' }}>
            Construimos sistemas de <strong style={{ color: 'white' }}>Agentes de Voz e IA</strong> que transforman Stratt-On Agency en una maquinaria de ingresos autónoma.
          </p>
          <a href="#agendar" className="btn-glow">Agendar Auditoría IA</a>
        </div>
      </section>

      {/* --- MARQUEE DE AUTORIDAD --- */}
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

      {/* --- SISTEMAS (01, 02, 03) --- */}
      <section id="sistemas" style={{ padding: '150px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span style={{ color: electricPurple, fontSize: '11px', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>Ingeniería de Crecimiento</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0, letterSpacing: '-2px' }}>Nuestros Sistemas</h2>
        </div>
        <div className="grid-3">
          {[
            { t: "Inbound IA", d: "Atiende, califica y agenda citas con voces clonadas indestinguibles de un humano. Disponible 24/7 sin fatiga." },
            { t: "Growth Outbound", d: "Prospección masiva y calificación de leads sin intervención humana. Multiplica tus puntos de contacto." },
            { t: "n8n Architecture", d: "Diseño de backend avanzada y automatización total de flujos de trabajo que conectan tu ecosistema digital." }
          ].map((s, i) => (
            <div key={i} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px' }}>
              <div>
                <span style={{ color: electricPurple, fontWeight: 900, fontSize: '13px', letterSpacing: '3px', display: 'block', marginBottom: '40px' }}>SISTEMA 0{i+1}</span>
                <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 25px 0' }}>{s.t}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '1.05rem' }}>{s.d}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', marginTop: '20px' }}>
                <span style={{ fontSize: '11px', opacity: 0.3 }}>Explore Protocol →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARATIVA (THE STRATT-ON DIFFERENCE) --- */}
      <section style={{ padding: '120px 20px', background: '#050505', borderY: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textAlign: 'center', textTransform: 'uppercase', fontStyle: 'italic', marginBottom: '80px', margin: '0 0 80px 0' }}>The Stratt-On Difference</h2>
          <div className="grid-2" style={{ background: 'rgba(255,255,255,0.1)', padding: '1px' }}>
            <div style={{ background: '#000', padding: '70px 50px' }}>
              <h4 style={{ color: electricPurple, fontWeight: 900, fontSize: '1.8rem', textTransform: 'uppercase', margin: '0 0 50px 0', letterSpacing: '2px' }}>CON NOSOTROS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', lineHeight: 2.3, fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Operativa ininterrumpida 24/7</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Escalabilidad inmediata sin entrevistas</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Reducción de costos operativos hasta 80%</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Datos 100% precisos en cada proceso</li>
              </ul>
            </div>
            <div style={{ background: '#0a0a0a', padding: '70px 50px' }}>
              <h4 style={{ color: '#444', fontWeight: 900, fontSize: '1.8rem', textTransform: 'uppercase', margin: '0 0 50px 0', letterSpacing: '2px' }}>MÉTODO ANTIGUO</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#444', lineHeight: 2.3, fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: '#600', fontWeight: 'bold' }}>✗</span> Horarios limitados de oficina</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: '#600', fontWeight: 'bold' }}>✗</span> Procesos lentos de reclutamiento</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: '#600', fontWeight: 'bold' }}>✗</span> Altos costos fijos de nómina</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}><span style={{ color: '#600', fontWeight: 'bold' }}>✗</span> Errores humanos inevitables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTADOS --- */}
      <section id="resultados" style={{ padding: '150px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', margin: '0 0 100px 0' }}>Client Results</h2>
        <div className="grid-3">
          {[
            { n: "The Luxe Week", m: "+$400k Mensuales", t: "Implementamos agentes de voz para reservas globales, eliminando el cuello de botella." },
            { n: "Jili Properties", m: "90% Automatizado", t: "Todas las llamadas de mantenimiento ahora son filtradas y procesadas por IA." },
            { n: "Northwest Physio", m: "Eficiencia Total", t: "Agendamiento 100% autónomo. El staff médico se enfoca solo en la clínica." }
          ].map((test, i) => (
            <div key={i} className="glass-panel" style={{ borderLeft: `5px solid ${electricPurple}`, paddingLeft: '50px' }}>
              <p style={{ color: '#aaa', fontStyle: 'italic', marginBottom: '40px', lineHeight: 1.7, fontSize: '1.15rem' }}>"{test.t}"</p>
              <h4 style={{ fontSize: '1.7rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 12px 0' }}>{test.n}</h4>
              <span style={{ color: electricPurple, fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Resultados: {test.m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- ROI CALCULATOR (BLANCO Y NEGRO PARA AUTORIDAD) --- */}
      <section id="roi" style={{ padding: '150px 20px', background: 'white', color: 'black' }}>
        <div className="grid-2" style={{ maxWidth: '1300px', margin: '0 auto', gap: '100px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 900, fontStyle: 'italic', leading: 0.85, textTransform: 'uppercase', margin: '0 0 60px 0' }}>Calcula tu<br /><span style={{ color: electricPurple }}>Libertad</span></h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', marginBottom: '25px' }}>
              <span>Horas operativas: {hours}H / Sem</span>
              <span style={{ color: electricPurple }}>Tarifa: $20/HR</span>
            </div>
            <input type="range" min="10" max="250" step="5" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%', height: '10px', background: '#eee', outline: 'none' }} />
            <p style={{ color: '#666', fontSize: '15px', marginTop: '30px', fontWeight: 500 }}>Ajusta el control deslizante según el volumen de tareas manuales de tu equipo actual.</p>
          </div>
          <div style={{ background: '#000', color: 'white', padding: '80px 60px', textAlign: 'center', boxShadow: '0 40px 80px rgba(0,0,0,0.2)' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#888', letterSpacing: '5px', textTransform: 'uppercase', display: 'block', marginBottom: '25px' }}>Ahorro Mensual Stratt-On</span>
            <div style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, fontStyle: 'italic', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '40px', margin: '0 0 40px 0' }}>
              ${savings.toLocaleString()}
            </div>
            <span style={{ fontSize: '11px', color: electricPurple, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>Retorno Anual Proyectado:</span>
            <div style={{ fontSize: '3rem', fontWeight: 900 }}>${yearlySavings.toLocaleString()} USD</div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section style={{ padding: '150px 20px', background: '#030303' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', margin: '0 0 80px 0' }}>Dudas Comunes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: 0 }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: '100%', padding: '35px', background: 'none', border: 'none', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left', outline: 'none' }}>
                  {f.q}
                  <span style={{ color: electricPurple, fontSize: '1.8rem', transform: faqOpen === i ? 'rotate(45deg)' : 'none', transition: '0.4s ease' }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{ padding: '0 35px 35px 35px', color: '#aaa', lineHeight: 1.7, fontSize: '1.05rem', marginTop: '-10px' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER DE CONVERSIÓN --- */}
      <footer id="agendar" style={{ padding: '180px 20px', textAlign: 'center', background: '#000', borderTop: `1px solid rgba(157,0,255,0.2)` }}>
        <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: '0 0 80px 0', letterSpacing: '-3px' }}>Scale Faster.</h2>
        <a href="https://calendly.com/tu-link" className="btn-glow">Agendar Auditoría IA</a>
        <div style={{ marginTop: '150px', opacity: 0.15, fontSize: '10px', fontWeight: 900, letterSpacing: '10px', textTransform: 'uppercase' }}>
          Stratt-On Agency // 2026 // Antioquia, CO
        </div>
      </footer>
    </main>
  );
}