import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'

const WIDTH = Dimensions.get('window').width 

const OurMissionSection = () => {
  return (
    <View style={{ gap: 20, paddingHorizontal: 20 }}>
      <ThemedText 
        style={{color: Colors.dark.tint, textAlign: 'center' }} 
        type="title"
      >
        Misiunea noastră
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{ textAlign: 'center'}}>
          Un mesaj pentru tine, cel care citești aceste rânduri:
        </ThemedText>
        <ThemedText style={{ textAlign: 'center'}}>
          Poate că te afli într-un moment al vieții în care simți că ai atins un plafon. Munca ta zilnică îți oferă stabilitate, dar nu și împlinire. Te întrebi dacă acesta este tot drumul tău sau dacă există și altceva.
        </ThemedText>
        <ThemedText style={{ textAlign: 'center'}}>
          La ProfitWay Academy, credem că răspunsul este da. Da, există mai mult. Da, poți să-ți depășești limitele. Da, poți să-ți transformi viața.
        </ThemedText>
        <ThemedText style={{fontWeight: 'bold', textAlign: 'center' }}>
          Educația este cheia transformării
        </ThemedText>
      </ThemedView>
      <Image 
        source={require('@/assets/images/home/45.jpg')}
        style={{width: WIDTH-40, height: WIDTH*0.56, borderRadius: 8, paddingTop: 20, paddingBottom: 40 }}
      />
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{ textAlign: 'center'}}>
          Într-o lume în continuă schimbare, singura constantă este capacitatea ta de a învăța și de a te adapta. Nu există soluții magice sau scurtături către succes. Există doar alegeri conștiente și pași mici făcuți cu perseverență.
        </ThemedText>
        <ThemedText style={{ textAlign: 'center'}}>
          Weekendurile pot deveni aliatul tău. În loc să le dedici activităților care nu aduc valoare pe termen lung, folosește-le pentru a învăța, a te dezvolta și a construi viitorul pe care îl meriți.
        </ThemedText>
      </ThemedView>
      <Link 
        href={'/About'} 
        style={{width: '100%'}} 
        asChild
      >
        <TouchableOpacity>
          <Button 
            text='Vezi angajamentele noastre față de tine'
          />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default OurMissionSection

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    flexDirection: 'column',
    alignItems: 'center'
  }
})