# NUDGE

NUDGE is an Android-first personal memory and reminder platform, with an Expo mobile app foundation in `artifacts/nudge-mobile`.

## Run & Operate

- `pnpm --filter @workspace/nudge-mobile run dev` — run the Expo mobile app
- `pnpm --filter @workspace/api-server run dev` — run the shared API server when needed
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required API env: `DATABASE_URL` — Postgres connection string
- Mobile Firebase env shape: `artifacts/nudge-mobile/.env.example`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Mobile: React Native + Expo Router + TypeScript
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/nudge-mobile` — Android-first Expo mobile application
- `artifacts/nudge-mobile/app` — Expo Router screens
- `artifacts/nudge-mobile/theme` and `constants` — semantic design tokens
- `artifacts/nudge-mobile/config` — runtime configuration boundaries
- `artifacts/nudge-mobile/ROADMAP.md` — staged product development plan
- `lib/api-spec/openapi.yaml` — shared server API contract
- `artifacts/api-server` — shared Express API service

## Architecture decisions

- The first mobile phase is frontend-only; no database or server routes are added until a feature needs them.
- Expo Router owns navigation, while business rules stay outside screens.
- Firebase client configuration is represented through public environment identifiers; server credentials remain managed secrets.
- Native capabilities and permissions stay behind the `platform` boundary and are added only with a real product slice.
- The roadmap is incremental to prevent fake functionality and uncontrolled scope growth.

## Product

NUDGE will help users capture tasks and reminders, build a personal memory
support layer, and receive context-aware assistance. Admin capabilities will
be added separately after the user model and core task flows are stable.

## User preferences

None recorded.

## Gotchas

- Do not add future product behavior to the foundation screen just to make it look complete.
- Do not commit `.env` files or Firebase/server credentials.
- Keep Expo-compatible dependencies minimal; prefer the scaffolded packages.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
