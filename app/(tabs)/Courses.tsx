import CardCourse from '@/components/home/CardCourse'
import WebinarsSection from '@/components/home/WebinarsSection'
import { ThemedText } from '@/components/ThemedText'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'

const Courses = () => {
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
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{textAlign: 'center', paddingBottom: 12 }}>
        Cursuri Profitway
      </ThemedText>

      <View style={{paddingHorizontal: 20, gap: 32}}>
        { !loading ?
          <>
            { courses.map((course: any) => (
              <CardCourse
                course={course as any}
                key={course.id}
                mini={false}
              />
            ))}
          </> :
          <View style={{height: 500, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' />
          </View>
        }
      </View>

      <WebinarsSection />
    </ScrollView>
  )
}

export default Courses

const styles = StyleSheet.create({
  container: {
    paddingBottom: 120,
    gap: 32,
    marginTop: 100
  }
})