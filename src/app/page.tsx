"use client";

import React, { useState } from 'react';

export default function Home() {
  // Lógica de la Calculadora de ROI
  const [hours, setHours] = useState(20);
  const costPerHour = 25; // Promedio de costo operativo por hora
  const monthlyCost = hours * costPerHour * 4;
  const aiCost = (monthlyCost * 0.24); // La IA optimiza el 76% del costo aprox.
  const savings = monthlyCost - aiCost;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      
      {/* --- NAV (Sticky & Minimal) --- */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 uppercase tracking-widest text-[10px]">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#servicios" className="hover:text-orange-500 transition-colors">Servicios</a>
          <a href="#roi" className="hover:text-orange-500 transition-colors">Calculadora ROI</a>
          <a href="#proceso" className="hover:text-orange-500 transition-colors">Proceso</a>
          <a 
            href="https://calendly.com/tu-link" 
            target="_blank" 
            className="bg-white text-black px-5 py-2 hover:bg-orange-500 hover:text-white transition-all font-bold"
          >
            Reserva Llamada
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION (High Impact) --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 border-b border-white/5">
        <div className="absolute top-40 right-10 text-orange-500/10 font-mono text-[18vw] font-black -z-10 select-none pointer-events-none">
          AI
        </div>
        <h1 className="text-[12vw] leading-[0.8] font-black uppercase text-center tracking-tighter mb-8">
          Sistemas<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white italic">Autónomos</span>
        </h1>
        <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl font-light mb-12">
          Arquitectura de procesos y agentes AI para escalar negocios sin aumentar la nómina. 
          Expertise en <span className="text-white border-b border-orange-500">Automatización de Elite</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#roi" className="bg-orange-500 px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
            Calcular Ahorro
          </a>
          <a href="#servicios" className="border border-white/20 px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
            Ver Servicios
          </a>
        </div>
        
        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-600">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          System Status: Active
        </div>
      </section>

      {/* --- SERVICIOS (Grid Brutalista) --- */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black uppercase mb-20 border-l-8 border-orange-500 pl-8">
          Arquitectura<br />de Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
          {[
            { t: "Ventas Autónomas", d: "Agentes AI que prospectan, califican y agendan en tu CRM 24/7." },
            { t: "Soporte Inteligente", d: "LLMs personalizados entrenados con tu data para atención al cliente real." },
            { t: "Infraestructura n8n", d: "Sistemas robustos de backend para conectar aplicaciones sin intervención humana." }
          ].map((s, i) => (
            <div key={i} className="p-16 hover:bg-orange-500 group transition-all cursor-crosshair border border-white/5">
              <span className="text-orange-500 group-hover:text-black font-mono mb-6 block text-sm">0{i+1} //</span>
              <h3 className="text-3xl font-black uppercase mb-6 group-hover:text-black leading-none">{s.t}</h3>
              <p className="text-gray-500 group-hover:text-black font-medium leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALCULADORA ROI (Interacción Dinámica) --- */}
      <section id="roi" className="bg-white text-black py-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.85] mb-10 tracking-tighter">
              El costo de la<br /><span className="text-orange-600 italic">Manualidad</span>
            </h2>
            <p className="text-xl font-light mb-16 max-w-lg leading-relaxed text-gray-700">
              Cada hora que tu equipo pasa moviendo datos manualmente es capital desperdiciado. 
              Mueve el slider para visualizar tu fuga de dinero mensual.
            </p>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end uppercase font-bold text-xs tracking-widest">
                <span>Horas operativas / Semana</span>
                <span className="text-3xl text-orange-600">{hours}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="120" 
                value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-none appearance-none cursor-pointer accent-orange-600"
              />
            </div>
          </div>

          <div className="bg-black text-white p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-xs">ROI_ANALYSIS_v3</div>
            <div className="space-y-12">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-500 block mb-2">Gasto Actual Estimado</span>
                <div className="text-5xl font-black italic text-red-500 tracking-tighter">
                  ${monthlyCost.toLocaleString()} <span className="text-sm not-italic opacity-50">USD/MES</span>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-12">
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-orange-500 block mb-2">Potencial de Ahorro Stratt-On</span>
                <div className="text-8xl font-black italic tracking-tighter leading-none">
                  ${savings.toLocaleString()}
                </div>
                <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-widest leading-loose">
                  * Basado en el rendimiento de implementaciones previas: <br />
                  -180 a -60 días en cartera | +15% eficiencia en ventas.
                </p>
              </div>
              
              <button className="w-full bg-white text-black py-6 font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all text-sm">
                Optimizar mi Negocio Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Industrial Noir) --- */}
      <footer className="p-20 border-t border-white/5 flex flex-col items-center">
        <div className="mb-16 opacity-10 text-[12vw] font-black tracking-tighter select-none uppercase pointer-events-none">
          STRATT-ON
        </div>
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.5em] text-gray-600">
          <div className="flex items-center gap-4">
            <span className="text-white font-black italic">JC</span>
            <span>Antioquia, Col // Global Service</span>
          </div>
          <div className="space-x-8">
            <a href="mailto:hola@johnnycelis.online" className="hover:text-white transition-colors">Email</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
          </div>
          <span className="font-bold">©2026 Johnny Celis - Stratt-On Agency</span>
        </div>
      </footer>
    </main>
  );
}