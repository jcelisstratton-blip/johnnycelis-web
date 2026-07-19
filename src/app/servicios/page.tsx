import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Servicios de Automatización e IA | Stratt-On Agency',
  description: 'Infraestructuras y soluciones autónomas: Voicebots Inbound, Growth Outbound, orquestación n8n y self-hosting con Coolify.',
};

export default function ServiciosPage() {
  return (
    <main className="bg-carbon text-white min-h-screen font-sans selection:bg-accent/40 selection:text-white">
      {/* Navegación */}
      <Navbar />

      {/* Header de la Página */}
      <header className="relative bg-gradient-to-b from-grafito to-carbon pt-44 pb-20 text-center px-[5%] overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-radial-gradient from-accent/15 to-transparent/0 -z-1" />

        <div className="relative z-1 max-w-[1000px] mx-auto">
          <span className="st-status-line mb-8" />
          <h1 className="text-4xl md:text-7xl uppercase leading-none mb-6 text-white">
            Ecosistemas <span className="text-accent">Autónomos</span> para Escalar
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[800px] mx-auto font-medium">
            Construimos sistemas que reemplazan el trabajo manual, operan 24/7 y aceleran la adquisición de clientes B2B y E-commerce.
          </p>
        </div>
      </header>

      {/* Listado Detallado de Servicios */}
      <section className="max-w-[1400px] mx-auto pb-24 px-[5%] space-y-0">
        {siteConfig.services.map((srv, i) => (
          <div
            key={srv.id}
            id={srv.id}
            className="flex flex-wrap items-center gap-12 py-20 border-b border-white/5 relative odd:bg-grafito/40 even:flex-row-reverse max-md:flex-col max-md:py-16 max-md:border-none max-md:before:content-[''] max-md:before:absolute max-md:before:top-0 max-md:before:left-[10%] max-md:before:w-[80%] max-md:before:h-[1px] max-md:before:bg-gradient-to-r max-md:before:from-transparent max-md:before:via-accent/40 max-md:before:to-transparent"
          >
            <div className="flex-1 min-w-[300px] md:min-w-[500px]">
              <span className="st-label inline-block text-accent font-bold text-xs px-4 py-1.5 bg-accent/10 rounded-st mb-6">
                Servicio 0{i + 1}
              </span>
              <h2 className="text-3xl md:text-5xl uppercase mb-3 leading-none text-white">{srv.title}</h2>
              <h3 className="text-lg md:text-xl text-white mb-6">{srv.subtitle}</h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">{srv.desc}</p>

              <ul className="space-y-4">
                {srv.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm md:text-base text-white/80">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuadro Visual decorativo en escritorio, oculto en móvil */}
            <div className="flex-1 min-w-[300px] md:min-w-[400px] flex justify-center items-center max-md:hidden">
              <div className="w-[350px] aspect-square bg-grafito border border-accent/15 rounded flex items-center justify-center text-7xl font-display text-accent/20 relative overflow-hidden group">
                0{i + 1}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-accent/10 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-32 px-[5%] bg-grafito text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto">
          <span className="st-status-line mb-8" />
          <h2 className="text-3xl md:text-6xl uppercase mb-8 text-white leading-tight">
            ¿Listo para automatizar tu <span className="text-accent">empresa?</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-12 leading-relaxed">
            Deja de duplicar datos a mano. Agenda una auditoría gratuita y define qué automatizamos primero.
          </p>
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="st-label inline-block bg-accent text-carbon text-xs md:text-base px-10 py-5 rounded-st hover:bg-white hover:text-carbon transition-all duration-400 w-full sm:w-auto"
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