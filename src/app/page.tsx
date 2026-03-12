"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hours, setHours] = useState(20);
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const savings = hours * 20 * 4 * 0.80; 
  const yearlySavings = savings * 12;

  const faqs = [
    { q: "¿Se nota que es una IA?", a: "Nuestros agentes utilizan modelos acústicos de última generación. La latencia ultra-baja y la modulación natural los hacen indistinguibles de un humano en una llamada telefónica." },
    { q: "¿Cómo se integra a nuestra operación?", a: "Diseñamos la arquitectura en n8n para que el agente actualice tu CRM, agende reuniones y notifique a tu equipo de forma invisible y automática." },
    { q: "¿Cuánto tiempo toma el despliegue?", a: "Un ecosistema de prospección o atención inbound está listo, entrenado y conectado a tus sistemas en 2 a 3 semanas." }
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-[#9D00FF] selection:text-white overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#9D00FF]/30 py-4' : 'bg-transparent py-8'} px-6 md:px-12 flex justify-between items-center`}>
        <span className="font-black italic text-xl md:text-2xl tracking-tighter uppercase">STRATT-ON</span>
        <div className="hidden md:flex gap-10 items-center text-[10px] font-bold tracking-[0.2em] uppercase">
          <a href="#sistemas" className="hover:text-[#9D00FF] transition-colors">Sistemas</a>
          <a href="#resultados" className="hover:text-[#9D00FF] transition-colors">Resultados</a>
          <a href="#roi" className="hover:text-[#9D00FF] transition-colors">ROI</a>
          <a href="#agendar" className="bg-[#9D00FF] hover:bg-white hover:text-black transition-all px-8 py-3">Book a Call</a>
        </div>
      </nav>

      {/* HERO CINEMATOGRÁFICO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-screen pointer-events-none">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-black italic uppercase leading-[0.85] tracking-tighter mb-8" style={{ fontSize: 'clamp(3.5rem, 13vw, 10rem)' }}>
            Automate<br /><span className="not-italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">To Elevate</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-2xl font-light leading-relaxed mb-12">
            Construimos <span className="text-white font-bold border-b border-[#9D00FF]">Agentes de Voz e IA</span> que transforman Stratt-On Agency en una maquinaria de ingresos autónoma y escalable.
          </p>
          <a href="#agendar" className="inline-block bg-[#9D00FF] text-white font-black px-12 py-5 tracking-widest uppercase text-sm md:text-base hover:bg-white hover:text-black hover:scale-105 transition-all shadow-[0_0_40px_rgba(157,0,255,0.4)]">
            Auditoría Estratégica
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 border-y border-white/5 bg-[#030303] overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          {[1, 2, 3, 4].map(g => (
            <div key={g} className="flex items-center">
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "SCALABLE SYSTEMS", "ROI DRIVEN"].map((w, i) => (
                <div key={i} className="mx-10 flex items-center gap-8">
                  <span className="text-2xl md:text-4xl font-black text-gray-800 italic uppercase tracking-tighter">{w}</span>
                  <div className="w-3 h-3 bg-[#9D00FF] rotate-45 shadow-[0_0_15px_#9D00FF]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SISTEMAS / SERVICIOS */}
      <section id="sistemas" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#9D00FF] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">Ingeniería de Crecimiento</span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Nuestros Sistemas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Inbound IA", d: "Agentes telefónicos 24/7 que atienden, filtran y agendan llamadas directamente en tu calendario con cero fricción." },
            { t: "Outbound Growth", d: "Clonación de voz y alcance masivo para prospección en frío. Multiplica tus puntos de contacto sin contratar SDRs." },
            { t: "n8n Architecture", d: "Diseño de backend y automatización de flujos de trabajo que conectan tu CRM y bases de datos de forma invisible." }
          ].map((s, i) => (
            <div key={i} className="bg-[#050505] border border-white/10 p-10 md:p-14 hover:border-[#9D00FF] hover:bg-[#9D00FF]/5 transition-all group cursor-default">
              <span className="text-[#9D00FF] font-black text-xs tracking-widest block mb-10">0{i+1}</span>
              <h3 className="text-2xl font-black uppercase mb-6 group-hover:text-[#9D00FF] transition-colors">{s.t}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARATIVA DE AUTORIDAD */}
      <section className="py-24 px-6 bg-[#030303] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 uppercase italic tracking-tighter">El Nuevo Estándar</h2>
          <div className="grid md:grid-cols-2 gap-1 bg-white/10 p-[1px]">
            <div className="bg-black p-12 md:p-16">
              <h4 className="text-[#9D00FF] font-black text-2xl md:text-3xl mb-10 uppercase">Stratt-On Agency</h4>
              <ul className="space-y-6 text-gray-300 font-light text-lg">
                <li className="flex items-start gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Operativa ininterrumpida 24/7/365</li>
                <li className="flex items-start gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Escalabilidad inmediata sin entrevistas</li>
                <li className="flex items-start gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Reducción de costos operativos hasta 80%</li>
                <li className="flex items-start gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Ejecución de procesos con 100% de precisión</li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] p-12 md:p-16">
              <h4 className="text-gray-600 font-black text-2xl md:text-3xl mb-10 uppercase">Modelo Tradicional</h4>
              <ul className="space-y-6 text-gray-500 font-light text-lg">
                <li className="flex items-start gap-4"><span className="text-red-900 font-bold">✗</span> Horarios limitados de oficina y bajas</li>
                <li className="flex items-start gap-4"><span className="text-red-900 font-bold">✗</span> Procesos lentos de reclutamiento</li>
                <li className="flex items-start gap-4"><span className="text-red-900 font-bold">✗</span> Altos costos fijos de nómina</li>
                <li className="flex items-start gap-4"><span className="text-red-900 font-bold">✗</span> Errores humanos inevitables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section id="resultados" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Resultados</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "The Luxe Week", m: "+$400k MRR", t: "Implementamos agentes de voz para procesar reservas globales. Eliminamos el cuello de botella en atención al instante." },
            { n: "Jili Properties", m: "90% Automatizado", t: "El flujo de llamadas de mantenimiento e inquilinos ahora es filtrado y documentado 100% por nuestra IA." },
            { n: "Northwest Physio", m: "Eficiencia Total", t: "Agendamiento de pacientes completamente autónomo. El staff médico se enfoca solo en la clínica." }
          ].map((test, i) => (
            <div key={i} className="bg-[#050505] p-10 border-t-4 border-[#9D00FF] hover:-translate-y-2 transition-transform">
              <p className="text-gray-400 font-light italic mb-8 leading-relaxed text-lg">"{test.t}"</p>
              <h4 className="text-2xl font-black uppercase mb-2">{test.n}</h4>
              <span className="text-[#9D00FF] text-[11px] font-black uppercase tracking-widest block">Impacto: {test.m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULADORA DE ROI (ALTO IMPACTO VISUAL) */}
      <section id="roi" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black italic leading-[0.85] tracking-tighter uppercase mb-12">
              Calcula tu<br /><span className="text-[#9D00FF]">Libertad</span>
            </h2>
            <div className="space-y-8">
              <div className="flex justify-between font-black text-sm uppercase tracking-widest">
                <span>Horas operativas: {hours}H / Sem</span>
                <span className="text-[#9D00FF]">Tarifa: $20/HR</span>
              </div>
              <input type="range" min="10" max="200" step="5" value={hours} onChange={e => setHours(parseInt(e.target.value))} className="w-full h-3 bg-gray-200 cursor-pointer accent-[#9D00FF]" />
              <p className="text-gray-500 font-light text-sm">Ajusta el control deslizante según el volumen de tareas manuales de tu equipo.</p>
            </div>
          </div>
          <div className="bg-black text-white p-12 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative overflow-hidden text-center">
            <span className="text-[10px] font-black text-gray-500 tracking-[0.5em] uppercase block mb-6">Potencial Mensual</span>
            <div className="text-7xl md:text-9xl font-black italic tracking-tighter mb-10 border-b-2 border-white/10 pb-10">
              ${savings.toLocaleString()}
            </div>
            <div>
              <span className="text-[10px] text-[#9D00FF] font-black uppercase tracking-widest block mb-3">Retorno Anual Proyectado:</span>
              <div className="text-4xl font-black">${yearlySavings.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-32 px-6 bg-[#030303]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-20 text-center">Dudas Comunes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/5">
                <button 
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center font-bold text-lg focus:outline-none hover:text-[#9D00FF] transition-colors"
                >
                  {f.q}
                  <span className={`text-[#9D00FF] text-2xl transition-transform duration-300 ${faqOpen === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${faqOpen === i ? 'max-h-64 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 font-light leading-relaxed text-base">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="agendar" className="py-40 bg-black text-center px-6 border-t border-[#9D00FF]/20">
        <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-16 tracking-tighter">Scale Faster.</h2>
        <a href="https://calendly.com/tu-link" className="bg-[#9D00FF] hover:bg-white hover:text-black transition-all text-white font-black px-12 md:px-16 py-6 md:py-8 tracking-[0.2em] inline-block uppercase text-sm md:text-lg shadow-[0_0_40px_rgba(157,0,255,0.3)]">
          Agendar Sesión Estratégica
        </a>
        <div className="mt-32 opacity-30 text-[10px] font-black tracking-[1em] uppercase flex flex-col items-center gap-4">
          <span>STRATT-ON AGENCY</span>
          <span>ANTIOQUIA, COLOMBIA // 2026</span>
        </div>
      </footer>
    </main>
  );
}