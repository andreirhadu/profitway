import { webinars } from '@/constants/programs'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import CardWebinar from './CardWebinar'

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const WebinarsSection = () => {
  return ( 
    <View style={styles.container}>
      <ThemedText type='title' style={{textAlign: 'center' }}>
        Înscrie-te la viitoarele Webinarii ProfitWay gratuite
      </ThemedText>

      <ScrollView
        horizontal
        contentContainerStyle={{paddingLeft: 20}}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
        snapToAlignment="start"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        { webinars.map((webinar) => (
          <CardWebinar
            webinar={webinar as any}
            key={webinar.id}
            mini
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default WebinarsSection

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 40
  }
})