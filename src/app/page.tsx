import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter';
import AnalyticalEngine from '@/components/AnalyticalEngine';
import InsightsSection from '@/components/InsightsSection';
import { siteConfig } from '@/config/site';
import { getAllInsights } from '@/lib/insights';

export const metadata = {
  alternates: { canonical: '/' },
  title: 'Stratt-On Agency | Ecosistemas Autónomos de IA B2B',
  description: 'Optimizamos la operación de tu empresa con agentes de voz e IA, orquestación con n8n y self-hosting en Coolify.',
};

const capacidades = [
  'Voicebots IA',
  'Orquestación operativa',
  'Sistemas autónomos',
  'Cero trabajo manual',
  'Chatbots autónomos',
  'Self-hosting',
];

const sectores = ['E-commerce Pro', 'Tech Logistics', 'Real Estate Group', 'SaaS LATAM', 'B2B Enterprise'];

const consola = [
  { t: '09:14:02', msg: 'voicebot.inbound · llamada atendida', ok: 'OK' },
  { t: '09:14:41', msg: 'n8n.workflow · lead calificado', ok: 'OK' },
  { t: '09:15:03', msg: 'calendar.sync · reunión agendada', ok: 'OK' },
  { t: '09:15:30', msg: 'crm.update · registro sincronizado', ok: 'OK' },
  { t: '09:16:12', msg: 'chatwoot.handoff · escalado a humano', ok: 'OK' },
];

function SectionHead({
  n,
  label,
  children,
  desc,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="mb-14 md:mb-20 max-w-[820px]">
      <span className="st-status-line mb-6" />
      <div className="st-eyebrow mb-5">
        <b>[{n}]</b> {label}
      </div>
      <h2 className="text-3xl md:text-6xl uppercase text-white leading-[1.02]">{children}</h2>
      {desc && <p className="text-humo text-base md:text-lg mt-6 leading-relaxed max-w-[620px]">{desc}</p>}
    </div>
  );
}

export default function Home() {
  const insights = getAllInsights();

  return (
    <main className="text-blanco min-h-screen font-sans selection:bg-accent/40 selection:text-white">
      <Navbar />

      {/* 01 — HERO */}
      <section className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28 px-[5%]">
        <video
          playsInline
          autoPlay
          muted
          loop
          aria-hidden="true"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-25 -z-20"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-carbon/40 via-carbon/60 to-transparent" />
        <div className="st-grid-bg -z-10" />

        <div className="relative w-full max-w-[1280px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div className="st-ignite">
            <div className="st-eyebrow mb-8">
              <span className="st-led st-led--live" />
              Orquestación operativa B2B
            </div>
            <h1 className="text-[2.4rem] sm:text-5xl xl:text-[4.4rem] uppercase text-white mb-8">
              Tu empresa no duerme.
              <br />
              Tu operación <span className="text-accent">tampoco.</span>
            </h1>
            <p className="text-base md:text-lg text-humo mb-10 leading-relaxed max-w-[560px]">
              Construimos ecosistemas autónomos que operan tus ventas, soporte y procesos internos 24/7. Menos carga operativa, más margen.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer" className="st-btn st-btn-primary">
                Auditoría gratuita <span aria-hidden="true">→</span>
              </a>
              <a href="#asesoria" className="st-btn st-btn-secondary">
                Motor analítico
              </a>
            </div>
          </div>

          {/* Consola de ejecución */}
          <div className="relative st-ignite" style={{ animationDelay: '150ms' }}>
            <div aria-hidden="true" className="st-orb st-orb--a" />
            <div aria-hidden="true" className="st-orb st-orb--b" />
            <div className="st-chip st-glass-surface -top-6 -left-6 hidden md:inline-flex z-10">
              <span className="st-led" /> Voz IA
            </div>
            <div className="st-chip st-chip--b st-glass-surface -bottom-6 -right-4 hidden md:inline-flex z-10">
              n8n · 24/7
            </div>
          <div className="st-frame p-0 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div className="st-eyebrow">
                <span className="st-led st-led--live" /> Sistema en línea
              </div>
              <span className="st-eyebrow">24/7</span>
            </div>
            <div className="st-console px-5 py-3">
              {consola.map((r) => (
                <div key={r.t} className="st-console-row">
                  <span className="t">{r.t}</span>
                  <span className="text-blanco">{r.msg}</span>
                  <span className="ok">{r.ok}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 border-t border-white/10">
              <div className="p-5 border-r border-white/10">
                <div className="st-eyebrow mb-2">Carga operativa</div>
                <div className="font-display text-4xl text-white leading-none">-80%</div>
              </div>
              <div className="p-5">
                <div className="st-eyebrow mb-2">Respuesta</div>
                <div className="font-display text-4xl text-white leading-none">7s</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Ticker 1 */}
      <div className="st-ticker">
        <div className="animate-marquee">
          {[1, 2, 3].map((g) => (
            <React.Fragment key={g}>
              {capacidades.map((c) => (
                <span key={`${g}-${c}`}>{c}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 02 — SOLUCIONES */}
      <section id="soluciones" className="py-24 md:py-32 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHead
            n="02"
            label="Soluciones"
            desc="Sistemas que reemplazan el trabajo manual repetitivo y operan solos."
          >
            Infraestructura de <span className="text-accent">soluciones</span>
          </SectionHead>

          <div className="st-cells grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {siteConfig.services.map((s, i) => (
              <a
                href={`/servicios#${s.id}`}
                key={s.id}
                className="st-cell-hover group block p-7 md:p-9 no-underline text-inherit min-h-[260px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <span className="st-eyebrow">
                      <b>0{i + 1}</b> / Servicio
                    </span>
                    <span className="text-humo group-hover:text-accent transition-colors" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3 className="mb-4 text-lg md:text-xl uppercase text-white">{s.title}</h3>
                  <p className="text-humo text-sm leading-relaxed">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <a href="/servicios" className="st-link">
            Explorar ecosistema completo <span className="text-accent">→</span>
          </a>
        </div>
      </section>

      {/* Ticker 2 */}
      <div className="st-ticker">
        <div className="animate-marquee">
          {[1, 2, 3].map((g) => (
            <React.Fragment key={g}>
              {sectores.map((c) => (
                <span key={`${g}-${c}`}>{c}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 03 — MOTOR ANALÍTICO */}
      <section id="asesoria" className="py-24 md:py-32 px-[5%] bg-grafito/30 border-y border-white/10">
        <div className="max-w-[900px] mx-auto">
          <AnalyticalEngine />
        </div>
      </section>

      {/* 04 — INSIGHTS */}
      <section id="comunidad" className="py-24 md:py-32 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHead
            n="04"
            label="Insights y comunidad"
            desc="Conocimiento aplicado. Arquitecturas reales, sin relleno."
          >
            Insights & <span className="text-accent">comunidad</span>
          </SectionHead>

          <InsightsSection posts={insights} />

          <div className="mt-12">
            <a href="/insights" className="st-link">
              Ver todos los artículos <span className="text-accent">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 05 — RESULTADOS */}
      <section id="resultados" className="py-24 md:py-32 px-[5%] bg-grafito/30 border-y border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <SectionHead n="05" label="Resultados">
            Resultados, <span className="text-accent">no promesas.</span>
          </SectionHead>

          <div className="st-cells grid-cols-2 lg:grid-cols-4">
            {[
              { val: '-80%', label: 'Carga operativa' },
              { val: '300%', label: 'Aumento en ventas' },
              { val: '60%', label: 'Reducción de errores' },
              { val: '7s', label: 'Tiempo de respuesta' },
            ].map((stat, i) => (
              <div key={i} className="p-6 md:p-10">
                <div className="text-4xl md:text-6xl font-display text-white leading-none mb-5 whitespace-nowrap">
                  <Counter end={stat.val} />
                </div>
                <span className="st-line-key" />
                <p className="st-eyebrow mt-4">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — AUTORIDAD */}
      <section id="autoridad" className="py-24 md:py-32 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHead n="06" label="Testimonios">
            Lo que dicen los <span className="text-accent">líderes</span>
          </SectionHead>

          <div className="st-cells grid-cols-1 md:grid-cols-3">
            {siteConfig.reviews.map((rev, i) => (
              <figure key={i} className="p-7 md:p-9 flex flex-col justify-between m-0 min-h-[280px]">
                <blockquote className="m-0 text-blanco/90 text-sm md:text-base leading-relaxed mb-8">
                  &quot;{rev.text}&quot;
                </blockquote>
                <figcaption>
                  <div className="text-white text-base font-extrabold uppercase">{rev.name}</div>
                  <span className="st-eyebrow mt-2">{rev.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="st-btn st-btn-primary w-full md:w-auto"
            >
              Agendar auditoría IA <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
