"use client";

import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.20); // 80% ahorro
  const savings = monthlyCost - aiCost;

  const words = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS", "24/7 OPERATIONS"];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#612D53] font-sans overflow-x-hidden">
      
      {/* INYECCIÓN DE CSS DIRECTA (Para asegurar el movimiento) */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-white/5 uppercase tracking-widest text-[10px]">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-8 items-center font-bold">
          <a href="#servicios" className="hover:text-[#612D53] transition-colors text-white no-underline">Services</a>
          <a href="#testimonios" className="hover:text-[#612D53] transition-colors text-white no-underline">Testimonials</a>
          <a href="#roi" className="hover:text-[#612D53] transition-colors text-white no-underline">ROI Calculator</a>
          <a href="#agendar" className="bg-[#612D53] text-white px-6 py-2 hover:bg-white hover:text-black transition-all no-underline">Book a Call</a>
        </div>
      </nav>

      {/* HERO (Ajuste de espaciado estilo Inflate) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <h1 className="text-[13vw] md:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter mb-10 italic">
          Automate<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700 not-italic">To Elevate</span>
        </h1>
        <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light mb-16 leading-relaxed">
          Build human-like AI agents that handle your operations, sales, and support while you focus on high-level strategy.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#agendar" className="bg-[#612D53] text-white px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(97,45,83,0.3)] no-underline">
            Book an Introductory Call
          </a>
        </div>
      </section>

      {/* CARRUSEL INFINITO (Marquee Reforzado) */}
      <div className="py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-infinite flex items-center">
          {[1, 2, 3].map((group) => (
            <div key={group} className="flex items-center">
              {words.map((word, i) => (
                <div key={i} className="mx-12 flex items-center gap-6">
                  <span className="text-3xl md:text-5xl font-black uppercase opacity-20 tracking-tighter italic hover:opacity-100 hover:text-[#612D53] transition-all cursor-default">
                    {word}
                  </span>
                  <div className="w-3 h-3 bg-[#612D53] rotate-45" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICIOS (Grid tipo Inflate) */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <span className="text-[#612D53] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Proven Systems</span>
        <h2 className="text-6xl font-black uppercase tracking-tighter mb-20 italic">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Inbound AI", d: "Receptionists that sound human, answer 24/7, and book directly into your CRM." },
            { t: "Outbound AI", d: "Scalable cold outreach and lead qualification with native AI voice technology." },
            { t: "Custom n8n", d: "Advanced backend architecture to connect all your business tools seamlessly." }
          ].map((s, i) => (
            <div key={i} className="p-12 bg-white/[0.03] border border-white/5 hover:border-[#612D53]/40 transition-all group">
              <h3 className="text-2xl font-black uppercase mb-6 group-hover:text-[#612D53] transition-colors leading-tight tracking-tight text-white">{s.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10">{s.d}</p>
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-[#612D53] pb-1 cursor-pointer">Explore Service</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS (Social Proof) */}
      <section id="testimonios" className="py-32 bg-white/[0.02] border-y border-white/5 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-20 tracking-tighter italic text-white">Trusted Results</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { n: "The Luxe Week", m: "$400k+ Added", t: "The AI agents transformed our booking process entirely. Revenue is up and costs are down." },
              { n: "Jili Properties", m: "90% Automated", t: "We no longer need a massive call center. The system handles everything perfectly." },
              { n: "Northwest Physio", m: "95% Efficiency", t: "Scheduling is now 100% autonomous. Our staff is finally free from the phones." }
            ].map((test, i) => (
              <div key={i} className="p-10 border border-white/10 bg-black italic relative">
                <div className="text-[#612D53] text-4xl mb-6">"</div>
                <p className="text-gray-300 font-light mb-8 leading-relaxed italic">"{test.t}"</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-black uppercase tracking-tighter text-xl text-white">{test.n}</div>
                  <div className="text-[#612D53] text-[10px] font-bold uppercase tracking-widest mt-1">{test.m} Result</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULADORA ROI ($20/H) */}
      <section id="roi" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-10 italic">
              Calculate<br />Your <span className="text-[#612D53] not-italic italic underline decoration-gray-800">Savings</span>
            </h2>
            <div className="space-y-10 max-w-md">
              <div className="flex justify-between font-bold text-xs uppercase tracking-widest text-white">
                <span>Weekly Task Hours: {hours}h</span>
                <span className="text-[#612D53] italic">$20/HR RATE</span>
              </div>
              <input 
                type="range" min="5" max="120" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-800 rounded-none appearance-none cursor-pointer accent-[#612D53]"
              />
            </div>
          </div>
          <div className="bg-white text-black p-12 md:p-20 relative shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4 italic">Potential Monthly Savings</span>
            <div className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none mb-10 border-b-8 border-black pb-4 uppercase">
              ${savings.toLocaleString()}
            </div>
            <a href="#agendar" className="block text-center w-full bg-[#612D53] text-white py-6 font-black uppercase tracking-widest hover:bg-black transition-all no-underline">
              Claim Your ROI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER & FINAL CTA */}
      <footer id="agendar" className="py-20 border-t border-white/5 text-center bg-black">
        <div className="text-[10vw] font-black opacity-[0.03] leading-none mb-10 select-none tracking-[0.2em] uppercase">STRATT-ON</div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-600 px-6">
          <span>Antioquia // Colombia</span>
          <div className="flex gap-8 text-white font-bold my-8 md:my-0 uppercase">
            <a href="#" className="hover:text-[#612D53] no-underline">LinkedIn</a>
            <a href="#" className="hover:text-[#612D53] no-underline">X</a>
          </div>
          <span>©2026 Johnny Celis</span>
        </div>
      </footer>
    </main>
  );
}