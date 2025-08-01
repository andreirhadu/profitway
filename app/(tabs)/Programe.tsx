import CardPrograme from '@/components/home/CardPrograme'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { programs } from '@/constants/programs'
import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

const Programe = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{textAlign: 'center', paddingBottom: 12 }}>
        Programe <Text style={{ color: Colors.dark.tint }}>ProfitWay Academy</Text>
      </ThemedText>

      { programs.map((programe) => (
        <CardPrograme
          programe={programe as any}
          key={programe.id}
          mini={false}
        />
      ))}

    </ScrollView>
  )
}

export default Programe

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 120,
    gap: 32,
    marginTop: 80
  }
})