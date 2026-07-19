"use client";
import React from 'react';
import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="py-24 px-[5%] text-center bg-carbon border-t border-white/5">
      <span className="st-status-line mb-8 block mx-auto" />
      <h2 className="text-5xl md:text-8xl mb-12 uppercase text-white">
        Scale Faster.
      </h2>
      
      {/* Redes Sociales */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-16">
        {siteConfig.socialLinks.map((social, i) => (
          <a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 md:w-14 md:h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-400 hover:-translate-y-1"
            style={{ 
              backgroundColor: 'transparent'
            }}
            title={social.name}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = social.color;
              e.currentTarget.style.color = social.color;
              e.currentTarget.style.boxShadow = `0 0 20px ${social.color}44`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div 
              className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center" 
              dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="${social.fill}" stroke="${social.stroke}" stroke-width="${social.strokeWidth}" class="w-full h-full">${social.svg}</svg>` }} 
            />
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="st-label flex gap-[30px] opacity-60 text-[11px] font-bold">
          <a
            href="/politicadeprivacidad"
            className="text-white no-underline hover:text-accent transition-colors"
          >
            PRIVACIDAD
          </a>
          <span className="text-white/20">|</span>
          <a
            href="/terminosycondiciones"
            className="text-white no-underline hover:text-accent transition-colors"
          >
            TÉRMINOS
          </a>
        </div>
        <p className="st-label opacity-20 text-[10px] tracking-[6px] md:tracking-[8px] mt-5 text-white">
          STRATT-ON AGENCY // ANTIOQUIA, COLOMBIA // {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
