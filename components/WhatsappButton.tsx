import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native'

const WhatsappButton = () => {
  return (
    <View style={{position: 'absolute', bottom: 90, right: 0 }}>
      <TouchableOpacity
        onPress={() => Linking.openURL("whatsapp://send?phone=+40767866589&text") }
      >
        <View style={styles.chat}>
          <FontAwesome name="whatsapp" size={36} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default WhatsappButton

const styles = StyleSheet.create({
  chat: {
    width: 56,
    height: 56,
    backgroundColor: '#26d366',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 14,
    shadowColor: '#26d366',
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 0},
  },
})