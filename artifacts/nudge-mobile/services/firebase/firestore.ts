import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';

/**
 * Service boundary only. Repositories and Firestore reads/writes are
 * intentionally not implemented in the foundation phase.
 */
export type FirestoreFactory = (app: FirebaseApp) => Firestore;