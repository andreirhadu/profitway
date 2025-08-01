import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from '../ThemedText'

type Props = {
  step: {
    title: string
    description: string
    icon: string
  }
}

const Step = ({ step }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.bullet}>
        { step.icon === 'conversation' &&
          <MaterialCommunityIcons name="message-text-outline" size={22} color="white" />
        }
        { step.icon === 'graduation' &&
          <SimpleLineIcons name="graduation" size={22} color="white" />
        }
        { step.icon === 'book' &&
          <AntDesign name="book" size={22} color="white" />
        }
        { step.icon === 'rocket' &&
          <AntDesign name="rocket1" size={22} color="white" />
        }
      </View>
      <View style={{ flex: 1, gap: 4 }}>
        <ThemedText style={{ flexShrink: 1, fontSize: 18, fontWeight: 'bold' }}>{step.title}</ThemedText>
        <ThemedText style={{flexShrink: 1}}>{step.description}</ThemedText>
      </View>
    </View>
  )
}

export default Step

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16
  },
  bullet: {
    width: 52,
    height: 52,
    borderRadius: 100,
    backgroundColor: Colors.dark.tint,
    alignItems: 'center',
    justifyContent: 'center'
  }
})