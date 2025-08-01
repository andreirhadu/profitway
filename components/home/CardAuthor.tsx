import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import Button from '../ui/Button'

const WIDTH = Dimensions.get('screen').width

const imageMap = {
  'vlad': require('@/assets/images/about/Vlad-fondator.jpg'),
  'bogdan': require('@/assets/images/about/4-1.jpg'),
  'marius': require('@/assets/images/about/2.jpg'),
  'cristian': require('@/assets/images/programe/cristi.jpeg'),
} as const

type ImageKey = keyof typeof imageMap

type Props = {
  author: {
    id: string
    name: string
    title: string
    hasDetails: boolean
    image: ImageKey
  }
  mini?: boolean
}

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const CardAuthor = ({ author, mini=false }: Props) => {
  return (
    <View style={[styles.card, { width: mini ? CARD_WIDTH : '100%', marginRight: mini ? 20 : 0 }]}>
      <Image 
        source={imageMap[author.image]}
        style={{
          borderRadius: 12,
          width: mini ? CARD_WIDTH - 32 : WIDTH - 40 - 32,
          height: mini ? (CARD_WIDTH - 32)*1.25 : (WIDTH - 40 - 32)*1.25
        }}
      />

      <View style={{ gap: 4 }}>
        <ThemedText type='subtitle' style={{textAlign: 'center'}}>{author.name}</ThemedText>
        <ThemedText type='subtitle' style={{textAlign: 'center', color: Colors.dark.tint }}>{author.title}</ThemedText>
      </View>

      {
        author.hasDetails &&
        <Link 
          href={{
            pathname: '/Author',
            params: { id: author.id }
          }}
          style={{ width: '100%', marginTop: 'auto' }} 
          asChild
        >
          <TouchableOpacity>
            <Button
              text='Vezi mai mult'
            />
          </TouchableOpacity>
        </Link>
      }
    </View>
  )
}

export default CardAuthor

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.dark.card,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16
  }
})