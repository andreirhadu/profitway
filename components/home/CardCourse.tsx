import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import Button from '../ui/Button'

const WIDTH = Dimensions.get('screen').width

type Props = {
  course: {
    id: string
    title: string
    image: string
  }
  mini?: boolean
}

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const CardCourse = ({ course, mini=true }: Props) => {
  return (
    <View style={[styles.card, { width: mini ? CARD_WIDTH : '100%', marginRight: mini ? 20 : 0 }]}>
      <Image 
        source={{uri: course.image}}
        style={{
          borderRadius: 12,
          width: mini ? CARD_WIDTH - 32 : WIDTH - 40 - 32,
          height: mini ? (CARD_WIDTH - 32)*0.71 : (WIDTH - 40 - 32)*0.71
        }}
      />
      <ThemedText type='subtitle'>{course.title}</ThemedText>

      <Link 
        href={{
          pathname: '/Course',
          params: { ...course }
        }}
        style={{ width: '100%', marginTop: 'auto' }} 
        asChild
      >
        <TouchableOpacity>
          <Button
            text='Continuă cursul'
          />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default CardCourse

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