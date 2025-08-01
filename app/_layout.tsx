import { Colors } from '@/constants/Colors'
import { AuthProvider } from '@/context/AuthContext'
import { useColorScheme } from '@/hooks/useColorScheme'
import { registerForPushNotificationsAsync } from '@/utils/registerForPushNotifications'
import AntDesign from '@expo/vector-icons/AntDesign'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as Notifications from 'expo-notifications'
import { router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as Updates from 'expo-updates'
import { useEffect, useRef, useState } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import 'react-native-reanimated'
import Toast from 'react-native-toast-message'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true
  }),
})

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const [expoPushToken, setExpoPushToken] = useState('')
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([])
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  )
  const notificationListener = useRef<Notifications.EventSubscription>(null)
  const responseListener = useRef<Notifications.EventSubscription>(null)
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token))

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []))
    }
    
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      notificationListener.current &&
        notificationListener.current.remove()
      responseListener.current &&
        responseListener.current.remove()
    }
  }, [])


  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync()

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync()
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`)
    }
  }

  useEffect(() => {
    onFetchUpdateAsync()
  }, [])

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerBackTitle: 'Înapoi',
            headerTintColor: '#fff', // 🎯 back arrow and title tint
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name='Program' />
          <Stack.Screen name='Author' />
          <Stack.Screen 
            name='About'
            options={{ headerTitle: 'Despre noi'}} 
          />
          <Stack.Screen 
            name='Form'
            options={{ headerTitle: 'Completează formularul'}} 
          />
          <Stack.Screen 
            name='PersonalInformations'
            options={{ headerTitle: 'Informații personale'}} 
          />
          <Stack.Screen 
            name='ChangePassword'
            options={{ headerTitle: 'Schimbă parola'}} 
          />
          <Stack.Screen 
            name='AuthentificationStack'
            options={{ 
              headerStyle: {backgroundColor: 'transparent'}, 
              headerShadowVisible: false,
              title: '', 
              presentation: 'fullScreenModal',
              headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => router.back() } 
                >
                  <AntDesign
                    name='close' 
                    size={24} 
                    color={Colors.dark.text} 
                  />
              </TouchableOpacity>
            ),
            }} 
          />
        </Stack>
      </AuthProvider>
      <StatusBar style="auto" />
      <Toast />
    </ThemeProvider>
  );
}
