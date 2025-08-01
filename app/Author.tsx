import Marius from '@/components/authors/Marius'
import Vlad from '@/components/authors/Vlad'
import { authors } from '@/constants/programs'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { View } from 'react-native'

const Author = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const author = authors.find((author) => author.id === id )
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: author?.name
    })
  }, [navigation, author])

  return (
    <View>
      {
        id === 'marius' &&
        <Marius />
      }
      {
        id === 'vlad' &&
        <Vlad />
      }
    </View>
  )
}

export default Author