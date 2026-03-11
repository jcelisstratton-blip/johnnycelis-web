"use client";

import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.20); 
  const savings = monthlyCost - aiCost;

  const marqueeWords = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS", "24/7 OPERATIONS"];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* CSS DE EMERGENCIA PARA ANIMACIÓN Y RESET */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        html, body { background-color: black !important; margin: 0; padding: 0; }
        a { text-decoration: none; transition: 0.3s; }
        .btn-hover:hover { background-color: white !important; color: black !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '25px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontWeight: 900, fontSize: '22px', fontStyle: 'italic', letterSpacing: '-1px' }}>JOHNNYCELIS</span>
        <div style={{ display: 'flex', gap: '30px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
          <a href="#servicios" style={{ color: 'white' }}>Services</a>
          <a href="#roi" style={{ color: 'white' }}>ROI Calculator</a>
          <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '12px 24px', borderRadius: '2px' }} className="btn-hover">Book a Call</a>
        </div>
      </nav>

      {/* HERO SECTION - CORREGIDO EL ESPACIADO */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '95vh', textAlign: 'center', padding: '180px 20px 100px 20px' }}>
        <h1 style={{ fontSize: '10vw', lineHeight: '0.85', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-5px', margin: '0 0 40px 0', fontStyle: 'italic' }}>
          Automate<br />
          <span style={{ color: '#555', fontStyle: 'normal' }}>To Elevate</span>
        </h1>
        <p style={{ maxWidth: '650px', color: '#999', fontSize: '1.2rem', fontWeight: 300, marginBottom: '60px', lineHeight: '1.6' }}>
          Build human-like AI agents that handle your operations, sales, and support while you focus on high-level strategy.
        </p>
        <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '22px 45px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', boxShadow: '0 0 40px rgba(97,45,83,0.4)' }} className="btn-hover text-white">
          Book Intro Call
        </a>
      </section>

      {/* CARRUSEL EN MOVIMIENTO (MARQUEE) */}
      <div style={{ padding: '50px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', overflow: 'hidden' }}>
        <div className="animate-marquee-infinite">
          {[1, 2, 3].map((group) => (
            <div key={group} style={{ display: 'flex', alignItems: 'center' }}>
              {marqueeWords.map((word, idx) => (
                <div key={idx} style={{ margin: '0 60px', display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <span style={{ fontSize: '45px', fontWeight: 900, opacity: 0.2, fontStyle: 'italic', textTransform: 'uppercase' }}>{word}</span>
                  <div style={{ width: '15px', height: '15px', backgroundColor: '#612D53', transform: 'rotate(45deg)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ROI CALCULATOR ($20/H) */}
      <section id="roi" style={{ padding: '150px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '75px', fontWeight: 900, textTransform: 'uppercase', lineHeight: '0.85', margin: '0 0 40px 0', fontStyle: 'italic' }}>
              Calculate<br /><span style={{ color: '#612D53', fontStyle: 'normal' }}>Your ROI</span>
            </h2>
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '13px', marginBottom: '25px', letterSpacing: '1px' }}>
                <span>Weekly Task Hours: {hours}h</span>
                <span style={{ color: '#612D53' }}>$20/HR RATE</span>
              </div>
              <input 
                type="range" min="5" max="120" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                style={{ width: '100%', height: '2px', accentColor: '#612D53', cursor: 'pointer' }}
              />
            </div>
          </div>
          <div style={{ backgroundColor: 'white', color: 'black', padding: '70px', textAlign: 'center', boxShadow: '0 0 60px rgba(97,45,83,0.1)' }}>
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#aaa', textTransform: 'uppercase', letterSpacing: '5px' }}>Monthly Potential Savings</span>
            <div style={{ fontSize: '90px', fontWeight: 900, fontStyle: 'italic', margin: '25px 0', borderBottom: '10px solid black', paddingBottom: '15px', display: 'inline-block' }}>
              ${savings.toLocaleString()}
            </div>
            <a href="#agendar" style={{ display: 'block', backgroundColor: '#612D53', color: 'white', padding: '25px', fontWeight: 900, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '30px' }} className="btn-hover text-white">
              Claim Your ROI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="agendar" style={{ padding: '120px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#050505' }}>
        <h2 style={{ fontSize: '45px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '50px', letterSpacing: '-2px' }}>Ready to Scale?</h2>
        <a href="https://calendly.com/tu-link" style={{ display: 'inline-block', backgroundColor: '#612D53', color: 'white', padding: '22px 65px', fontWeight: 900, textDecoration: 'none', letterSpacing: '2px' }} className="btn-hover text-white">
          Schedule Now
        </a>
        <div style={{ marginTop: '100px', fontSize: '11px', color: '#333', letterSpacing: '6px', textTransform: 'uppercase', fontWeight: 'bold' }}>
          STRATT-ON // ©2026 JOHNNY CELIS
        </div>
      </footer>
    </main>
  );
}