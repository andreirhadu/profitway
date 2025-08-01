import PressCard from '@/components/PressCard'
import { ThemedText } from '@/components/ThemedText'
import { press } from '@/constants/programs'
import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native'

const images = [
  require('@/assets/images/logos/11.png'),
  require('@/assets/images/logos/2.png'),
  require('@/assets/images/logos/1.png'),
  require('@/assets/images/logos/4.png'),
  require('@/assets/images/logos/5.png'),
  require('@/assets/images/logos/6.png'),
  require('@/assets/images/logos/8.png'),
  require('@/assets/images/logos/7.png'),
  require('@/assets/images/logos/9.png'),
  require('@/assets/images/logos/10.png'),
  require('@/assets/images/logos/12.png'),
  require('@/assets/images/logos/13.png')
]

const WIDTH = Dimensions.get('screen').width

const Press = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{textAlign: 'center' }}>
        Apariții în presă
      </ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center', paddingBottom: 8 }}>
        Ce spune presa despre noi
      </ThemedText>
      
      <FlatList
        data={images}
        scrollEnabled={false}
        renderItem={(data) => (
          <Image 
            source={data.item}
            style={styles.logo}
          />
        )}
        numColumns={3}
      />

      {
        press.map((item) => (
          <PressCard 
            data={item}
            key={item.link}
          />
        ))
      }

    </ ScrollView>
  )
}

export default Press

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 120,
    paddingBottom: 80,
    gap: 20
  },
  logo: {
    width: (WIDTH - 40)/3,
    height: (WIDTH - 40)/3*0.5,
    marginTop: 12
  }
})