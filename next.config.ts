import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; connect-src 'self' https://www.highperformanceformat.com https://pl30923530.effectivecpmnetwork.com https://pl30923531.effectivecpmnetwork.com https://pl30923534.effectivecpmnetwork.com; font-src 'self'; form-action 'self'; frame-ancestors 'none'; frame-src https://www.highperformanceformat.com https://pl30923530.effectivecpmnetwork.com https://pl30923531.effectivecpmnetwork.com https://pl30923534.effectivecpmnetwork.com; img-src 'self' data: https://www.highperformanceformat.com https://pl30923530.effectivecpmnetwork.com https://pl30923531.effectivecpmnetwork.com https://pl30923534.effectivecpmnetwork.com; object-src 'none'; script-src 'self' 'unsafe-inline' https://www.highperformanceformat.com https://pl30923530.effectivecpmnetwork.com https://pl30923531.effectivecpmnetwork.com https://pl30923534.effectivecpmnetwork.com; style-src 'self' 'unsafe-inline'; upgrade-insecure-requests" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
