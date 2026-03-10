"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.24);
  const savings = monthlyCost - aiCost;

  const marqueeWords = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS", "24/7 OPERATIONS"];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#612D53]">
      
      {/* NAV REFORZADA */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-black/95 border-b border-white/10">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-8 items-center text-[10px] font-bold uppercase tracking-widest">
          <a href="#servicios" className="hover:text-[#612D53] transition-colors">Services</a>
          <a href="#roi" className="hover:text-[#612D53] transition-colors">ROI Calculator</a>
          <a href="#agendar" className="bg-[#612D53] text-white px-6 py-2 hover:bg-white hover:text-black transition-all">Book a Call</a>
        </div>
      </nav>

      {/* HERO - ESPACIADO CORREGIDO */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-52 pb-32 text-center min-h-screen">
        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter mb-12 italic">
          Scale Faster<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 not-italic">With AI Agents</span>
        </h1>
        <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light mb-16">
          Stop hiring for tasks that code can handle. We build custom AI Voice and Process Agents that work 24/7.
        </p>
        <a href="#agendar" 
           className="inline-block bg-[#612D53] text-white px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-all"
           style={{ boxShadow: '0 0 30px rgba(97,45,83,0.5)' }}>
          Book an Intro Call
        </a>
      </section>

      {/* CARRUSEL - MARQUEE */}
      <div className="py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center">
              {marqueeWords.map((word, idx) => (
                <div key={idx} className="mx-12 flex items-center gap-6">
                  <span className="text-3xl md:text-5xl font-black uppercase opacity-20 italic hover:text-[#612D53] hover:opacity-100 transition-all">{word}</span>
                  <div className="w-3 h-3 bg-[#612D53] rotate-45" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-6xl font-black uppercase tracking-tighter mb-20 italic">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Inbound Voice", d: "Human-like AI receptionists handling customer calls instantly." },
            { t: "Outbound Growth", d: "Automated follow-ups and lead qualification with AI voice." },
            { t: "Custom Systems", d: "Tailored n8n workflows connecting your entire CRM stack." }
          ].map((s, i) => (
            <div key={i} className="p-10 bg-[#111] border border-white/5 hover:border-[#612D53] transition-all">
              <h3 className="text-2xl font-black uppercase mb-6">{s.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULADORA ROI - $20/H */}
      <section id="roi" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-10 italic">
              Calculate<br />Your <span className="text-[#612D53] not-italic italic">ROI</span>
            </h2>
            <div className="space-y-10 max-w-md">
              <div className="flex justify-between font-bold text-[10px] uppercase tracking-widest">
                <span>Weekly Task Hours: {hours}h</span>
                <span className="text-[#612D53]">$20/HR RATE</span>
              </div>
              <input 
                type="range" min="5" max="100" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-800 appearance-none cursor-pointer accent-[#612D53]"
              />
            </div>
          </div>
          <div className="bg-white text-black p-12 md:p-20 shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4 italic">Potential Monthly Savings</span>
            <div className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none mb-10 border-b-8 border-black pb-4 uppercase">
              ${savings.toLocaleString()}
            </div>
            <a href="#agendar" className="block text-center w-full bg-[#612D53] text-white py-6 font-black uppercase hover:bg-black transition-all">
              Claim Your ROI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer id="agendar" className="py-32 border-t border-white/10 text-center px-6 bg-black">
        <h2 className="text-5xl font-black uppercase mb-12 italic tracking-tighter">Ready to Scale?</h2>
        <a href="https://calendly.com/tu-link" target="_blank" className="inline-block bg-[#612D53] text-white px-16 py-6 font-black uppercase tracking-widest hover:scale-110 transition-all mb-20">
          Book Intro Call
        </a>
        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-700">
          <span>Antioquia // Colombia</span>
          <span>©2026 Johnny Celis - Stratt-On Agency</span>
        </div>
      </footer>
    </main>
  );
}