import { Colors } from '@/constants/Colors'
import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  text: string
}

const Quote = ({ text }: Props) => {
  return (
    <View style={{backgroundColor: Colors.dark.card, padding: 16, borderRadius: 16, borderLeftWidth: 4, borderColor: Colors.dark.tint}}>
      <Text style={{fontStyle: 'italic', color: Colors.dark.text}}>{ text }</Text>
    </View>
  )
}

export default Quote