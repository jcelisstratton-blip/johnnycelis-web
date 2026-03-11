"use client";
import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20;
  const monthlyCost = hours * costPerHour * 4;
  const savings = monthlyCost * 0.80; // 80% de eficiencia

  const words = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS"];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0 }}>
      
      {/* CSS INTERNO PARA EL CARRUSEL */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-inner { display: flex; width: max-content; animation: marquee 25s linear infinite; }
        input[type="range"] { accent-color: #612D53; cursor: pointer; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}} />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.9)', borderBottom: '1px solid #222' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.2rem', color: 'white' }}>JOHNNYCELIS</span>
        <div style={{ display: 'flex', gap: '25px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none' }}>ROI</a>
          <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '10px 20px', textDecoration: 'none' }}>RESERVAR</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, margin: 0, lineHeight: 0.9, fontStyle: 'italic', textTransform: 'uppercase' }}>
          Automate<br /><span style={{ color: '#444', fontStyle: 'normal' }}>To Elevate</span>
        </h1>
        <p style={{ maxWidth: '600px', color: '#888', margin: '40px 0', fontSize: '1.1rem' }}>
          Construimos agentes de IA que manejan tus operaciones mientras tú te enfocas en la estrategia de Stratt-On Agency.
        </p>
        <a href="#agendar" style={{ background: '#612D53', color: 'white', padding: '20px 40px', fontWeight: 900, textDecoration: 'none', boxShadow: '0 0 30px rgba(97,45,83,0.4)' }}>AGENDAR LLAMADA</a>
      </section>

      {/* CARRUSEL (MARQUEE) */}
      <div style={{ padding: '40px 0', borderTop: '1px solid #222', borderBottom: '1px solid #222', background: '#0a0a0a', overflow: 'hidden' }}>
        <div className="marquee-inner">
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {words.map((w, j) => (
                <div key={j} style={{ margin: '0 40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '30px', fontWeight: 900, opacity: 0.2, textTransform: 'uppercase' }}>{w}</span>
                  <div style={{ width: '10px', height: '10px', background: '#612D53', transform: 'rotate(45deg)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CALCULADORA ROI */}
      <section id="roi" style={{ padding: '120px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase' }}>Calcula tu <span style={{ color: '#612D53' }}>ROI</span></h2>
            <div style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>HORAS SEMANALES: {hours}H ($20/HR)</p>
              <input type="range" min="5" max="120" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%' }} />
            </div>
          </div>
          <div style={{ background: 'white', color: 'black', padding: '60px', textAlign: 'center', borderRadius: '2px' }}>
            <p style={{ fontWeight: 'bold', color: '#999', margin: 0, fontSize: '12px' }}>AHORRO POTENCIAL MENSUAL</p>
            <h3 style={{ fontSize: '5rem', margin: '15px 0', fontStyle: 'italic', borderBottom: '6px solid black', display: 'inline-block' }}>${savings.toLocaleString()}</h3>
            <p style={{ fontSize: '11px', fontWeight: '900', marginTop: '10px' }}>EFICIENCIA STRATT-ON</p>
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer id="agendar" style={{ padding: '120px 20px', textAlign: 'center', borderTop: '1px solid #222', background: '#050505' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px', textTransform: 'uppercase' }}>¿Listo para escalar?</h2>
        <a href="https://calendly.com/tu-link" style={{ background: '#612D53', color: 'white', padding: '22px 60px', fontWeight: 900, textDecoration: 'none', letterSpacing: '2px' }}>RESERVAR AHORA</a>
        <div style={{ marginTop: '80px', opacity: 0.2, letterSpacing: '8px', fontSize: '10px', fontWeight: 'bold' }}>STRATT-ON AGENCY // 2026</div>
      </footer>
    </main>
  );
}