# BrandPilot — Admin

Internal admin panel.

## Structure

```
apps/admin        Admin panel application
packages/shared   Shared types & utilities (@brandpilot/shared)
```

## Setup

```bash
pnpm install
cp .env.example .env      # fill in real values (API base URL etc.)
pnpm admin:dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm admin:dev` | Run the admin panel in dev mode |
| `pnpm build` | Build all packages |
| `pnpm typecheck` / `pnpm lint` | Static checks |

Requires Node >= 20 and pnpm >= 9. Install from the repo root.
## Connecting to the backend

The app talks to the API through `VITE_API_BASE_URL` (see `src/lib/apiBase.ts`).

**Same origin** (backend reachable at `/api` on this app's own domain — the
nginx setup in the backend repo does this): leave `VITE_API_BASE_URL` empty.
Requests go to `/api/...` and your proxy strips the prefix.

**Separate hosts** (this app and the API on different domains): set

```
VITE_API_BASE_URL=https://api.your-domain.com
```

The API has no global route prefix, so point this at its root — not at
`/api`. Two things must also be true:

1. The backend's `WEB_APP_URL` must equal this app's origin. It drives the
   CORS allowlist (`apps/api/src/main.ts`), and requests are sent with
   credentials, so a wildcard will not work.
2. `VITE_*` values are inlined into the JS bundle at build time, not read at
   runtime — set it before `pnpm build`, and rebuild when it changes.

Local dev needs neither: `pnpm dev` proxies `/api` to `http://localhost:3000`.
Override with `DEV_API_TARGET` if your API runs elsewhere.

### Base path

`vite.config.ts` sets `base: '/admin/'`, so this build expects to be served
under `/admin` (e.g. `https://your-domain.com/admin`). If you ever host it at
the root of its own domain, change that to `'/'` or the assets will 404.
