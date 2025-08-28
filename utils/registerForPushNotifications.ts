import axios from "axios"
import * as Application from 'expo-application'
import Constants from 'expo-constants'
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
      const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: projectId
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