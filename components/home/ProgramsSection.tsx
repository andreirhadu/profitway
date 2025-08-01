import { Colors } from '@/constants/Colors'
import { programs } from '@/constants/programs'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import CardPrograme from './CardPrograme'

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const ProgramsSection = () => {
  return ( 
    <View style={styles.container}>
      <ThemedText type='title' style={{textAlign: 'center' }}>
        Programe <Text style={{ color: Colors.dark.tint }}>ProfitWay Academy</Text>
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
        { programs.map((programe) => (
          <CardPrograme
            programe={programe as any}
            key={programe.id}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default ProgramsSection

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 40
  }
})