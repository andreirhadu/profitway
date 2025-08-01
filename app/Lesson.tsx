import Button from '@/components/ui/Button'
import { api_key } from '@/constants/config'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleProp, TextStyle, TouchableOpacity, View } from 'react-native'
import RenderHtml from 'react-native-render-html'
import Toast from 'react-native-toast-message'

const WIDTH = Dimensions.get('screen').width

const Lesson = () => {
  const navigation = useNavigation()
  const { user, token } = useAuth()
  const { id, title, courseId } = useLocalSearchParams< any >()
  const [source, setSource] = useState< string | null >(null)
  const [loadingFinished, setLoadingFinished] = useState(false)
  const [loading, setLoading] = useState(true)
  const numberOfRows = [4730, 4732, 4726, 4728].includes(Number(id)) ? 4 : 3

  useEffect(() => {
      navigation.setOptions({
        headerTitle: title
      })
    }, [navigation, title])

  const fetchLesson = async () => {
    setLoading(true)

    try {
      const response = await axios.get(`https://profitway.ro/wp-json/ldlms/v2/sfwd-lessons/${id}`, {
        headers: {
          'Authorization': `Basic ${api_key}`,
          'Content-Type': 'application/json'
        }
      })

      setSource(response.data.content.rendered)
    } catch (e: any) {
      console.log(e)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchLesson()
  }, [])

  const markAsFinished = async () => {
    setLoadingFinished(true)
  
    try {
      const response = await axios.post(
        'https://profitway.ro/wp-json/custom-learndash/v1/mark-complete',
        {
          user_id: user.id,
          post_id: id,
          course_id: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json',
          },
        }
      )
  
      if (response.data?.success) {
        Toast.show({
          type: 'success',
          text1: 'Finalizat!',
          text2: 'Lecția a fost marcată ca terminată.',
        })
        router.back()
      } else {
        throw new Error(response.data?.message || 'Eroare necunoscută.')
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Ceva nu a funcționat.',
        text2: 'Încearcă din nou.',
      })
      console.log('Mark as finished error:', error)
    } finally {
      setLoadingFinished(false)
    }
  }

  const tagsStyles = {
    body: {
      backgroundColor: '#000',
      color: '#f0f0f0',
      fontFamily: 'Poppins',
      lineHeight: 24,
      padding: 20,
    },
    p: {
      color: '#f0f0f0',
      marginBottom: 16,
    },
    ul: {
      paddingLeft: 20,
      marginBottom: 16,
    },
    li: {
      marginBottom: 8,
      color: '#f0f0f0',
    },
    a: {
      color: '#a87141',
      textDecorationLine: 'none',
      fontWeight: '500',
    },
    table: {
      width: '100%',
      marginTop: 10,
      marginBottom: 20,
      flex: 1
    },
    tr: { flexDirection: 'row', width: WIDTH - 40},
    th: {
      backgroundColor: '#2a2a2a',
      borderColor: '#333333',
      borderWidth: 1,
      padding: 4,
      textAlign: 'left',
      color: '#f0f0f0',
      width: (WIDTH-40)/numberOfRows
    },
    td: {
      borderColor: '#333333',
      borderWidth: 1,
      padding: 4,
      textAlign: 'left',
      color: '#f0f0f0',
      width: (WIDTH-40)/numberOfRows
    },
    blockquote: {
      borderLeftWidth: 4,
      borderLeftColor: '#a87141',
      paddingLeft: 16,
      fontStyle: 'italic',
      backgroundColor: '#1a1a1a',
      borderRadius: 6,
      color: '#bbbbbb',
      marginVertical: 16,
    },
  }  

  const classesStyles = {
    'main-title': {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      paddingTop: 20
    } as StyleProp<TextStyle>,
    'sub-title': {
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      paddingBottom: 20,
      opacity: 0.70
    } as StyleProp<TextStyle>,
    'icon': {
      display: 'none'
    },
  }

  return (
    <View style={{height: 800}}>
      { loading ?
        <View style={{height: 800, justifyContent: 'space-between', alignItems: 'center'}}>
          <ActivityIndicator size='small' />
        </View> :
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <RenderHtml
            contentWidth={WIDTH-40}
            source={{html: source || ''}}
            tagsStyles={tagsStyles as any}
            classesStyles={classesStyles as any}
          />
    
          { !loadingFinished &&
            <TouchableOpacity
              onPress={markAsFinished}
              style={{ width: '100%', marginBottom: 40, paddingHorizontal: 20 }} 
            >
                <Button
                  text='Marchează ca finalizat'
                />
            </TouchableOpacity>
          }
        </ScrollView>
      }
    </View>
  )
}

export default Lesson