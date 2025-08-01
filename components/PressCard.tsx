import { Image } from 'expo-image'
import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Dimensions, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ThemedText } from './ThemedText'
import Button from './ui/Button'

type Props = {
  data: any
}

const WIDTH = Dimensions.get('screen').width

const PressCard = ({ data }: Props) => {
  return (
    <View style={{paddingTop: 40, gap: 20}}>
      <TouchableWithoutFeedback
        onPress={() => WebBrowser.openBrowserAsync(data.link)}
      >
        <Image 
          source={data.image}
          style={{ width: WIDTH - 40, height: (WIDTH - 40)*0.65, borderRadius: 8 }}
        />
      </TouchableWithoutFeedback>
      <ThemedText type='subtitle'>{ data.title }</ThemedText>

      <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync(data.link)}
          style={{ width: '100%' }} 
        >
          <Button
            text='Acceseaza articol'
          />
        </TouchableOpacity>
    </View>
  )
}

export default PressCard