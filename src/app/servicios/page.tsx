import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  alternates: { canonical: '/servicios' },
  title: 'Servicios de Automatización e IA | Stratt-On Agency',
  description: 'Infraestructuras y soluciones autónomas: Voicebots Inbound, Growth Outbound, orquestación n8n y self-hosting con Coolify.',
};

export default function ServiciosPage() {
  return (
    <main className="text-white min-h-screen font-sans selection:bg-accent/40 selection:text-white">
      {/* Navegación */}
      <Navbar />

      {/* Header de la Página */}
      <header className="relative pt-40 md:pt-48 pb-16 md:pb-24 px-[5%] overflow-hidden border-b border-white/10">
        <div className="st-grid-bg" />
        <div className="relative max-w-[1280px] mx-auto st-ignite">
          <span className="st-status-line mb-6" />
          <div className="st-eyebrow mb-6"><b>[02]</b> Servicios</div>
          <h1 className="text-4xl md:text-7xl uppercase leading-[1.02] mb-8 text-white max-w-[1000px]">
            Ecosistemas <span className="text-accent">autónomos</span> para escalar
          </h1>
          <p className="text-base md:text-lg text-humo leading-relaxed max-w-[640px]">
            Construimos sistemas que reemplazan el trabajo manual, operan 24/7 y aceleran la adquisición de clientes B2B y E-commerce.
          </p>
        </div>
      </header>

      {/* Listado detallado de servicios */}
      <section className="max-w-[1280px] mx-auto py-16 md:py-24 px-[5%]">
        {siteConfig.services.map((srv, i) => (
          <div
            key={srv.id}
            id={srv.id}
            className="grid md:grid-cols-[0.35fr_1fr] gap-8 md:gap-16 py-14 md:py-20 border-t border-white/10 first:border-t-0 scroll-mt-24"
          >
            <div>
              <div className="font-display text-6xl md:text-8xl text-white/10 leading-none">0{i + 1}</div>
              <div className="st-eyebrow mt-4"><b>/</b> Servicio</div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl uppercase mb-4 leading-[1.02] text-white">{srv.title}</h2>
              <h3 className="text-lg md:text-xl text-white mb-6">{srv.subtitle}</h3>
              <p className="text-humo text-base md:text-lg leading-relaxed mb-10 max-w-[720px]">{srv.desc}</p>

              <ul className="st-cells grid-cols-1 md:grid-cols-2 list-none p-0 m-0">
                {srv.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-5 text-sm md:text-base text-blanco/90">
                    <span className="st-eyebrow mt-0.5"><b>{String(idx + 1).padStart(2, '0')}</b></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32 px-[5%] border-t border-white/10 relative overflow-hidden">
        <div className="st-grid-bg" />
        <div className="relative max-w-[1280px] mx-auto st-frame p-8 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            <span className="st-status-line mb-6" />
            <h2 className="text-3xl md:text-5xl uppercase text-white leading-[1.02]">
              ¿Listo para automatizar tu <span className="text-accent">empresa?</span>
            </h2>
            <p className="text-humo text-base md:text-lg mt-6 leading-relaxed max-w-[520px]">
              Deja de duplicar datos a mano. Agenda una auditoría gratuita y define qué automatizamos primero.
            </p>
          </div>
          <div className="md:justify-self-end w-full md:w-auto">
            <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer" className="st-btn st-btn-primary w-full md:w-auto">
              Agendar auditoría IA <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}