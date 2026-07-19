export default function AccesosPage() {
  const links = [
    { label: "Panel Central", href: "/panelcentral", desc: "Estrategia H2-2026, XP y progreso" },
    { label: "Manual de marca (kit social)", href: "/manual-marca/index.html", desc: "Assets y guía visual para redes" },
    { label: "Manual de marca (.md descargable)", href: "/manual-marca/STRATTON-BRAND.md", desc: "Clic derecho → Guardar enlace como..." },
    { label: "Manual corporativo", href: "/manual-corporativo/index.html", desc: "Guía completa de marca" },
    { label: "Manual corporativo (.md descargable)", href: "/manual-corporativo/manual-corporativo.md", desc: "Clic derecho → Guardar enlace como..." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0E0F11", color: "#F5F6F4", fontFamily: "system-ui, sans-serif", padding: "48px 24px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, textTransform: "uppercase" }}>
          Accesos rápidos
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "16px 18px", background: "#1C1E22", border: "1px solid rgba(245,246,244,0.10)", borderRadius: 4, textDecoration: "none", color: "#F5F6F4" }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{l.label}</div>
              <div style={{ fontSize: 13, color: "#9BA1A6", marginTop: 4 }}>{l.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
