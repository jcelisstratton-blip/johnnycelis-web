import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Stratt-On Agency',
  description: 'Política de privacidad y protección de datos personales de Johnny Celis y Stratt-On Agency.',
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-black text-white min-h-screen px-[10%] py-24 md:py-32 font-sans selection:bg-accent/40 selection:text-white">
      {/* Botón de Regreso Estilizado */}
      <Link 
        href="/" 
        className="text-accent no-underline font-bold text-[11px] uppercase tracking-widest border border-accent px-5 py-2.5 inline-block mb-16 hover:bg-accent hover:text-black transition-all duration-400"
      >
        ← Volver a Stratt-On
      </Link>
      
      <header className="mb-16">
        <h1 className="text-4xl md:text-7xl font-black italic uppercase leading-none mb-5 text-white">
          Política de <br />
          <span className="text-accent">Privacidad</span>
        </h1>
        <p className="text-white/40 text-xs md:text-sm font-bold">Última actualización: 16 de marzo de 2026</p>
      </header>
      
      <section className="leading-loose text-white/70 max-w-[900px] text-base text-justify space-y-10">
        <p>
          En <strong>Johnny Celis y Stratt-On Agency</strong>, la privacidad de nuestros usuarios es una prioridad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información cuando interactúas con nuestro sitio web <span className="text-white">www.johnnycelis.online</span> y nuestras aplicaciones conectadas a servicios de terceros como LinkedIn.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
              1. Responsable del Tratamiento de Datos
            </h3>
            <p>
              El responsable del tratamiento de los datos recolectados es <strong>Johnny Celis</strong>, con domicilio de contacto en Antioquia, Colombia, y correo electrónico de soporte: <a href="mailto:jcelis@johnnycelis.online" className="text-accent hover:underline">jcelis@johnnycelis.online</a>.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
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
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
              3. Finalidad del Tratamiento
            </h3>
            <p>
              Los datos se utilizan exclusivamente para gestionar publicaciones en redes sociales, optimizar procesos de marketing, enviar comunicaciones del servicio y mejorar la experiencia de usuario.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
              4. Uso de Herramientas de Automatización
            </h3>
            <p>
              Utilizamos la plataforma <strong>n8n</strong>. Los datos se gestionan de forma técnica y segura, sin venta o cesión a terceros para fines comerciales ajenos a Stratt-On Agency.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
              5. Conservación de Datos
            </h3>
            <p>
              Mantendremos tus datos personales solo el tiempo necesario. Puedes revocar el acceso de LinkedIn en cualquier momento desde la configuración de tu cuenta en dicha red social.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
              6. Derechos del Usuario (ARCO)
            </h3>
            <p>
              Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos. Para ejercerlos, escribe a: <a href="mailto:jcelis@johnnycelis.online" className="text-accent hover:underline">jcelis@johnnycelis.online</a>.
            </p>
          </div>

          <div>
            <h3 className="text-white border-l-4 border-accent pl-5 my-6 font-bold text-lg md:text-xl uppercase">
              7. Seguridad
            </h3>
            <p>
              Implementamos medidas técnicas como protocolos HTTPS para proteger tu información contra acceso no autorizado o divulgación.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-24 pt-10 border-t border-white/10 opacity-20 text-[10px] tracking-[2px] uppercase">
        STRATT-ON AGENCY // ANTIOQUIA, COLOMBIA // {new Date().getFullYear()}
      </footer>
    </main>
  );
}