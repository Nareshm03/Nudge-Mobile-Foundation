import { colors } from '@/theme';

export type UserRole = 'user' | 'admin';

export type FoundationArea = {
  label: string;
  state: 'ready';
  color: string;
};

export const FOUNDATION_AREAS: FoundationArea[] = [
  { label: 'Mobile shell', state: 'ready', color: colors.light.primary },
  { label: 'Design tokens', state: 'ready', color: colors.light.accent },
  { label: 'Service boundaries', state: 'ready', color: colors.light.secondaryForeground },
];