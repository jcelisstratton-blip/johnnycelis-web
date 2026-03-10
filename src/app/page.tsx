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
    <main className="min-h-screen bg-black text-white selection:bg-[#612D53] font-sans overflow-x-hidden">
      
      {/* --- NAV (Z-index alto para que no lo tape nada) --- */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-white/5 uppercase tracking-widest text-[10px]">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-8 items-center font-bold text-white">
          <a href="#servicios" className="hover:text-[#612D53] transition-colors">Services</a>
          <a href="#testimonios" className="hover:text-[#612D53] transition-colors">Case Studies</a>
          <a href="#roi" className="hover:text-[#612D53] transition-colors">ROI Calculator</a>
          <a href="#agendar" className="bg-white text-black px-6 py-2 hover:bg-[#612D53] hover:text-white transition-all">Book a Call</a>
        </div>
      </nav>

      {/* --- HERO (Ajustado para no cortar el título) --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <h1 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 italic">
          Scale Faster<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 not-italic">With AI Agents</span>
        </h1>
        <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light mb-12">
          Stop hiring for tasks that code can handle. We build custom AI Voice and Process Agents that work 24/7.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#agendar" className="bg-[#612D53] text-white px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(97,45,83,0.3)] text-center">
            Book an Intro Call
          </a>
          <a href="#servicios" className="border border-white/20 px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
            View Case Studies
          </a>
        </div>
      </section>

      {/* --- CARRUSEL (Marquee corregido) --- */}
      <div className="py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          {/* Duplicado 4 veces para asegurar flujo infinito sin huecos */}
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center">
              {marqueeWords.map((word, i) => (
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

      {/* --- SERVICES --- */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <span className="text-[#612D53] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Tailored for your business</span>
        <h2 className="text-6xl font-black uppercase tracking-tighter mb-20 italic">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Inbound Voice", d: "Human-like AI receptionists handling customer calls and booking appointments instantly." },
            { t: "Outbound Growth", d: "Automated follow-ups and lead qualification with native AI voice technology." },
            { t: "Custom Systems", d: "Tailored n8n workflows connecting your entire CRM and operational stack." }
          ].map((s, i) => (
            <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 hover:border-[#612D53]/50 transition-all relative">
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight group-hover:text-[#612D53] transition-colors">{s.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10">{s.d}</p>
              <span className="inline-block border-b-2 border-[#612D53] pb-1 text-[10px] font-black uppercase tracking-widest">Learn More</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonios" className="py-32 bg-white/[0.02] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-20 tracking-tighter italic text-center text-white">Trusted Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "The Luxe Week", m: "$400k+ Added", t: "The AI agents transformed our booking process entirely. Revenue is up and costs are down." },
              { n: "Jili Properties", m: "90% Automated", t: "We no longer need a massive call center. The system handles everything perfectly." },
              { n: "Northwest Physio", m: "95% Efficiency", t: "Scheduling is now 100% autonomous. Our staff is finally free from the phones." }
            ].map((test, i) => (
              <div key={i} className="p-10 border border-white/10 bg-black italic">
                <div className="text-[#612D53] text-4xl mb-6">"</div>
                <p className="text-gray-300 font-light mb-8 leading-relaxed">"{test.t}"</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-black uppercase tracking-tighter text-xl">{test.n}</div>
                  <div className="text-[#612D53] text-[10px] font-bold uppercase tracking-widest mt-1">{test.m} Result</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROI CALCULATOR ($20 USD/h) --- */}
      <section id="roi" className="py-40 px-6 max-w-7xl mx-auto text-white">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-10 italic">
              Calculate<br />Your <span className="text-[#612D53] not-italic italic underline decoration-gray-800">ROI</span>
            </h2>
            <div className="space-y-10 max-w-md">
              <div className="flex justify-between font-bold text-xs uppercase tracking-widest">
                <span>Weekly Task Hours: {hours}h</span>
                <span className="text-[#612D53]">$20/HR RATE</span>
              </div>
              <input 
                type="range" min="5" max="100" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-800 rounded-none appearance-none cursor-pointer accent-[#612D53]"
              />
            </div>
          </div>
          <div className="bg-white text-black p-12 md:p-20 relative shadow-[0_0_50px_rgba(97,45,83,0.15)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4 italic">Potential Monthly Savings</span>
            <div className="text-8xl font-black italic tracking-tighter leading-none mb-10 border-b-8 border-black pb-4 uppercase">
              ${savings.toLocaleString()}
            </div>
            <a href="#agendar" className="block text-center w-full bg-[#612D53] text-white py-6 font-black uppercase tracking-widest hover:bg-black transition-all">
              Claim Your ROI
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="agendar" className="py-32 border-t border-white/5 text-center px-6">
        <h2 className="text-5xl font-black uppercase mb-10 italic tracking-tighter">Ready to Scale?</h2>
        <a href="https://calendly.com/tu-link" target="_blank" className="inline-block bg-[#612D53] text-white px-16 py-6 font-black uppercase tracking-widest hover:scale-110 transition-all mb-20">
          Book Intro Call
        </a>
        <div className="text-[12vw] font-black opacity-[0.03] leading-none mb-10 select-none tracking-[0.1em] uppercase">Stratt-on</div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-600 gap-8">
          <span>Antioquia // Col</span>
          <div className="space-x-10 text-white font-bold">
            <a href="#" className="hover:text-[#612D53]">LinkedIn</a>
            <a href="#" className="hover:text-[#612D53]">X</a>
          </div>
          <span>©2026 Johnny Celis</span>
        </div>
      </footer>
    </main>
  );
}