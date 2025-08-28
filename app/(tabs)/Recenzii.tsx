import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

const ITEMS_PER_PAGE = 4

const Recenzii = () => {
  const [page, setPage] = useState(0)
  const [reviews, setReviews] = useState<{ _id: string, id: string }[]>([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef<ScrollView>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("https://profitway-dashboard.vercel.app/api/reviews")
        
        setReviews(res.data.reviews || [])
      } catch (err) {
        console.log("Eroare la fetch reviews:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE)
  const startIndex = page * ITEMS_PER_PAGE
  const currentVideos = reviews.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const changePage = (newPage: number) => {
    setPage(newPage)
    scrollRef.current?.scrollTo({ y: 0, animated: true })
  }

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{ textAlign: 'center' }}>
        Recenzii clienți
      </ThemedText>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.dark.tint} style={{ marginTop: 40 }} />
      ) : currentVideos.length > 0 ? (
        currentVideos.map((review) => (
          <View key={review._id} style={styles.videoWrapper}>
            <YoutubePlayer
              height={220}
              play={false}
              videoId={review.id}
              viewContainerStyle={{ backgroundColor: Colors.dark.card }}
            />
          </View>
        ))
      ) : (
        <ThemedText style={{ textAlign: 'center' }}>
          Nu există recenzii disponibile.
        </ThemedText>
      )}

      {!loading && reviews.length > 0 && (
        <View style={styles.pagination}>
          <TouchableOpacity
            onPress={() => changePage(Math.max(page - 1, 0))}
            disabled={page === 0}
          >
            <Ionicons
              name="chevron-back-circle"
              size={40}
              color={page !== 0 ? Colors.dark.tint : "#333"}
            />
          </TouchableOpacity>

          <ThemedText>{`${page + 1} / ${totalPages}`}</ThemedText>

          <TouchableOpacity
            onPress={() => changePage(Math.min(page + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
          >
            <Ionicons
              name="chevron-forward-circle"
              size={40}
              color={page === totalPages - 1 ? "#333" : Colors.dark.tint}
            />
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  )
}

export default Recenzii

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 120,
    paddingBottom: 140,
    gap: 40
  },
  videoWrapper: {
    height: 220,
    backgroundColor: Colors.dark.card,
    borderRadius: 12,
    overflow: "hidden"
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
})
