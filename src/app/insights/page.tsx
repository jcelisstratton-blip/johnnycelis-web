"use client";
import React, { useState, useEffect } from 'react';

export default function InsightsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // WIDGET WHATSAPP
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const whatsappNumber = "573000000000"; // REEMPLAZA CON TU NÚMERO

  // MODAL DE ARTÍCULOS
  const [activePost, setActivePost] = useState<{tag: string, title: string, desc: string, content: string} | null>(null);

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
    { name: "Email", link: "mailto:jcelis.stratton@gmail.com", color: "#fff", svg: "<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path><polyline points='22,6 12,13 2,6'></polyline>" },
    { name: "Instagram", link: "https://www.instagram.com/johnnycelis.AI", color: "#E1306C", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/105200333", color: "#0077B5", svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "WhatsApp", link: "https://wa.link/430g3p", color: "#25D366", svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" },
    { name: "Whop", link: "https://whop.com/joined/biz_fNslGhWeZdy2WR/?tab=home", color: "#FF5C00", svg: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" }
  ];

  const blogPosts = [
    { tag: "Orquestación", title: "Cómo eliminar 40 horas de trabajo administrativo a la semana", desc: "Descubre el flujo exacto que implementamos para centralizar la operación B2B sin intervención humana.", content: "El trabajo administrativo repetitivo es la mayor fuga de capital de las empresas modernas. A través de la orquestación operativa, hemos logrado consolidar tareas de facturación, actualización de CRMs y envío de reportes en flujos de datos autónomos. En lugar de tener a tres personas digitando datos en Excel, un sistema centralizado procesa la información en milisegundos, garantizando cero errores y disponibilidad 24/7." },
    { tag: "Voicebots IA", title: "El fin del Call Center tradicional", desc: "Por qué los agentes de voz autónomos están reemplazando las líneas de soporte saturadas y triplicando el rendimiento.", content: "Los tiempos de espera superiores a un minuto son inaceptables para el cliente corporativo actual. Los Voicebots IA de latencia ultra-baja no solo responden de inmediato, sino que entienden contexto, pausas e intenciones. Capaces de consultar bases de datos en tiempo real, estos agentes resuelven el 80% de las incidencias de Nivel 1 sin necesidad de escalar a un humano, reduciendo costos operativos drásticamente." },
    { tag: "Productividad", title: "La ilusión de contratar más personal", desc: "Por qué añadir más humanos a un proceso roto solo multiplica los errores operativos.", content: "Existe un mito en el mundo empresarial: 'Si no damos abasto, contratemos a más personas'. Escalar sobre un sistema ineficiente solo escala la ineficiencia. Antes de aumentar la nómina, es imperativo auditar la operación. La implementación de ecosistemas autónomos permite que la empresa crezca en ingresos sin que los costos de personal crezcan en la misma proporción." },
    { tag: "Growth Outbound", title: "Personalización a escala masiva en LinkedIn", desc: "La diferencia entre spam y prospección inteligente.", content: "El Cold Email genérico ya no funciona. Utilizando herramientas de inteligencia artificial para enriquecer bases de datos, podemos leer el perfil de un prospecto, identificar sus retos recientes y redactar un correo de introducción que parece escrito por su mejor amigo. Esto eleva las tasas de respuesta del 2% tradicional a más de un 25% en campañas corporativas." },
    { tag: "Integración CRM", title: "Scoring de leads autónomo", desc: "Cómo saber quién está listo para comprar antes de que llame.", content: "Un CRM no debería ser solo una libreta de contactos cara. Al conectar tu sitio web, correos y CRM bajo un ecosistema inteligente, el sistema puede otorgar 'puntos' a un prospecto cada vez que abre un correo o visita la página de precios. Cuando cruzan el umbral de interés, el sistema alerta directamente al vendedor. Cero fricción, máximas ventas." },
    { tag: "Automatización Web", title: "Chatbots transaccionales", desc: "La evolución de las FAQs a vendedores virtuales 24/7.", content: "Los visitantes de tu sitio web tienen intenciones de compra fugaces. Un chatbot transaccional no se limita a responder preguntas frecuentes; califica al visitante, comprende objeciones basándose en la base de conocimientos de la empresa y cierra reservas o procesos de pago directamente desde el chat, capturando oportunidades que antes se perdían en la navegación." }
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
        
        .link-explore { display: inline-flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; font-weight: 900; font-size: clamp(0.9rem, 2vw, 1rem); text-transform: uppercase; letter-spacing: 2px; transition: 0.4s; padding-bottom: 5px; border-bottom: 1px solid transparent; cursor: pointer; }
        .link-explore .arrow { transition: 0.4s; color: ${electricPurple}; }
        .link-explore:hover { color: ${electricPurple}; border-bottom: 1px solid ${electricPurple}; gap: 20px; }

        .nav-blur { background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(157,0,255,0.15); }
        
        /* TARJETAS BLOG CLICKABLES */
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: clamp(20px, 5vw, 40px); transition: 0.4s ease; cursor: pointer; height: 100%; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;}
        @media (min-width: 901px) {
          .glass-card:hover { border-color: ${electricPurple}; background: rgba(0,0,0,0.8); transform: translateY(-5px); box-shadow: 0 0 40px rgba(157,0,255,0.15); }
          .glass-card:hover .link-explore { color: ${electricPurple}; gap: 20px; }
        }
        @media (max-width: 900px) {
          .glass-card { border-color: ${electricPurple} !important; background: rgba(0,0,0,0.8) !important; box-shadow: 0 0 25px rgba(157,0,255,0.15) !important; margin-bottom: 20px; }
        }

        /* ICONOS REDES SOCIALES */
        .social-icon { width: 55px; height: 55px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.4); transition: 0.4s; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        @media (max-width: 600px) {
          .social-icon { width: 45px; height: 45px; }
          .social-icon svg { width: 18px; height: 18px; }
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
          <a href="/#soluciones" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Soluciones</a>
          <a href="/servicios" style={{ color: 'white', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Servicios Detallados</a>
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
        <a href="/servicios" className="mobile-link" onClick={() => setMenuOpen(false)}>Servicios Detallados</a>
        <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ marginTop: '20px' }} onClick={() => setMenuOpen(false)}>Auditoría IA</a>
      </div>

      {/* WIDGET WHATSAPP FLOTANTE */}
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
              <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow">Analizar mi caso operativo</a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* HEADER DE LA PÁGINA BLOG */}
      <header className="hero-bg" style={{ paddingTop: '180px', paddingBottom: '80px', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="hero-glow" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px' }}>
            Insights <span style={{ color: electricPurple }}>Operativos</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: 1.6, fontWeight: 500, maxWidth: '800px', margin: '0 auto' }}>
            Conocimiento avanzado sobre automatización B2B, ecosistemas autónomos y orquestación operativa. Descubre cómo las empresas top están eliminando el trabajo manual.
          </p>
        </div>
      </header>

      {/* GRID DE ARTÍCULOS */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 5% 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
          {blogPosts.map((post, i) => (
            <div key={i} className="glass-card" onClick={() => setActivePost(post)}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: electricPurple, textTransform: 'uppercase', letterSpacing: '1px' }}>{post.tag}</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: '15px 0', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.6, marginBottom: '30px' }}>{post.desc}</p>
              </div>
              <div className="link-explore" style={{ fontSize: '0.9rem', marginTop: 'auto', alignSelf: 'flex-start' }}>Leer artículo <span className="arrow">→</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '100px 5%', background: '#050505', textAlign: 'center', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '30px' }}>¿Listo para dar el siguiente <span style={{ color: electricPurple }}>paso?</span></h2>
          <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '50px' }}>Deja de perder horas en tareas repetitivas. Agenda una auditoría gratuita con nuestro equipo y descubre el impacto de la IA en tu empresa.</p>
          <a href="https://calendar.app.google/wCHwj3MuUxr4EUEp6" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ padding: '20px 60px', fontSize: '1.2rem' }}>AGENDAR AUDITORÍA IA</a>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer style={{ padding: 'clamp(60px, 10vw, 100px) 5% 50px', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <h2 style={{ fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(2.5rem, 8vw, 6rem)', marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scale Faster.</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(15px, 3vw, 25px)', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          {socialLinks.map((social, i) => (
            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="social-icon" title={social.name}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = social.color; e.currentTarget.style.color = social.color; e.currentTarget.style.boxShadow = `0 0 25px ${social.color}44`; e.currentTarget.style.transform = 'translateY(-5px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
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