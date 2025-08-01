import { Colors } from '@/constants/Colors'
import { authors } from '@/constants/programs'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import CardAuthor from './CardAuthor'

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const AuthorsSection = () => {
  return ( 
    <View style={styles.container}>
      <ThemedText type='title' style={{textAlign: 'center' }}>
        Autorii programelor  <Text style={{ color: Colors.dark.tint }}>ProfitWay Academy</Text>
      </ThemedText>

      <ThemedText>La ProfitWay înveți de la cei mai buni, antreprenori și mentori români care cred în potențialul tău și se dedică 100% transformării tale.</ThemedText>

      <ScrollView
        horizontal
        contentContainerStyle={{paddingLeft: 20}}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
        snapToAlignment="start"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        { authors.map((author) => (
          <CardAuthor
            author={author as any}
            key={author.id}
            mini
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default AuthorsSection

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 40
  }
})