import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter';
import AnalyticalEngine from '@/components/AnalyticalEngine';
import InsightsSection from '@/components/InsightsSection';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Stratt-On Agency | Ecosistemas Autónomos de IA B2B',
  description: 'Optimizamos la operación de tu empresa con agentes de voz e IA, orquestación con n8n y self-hosting en Coolify.',
};

export default function Home() {
  return (
    <main className="bg-carbon text-white min-h-screen font-sans selection:bg-accent/40 selection:text-white">
      {/* Navegación */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-[5%]">
        <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
          className="absolute top-0 left-0 w-full h-full object-cover -z-2"
        >
          <source 
            src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay degradado */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/95 -z-1" />
        
        <div className="w-full max-w-[1400px] flex flex-wrap items-center justify-between gap-12 z-1">
          <div className="flex-1 min-w-[300px] md:min-w-[500px]">
            <div className="st-label inline-block px-4 py-1.5 border border-accent rounded-st text-accent text-xs font-bold mb-6 bg-accent/5">
              Orquestación Operativa B2B
            </div>
            <h1 className="text-4xl md:text-7xl leading-none mb-6 uppercase text-white">
              Tu empresa no duerme.<br />Tu operación <span className="text-accent">tampoco.</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 mb-10 leading-relaxed max-w-[600px] font-medium">
              Construimos Ecosistemas Autónomos que operan tus ventas, soporte y procesos internos 24/7. Menos carga operativa, más margen.
            </p>
            <div className="flex gap-5 flex-wrap">
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="st-label bg-accent text-carbon text-xs md:text-sm px-8 py-4 rounded-st hover:-translate-y-0.5 hover:bg-white hover:text-carbon transition-all duration-400"
              >
                Auditoría Gratuita
              </a>
              <a
                href="#asesoria"
                className="st-label bg-transparent text-white border border-white/30 text-xs md:text-sm px-8 py-4 rounded-st hover:bg-white/10 hover:border-white transition-all duration-400"
              >
                Motor Analítico
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] md:min-w-[400px] bg-carbon/80 backdrop-blur-md p-8 md:p-12 border-l-4 border-accent rounded-r shadow-[20px_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl mb-8 uppercase tracking-wider">Potencia Operativa</h3>
            <ul className="space-y-6">
              {[
                "Ejecuta procesos críticos sin intervención humana.",
                "Atención, soporte y agendamiento B2B 24/7.",
                "Reducción de costos operativos hasta un 80%.",
                "Ecosistemas autónomos con cero margen de error."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-white/80 leading-snug">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Marquee 1 */}
      <div className="relative w-[105vw] -ml-[2.5vw] -rotate-3 scale-[1.03] bg-carbon border-y-2 border-accent py-6 md:py-8 overflow-hidden shadow-[0_0_50px_rgba(255,59,47,0.3)] z-10">
        <div className="animate-marquee whitespace-nowrap">
          {[1, 2, 3].map(group => (
            <React.Fragment key={group}>
              <span className="text-2xl md:text-5xl font-black tracking-widest uppercase px-10 text-white drop-shadow-[0_0_20px_var(--accent)]">VOICEBOTS IA</span>
              <span className="text-2xl md:text-5xl font-black tracking-widest uppercase px-10 text-transparent [-webkit-text-stroke:2px_var(--accent)]">ORQUESTACIÓN OPERATIVA</span>
              <span className="text-2xl md:text-5xl font-black tracking-widest uppercase px-10 text-white drop-shadow-[0_0_20px_var(--accent)]">SISTEMAS AUTÓNOMOS</span>
              <span className="text-2xl md:text-5xl font-black tracking-widest uppercase px-10 text-transparent [-webkit-text-stroke:2px_var(--accent)]">CERO TRABAJO MANUAL</span>
              <span className="text-2xl md:text-5xl font-black tracking-widest uppercase px-10 text-white drop-shadow-[0_0_20px_var(--accent)]">CHATBOTS AUTÓNOMOS</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Sección Soluciones */}
      <section id="soluciones" className="py-24 md:py-32 px-[5%] bg-carbon">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="st-status-line mb-8" />
            <h2 className="text-3xl md:text-6xl uppercase text-white leading-tight">
              Infraestructura de <span className="text-accent">Soluciones</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-[700px] mx-auto mt-6 leading-relaxed">
              Sistemas que reemplazan el trabajo manual repetitivo y operan solos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {siteConfig.services.map((s) => (
              <a href={`/servicios#${s.id}`} key={s.id} className="block group no-underline text-inherit">
                <div className="bg-grafito border border-white/5 rounded p-6 md:p-8 transition-all duration-400 cursor-pointer h-full flex flex-col justify-between hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,59,47,0.15)] max-md:border-accent max-md:shadow-[0_0_25px_rgba(255,59,47,0.15)]">
                  <div>
                    <h3 className="mb-4 text-lg md:text-xl uppercase text-white border-l-4 border-accent pl-4 group-hover:border-white transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/servicios"
              className="st-label inline-flex items-center gap-2.5 text-white no-underline text-sm hover:text-accent hover:gap-4 transition-all duration-400"
            >
              Explorar Ecosistema Completo <span className="text-accent">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee 2 */}
      <div className="relative w-[105vw] -ml-[2.5vw] rotate-3 scale-[1.03] bg-grafito border-y border-white/10 py-6 md:py-8 overflow-hidden z-10 mt-12">
        <div className="animate-marquee whitespace-nowrap">
          {[1, 2, 3].map(group => (
            <React.Fragment key={group}>
              <span className="text-2xl md:text-5xl font-display tracking-widest uppercase px-10 text-transparent [-webkit-text-stroke:2px_var(--color-humo)]">E-COMMERCE PRO</span>
              <span className="text-2xl md:text-5xl font-display tracking-widest uppercase px-10 text-humo">TECH LOGISTICS</span>
              <span className="text-2xl md:text-5xl font-display tracking-widest uppercase px-10 text-transparent [-webkit-text-stroke:2px_var(--color-humo)]">REAL ESTATE GROUP</span>
              <span className="text-2xl md:text-5xl font-display tracking-widest uppercase px-10 text-humo">SAAS LATAM</span>
              <span className="text-2xl md:text-5xl font-display tracking-widest uppercase px-10 text-transparent [-webkit-text-stroke:2px_var(--color-humo)]">B2B ENTERPRISE</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Sección Motor Analítico */}
      <section id="asesoria" className="py-24 md:py-32 px-[5%] bg-grafito border-y border-white/5">
        <div className="max-w-[900px] mx-auto">
          <AnalyticalEngine />
        </div>
      </section>

      {/* Sección Comunidad e Insights */}
      <section id="comunidad" className="py-24 md:py-32 px-[5%] bg-carbon">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="st-status-line mb-8" />
            <h2 className="text-3xl md:text-6xl uppercase text-white leading-tight">
              Insights & <span className="text-accent">Comunidad</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-[600px] mx-auto mt-6 leading-relaxed">
              Conocimiento aplicado. Arquitecturas reales, sin relleno.
            </p>
          </div>

          <InsightsSection />

          <div className="text-center mt-12">
            <a
              href="/insights"
              className="st-label inline-flex items-center gap-2.5 text-white no-underline text-sm hover:text-accent hover:gap-4 transition-all duration-400"
            >
              Ver Todos los Artículos <span className="text-accent">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sección Estadísticas */}
      <section id="resultados" className="py-24 md:py-32 px-[5%] bg-grafito text-center">
        <div className="max-w-[1400px] mx-auto">
          <span className="st-status-line mb-8" />
          <h2 className="text-3xl md:text-5xl uppercase mb-16 md:mb-24 tracking-wide text-white">
            Resultados, no promesas.
          </h2>

          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {[
              { val: "-80%", label: "Carga Operativa" },
              { val: "300%", label: "Aumento en Ventas" },
              { val: "60%", label: "Reducción Errores" },
              { val: "7s", label: "Tiempo Respuesta" }
            ].map((stat, i) => (
              <div
                key={i}
                className="flex-1 min-w-[250px] p-8 md:p-14 border border-white/5 rounded bg-carbon"
              >
                <div className="text-5xl md:text-7xl lg:text-8xl font-display text-accent leading-none mb-4 whitespace-nowrap">
                  <Counter end={stat.val} />
                </div>
                <p className="st-label text-humo text-[11px] md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Autoridad / Testimoniales */}
      <section id="autoridad" className="py-24 md:py-32 px-[5%] bg-grafito">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="st-status-line mb-8" />
            <h2 className="text-3xl md:text-5xl uppercase tracking-wide text-white">
              Lo que dicen los <span className="text-accent">Líderes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.reviews.map((rev, i) => (
              <div
                key={i}
                className="bg-carbon border border-white/5 rounded p-8 flex flex-col justify-between"
              >
                <p className="text-white/80 text-sm md:text-base leading-relaxed italic mb-8">
                  &quot;{rev.text}&quot;
                </p>
                <div>
                  <h4 className="text-white text-base uppercase">{rev.name}</h4>
                  <span className="st-label text-accent font-bold text-xs mt-1 block">
                    {rev.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-32 px-[5%] bg-carbon text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto relative z-2">
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