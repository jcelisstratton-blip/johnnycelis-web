"use client";

import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const costPerHour = 25;
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.24);
  const savings = monthlyCost - aiCost;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* --- NAV (Glassmorphism) --- */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 uppercase tracking-widest text-[10px]">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-8 items-center font-bold">
          <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="#cases" className="hover:text-orange-500 transition-colors">Case Studies</a>
          <a href="#calculator" className="hover:text-orange-500 transition-colors">ROI Calculator</a>
          <a href="https://calendly.com/tu-link" className="bg-white text-black px-6 py-2 hover:bg-orange-500 hover:text-white transition-all">Book a Call</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50" />
        <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 z-10">
          Scale Faster<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 italic">With AI Agents</span>
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light mb-12 z-10">
          Stop hiring for tasks that code can handle. We build custom AI Voice and Process Agents that work 24/7.
        </p>
        <div className="z-10 flex flex-col md:flex-row gap-4">
          <button className="bg-orange-500 px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-orange-500/20">Book an Intro Call</button>
          <button className="border border-white/20 px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">View Case Studies</button>
        </div>
      </section>

      {/* --- MARQUEE (Social Proof) --- */}
      <div className="py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center">
              {["TRUSTED BY 70+ CLIENTS", "ROI DRIVEN", "AI-NATIVE", "STRATT-ON PROTOCOL", "n8n EXPERTS", "24/7 AUTOMATION"].map((text, i) => (
                <div key={i} className="mx-12 flex items-center gap-4">
                  <div className="w-2 h-2 bg-orange-500 rotate-45" />
                  <span className="text-2xl font-black uppercase opacity-30 tracking-tighter italic">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- SERVICES (Inflate Style) --- */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px]">Tailored for your business</span>
          <h2 className="text-6xl font-black uppercase tracking-tighter mt-4 italic">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Inbound Voice", d: "Human-like AI receptionists handling customer calls and booking appointments instantly." },
            { t: "Outbound Growth", d: "Automated follow-ups and lead qualification with native AI voice technology." },
            { t: "Custom Systems", d: "Tailored n8n workflows connecting your entire CRM and operational stack." }
          ].map((s, i) => (
            <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 hover:border-orange-500/50 transition-all relative">
              <div className="text-5xl font-black opacity-5 absolute top-6 right-6 italic">0{i+1}</div>
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight group-hover:text-orange-500 transition-colors">{s.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-10">{s.d}</p>
              <a href="#" className="inline-block border-b-2 border-orange-500 pb-1 text-[10px] font-black uppercase tracking-widest">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* --- CASE STUDIES (ROI Cards) --- */}
      <section id="cases" className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase mb-20 tracking-tighter italic">Real Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Travel", client: "The Luxe Week", metric: "$400k+ Added", desc: "Monthly revenue via AI Voice Agents" },
              { label: "Real Estate", client: "Jili Prop", metric: "90% Automated", desc: "Calls handled without staff" },
              { label: "Healthcare", client: "NW Physio", metric: "95% Calls", desc: "Automated booking system" },
              { label: "Agency", client: "Stratt-On", metric: "15% Sales", desc: "Increase via CRM automation" }
            ].map((c, i) => (
              <div key={i} className="p-8 bg-black border border-white/10 hover:-translate-y-2 transition-all">
                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{c.label}</span>
                <h4 className="text-xl font-bold mt-2 mb-6 uppercase tracking-tight">{c.client}</h4>
                <div className="text-3xl font-black italic mb-2 tracking-tighter leading-none">{c.metric}</div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALCULATOR --- */}
      <section id="calculator" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-10">
              Calculate<br />Your <span className="text-orange-500">ROI</span>
            </h2>
            <div className="space-y-8 max-w-md">
              <div className="flex justify-between font-bold text-xs uppercase tracking-widest">
                <span>Weekly Staff Hours: {hours}h</span>
              </div>
              <input 
                type="range" min="5" max="100" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-800 rounded-none appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
          <div className="bg-white text-black p-12 md:p-20 relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">Monthly Potential Savings</span>
            <div className="text-8xl font-black italic tracking-tighter leading-none mb-10 border-b-8 border-black pb-4 uppercase">
              ${savings.toLocaleString()}
            </div>
            <button className="w-full bg-orange-500 text-white py-6 font-black uppercase tracking-widest hover:bg-black transition-all">
              Book Intro Call to Save
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center px-6">
        <div className="text-[12vw] font-black opacity-[0.03] leading-none mb-10 select-none tracking-[0.1em] uppercase">Stratt-on</div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-600 gap-8">
          <span>Antioquia // Colombia</span>
          <div className="space-x-10 text-white font-bold">
            <a href="#" className="hover:text-orange-500">Instagram</a>
            <a href="#" className="hover:text-orange-500">LinkedIn</a>
          </div>
          <span>©2026 Johnny Celis</span>
        </div>
      </footer>
    </main>
  );
}