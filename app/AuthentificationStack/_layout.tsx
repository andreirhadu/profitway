import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: 'Înapoi',
        headerTintColor: '#fff', // 🎯 back arrow and title tint
      }}
    >
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout