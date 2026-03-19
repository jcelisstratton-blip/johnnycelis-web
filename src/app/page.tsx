"use client";
import React, { useState, useEffect, useRef } from 'react';

// COMPONENTE DE CONTEO ANIMADO
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
  
  // WIDGET WHATSAPP
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const whatsappNumber = "573000000000"; // REEMPLAZA CON TU NÚMERO

  // CHAT ASESORÍA IA
  const [iaChatInput, setIaChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [iaChatHistory, setIaChatHistory] = useState([
    { sender: "bot", text: "Hola. Soy el motor analítico de Stratt-On. Cuéntame, ¿qué área de tu empresa te consume más horas operativas a la semana?" }
  ]);

  const electricPurple = "#9D00FF";
  const savings = hours * 20; 

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Autoplay mitigado:", e));
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendWhatsapp = () => {
    if(chatMessage.trim() === "") return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, '_blank');
    setChatOpen(false);
    setChatMessage("");
  };

  const handleSendIaChat = (e: React.FormEvent) => {
    e.preventDefault();
    if(iaChatInput.trim() === "") return;
    
    const newHistory = [...iaChatHistory, { sender: "user", text: iaChatInput }];
    setIaChatHistory(newHistory);
    setIaChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setIaChatHistory(prev => [...prev, { sender: "bot", text: "Procesando la información en nuestro ecosistema. Pronto conectaremos tu solicitud para diseñar una arquitectura a medida." }]);
    }, 1500);
  };

  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5", svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "TikTok", link: "https://www.tiktok.com/@stratt_on", color: "#fff", svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.44 6.44 0 0 1-1.87-1.43v7.33c.01 5.89-6.38 9.57-11.13 6.13-4.07-2.8-4.43-8.87-1.12-12.18 1.47-1.51 3.53-2.31 5.63-2.13v4.03c-1.41-.09-2.89.47-3.6 1.74-.83 1.52-.25 3.65 1.34 4.54 1.48.86 3.52.16 4.12-1.47.16-.4.24-.82.23-1.25V.02z" },
    { name: "WhatsApp", link: "https://wa.link/430g3p", color: "#25D366", svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" },
    { name: "Whop Comunidad", link: "#", color: "#FF5C00", svg: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" } // Icono estilo abstracto W/Capas
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
    { tag: "Orquestación", title: "Cómo eliminar 40 horas de trabajo administrativo a la semana", desc: "Descubre el flujo exacto que implementamos para centralizar la operación B2B sin intervención humana." },
    { tag: "Voicebots IA", title: "El fin del Call Center tradicional", desc: "Por qué los agentes de voz autónomos están reemplazando las líneas de soporte saturadas y triplicando el rendimiento." },
    { tag: "Productividad", title: "La ilusión de contratar más personal", desc: "Por qué añadir más humanos a un proceso roto solo multiplica los errores operativos." }
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
        
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%); z-index: -1; }
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border: none; cursor: pointer; border-radius: 4px; }
        .btn-glow:hover { box-shadow: 0 0 40px ${electricPurple}; transform: translateY(-3px); background: #fff !important; color: #000 !important; }
        .btn-outline { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
        
        /* ENLACE EXPANSIVO (Reemplazo del botón recargado) */
        .link-explore { display: inline-flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; padding-bottom: 5px; border-bottom: 1px solid transparent; }
        .link-explore .arrow { transition: 0.4s; color: ${electricPurple}; }
        .link-explore:hover { color: ${electricPurple}; border-bottom: 1px solid ${electricPurple}; gap: 20px; }

        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.15); }
        .sales-list li { margin-bottom: 15px; display: flex; align-items: flex-start; gap: 15px; font-size: 1.1rem; color: #ccc; line-height: 1.4; }
        .sales-list svg { color: ${electricPurple}; flex-shrink: 0; margin-top: 3px; }
        
        /* GLOW EFECT EN TARJETAS */
        .service-link { text-decoration: none; color: inherit; display: block; outline: none; }
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 40px; transition: 0.4s ease; cursor: pointer; height: 100%; position: relative; overflow: hidden;}
        @media (min-width: 901px) {
          .glass-card:hover { border-color: ${electricPurple}; background: rgba(0,0,0,0.8); transform: translateY(-5px); box-shadow: 0 0 40px rgba(157,0,255,0.15); }
        }
        @media (max-width: 900px) {
          .glass-card { border-color: ${electricPurple} !important; background: rgba(0,0,0,0.8) !important; box-shadow: 0 0 25px rgba(157,0,255,0.15) !important; margin-bottom: 20px; }
        }

        /* TEXTO MARQUEE AGRESIVO */
        .marquee-text-filled { font-size: 1.5rem; font-weight: 900; color: #fff; text-shadow: 0 0 15px rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 2px; }
        .marquee-text-stroke { font-size: 1.5rem; font-weight: 900; color: transparent; -webkit-text-stroke: 1px ${electricPurple}; text-transform: uppercase; letter-spacing: 2px; }
        
        /* ICONOS REDES SOCIALES */
        .social-icon { width: 55px; height: 55px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.4); transition: 0.4s; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        @media (max-width: 600px) {
          .social-icon { width: 45px; height: 45px; }
          .social-icon svg { width: 18px; height: 18px; }
        }
        
        /* WIDGET WHATSAPP */
        .wa-float { position: fixed; bottom: 30px; right: 30px; width: 65px; height: 65px; background-color: #050505; color: ${electricPurple}; border: 2px solid ${electricPurple}; border-radius: 50px; text-align: center; box-shadow: 0px 4px 20px rgba(157, 0, 255, 0.4); z-index: 1000; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0px 4px 35px rgba(157, 0, 255, 0.7); background-color: ${electricPurple}; color: #fff; }
        .wa-chat-box { position: fixed; bottom: 105px; right: 30px; width: 340px; background: #050505; border: 1px solid ${electricPurple}; border-radius: 15px; box-shadow: 0 15px 45px rgba(0,0,0,0.8); z-index: 1000; overflow: hidden; transform-origin: bottom right; transition: 0.3s; transform: scale(0); opacity: 0; pointer-events: none; }
        .wa-chat-box.open { transform: scale(1); opacity: 1; pointer-events: all; }
        .wa-header { background: #000; color: #fff; padding: 20px; font-weight: 900; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid ${electricPurple}; text-transform: uppercase; letter-spacing: 1px;}
        .wa-body { padding: 20px; background: #0a0a0a; }
        .wa-msg-bot { background: rgba(157,0,255,0.1); color: #ddd; padding: 15px; border-radius: 0 15px 15px 15px; font-size: 0.95rem; margin-bottom: 15px; border: 1px solid rgba(157,0,255,0.2); }
        .wa-input { width: 100%; background: #000; border: 1px solid #333; padding: 15px; border-radius: 10px; resize: none; color: #fff; outline: none; margin-bottom: 15px; transition: 0.3s;}
        .wa-input:focus { border-color: ${electricPurple}; }
        .wa-send-btn { width: 100%; background: ${electricPurple}; color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 1px;}
        .wa-send-btn:hover { background: #fff; color: #000; box-shadow: 0 0 20px ${electricPurple}; }

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
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        @keyframes scrollCarousel { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .carousel-container { display: flex; width: max-content; animation: scrollCarousel 40s linear infinite; }
        .carousel-container:hover { animation-play-state: paused; }

        /* CHAT SECTION UI (VANGUARD DEEP UI) */
        .chat-section-container { background: rgba(10,10,10,0.85); backdrop-filter: blur(25px); border: 1px solid rgba(157,0,255,0.4); border-radius: 20px; box-shadow: 0 0 50px rgba(157,0,255,0.1), inset 0 0 20px rgba(157,0,255,0.05); overflow: hidden; display: flex; flex-direction: column; height: 450px; position: relative; }
        .chat-history { flex: 1; padding: 25px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 20px 20px; }
        .chat-bubble { max-width: 85%; padding: 15px 20px; border-radius: 12px; font-size: 0.95rem; line-height: 1.6; position: relative; }
        .chat-bubble.bot { background: linear-gradient(135deg, rgba(157,0,255,0.15) 0%, rgba(157,0,255,0.05) 100%); color: #fff; border: 1px solid rgba(157,0,255,0.3); border-bottom-left-radius: 2px; align-self: flex-start; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .chat-bubble.user { background: #1a1a1a; color: #fff; border: 1px solid #333; border-bottom-right-radius: 2px; align-self: flex-end; }
        .chat-input-area { display: flex; padding: 20px; background: rgba(0,0,0,0.8); border-top: 1px solid rgba(157,0,255,0.2); }
        .chat-input { flex: 1; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #fff; padding: 12px 20px; font-size: 1rem; outline: none; transition: 0.3s; }
        .chat-input:focus { border-color: ${electricPurple}; box-shadow: 0 0 15px rgba(157,0,255,0.2); }
        .chat-typing { font-style: italic; opacity: 0.6; font-size: 0.85rem; padding-left: 10px; }
        
        /* WHOP COMMUNITY CARD */
        .whop-card { background: linear-gradient(135deg, #FF5C00 0%, #D44D00 100%); color: #fff; border-radius: 20px; padding: 40px; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(255, 92, 0, 0.2); display: flex; flex-direction: column; justify-content: center;}
        .whop-card::before { content: 'W'; position: absolute; right: -20px; bottom: -40px; font-size: 15rem; font-weight: 900; opacity: 0.1; line-height: 1; font-style: italic; }
      `}} />

      {/* NAVEGACIÓN */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '1px', position: 'relative', zIndex: 101 }}>STRATT-ON</span>
        
        <div className="desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Soluciones</a>
          <a href="#asesoria" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Asesoría</a>
          <a href="#comunidad" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Insights</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '12px 24px', fontSize: '11px' }}>AUDITORÍA IA</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 101, position: 'relative' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <a href="#soluciones" className="mobile-link" onClick={() => setMenuOpen(false)}>Soluciones</a>
        <a href="#asesoria" className="mobile-link" onClick={() => setMenuOpen(false)}>Asesoría IA</a>
        <a href="#comunidad" className="mobile-link" onClick={() => setMenuOpen(false)}>Comunidad</a>
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

      {/* HERO SECTION (NUEVO COPY B2B GLOBAL) */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '100px 0 50px', backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video ref={videoRef} playsInline autoPlay muted loop poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}>
          <source src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        
        <div style={{ zIndex: 1, padding: '0 5%', width: '100%', maxWidth: '1400px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', border: `1px solid ${electricPurple}`, borderRadius: '20px', color: electricPurple, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '25px', textTransform: 'uppercase', background: 'rgba(157,0,255,0.05)' }}>
              Orquestación B2B
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px', textTransform: 'uppercase' }}>
              Tu empresa no duerme.<br />Tu operación <span style={{ color: electricPurple }}>tampoco.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px', fontWeight: 500 }}>
              Implementamos Ecosistemas de Inteligencia Artificial que orquestan tus ventas, atención al cliente y procesos internos 24/7. Escala tu rentabilidad sin colapsar a tu equipo.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">Auditoría Gratuita</a>
              <a href="#asesoria" className="btn-outline">Diagnóstico IA</a>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)', padding: '45px', borderLeft: `3px solid ${electricPurple}`, borderRadius: '0 20px 20px 0', boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
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

      {/* BANDAS MARQUEE (AGRESIVAS) */}
      <div style={{ background: '#030303', overflow: 'hidden', padding: '30px 0', borderTop: '1px solid #111' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 25s linear infinite' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '50px', paddingRight: '50px' }}>
              <span className="marquee-text-filled">VOICEBOTS IA</span>
              <span className="marquee-text-stroke">ORQUESTACIÓN OPERATIVA</span>
              <span className="marquee-text-filled">SISTEMAS AUTÓNOMOS</span>
              <span className="marquee-text-stroke">ROI DRIVEN</span>
              <span className="marquee-text-filled">SMART CHATBOTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN SOLUCIONES (CERO MENCIONES DE HERRAMIENTAS + LINK MODERNO) */}
      <section id="soluciones" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase' }}>Infraestructura de <span style={{ color: electricPurple }}>Soluciones</span></h2>
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 0' }}>Sistemas autónomos diseñados específicamente para agilizar la operación de tu empresa. Olvídate del trabajo manual repetitivo.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {services.map((s, i) => (
              <a href="/servicios" key={i} className="service-link">
                <div className="glass-card">
                  <h3 style={{ fontWeight: 900, marginBottom: '20px', fontSize: '1.4rem', textTransform: 'uppercase', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '15px' }}>{s.title}</h3>
                  <p style={{ opacity: 0.8, lineHeight: '1.7', fontSize: '1.05rem' }}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
          
          {/* NUEVO ENLACE EXPANSIVO VANGUARDISTA */}
          <div style={{ textAlign: 'center' }}>
            <a href="/servicios" className="link-explore">
              Explorar Ecosistema Completo <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN ASESORÍA INTELIGENTE (DEEP UI) */}
      <section id="asesoria" style={{ padding: '120px 5%', background: '#050505', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', border: `1px solid ${electricPurple}`, borderRadius: '20px', color: electricPurple, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase' }}>
              Diagnóstico Operativo
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '25px' }}>
              Asesoría <br/><span style={{ color: electricPurple }}>Inteligente</span>
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '30px' }}>
              Chatea con nuestro motor analítico y obtén un diagnóstico exacto. Descubre qué proceso puedes optimizar hoy para escalar tu rendimiento.
            </p>
            <ul className="sales-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Análisis de cuellos de botella en segundos.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Diseño de flujos y procesos automatizados.</li>
            </ul>
          </div>

          <div style={{ flex: '1 1 500px' }} className="chat-section-container">
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderBottom: '1px solid rgba(157,0,255,0.3)', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '12px', height: '12px', background: '#25D366', borderRadius: '50%', boxShadow: '0 0 15px #25D366' }}></div>
              <span style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.95rem', color: '#fff' }}>Motor Analítico Stratt-On</span>
            </div>
            
            <div className="chat-history">
              {iaChatHistory.map((msg, idx) => (
                <div key={idx} className={`chat-bubble ${msg.sender}`}>{msg.text}</div>
              ))}
              {isTyping && <div className="chat-bubble bot chat-typing">Analizando parámetros...</div>}
            </div>

            <form onSubmit={handleSendIaChat} className="chat-input-area">
              <input type="text" className="chat-input" placeholder="Ej: Pierdo mucho tiempo facturando..." value={iaChatInput} onChange={(e) => setIaChatInput(e.target.value)} />
              <button type="submit" style={{ background: electricPurple, color: '#fff', border: 'none', borderRadius: '8px', padding: '0 25px', marginLeft: '15px', fontWeight: '900', cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: INSIGHTS & COMUNIDAD (BLOG + WHOP) */}
      <section id="comunidad" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase' }}>Insights & <span style={{ color: electricPurple }}>Comunidad</span></h2>
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto 0' }}>Conocimiento aplicado. Descubre los sistemas que están transformando la industria.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            {/* BLOG GRID */}
            <div style={{ flex: '2 1 700px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {blogPosts.map((post, i) => (
                <div key={i} className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: electricPurple, textTransform: 'uppercase', letterSpacing: '1px' }}>{post.tag}</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '15px 0', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>{post.desc}</p>
                  </div>
                  <a href="#" className="link-explore" style={{ fontSize: '0.9rem' }}>Leer artículo <span className="arrow">→</span></a>
                </div>
              ))}
            </div>

            {/* WHOP COMMUNITY CARD */}
            <div style={{ flex: '1 1 350px' }}>
              <div className="whop-card" style={{ height: '100%' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '15px' }}>Acceso VIP</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>Comunidad Stratt-On</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '30px' }}>
                  Únete a nuestro círculo en Whop. Accede a plantillas de automatización, arquitecturas operativas y networking con directores B2B.
                </p>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Último recurso añadido:</span>
                  <p style={{ fontWeight: 'bold', margin: '5px 0 0 0', fontStyle: 'italic' }}>"Plantilla de Orquestación: Calificación B2B v2.0"</p>
                </div>
                <a href="#" style={{ background: '#fff', color: '#FF5C00', padding: '15px 30px', borderRadius: '8px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', textAlign: 'center', transition: '0.3s', display: 'block' }}>Unirme en Whop</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN RESULTADOS */}
      <section id="resultados" style={{ padding: '120px 5%', background: '#fff', color: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '80px' }}>Resultados que Impactan</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
            {[
              { val: "- 80%", label: "Carga Operativa" },
              { val: "300%", label: "Aumento en Ventas" },
              { val: "60%", label: "Reducción Errores" },
              { val: "7s", label: "Tiempo Respuesta" }
            ].map((stat, i) => (
              <div key={i} style={{ flex: '1', minWidth: '250px', padding: '60px 20px', border: '1px solid #eaeaea', borderRadius: '20px', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '15px' }}><Counter end={stat.val} /></div>
                <p style={{ fontWeight: 800, color: '#555', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN REVIEWS */}
      <section id="autoridad" style={{ padding: '120px 5%', background: '#050505' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', marginBottom: '80px' }}>Lo que dicen los <span style={{ color: electricPurple }}>Líderes</span></h2>
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
      <section id="roi" style={{ padding: '120px 5%', background: '#111', color: '#fff', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px' }}>Calcula tu <span style={{ color: electricPurple }}>Libertad</span></h2>
        <p style={{ color: '#888', marginBottom: '60px', fontSize: '1.2rem' }}>Descubre cuánto dinero recuperas al mes (Basado en $20 USD/hora operativa).</p>
        <input type="range" min="10" max="200" value={hours} onChange={e => setHours(parseInt(e.target.value))} style={{ width: '100%', maxWidth: '800px', accentColor: electricPurple, height: '8px', cursor: 'pointer', marginBottom: '60px' }} />
        <div style={{ background: '#000', padding: '60px 40px', borderRadius: '24px', display: 'inline-block', border: `1px solid ${electricPurple}`, boxShadow: `0 0 60px rgba(157,0,255,0.15)`, minWidth: '300px' }}>
          <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '15px', fontSize: '0.9rem' }}>Ahorro Proyectado</p>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 1 }}>${savings.toLocaleString()} <span style={{ fontSize: '1.5rem', color: electricPurple, verticalAlign: 'middle' }}>USD/MES</span></div>
          <p style={{ marginTop: '25px', fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}>{hours} horas automatizadas.</p>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer style={{ padding: '100px 5% 50px', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scale Faster.</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px', marginBottom: '80px' }}>
          {socialLinks.map((social, i) => (
            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="social-icon" 
              onMouseOver={(e) => { e.currentTarget.style.borderColor = social.color; e.currentTarget.style.color = social.color; e.currentTarget.style.boxShadow = `0 0 25px ${social.color}44`; e.currentTarget.style.transform = 'translateY(-5px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg viewBox="0 0 24 24"><path d={social.svg}/></svg>
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