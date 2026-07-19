import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | Stratt-On Agency',
  description: 'Términos y condiciones de uso de las herramientas de automatización de TikTok y redes sociales de Stratt-On Agency.',
};

export default function TerminosCondiciones() {
  return (
    <main className="bg-carbon text-white min-h-screen px-[10%] py-24 md:py-32 font-sans selection:bg-accent/40 selection:text-white">
      {/* Botón de Regreso */}
      <Link
        href="/"
        className="st-label text-accent no-underline font-bold text-[11px] border border-accent px-5 py-2.5 inline-block mb-16 hover:bg-accent hover:text-carbon transition-all duration-400"
      >
        ← Volver a Stratt-On
      </Link>

      <header className="mb-16">
        <span className="st-status-line mb-8" />
        <h1 className="text-4xl md:text-7xl uppercase leading-none mb-5 text-white">
          Términos y <br />
          <span className="text-accent">Condiciones</span>
        </h1>
        <p className="text-white/40 text-xs md:text-sm font-bold">Última actualización: 16 de marzo de 2026</p>
      </header>

      <section className="leading-loose text-white/70 max-w-[900px] text-base text-justify space-y-10">
        <div className="bg-grafito p-8 md:p-10 border-l-2 border-accent mb-10">
          <p>Al utilizar nuestra aplicación de automatización de <strong>TikTok</strong>, el usuario acepta que <strong>Stratt-On Agency</strong> gestione el contenido multimedia exclusivamente para fines de publicación autorizada.</p>
        </div>

        <div>
          <h3 className="text-white text-lg md:text-xl uppercase mb-4">Seguridad y Acceso</h3>
          <p>No recopilamos credenciales de acceso directo; el acceso se realiza mediante el protocolo <strong>OAuth2 de TikTok</strong>, garantizando que su contraseña nunca pase por nuestros servidores.</p>
        </div>

        <div>
          <h3 className="text-white text-lg md:text-xl uppercase mb-4">Control del Usuario</h3>
          <p>Usted mantiene el control total sobre su cuenta. El usuario puede revocar este acceso en cualquier momento desde su panel de configuración de <strong>TikTok</strong>.</p>
        </div>

        <div>
          <h3 className="text-white text-lg md:text-xl uppercase mb-4">Uso de Contenido</h3>
          <p>Stratt-On Agency se compromete a utilizar los permisos otorgados únicamente para las tareas de automatización y publicación explícitamente configuradas por el usuario dentro de nuestro ecosistema de sistemas de IA.</p>
        </div>
      </section>

      <footer className="st-label mt-24 pt-10 border-t border-white/10 opacity-20 text-[10px]">
        STRATT-ON AGENCY // AUTOMATION PROTOCOLS // {new Date().getFullYear()}
      </footer>
    </main>
  );
}