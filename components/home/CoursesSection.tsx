import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import CardCourse from './CardCourse'

const { width: screenWidth } = Dimensions.get('window')
const CARD_WIDTH = screenWidth * 0.8

const CoursesSection = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCourses = async () => {
    setLoading(false)
    
    try {
      const response = await axios.get('https://profitway.ro/wp-json/ldlms/v2/sfwd-courses', {
        headers: {
          'Authorization': `Basic ${btoa(`laurentiurazvantamas@gmail.com:93Yi mXvh DvNa wKuB Wuhb s1LO`)}`,
          'Content-Type': 'application/json'
        }
      })

      const media = response.data.map(async (item: any) => {
        const response = await axios.get(item["_links"]["wp:featuredmedia"][0].href, {
          headers: {
            'Authorization': `Basic ${btoa(`laurentiurazvantamas@gmail.com:93Yi mXvh DvNa wKuB Wuhb s1LO`)}`,
            'Content-Type': 'application/json'
          }
        })
        
        return response.data.guid.rendered
      })

      const fetchedMedia = await Promise.all(media)

      const courses = response.data.map((item: any, index: number) => ({ id: item.id, title: item.title.rendered, image: fetchedMedia[index] }))
      
      setCourses(courses)
    } catch (e: any) {
      console.log(e)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchCourses()
  }, [])
  
  return ( 
    <View style={styles.container}>
      <ThemedText type='title' style={{textAlign: 'center' }}>Cursurile Profitway</ThemedText>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingLeft: 20}}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
        snapToAlignment="start"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        { courses.map((course: any) => (
          <CardCourse
            course={course as any}
            key={course.id}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default CoursesSection

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 40
  }
})