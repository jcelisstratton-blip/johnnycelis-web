import React from 'react';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/politicadeprivacidad' },
  title: 'Política de Privacidad | Stratt-On Agency',
  description: 'Política de privacidad de Johnny Celis y Stratt-On Agency: protección de datos y uso de las APIs de LinkedIn, TikTok y Google/YouTube.',
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-carbon text-white min-h-screen px-[10%] py-24 md:py-32 font-sans selection:bg-accent/40 selection:text-white">
      {/* Botón de Regreso Estilizado */}
      <Link
        href="/"
        className="st-label text-accent no-underline font-bold text-[11px] border border-accent px-5 py-2.5 inline-block mb-16 hover:bg-accent hover:text-carbon transition-all duration-400"
      >
        ← Volver a Stratt-On
      </Link>

      <header className="mb-16">
        <span className="st-status-line mb-8" />
        <h1 className="text-4xl md:text-7xl uppercase leading-none mb-5 text-white">
          Política de <br />
          <span className="text-accent">Privacidad</span>
        </h1>
        <p className="text-white/40 text-xs md:text-sm font-bold">Última actualización: 18 de noviembre de 2026</p>
      </header>
      
      <section className="leading-loose text-white/70 max-w-[900px] text-base text-justify space-y-10">
        <p>
          En <strong>Johnny Celis y Stratt-On Agency</strong>, la privacidad de nuestros usuarios es una prioridad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información cuando interactúas con nuestro sitio web <span className="text-white">www.stratt-on.com</span> y nuestras aplicaciones conectadas a servicios de terceros como LinkedIn, TikTok y Google/YouTube.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              1. Responsable del Tratamiento de Datos
            </h3>
            <p>
              El responsable del tratamiento de los datos recolectados es <strong>Johnny Celis</strong>, con domicilio de contacto en Antioquia, Colombia, y correo electrónico de soporte: <a href="mailto:johnnycelis@stratt-on.com" className="text-accent hover:underline">johnnycelis@stratt-on.com</a>.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              2. Información que Recopilamos
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Información proporcionada por el usuario:</strong> Nombre, correo electrónico y datos de contacto enviados a través de formularios.
              </li>
              <li>
                <strong>Datos de Terceros (LinkedIn API):</strong> Al utilizar nuestra integración con LinkedIn, podemos acceder a información autorizada como nombre de perfil, UID, dirección de correo electrónico y contenido de publicaciones, con el fin de ejecutar las automatizaciones solicitadas.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              3. Datos de TikTok (TikTok API for Developers)
            </h3>
            <p className="mb-4">
              Al conectar tu cuenta de TikTok a nuestra herramienta de publicación alojada en <span className="text-white">social.stratt-on.com</span>, accedemos únicamente a la siguiente información, previa autorización explícita otorgada por ti en la pantalla de consentimiento de TikTok:
            </p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li>
                <strong>Información básica de perfil (user.info.basic):</strong> nombre para mostrar, nombre de usuario, foto de perfil e identificador de usuario. La usamos para confirmarte visualmente en qué cuenta se publicará el contenido.
              </li>
              <li>
                <strong>Publicación de contenido (video.publish):</strong> permite subir y publicar videos directamente en tu perfil, con la configuración de privacidad, comentarios, dúos y montajes que tú selecciones antes de publicar.
              </li>
              <li>
                <strong>Envío a borradores (video.upload):</strong> permite enviar videos a tu bandeja de entrada de TikTok para que los edites y publiques desde la aplicación.
              </li>
              <li>
                <strong>Detalles del perfil (user.info.profile):</strong> tu biografía, el enlace a tu perfil y si tu cuenta está verificada. Los mostramos solo a ti, en la tarjeta de tu cuenta conectada.
              </li>
              <li>
                <strong>Estadísticas de la cuenta (user.info.stats):</strong> número de seguidores, seguidos, me gusta y videos. Guardamos una cifra por día para mostrarte cómo crece tu cuenta.
              </li>
              <li>
                <strong>Tus videos públicos (video.list):</strong> la lista de tus videos públicos con sus vistas, me gusta, comentarios y compartidos, para mostrarte tus resultados en la sección Métricas.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Qué almacenamos:</strong> tokens de acceso y actualización cifrados en tránsito, tu identificador de TikTok, los datos de perfil mencionados arriba, una cifra diaria de las estadísticas de tu cuenta, las cifras de tus videos públicos (identificador, descripción, fecha, enlace, portada, vistas, me gusta, comentarios y compartidos) y el registro de las publicaciones realizadas (identificador de publicación, estado y fecha). Los archivos de video que subes para publicar se almacenan de forma temporal y se eliminan una vez completada la publicación.
            </p>
            <p className="mb-4">
              <strong>Qué no hacemos:</strong> de tus videos existentes solo leemos las cifras y los datos públicos descritos arriba; no los modificamos, no los eliminamos y no descargamos tus archivos. No accedemos a tus mensajes ni a tus comentarios, no vemos la lista de tus seguidores, no publicamos ni interactuamos en tu nombre salvo las publicaciones que tú creas con la herramienta, no compartimos ni vendemos datos de TikTok a terceros, y no utilizamos esta información para entrenar modelos de inteligencia artificial. Las cifras y los datos de perfil solo los ve la persona que conectó la cuenta.
            </p>
            <p>
              <strong>Revocación:</strong> puedes retirar el acceso en cualquier momento desde TikTok, en Perfil → Configuración y privacidad → Seguridad y permisos → Autorizar administración. Al revocarlo o al desconectar la cuenta desde el panel (Configuración, Redes), eliminamos los tokens asociados a tu cuenta y dejamos de leer sus datos. Si además quieres que borremos las cifras y los datos de perfil ya guardados, escríbenos a <a href="mailto:johnnycelis@stratt-on.com" className="text-accent hover:underline">johnnycelis@stratt-on.com</a>.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              4. Datos de Google/YouTube (YouTube Data API v3)
            </h3>
            <p className="mb-4">
              Al conectar tu canal de YouTube a nuestra herramienta de publicación, accedemos únicamente a la siguiente información, previa autorización explícita otorgada por ti en la pantalla de consentimiento de Google:
            </p>
            <ul className="list-disc pl-5 space-y-3 mb-4">
              <li>
                <strong>Identificadores de canal:</strong> el ID único de tu canal de YouTube, su nombre público y el nombre de usuario asociado, para confirmarte visualmente en qué canal se publicará el contenido.
              </li>
              <li>
                <strong>Tokens de acceso oficiales:</strong> tokens de acceso y de actualización proporcionados por Google mediante OAuth, que nos permiten subir y publicar videos en tu nombre.
              </li>
              <li>
                <strong>Metadatos de video:</strong> archivos de video subidos, títulos, descripciones y configuración de privacidad seleccionada, necesarios para procesar la publicación.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Qué no hacemos:</strong> no leemos tus videos existentes, comentarios, suscriptores ni estadísticas del canal más allá de lo estrictamente necesario para confirmar que la subida se completó, no compartimos ni vendemos datos de Google/YouTube a terceros, y no utilizamos esta información para entrenar modelos de inteligencia artificial ni para publicidad.
            </p>
            <p className="mb-4">
              <strong>Cumplimiento:</strong> el uso y la transferencia de la información recibida de las APIs de Google por parte de este Servicio se adhieren a la{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Política de Datos de Usuario de los Servicios de API de Google
              </a>
              , incluyendo los requisitos de Uso Limitado (&quot;Limited Use&quot;).
            </p>
            <p>
              <strong>Revocación:</strong> puedes retirar el acceso en cualquier momento desde la{' '}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                configuración de permisos de tu Cuenta de Google
              </a>
              , o solicitando la eliminación total de tus datos almacenados escribiendo a <a href="mailto:johnnycelis@stratt-on.com" className="text-accent hover:underline">johnnycelis@stratt-on.com</a>. Al revocarlo, eliminamos los tokens asociados a tu cuenta.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              5. Finalidad del Tratamiento
            </h3>
            <p>
              Los datos se utilizan exclusivamente para gestionar publicaciones en redes sociales, optimizar procesos de marketing, enviar comunicaciones del servicio y mejorar la experiencia de usuario.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              6. Uso de Herramientas de Automatización
            </h3>
            <p>
              Utilizamos la plataforma <strong>n8n</strong>. Los datos se gestionan de forma técnica y segura, sin venta o cesión a terceros para fines comerciales ajenos a Stratt-On Agency.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              7. Conservación de Datos
            </h3>
            <p>
              Mantendremos tus datos personales solo el tiempo necesario. Puedes revocar el acceso de LinkedIn en cualquier momento desde la configuración de tu cuenta en dicha red social.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              8. Derechos del Usuario (ARCO)
            </h3>
            <p>
              Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos. Para ejercerlos, escribe a: <a href="mailto:johnnycelis@stratt-on.com" className="text-accent hover:underline">johnnycelis@stratt-on.com</a>.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 text-lg md:text-xl uppercase">
              9. Seguridad
            </h3>
            <p>
              Implementamos medidas técnicas como protocolos HTTPS para proteger tu información contra acceso no autorizado o divulgación.
            </p>
          </div>
        </div>
      </section>

      <footer className="st-label mt-24 pt-10 border-t border-white/10 opacity-20 text-[10px]">
        STRATT-ON AGENCY // ANTIOQUIA, COLOMBIA // {new Date().getFullYear()}
      </footer>
    </main>
  );
}