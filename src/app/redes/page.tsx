import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import RedesBackground from "@/components/RedesBackground";

const title = "Redes — Stratt-On & Johnny Celis";
const description = "Todos los canales de Stratt-On Agency y Johnny Celis en un solo lugar.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.stratt-on.com/redes",
    siteName: "Stratt-On Agency",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/brand/stratton-og-image.png", width: 1200, height: 630, alt: "Stratt-On Agency" }],
  },
};

type IconName =
  | "globe"
  | "whatsapp"
  | "linkedin"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whop"
  | "community"
  | "facebook"
  | "mail"
  | "x";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-7.5 13.9L3 21l4.3-1.4A9 9 0 1 0 12 3z" />
          <path d="M9 9.6c.5 2.6 2.5 4.6 5 5.1" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <line x1="8" y1="10" x2="8" y2="16" />
          <line x1="8" y1="7.2" x2="8" y2="7.21" strokeWidth={2.4} />
          <path d="M11 16v-3.6a2 2 0 0 1 4 0V16" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <line x1="16.6" y1="7.4" x2="16.61" y2="7.4" strokeWidth={2.2} />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14 4v10.2a3.3 3.3 0 1 1-2.4-3.18" />
          <path d="M14 4c.5 2.4 2 3.9 4.4 4.2" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="3" y="5.5" width="18" height="13" rx="4" />
          <path d="M10 9.2l5.5 2.8-5.5 2.8v-5.6z" />
        </svg>
      );
    case "whop":
      return (
        <svg {...common}>
          <path d="M4 8l1.5-4h13L20 8" />
          <path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8z" />
          <path d="M9 12a3 3 0 0 0 6 0" />
        </svg>
      );
    case "community":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-7.5 13.9L3 21l4.3-1.4A9 9 0 1 0 12 3z" />
          <circle cx="8.7" cy="12" r="0.9" strokeWidth={2} />
          <circle cx="12" cy="12" r="0.9" strokeWidth={2} />
          <circle cx="15.3" cy="12" r="0.9" strokeWidth={2} />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M13.2 19v-6.6h-2v-2.3h2V8.6c0-1.7 1-2.7 2.7-2.7h1.9v2.3h-1.2c-.8 0-1 .3-1 1v1.9h2.2l-.3 2.3h-1.9V19" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      );
  }
}

type LinkItem = { label: string; sub: string; href: string; icon: IconName };

const strattonLinks: LinkItem[] = [
  { label: "TikTok", sub: "@stratt_on", href: "https://www.tiktok.com/@stratt_on", icon: "tiktok" },
  { label: "Instagram", sub: "@stratton_ai", href: "https://www.instagram.com/stratton_ai", icon: "instagram" },
  { label: "Sitio web", sub: "stratt-on.com", href: "https://www.stratt-on.com/", icon: "globe" },
  { label: "LinkedIn", sub: "Empresa", href: "https://www.linkedin.com/company/105200333/", icon: "linkedin" },
  { label: "YouTube", sub: "@Stratt-On", href: "https://www.youtube.com/@Stratt-On", icon: "youtube" },
  { label: "Whop", sub: "Comunidad", href: siteConfig.whopUrl, icon: "whop" },
  { label: "Comunidad", sub: "Grupo WhatsApp", href: "https://chat.whatsapp.com/KpNW2ppdBzVASNeWeLuA9x", icon: "community" },
  { label: "Facebook", sub: "Fan Page", href: "https://www.facebook.com/Strattonai/", icon: "facebook" },
];

const johnnyLinks: LinkItem[] = [
  { label: "LinkedIn", sub: "Personal", href: "https://www.linkedin.com/in/joscero/", icon: "linkedin" },
  { label: "Instagram", sub: "@johnnycelis.AI", href: "https://www.instagram.com/johnnycelis.AI", icon: "instagram" },
  { label: "X", sub: "@Joscero", href: "https://x.com/Joscero", icon: "x" },
  { label: "Facebook", sub: "Fan Page", href: "https://www.facebook.com/Johnnycelis.ia/", icon: "facebook" },
];

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Estoy interesado en una consultoría de automatización"
)}`;

function Tile({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="st-glass st-glass-hover group aspect-square flex flex-col items-center justify-center gap-2.5 p-3 text-center rounded-[4px] no-underline text-blanco transition-transform duration-200 hover:-translate-y-1"
    >
      <Icon name={item.icon} className="w-8 h-8 text-blanco transition-colors duration-200 group-hover:text-accent" />
      <div>
        <p className="font-extrabold text-[13.5px] leading-tight m-0">{item.label}</p>
        <p className="st-label text-[10px] text-humo m-0 mt-0.5 tracking-normal normal-case font-normal">{item.sub}</p>
      </div>
    </a>
  );
}

function SectionHead({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="st-text-shadow flex items-center gap-3.5 mb-4">
      <span className="st-status-line" />
      <h2 className="st-label m-0 text-[12.5px] text-blanco">
        {name} <span className="text-humo normal-case font-normal">— {tag}</span>
      </h2>
    </div>
  );
}

export default function RedesPage() {
  return (
    <main className="min-h-screen bg-carbon text-blanco px-[5%] py-8 md:py-10">
      <RedesBackground />

      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        <header className="st-ignite st-glass flex items-center justify-between flex-wrap gap-4 px-5 py-4 mb-7 rounded-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/stratton-logo-principal-fondo-oscuro.svg" alt="Stratt-On" className="w-36 md:w-44" />
          <div className="st-label flex items-center gap-2 text-humo text-[11px]">
            <span className="st-led" />
            Operativo ahora · Antioquia, CO
          </div>
        </header>

        <p
          className="st-ignite st-text-shadow text-blanco/85 text-sm md:text-base max-w-xl mb-7 leading-relaxed"
          style={{ animationDelay: "80ms" }}
        >
          Ecosistemas autónomos de IA para negocios B2B. Todos los canales de Stratt-On y Johnny Celis, en un solo lugar.
        </p>

        <div className="grid sm:grid-cols-2 gap-2.5 mb-7 st-ignite" style={{ animationDelay: "140ms" }}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="st-glass st-glass-hover flex items-center gap-4 p-4 rounded-[4px] no-underline text-blanco transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Icon name="whatsapp" className="w-6 h-6 text-blanco shrink-0" />
            <div>
              <p className="font-extrabold text-[15px] m-0 mb-0.5">Consultoría</p>
              <p className="st-label text-[10px] text-humo m-0 mb-2 tracking-normal normal-case font-normal">
                WhatsApp · +57 321 788 0682
              </p>
              <span className="st-label bg-accent text-carbon font-black text-[10.5px] px-3 py-1.5 rounded-st inline-block hover:bg-white hover:text-carbon transition-all duration-300">
                Agendar →
              </span>
            </div>
          </a>

          <a
            href="mailto:johnnycelis@stratt-on.com"
            className="st-glass st-glass-hover flex items-center gap-4 p-4 rounded-[4px] no-underline text-blanco transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Icon name="mail" className="w-6 h-6 text-blanco shrink-0" />
            <div>
              <p className="font-extrabold text-[15px] m-0 mb-0.5">Correo</p>
              <p className="st-label text-[10px] text-humo m-0 mb-2 tracking-normal normal-case font-normal">
                johnnycelis@stratt-on.com
              </p>
              <span className="st-label border border-blanco text-blanco text-[10.5px] font-bold px-3 py-1.5 rounded-st inline-block hover:border-accent hover:text-accent transition-all duration-300">
                Escribir →
              </span>
            </div>
          </a>
        </div>

        <section className="st-ignite" style={{ animationDelay: "200ms" }}>
          <SectionHead name="Stratt-On" tag="agencia" />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {strattonLinks.map((item) => (
              <Tile key={item.label + item.sub} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-6 st-ignite" style={{ animationDelay: "260ms" }}>
          <SectionHead name="Johnny Celis" tag="operador" />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {johnnyLinks.map((item) => (
              <Tile key={item.label + item.sub} item={item} />
            ))}
          </div>
        </section>

        <footer className="st-text-shadow flex items-center gap-2.5 pt-4 mt-8 border-t border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/stratton-isotipo-mono-blanco.svg" alt="" className="w-[18px] h-[18px]" />
          <p className="st-label text-[10.5px] text-humo m-0">Stratt-On — sistemas corriendo, no promesas.</p>
        </footer>
      </div>
    </main>
  );
}
