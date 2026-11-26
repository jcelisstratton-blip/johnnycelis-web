import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // johnnycelis.online servía el mismo sitio con 200 y Google lo elegía como
  // canónica en lugar de www.stratt-on.com. Se redirige de forma permanente.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?johnnycelis\\.online" }],
        destination: "https://www.stratt-on.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
