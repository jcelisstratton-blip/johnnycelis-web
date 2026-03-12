"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const savings = monthlyCost * 0.80; 
  const yearlySavings = savings * 12;

  const electricPurple = "#9D00FF";
  const words = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS"];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'Inter, sans-serif', margin: 0, overflowX: 'hidden' }}>
      
      {/* CSS PARA FLUIDEZ Y RESPONSIVE */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        .section-fade { animation: fadeIn 1s ease-out forwards; }
        .electric-btn:hover { background-color: white !important; color: black !important; box-shadow: 0 0 40px ${electricPurple} !important; transform: translateY(-3px); }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.4s; }
        .glass-card:hover { border-color: ${electricPurple}; background: rgba(157, 0, 255, 0.05); }
        input[type="range"] { accent-color: ${electricPurple}; cursor: pointer; }
        @media (max-width: 768px) { .hero-title { fontSize: 3.5rem !important; } .nav-links { display: none !important; } }
      `}} />

      {/* NAV FLOTANTE */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        padding: scrolled ? '15px 50px' : '25px 50px', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        backgroundColor: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        transition: '0.4s ease-in-out',
        borderBottom: scrolled ? `1px solid ${electricPurple}33` : 'none'
      }}>
        <span style={{ fontWeight: 900, fontSize: '1.4rem', fontStyle: 'italic', letterSpacing: '-1px' }}>STRATT-ON</span>
        <div className="nav-links" style={{ display: 'flex', gap: '30px', fontSize: '11px', fontWeight: 700, letterSpacing: '2px' }}>
          <a href="#servicios" style={{ color: 'white', textDecoration: 'none' }}>SERVICIOS</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none' }}>CALCULADORA</a>
          <a href="#agendar" style={{ backgroundColor: electricPurple, color: 'white', padding: '12px 25px', textDecoration: 'none', borderRadius: '2px' }} className="electric-btn">AGENDA AHORA</a>
        </div>
      </nav>

      {/* HERO CON VIDEO (ESTILO AUTOMAXIA) */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <video 
          autoPlay muted loop playsInline 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.4 }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div className="section-fade" style={{ padding: '0 20px' }}>
          <h1 className="hero-title" style={{ fontSize: '9vw', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.8, margin: 0, fontStyle: 'italic' }}>
            Automate<br /><span style={{ color: 'white', webkitTextStroke: '1px #444', color: 'transparent', fontStyle: 'normal' }}>To Elevate</span>
          </h1>
          <p style={{ maxWidth: '700px', color: '#ccc', fontSize: '1.2rem', margin: '40px auto', lineHeight: 1.6, fontWeight: 300 }}>
            Implementamos <span style={{ color: electricPurple, fontWeight: 600 }}>Agentes de Voz IA</span> y arquitecturas de procesos que escalan Stratt-On Agency sin límites humanos.
          </p>
          <a href="#agendar" style={{ backgroundColor: electricPurple, color: 'white', padding: '22px 50px', fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }} className="electric-btn">
            RESERVAR CONSULTA
          </a>
        </div>
      </section>

      {/* MARQUEE FLUIDO */}
      <div style={{ padding: '40px 0', background: '#080808', borderY: '1px solid #111', overflow: 'hidden' }}>
        <div className="animate-marquee">
          {[1, 2, 3].map(g => (
            <div key={g} style={{ display: 'flex', alignItems: 'center' }}>
              {words.map((w, i) => (
                <div key={i} style={{ margin: '0 60px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <span style={{ fontSize: '30px', fontWeight: 900, opacity: 0.1, fontStyle: 'italic' }}>{w}</span>
                  <div style={{ width: '10px', height: '10px', backgroundColor: electricPurple, transform: 'rotate(45deg)', boxShadow: `0 0 15px ${electricPurple}` }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN SERVICIOS (GRID RESPONSIVE) */}
      <section id="servicios" style={{ padding: '150px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '80px', fontStyle: 'italic' }}>NUESTROS SISTEMAS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { t: "Agentes Inbound", d: "IA que contesta llamadas, califica leads y agenda en tiempo real directamente en tu CRM." },
            { t: "Growth Outbound", d: "Clonación de voz para prospección masiva personalizada con tono humano." },
            { t: "Arquitectura n8n", d: "Automatización total del backend conectando todas tus apps sin intervención manual." }
          ].map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '60px 40px' }}>
              <div style={{ color: electricPurple, fontSize: '0.8rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '3px' }}>0{i+1}</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px' }}>{s.t}</h3>
              <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.95rem' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARATIVA DE AUTORIDAD */}
      <section style={{ padding: '120px 20px', background: '#050505' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 900, marginBottom: '80px' }}>STRATT-ON VS. MÉTODO TRADICIONAL</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', background: '#111' }}>
            <div style={{ background: '#000', padding: '60px' }}>
              <h4 style={{ color: electricPurple, fontWeight: 900, marginBottom: '30px' }}>CON NOSOTROS</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'white', lineHeight: 2.5 }}>
                <li>✓ Operativa 24/7 sin fatiga</li>
                <li>✓ Costos reducidos en un 80%</li>
                <li>✓ Escalabilidad instantánea</li>
                <li>✓ Datos 100% precisos</li>
              </ul>
            </div>
            <div style={{ background: '#000', padding: '60px' }}>
              <h4 style={{ color: '#444', fontWeight: 900, marginBottom: '30px' }}>MÉTODO ANTIGUO</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#444', lineHeight: 2.5 }}>
                <li>✗ Horarios limitados de oficina</li>
                <li>✗ Altos costos de nómina</li>
                <li>✗ Errores de proceso manuales</li>
                <li>✗ Difícil de escalar rápido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA ROI (BLANCO Y NEGRO PARA AUTORIDAD) */}
      <section id="roi" style={{ padding: '150px 20px', background: 'white', color: 'black' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '5rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.9 }}>SAVINGS<br /><span style={{ color: electricPurple }}>CALCULATOR</span></h2>
            <p style={{ margin: '30px 0', fontWeight: 700 }}>Mueve el selector según tus horas manuales actuales:</p>
            <div style={{ marginTop: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 900, marginBottom: '20px' }}>
                <span>TAREAS SEMANALES: {hours}H</span>
                <span style={{ color: electricPurple }}>TARIFA: $20/H</span>
              </div>
              <input type="range" min="5" max="160" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%' }} />
            </div>
          </div>
          <div style={{ background: '#000', color: 'white', padding: '80px 60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: electricPurple, letterSpacing: '4px' }}>AHORRO MENSUAL ESTIMADO</span>
            <div style={{ fontSize: '6rem', fontWeight: 900, fontStyle: 'italic', margin: '20px 0' }}>${savings.toLocaleString()}</div>
            <div style={{ borderTop: '1px solid #222', paddingTop: '30px', marginTop: '30px' }}>
              <span style={{ fontSize: '11px', opacity: 0.4 }}>RETORNO ANUAL PROYECTADO:</span>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: electricPurple, marginTop: '10px' }}>${yearlySavings.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (ESTILO LIMPIO) */}
      <section style={{ padding: '150px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, textAlign: 'center', marginBottom: '80px' }}>PREGUNTAS FRECUENTES</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { q: "¿Cómo se integra con mi equipo?", a: "Nuestros agentes actúan como una capa superior que se integra a tu CRM vía API, liberando a tu equipo de las tareas repetitivas." },
            { q: "¿Es seguro el manejo de datos?", a: "Absolutamente. Cumplimos con estándares de encriptación de datos y tus bases de datos nunca se comparten con terceros." }
          ].map((f, i) => (
            <div key={i} className="glass-card" style={{ padding: '40px' }}>
              <h5 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', fontWeight: 900, color: electricPurple }}>{f.q}</h5>
              <p style={{ margin: 0, color: '#777', lineHeight: 1.8 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CTA FINAL */}
      <footer id="agendar" style={{ padding: '150px 20px', textAlign: 'center', borderTop: '1px solid #111', background: '#050505' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '60px' }}>¿LISTO PARA ESCALAR?</h2>
        <a href="https://calendly.com/tu-link" style={{ backgroundColor: electricPurple, color: 'white', padding: '25px 80px', fontWeight: 900, textDecoration: 'none', letterSpacing: '3px' }} className="electric-btn">
          RESERVAR LLAMADA
        </a>
        <div style={{ marginTop: '120px', opacity: 0.2, letterSpacing: '12px', fontSize: '11px', fontWeight: 900 }}>STRATT-ON AGENCY // 2026</div>
      </footer>
    </main>
  );
}