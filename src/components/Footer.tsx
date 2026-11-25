import React from 'react';
import Image from 'next/image';
import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-carbon/30 border-t border-white/10 px-[5%] pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-5xl md:text-[8rem] uppercase text-white leading-[0.95] mb-16">
          Scale faster<span className="text-accent">.</span>
        </h2>

        <div className="st-cells grid-cols-1 md:grid-cols-4 mb-10">
          <div className="p-7">
            <Image
              src="/brand/stratton-logo-principal-fondo-oscuro.svg"
              alt="Stratt-On"
              width={161}
              height={25}
              className="h-6 w-auto mb-5"
            />
            <p className="text-humo text-sm leading-relaxed">
              Arquitectura de automatización. Sistemas de producción, no demos.
            </p>
          </div>

          <div className="p-7">
            <div className="st-eyebrow mb-5">Navegación</div>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                ['/#soluciones', 'Soluciones'],
                ['/servicios', 'Servicios'],
                ['/insights', 'Insights'],
                ['/redes', 'Redes'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-blanco text-sm no-underline hover:text-accent transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7">
            <div className="st-eyebrow mb-5">Contacto</div>
            <ul className="space-y-3 list-none p-0 m-0 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-blanco no-underline hover:text-accent transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-humo">{siteConfig.location}</li>
              <li>
                <a
                  href={siteConfig.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blanco no-underline hover:text-accent transition-colors"
                >
                  Agendar auditoría →
                </a>
              </li>
            </ul>
          </div>

          <div className="p-7">
            <div className="st-eyebrow mb-5">Redes</div>
            <div className="flex flex-wrap gap-3">
              {siteConfig.socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  aria-label={social.name}
                  className="w-11 h-11 border border-white/10 rounded-st flex items-center justify-center text-humo hover:text-accent hover:border-accent transition-colors duration-200"
                >
                  <div
                    className="w-5 h-5"
                    dangerouslySetInnerHTML={{
                      __html: `<svg viewBox="0 0 24 24" fill="${social.fill}" stroke="${social.stroke}" stroke-width="${social.strokeWidth}" class="w-full h-full">${social.svg}</svg>`,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="st-eyebrow">
            <span className="st-led st-led--live" /> Sistemas operativos
          </div>
          <div className="st-eyebrow gap-6">
            <a href="/politicadeprivacidad" className="text-humo no-underline hover:text-accent transition-colors">Privacidad</a>
            <a href="/terminosycondiciones" className="text-humo no-underline hover:text-accent transition-colors">Términos</a>
          </div>
          <p className="st-eyebrow m-0">
            Stratt-On Agency // {siteConfig.location} // {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
