"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* CSS PURO INYECTADO (A prueba de fallos de Tailwind) */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #000 !important; color: #fff; }
        html { scroll-behavior: smooth; }
        .glass-panel { background: rgba(255,255,255,0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s ease; padding: 50px; }
        .glass-panel:hover { border-color: ${electricPurple}; background: rgba(157,0,255,0.05); transform: translateY(-5px); }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: all 0.3s ease; display: inline-block; border: none; cursor: pointer; text-align: center; }
        .btn-glow:hover { box-shadow: 0 0 40px rgba(157,0,255,0.6); transform: scale(1.05); background-color: white !important; color: black !important; }
        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1px; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 35s linear infinite; }
        input[type="range"] { accent-color: ${electricPurple}; cursor: pointer; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}} />

      {/* --- NAVEGACIÓN --- */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, transition: 'all 0.4s', padding: scrolled ? '15px 5%' : '30px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '-1px' }}>STRATT-ON</span>
        <div className="desktop-nav" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#sistemas" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Sistemas</a>
          <a href="#resultados" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Resultados</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>ROI</a>
        </div>
        <a href="#agendar" className="btn-glow" style={{ padding: '12px 24px', fontSize: '10px' }}>Book a Call</a>
      </nav>

      {/* --- HERO --- */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px 50px', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2, opacity: 0.3 }}>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85), #000)', zIndex: -1 }} />

        <h1 style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.85, margin: '0 0 30px 0', letterSpacing: '-2px' }}>
          Automate<br /><span style={{ color: '#666', fontStyle: 'normal' }}>To Elevate</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 50px', color: '#aaa', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Construimos <strong style={{ color: 'white', borderBottom: `2px solid ${electricPurple}` }}>Agentes de Voz e IA</strong> que transforman Stratt-On Agency en una maquinaria de ingresos autónoma y escalable.
        </p>
        <a href="#agendar" className="btn-glow">Auditoría Estratégica</a>
      </section>

      {/* --- MARQUEE --- */}
      <div style={{ padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#030303', overflow: 'hidden', display: 'flex' }}>
        <div className="animate-marquee">
          {[1, 2, 3, 4].map(g => (
            <div key={g} style={{ display: 'flex', alignItems: 'center' }}>
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "SCALABLE SYSTEMS", "ROI DRIVEN"].map((w, i) => (
                <div key={i} style={{ margin: '0 50px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#222', fontStyle: 'italic', textTransform: 'uppercase' }}>{w}</span>
                  <div style={{ width: '12px', height: '12px', background: electricPurple, transform: 'rotate(45deg)', boxShadow: `0 0 15px ${electricPurple}` }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- SISTEMAS --- */}
      <section id="sistemas" style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: electricPurple, fontSize: '10px', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>Ingeniería de Crecimiento</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>Nuestros Sistemas</h2>
        </div>
        <div className="grid-3">
          {[
            { t: "Inbound IA", d: "Agentes telefónicos 24/7 que atienden, filtran y agendan llamadas directamente en tu calendario con cero fricción." },
            { t: "Outbound Growth", d: "Clonación de voz y alcance masivo para prospección en frío. Multiplica tus puntos de contacto sin contratar SDRs." },
            { t: "n8n Architecture", d: "Diseño de backend y automatización de flujos de trabajo que conectan tu CRM y bases de datos de forma invisible." }
          ].map((s, i) => (
            <div key={i} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '350px' }}>
              <div>
                <span style={{ color: electricPurple, fontWeight: 900, fontSize: '12px', letterSpacing: '2px', display: 'block', marginBottom: '30px' }}>0{i+1}</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 20px 0' }}>{s.t}</h3>
                <p style={{ color: '#aaa', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARATIVA --- */}
      <section style={{ padding: '100px 20px', background: '#030303', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, textAlign: 'center', textTransform: 'uppercase', fontStyle: 'italic', marginBottom: '60px', margin: '0 0 60px 0' }}>El Nuevo Estándar</h2>
          <div className="grid-2" style={{ background: 'rgba(255,255,255,0.1)', padding: '1px' }}>
            <div style={{ background: '#000', padding: '60px 40px' }}>
              <h4 style={{ color: electricPurple, fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase', margin: '0 0 40px 0' }}>Stratt-On Agency</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', lineHeight: 2, fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Operativa ininterrumpida 24/7/365</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Escalabilidad inmediata sin entrevistas</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Reducción de costos operativos hasta 80%</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: electricPurple, fontWeight: 'bold' }}>✓</span> Ejecución de procesos con 100% de precisión</li>
              </ul>
            </div>
            <div style={{ background: '#0a0a0a', padding: '60px 40px' }}>
              <h4 style={{ color: '#666', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase', margin: '0 0 40px 0' }}>Modelo Tradicional</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#666', lineHeight: 2, fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: '#8b0000', fontWeight: 'bold' }}>✗</span> Horarios limitados de oficina y bajas</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: '#8b0000', fontWeight: 'bold' }}>✗</span> Procesos lentos de reclutamiento</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: '#8b0000', fontWeight: 'bold' }}>✗</span> Altos costos fijos de nómina</li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}><span style={{ color: '#8b0000', fontWeight: 'bold' }}>✗</span> Errores humanos inevitables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTADOS --- */}
      <section id="resultados" style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', margin: '0 0 80px 0' }}>Resultados</h2>
        <div className="grid-3">
          {[
            { n: "The Luxe Week", m: "+$400k MRR", t: "Implementamos agentes de voz para procesar reservas globales. Eliminamos el cuello de botella en atención al instante." },
            { n: "Jili Properties", m: "90% Automatizado", t: "El flujo de llamadas de mantenimiento e inquilinos ahora es filtrado y documentado 100% por nuestra IA." },
            { n: "Northwest Physio", m: "Eficiencia Total", t: "Agendamiento de pacientes completamente autónomo. El staff médico se enfoca solo en la clínica." }
          ].map((test, i) => (
            <div key={i} className="glass-panel" style={{ borderTop: `4px solid ${electricPurple}` }}>
              <p style={{ color: '#aaa', fontStyle: 'italic', marginBottom: '30px', lineHeight: 1.6, fontSize: '1.1rem' }}>"{test.t}"</p>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 10px 0' }}>{test.n}</h4>
              <span style={{ color: electricPurple, fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Impacto: {test.m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- ROI CALCULATOR --- */}
      <section id="roi" style={{ padding: '120px 20px', background: 'white', color: 'black' }}>
        <div className="grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.9, textTransform: 'uppercase', margin: '0 0 50px 0' }}>Calcula tu<br /><span style={{ color: electricPurple }}>Libertad</span></h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', marginBottom: '20px' }}>
              <span>Horas operativas: {hours}H / Sem</span>
              <span style={{ color: electricPurple }}>Tarifa: $20/HR</span>
            </div>
            <input type="range" min="10" max="200" step="5" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%', height: '8px', background: '#e5e5e5', outline: 'none' }} />
            <p style={{ color: '#666', fontSize: '14px', marginTop: '20px' }}>Ajusta el control deslizante según el volumen de tareas manuales de tu equipo.</p>
          </div>
          <div style={{ background: '#000', color: 'white', padding: '60px 40px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#888', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>Potencial Mensual</span>
            <div style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 900, fontStyle: 'italic', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '30px', margin: '0 0 30px 0' }}>
              ${savings.toLocaleString()}
            </div>
            <span style={{ fontSize: '11px', color: electricPurple, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>Retorno Anual Proyectado:</span>
            <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>${yearlySavings.toLocaleString()} USD</div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section style={{ padding: '120px 20px', background: '#030303' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', margin: '0 0 60px 0' }}>Dudas Comunes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: '100%', padding: '30px', background: 'none', border: 'none', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left' }}>
                  {f.q}
                  <span style={{ color: electricPurple, fontSize: '1.5rem', transform: faqOpen === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={{ padding: '0 30px 30px', color: '#aaa', lineHeight: 1.6 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="agendar" style={{ padding: '150px 20px', textAlign: 'center', background: '#000', borderTop: `1px solid rgba(157,0,255,0.2)` }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: '0 0 60px 0' }}>Scale Faster.</h2>
        <a href="https://calendly.com/tu-link" className="btn-glow">Agendar Sesión Estratégica</a>
        <div style={{ marginTop: '150px', opacity: 0.3, fontSize: '10px', fontWeight: 900, letterSpacing: '8px', textTransform: 'uppercase' }}>
          Stratt-On Agency // 2026
        </div>
      </footer>
    </main>
  );
}