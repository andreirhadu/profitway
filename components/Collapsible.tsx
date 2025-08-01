import { PropsWithChildren } from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'

export function Collapsible({ children, title, isOpen, onPress }: PropsWithChildren & { title: string, isOpen: boolean, onPress: (event: GestureResponderEvent) => void }) {

  return (
    <ThemedView style={{borderRadius: 8, backgroundColor: Colors.dark.tint}}>
      <TouchableOpacity
        style={styles.heading}
        onPress={onPress}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color='white'
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && 
        <ThemedView style={styles.content}>
          <LinearGradient
            colors={['#311e14', '#643e21']}
            style={styles.background}
          />
          {children}
        </ThemedView>
      }
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 16,
    borderRadius: 8
  },
  content: {
    padding: 0,
    borderRadius: 8
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
});
