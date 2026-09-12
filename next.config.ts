import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera .next/standalone com apenas os arquivos necessários em runtime —
  // usado pelo Dockerfile para uma imagem final mínima (mesmo padrão do
  // projeto DiarioDigital, que também roda no Dokploy).
  output: "standalone",
};

export default nextConfig;
