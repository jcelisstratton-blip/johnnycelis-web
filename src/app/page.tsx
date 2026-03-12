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
    { q: "¿Se nota que es una IA?", a: "Nuestros agentes utilizan modelos acústicos avanzados. Las pausas, la respiración y la latencia ultra-baja (menos de 500ms) los hacen indistinguibles de un humano en una llamada telefónica." },
    { q: "¿Cómo se integra a nuestro proceso comercial?", a: "Desarrollamos la arquitectura en n8n para que el agente actualice tu CRM (HubSpot, Salesforce, etc.), agende en Calendly y envíe resúmenes por Slack automáticamente después de cada llamada." },
    { q: "¿Cuánto tiempo toma el despliegue?", a: "Un sistema de prospección o atención inbound de nivel empresarial está listo y entrenado con los datos de tu empresa en 2 a 3 semanas." }
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      
      {/* CAPA DE ESTILOS DE FLUIDEZ Y UX */}
      <style dangerouslySetInnerHTML={{ __html: `
        .glass-panel { background: rgba(255,255,255,0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s ease; }
        .glass-panel:hover { border-color: #9D00FF; background: rgba(157,0,255,0.05); transform: translateY(-5px); }
        .btn-glow { transition: all 0.3s ease; }
        .btn-glow:hover { box-shadow: 0 0 40px rgba(157,0,255,0.6); transform: scale(1.02); background-color: white !important; color: black !important; }
        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(157,0,255,0.2); }
        input[type="range"] { accent-color: #9D00FF; cursor: pointer; }
      `}} />

      {/* --- NAVEGACIÓN FLOTANTE --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-blur py-4' : 'bg-transparent py-8'} px-6 md:px-12 flex justify-between items-center`}>
        <span className="font-black italic text-xl tracking-tighter uppercase">STRATT-ON</span>
        <div className="hidden md:flex gap-10 items-center text-[10px] font-bold tracking-widest uppercase">
          <a href="#servicios" className="hover:text-[#9D00FF] transition-colors">Sistemas</a>
          <a href="#casos" className="hover:text-[#9D00FF] transition-colors">Casos</a>
          <a href="#roi" className="hover:text-[#9D00FF] transition-colors">ROI</a>
          <a href="#agendar" className="bg-[#9D00FF] px-6 py-3 btn-glow">Reservar Llamada</a>
        </div>
      </nav>

      {/* --- HERO CINEMATOGRÁFICO (AUTOMAXIA STYLE) --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-[-2] opacity-40 mix-blend-screen">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-vj-loop-background-4416-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-[-1]" />
        
        <div className="max-w-5xl mx-auto animate-[fadeIn_1s_ease-out]">
          <h1 className="font-black italic uppercase leading-[0.85] tracking-tighter" style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}>
            Automate<br /><span className="not-italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">To Elevate</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Implementamos <span className="text-white font-bold border-b border-[#9D00FF]">Agentes de Voz e IA</span> que transforman la captación y atención al cliente en una maquinaria autónoma y escalable.
          </p>
          <div className="mt-12">
            <a href="#agendar" className="bg-[#9D00FF] text-white font-black px-10 py-5 tracking-widest uppercase text-sm btn-glow inline-block">
              Agendar Auditoría IA
            </a>
          </div>
        </div>
      </section>

      {/* --- MARQUEE DE AUTORIDAD --- */}
      <div className="py-8 border-y border-white/5 bg-[#030303] overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3].map(g => (
            <div key={g} className="flex items-center">
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "SCALABLE SYSTEMS", "ROI DRIVEN"].map((w, i) => (
                <div key={i} className="mx-12 flex items-center gap-8">
                  <span className="text-2xl md:text-4xl font-black opacity-10 italic uppercase tracking-tighter">{w}</span>
                  <div className="w-3 h-3 bg-[#9D00FF] rotate-45 shadow-[0_0_15px_rgba(157,0,255,0.8)]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- SISTEMAS / SERVICIOS --- */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#9D00FF] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">Ingeniería de Crecimiento</span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Nuestros Sistemas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Inbound IA", d: "Agentes telefónicos 24/7 que atienden, filtran y agendan llamadas entrantes directamente en tu calendario con cero fricción." },
            { t: "Outbound Growth", d: "Clonación de voz y alcance masivo para prospección en frío. Multiplica tus puntos de contacto sin contratar más SDRs." },
            { t: "n8n Architecture", d: "Diseño de backend y automatización de flujos de trabajo que conectan tu CRM, correos y bases de datos de forma invisible." }
          ].map((s, i) => (
            <div key={i} className="glass-panel p-12 flex flex-col justify-between">
              <div>
                <span className="text-[#9D00FF] font-black text-xs tracking-widest">0{i+1}</span>
                <h3 className="text-2xl font-black uppercase mt-6 mb-4">{s.t}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARATIVA (STRATT-ON VS TRADICIONAL) --- */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">El Nuevo Estándar</h2>
          <div className="grid md:grid-cols-2 gap-[1px] bg-white/10">
            <div className="bg-[#0a0a0a] p-12 md:p-16">
              <h4 className="text-[#9D00FF] font-black text-xl md:text-2xl mb-8 uppercase">Con Stratt-On</h4>
              <ul className="space-y-6 text-gray-300 font-light">
                <li className="flex items-center gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Operativa ininterrumpida 24/7/365</li>
                <li className="flex items-center gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Escalabilidad inmediata sin entrevistas</li>
                <li className="flex items-center gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Reducción de costos operativos hasta 80%</li>
                <li className="flex items-center gap-4"><span className="text-[#9D00FF] font-bold">✓</span> Ejecución de procesos con 100% de precisión</li>
              </ul>
            </div>
            <div className="bg-[#0f0f0f] p-12 md:p-16">
              <h4 className="text-gray-500 font-black text-xl md:text-2xl mb-8 uppercase">Modelo Tradicional</h4>
              <ul className="space-y-6 text-gray-500 font-light">
                <li className="flex items-center gap-4"><span className="text-red-900 font-bold">✗</span> Horarios limitados de oficina y bajas médicas</li>
                <li className="flex items-center gap-4"><span className="text-red-900 font-bold">✗</span> Procesos lentos de reclutamiento y onboarding</li>
                <li className="flex items-center gap-4"><span className="text-red-900 font-bold">✗</span> Altos costos fijos de nómina e infraestructura</li>
                <li className="flex items-center gap-4"><span className="text-red-900 font-bold">✗</span> Errores humanos inevitables en tareas repetitivas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTADOS / CASOS DE ÉXITO --- */}
      <section id="casos" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-20 text-center">Resultados Comprobados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "The Luxe Week", m: "+$400k MRR", t: "Implementamos agentes de voz para procesar reservas globales. Eliminamos el cuello de botella en atención al instante." },
            { n: "Jili Properties", m: "90% Automatizado", t: "El flujo de llamadas de mantenimiento e inquilinos ahora es filtrado y documentado 100% por nuestra IA." },
            { n: "Northwest Physio", m: "Eficiencia Total", t: "Agendamiento y reprogramación de pacientes completamente autónomo. El staff médico se enfoca solo en la clínica." }
          ].map((test, i) => (
            <div key={i} className="glass-panel p-10 border-t-4 border-t-[#9D00FF]">
              <p className="text-gray-400 font-light italic mb-8 leading-relaxed">"{test.t}"</p>
              <h4 className="text-xl font-black uppercase">{test.n}</h4>
              <span className="text-[#9D00FF] text-[10px] font-bold uppercase tracking-widest mt-2 block">Resultado: {test.m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALCULADORA DE ROI (ALTO IMPACTO) --- */}
      <section id="roi" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-black italic leading-[0.9] tracking-tighter uppercase">
              Proyecta tu<br /><span className="text-[#9D00FF]">Ahorro</span>
            </h2>
            <div className="mt-16">
              <div className="flex justify-between font-black text-xs uppercase tracking-widest mb-6">
                <span>Horas de trabajo manual: {hours}H / Sem</span>
                <span className="text-[#9D00FF]">Valor: $20/HR</span>
              </div>
              <input type="range" min="10" max="200" step="5" value={hours} onChange={e => setHours(parseInt(e.target.value))} className="w-full h-2 bg-gray-200" />
            </div>
          </div>
          <div className="bg-[#050505] text-white p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9D00FF] rounded-full blur-[100px] opacity-20" />
            <span className="text-[10px] font-black text-gray-400 tracking-[0.5em] uppercase block mb-4 relative z-10">Potencial Mensual</span>
            <div className="text-7xl md:text-8xl font-black italic tracking-tighter mb-8 border-b border-white/10 pb-8 relative z-10">
              ${savings.toLocaleString()}
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-[#9D00FF] font-black uppercase tracking-widest block mb-2">Impacto Financiero Anual:</span>
              <div className="text-3xl font-black">${yearlySavings.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 px-6 bg-[#030303]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="glass-panel overflow-hidden">
                <button 
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full p-6 md:p-8 text-left flex justify-between items-center font-bold text-sm md:text-base focus:outline-none"
                >
                  {f.q}
                  <span className={`text-[#9D00FF] text-2xl transition-transform duration-300 ${faqOpen === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${faqOpen === i ? 'max-h-64 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER DE CONVERSIÓN --- */}
      <footer id="agendar" className="py-40 bg-black text-center px-6 border-t border-[#9D00FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,0,255,0.05)_0%,transparent_70%)]" />
        <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-16 tracking-tighter relative z-10">Scale Faster.</h2>
        <a href="https://calendly.com/tu-link" className="bg-[#9D00FF] text-white font-black px-12 py-6 tracking-[0.2em] btn-glow inline-block uppercase text-sm md:text-base relative z-10">
          Reservar Auditoría Estratégica
        </a>
        <div className="mt-32 opacity-20 text-[10px] font-black tracking-[1em] uppercase relative z-10">STRATT-ON AGENCY // 2026</div>
      </footer>
    </main>
  );
}