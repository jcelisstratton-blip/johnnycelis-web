"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function AnalyticalEngine() {
  const [iaInput, setIaInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  
  const [iaLog, setIaLog] = useState([
    { role: "system", text: "SISTEMA INICIADO. Motor Analítico Stratt-On en línea." },
  ]);

  const fullTypewriterText = "Describe el proceso que quieres optimizar. Generamos tu diagnóstico en línea.";
  const containerRef = useRef<HTMLDivElement>(null);

  function startTypewriter() {
    let charIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullTypewriterText.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === fullTypewriterText.length) {
        clearInterval(interval);
        setIsTypingFinished(true);
      }
    }, 45);
  }

  useEffect(() => {
    // Iniciar máquina de escribir al entrar en vista
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startTypewriter();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleRunAiPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (iaInput.trim() === "" || isProcessing) return;

    const userMessage = iaInput;
    setIaLog(prev => [...prev, { role: "user", text: `> ${userMessage}` }]);
    setIaInput("");
    setIsProcessing(true);

    try {
      const response = await fetch("https://n8n.apps1.strattonagency.cloud/webhook/agenteweb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ problema_operativo: userMessage })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setIaLog(prev => [...prev, { role: "ai", text: data.respuesta || "Solicitud procesada. Ecosistema en ejecución." }]);
    } catch (error) {
      console.error("Falla en la orquestación:", error);
      setIaLog(prev => [
        ...prev, 
        { 
          role: "ai", 
          text: "Error de conexión con el núcleo analítico. Verifica que el flujo de n8n esté activo o contacta soporte." 
        }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-[900px] mx-auto bg-gradient-to-b from-grafito to-carbon border-2 border-accent rounded overflow-hidden shadow-[0_0_60px_rgba(255,59,47,0.2)]">
      {/* Terminal Header */}
      <div className="bg-carbon px-6 py-4 border-b border-accent/20 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="st-label text-[11px] md:text-xs text-white">MOTOR_ANALÍTICO_V2.0</div>
        <div className="st-label flex items-center gap-2 text-xs text-white font-bold">
          <span className="st-led animate-pulse" />
          ONLINE
        </div>
      </div>

      {/* Typewriter Banner */}
      <div className="p-6 md:p-10 border-b border-accent/20 text-center bg-accent/2">
        <div className="relative text-white text-base md:text-2xl uppercase tracking-wider leading-relaxed">
          {typedText}
          <span className="inline-block w-2.5 h-[1.1em] bg-accent align-bottom animate-pulse ml-1.5" />
        </div>
      </div>

      {/* Terminal Console */}
      <div className="font-mono flex flex-col min-h-[300px] bg-carbon">
        <div className="flex-1 p-6 md:p-10 overflow-y-auto flex flex-col gap-4 text-white/70 text-sm">
          {iaLog.map((msg, idx) => (
            <div 
              key={idx} 
              className={`whitespace-pre-wrap leading-relaxed ${
                msg.role === 'system' ? 'text-accent font-bold' : 
                msg.role === 'user' ? 'text-white font-semibold' : 
                'text-white/90 border-l-2 border-accent pl-4 mt-1'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isProcessing && (
            <div className="text-white/50 animate-pulse border-l-2 border-accent pl-4 mt-1">
              Analizando vectores operativos...
            </div>
          )}
        </div>

        {/* Input prompt */}
        <form
          onSubmit={handleRunAiPrompt}
          className={`flex items-center p-4 bg-blanco border border-accent/20 rounded-st mx-5 mb-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-accent ${
            isTypingFinished ? 'opacity-100 pointer-events-auto shadow-[0_0_20px_rgba(255,59,47,0.3)]' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="text-accent mr-3.5 font-bold text-lg">$</span>
          <div className="flex-1 flex items-center relative">
            <input
              type="text"
              className="flex-1 bg-transparent border-none text-carbon text-sm md:text-base outline-none w-full font-semibold placeholder:text-carbon/40"
              placeholder="Ej: Mi equipo pierde horas copiando datos de correos a un Excel..."
              value={iaInput}
              onChange={(e) => setIaInput(e.target.value)}
              disabled={isProcessing}
            />
          </div>
          <button
            type="submit"
            className="st-label bg-transparent border-none text-accent cursor-pointer text-xs md:text-sm hover:opacity-75 transition-opacity"
            disabled={isProcessing}
          >
            EJECUTAR_
          </button>
        </form>
      </div>
    </div>
  );
}
