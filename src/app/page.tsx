"use client";
import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration = 2000 }: { end: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setIsVisible(true); 
    }, { threshold: 0.5 });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, numericEnd, duration]);

  return <span ref={countRef}>{suffix.startsWith('-') ? '-' : ''}{count}{suffix.replace('-', '')}</span>;
};

export default function Home() {
  const [hours, setHours] = useState(50);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const whatsappNumber = "573000000000"; // REEMPLAZA CON TU NÚMERO

  // AI TERMINAL INTERFACE
  const [iaInput, setIaInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const fullTypewriterText = "Indica el proceso operativo a mejorar para generar tu diagnóstico en línea.";

  const [iaLog, setIaLog] = useState([
    { role: "system", text: "SISTEMA INICIADO. Motor Analítico Stratt-On en línea." },
  ]);

  const [activePost, setActivePost] = useState<{tag: string, title: string, desc: string, content: string} | null>(null);

  const electricPurple = "#9D00FF";
  const whopOrange = "#FF5C00";
  const savings = hours * 20; 

  const videoRef = useRef<HTMLVideoElement>(null);
  const asesoriaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Autoplay mitigado:", e));
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const asesoriaObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            startTypewriterAnimation();
            asesoriaObserver.unobserve(entry.target);
        }
    }, { threshold: 0.3 });
    if (asesoriaRef.current) asesoriaObserver.observe(asesoriaRef.current);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        asesoriaObserver.disconnect();
    };
  }, []);

  const startTypewriterAnimation = () => {
    let charIndex = 0;
    const interval = setInterval(() => {
        setTypedText(fullTypewriterText.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === fullTypewriterText.length) {
            clearInterval(interval);
            setIsTypingFinished(true);
        }
    }, 45); 
  };

  const handleSendWhatsapp = () => {
    if(chatMessage.trim() === "") return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, '_blank');
    setChatOpen(false);
    setChatMessage("");
  };

  const handleRunAiPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if(iaInput.trim() === "") return;
    
    setIaLog(prev => [...prev, { role: "user", text: `> ${iaInput}` }]);
    setIaInput("");
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIaLog(prev => [...prev, { role: "ai", text: "Analizando cuellos de botella... Transfiriendo variables al equipo de ingeniería. Nos pondremos en contacto con la arquitectura operativa propuesta." }]);
    }, 1800);
  };

  // ICONOS CON COLOR NARANJA WHOP (#FF5C00) APLICADO
  const socialLinks = [
    { name: "Email", link: "mailto:jcelis.stratton@gmail.com", color: whopOrange, svg: "<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><polyline points='22,6 12,13 2,6' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>" },
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: whopOrange, svg: "<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' fill='currentColor' stroke='none'/>" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: whopOrange, svg: "<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' fill='currentColor' stroke='none'/>" },
    { name: "Whop", link: "https://whop.com/joined/biz_fNslGhWeZdy2WR/?tab=home", color: whopOrange, svg: "<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>" }
  ];

  const services = [
    { title: "Voicebots Inbound IA", desc: "Agentes de voz con empatía humana y cero latencia. Atienden, resuelven dudas y agendan reuniones operativas 24/7." },
    { title: "Growth Outbound AI", desc: "Maquinaria de adquisición autónoma. Hiper-personalizamos el contacto corporativo a escala en Email y LinkedIn." },
    { title: "Orquestación Operativa", desc: "Automatización total. Conectamos tus CRMs, ERPs y herramientas internas en un ecosistema lógico sin intervención humana." },
    { title: "Chatbots de Resolución", desc: "Asistentes virtuales para WhatsApp y Web que no solo responden, sino que cierran procesos, ventas y tickets de soporte." },
    { title: "Integración de Datos", desc: "Organizamos tu ecosistema. Tu data fluye de un departamento a otro actualizándose en tiempo real sin digitación manual." },
    { title: "Consultoría Estratégica", desc: "Auditoría profunda de tus procesos. Detectamos fugas de capital y diseñamos tu ruta hacia la automatización empresarial." }
  ];

  const blogPosts = [
    { tag: "Orquestación", title: "Cómo eliminar 40 horas de trabajo administrativo a la semana", desc: "Descubre el flujo exacto que implementamos para centralizar la operación B2B sin intervención humana.", content: "El trabajo administrativo repetitivo es la mayor fuga de capital de las empresas modernas. A través de la orquestación operativa, hemos logrado consolidar tareas de facturación, actualización de CRMs y envío de reportes en flujos de datos autónomos. En lugar de tener a tres personas digitando datos en Excel, un sistema centralizado procesa la información en milisegundos, garantizando cero errores y disponibilidad 24/7." },
    { tag: "Voicebots IA", title: "El fin del Call Center tradicional", desc: "Por qué los agentes de voz autónomos están reemplazando las líneas de soporte saturadas y triplicando el rendimiento.", content: "Los tiempos de espera superiores a un minuto son inaceptables para el cliente corporativo actual. Los Voicebots IA de latencia ultra-baja no solo responden de inmediato, sino que entienden contexto, pausas e intenciones. Capaces de consultar bases de datos en tiempo real, estos agentes resuelven el 80% de las incidencias de Nivel 1 sin necesidad de escalar a un humano, reduciendo costos operativos drásticamente." },
    { tag: "Productividad", title: "La ilusión de contratar más personal", desc: "Por qué añadir más humanos a un proceso roto solo multiplica los errores operativos.", content: "Existe un mito en el mundo empresarial: 'Si no damos abasto, contratemos a más personas'. Escalar sobre un sistema ineficiente solo escala la ineficiencia. Antes de aumentar la nómina, es imperativo auditar la operación. La implementación de ecosistemas autónomos permite que la empresa crezca en ingresos sin que los costos de personal crezcan en la misma proporción." },
  ];

  const reviews = [
    { name: "Carlos M.", role: "CEO, E-commerce Retail", text: "Nuestra operación nocturna solía ser un caos. Stratt-On unificó nuestros canales y ahora el negocio corre solo mientras dormimos." },
    { name: "Laura V.", role: "Directora de Operaciones B2B", text: "La orquestación de procesos nos ahorró el equivalente a 3 salarios. Escalar ahora es solo cuestión de decisiones, no de micro-gestión." },
    { name: "David R.", role: "Founder, Inmobiliaria", text: "Nuestro flujo de datos ahora es perfecto. Desde la captura del lead hasta la firma del documento, todo sucede en automático." }
  ];

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.95) 100%); z-index: -1; }
        
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border: none; cursor: pointer; border-radius: 4px; }
        .btn-glow:hover { box-shadow: 0 0 40px ${electricPurple}; transform: translateY(-3px); background: #fff !important; color: #000 !important; }
        .btn-outline { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
        
        .link-explore { display: inline-flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; font-weight: 900; font-size: clamp(0.9rem, 2vw, 1rem); text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; padding-bottom: 5px; border-bottom: 1px solid transparent; cursor: pointer; }
        .link-explore .arrow { transition: 0.4s; color: ${electricPurple}; }
        .link-explore:hover { color: ${electricPurple}; border-bottom: 1px solid ${electricPurple}; gap: 20px; }

        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.15); }
        .sales-list li { margin-bottom: 15px; display: flex; align-items: flex-start; gap: 15px; font-size: 1.1rem; color: #ccc; line-height: 1.4; }
        .sales-list svg { color: ${electricPurple}; flex-shrink: 0; margin-top: 3px; }
        
        .service-link { text-decoration: none; color: inherit; display: block; outline: none; }
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: clamp(20px, 5vw, 40px); transition: 0.4s ease; cursor: pointer; height: 100%; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;}
        @media (min-width: 901px) {
          .glass-card:hover { border-color: ${electricPurple}; background: rgba(0,0,0,0.8); transform: translateY(-5px); box-shadow: 0 0 40px rgba(157,0,255,0.15); }
          .glass-card:hover .link-explore { color: ${electricPurple}; gap: 20px; }
        }
        @media (max-width: 900px) {
          .glass-card { border-color: ${electricPurple} !important; background: rgba(0,0,0,0.8) !important; box-shadow: 0 0 25px rgba(157,0,255,0.15) !important; margin-bottom: 20px; }
        }

        /* HIGH PERFORMANCE MARQUEE 1 (PURPLE) */
        @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-container-1 { position: relative; width: 105vw; margin-left: -2.5vw; transform: rotate(-3deg) scale(1.05); background: #000; border-top: 2px solid ${electricPurple}; border-bottom: 2px solid ${electricPurple}; padding: clamp(20px, 4vw, 35px) 0; overflow: hidden; box-shadow: 0 0 50px rgba(157,0,255,0.3); z-index: 10;}
        .marquee-track-1 { display: flex; width: max-content; animation: marqueeLeft 30s linear infinite; }
        .marquee-container-1:hover .marquee-track-1 { animation-play-state: paused; }
        .marquee-item-1 { font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900; text-transform: uppercase; letter-spacing: 4px; padding-right: 80px; transition: 0.3s; color: #fff; text-shadow: 0 0 20px ${electricPurple}; }
        .marquee-item-1.stroke { color: transparent; -webkit-text-stroke: 2px ${electricPurple}; text-shadow: none;}

        /* HIGH PERFORMANCE MARQUEE 2 (ORANGE) */
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .marquee-container-2 { position: relative; width: 105vw; margin-left: -2.5vw; transform: rotate(3deg) scale(1.05); background: #000; border-top: 2px solid ${whopOrange}; border-bottom: 2px solid ${whopOrange}; padding: clamp(20px, 4vw, 35px) 0; overflow: hidden; box-shadow: 0 0 50px rgba(255,92,0,0.2); z-index: 10; margin-top: 50px;}
        .marquee-track-2 { display: flex; width: max-content; animation: marqueeRight 35s linear infinite; }
        .marquee-container-2:hover .marquee-track-2 { animation-play-state: paused; }
        .marquee-item-2 { font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900; text-transform: uppercase; letter-spacing: 4px; padding-right: 80px; transition: 0.3s; color: #fff; text-shadow: 0 0 20px ${whopOrange}; }
        .marquee-item-2.stroke { color: transparent; -webkit-text-stroke: 2px ${whopOrange}; text-shadow: none;}

        /* ICONOS REDES SOCIALES DESTACADOS */
        .social-container { display: flex; justify-content: center; flex-wrap: wrap; gap: clamp(15px, 3vw, 25px); margin-bottom: clamp(40px, 8vw, 80px); }
        .social-icon { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: 0.4s; }
        .social-icon svg { width: 24px; height: 24px; }
        @media (max-width: 600px) {
          .social-icon { width: 50px; height: 50px; }
          .social-icon svg { width: 20px; height: 20px; }
        }
        
        /* WIDGET WHATSAPP */
        .wa-float { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background-color: #050505; color: ${electricPurple}; border: 2px solid ${electricPurple}; border-radius: 50px; text-align: center; box-shadow: 0px 4px 20px rgba(157, 0, 255, 0.4); z-index: 1000; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
        .wa-float:hover { transform: scale(1.1); background-color: ${electricPurple}; color: #fff; }
        .wa-chat-box { position: fixed; bottom: 105px; right: 30px; width: 340px; background: #050505; border: 1px solid ${electricPurple}; border-radius: 15px; box-shadow: 0 15px 45px rgba(0,0,0,0.8); z-index: 1000; overflow: hidden; transform-origin: bottom right; transition: 0.3s; transform: scale(0); opacity: 0; pointer-events: none; }
        .wa-chat-box.open { transform: scale(1); opacity: 1; pointer-events: all; }
        .wa-header { background: #000; color: #fff; padding: 20px; font-weight: 900; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid ${electricPurple}; text-transform: uppercase; letter-spacing: 1px;}
        .wa-body { padding: 20px; background: #0a0a0a; }
        .wa-msg-bot { background: rgba(157,0,255,0.1); color: #ddd; padding: 15px; border-radius: 0 15px 15px 15px; font-size: 0.95rem; margin-bottom: 15px; border: 1px solid rgba(157,0,255,0.2); }
        .wa-input { width: 100%; background: #000; border: 1px solid #333; padding: 15px; border-radius: 10px; resize: none; color: #fff; outline: none; margin-bottom: 15px; transition: 0.3s;}
        .wa-input:focus { border-color: ${electricPurple}; }
        .wa-send-btn { width: 100%; background: ${electricPurple}; color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 1px;}

        /* MENU MÓVIL */
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-menu-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.98); backdrop-filter: blur(15px); z-index: 99; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 40px; transform: translateY(-100%); transition: 0.4s ease-in-out; }
          .mobile-menu-overlay.open { transform: translateY(0); }
          .mobile-link { color: #fff; text-decoration: none; font-size: 2rem; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;}
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }

        /* AI TERMINAL UI (PULIDO Y FOCALIZADO) */
        .ai-unified-container { background: linear-gradient(180deg, #0a0a0a 0%, #000 100%); border: 2px solid ${electricPurple}; border-radius: 24px; overflow: hidden; box-shadow: 0 0 60px rgba(157,0,255,0.2), inset 0 0 30px rgba(157,0,255,0.05); }
        .ai-header-controls { background: #000; padding: 15px 25px; border-bottom: 1px solid rgba(157,0,255,0.2); display: flex; justify-content: space-between; align-items: center; }
        .ai-terminal { font-family: monospace; display: flex; flex-direction: column; min-height: 400px; position: relative; }
        .ai-log { flex: 1; padding: clamp(20px, 4vw, 40px); overflow-y: auto; display: flex; flex-direction: column; gap: 15px; color: #bbb; font-size: 1rem; }
        .log-entry.system { color: ${electricPurple}; font-weight: bold; }
        .log-entry.user { color: #fff; opacity: 0.8; }
        .log-entry.ai { color: #ddd; border-left: 2px solid ${electricPurple}; padding-left: 15px; }
        
        .ai-typewriter-container { padding: clamp(20px, 5vw, 40px); border-bottom: 1px solid rgba(157,0,255,0.2); text-align: center; background: rgba(157,0,255,0.02);}
        .ai-typewriter { position: relative; color: #fff; line-height: 1.5; font-size: clamp(1.2rem, 3vw, 2rem); font-weight: 900; text-transform: uppercase; font-family: 'Inter', sans-serif;}
        .ai-cursor { display: inline-block; width: 12px; height: 1.1em; background: ${electricPurple}; vertical-align: bottom; animation: blink 0.8s infinite; margin-left: 5px; }
        @keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }

        /* Animación Neón de Atención al Input */
        @keyframes pulse-input-attention {
            0% { box-shadow: 0 0 0 0 rgba(157,0,255,0.6); border-color: rgba(157,0,255,0.8); }
            70% { box-shadow: 0 0 20px 10px rgba(157,0,255,0); border-color: rgba(157,0,255,0.3); }
            100% { box-shadow: 0 0 0 0 rgba(157,0,255,0); border-color: rgba(157,0,255,0.8); }
        }
        .ai-prompt { display: flex; padding: 20px; background: #050505; align-items: center; position: relative; transition: 0.3s; opacity: 0; pointer-events: none; margin: 20px; border-radius: 12px; border: 1px solid rgba(157,0,255,0.2); }
        .ai-prompt.finished { opacity: 1; pointer-events: all; animation: pulse-input-attention 2s infinite; }
        .ai-input { flex: 1; background: transparent; border: none; color: #fff; font-family: inherit; font-size: 1.1rem; outline: none; }
        .ai-submit { background: transparent; color: ${electricPurple}; border: none; font-weight: bold; cursor: pointer; text-transform: uppercase; font-family: inherit; font-size: 1rem; transition: 0.2s;}
        .ai-submit:hover { color: #fff; text-shadow: 0 0 10px ${electricPurple}; }

        .ai-input-wrapper { display: flex; flex: 1; align-items: center; position: relative; }
        .ai-input-cursor { width: 10px; height: 1.1em; background: ${electricPurple}; animation: blink 0.8s infinite; display: none;}
        .ai-input:focus + .ai-input-cursor { display: block; }
        .ai-input:not(:focus) + .ai-input-cursor { display: none !important; }
        .ai-input:empty:focus + .ai-input-cursor { display: block; position: absolute; left: 0px;}

        /* WHOP COMMUNITY CARD */
        .whop-card { background: linear-gradient(135deg, #FF5C00 0%, #D44D00 100%); color: #fff; border-radius: 20px; padding: clamp(20px, 5vw, 40px); position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(255, 92, 0, 0.2); display: flex; flex-direction: column; justify-content: center;}
        .whop-card::before { content: 'W'; position: absolute; right: -20px; bottom: -40px; font-size: 15rem; font-weight: 900; opacity: 0.1; line-height: 1; font-style: italic; pointer-events: none;}

        /* MODAL DE LECTURA (INSIGHTS) */
        .reading-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(10px); z-index: 1000; display: flex; justify-content: center; align-items: center; opacity: 0; pointer-events: none; transition: 0.3s; padding: 20px; }
        .reading-modal-overlay.open { opacity: 1; pointer-events: all; }
        .reading-modal-content { background: #0a0a0a; border: 1px solid rgba(157,0,255,0.3); border-radius: 16px; width: 100%; max-width: 800px; max-height: 90vh; overflow-y: auto; position: relative; padding: clamp(30px, 5vw, 60px); box-shadow: 0 20px 60px rgba(0,0,0,0.8); transform: translateY(20px); transition: 0.4s; }
        .reading-modal-overlay.open .reading-modal-content { transform: translateY(0); }
        .modal-close { position: absolute; top: 20px; right: 20px; background: transparent; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; transition: 0.3s; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
        .modal-close:hover { background: rgba(255,255,255,0.1); }
      `}} />

      {/* NAVEGACIÓN */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <a href="/" style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '1px', position: 'relative', zIndex: 101, color: '#fff', textDecoration: 'none' }}>STRATT-ON</a>
        
        <div className="desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Soluciones</a>
          <a href="#asesoria" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Motor Analítico</a>
          <a href="/insights" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Insights</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '12px 24px', fontSize: '11px' }}>AUDITORÍA IA</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 101, position: 'relative' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <a href="#soluciones" className="mobile-link" onClick={() => setMenuOpen(false)}>Soluciones</a>
        <a href="#asesoria" className="mobile-link" onClick={() => setMenuOpen(false)}>Motor Analítico</a>
        <a href="/insights" className="mobile-link" onClick={() => setMenuOpen(false)}>Insights</a>
        <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ marginTop: '20px' }} onClick={() => setMenuOpen(false)}>Auditoría IA</a>
      </div>

      {/* WIDGET WHATSAPP */}
      <div className="wa-float" onClick={() => setChatOpen(!chatOpen)}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path></svg>
      </div>
      <div className={`wa-chat-box ${chatOpen ? 'open' : ''}`}>
        <div className="wa-header"><span>Stratt-On Chat</span><button onClick={() => setChatOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button></div>
        <div className="wa-body">
          <div className="wa-msg-bot"><strong style={{color: electricPurple}}>Asistente Virtual:</strong><br/><br/>Hola, ¿En qué proceso operativo de tu empresa te podemos ayudar hoy?</div>
          <textarea className="wa-input" rows={3} placeholder="Escribe tu mensaje aquí..." value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} />
          <button className="wa-send-btn" onClick={handleSendWhatsapp}>Enviar a un Asesor</button>
        </div>
      </div>

      {/* MODAL DE LECTURA (INSIGHTS) */}
      <div className={`reading-modal-overlay ${activePost ? 'open' : ''}`} onClick={() => setActivePost(null)}>
        <div className="reading-modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActivePost(null)}>✕</button>
          {activePost && (
            <>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: electricPurple, textTransform: 'uppercase', letterSpacing: '1px' }}>{activePost.tag}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, margin: '20px 0', lineHeight: 1.2 }}>{activePost.title}</h2>
              <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>{activePost.desc}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', color: '#eee', fontSize: '1.05rem', lineHeight: 1.8 }}>
                {activePost.content}
              </div>
              <div style={{ marginTop: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">Agendar reunión consultiva</a>
                <a href="/insights" style={{ color: electricPurple, fontWeight: 'bold', textDecoration: 'underline', fontSize: '0.95rem' }}>Ver más artículos →</a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 0 50px', backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video ref={videoRef} playsInline autoPlay muted loop poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}>
          <source src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        
        <div style={{ zIndex: 1, padding: '0 5%', width: '100%', maxWidth: '1400px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', border: `1px solid ${electricPurple}`, borderRadius: '20px', color: electricPurple, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '25px', textTransform: 'uppercase', background: 'rgba(157,0,255,0.05)' }}>
              Orquestación Operativa B2B
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px', textTransform: 'uppercase' }}>
              Tu empresa no duerme.<br />Tu operación <span style={{ color: electricPurple }}>tampoco.</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: '#ddd', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px', fontWeight: 500 }}>
              Implementamos Ecosistemas Autónomos que orquestan tus ventas, atención al cliente y procesos internos 24/7. Escala tu rentabilidad sin colapsar a tu equipo.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">Auditoría Gratuita</a>
              <a href="#asesoria" className="btn-outline">Motor Analítico</a>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)', padding: 'clamp(30px, 5vw, 45px)', borderLeft: `3px solid ${electricPurple}`, borderRadius: '0 20px 20px 0', boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Potencia Operativa</h3>
            <ul className="sales-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><svg width="24" height="24" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Ejecución inmediata en procesos críticos empresariales.</span></li>
              <li><svg width="24" height="24" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Atención, soporte y agendamiento <strong>B2B 24/7</strong>.</span></li>
              <li><svg width="24" height="24" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Reducción de costos operativos hasta un <strong>80%</strong>.</span></li>
              <li><svg width="24" height="24" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Ecosistemas autónomos con <strong>cero margen de error</strong>.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARQUEE 1: TECNOLOGÍAS (MORADO INTENSO) */}
      <div className="marquee-container-1">
        <div className="marquee-track-1">
          {[1, 2, 3].map(i => (
            <React.Fragment key={`left-${i}`}>
              <span className="marquee-item-1">VOICEBOTS IA</span>
              <span className="marquee-item-1 stroke">ORQUESTACIÓN OPERATIVA</span>
              <span className="marquee-item-1">SISTEMAS AUTÓNOMOS</span>
              <span className="marquee-item-1 stroke">ROI DRIVEN</span>
              <span className="marquee-item-1">SMART CHATBOTS</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SECCIÓN SOLUCIONES */}
      <section id="soluciones" style={{ padding: 'clamp(80px, 10vw, 120px) 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase' }}>Infraestructura de <span style={{ color: electricPurple }}>Soluciones</span></h2>
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 0' }}>Sistemas autónomos diseñados específicamente para agilizar la operación de tu empresa. Olvídate del trabajo manual repetitivo.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 30px)', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            {services.map((s, i) => (
              <a href="/servicios" key={i} className="service-link">
                <div className="glass-card">
                  <h3 style={{ fontWeight: 900, marginBottom: '15px', fontSize: '1.3rem', textTransform: 'uppercase', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '15px' }}>{s.title}</h3>
                  <p style={{ opacity: 0.8, lineHeight: '1.6', fontSize: '1rem' }}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/servicios" className="link-explore">Explorar Ecosistema Completo <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* MARQUEE 2: SECTORES B2B (NARANJA WHOP) REUBICADO */}
      <div className="marquee-container-2">
        <div className="marquee-track-2">
          {[1, 2, 3].map(i => (
            <React.Fragment key={`right-${i}`}>
              <span className="marquee-item-2 stroke">E-COMMERCE PRO</span>
              <span className="marquee-item-2">TECH LOGISTICS</span>
              <span className="marquee-item-2 stroke">REAL ESTATE GROUP</span>
              <span className="marquee-item-2">SAAS LATAM</span>
              <span className="marquee-item-2 stroke">B2B ENTERPRISE</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SECCIÓN ASESORÍA INTELIGENTE (LIMPIA Y CON ANIMACIÓN FOCAL) */}
      <section ref={asesoriaRef} id="asesoria" style={{ padding: 'clamp(80px, 10vw, 120px) 5%', background: '#050505', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="ai-unified-container">
            {/* Header del Dashboard */}
            <div className="ai-header-controls">
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}/>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}/>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}/>
              </div>
              <div style={{ fontSize: '0.85rem', letterSpacing: '2px', opacity: 0.7, fontWeight: 900, color: '#fff' }}>MOTOR_ANALÍTICO_V2.0</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#25D366', fontWeight: 'bold' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#25D366', borderRadius: '50%', boxShadow: '0 0 10px #25D366' }}></span> ONLINE
              </div>
            </div>

            {/* Panel de Typewriter Céntrico */}
            <div className="ai-typewriter-container">
              <div className="ai-typewriter">
                {typedText}<span className="ai-cursor"></span>
              </div>
            </div>

            {/* Terminal de Comandos */}
            <div className="ai-terminal">
              <div className="ai-log">
                {iaLog.map((msg, idx) => (
                  <div key={idx} className={`log-entry ${msg.role}`}>{msg.text}</div>
                ))}
                {isProcessing && <div className="log-entry ai" style={{ opacity: 0.7 }}>Analizando vectores operativos...</div>}
              </div>

              {/* Input con Animación de Pulso Neón para llamar la atención */}
              <form onSubmit={handleRunAiPrompt} className={`ai-prompt ${isTypingFinished ? 'finished' : ''}`}>
                <span style={{ color: electricPurple, marginRight: '15px', fontWeight: 'bold', fontSize: '1.2rem' }}>$</span>
                <div className="ai-input-wrapper">
                    <input 
                      type="text" 
                      className="ai-input" 
                      placeholder="Ej: Mi equipo pierde horas copiando datos de correos a un Excel..." 
                      value={iaInput} 
                      onChange={(e) => setIaInput(e.target.value)}
                      disabled={isProcessing}
                    />
                    <span className="ai-input-cursor"></span>
                </div>
                <button type="submit" className="ai-submit" disabled={isProcessing}>EJECUTAR_</button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN INSIGHTS Y COMUNIDAD CLICKABLES */}
      <section id="comunidad" style={{ padding: 'clamp(60px, 10vw, 120px) 5%', background: '#000' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase' }}>Insights & <span style={{ color: electricPurple }}>Comunidad</span></h2>
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto 0' }}>Conocimiento aplicado. Descubre los sistemas que están transformando la industria.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {blogPosts.map((post, i) => (
                <div key={i} className="glass-card" onClick={() => setActivePost(post)}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: electricPurple, textTransform: 'uppercase', letterSpacing: '1px' }}>{post.tag}</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '15px 0', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>{post.desc}</p>
                  </div>
                  <div className="link-explore" style={{ fontSize: '0.9rem', marginTop: 'auto', alignSelf: 'flex-start' }}>Leer artículo <span className="arrow">→</span></div>
                </div>
              ))}
            </div>

            <div style={{ flex: '1 1 350px' }}>
              <div className="whop-card" style={{ height: '100%' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9, marginBottom: '15px' }}>Acceso VIP</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>Comunidad Stratt-On</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '30px' }}>
                  Únete a nuestro círculo privado en Whop. Accede a arquitecturas operativas y networking con directores B2B.
                </p>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.2)', position: 'relative', zIndex: 2 }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Último recurso añadido:</span>
                  <p style={{ fontWeight: 'bold', margin: '5px 0 0 0', fontStyle: 'italic' }}>"Plantilla de Orquestación: Calificación B2B v2.0"</p>
                </div>
                <a href="https://whop.com/joined/biz_fNslGhWeZdy2WR/?tab=home" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: whopOrange, padding: '15px 30px', borderRadius: '8px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', textAlign: 'center', transition: '0.3s', display: 'block', position: 'relative', zIndex: 2 }}>Unirme en Whop</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN RESULTADOS */}
      <section id="resultados" style={{ padding: 'clamp(60px, 10vw, 120px) 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 'clamp(40px, 8vw, 80px)' }}>Resultados que Impactan</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
            {[
              { val: "- 80%", label: "Carga Operativa" },
              { val: "300%", label: "Aumento en Ventas" },
              { val: "60%", label: "Reducción Errores" },
              { val: "7s", label: "Tiempo Respuesta" }
            ].map((stat, i) => (
              <div key={i} style={{ flex: '1', minWidth: '250px', padding: 'clamp(30px, 5vw, 60px) 20px', border: '1px solid #eaeaea', borderRadius: '20px', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: 'clamp(3.5rem, 8vw, 5rem)', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '15px' }}><Counter end={stat.val} /></div>
                <p style={{ fontWeight: 800, color: '#555', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN REVIEWS */}
      <section id="autoridad" style={{ padding: 'clamp(60px, 10vw, 120px) 5%', background: '#050505' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>Lo que dicen los <span style={{ color: electricPurple }}>Líderes</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {reviews.map((rev, i) => (
              <div key={i} className="glass-card" style={{ position: 'relative' }}>
                <div style={{ fontSize: '5rem', color: electricPurple, position: 'absolute', top: '10px', right: '30px', opacity: 0.15, fontFamily: 'serif', lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '1.1rem', color: '#ddd', lineHeight: 1.8, marginBottom: '30px', position: 'relative', zIndex: 1 }}>"{rev.text}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <h4 style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '5px' }}>{rev.name}</h4>
                  <span style={{ color: electricPurple, fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ROI */}
      <section id="roi" style={{ padding: 'clamp(60px, 10vw, 120px) 5%', background: '#111', color: '#fff', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px' }}>Calcula tu <span style={{ color: electricPurple }}>Libertad</span></h2>
        <p style={{ color: '#888', marginBottom: '40px', fontSize: '1.1rem' }}>Descubre cuánto dinero recuperas al mes (Basado en $20 USD/hora operativa).</p>
        <input type="range" min="10" max="200" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%', maxWidth: '800px', accentColor: electricPurple, height: '8px', cursor: 'pointer', marginBottom: '40px' }} />
        <div style={{ background: '#000', padding: 'clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px)', borderRadius: '24px', display: 'inline-block', border: `1px solid ${electricPurple}`, boxShadow: `0 0 60px rgba(157,0,255,0.15)`, width: '100%', maxWidth: '500px' }}>
          <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '15px', fontSize: '0.9rem' }}>Ahorro Proyectado</p>
          <div style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 900, lineHeight: 1 }}>${savings.toLocaleString()} <span style={{ fontSize: '1.2rem', color: electricPurple, verticalAlign: 'middle' }}>USD/MES</span></div>
          <p style={{ marginTop: '25px', fontWeight: 'bold', color: '#fff', fontSize: '1.1rem' }}>{hours} horas automatizadas.</p>
        </div>
      </section>

      {/* FOOTER PREMIUM CON ÍCONOS NARANJA WHOP */}
      <footer style={{ padding: 'clamp(60px, 10vw, 100px) 5% 50px', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(2.5rem, 8vw, 6rem)', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scale Faster.</h2>
        <div className="social-container">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="social-icon" title={social.name}
              style={{
                borderColor: social.color,
                color: social.color,
                boxShadow: `0 0 15px ${social.color}44`,
                border: `2px solid ${social.color}`
              }}
              onMouseOver={(e) => { e.currentTarget.style.boxShadow = `0 0 35px ${social.color}`; e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'; e.currentTarget.style.background = `${social.color}11`; }}
              onMouseOut={(e) => { e.currentTarget.style.boxShadow = `0 0 15px ${social.color}44`; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <div dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24">${social.svg}</svg>` }} />
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px', opacity: 0.6, fontSize: '11px', letterSpacing: '3px', fontWeight: 'bold' }}>
            <a href="/politicadeprivacidad" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e=>e.currentTarget.style.color=electricPurple} onMouseOut={e=>e.currentTarget.style.color='#fff'}>PRIVACIDAD</a>
            <span style={{ color: '#333' }}>|</span>
            <a href="/terminosycondiciones" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e=>e.currentTarget.style.color=electricPurple} onMouseOut={e=>e.currentTarget.style.color='#fff'}>TÉRMINOS</a>
          </div>
          <p style={{ opacity: 0.2, fontSize: '11px', letterSpacing: '8px', textTransform: 'uppercase', marginTop: '20px' }}>STRATT-ON AGENCY // 2026</p>
        </div>
      </footer>
    </main>
  );
}