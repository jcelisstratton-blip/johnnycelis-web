export default function TerminosCondiciones() {
  const electricPurple = "#9D00FF";

  return (
    <main style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '120px 10% 80px', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      
      {/* Botón de Regreso */}
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
          Términos y <br />
          <span style={{ color: electricPurple }}>Condiciones</span>
        </h1>
        <p style={{ color: '#666', fontWeight: 'bold' }}>Última actualización: 16 de marzo de 2026</p>
      </header>
      
      <section style={{ 
        lineHeight: '1.8', 
        color: '#ccc', 
        maxWidth: '900px', 
        fontSize: '1.1rem',
        textAlign: 'justify'
      }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          padding: '40px', 
          borderLeft: `2px solid ${electricPurple}`,
          marginBottom: '40px'
        }}>
          <p>Al utilizar nuestra aplicación de automatización de <strong>TikTok</strong>, el usuario acepta que <strong>Stratt-On Agency</strong> gestione el contenido multimedia exclusivamente para fines de publicación autorizada.</p>
        </div>

        <h3 style={{ color: '#fff', margin: '40px 0 20px' }}>Seguridad y Acceso</h3>
        <p>No recopilamos credenciales de acceso directo; el acceso se realiza mediante el protocolo <strong>OAuth2 de TikTok</strong>, garantizando que su contraseña nunca pase por nuestros servidores.</p>

        <h3 style={{ color: '#fff', margin: '40px 0 20px' }}>Control del Usuario</h3>
        <p>Usted mantiene el control total sobre su cuenta. El usuario puede revocar este acceso en cualquier momento desde su panel de configuración de <strong>TikTok</strong>.</p>

        <h3 style={{ color: '#fff', margin: '40px 0 20px' }}>Uso de Contenido</h3>
        <p>Stratt-On Agency se compromete a utilizar los permisos otorgados únicamente para las tareas de automatización y publicación explícitamente configuradas por el usuario dentro de nuestro ecosistema de sistemas de IA.</p>
      </section>

      <footer style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid #222', opacity: 0.4, fontSize: '11px', letterSpacing: '2px' }}>
        STRATT-ON AGENCY // AUTOMATION PROTOCOLS // 2026
      </footer>
    </main>
  );
}