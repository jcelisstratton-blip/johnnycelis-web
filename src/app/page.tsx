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
  
  // WIDGET WHATSAPP
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const whatsappNumber = "573000000000"; // REEMPLAZA CON TU NÚMERO

  // CHAT ASESORÍA IA (Listo para n8n)
  const [iaChatInput, setIaChatInput] = useState("");
  const [iaChatHistory, setIaChatHistory] = useState([
    { sender: "bot", text: "Hola. Soy el agente de diagnóstico de Stratt-On Agency. Cuéntame, ¿cuál es el mayor cuello de botella operativo en tu empresa hoy?" }
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
    
    // Agrega el mensaje del usuario
    const newHistory = [...iaChatHistory, { sender: "user", text: iaChatInput }];
    setIaChatHistory(newHistory);
    setIaChatInput("");

    // SIMULACIÓN DE RESPUESTA (Aquí conectarás el fetch a n8n)
    setTimeout(() => {
      setIaChatHistory(prev => [...prev, { sender: "bot", text: "Procesando tu solicitud mediante n8n... Pronto nuestro equipo te dará un diagnóstico preciso." }]);
    }, 1000);
  };

  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5", svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "TikTok", link: "https://www.tiktok.com/@stratt_on", color: "#fff", svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.44 6.44 0 0 1-1.87-1.43v7.33c.01 5.89-6.38 9.57-11.13 6.13-4.07-2.8-4.43-8.87-1.12-12.18 1.47-1.51 3.53-2.31 5.63-2.13v4.03c-1.41-.09-2.89.47-3.6 1.74-.83 1.52-.25 3.65 1.34 4.54 1.48.86 3.52.16 4.12-1.47.16-.4.24-.82.23-1.25V.02z" },
    { name: "WhatsApp", link: "https://wa.link/430g3p", color: "#25D366", svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" }
  ];

  const services = [
    { title: "Voicebots Inbound IA", desc: "Agentes de voz con empatía humana y cero latencia. Atienden, califican y agendan leads entrantes 24/7." },
    { title: "Growth Outbound AI", desc: "Maquinaria de prospección autónoma. Hiper-personalizamos el contacto B2B a escala en Email y LinkedIn." },
    { title: "Arquitectura n8n", desc: "Automatización total. Conectamos tus CRMs, ERPs y flujos de trabajo en un ecosistema lógico infalible." },
    { title: "Chatbots de Conversión", desc: "Asistentes virtuales para WhatsApp y Web que no solo responden FAQs, sino que cierran ventas activamente." },
    { title: "Integración CRM + IA", desc: "Organizamos tu data. Tu CRM se actualiza solo y califica a tus clientes según su probabilidad de cierre." },
    { title: "Consultoría Estratégica", desc: "Auditoría profunda de tus procesos. Detectamos fugas de capital y diseñamos tu ruta hacia la automatización." }
  ];

  const reviews = [
    { name: "Carlos M.", role: "CEO, E-commerce Retail", text: "Stratt-On Agency redujo nuestro tiempo de respuesta a segundos. Las ventas nocturnas aumentaron un 45% en el primer mes gracias al agente IA." },
    { name: "Laura V.", role: "Directora Comercial B2B", text: "La arquitectura n8n nos ahorró el equivalente a 3 salarios operativos. Escalar ahora es solo cuestión de presupuesto publicitario, no de contratar más." },
    { name: "David R.", role: "Founder, Inmobiliaria", text: "Nuestro agente de voz califica y agenda leads sin que nosotros movamos un dedo. Es indistinguible de un humano. Simplemente brutal." }
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
        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.15); }
        .sales-list li { margin-bottom: 15px; display: flex; align-items: flex-start; gap: 15px; font-size: 1.1rem; color: #ccc; line-height: 1.4; }
        .sales-list svg { color: ${electricPurple}; flex-shrink: 0; margin-top: 3px; }
        
        /* GLOW EFECT EN TARJETAS (FIJO EN MÓVIL) */
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 40px; transition: 0.4s ease; cursor: default; }
        @media (min-width: 901px) {
          .glass-card:hover { border-color: ${electricPurple}; background: rgba(0,0,0,0.8); transform: translateY(-5px); box-shadow: 0 0 40px rgba(157,0,255,0.15); }
        }
        @media (max-width: 900px) {
          .glass-card { border-color: ${electricPurple} !important; background: rgba(0,0,0,0.8) !important; box-shadow: 0 0 25px rgba(157,0,255,0.15) !important; margin-bottom: 20px; }
        }
        
        /* ICONOS REDES SOCIALES (RESPONSIVE) */
        .social-icon { width: 55px; height: 55px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.4); transition: 0.4s; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; }
        @media (max-width: 600px) {
          .social-icon { width: 45px; height: 45px; }
          .social-icon svg { width: 18px; height: 18px; }
        }
        
        /* CHAT WIDGET PREMIUM IA */
        .wa-float { position: fixed; bottom: 30px; right: 30px; width: 65px; height: 65px; background-color: #050505; color: ${electricPurple}; border: 2px solid ${electricPurple}; border-radius: 50px; text-align: center; box-shadow: 0px 4px 20px rgba(157, 0, 255, 0.4); z-index: 1000; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0px 4px 35px rgba(157, 0, 255, 0.7); background-color: ${electricPurple}; color: #fff; }
        .wa-chat-box { position: fixed; bottom: 105px; right: 30px; width: 340px; background: #050505; border: 1px solid ${electricPurple}; border-radius: 15px; box-shadow: 0 15px 45px rgba(0,0,0,0.8); z-index: 1000; overflow: hidden; transform-origin: bottom right; transition: 0.3s; transform: scale(0); opacity: 0; pointer-events: none; }
        .wa-chat-box.open { transform: scale(1); opacity: 1; pointer-events: all; }
        .wa-header { background: #000; color: #fff; padding: 20px; font-weight: 900; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid ${electricPurple}; letter-spacing: 1px; text-transform: uppercase; }
        .wa-body { padding: 20px; background: #0a0a0a; }
        .wa-msg-bot { background: rgba(157,0,255,0.1); color: #ddd; padding: 15px; border-radius: 0 15px 15px 15px; font-size: 0.95rem; margin-bottom: 15px; border: 1px solid rgba(157,0,255,0.2); }
        .wa-input { width: 100%; background: #000; border: 1px solid #333; padding: 15px; border-radius: 10px; resize: none; outline: none; font-family: inherit; font-size: 0.95rem; margin-bottom: 15px; color: #fff; transition: 0.3s; }
        .wa-input:focus { border-color: ${electricPurple}; }
        .wa-send-btn { width: 100%; background: ${electricPurple}; color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 1px; }
        .wa-send-btn:hover { background: #fff; color: #000; box-shadow: 0 0 20px ${electricPurple}; }

        /* MENU RESPONSIVE */
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-menu-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.98); backdrop-filter: blur(15px); z-index: 99; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 40px; transform: translateY(-100%); transition: 0.4s ease-in-out; }
          .mobile-menu-overlay.open { transform: translateY(0); }
          .mobile-link { color: #fff; text-decoration: none; font-size: 2rem; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; }
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

        /* CHAT SECTION UI */
        .chat-section-container { display: flex; flex-direction: column; height: 400px; background: #0a0a0a; border: 1px solid rgba(157,0,255,0.3); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .chat-history { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 15px; }
        .chat-bubble { max-width: 80%; padding: 15px 20px; border-radius: 15px; font-size: 0.95rem; line-height: 1.5; }
        .chat-bubble.bot { background: rgba(157,0,255,0.1); color: #fff; border-bottom-left-radius: 0; align-self: flex-start; border: 1px solid rgba(157,0,255,0.2); }
        .chat-bubble.user { background: #222; color: #fff; border-bottom-right-radius: 0; align-self: flex-end; }
        .chat-input-area { display: flex; padding: 15px; background: #000; border-top: 1px solid #222; }
      `}} />

      {/* NAVEGACIÓN Y MENÚ MÓVIL */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '1px', position: 'relative', zIndex: 101 }}>STRATT-ON</span>
        
        <div className="desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Soluciones</a>
          <a href="#asesoria" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Asesoría IA</a>
          <a href="#resultados" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Resultados</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '12px 24px', fontSize: '11px' }}>AUDITORÍA IA</a>
        </div>

        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 101, position: 'relative' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <a href="#soluciones" className="mobile-link" onClick={() => setMenuOpen(false)}>Soluciones</a>
        <a href="#asesoria" className="mobile-link" onClick={() => setMenuOpen(false)}>Asesoría IA</a>
        <a href="#resultados" className="mobile-link" onClick={() => setMenuOpen(false)}>Resultados</a>
        <a href="#roi" className="mobile-link" onClick={() => setMenuOpen(false)}>ROI</a>
        <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ marginTop: '20px' }} onClick={() => setMenuOpen(false)}>Auditoría IA</a>
      </div>

      {/* CHAT WIDGET PREMIUM FLOTANTE */}
      <div className="wa-float" onClick={() => setChatOpen(!chatOpen)}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M9 10h.01"></path>
          <path d="M15 10h.01"></path>
        </svg>
      </div>
      
      <div className={`wa-chat-box ${chatOpen ? 'open' : ''}`}>
        <div className="wa-header">
          <span>Stratt-On Chat</span>
          <button onClick={() => setChatOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
        </div>
        <div className="wa-body">
          <div className="wa-msg-bot">
            <strong style={{color: electricPurple}}>Asistente Virtual:</strong><br/><br/>
            Hola, soy la IA de Stratt-On. ¿En qué podemos ayudarte para escalar la operación de tu negocio hoy?
          </div>
          <textarea 
            className="wa-input" 
            rows={3} 
            placeholder="Escribe tu mensaje aquí..." 
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button className="wa-send-btn" onClick={handleSendWhatsapp}>
            Enviar a un Asesor
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden', 
        padding: '100px 0 50px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <video 
          ref={videoRef}
          playsInline 
          autoPlay 
          muted 
          loop 
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/johnnycelis-ceaf7.firebasestorage.app/o/hero%20video.mp4?alt=media&token=8d04a350-1e28-4266-b61d-8aa7eeb0fd47" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        
        <div style={{ zIndex: 1, padding: '0 5%', width: '100%', maxWidth: '1400px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', border: `1px solid ${electricPurple}`, borderRadius: '20px', color: electricPurple, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '25px', textTransform: 'uppercase', background: 'rgba(157,0,255,0.05)' }}>
              Agencia de Automatización B2B
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px', textTransform: 'uppercase' }}>
              Tu embudo no duerme.<br />Tu equipo <span style={{ color: electricPurple }}>sí.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px', fontWeight: 500 }}>
              Implementamos Agentes de Inteligencia Artificial que atienden, califican y agendan llamadas 24/7. Escala tu empresa sin contratar más personal operativo.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">Agendar Llamada</a>
              <a href="#asesoria" className="btn-outline">Chatear con la IA</a>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)', padding: '45px', borderLeft: `3px solid ${electricPurple}`, borderRadius: '0 20px 20px 0', boxShadow: '20px 20px 50px rgba(0,0,0,0.5)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Conversión en Piloto Automático</h3>
            <ul className="sales-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Respuesta inmediata en <strong>menos de 7 segundos</strong>.</span></li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Calificación y agendamiento <strong>B2B 24/7</strong>.</span></li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Reducción de costos operativos hasta un <strong>80%</strong>.</span></li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Sistemas <strong>n8n</strong> con eliminación de errores.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* BANDAS MARQUEE */}
      <div style={{ background: '#030303', overflow: 'hidden', padding: '25px 0', borderTop: '1px solid #111' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 30s linear infinite' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '60px', paddingRight: '60px' }}>
              {["AI VOICE AGENTS", "PROCESS AUTOMATION", "N8N ARCHITECTURE", "ROI DRIVEN", "SMART CHATBOTS"].map(word => (
                <span key={word} style={{ fontSize: '1.2rem', fontWeight: 900, color: '#222' }}>{word}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN SOLUCIONES AMPLIADA (6 SERVICIOS + LINK A /servicios) */}
      <section id="soluciones" style={{ padding: '120px 5%', background: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase' }}>Infraestructura de <span style={{ color: electricPurple }}>Soluciones</span></h2>
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 0' }}>Sistemas autónomos diseñados específicamente para escalar E-commerce y empresas B2B. Olvídate del trabajo manual.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {services.map((s, i) => (
              <div key={i} className="glass-card">
                <h3 style={{ fontWeight: 900, marginBottom: '20px', fontSize: '1.4rem', textTransform: 'uppercase', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '15px' }}>{s.title}</h3>
                <p style={{ opacity: 0.8, lineHeight: '1.7', fontSize: '1.05rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/servicios" className="btn-glow" style={{ padding: '20px 50px' }}>Conoce Todos Nuestros Servicios</a>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: ASESORÍA INTELIGENTE (INTERFAZ N8N) */}
      <section id="asesoria" style={{ padding: '120px 5%', background: '#050505', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', border: `1px solid ${electricPurple}`, borderRadius: '20px', color: electricPurple, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase' }}>
              Diagnóstico en Tiempo Real
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '25px' }}>
              Asesoría <br/><span style={{ color: electricPurple }}>Inteligente</span>
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '30px' }}>
              Chatea con nuestra IA y obtén un diagnóstico exacto de tu problema operativo. Descubre qué sistema necesitas implementar hoy para dejar de perder dinero.
            </p>
            <ul className="sales-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Análisis de cuellos de botella.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Recomendación de arquitectura n8n.</li>
            </ul>
          </div>

          {/* CHAT INTERFACE */}
          <div style={{ flex: '1 1 500px' }} className="chat-section-container">
            <div style={{ background: '#000', padding: '15px 20px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '10px', height: '10px', background: '#25D366', borderRadius: '50%', boxShadow: '0 0 10px #25D366' }}></div>
              <span style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Agente IA de Stratt-On</span>
            </div>
            
            <div className="chat-history">
              {iaChatHistory.map((msg, idx) => (
                <div key={idx} className={`chat-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendIaChat} className="chat-input-area">
              <input 
                type="text" 
                placeholder="Ej: Pierdo mucho tiempo respondiendo correos..." 
                value={iaChatInput}
                onChange={(e) => setIaChatInput(e.target.value)}
                style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '1rem' }}
              />
              <button type="submit" style={{ background: electricPurple, color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer' }}>
                Enviar
              </button>
            </form>
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
                <div style={{ fontSize: '5rem', fontWeight: 900, color: electricPurple, lineHeight: 1, marginBottom: '15px' }}>
                  <Counter end={stat.val} />
                </div>
                <p style={{ fontWeight: 800, color: '#555', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ROI */}
      <section id="roi" style={{ padding: '120px 5%', background: '#111', color: '#fff', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px' }}>Calcula tu <span style={{ color: electricPurple }}>Libertad</span></h2>
        <p style={{ color: '#888', marginBottom: '60px', fontSize: '1.2rem' }}>Descubre cuánto dinero recuperas al mes (Basado en $20 USD/hora operativa).</p>
        
        <input 
          type="range" min="10" max="200" value={hours} 
          onChange={e => setHours(parseInt(e.target.value))} 
          style={{ width: '100%', maxWidth: '800px', accentColor: electricPurple, height: '8px', cursor: 'pointer', marginBottom: '60px' }} 
        />
        
        <div style={{ background: '#000', padding: '60px 40px', borderRadius: '24px', display: 'inline-block', border: `1px solid ${electricPurple}`, boxShadow: `0 0 60px rgba(157,0,255,0.15)`, minWidth: '300px' }}>
          <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '15px', fontSize: '0.9rem' }}>Ahorro Proyectado</p>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 1 }}>
            ${savings.toLocaleString()} <span style={{ fontSize: '1.5rem', color: electricPurple, verticalAlign: 'middle' }}>USD/MES</span>
          </div>
          <p style={{ marginTop: '25px', fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}>{hours} horas automatizadas.</p>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer style={{ padding: '100px 5% 50px', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scale Faster.</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px', marginBottom: '80px' }}>
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = social.color;
                e.currentTarget.style.color = social.color;
                e.currentTarget.style.boxShadow = `0 0 25px ${social.color}44`;
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
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