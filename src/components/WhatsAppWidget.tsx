"use client";
import React, { useState } from 'react';
import { siteConfig } from '../config/site';

export default function WhatsAppWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim() === "") return;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, '_blank');
    setChatOpen(false);
    setChatMessage("");
  };

  return (
    <>
      {/* Floating WhatsApp button */}
      <button 
        className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] bg-black/90 text-green-400 border-2 border-green-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-1000 cursor-pointer hover:scale-110 hover:bg-green-500 hover:text-white transition-all duration-300 focus:outline-none"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Abrir chat de WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M9 10h.01"></path>
          <path d="M15 10h.01"></path>
        </svg>
      </button>

      {/* Terminal chat window */}
      <div
        className={`fixed bottom-[105px] right-[30px] w-[340px] bg-carbon border border-green-500 rounded shadow-[0_15px_45px_rgba(0,0,0,0.9)] z-1000 overflow-hidden origin-bottom-right transition-all duration-300 flex flex-col ${
          chatOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-carbon px-6 py-4 border-b border-green-500/30 flex justify-between items-center">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
          </div>
          <div className="st-label text-[10px] opacity-80 text-white">SOPORTE_OPERATIVO</div>
          <button
            onClick={() => setChatOpen(false)}
            className="bg-transparent border-none text-white cursor-pointer hover:opacity-75 focus:outline-none"
            aria-label="Cerrar chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        {/* Terminal Body */}
        <div className="font-mono flex flex-col min-h-[250px] bg-carbon">
          <div className="flex-1 p-6 flex flex-col gap-4 text-white/70 text-sm">
            <div className="text-green-500 font-bold">SISTEMA INICIADO.</div>
            <div className="border-l-2 border-green-500 pl-4 mt-2 text-white/90">
              Hola. Describe tu requerimiento operativo. Te conectamos con un humano por WhatsApp.
            </div>
          </div>

          {/* Terminal Input */}
          <form
            onSubmit={handleSendWhatsapp}
            className="flex items-center px-4 py-3 bg-white/5 border border-green-500/20 rounded-st mx-4 mb-4 focus-within:border-green-500 transition-colors"
          >
            <span className="text-green-500 mr-3.5 font-bold text-lg">$</span>
            <div className="flex-1 flex items-center relative">
              <input
                type="text"
                className="flex-1 bg-transparent border-none text-white text-sm outline-none w-full"
                placeholder="Escribe tu mensaje..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="st-label bg-transparent border-none text-green-400 cursor-pointer text-xs hover:text-white transition-colors"
            >
              ENVIAR_
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
