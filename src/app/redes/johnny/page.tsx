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

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hola Johnny, te escribo desde tu página de redes"
)}`;

const links: LinkItem[] = [
  { label: "WhatsApp", sub: "+57 321 788 0682", href: whatsappHref, icon: "whatsapp" },
  { label: "TikTok", sub: "@Jcelis9", href: "https://www.tiktok.com/@Jcelis9", icon: "tiktok" },
  { label: "Instagram", sub: "@johnnycelis.AI", href: "https://www.instagram.com/johnnycelis.AI", icon: "instagram" },
  { label: "LinkedIn", sub: "Personal", href: "https://www.linkedin.com/in/joscero/", icon: "linkedin" },
  { label: "X", sub: "@Joscero", href: "https://x.com/Joscero", icon: "x" },
  { label: "Facebook", sub: "Fan Page", href: "https://www.facebook.com/Johnnycelis.ia/", icon: "facebook" },
];

const roles = ["Automatización", "IA", "Marketing Digital", "Estrategia"];

export default function RedesJohnnyPage() {
  return (
    <main className="min-h-screen bg-carbon text-blanco px-[5%] py-8 md:py-10 flex items-center">
      <RedesBackground />

      <div className="w-full max-w-xl mx-auto">
        <header className="st-ignite st-glass px-5 py-5 mb-5 rounded-[4px]">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/johnny/avatar.jpg"
                alt="Johnny Celis"
                width={48}
                height={48}
                className="w-12 h-12 rounded-st object-cover border border-white/15"
              />
              <h1 className="font-black text-xl md:text-2xl m-0 leading-none">Johnny Celis</h1>
            </div>
            <div className="st-label flex items-center gap-2 text-humo text-[11px]">
              <span className="st-led" />
              Antioquia, CO
            </div>
          </div>
          <p className="st-label text-[11px] text-humo m-0 mt-3 leading-relaxed">{roles.join(" · ")}</p>
        </header>

        <nav
          aria-label="Redes de Johnny Celis"
          className="st-ignite grid grid-cols-3 gap-2.5"
          style={{ animationDelay: "120ms" }}
        >
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} ${item.sub}`}
              title={`${item.label} · ${item.sub}`}
              className="st-glass st-glass-hover group aspect-square flex items-center justify-center rounded-[4px] no-underline text-blanco transition-transform duration-200 hover:-translate-y-1"
            >
              <Icon name={item.icon} className="w-9 h-9 text-blanco transition-colors duration-200 group-hover:text-accent" />
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
