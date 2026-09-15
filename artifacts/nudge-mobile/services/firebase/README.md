# Firebase service boundaries

Firebase is initialized once through `app.ts`. It reads the client-safe Expo
environment variables from `config/environment.ts`, reuses an existing app
when one is already initialized, and returns a typed initialization state.

Missing local configuration is reported as a development warning and a
`missing-config` state instead of causing a cryptic startup crash. Invalid
configured values produce an explicit initialization error. A future service
may call `getFirebaseApp()` when it is ready to handle that error.

The Auth, Firestore, Storage, and Messaging files currently export type-only
factories. They establish dependency boundaries without implementing
authentication, repositories, uploads, or push notifications.