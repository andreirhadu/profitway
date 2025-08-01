import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import Button from '../ui/Button'

const WIDTH = Dimensions.get('screen').width

type Props = {
  webinar: {
    id: string
    title: string
    image: any
  }
  mini?: boolean
}

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const CardWebinar = ({ webinar, mini=false }: Props) => {
  return (
    <View style={[styles.card, { width: mini ? CARD_WIDTH : '100%', marginRight: mini ? 20 : 0 }]}>
      <Image 
        source={webinar.image}
        style={{
          borderRadius: 12,
          width: mini ? CARD_WIDTH - 32 : WIDTH - 40 - 32,
          height: mini ? (CARD_WIDTH - 32)*0.625 : (WIDTH - 40 - 32)*0.625
        }}
      />

      <View style={{ gap: 4 }}>
        <ThemedText type='subtitle' style={{textAlign: 'center'}}>Webinar</ThemedText>
        <ThemedText type='subtitle' style={{textAlign: 'center', color: Colors.dark.tint }}>{webinar.title}</ThemedText>
      </View>

      <Link 
        href={{
          pathname: '/Form',
          params: { source: webinar.id }
        }}
        style={{ width: '100%', marginTop: 'auto' }} 
        asChild
      >
        <TouchableOpacity>
          <Button
            text='Mă înscriu'
          />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default CardWebinar

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16
  }
})