// Scheme sources only. Adsterra Banner and Native creatives rotate delivery
// hosts, so host allowlists go stale. Popunder and Social Bar stay disabled
// in the ad runtime; this policy does not turn those formats on.
const directives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self' https:",
  "frame-ancestors 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob: data:",
  "style-src 'self' 'unsafe-inline' https: blob: data:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: blob: https:",
  "connect-src 'self' https: wss: blob:",
  "frame-src 'self' https: blob: data:",
  "child-src 'self' https: blob: data:",
  "worker-src 'self' blob: https:",
  "media-src 'self' data: blob: https:",
];

export const contentSecurityPolicy = directives.join("; ");
