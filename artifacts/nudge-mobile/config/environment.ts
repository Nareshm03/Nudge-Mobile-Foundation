export type FirebaseClientConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export type FirebaseClientConfigKey = keyof FirebaseClientConfig;

export const FIREBASE_ENVIRONMENT_KEYS: Record<
  FirebaseClientConfigKey,
  string
> = {
  apiKey: 'EXPO_PUBLIC_FIREBASE_API_KEY',
  authDomain: 'EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN',
  projectId: 'EXPO_PUBLIC_FIREBASE_PROJECT_ID',
  storageBucket: 'EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'EXPO_PUBLIC_FIREBASE_APP_ID',
};

function readPublicEnv(name: string): string {
  return process.env[name] ?? '';
}

/**
 * Client-safe Firebase configuration boundary.
 *
 * Values are intentionally read from EXPO_PUBLIC_* variables and are not
 * checked into source control. Firebase Admin credentials and other server
 * secrets must stay in managed server-side secrets when backend work begins.
 */
export const firebaseClientConfig: FirebaseClientConfig = {
  apiKey: readPublicEnv(FIREBASE_ENVIRONMENT_KEYS.apiKey),
  authDomain: readPublicEnv(FIREBASE_ENVIRONMENT_KEYS.authDomain),
  projectId: readPublicEnv(FIREBASE_ENVIRONMENT_KEYS.projectId),
  storageBucket: readPublicEnv(FIREBASE_ENVIRONMENT_KEYS.storageBucket),
  messagingSenderId: readPublicEnv(FIREBASE_ENVIRONMENT_KEYS.messagingSenderId),
  appId: readPublicEnv(FIREBASE_ENVIRONMENT_KEYS.appId),
};

export const missingFirebaseConfigKeys = (
  Object.keys(FIREBASE_ENVIRONMENT_KEYS) as FirebaseClientConfigKey[]
).filter((key) => firebaseClientConfig[key].length === 0);

export const hasFirebaseClientConfig = missingFirebaseConfigKeys.length === 0;

export function getFirebaseConfigurationMessage(): string {
  if (hasFirebaseClientConfig) {
    return 'Firebase client configuration is present.';
  }

  const missing = missingFirebaseConfigKeys
    .map((key) => FIREBASE_ENVIRONMENT_KEYS[key])
    .join(', ');

  return `Firebase client configuration is incomplete. Add: ${missing}`;
}