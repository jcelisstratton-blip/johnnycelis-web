import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans overflow-x-hidden">
      {/* Header Minimalista */}
      <nav className="p-8 flex justify-between items-center border-b border-white/10 uppercase tracking-widest text-[10px] md:text-xs">
        <span className="font-black text-xl italic tracking-tighter">JOHNNYCELIS</span>
        <div className="hidden md:flex space-x-12">
          <a href="#" className="hover:text-orange-500 transition-colors">Sistemas</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Mentoría</a>
          <a href="#" className="bg-white text-black px-4 py-2 hover:bg-orange-500 hover:text-white transition-all">Consultoría</a>
        </div>
      </nav>

      {/* Hero Section Brutalista */}
      <section className="flex flex-col items-center justify-center pt-24 md:pt-40 px-6 pb-20">
        <div className="relative">
          <h1 className="text-[14vw] leading-[0.8] font-black uppercase text-center tracking-tighter">
            Performance<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 opacity-80">Absoluto</span>
          </h1>
          <div className="absolute -top-4 -right-4 text-orange-500 font-mono text-xs animate-pulse">
            [SYSTEM_ACTIVE]
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl text-center space-y-8">
          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
            Arquitectura de procesos que escalan. <br />
            Experto en <span className="text-white font-medium border-b-2 border-orange-500">Automatización de Elite</span> para negocios de alto impacto.
          </p>
          
          {/* Stats / Proof Points */}
          <div className="grid grid-cols-2 gap-8 pt-12">
            <div className="border-l border-white/20 pl-6 text-left hover:border-orange-500 transition-all group">
              <span className="block text-3xl md:text-5xl font-black italic group-hover:text-orange-500 transition-colors">15%</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Sales Growth</span>
            </div>
            <div className="border-l border-white/20 pl-6 text-left hover:border-orange-500 transition-all group">
              <span className="block text-3xl md:text-5xl font-black italic group-hover:text-orange-500 transition-colors">-120</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Days A/R Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Industrial */}
      <footer className="w-full p-10 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-gray-600 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span>Antioquia, Col // Global Service</span>
        </div>
        <span>CEO Stratt-On Agency</span>
        <span className="text-white/20 hover:text-white transition-colors cursor-pointer">©2026</span>
      </footer>
    </main>
  );
}