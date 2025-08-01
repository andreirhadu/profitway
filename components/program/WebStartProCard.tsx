import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Foundation from '@expo/vector-icons/Foundation'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from '../ThemedText'

type Props = {
  title: string
  content?: string
  icon: string
}

const WebStartProCard = ({ title, content, icon }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {
          icon === 'play' &&
          <AntDesign name="playcircleo" size={26} color="white" />
        }
        { icon === 'documents' &&
          <Ionicons name="documents-outline" size={26} color="white" />
        }
        { icon === 'stats' &&
          <MaterialIcons name="query-stats" size={26} color="white" />
        }
        { icon === 'work' &&
          <FontAwesome6 name="person-snowboarding" size={26} color="white" />
        }
        { icon === 'support' &&
          <MaterialIcons name="support-agent" size={26} color="white" />
        }
        { icon === 'pathway' &&
          <FontAwesome6 name="road-circle-check" size={26} color="white" />
        }
        { icon === 'globe' &&
          <Entypo name="globe" size={26} color="white" />
        }
        { icon === 'building' &&
          <FontAwesome name="building" size={26} color="white" />
        }
        { icon === 'rocket' &&
          <Entypo name="rocket" size={26} color="white" />
        }
        {
          icon === 'hand-dollar' &&
          <FontAwesome6 name="hand-holding-dollar" size={26} color="white" />
        }
        {
          icon === 'handshake' &&
          <FontAwesome6 name="handshake-angle" size={26} color="white" />
        }
        {
          icon === 'medal' &&
          <FontAwesome6 name="medal" size={26} color="white" />
        }
        {
          icon === 'book-open' &&
          <FontAwesome6 name="book-open" size={26} color="white" />
        }
        {
          icon === 'layers' &&
          <Ionicons name="layers" size={26} color="white" />
        }
        {
          icon === 'briefcase' &&
          <Entypo name="briefcase" size={26} color="white" />
        }
        {
          icon === 'calendar' &&
          <Ionicons name="calendar" size={26} color="white" />
        }
        {
          icon === 'documents-fill' &&
          <Ionicons name="documents" size={26} color="white" />
        }
        {
          icon === 'users' &&
          <FontAwesome5 name="users" size={26} color="white" />
        }
        {
          icon === 'home' &&
          <Entypo name="home" size={26} color="white" />
        }
        {
          icon === 'pro' &&
          <MaterialCommunityIcons name="professional-hexagon" size={26} color="white" />
        }
        {
          icon === 'business' &&
          <Foundation name="torso-business" size={28} color="white" />
        }
        {
          icon === 'star' &&
          <AntDesign name="star" size={26} color="white" />
        }
      </View>
      <ThemedText type='defaultSemiBold' style={{fontSize: 18, maxWidth: 240}}>{ title }</ThemedText>
      { content && <ThemedText style={{fontSize: 18}}>{ content }</ThemedText> }
    </View>
  )
}

export default WebStartProCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.8,
    borderColor: Colors.dark.tint,
    borderRadius: 8,
    padding: 24,
    gap: 16,
    alignItems: 'center'
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: Colors.dark.tint,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
})