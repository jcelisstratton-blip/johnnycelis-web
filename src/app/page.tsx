"use client";
import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const savings = monthlyCost * 0.80; 
  const yearlySavings = savings * 12;

  const electricPurple = "#9D00FF";
  const words = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS"];
  
  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 25s linear infinite; }
        .electric-btn:hover { background-color: white !important; color: black !important; box-shadow: 0 0 30px ${electricPurple} !important; transform: scale(1.05); }
        input[type="range"] { accent-color: ${electricPurple}; cursor: pointer; }
        .card:hover { border-color: ${electricPurple} !important; background: rgba(157, 0, 255, 0.05) !important; }
        html { scroll-behavior: smooth; }
        a { transition: 0.3s; }
      `}} />

      {/* --- NAV --- */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: `1px solid ${electricPurple}33` }}>
        <span style={{ fontWeight: 900, fontSize: '1.2rem', fontStyle: 'italic' }}>STRATT-ON</span>
        <div style={{ display: 'flex', gap: '25px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>
          <a href="#servicios" style={{ color: 'white', textDecoration: 'none' }}>SERVICES</a>
          <a href="#casos" style={{ color: 'white', textDecoration: 'none' }}>RESULTS</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none' }}>ROI</a>
          <a href="#agendar" style={{ backgroundColor: electricPurple, color: 'white', padding: '10px 20px', textDecoration: 'none', boxShadow: `0 0 15px ${electricPurple}44` }} className="electric-btn">BOOK A CALL</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '150px 20px 50px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 11vw, 9rem)', lineHeight: '0.85', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-4px', margin: 0, fontStyle: 'italic' }}>
          Automate<br /><span style={{ color: '#333', fontStyle: 'normal' }}>To Elevate</span>
        </h1>
        <p style={{ maxWidth: '600px', color: '#888', fontSize: '1.1rem', margin: '40px 0', lineHeight: '1.6' }}>
          Implementamos agentes de IA de élite que manejan tu operativa 24/7. Escala Stratt-On Agency sin aumentar tu nómina.
        </p>
        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' as any }}>
          <a href="#agendar" style={{ backgroundColor: electricPurple, color: 'white', padding: '20px 45px', fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none' }} className="electric-btn">RESERVAR LLAMADA</a>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div style={{ padding: '30px 0', borderTop: '1px solid #222', borderBottom: '1px solid #222', background: '#050505', overflow: 'hidden' }}>
        <div className="animate-marquee">
          {[1, 2, 3].map(g => (
            <div key={g} style={{ display: 'flex', alignItems: 'center' }}>
              {words.map((w, i) => (
                <div key={i} style={{ margin: '0 50px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '30px', fontWeight: 900, opacity: 0.15 }}>{w}</span>
                  <div style={{ width: '8px', height: '8px', backgroundColor: electricPurple, transform: 'rotate(45deg)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- SERVICIOS --- */}
      <section id="servicios" style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '60px' }}>SERVICES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { t: "Inbound AI Agents", d: "Sustituye recepcionistas por agentes de voz que atienden, califican y agendan 24/7." },
            { t: "Outbound Growth", d: "Prospección masiva con voces humanas clonadas para cierre de leads." },
            { t: "Process Architecture", d: "Automatización total de flujos de trabajo en n8n y herramientas de gestión." }
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '50px', border: '1px solid #111', transition: '0.3s' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: electricPurple, marginBottom: '20px' }}>{s.t}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARATIVA (THE STRATT-ON DIFFERENCE) --- */}
      <section style={{ padding: '120px 20px', background: '#050505' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>STRATT-ON VS. TRADICIONAL</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: '#222' }}>
            <div style={{ background: '#000', padding: '40px' }}>
              <h4 style={{ color: electricPurple, fontWeight: 900 }}>STRATT-ON AGENCY</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', fontSize: '14px' }}>
                <li style={{ margin: '15px 0' }}>✓ Disponibilidad 24/7 sin descansos</li>
                <li style={{ margin: '15px 0' }}>✓ Escalabilidad infinita e inmediata</li>
                <li style={{ margin: '15px 0' }}>✓ Costo reducido en un 80%</li>
                <li style={{ margin: '15px 0' }}>✓ Cero error humano en data entry</li>
              </ul>
            </div>
            <div style={{ background: '#000', padding: '40px' }}>
              <h4 style={{ color: '#444', fontWeight: 900 }}>AGENCIAS / STAFF</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#444', fontSize: '14px' }}>
                <li style={{ margin: '15px 0' }}>✗ Horarios limitados de oficina</li>
                <li style={{ margin: '15px 0' }}>✗ Costos altos de contratación/prestaciones</li>
                <li style={{ margin: '15px 0' }}>✗ Errores manuales constantes</li>
                <li style={{ margin: '15px 0' }}>✗ Difícil de escalar rápido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS & CASE STUDIES --- */}
      <section id="casos" style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '60px' }}>CLIENT RESULTS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { n: "The Luxe Week", m: "+$400k Mensuales", t: "Implementamos agentes de voz para reservas globales, eliminando el cuello de botella." },
            { n: "Jili Properties", m: "90% Automatizado", t: "Todas las llamadas de mantenimiento ahora son filtradas y procesadas por IA." },
            { n: "Northwest Physio", m: "Eficiencia Total", t: "Agendamiento 100% autónomo. El staff ahora se enfoca solo en pacientes." }
          ].map((test, i) => (
            <div key={i} style={{ padding: '40px', borderLeft: `4px solid ${electricPurple}`, background: '#080808' }}>
              <p style={{ fontStyle: 'italic', color: '#888', marginBottom: '30px' }}>"{test.t}"</p>
              <h4 style={{ margin: 0, fontWeight: 900 }}>{test.n}</h4>
              <span style={{ fontSize: '12px', color: electricPurple, fontWeight: 'bold' }}>RESULTADO: {test.m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- ROI CALCULATOR --- */}
      <section id="roi" style={{ padding: '120px 20px', background: 'white', color: 'black' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.9 }}>CALCULATE<br /><span style={{ color: electricPurple }}>YOUR SAVINGS</span></h2>
            <div style={{ marginTop: '50px' }}>
              <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>HORAS TAREAS MANUALES: {hours}H / SEMANA</p>
              <input type="range" min="5" max="150" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%' }} />
            </div>
          </div>
          <div style={{ background: '#000', color: 'white', padding: '60px', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
            <span style={{ fontSize: '10px', fontWeight: 900, color: electricPurple, letterSpacing: '3px' }}>AHORRO MENSUAL</span>
            <div style={{ fontSize: '5rem', fontWeight: 900, fontStyle: 'italic', margin: '15px 0' }}>${savings.toLocaleString()}</div>
            <div style={{ borderTop: '1px solid #222', paddingTop: '20px', marginTop: '20px' }}>
              <span style={{ fontSize: '10px', opacity: 0.5 }}>AHORRO ANUAL PROYECTADO:</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: electricPurple }}>${yearlySavings.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '50px' }}>QUESTIONS</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { q: "¿Es difícil integrarlo?", a: "No. Nosotros nos encargamos de toda la arquitectura n8n para que se conecte a tus herramientas actuales vía API." },
            { q: "¿La IA habla español perfecto?", a: "Sí. Utilizamos modelos de lenguaje optimizados para el español de diferentes regiones con acentos naturales." }
          ].map((f, i) => (
            <div key={i} style={{ border: '1px solid #111', background: '#080808', padding: '30px' }}>
              <h5 style={{ margin: '0 0 15px 0', color: electricPurple, fontWeight: 900 }}>{f.q}</h5>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="agendar" style={{ padding: '120px 20px', textAlign: 'center', borderTop: '1px solid #111' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px' }}>READY TO SCALE?</h2>
        <a href="https://calendly.com/tu-link" style={{ backgroundColor: electricPurple, color: 'white', padding: '20px 60px', fontWeight: 900, textDecoration: 'none' }} className="electric-btn text-white">SCHEDULE CALL</a>
        <div style={{ marginTop: '100px', opacity: 0.1, letterSpacing: '10px', fontSize: '10px' }}>STRATT-ON AGENCY // 2026</div>
      </footer>
    </main>
  );
}