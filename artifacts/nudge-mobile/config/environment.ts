export type FirebaseClientConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
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
  apiKey: readPublicEnv('EXPO_PUBLIC_FIREBASE_API_KEY'),
  authDomain: readPublicEnv('EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId: readPublicEnv('EXPO_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket: readPublicEnv('EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: readPublicEnv('EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId: readPublicEnv('EXPO_PUBLIC_FIREBASE_APP_ID'),
};

export const hasFirebaseClientConfig = Object.values(firebaseClientConfig).every(
  (value) => value.length > 0,
);