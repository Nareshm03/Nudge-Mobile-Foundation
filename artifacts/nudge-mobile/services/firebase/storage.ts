import type { FirebaseApp } from 'firebase/app';
import type { FirebaseStorage } from 'firebase/storage';

/**
 * Service boundary only. File uploads and storage rules are intentionally not
 * implemented until product data and authorization requirements exist.
 */
export type StorageFactory = (app: FirebaseApp) => FirebaseStorage;