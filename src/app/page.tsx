"use client";
import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const savings = monthlyCost * 0.80; // 80% ahorro
  const yearlySavings = savings * 12;

  const electricPurple = "#9D00FF";
  const words = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS"];
  
  const faqs = [
    { q: "¿Se nota que es una IA?", a: "Nuestros agentes utilizan modelos de lenguaje avanzados y voces clonadas de alta fidelidad que mantienen una fluidez casi humana." },
    { q: "¿Se integra con mi CRM?", a: "Sí. Construimos sobre n8n para conectar los agentes directamente con Salesforce, HubSpot, Pipedrive o cualquier sistema vía API." },
    { q: "¿Cuánto tiempo toma la implementación?", a: "Un sistema estándar se despliega en 2 a 3 semanas, incluyendo la fase de entrenamiento y pruebas." }
  ];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, overflowX: 'hidden' }}>
      
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 20s linear infinite; }
        .electric-btn:hover { background-color: white !important; color: black !important; box-shadow: 0 0 30px ${electricPurple} !important; }
        input[type="range"] { accent-color: ${electricPurple}; cursor: pointer; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: `1px solid ${electricPurple}33` }}>
        <span style={{ fontWeight: 900, fontSize: '1.2rem', fontStyle: 'italic' }}>JOHNNYCELIS</span>
        <div style={{ display: 'flex', gap: '25px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>
          <a href="#servicios" style={{ color: 'white', textDecoration: 'none' }}>SERVICIOS</a>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none' }}>ROI</a>
          <a href="#agendar" style={{ backgroundColor: electricPurple, color: 'white', padding: '10px 20px', textDecoration: 'none', boxShadow: `0 0 15px ${electricPurple}44` }} className="electric-btn">BOOK A CALL</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '95vh', textAlign: 'center', padding: '150px 20px 50px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 11vw, 9rem)', lineHeight: '0.85', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-4px', margin: 0, fontStyle: 'italic' }}>
          Automate<br />
          <span style={{ color: '#333', fontStyle: 'normal' }}>To Elevate</span>
        </h1>
        <p style={{ maxWidth: '600px', color: '#888', fontSize: '1.1rem', margin: '40px 0', lineHeight: '1.6' }}>
          Escalamos Stratt-On Agency mediante agentes de voz IA y procesos autónomos. Eficiencia de élite para negocios de alto nivel.
        </p>
        <a href="#agendar" style={{ backgroundColor: electricPurple, color: 'white', padding: '20px 45px', fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 0 40px ${electricPurple}33` }} className="electric-btn">
          BOOK INTRO CALL
        </a>
      </section>

      {/* MARQUEE */}
      <div style={{ padding: '40px 0', borderTop: '1px solid #222', borderBottom: '1px solid #222', background: `${electricPurple}05`, overflow: 'hidden' }}>
        <div className="animate-marquee">
          {[1, 2, 3].map(g => (
            <div key={g} style={{ display: 'flex', alignItems: 'center' }}>
              {words.map((w, i) => (
                <div key={i} style={{ margin: '0 50px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '35px', fontWeight: 900, opacity: 0.15 }}>{w}</span>
                  <div style={{ width: '10px', height: '10px', backgroundColor: electricPurple, transform: 'rotate(45deg)', boxShadow: `0 0 10px ${electricPurple}` }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '60px' }}>OUR SERVICES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { t: "Inbound AI", d: "Recepcionistas que suenan humanas, atienden 24/7 y agendan en tu CRM." },
            { t: "Outbound AI", d: "Prospección a escala y calificación de leads con tecnología de voz nativa." },
            { t: "Custom n8n", d: "Arquitectura backend avanzada para conectar todas tus herramientas." }
          ].map((s, i) => (
            <div key={i} style={{ padding: '50px', background: '#080808', border: '1px solid #111' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: electricPurple, marginBottom: '20px' }}>{s.t}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.9rem' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI CALCULATOR UNIFICADA */}
      <section id="roi" style={{ padding: '120px 20px', background: '#050505' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.9 }}>CALCULATE<br /><span style={{ color: electricPurple }}>YOUR ROI</span></h2>
            <div style={{ marginTop: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>
                <span>HORAS SEMANALES: {hours}H</span>
                <span style={{ color: electricPurple }}>$20/HR</span>
              </div>
              <input type="range" min="5" max="120" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%' }} />
            </div>
          </div>
          <div style={{ background: 'white', color: 'black', padding: '60px', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#999', letterSpacing: '3px' }}>MONTHLY SAVINGS</span>
            <div style={{ fontSize: '5rem', fontWeight: 900, fontStyle: 'italic', margin: '15px 0', borderBottom: '6px solid black', display: 'inline-block' }}>${savings.toLocaleString()}</div>
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '10px', fontWeight: 900, color: electricPurple }}>AHORRO ANUAL PROYECTADO:</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>${yearlySavings.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '50px' }}>COMMON QUESTIONS</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ border: '1px solid #222', background: '#080808' }}>
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', padding: '25px', background: 'none', border: 'none', color: 'white', textAlign: 'left', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
              >
                {f.q} <span style={{ color: electricPurple }}>{openFaq === i ? '-' : '+'}</span>
              </button>
              {openFaq === i && <div style={{ padding: '0 25px 25px', color: '#777', fontSize: '0.9rem', lineHeight: '1.6' }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="agendar" style={{ padding: '100px 20px', textAlign: 'center', borderTop: '1px solid #111' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px' }}>READY TO SCALE?</h2>
        <a href="https://calendly.com/tu-link" style={{ backgroundColor: electricPurple, color: 'white', padding: '20px 60px', fontWeight: 900, textDecoration: 'none' }} className="electric-btn">SCHEDULE NOW</a>
        <div style={{ marginTop: '100px', opacity: 0.1, letterSpacing: '10px', fontSize: '10px' }}>STRATT-ON // 2026</div>
      </footer>
    </main>
  );
}