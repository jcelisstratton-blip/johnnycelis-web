import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      {/* 1. NAV (ESTILO INFLATE PERO MINIMAL) */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 uppercase tracking-widest text-[10px]">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#servicios" className="hover:text-orange-500 transition-colors">Servicios</a>
          <a href="#casos" className="hover:text-orange-500 transition-colors">Casos</a>
          <a href="#proceso" className="hover:text-orange-500 transition-colors">Proceso</a>
          <a href="https://calendly.com/tu-link" className="bg-white text-black px-5 py-2 hover:bg-orange-500 hover:text-white transition-all font-bold">Reserva Llamada</a>
        </div>
      </nav>

      {/* 2. HERO (ALTO IMPACTO) */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 border-b border-white/5">
        <div className="absolute top-40 right-10 text-orange-500/20 font-mono text-[150px] font-black -z-10 select-none">AI</div>
        <h1 className="text-[12vw] leading-[0.8] font-black uppercase text-center tracking-tighter mb-8">
          Sistemas<br /><span className="text-transparent border-t border-b border-white/40 italic">Autónomos</span>
        </h1>
        <p className="max-w-xl text-center text-gray-400 text-lg md:text-xl font-light mb-10">
          Escalamos agencias y negocios mediante arquitectura de agentes AI y automatización de procesos de punta a punta.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-orange-500 px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Ver Casos de Éxito</button>
          <button className="border border-white/20 px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Calculadora de ROI</button>
        </div>
      </section>

      {/* 3. SECCIÓN SERVICIOS (GRID ESTRUCTURADO) */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase mb-20 border-l-4 border-orange-500 pl-6">Servicios Disponibles</h2>
        <div className="grid md:grid-cols-3 gap-1">
          {[
            { t: "Automatización de Ventas", d: "Sistemas de prospección con IA que funcionan 24/7 sin intervención humana." },
            { t: "Agentes de Atención", d: "Implementación de modelos LLM personalizados para soporte y cierre de leads." },
            { t: "Arquitectura n8n", d: "Infraestructura cloud robusta para conectar todo tu ecosistema de software." }
          ].map((s, i) => (
            <div key={i} className="bg-white/5 p-12 hover:bg-orange-500 group transition-all cursor-crosshair border border-white/10">
              <span className="text-orange-500 group-hover:text-black font-mono mb-4 block">0{i+1} //</span>
              <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-black">{s.t}</h3>
              <p className="text-gray-500 group-hover:text-black/80 font-light">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN STATS (INSPIRADO EN CALCULADORA INFLATE) */}
      <section className="bg-white text-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black uppercase leading-none mb-8">No es gasto,<br />es eficiencia.</h2>
            <p className="text-xl font-light">Reducimos el tiempo operativo de tu equipo en un 70%, permitiéndoles enfocarse en cerrar ventas, no en mover datos.</p>
          </div>
          <div className="space-y-6">
            <div className="border-b-2 border-black pb-4">
              <span className="text-[10px] uppercase font-bold tracking-widest">Ahorro Mensual Promedio</span>
              <div className="text-5xl font-black italic">$1,800 USD+</div>
            </div>
            <div className="border-b-2 border-black pb-4">
              <span className="text-[10px] uppercase font-bold tracking-widest">Error Humano Eliminado</span>
              <div className="text-5xl font-black italic">99.9%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (INDUSTRIAL) */}
      <footer className="p-20 border-t border-white/10 text-center">
        <div className="mb-10 opacity-20 text-[10vw] font-black tracking-tighter select-none uppercase">Stratt-On</div>
        <div className="flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.5em] text-gray-600">
          <span>Antioquia // Colombia</span>
          <span>Johnny Celis - CEO Stratt-On Agency</span>
          <a href="mailto:hola@johnnycelis.online" className="hover:text-white">Contacto Directo</a>
        </div>
      </footer>
    </main>
  );
}