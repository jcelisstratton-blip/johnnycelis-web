"use client";
import React, { useState, useEffect } from 'react';

export default function ServiciosPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // WIDGET WHATSAPP
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const whatsappNumber = "573000000000"; // REEMPLAZA CON TU NÚMERO

  const electricPurple = "#9D00FF";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0); // Empieza arriba al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendWhatsapp = () => {
    if(chatMessage.trim() === "") return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, '_blank');
    setChatOpen(false);
    setChatMessage("");
  };

  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5", svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
  ];

  const serviciosDetallados = [
    {
      id: "inbound",
      title: "Voicebots Inbound IA",
      subtitle: "Atención Telefónica 24/7 de Alta Fidelidad",
      desc: "Tus clientes no notarán la diferencia. Implementamos agentes de voz con latencia ultra-baja y acento natural que responden llamadas entrantes, resuelven dudas complejas, pre-califican al prospecto y agendan reuniones directamente en el calendario de tu equipo de ventas.",
      bullets: ["Acento y tono personalizables", "Integración con Google Calendar / Calendly", "Conexión a base de conocimientos propia", "Redirección a humano si es necesario"]
    },
    {
      id: "outbound",
      title: "Growth Outbound AI",
      subtitle: "Maquinaria Autónoma de Prospección B2B",
      desc: "Escalamos tu adquisición de clientes corporativos. Utilizamos inteligencia artificial para raspar bases de datos, enriquecer leads e hiper-personalizar campañas de Cold Email y LinkedIn a escala masiva, llenando tu embudo con reuniones cualificadas.",
      bullets: ["Extracción de leads (Scraping avanzado)", "Warm-up de dominios y cuentas", "Redacción de emails hiper-personalizados por IA", "Seguimientos (Follow-ups) autónomos"]
    },
    {
      id: "n8n",
      title: "Arquitectura n8n",
      subtitle: "El Sistema Nervioso de tu Operación",
      desc: "Eliminamos el trabajo manual y la doble digitación. Conectamos tus CRMs, ERPs, pasarelas de pago y herramientas de comunicación (Slack, Mail) bajo una lógica de flujos (workflows) infalibles que operan en segundo plano sin descanso.",
      bullets: ["Workflows complejos sin depender de Zapier", "Ahorro masivo en costos de licencias", "Actualización de inventarios y reportes automáticos", "Alertas en tiempo real para tu equipo"]
    },
    {
      id: "chatbots",
      title: "Chatbots de Conversión",
      subtitle: "Asistentes Transaccionales en WhatsApp y Web",
      desc: "No más chatbots de 'Oprime 1 para ventas'. Desarrollamos asistentes omnicanal entrenados con el contexto de tu empresa, capaces de guiar al cliente por el embudo, procesar pedidos y responder objeciones como tu mejor vendedor.",
      bullets: ["Integración oficial WhatsApp API", "Entrenamiento con PDFs, URLs y manuales", "Recuperación de carritos abandonados", "Soporte multilingüe automático"]
    },
    {
      id: "crm",
      title: "Integración CRM Inteligente",
      subtitle: "Data Centralizada y Autónoma",
      desc: "Hacemos que tu CRM trabaje para ti, no al revés. Configuramos ecosistemas donde la data fluye sola: los leads se etiquetan según su comportamiento, se asignan al vendedor correcto y se nutren automáticamente hasta estar listos para comprar.",
      bullets: ["Scoring predictivo de leads con IA", "Limpieza de datos automática", "Sincronización bidireccional de plataformas", "Dashboards ejecutivos en tiempo real"]
    },
    {
      id: "consultoria",
      title: "Consultoría Estratégica IA",
      subtitle: "Auditoría Profunda de Procesos",
      desc: "Para empresas establecidas que saben que pierden tiempo pero no saben dónde empezar. Analizamos cada departamento de tu negocio para detectar fugas de capital y diseñamos un mapa de ruta tecnológico para la automatización total.",
      bullets: ["Mapeo de cuellos de botella operativos", "Análisis de viabilidad técnica", "Selección del stack tecnológico óptimo", "Acompañamiento en la adopción interna"]
    }
  ];

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        
        .hero-bg { background: linear-gradient(180deg, #050505 0%, #000 100%); position: relative; overflow: hidden; }
        .hero-glow { position: absolute; top: -20%; left: 50%; transform: translateX(-50%); width: 80vw; height: 50vh; background: radial-gradient(ellipse at center, rgba(157,0,255,0.15) 0%, rgba(0,0,0,0) 70%); z-index: 0; }
        
        .btn-glow { background: ${electricPurple}; color: white; padding: 18px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; display: inline-flex; align-items: center; justify-content: center; gap: 10px; border: none; cursor: pointer; border-radius: 4px; }
        .btn-glow:hover { box-shadow: 0 0 40px ${electricPurple}; transform: translateY(-3px); background: #fff !important; color: #000 !important; }
        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.15); }
        
        /* SERVICE BLOCKS */
        .service-block { display: flex; flex-wrap: wrap; align-items: center; gap: 50px; padding: 80px 5%; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .service-block:nth-child(even) { flex-direction: row-reverse; background: rgba(255,255,255,0.01); }
        .service-content { flex: 1 1 500px; }
        .service-visual { flex: 1 1 400px; display: flex; justify-content: center; align-items: center; }
        .visual-box { width: 100%; aspect-ratio: 1/1; max-width: 400px; background: rgba(157,0,255,0.03); border: 1px solid rgba(157,0,255,0.2); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 5rem; font-weight: 900; color: rgba(157,0,255,0.3); box-shadow: inset 0 0 50px rgba(157,0,255,0.05); position: relative; overflow: hidden; }
        .visual-box::after { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(157,0,255,0.1), transparent); transform: skewX(-20deg); animation: shine 6s infinite; }
        @keyframes shine { 0% { left: -100%; } 20% { left: 200%; } 100% { left: 200%; } }

        .feature-list { list-style: none; padding: 0; margin: 30px 0 0 0; }
        .feature-list li { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; color: #ccc; font-size: 1.05rem; }
        .feature-list svg { color: ${electricPurple}; flex-shrink: 0; }

        /* WIDGET WHATSAPP Y MENU MÓVIL (Mismos del Home) */
        .wa-float { position: fixed; bottom: 30px; right: 30px; width: 65px; height: 65px; background-color: #050505; color: ${electricPurple}; border: 2px solid ${electricPurple}; border-radius: 50px; text-align: center; box-shadow: 0px 4px 20px rgba(157, 0, 255, 0.4); z-index: 1000; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0px 4px 35px rgba(157, 0, 255, 0.7); background-color: ${electricPurple}; color: #fff; }
        .wa-chat-box { position: fixed; bottom: 105px; right: 30px; width: 340px; background: #050505; border: 1px solid ${electricPurple}; border-radius: 15px; box-shadow: 0 15px 45px rgba(0,0,0,0.8); z-index: 1000; overflow: hidden; transform-origin: bottom right; transition: 0.3s; transform: scale(0); opacity: 0; pointer-events: none; }
        .wa-chat-box.open { transform: scale(1); opacity: 1; pointer-events: all; }
        .wa-header { background: #000; color: #fff; padding: 20px; font-weight: 900; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid ${electricPurple}; text-transform: uppercase; }
        .wa-body { padding: 20px; background: #0a0a0a; }
        .wa-msg-bot { background: rgba(157,0,255,0.1); color: #ddd; padding: 15px; border-radius: 0 15px 15px 15px; font-size: 0.95rem; margin-bottom: 15px; border: 1px solid rgba(157,0,255,0.2); }
        .wa-input { width: 100%; background: #000; border: 1px solid #333; padding: 15px; border-radius: 10px; resize: none; color: #fff; outline: none; margin-bottom: 15px; }
        .wa-input:focus { border-color: ${electricPurple}; }
        .wa-send-btn { width: 100%; background: ${electricPurple}; color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; text-transform: uppercase; }
        .wa-send-btn:hover { background: #fff; color: #000; box-shadow: 0 0 20px ${electricPurple}; }

        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-menu-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.98); backdrop-filter: blur(15px); z-index: 99; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 40px; transform: translateY(-100%); transition: 0.4s ease-in-out; }
          .mobile-menu-overlay.open { transform: translateY(0); }
          .mobile-link { color: #fff; text-decoration: none; font-size: 2rem; font-weight: 900; text-transform: uppercase; }
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
        
        .social-icon { width: 55px; height: 55px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.4); transition: 0.4s; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; }
        @media (max-width: 600px) {
          .social-icon { width: 45px; height: 45px; }
          .social-icon svg { width: 18px; height: 18px; }
        }
      `}} />

      {/* NAVEGACIÓN (Enlazada al Home) */}
      <nav className={scrolled ? 'nav-blur' : ''} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: '0.4s' }}>
        <a href="/" style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '1px', position: 'relative', zIndex: 101, color: '#fff', textDecoration: 'none' }}>STRATT-ON</a>
        
        <div className="desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="/#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Soluciones</a>
          <a href="/#asesoria" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Asesoría IA</a>
          <a href="/#resultados" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Resultados</a>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '12px 24px', fontSize: '11px' }}>AUDITORÍA IA</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 101, position: 'relative' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Menú Móvil */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <a href="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="/#soluciones" className="mobile-link" onClick={() => setMenuOpen(false)}>Soluciones</a>
        <a href="/#resultados" className="mobile-link" onClick={() => setMenuOpen(false)}>Resultados</a>
        <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ marginTop: '20px' }} onClick={() => setMenuOpen(false)}>Auditoría IA</a>
      </div>

      {/* CHAT WIDGET PREMIUM FLOTANTE */}
      <div className="wa-float" onClick={() => setChatOpen(!chatOpen)}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path>
        </svg>
      </div>
      
      <div className={`wa-chat-box ${chatOpen ? 'open' : ''}`}>
        <div className="wa-header"><span>Stratt-On Chat</span><button onClick={() => setChatOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button></div>
        <div className="wa-body">
          <div className="wa-msg-bot"><strong style={{color: electricPurple}}>Asistente Virtual:</strong><br/><br/>Hola, ¿En qué servicio técnico necesitas profundizar hoy?</div>
          <textarea className="wa-input" rows={3} placeholder="Escribe tu mensaje aquí..." value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} />
          <button className="wa-send-btn" onClick={handleSendWhatsapp}>Enviar a un Asesor</button>
        </div>
      </div>

      {/* HEADER DE LA PÁGINA */}
      <header className="hero-bg" style={{ paddingTop: '180px', paddingBottom: '80px', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="hero-glow" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px' }}>
            Ecosistemas <span style={{ color: electricPurple }}>Autónomos</span> para Escalar
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: 1.6, fontWeight: 500 }}>
            Implementamos infraestructuras tecnológicas que reemplazan el trabajo manual, operan 24/7 y aceleran la adquisición de clientes en empresas B2B y E-commerce.
          </p>
        </div>
      </header>

      {/* LISTADO DETALLADO DE SERVICIOS */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '100px' }}>
        {serviciosDetallados.map((srv, i) => (
          <div key={srv.id} id={srv.id} className="service-block">
            <div className="service-content">
              <span style={{ color: electricPurple, fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Servicio 0{i+1}</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', margin: '10px 0 20px', lineHeight: 1.1 }}>{srv.title}</h2>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'bold', marginBottom: '20px' }}>{srv.subtitle}</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: 1.7 }}>{srv.desc}</p>
              
              <ul className="feature-list">
                {srv.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="service-visual">
              <div className="visual-box">
                {/* Elemento visual abstracto (número grande transparente) */}
                0{i+1}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '120px 5%', background: '#050505', textAlign: 'center', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '30px' }}>¿Listo para automatizar tu <span style={{ color: electricPurple }}>empresa?</span></h2>
          <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '50px' }}>Deja de depender de la doble digitación y el trabajo manual. Agenda una auditoría gratuita con nuestro equipo y descubre qué procesos puedes delegar a la IA hoy mismo.</p>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '20px 60px', fontSize: '1.2rem' }}>AGENDAR AUDITORÍA IA</a>
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