import type { Auth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';

/**
 * Service boundary only. Authentication flows are intentionally not
 * implemented until the user and admin authorization model is approved.
 */
export type FirebaseAuthFactory = (app: FirebaseApp) => Auth;