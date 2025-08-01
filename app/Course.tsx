import CheckBullet from '@/components/lesson/CheckBullet'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import CircularProgress from '@/components/ui/CircularProgress'
import { api_key } from '@/constants/config'
import { useAuth } from '@/context/AuthContext'
import Octicons from '@expo/vector-icons/Octicons'
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import { Image } from 'expo-image'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

const WIDTH = Dimensions.get('window').width

const Course = () => {
  const { user } = useAuth()
  const isFocused = useIsFocused()
  const { id, title, image } = useLocalSearchParams< any >()
  const [lessons, setLessons] = useState([])
  const [modules, setModules] = useState([])
  const [stepsCompleted, setStepsCompleted] = useState(0)
  const [totalSteps, setTotalSteps] = useState(0)
  const [lastStepCompleted, setLastStepCompleted] = useState(0)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title
    })
  }, [navigation, title])

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(false)
      
      try {
        const response = await axios.get(`https://profitway.ro/wp-json/ldlms/v2/sfwd-courses/${id}/steps`, {
          headers: {
            'Authorization': `Basic ${api_key}`,
            'Content-Type': 'application/json'
          }
        })
  
        const modules = response.data.sections.map((section: any) => ({ order: section.order, title: section.post_title, steps: section.steps }))
        setModules(modules)
  
        const response1 = await axios.get(`https://profitway.ro/wp-json/ldlms/v2/sfwd-lessons?course=${id}`, {
          headers: {
            'Authorization': `Basic ${api_key}`,
            'Content-Type': 'application/json'
          }
        })
  
        const lessons = response1.data.map((lesson: any) => ({ id: lesson.id, title: lesson.title.rendered }))
  
        setLessons(lessons)
  
        if (user) {
          const response2 = await axios.get(`https://profitway.ro/wp-json/ldlms/v2/users/${user.id}/course-progress/${id}`, {
            headers: {
              'Authorization': `Basic ${api_key}`,
              'Content-Type': 'application/json'
            }
          })
  
          if ( response2.data.length !== 0 ) {
            setLastStepCompleted(response2.data[0]?.last_step)
            setStepsCompleted(response2.data[0]?.steps_completed)
            setTotalSteps(lessons.length)
            setIsEnrolled(true)
          } else {
            setIsEnrolled(false)
          }
          
        }
      } catch (e: any) {
        console.log(e)
      }
  
      setLoading(false)
    }

    fetchCourse()
  }, [user, isFocused])

  const enrollUser = async () => {
    if (!user) {
      router.push('/AuthentificationStack/Login')
      return
    }
  
    const userId = user.id
    const courseId = id
  
    try {
      const response = await axios.post(
        `https://profitway.ro/wp-json/ldlms/v2/sfwd-courses/${courseId}/users`,
        {
          user_id: [userId],
        },
        {
          headers: {
            Authorization: `Basic ${api_key}`,
            'Content-Type': 'application/json',
          },
        }
      )
  
      if (response.status === 200 || response.status === 201) {
        Toast.show({
          type: 'success',
          text1: 'Înscriere reușită',
          text2: 'Utilizatorul a fost înscris cu succes.',
        })
      } else {
        Toast.show({
          type: 'error',
          text1: 'Eroare la înscriere',
          text2: 'A apărut o problemă neașteptată.',
        })
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'Eroare necunoscută la înscriere.'
  
      Toast.show({
        type: 'error',
        text1: 'Ceva nu a mers bine!',
        text2: message,
      })
  
      console.error('Enroll error:', message)
    }
  }

  return (
    <>
      { loading ?
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator 
            size='small'
          />
        </View> :
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Image 
            style={styles.image}
            source={{uri: image}}
          />
    
          { Number(id) !== 5179 &&
            <>
              { isEnrolled ?
                <CircularProgress 
                  completedSteps={stepsCompleted}
                  totalSteps={totalSteps}
                /> :
                <TouchableOpacity
                  onPress={enrollUser}
                  style={{ width: '100%', marginTop: 'auto', paddingBottom: 20 }} 
                >
                  <Button
                    text='Înscrie-te'
                  />
                </TouchableOpacity>
              }
            </>
          }
          { Number(id) === 5179 &&
            <TouchableOpacity
              onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/wp-content/uploads/2025/06/CARTE-WORD_MENTORAT_MARKETING.pdf-1.pdf')}
              style={{ width: '100%', marginTop: 'auto', paddingBottom: 20 }} 
            >
              <Button
                text='Deschide cartea "Mentorat Marketing"'
              />
            </TouchableOpacity>
          }
    
          <View style={{gap: 40}}>
            {
              modules.sort((a: any, b: any) => a.order - b.order ).map((module: any, index: number) => (
                <View key={module.order}>
                  <ThemedText type='subtitle' textAlign='auto'>{module.title}</ThemedText>
                  <View style={{gap: 20, paddingTop: 20}}>
                    { lessons.filter((lesson: any) => module.steps.includes(lesson.id) ).map((lesson: any, index1: number) => (
                      <TouchableOpacity 
                        onPress={() => {
                          if (isEnrolled) {
                            router.push(`/Lesson?title=${lesson.title}&id=${lesson.id}`)
                          } else {
                            Alert.alert("Trebuie să te înscri la acest curs pentru a accesa lecția.")
                          }
                        }}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1}} 
                        key={lesson.id}
                      >
                        <View style={{flexShrink: 1, flexDirection: 'row', alignItems: 'center', gap: 12}}>
                          <CheckBullet 
                            checked={ index*11 + index1 < stepsCompleted }
                          />
                          <ThemedText 
                            type='defaultSemiBold' textAlign='auto' style={{fontSize: 18, maxWidth: WIDTH - 120}}
                          >
                            {lesson.title}
                          </ThemedText>
                        </View>
                        <Octicons name="chevron-right" size={24} color="white" />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
      }
    </>
  )
}

export default Course

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    gap: 20
  },
  image: {
    borderRadius: 4,
    width: WIDTH - 40,
    height: (WIDTH - 40)*0.71,
    marginVertical: 20
  }
})