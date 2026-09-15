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

The Firebase client foundation lives in `services/firebase/` and is initialized
once from the app root. Copy `.env.example` to `.env.local` and provide the
following client-safe values from Firebase project settings:

- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
- `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `EXPO_PUBLIC_FIREBASE_APP_ID`

Expo exposes `EXPO_PUBLIC_*` values in the mobile bundle, so these values must
never be treated as secrets. They identify the Firebase client project; they
do not grant authorization by themselves. Firebase Admin credentials and
server-only secrets must remain in managed server-side secrets.

If the values are missing during development, NUDGE logs a clear
`configuration-missing` warning and keeps the foundation screen available.
Firebase service consumers should use `getFirebaseApp()` and handle its typed
initialization error rather than assuming configuration exists.

Planned Firebase services are Authentication, Cloud Firestore, Cloud Storage,
Cloud Messaging, and Cloud Functions. Only client app initialization is
included in this phase. Do not add permissive Firestore rules such as
`allow read, write: if true;`. Security Rules must be designed together with
the authorization model before Firestore is used.

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