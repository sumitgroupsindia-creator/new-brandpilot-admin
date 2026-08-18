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
