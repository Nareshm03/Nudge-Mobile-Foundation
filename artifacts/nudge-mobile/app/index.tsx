import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { AppLogo } from '@/components/AppLogo';
import { FOUNDATION_AREAS } from '@/domain';
import { spacing } from '@/constants/spacing';

export default function FoundationScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screen,
        {
          backgroundColor: colors.background,
          paddingTop: insets.top + spacing.xl,
          paddingBottom: insets.bottom + spacing.lg,
        },
      ]}
    >
      <View style={styles.content}>
        <AppLogo />
        <Text style={[styles.eyebrow, { color: colors.primary }]}>NUDGE</Text>
        <Text style={[styles.title, { color: colors.foreground }]}>
          Remember what matters.
        </Text>
        <Text style={[styles.description, { color: colors.mutedForeground }]}>
          A calm personal memory space is taking shape. This first layer keeps
          the mobile shell, design language, and service boundaries ready for
          the product features ahead.
        </Text>

        <View
          style={[
            styles.statusCard,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.cardForeground }]}>
            Foundation ready
          </Text>
          <Text style={[styles.cardDescription, { color: colors.mutedForeground }]}>
            The next product layers can be added without moving the app’s core
            boundaries.
          </Text>

          <View style={styles.areaList}>
            {FOUNDATION_AREAS.map((area) => (
              <View key={area.label} style={styles.areaRow}>
                <View style={[styles.statusDot, { backgroundColor: area.color }]} />
                <Text style={[styles.areaLabel, { color: colors.foreground }]}>
                  {area.label}
                </Text>
                <Text style={[styles.areaState, { color: colors.mutedForeground }]}>
                  {area.state}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Text style={[styles.footer, { color: colors.mutedForeground }]}>
        Built for clarity, one layer at a time.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
  },
  content: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
  },
  eyebrow: {
    marginTop: spacing.xl,
    fontFamily: 'Inter_700Bold',
    fontSize: 13,
    letterSpacing: 2.4,
  },
  title: {
    marginTop: spacing.sm,
    fontFamily: 'Inter_700Bold',
    fontSize: 38,
    lineHeight: 44,
    letterSpacing: -1,
  },
  description: {
    marginTop: spacing.md,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 25,
  },
  statusCard: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderRadius: 24,
  },
  cardTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
  },
  cardDescription: {
    marginTop: spacing.xs,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 21,
  },
  areaList: {
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  areaRow: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    marginRight: spacing.sm,
    borderRadius: 4,
  },
  areaLabel: {
    flex: 1,
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
  },
  areaState: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },
  footer: {
    alignSelf: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },
});