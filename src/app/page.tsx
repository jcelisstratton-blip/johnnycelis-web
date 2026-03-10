"use client";

import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.24);
  const savings = monthlyCost - aiCost;

  const marqueeWords = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS", "24/7 OPERATIONS"];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* CSS INYECTADO PARA EL MOVIMIENTO */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        html, body { background: black; margin: 0; padding: 0; }
        * { box-sizing: border-box; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.9)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontWeight: 900, fontSize: '20px', letterSpacing: '-1px', fontStyle: 'italic' }}>JOHNNYCELIS</span>
        <div style={{ display: 'flex', gap: '30px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
          <a href="#roi" style={{ color: 'white', textDecoration: 'none' }}>ROI Calculator</a>
          <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '10px 20px', textDecoration: 'none' }}>Book a Call</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '150px 20px 100px 20px' }}>
        <h1 style={{ fontSize: '10vw', lineHeight: '0.85', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-5px', margin: '0 0 40px 0', fontStyle: 'italic' }}>
          Scale Faster<br />
          <span style={{ color: '#444', fontStyle: 'normal' }}>With AI Agents</span>
        </h1>
        <p style={{ maxWidth: '600px', color: '#888', fontSize: '18px', fontWeight: 300, marginBottom: '50px', lineHeight: '1.6' }}>
          Stop hiring for tasks that code can handle. We build custom AI Voice and Process Agents that work 24/7.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#agendar" style={{ backgroundColor: '#612D53', color: 'white', padding: '20px 40px', fontWeight: 900, textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '2px', boxShadow: '0 0 30px rgba(97,45,83,0.4)' }}>
            Book Intro Call
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', overflow: 'hidden' }}>
        <div className="animate-marquee">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} style={{ display: 'flex', alignItems: 'center' }}>
              {marqueeWords.map((word, idx) => (
                <div key={idx} style={{ margin: '0 50px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '40px', fontWeight: 900, opacity: 0.2, fontStyle: 'italic', textTransform: 'uppercase' }}>{word}</span>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#612D53', transform: 'rotate(45deg)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ROI CALCULATOR */}
      <section id="roi" style={{ padding: '150px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '70px', fontWeight: 900, textTransform: 'uppercase', lineHeight: '0.85', margin: '0 0 40px 0', fontStyle: 'italic' }}>
              Calculate<br /><span style={{ color: '#612D53', fontStyle: 'normal' }}>Your ROI</span>
            </h2>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '12px', marginBottom: '20px' }}>
                <span>Weekly Task Hours: {hours}h</span>
                <span style={{ color: '#612D53' }}>$20/HR RATE</span>
              </div>
              <input 
                type="range" min="5" max="100" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#612D53' }}
              />
            </div>
          </div>
          <div style={{ backgroundColor: 'white', color: 'black', padding: '60px', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#888', textTransform: 'uppercase', letterSpacing: '4px' }}>Monthly Potential Savings</span>
            <div style={{ fontSize: '80px', fontWeight: 900, fontStyle: 'italic', margin: '20px 0', borderBottom: '8px solid black', paddingBottom: '10px' }}>
              ${savings.toLocaleString()}
            </div>
            <a href="#agendar" style={{ display: 'block', backgroundColor: '#612D53', color: 'white', padding: '20px', fontWeight: 900, textDecoration: 'none', textTransform: 'uppercase' }}>
              Claim Your ROI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="agendar" style={{ padding: '100px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '40px' }}>Ready to Scale?</h2>
        <a href="https://calendly.com/tu-link" style={{ display: 'inline-block', backgroundColor: '#612D53', color: 'white', padding: '20px 60px', fontWeight: 900, textDecoration: 'none' }}>
          Book Intro Call
        </a>
        <div style={{ marginTop: '80px', fontSize: '10px', color: '#444', letterSpacing: '5px', textTransform: 'uppercase' }}>
          ©2026 Johnny Celis - Stratt-On Agency
        </div>
      </footer>
    </main>
  );
}