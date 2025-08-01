import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from '../ThemedText'

type Props = {
  text: string
  content?: string
  type?: 'check' | 'x'
}

const CheckLine = ({ text, type='check', content }: Props) => {
  return (
    <View style={styles.container}>
      { type === 'check' ?
        <Feather name="check" size={28} color="green" /> :
        <AntDesign name="close" size={24} color="red" />
      }
      <View style={{flex: 1, width: '100%'}}>
        <ThemedText style={{flexShrink: 1}} textAlign='auto' type='defaultSemiBold'>{text}</ThemedText>
        { content &&  
          <ThemedText textAlign='auto' style={{paddingTop: 4, flexShrink: 1}}>{content}</ThemedText>
        }
      </View>
    </View>
  )
}

export default CheckLine

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
  }
})