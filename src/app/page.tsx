"use client";

import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 20; 
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.20); // Ahorro del 80%
  const savings = monthlyCost - aiCost;

  const marqueeWords = ["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SCALABLE SYSTEMS", "24/7 OPERATIONS"];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#612D53] font-sans overflow-x-hidden">
      
      {/* CSS INYECTADO PARA MOVIMIENTO GARANTIZADO */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-white/5 uppercase tracking-widest text-[10px]">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-8 items-center font-bold">
          <a href="#servicios" className="hover:text-[#612D53] transition-colors">Services</a>
          <a href="#testimonios" className="hover:text-[#612D53] transition-colors">Testimonials</a>
          <a href="#roi" className="hover:text-[#612D53] transition-colors">ROI Calculator</a>
          <a href="#agendar" className="bg-[#612D53] text-white px-6 py-2 hover:bg-white hover:text-black transition-all">Book a Call</a>
        </div>
      </nav>

      {/* --- HERO (Ajuste de espaciado y títulos) --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center">
        <h1 className="text-[14vw] md:text-[9vw] leading-[0.8] font-black uppercase tracking-tighter mb-10 italic">
          Automate<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700 not-italic">To Elevate</span>
        </h1>
        <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light mb-12">
          Build human-like AI agents that handle your operations, sales, and support while you focus on high-level strategy.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#agendar" className="bg-[#612D53] text-white px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(97,45,83,0.3)]">
            Book an Introductory Call
          </a>
        </div>
      </section>

      {/* --- MARQUEE (Movimiento Infinito) --- */}
      <div className="py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-infinite">
          {[1, 2, 3].map((group) => (
            <div key={group} className="flex items-center">
              {marqueeWords.map((word, i) => (
                <div key={i} className="mx-12 flex items-center gap-6">
                  <span className="text-3xl md:text-5xl font-black uppercase opacity-20 tracking-tighter italic hover:opacity-100 hover:text-[#612D53] transition-all">
                    {word}
                  </span>
                  <div className="w-3 h-3 bg-[#612D53] rotate-45" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN SERVICIOS --- */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <span className="text-[#612D53] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Proven Systems</span>
        <h2 className="text-6xl font-black uppercase tracking-tighter mb-16 italic">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Inbound AI", d: "Receptionists that sound human, answer 24/7, and book directly into your CRM." },
            { t: "Outbound AI", d: "Scalable cold outreach and lead qualification with native AI voice technology." },
            { t: "Custom n8n", d: "Advanced backend architecture to connect all your business tools seamlessly." }
          ].map((s, i) => (
            <div key={i} className="p-12 bg-white/[0.03] border border-white/5 hover:border-[#612D53]/40 transition-all">
              <h3 className="text-2xl font-black uppercase mb-6 hover:text-[#612D53] transition-colors leading-tight">{s.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10">{s.d}</p>
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-[#612D53] pb-1 cursor-pointer">Explore Service</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIOS (Estilo Inflate) --- */}
      <section id="testimonios" className="py-32 bg-white/[0.02] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-20 tracking-tighter italic text-center">Trusted Results</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { n: "The Luxe Week", m: "$400k+ Added", t: "The AI agents transformed our booking process entirely. Revenue is up and costs are down." },
              { n: "Jili Properties", m: "90% Automated", t: "We no longer need a massive call center. The system handles everything perfectly." },
              { n: "Northwest Physio", m: "95% Efficiency", t: "Scheduling is now 100% autonomous. Our staff is finally free from the phones." }
            ].map((test, i) => (
              <div key={i} className="p-10 border border-white/10 bg-black italic relative">
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

      {/* --- CALCULADORA ROI ($20 USD/h) --- */}
      <section id="roi" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-10 italic">
              Calculate Your<br /><span className="text-[#612D53] not-italic italic underline decoration-gray-800">Savings</span>
            </h2>
            <div className="space-y-10">
              <div className="flex justify-between font-bold text-xs uppercase tracking-widest">
                <span>Weekly Task Hours