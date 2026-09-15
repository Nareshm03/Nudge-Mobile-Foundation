import type { FirebaseApp } from 'firebase/app';
import type { Messaging } from 'firebase/messaging';

/**
 * Service boundary only. Native push messaging requires a later platform
 * decision and is intentionally not initialized in this phase.
 */
export type MessagingFactory = (app: FirebaseApp) => Messaging;