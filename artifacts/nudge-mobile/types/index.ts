export type ThemeMode = 'light' | 'dark' | 'system';

export type LoadableState = 'idle' | 'loading' | 'ready' | 'error';

export type ServiceBoundary =
  | 'firebase'
  | 'notifications'
  | 'platform'
  | 'ai';