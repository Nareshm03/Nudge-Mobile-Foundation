# NUDGE Mobile

NUDGE is an Android-first personal memory and reminder platform. This package
is the React Native + Expo foundation for the user-facing mobile application.

## Current scope

This first phase establishes the app shell, design tokens, service boundaries,
Firebase environment shape, and development documentation. It intentionally
does not implement authentication, tasks, recurring rules, notifications,
permissions, device data access, AI, or production data.

## Architecture

```text
app/             Expo Router screens and navigation
components/      Small reusable presentation components
features/        User-facing vertical slices
services/        Firebase and other integration boundaries
domain/          Product language and domain-level types
data/            Repositories and persistence adapters
hooks/           Reusable React hooks
utils/           Pure helpers with no UI concerns
constants/       Shared values such as spacing and color tokens
types/           Cross-cutting TypeScript types
theme/           Design-system exports
config/          Runtime configuration boundaries
platform/        Native device capabilities and permissions
ai/              AI service contracts and adapters
notifications/   Reminder delivery policy and platform adapters
```

Business rules should live in domain or feature modules, not inside screens.
Provider-specific behavior should stay behind services, data, platform, and AI
boundaries so the mobile UI remains easy to evolve.

## Design system foundation

The local theme uses semantic light and dark tokens, Inter typography, a
consistent spacing scale, rounded surfaces, and safe-area-aware screen layout.
Components should consume `useColors()` and shared constants rather than
hardcoding color or spacing values.

## Firebase configuration

Copy `.env.example` to a local environment file and provide the client-safe
`EXPO_PUBLIC_FIREBASE_*` identifiers when Firebase setup begins. The values are
read by `config/environment.ts`; no credentials are committed here. Firebase
Admin credentials and other server secrets must be managed server-side.

## Development

From the repository root:

```bash
pnpm --filter @workspace/nudge-mobile run dev
pnpm --filter @workspace/nudge-mobile run typecheck
```

Use Expo Go or the mobile preview to inspect the app on a device. The app is
configured for portrait orientation and an Android-first workflow.

## Incremental strategy

Each future product area should arrive as a small vertical slice:

1. Define the domain contract and user outcome.
2. Add the data/service boundary needed by that slice.
3. Build the screen and reusable components.
4. Add platform permissions only when a real feature needs them.
5. Verify loading, empty, error, accessibility, and offline behavior.