import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

const WIDTH = Dimensions.get('screen').width

const videoIds = [
  "25LeY_fPjD0",
  "7cEqydRjIbU",
  "9F2exXrDWGc",
  "CvPVGzWC7ew",
  "EqyDJy1wysQ",
  "8o0Uq1IemVE",
  "C8LCfB66BIA",
  // "_MEe8it7_dU",
  // "tU8Amj2vJNI",
  // "JfYo5KlMk_4",
  // "--bqSMe6lsI",
  // "5x_sjas_1pA",
  // "yCy64-BEutM",
  // "7R_KAWUueq4",
  // "Z9dGlckSZ7k",
  // "wS7NC652OdA",
  // "U_xaNm5CSaM",
  // "YoIye4yk4JY",
  // "mG_tTg1Yy5k",
  // "TELSt9-6Gk4",
  // "DsTDHeBvyFI",
  // "aqGDO9gB8m4",
  // "J7CzDeV9QJ4",
  // "wMt5SoVoNJo",
  // "En5z8ishkZ4",
  // "PRKz2NdEdVA",
  // "C6-rmL5fY64",
  // "Lq_-BE-uhm0",
  // "oMHrgt-xyaY"
]

const Recenzii = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{textAlign: 'center' }}>
        Recenzii clienți
      </ThemedText>
      { videoIds.map((id) => (
        <YoutubePlayer
          key={id}
          height={220}
          play={false}
          videoId={id}
        />
      ))}
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
  logo: {
    width: (WIDTH - 40)/3,
    height: (WIDTH - 40)/3*0.5,
    marginTop: 12
  }
})