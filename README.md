# Hospital Horror Game Wiki

Independent beginner-first guide for **Hospital Horror Game!** on Roblox.

- Production domain: `https://hospitalhorrorgame.wiki`
- Roblox Place ID: `113046448920073`
- Roblox Universe ID: `10610155567`
- Formal host: Vercel project `zhangtongxin888s-projects/hospital-horror-game`
- Current Vercel production alias: `https://hospital-horror-game-zhangtongxin888s-projects.vercel.app`
- Cloudflare fallback: Worker `hospital-horror-game-wiki` at `https://hospital-horror-game-wiki.zhangtongxin12.workers.dev`

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run build
npm run deploy:cf:dry-run
```

## Production deployment

The production deployment is managed by Vercel from this repository. `npm run deploy:cf` updates the independent Cloudflare fallback.

Custom-domain DNS and Search Console are completed separately after an explicit browser and DNS release. The registrar nameservers remain `launch1.spaceship.net` and `launch2.spaceship.net`; do not replace them as part of the launch.

Before changing DNS, record the complete existing `@` and `www` web records, including type, value and TTL. Add the formal domain to the Vercel project, then apply only the exact web records Vercel requests. If the cutover fails, restore that captured `@`/`www` record set exactly and leave all unrelated mail and verification records untouched.
