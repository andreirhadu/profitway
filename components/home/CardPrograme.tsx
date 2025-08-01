import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import Button from '../ui/Button'

const imageMap = {
  'marketing-masterplan': require('@/assets/images/programe/marketing-masterplan.png'),
  'emag-top-seller': require('@/assets/images/programe/cristi-2.jpeg'),
  'webstart-pro': require('@/assets/images/programe/webpro.png'),
  'sales-academy': require('@/assets/images/programe/sales-academy.png'),
  'educational-online': require('@/assets/images/programe/educational-online.png')
} as const

type ImageKey = keyof typeof imageMap

type Props = {
  programe: {
    id: string
    title: string
    text1: string
    text2?: string
    button: string
    image: ImageKey
  }
  mini?: boolean
}

const { width: WIDTH } = Dimensions.get('window')
const CARD_WIDTH = WIDTH * 0.8

const CardPrograme = ({ programe, mini=true }: Props) => {
  return (
    <LinearGradient
      colors={['#342415', '#8d5d38', '#342415']}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={[styles.card, { width: mini ? CARD_WIDTH : WIDTH - 40}]}
    >
      <Image 
        source={imageMap[programe.image]}
        style={{ width: mini ? CARD_WIDTH-40 : WIDTH - 80, height: mini ? (CARD_WIDTH-40)*3/4 : (WIDTH - 80)*3/4, borderRadius: 8 }}
      />
      <ThemedText style={styles.title} type='subtitle'>{programe.title}</ThemedText>
      <View style={{gap: 4}}>
        <ThemedText style={{textAlign: 'center', fontWeight: '500'}}>{programe.text1}</ThemedText>
        { programe.text2 && <ThemedText style={{textAlign: 'center', fontWeight: '500'}}>{programe.text2}</ThemedText>}
      </View>
      <Link 
        href={{
          pathname: '/Program',
          params: { id: programe.id },
        }}
        style={{ width: '100%', marginTop: 'auto' }} 
        asChild
      >
        <TouchableOpacity>
            <Button 
              text={programe.button}
            />
        </TouchableOpacity>
      </Link>
    </LinearGradient>
  )
}

export default CardPrograme

const styles = StyleSheet.create({
  card: {
    marginRight: 20,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    borderRadius: 16
  },
  title: {
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
})