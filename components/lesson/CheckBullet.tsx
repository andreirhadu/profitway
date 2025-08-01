import { Colors } from '@/constants/Colors'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'
import { View } from 'react-native'

type Props = {
  checked: boolean
}

const CheckBullet = ({ checked }: Props) => {
  return (
    <View style={{
      width: 30,
      height: 30,
      borderWidth: 4,
      backgroundColor: checked ? Colors.dark.tint : 'white',
      borderColor: checked ? Colors.dark.tint :'#e2e7ee',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Entypo name="check" size={20} color="white" />
    </View>
  )
}

export default CheckBullet