import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버 코드가 없는 앱 — 켜기: NEXT_STATIC=1 npx next build → out/ (학교망이 vercel.app 을 막아 Cloudflare Pages 에 올린다)
  ...(process.env.NEXT_STATIC === "1" ? { output: "export" as const, images: { unoptimized: true } } : {}),
};

export default nextConfig;
