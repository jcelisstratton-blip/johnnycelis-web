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

      <div className="w-full max-w-md mx-auto">
        <article className="st-ignite st-glass rounded-[4px] overflow-hidden">
          {/* Hero: foto difuminada en alto contraste como atmósfera */}
          <div className="relative h-36 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/johnny/avatar.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl grayscale contrast-150 brightness-110 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon/20 to-grafito/95" />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,246,244,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,246,244,0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
              }}
            />
            <div className="st-label absolute top-4 left-4 flex items-center gap-2 text-humo text-[10.5px]">
              <span className="st-led" />
              Antioquia, CO
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/stratton-isotipo-mono-blanco.svg"
              alt="Stratt-On"
              className="absolute top-3.5 right-4 w-6 h-6 opacity-80"
            />
          </div>

          {/* Identidad */}
          <div className="relative px-6 pb-6 -mt-16 text-center">
            <div className="relative inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/johnny/avatar.jpg"
                alt="Johnny Celis"
                width={112}
                height={112}
                className="w-28 h-28 rounded-st object-cover border border-white/25 ring-4 ring-grafito shadow-[0_14px_36px_rgba(0,0,0,0.6)]"
              />
            </div>

            <h1 className="font-black uppercase text-[28px] sm:text-[32px] leading-[1.02] m-0 mt-4">Johnny Celis</h1>
            <span className="st-status-line mt-3" />

            <ul className="flex flex-wrap justify-center gap-1.5 list-none p-0 m-0 mt-4">
              {roles.map((role) => (
                <li
                  key={role}
                  className="st-label text-[10px] text-humo border border-white/15 bg-carbon/40 rounded-st px-2.5 py-1.5"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Redes: módulo agrupado con divisores hairline */}
          <nav aria-label="Redes de Johnny Celis" className="border-t border-white/10">
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {links.map((item, i) => {
                const primary = item.icon === "whatsapp";
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} ${item.sub}`}
                    title={`${item.label} · ${item.sub}`}
                    style={{ animationDelay: `${180 + i * 70}ms` }}
                    className={
                      "st-ignite group flex items-center justify-center aspect-[4/3] no-underline transition-colors duration-200 " +
                      (primary
                        ? "bg-rojo text-carbon hover:bg-rojo-profundo"
                        : "bg-grafito/90 text-blanco hover:bg-carbon")
                    }
                  >
                    <Icon
                      name={item.icon}
                      className={
                        "w-8 h-8 transition-transform duration-200 group-hover:-translate-y-0.5 " +
                        (primary ? "text-carbon" : "text-blanco group-hover:text-rojo")
                      }
                    />
                  </a>
                );
              })}
            </div>
          </nav>
        </article>
      </div>
    </main>
  );
}
