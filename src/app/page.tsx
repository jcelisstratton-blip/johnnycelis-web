"use client";

import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.20); 
  const savings = monthlyCost - aiCost;

  const words = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS", "24/7 OPERATIONS"];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* ANIMACIÓN INYECTADA */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        html, body { background-color: black !important; margin: 0; padding: 0; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '25px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.9)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontWeight: 900, fontSize: '22px', fontStyle: 'italic', letterSpacing: '-1px' }}>JOHNNYCELIS</span>
        <div style={{ display: 'flex', gap: '30px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none' }}>ROI Calculator</a>
          <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '12px 24px', textDecoration: 'none' }}>Book a Call</a>
        </div>
      </nav>

      {/* HERO SECTION - SIN CORTES */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center', padding: '180px 20px 100px 20px' }}>
        <h1 style={{ fontSize: '10vw', lineHeight: '0.85', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-4px', margin: '0 0 40px 0', fontStyle: 'italic' }}>
          Scale Faster<br />
          <span style={{ color: '#444', fontStyle: 'normal' }}>With AI Agents</span>
        </h1>
        <p style={{ maxWidth: '650px', color: '#888', fontSize: '1.2rem', fontWeight: 300, marginBottom: '60px', lineHeight: '1.6' }}>
          Stop hiring for tasks that code can handle. We build custom AI Voice and Process Agents that work 24/7.
        </p>
        <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '22px 45px', fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '2px', boxShadow: '0 0 40px rgba(97,45,83,0.4)' }}>
          Book Intro Call
        </a>
      </section>

      {/* MARQUEE EN MOVIMIENTO */}
      <div style={{ padding: '50px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', overflow: 'hidden' }}>
        <div className="animate-marquee">
          {[1, 2, 3].map((g) => (
            <div key={g} style={{ display: 'flex', alignItems: 'center' }}>
              {words.map((w, i) => (
                <div key={i} style={{ margin: '0 60px', display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <span style={{ fontSize: '45px', fontWeight: 900, opacity: 0.2, fontStyle: 'italic' }}>{w}</span>
                  <div style={{ width: '15px', height: '15px', backgroundColor: '#612D53', transform: 'rotate(45deg)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CALCULADORA ROI ($20/H) */}
      <section id="roi" style={{ padding: '150px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '70px', fontWeight: 900, textTransform: 'uppercase', lineHeight: '0.85', margin: '0 0 40px 0', fontStyle: 'italic' }}>
              Calculate<br /><span style={{ color: '#612D53', fontStyle: 'normal' }}>Your ROI</span>
            </h2>
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '13px', marginBottom: '25px' }}>
                <span>Weekly Task Hours: {hours}h</span>
                <span style={{ color: '#612D53' }}>$20/HR RATE</span>
              </div>
              <input 
                type="range" min="5" max="100" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#612D53', cursor: 'pointer' }}
              />
            </div>
          </div>
          <div style={{ backgroundColor: 'white', color: 'black', padding: '70px', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#aaa', textTransform: 'uppercase', letterSpacing: '4px' }}>Monthly Potential Savings</span>
            <div style={{ fontSize: '90px', fontWeight: 900, fontStyle: 'italic', margin: '25px 0', borderBottom: '10px solid black', paddingBottom: '15px', display: 'inline-block' }}>
              ${savings.toLocaleString()}
            </div>
            <a href="#agendar" style={{ display: 'block', backgroundColor: '#612D53', color: 'white', padding: '25px', fontWeight: 900, textDecoration: 'none', textTransform: 'uppercase' }}>
              Claim Your ROI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="agendar" style={{ padding: '120px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '50px' }}>Ready to Scale?</h2>
        <a href="https://calendly.com/tu-link" style={{ display: 'inline-block', backgroundColor: '#612D53', color: 'white', padding: '22px 65px', fontWeight: 900, textDecoration: 'none' }}>
          Book Intro Call
        </a>
        <div style={{ marginTop: '100px', fontSize: '11px', color: '#444', letterSpacing: '5px' }}>
          STRATT-ON // ©2026 JOHNNY CELIS
        </div>
      </footer>
    </main>
  );
}