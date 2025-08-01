import axios from "axios"
import * as Application from 'expo-application'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { Platform } from "react-native"

export async function registerForPushNotificationsAsync() {
  let token: any

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('myNotificationChannel', {
      name: 'A channel is needed for the permissions prompt to appear',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      // alert('Failed to get push token for push notification!')
      return
    }
    
    try {
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: '4ec84cf4-ccb1-4268-af67-d2cdd0a697a6'
        })
      ).data
      
      let deviceId: string | null = null
      if (Platform.OS === 'android') {
        deviceId = Application.getAndroidId()
      } else {
        deviceId = await Application.getIosIdForVendorAsync()
      }

      await axios.post(`https://profitway-dashboard.vercel.app/api/notifications/register`, {
        token,
        deviceId
      })
    } catch (e: any) {
      alert(e.message ? e.message : `${e}`)
      token = `${e}`
    }
  } else {
    alert('Must use physical device for Push Notifications')
  }

  return token
}