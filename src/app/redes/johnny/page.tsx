import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import RedesBackground from "@/components/RedesBackground";
import { Icon, type IconName } from "@/components/RedesIcon";

const title = "Johnny Celis — Redes y contacto";
const description = "Todos los canales de Johnny Celis en un solo lugar: TikTok, Instagram, LinkedIn, X, Facebook y WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.stratt-on.com/redes/johnny",
    siteName: "Stratt-On Agency",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/brand/stratton-og-image.png", width: 1200, height: 630, alt: "Johnny Celis — Stratt-On Agency" }],
  },
};

type LinkItem = { label: string; sub: string; href: string; icon: IconName };

const links: LinkItem[] = [
  { label: "TikTok", sub: "@Jcelis9", href: "https://www.tiktok.com/@Jcelis9", icon: "tiktok" },
  { label: "Instagram", sub: "@johnnycelis.AI", href: "https://www.instagram.com/johnnycelis.AI", icon: "instagram" },
  { label: "LinkedIn", sub: "Personal", href: "https://www.linkedin.com/in/joscero/", icon: "linkedin" },
  { label: "X", sub: "@Joscero", href: "https://x.com/Joscero", icon: "x" },
  { label: "Facebook", sub: "Fan Page", href: "https://www.facebook.com/Johnnycelis.ia/", icon: "facebook" },
];

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hola Johnny, te escribo desde tu página de redes"
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

export default function RedesJohnnyPage() {
  return (
    <main className="min-h-screen bg-carbon text-blanco px-[5%] py-8 md:py-10">
      <RedesBackground />

      <div className="max-w-3xl mx-auto">
        <header className="st-ignite st-glass flex items-center justify-between flex-wrap gap-4 px-5 py-4 mb-7 rounded-[4px]">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/stratton-isotipo-mono-blanco.svg" alt="" className="w-7 h-7" />
            <h1 className="font-black text-xl md:text-2xl m-0 leading-none">Johnny Celis</h1>
          </div>
          <div className="st-label flex items-center gap-2 text-humo text-[11px]">
            <span className="st-led" />
            Antioquia, CO
          </div>
        </header>

        <p
          className="st-ignite st-text-shadow text-blanco/85 text-sm md:text-base max-w-xl mb-7 leading-relaxed"
          style={{ animationDelay: "80ms" }}
        >
          Automatización, IA y negocios digitales. CEO de Stratt-On Agency. Sígueme o escríbeme directo.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="st-ignite st-glass st-glass-hover flex items-center gap-4 p-4 mb-7 rounded-[4px] no-underline text-blanco transition-transform duration-200 hover:-translate-y-0.5"
          style={{ animationDelay: "140ms" }}
        >
          <Icon name="whatsapp" className="w-6 h-6 text-blanco shrink-0" />
          <div>
            <p className="font-extrabold text-[15px] m-0 mb-0.5">WhatsApp</p>
            <p className="st-label text-[10px] text-humo m-0 mb-2 tracking-normal normal-case font-normal">
              +57 321 788 0682
            </p>
            <span className="st-label bg-accent text-carbon font-black text-[10.5px] px-3 py-1.5 rounded-st inline-block hover:bg-white hover:text-carbon transition-all duration-300">
              Escribir →
            </span>
          </div>
        </a>

        <section className="st-ignite" style={{ animationDelay: "200ms" }}>
          <div className="st-text-shadow flex items-center gap-3.5 mb-4">
            <span className="st-status-line" />
            <h2 className="st-label m-0 text-[12.5px] text-blanco">
              Redes <span className="text-humo normal-case font-normal">— Johnny Celis</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {links.map((item) => (
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
