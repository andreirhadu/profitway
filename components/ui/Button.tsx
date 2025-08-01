import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ text }</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: Colors.dark.tint,
    borderRadius: 8
  },
  text: {
    fontWeight: 'bold',
    color: Colors.dark.text,
    textAlign: 'center'
  }
})