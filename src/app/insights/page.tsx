import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InsightsPageContent from '@/components/InsightsPageContent';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Insights Operativos | Stratt-On Agency',
  description: 'Conocimiento avanzado sobre automatización B2B, ecosistemas autónomos y orquestación operativa. Descubre cómo eliminar el trabajo manual.',
};

export default function InsightsPage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-accent/40 selection:text-white">
      {/* Navegación */}
      <Navbar />

      {/* Contenido interactivo del Blog */}
      <InsightsPageContent />

      {/* CTA FINAL */}
      <section className="py-24 px-[5%] bg-[#050505] text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 text-white leading-tight">
            ¿Listo para dar el siguiente <span className="text-accent">paso?</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-12 leading-relaxed">
            Deja de perder horas en tareas repetitivas. Agenda una auditoría gratuita con nuestro equipo y descubre el impacto de la IA en tu empresa.
          </p>
          <a 
            href={siteConfig.calendarUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-accent text-black font-black text-xs md:text-base uppercase tracking-widest px-10 py-5 rounded-[4px] hover:shadow-[0_0_50px_var(--accent)] hover:bg-white hover:text-black transition-all duration-400 w-full sm:w-auto"
          >
            AGENDAR AUDITORÍA IA
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}