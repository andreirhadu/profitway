import React from 'react'
import { Text } from 'react-native'

const Bold = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text style={{fontWeight: '700'}}>
      { children }
    </Text>
  )
}

export default Bold