import { Colors } from '@/constants/Colors'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HEADER_HEIGHT = 600

const Header = () => {
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={require('@/assets/images/home/pexels-thirdman-7653971.jpg')}
        style={styles.image}
      />
      <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill} />
      <View style={styles.textOverlay}>
        <Image
          source={require('@/assets/images/logo-freeway.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Singura platformă din România care <Text style={{color: Colors.dark.tint}}>transformă ideile în afaceri reale.</Text></Text>
        <Text style={styles.subHeader}>
          Alături de antreprenori cu experiență, vei primi ghidare 1-la-1
          pentru a-ți construi pas cu pas propria afacere, chiar dacă pornești de la zero.
        </Text>
        <Text style={[styles.subHeader, { fontWeight: 'bold' }]}>
          Pentru că atunci când ai sprijinul potrivit, nimic nu e imposibil.
        </Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  image: {
    height: HEADER_HEIGHT,
    width: HEADER_HEIGHT * 1.51,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -(500 * 1.51) / 2 }],
  },
  textOverlay: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subHeader: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  logo: {
    width: 256,
    height: 256,
    marginBottom: 0
  }
})