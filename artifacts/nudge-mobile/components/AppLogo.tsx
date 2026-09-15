import { Image, StyleSheet, View } from 'react-native';
import { useColors } from '@/hooks/useColors';

export function AppLogo() {
  const colors = useColors();

  return (
    <View style={[styles.frame, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Image
        accessibilityLabel="NUDGE app mark"
        source={require('../assets/images/icon.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 22,
    overflow: 'hidden',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 18,
  },
});