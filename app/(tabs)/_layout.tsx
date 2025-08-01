import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Acasă',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Programe"
        options={{
          title: 'Programe',
          tabBarIcon: ({ color }) => <Ionicons name="school" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Recenzii"
        options={{
          title: 'Recenzii',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Courses"
        options={{
          title: 'Cursuri',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookshelf" size={28} color={color} />
        }}
      />
      <Tabs.Screen
        name="Press"
        options={{
          title: 'Presă',
          tabBarIcon: ({ color }) => <Ionicons name="newspaper" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
        }}
      />
    </Tabs>
  )
}
