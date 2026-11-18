import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Términos y Condiciones | Stratt-On Agency',
  description:
    'Terms of Service for Stratt-On Social Manager, the social media management panel by Stratt-On Agency: accounts, connected TikTok and YouTube accounts, acceptable use, content, payments and liability. Términos y condiciones de uso.',
};

type Seccion = { titulo: string; parrafos: string[]; lista?: string[] };

const ACTUALIZADO_EN = 'November 18, 2026';
const ACTUALIZADO_ES = '18 de noviembre de 2026';

const SECCIONES_EN: Seccion[] = [
  {
    titulo: '1. Who we are and what the Service is',
    parrafos: [
      'Stratt-On Social Manager (the "Service") is a web application, available at social.stratt-on.com, operated by Johnny Celis, doing business as Stratt-On Agency, based in Antioquia, Colombia ("Stratt-On", "we", "us"). The Service lets creators, businesses and agencies prepare, schedule and publish content to the social media accounts they connect (for example TikTok, YouTube, Instagram, Facebook, LinkedIn, Threads and others), and see how that content performs.',
      'By creating an account, connecting a social account or otherwise using the Service, you agree to these Terms of Service ("Terms"). If you do not agree, do not use the Service.',
    ],
  },
  {
    titulo: '2. Eligibility and your account',
    parrafos: [
      'You must be of legal age in your country to enter a binding agreement, and at least the minimum age that each connected platform requires. If you use the Service on behalf of a company or client, you confirm that you have authority to accept these Terms and to connect and publish to those accounts.',
      'You can sign in with TikTok, Google, Facebook or email. You must give accurate information, keep your sign-in methods secure and tell us promptly if you suspect unauthorized use. You are responsible for everything done through your account.',
    ],
  },
  {
    titulo: '3. Connecting your social accounts',
    parrafos: [
      'We never ask for or store the passwords of your social accounts. Each account is connected through the official OAuth authorization of the platform, on that platform\'s own consent screen, where you see exactly which permissions you grant. We only use the permissions you grant, and only to provide the features you use in the Service.',
      'You can disconnect any account at any time from the Settings area of the Service, and you can also revoke access from the platform itself (for TikTok: Settings and privacy, Security and permissions, Manage app permissions; for Google: your Google Account permissions page). When access is revoked or the account is disconnected, we stop using it and delete the stored access tokens.',
      'Your use of each connected platform remains subject to that platform\'s own terms and policies, which you agree to follow, including the TikTok Terms of Service and Community Guidelines, TikTok\'s Music Usage Confirmation and Branded Content Policy, and the YouTube Terms of Service. We are not affiliated with or endorsed by TikTok, Google or any other platform.',
    ],
  },
  {
    titulo: '4. Additional terms for TikTok',
    parrafos: [
      'When you connect a TikTok account, the Service may request the following permissions, shown to you on TikTok\'s consent screen:',
    ],
    lista: [
      'user.info.basic: your display name, username and avatar, to show which account you are signing in with or publishing to.',
      'user.info.profile: your bio, profile link and verified status, shown only to you on your connected account card.',
      'user.info.stats: your follower, following, like and video counts, to show how your account grows over time.',
      'video.list: the list of your public videos with their views, likes, comments and shares, to show your results in the Metrics section.',
      'video.publish and video.upload: to publish a video or photo post to your profile, or send it to your TikTok drafts, only when you ask us to.',
    ],
  },
  {
    titulo: '4.1 How TikTok publishing works',
    parrafos: [
      'Before each post you choose the privacy level (there is no default), whether Comments, Duet and Stitch are allowed, and whether the content promotes your own brand or a paid partnership. You see a preview of the video and caption and must confirm before anything is sent. We publish only what you confirm, at the moment or schedule you choose. We do not edit, trim or alter your videos.',
      'You are solely responsible for the content you publish and for having the rights to it, including any music or audio used. By publishing you agree to TikTok\'s Music Usage Confirmation. Until TikTok approves the integration for public posting, TikTok may require posts to be private; the Service will tell you when TikTok rejects a post and why.',
      'The data we read from TikTok (profile details, account statistics and your public video metrics) is read-only, is shown only to the person who connected the account, and is never sold or shared. We do not post, comment, like, follow, send messages or change anything on your TikTok account except the posts you explicitly create with the Service.',
    ],
  },
  {
    titulo: '5. Your content',
    parrafos: [
      'You keep all rights to the videos, images, captions and other material you upload or create ("Your Content"). You grant us a limited, non-exclusive, worldwide license to store, process and transmit Your Content only as needed to provide the Service to you (for example, to upload it to the platform you chose, generate previews or schedule a post). Files you upload for publishing are kept temporarily and deleted after publication or when you remove them, unless you save them in your media library.',
      'You promise that you own Your Content or have permission to use it, that it does not infringe anyone\'s rights, and that it complies with the law and with the rules of each platform you publish to.',
    ],
  },
  {
    titulo: '6. Acceptable use',
    parrafos: ['You agree not to use the Service to:'],
    lista: [
      'publish illegal, deceptive, harassing, hateful, sexually exploitative or infringing content, or content that violates a platform\'s rules;',
      'send spam, run fake or inauthentic engagement, or try to avoid a platform\'s limits, reviews or safeguards;',
      'access, collect or scrape data of other people or of other users of the Service;',
      'reverse engineer, overload, probe or interfere with the Service, or use it to distribute malware;',
      'resell or sublicense the Service without our written permission.',
    ],
  },
  {
    titulo: '7. AI-assisted features',
    parrafos: [
      'The Service may offer tools that use artificial intelligence to suggest ideas, captions, images or videos. AI output can be inaccurate or similar to other content. You must review it before publishing and you remain responsible for what you publish. We do not use the content or data you obtained from TikTok or Google to train artificial intelligence models.',
    ],
  },
  {
    titulo: '8. Plans, billing and refunds',
    parrafos: [
      'The Service has a free plan and paid plans. Prices, limits and billing periods are shown before you buy. Paid plans are processed by a third-party payment provider and may renew automatically until you cancel; cancellation takes effect at the end of the current billing period. Taxes may apply. Refund requests are handled case by case; contact us at the address below. We may change prices or plan limits with reasonable advance notice.',
    ],
  },
  {
    titulo: '9. Privacy',
    parrafos: [
      'Our Privacy Policy, available at www.stratt-on.com/politicadeprivacidad, explains what personal data we collect, how we use it, how long we keep it and your rights. It is part of these Terms.',
    ],
  },
  {
    titulo: '10. Availability and third-party services',
    parrafos: [
      'The Service depends on third-party platforms and their APIs, which can change, limit or stop working without notice. We try to keep the Service available and accurate, but we do not guarantee uninterrupted operation, that every post will be accepted by a platform, or that metrics will match those shown inside each platform. Beta and preview features are offered as they are and may change or be removed.',
    ],
  },
  {
    titulo: '11. Our rights',
    parrafos: [
      'The Service, its software, design, name and logos belong to Stratt-On or its licensors and are protected by law. These Terms give you a personal, limited, revocable, non-transferable right to use the Service. TikTok and other platform names and marks belong to their respective owners.',
    ],
  },
  {
    titulo: '12. Disclaimer of warranties',
    parrafos: [
      'To the maximum extent permitted by law, the Service is provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose and non-infringement. We do not guarantee any particular result, reach, growth or revenue from using the Service.',
    ],
  },
  {
    titulo: '13. Limitation of liability',
    parrafos: [
      'To the maximum extent permitted by law, Stratt-On will not be liable for indirect, incidental, special or consequential damages, or for lost profits, data or business opportunities, arising from your use of the Service or from actions of third-party platforms. Our total liability for any claim related to the Service is limited to the amount you paid us for the Service in the three months before the event that gave rise to the claim. Nothing in these Terms limits liability that cannot be limited by law.',
    ],
  },
  {
    titulo: '14. Your responsibility',
    parrafos: [
      'You will defend and hold Stratt-On harmless from claims, losses and expenses (including reasonable legal fees) arising from Your Content, your breach of these Terms or of a platform\'s rules, or your violation of anyone\'s rights.',
    ],
  },
  {
    titulo: '15. Suspension and termination',
    parrafos: [
      'You may stop using the Service and delete your account at any time. We may suspend or end your access if you breach these Terms or a platform\'s rules, if required by law or by a platform, or to protect the Service or other users. When an account ends we delete the stored access tokens, and we delete or anonymize your other data as described in the Privacy Policy, except what we must keep by law.',
    ],
  },
  {
    titulo: '16. Changes to these Terms',
    parrafos: [
      'We may update these Terms. The date of the latest version is shown at the top. For material changes we will give notice in the Service or by email. If you keep using the Service after the changes take effect, you accept the new Terms.',
    ],
  },
  {
    titulo: '17. Governing law and contact',
    parrafos: [
      'These Terms are governed by the laws of the Republic of Colombia. Disputes will be brought before the competent courts of Antioquia, Colombia, without prejudice to any mandatory consumer rights you have in your country of residence.',
      'Questions, data requests or notices: johnnycelis@stratt-on.com.',
    ],
  },
];

const SECCIONES_ES: Seccion[] = [
  {
    titulo: '1. Quiénes somos y qué es el Servicio',
    parrafos: [
      'Stratt-On Social Manager (el «Servicio») es una aplicación web, disponible en social.stratt-on.com, operada por Johnny Celis, que actúa como Stratt-On Agency, con sede en Antioquia, Colombia («Stratt-On», «nosotros»). El Servicio permite a creadores, negocios y agencias preparar, programar y publicar contenido en las cuentas de redes sociales que conectan (por ejemplo TikTok, YouTube, Instagram, Facebook, LinkedIn, Threads y otras) y ver cómo rinde ese contenido.',
      'Al crear una cuenta, conectar una red social o usar el Servicio de cualquier otra forma, aceptas estos Términos y Condiciones («Términos»). Si no estás de acuerdo, no uses el Servicio.',
    ],
  },
  {
    titulo: '2. Requisitos y tu cuenta',
    parrafos: [
      'Debes tener la mayoría de edad en tu país para aceptar un contrato y, como mínimo, la edad que exija cada plataforma conectada. Si usas el Servicio en nombre de una empresa o de un cliente, confirmas que tienes autoridad para aceptar estos Términos y para conectar y publicar en esas cuentas.',
      'Puedes iniciar sesión con TikTok, Google, Facebook o correo electrónico. Debes dar información veraz, proteger tus métodos de acceso y avisarnos de inmediato si sospechas un uso no autorizado. Eres responsable de todo lo que se haga desde tu cuenta.',
    ],
  },
  {
    titulo: '3. Conexión de tus redes sociales',
    parrafos: [
      'Nunca pedimos ni guardamos las contraseñas de tus redes. Cada cuenta se conecta con la autorización OAuth oficial de la plataforma, en su propia pantalla de consentimiento, donde ves exactamente qué permisos otorgas. Solo usamos los permisos que concedes y solo para las funciones que usas en el Servicio.',
      'Puedes desconectar cualquier cuenta en cualquier momento desde Configuración del Servicio, y también retirar el acceso desde la propia plataforma (en TikTok: Configuración y privacidad, Seguridad y permisos, Administrar permisos de apps; en Google: la página de permisos de tu Cuenta de Google). Al retirar el acceso o desconectar la cuenta, dejamos de usarla y eliminamos los tokens guardados.',
      'Tu uso de cada plataforma sigue sujeto a sus propios términos y políticas, que te comprometes a cumplir, incluidos los Términos de Servicio y las Normas de la Comunidad de TikTok, la Confirmación de Uso de Música y la Política de Contenido de Marca de TikTok, y los Términos de Servicio de YouTube. No estamos afiliados ni respaldados por TikTok, Google ni ninguna otra plataforma.',
    ],
  },
  {
    titulo: '4. Condiciones adicionales para TikTok',
    parrafos: [
      'Cuando conectas una cuenta de TikTok, el Servicio puede solicitar los siguientes permisos, que ves en la pantalla de consentimiento de TikTok:',
    ],
    lista: [
      'user.info.basic: tu nombre para mostrar, usuario y foto, para indicar con qué cuenta inicias sesión o a cuál se publica.',
      'user.info.profile: tu biografía, enlace al perfil y estado de verificación, que solo ves tú en la tarjeta de tu cuenta conectada.',
      'user.info.stats: tus cifras de seguidores, seguidos, me gusta y videos, para mostrar cómo crece tu cuenta.',
      'video.list: la lista de tus videos públicos con sus vistas, me gusta, comentarios y compartidos, para mostrar tus resultados en la sección Métricas.',
      'video.publish y video.upload: para publicar un video o una publicación de fotos en tu perfil, o enviarlo a tus borradores de TikTok, solo cuando tú lo pidas.',
    ],
  },
  {
    titulo: '4.1 Cómo funciona la publicación en TikTok',
    parrafos: [
      'Antes de cada publicación eliges el nivel de privacidad (no hay uno por defecto), si se permiten Comentarios, Dúo y Pegado, y si el contenido promociona tu propia marca o una colaboración pagada. Ves una vista previa del video y de la descripción y debes confirmar antes de que se envíe algo. Publicamos solo lo que confirmas, en el momento o la programación que elijas. No editamos, recortamos ni alteramos tus videos.',
      'Eres el único responsable del contenido que publicas y de tener los derechos sobre él, incluida la música o el audio usados. Al publicar aceptas la Confirmación de Uso de Música de TikTok. Mientras TikTok no apruebe la integración para publicar en público, TikTok puede exigir que las publicaciones sean privadas; el Servicio te informa cuando TikTok rechaza una publicación y por qué.',
      'Los datos que leemos de TikTok (datos del perfil, estadísticas de la cuenta y cifras de tus videos públicos) son de solo lectura, solo los ve la persona que conectó la cuenta y nunca se venden ni se comparten. No publicamos, comentamos, damos me gusta, seguimos, enviamos mensajes ni cambiamos nada en tu cuenta de TikTok, salvo las publicaciones que tú creas expresamente con el Servicio.',
    ],
  },
  {
    titulo: '5. Tu contenido',
    parrafos: [
      'Conservas todos los derechos sobre los videos, imágenes, textos y demás material que subes o creas («Tu Contenido»). Nos otorgas una licencia limitada, no exclusiva y mundial para almacenar, procesar y transmitir Tu Contenido solo en la medida necesaria para prestarte el Servicio (por ejemplo, subirlo a la plataforma que elegiste, generar vistas previas o programar una publicación). Los archivos que subes para publicar se conservan de forma temporal y se eliminan tras la publicación o cuando los quitas, salvo que los guardes en tu biblioteca de medios.',
      'Prometes que Tu Contenido es tuyo o que tienes permiso para usarlo, que no infringe derechos de nadie y que cumple la ley y las reglas de cada plataforma donde publicas.',
    ],
  },
  {
    titulo: '6. Uso aceptable',
    parrafos: ['Te comprometes a no usar el Servicio para:'],
    lista: [
      'publicar contenido ilegal, engañoso, acosador, de odio, de explotación sexual o que infrinja derechos, o que viole las reglas de una plataforma;',
      'enviar spam, generar interacción falsa o inauténtica, o intentar evadir los límites, revisiones o protecciones de una plataforma;',
      'acceder, recopilar o extraer datos de otras personas o de otros usuarios del Servicio;',
      'aplicar ingeniería inversa, sobrecargar, sondear o interferir con el Servicio, o usarlo para distribuir software malicioso;',
      'revender o sublicenciar el Servicio sin nuestro permiso por escrito.',
    ],
  },
  {
    titulo: '7. Funciones con ayuda de inteligencia artificial',
    parrafos: [
      'El Servicio puede ofrecer herramientas que usan inteligencia artificial para sugerir ideas, textos, imágenes o videos. El resultado puede ser inexacto o parecido a otro contenido. Debes revisarlo antes de publicar y sigues siendo responsable de lo que publicas. No usamos el contenido ni los datos que obtienes de TikTok o Google para entrenar modelos de inteligencia artificial.',
    ],
  },
  {
    titulo: '8. Planes, cobros y reembolsos',
    parrafos: [
      'El Servicio tiene un plan gratuito y planes de pago. Los precios, límites y periodos de cobro se muestran antes de comprar. Los planes de pago los procesa un proveedor de pagos externo y pueden renovarse automáticamente hasta que canceles; la cancelación aplica al final del periodo de cobro vigente. Pueden aplicarse impuestos. Las solicitudes de reembolso se atienden caso por caso; escríbenos al correo indicado abajo. Podemos cambiar precios o límites de los planes con un aviso razonable.',
    ],
  },
  {
    titulo: '9. Privacidad',
    parrafos: [
      'Nuestra Política de Privacidad, disponible en www.stratt-on.com/politicadeprivacidad, explica qué datos personales recopilamos, cómo los usamos, cuánto tiempo los conservamos y cuáles son tus derechos. Forma parte de estos Términos.',
    ],
  },
  {
    titulo: '10. Disponibilidad y servicios de terceros',
    parrafos: [
      'El Servicio depende de plataformas de terceros y de sus APIs, que pueden cambiar, limitarse o dejar de funcionar sin aviso. Procuramos mantener el Servicio disponible y exacto, pero no garantizamos un funcionamiento ininterrumpido, que una plataforma acepte todas las publicaciones ni que las métricas coincidan con las que muestra cada plataforma. Las funciones en beta o en vista previa se ofrecen tal como están y pueden cambiar o retirarse.',
    ],
  },
  {
    titulo: '11. Nuestros derechos',
    parrafos: [
      'El Servicio, su software, diseño, nombre y logotipos pertenecen a Stratt-On o a sus licenciantes y están protegidos por la ley. Estos Términos te dan un derecho personal, limitado, revocable e intransferible a usar el Servicio. TikTok y los nombres y marcas de otras plataformas pertenecen a sus respectivos dueños.',
    ],
  },
  {
    titulo: '12. Exclusión de garantías',
    parrafos: [
      'En la máxima medida permitida por la ley, el Servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluida la idoneidad para un fin particular y la no infracción. No garantizamos ningún resultado, alcance, crecimiento ni ingreso por usar el Servicio.',
    ],
  },
  {
    titulo: '13. Limitación de responsabilidad',
    parrafos: [
      'En la máxima medida permitida por la ley, Stratt-On no responde por daños indirectos, incidentales, especiales o consecuentes, ni por lucro cesante, pérdida de datos u oportunidades de negocio, derivados del uso del Servicio o de acciones de plataformas de terceros. Nuestra responsabilidad total por cualquier reclamo relacionado con el Servicio se limita a lo que nos hayas pagado por el Servicio en los tres meses anteriores al hecho que originó el reclamo. Nada en estos Términos limita una responsabilidad que la ley no permita limitar.',
    ],
  },
  {
    titulo: '14. Tu responsabilidad',
    parrafos: [
      'Defenderás y mantendrás indemne a Stratt-On frente a reclamos, pérdidas y gastos (incluidos honorarios legales razonables) que surjan de Tu Contenido, del incumplimiento de estos Términos o de las reglas de una plataforma, o de la violación de derechos de terceros.',
    ],
  },
  {
    titulo: '15. Suspensión y terminación',
    parrafos: [
      'Puedes dejar de usar el Servicio y eliminar tu cuenta en cualquier momento. Podemos suspender o terminar tu acceso si incumples estos Términos o las reglas de una plataforma, si la ley o una plataforma lo exige, o para proteger el Servicio o a otros usuarios. Al terminar una cuenta eliminamos los tokens de acceso guardados y borramos o anonimizamos tus demás datos según la Política de Privacidad, salvo lo que debamos conservar por ley.',
    ],
  },
  {
    titulo: '16. Cambios en estos Términos',
    parrafos: [
      'Podemos actualizar estos Términos. La fecha de la última versión aparece arriba. Ante cambios importantes avisaremos en el Servicio o por correo. Si sigues usando el Servicio después de que los cambios entren en vigor, aceptas los nuevos Términos.',
    ],
  },
  {
    titulo: '17. Ley aplicable y contacto',
    parrafos: [
      'Estos Términos se rigen por las leyes de la República de Colombia. Las controversias se someterán a los jueces competentes de Antioquia, Colombia, sin perjuicio de los derechos imperativos de consumidor que tengas en tu país de residencia.',
      'Preguntas, solicitudes sobre tus datos o avisos: johnnycelis@stratt-on.com.',
    ],
  },
];

function Bloque({ secciones }: { secciones: Seccion[] }) {
  return (
    <div className="space-y-10">
      {secciones.map((s) => (
        <div key={s.titulo}>
          <h3 className="text-white text-lg md:text-xl uppercase mb-4">{s.titulo}</h3>
          {s.parrafos.map((p) => (
            <p key={p} className="mb-4">
              {p}
            </p>
          ))}
          {s.lista && (
            <ul className="list-disc pl-5 space-y-3 mb-4">
              {s.lista.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

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

      <header className="mb-10">
        <span className="st-status-line mb-8" />
        <h1 className="text-4xl md:text-7xl uppercase leading-none mb-5 text-white">
          Terms of <br />
          <span className="text-accent">Service</span>
        </h1>
        <p className="text-white/40 text-xs md:text-sm font-bold">Last updated: {ACTUALIZADO_EN}</p>
        <p className="text-white/50 text-sm mt-4">
          <a href="#english" className="text-accent hover:underline">English</a>
          {' · '}
          <a href="#espanol" className="text-accent hover:underline">Español</a>
        </p>
      </header>

      <section id="english" className="leading-loose text-white/70 max-w-[900px] text-base space-y-10 scroll-mt-10">
        <div className="bg-grafito p-8 md:p-10 border-l-2 border-accent">
          <p>
            These Terms of Service apply to <strong>Stratt-On Social Manager</strong> (social.stratt-on.com) and to the
            automation tools of <strong>Stratt-On Agency</strong> that connect to TikTok, YouTube and other social
            platforms. Please read them carefully.
          </p>
        </div>
        <Bloque secciones={SECCIONES_EN} />
      </section>

      <section
        id="espanol"
        className="leading-loose text-white/70 max-w-[900px] text-base text-justify space-y-10 mt-24 pt-16 border-t border-white/10 scroll-mt-10"
      >
        <header>
          <h2 className="text-3xl md:text-5xl uppercase leading-none mb-5 text-white">
            Términos y <span className="text-accent">Condiciones</span>
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-bold">Última actualización: {ACTUALIZADO_ES}</p>
        </header>
        <div className="bg-grafito p-8 md:p-10 border-l-2 border-accent">
          <p>
            Estos Términos y Condiciones aplican a <strong>Stratt-On Social Manager</strong> (social.stratt-on.com) y a
            las herramientas de automatización de <strong>Stratt-On Agency</strong> que se conectan con TikTok, YouTube
            y otras plataformas. Léelos con atención.
          </p>
        </div>
        <Bloque secciones={SECCIONES_ES} />
      </section>

      <footer className="st-label mt-24 pt-10 border-t border-white/10 opacity-20 text-[10px]">
        STRATT-ON AGENCY // AUTOMATION PROTOCOLS // {new Date().getFullYear()}
      </footer>
    </main>
  );
}
