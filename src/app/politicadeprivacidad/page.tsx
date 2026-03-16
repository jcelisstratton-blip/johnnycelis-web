"use client";
import React from 'react';

export default function PoliticaPrivacidad() {
  const electricPurple = "#9D00FF";

  return (
    <main style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '120px 10% 80px', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      
      {/* Botón de Regreso Estilizado */}
      <a href="/" style={{ 
        color: electricPurple, 
        textDecoration: 'none', 
        fontWeight: 'bold', 
        fontSize: '12px', 
        textTransform: 'uppercase', 
        letterSpacing: '2px',
        border: `1px solid ${electricPurple}`,
        padding: '10px 20px',
        display: 'inline-block',
        marginBottom: '60px'
      }}>
        ← Volver a Stratt-On
      </a>
      
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 900, 
          fontStyle: 'italic', 
          textTransform: 'uppercase',
          lineHeight: 1,
          margin: '0 0 20px 0'
        }}>
          Política de <br />
          <span style={{ color: electricPurple }}>Privacidad</span>
        </h1>
        <p style={{ color: '#666', fontWeight: 'bold' }}>Última actualización: 16 de marzo de 2026</p>
      </header>
      
      <section style={{ 
        lineHeight: '1.8', 
        color: '#ccc', 
        maxWidth: '900px', 
        fontSize: '1.05rem',
        textAlign: 'justify'
      }}>
        <p>En <strong>Johnny Celis y Stratt-On Agency</strong>, la privacidad de nuestros usuarios es una prioridad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información cuando interactúas con nuestro sitio web <span style={{color: '#fff'}}>www.johnnycelis.online</span> y nuestras aplicaciones conectadas a servicios de terceros como LinkedIn.</p>

        <div style={{ marginTop: '40px' }}>
          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>1. Responsable del Tratamiento de Datos</h3>
          <p>El responsable del tratamiento de los datos recolectados es <strong>Johnny Celis</strong>, con domicilio de contacto en Antioquia, Colombia, y correo electrónico de soporte: <a href="mailto:jcelis@johnnycelis.online" style={{color: electricPurple}}>jcelis@johnnycelis.online</a>.</p>

          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>2. Información que Recopilamos</h3>
          <ul>
            <li><strong>Información proporcionada por el usuario:</strong> Nombre, correo electrónico y datos de contacto enviados a través de formularios.</li>
            <li><strong>Datos de Terceros (LinkedIn API):</strong> Al utilizar nuestra integración con LinkedIn, podemos acceder a información autorizada como nombre de perfil, UID, dirección de correo electrónico y contenido de publicaciones, con el fin de ejecutar las automatizaciones solicitadas.</li>
          </ul>

          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>3. Finalidad del Tratamiento</h3>
          <p>Los datos se utilizan exclusivamente para gestionar publicaciones en redes sociales, optimizar procesos de marketing, enviar comunicaciones del servicio y mejorar la experiencia de usuario.</p>

          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>4. Uso de Herramientas de Automatización</h3>
          <p>Utilizamos la plataforma <strong>n8n</strong>. Los datos se gestionan de forma técnica y segura, sin venta o cesión a terceros para fines comerciales ajenos a Stratt-On Agency.</p>

          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>5. Conservación de Datos</h3>
          <p>Mantendremos tus datos personales solo el tiempo necesario. Puedes revocar el acceso de LinkedIn en cualquier momento desde la configuración de tu cuenta en dicha red social.</p>

          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>6. Derechos del Usuario (ARCO)</h3>
          <p>Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos. Para ejercerlos, escribe a: <a href="mailto:jcelis@johnnycelis.online" style={{color: electricPurple}}>jcelis@johnnycelis.online</a>.</p>

          <h3 style={{ color: '#fff', borderLeft: `4px solid ${electricPurple}`, paddingLeft: '20px', margin: '40px 0 20px' }}>7. Seguridad</h3>
          <p>Implementamos medidas técnicas como protocolos HTTPS para proteger tu información contra acceso no autorizado o divulgación.</p>
        </div>
      </section>

      <footer style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid #222', opacity: 0.4, fontSize: '11px', letterSpacing: '2px' }}>
        STRATT-ON AGENCY // ANTIOQUIA, COLOMBIA // 2026
      </footer>
    </main>
  );
}