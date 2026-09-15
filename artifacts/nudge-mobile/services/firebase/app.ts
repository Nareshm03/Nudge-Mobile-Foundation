import {
  FirebaseApp,
  FirebaseOptions,
  getApp,
  getApps,
  initializeApp,
} from 'firebase/app';
import {
  firebaseClientConfig,
  getFirebaseConfigurationMessage,
  hasFirebaseClientConfig,
  missingFirebaseConfigKeys,
} from '@/config/environment';
import type { FirebaseClientConfigKey } from '@/config/environment';

export type FirebaseInitializationStatus =
  | 'initialized'
  | 'missing-config'
  | 'error';

export type FirebaseInitialization = {
  app: FirebaseApp | null;
  status: FirebaseInitializationStatus;
  error: FirebaseInitializationError | null;
  missingKeys: readonly FirebaseClientConfigKey[];
};

export class FirebaseInitializationError extends Error {
  readonly code: 'configuration-missing' | 'initialization-failed';
  readonly missingKeys: readonly FirebaseClientConfigKey[];

  constructor(
    message: string,
    code: 'configuration-missing' | 'initialization-failed',
    missingKeys: readonly FirebaseClientConfigKey[] = [],
  ) {
    super(message);
    this.name = 'FirebaseInitializationError';
    this.code = code;
    this.missingKeys = missingKeys;
  }
}

let initialization: FirebaseInitialization | null = null;

function createFirebaseApp(options: FirebaseOptions): FirebaseApp {
  return getApps().length > 0 ? getApp() : initializeApp(options);
}

/**
 * Initializes Firebase once and returns a typed state instead of crashing the
 * app when local development has not been configured yet.
 */
export function initializeFirebase(): FirebaseInitialization {
  if (initialization) {
    return initialization;
  }

  if (!hasFirebaseClientConfig) {
    const error = new FirebaseInitializationError(
      getFirebaseConfigurationMessage(),
      'configuration-missing',
      missingFirebaseConfigKeys,
    );

    if (__DEV__) {
      console.warn(`[Firebase] ${error.message}`);
    }

    initialization = {
      app: null,
      status: 'missing-config',
      error,
      missingKeys: missingFirebaseConfigKeys,
    };
    return initialization;
  }

  try {
    const app = createFirebaseApp(firebaseClientConfig);
    initialization = {
      app,
      status: 'initialized',
      error: null,
      missingKeys: [],
    };
  } catch (cause) {
    const detail = cause instanceof Error ? cause.message : String(cause);
    const error = new FirebaseInitializationError(
      `Firebase initialization failed: ${detail}`,
      'initialization-failed',
    );

    console.error(`[Firebase] ${error.message}`);
    initialization = {
      app: null,
      status: 'error',
      error,
      missingKeys: [],
    };
  }

  return initialization;
}

/**
 * Returns the initialized app for a future Firebase service. Callers should
 * handle FirebaseInitializationError rather than assuming configuration exists.
 */
export function getFirebaseApp(): FirebaseApp {
  const state = initializeFirebase();

  if (!state.app) {
    throw (
      state.error ??
      new FirebaseInitializationError(
        'Firebase app is unavailable.',
        'initialization-failed',
      )
    );
  }

  return state.app;
}

export const firebaseInitialization = initializeFirebase();