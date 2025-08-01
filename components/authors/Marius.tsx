import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { ThemedText } from '../ThemedText'
import Bold from '../ui/Bold'

const WIDTH = Dimensions.get('screen').width

const Marius = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{paddingTop: 40}}>Marius Paraschiv</ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>Web Developer & WordPress Specialist</ThemedText>
      <ThemedText type='subtitle' style={{fontSize: 24, fontStyle: 'italic'}}>„Un website bine construit deschide oportunități.”</ThemedText>
      <Image 
        style={{
          width: 200,
          height: 200*0.5,
          alignSelf: 'center'
        }}
        source={require('@/assets/images/authors/Semnatura-Marius-alb.png')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Cine sunt eu?</ThemedText>
      <ThemedText>Salut! Sunt Marius și pasiunea mea pentru programare a început pe când aveam doar 14 ani. Încă din liceu, am fost fascinat de modul în care pot construi ceva din nimic, doar cu ajutorul codului. Am participat la olimpiade de informatică și am urmat cursuri de programare web, însă la acea vreme nu realizam cât de vastă și plină de oportunități este această lume.</ThemedText>
      <ThemedText>După o perioadă în care am explorat diverse joburi, de la operator call-center la fotograf de evenimente, am simțit că îmi lipsește ceva. Așa că, în primul an de facultate, am decis să revin la prima mea pasiune. Am aplicat la mai multe internship-uri și, în cele din urmă, am fost acceptat ca Front-End Developer. A fost o experiență intensă, în care am învățat temeinic HTML, CSS și JavaScript, sub îndrumarea unui mentor care mi-a arătat cât de importante sunt bazele în acest domeniu.</ThemedText>
      <ThemedText>Am absolvit Facultatea de Informatică Economică și Masterul în același domeniu la Universitatea Româno-Americană. De-a lungul anilor, am evoluat către rolul de FullStack Developer, lucrând cu tehnologii precum Vue.js, React, Node.js și PHP. Totodată, am descoperit cât de eficient și versatil este WordPress-ul, realizând peste 200 de proiecte, de la teme construite de la zero până la pagini create cu buildere moderne precum Elementor.</ThemedText>

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.5,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/Marius.jpg')}
      />

      <ThemedText type='title'>Ce îmi place cel mai mult la ceea ce fac?</ThemedText>
      <ThemedText><Bold>Faptul că fiecare problemă are o soluție.</Bold> Uneori e evidentă, alteori trebuie să o creez de la zero, dar întotdeauna există o cale de rezolvare, și exact asta încerc să le transmit și celor cu care lucrez sau pe care îi ghidez.</ThemedText>
      <ThemedText>Prezența online nu mai este un moft, ci o necesitate. În ziua de azi, un website bine construit poate face diferența dintre a atrage sau a pierde clienți valoroși. Am văzut de-a lungul anilor cât de mult contează să fii vizibil, să oferi informațiile corecte și să construiești încredere prin ceea ce prezinți în mediul digital.</ThemedText>
      <ThemedText>De aceea, cred că orice profesionist sau afacere care își dorește să crească are nevoie de un website solid, clar și bine structurat, nu doar pentru a exista online, ci pentru a converti vizitatorii în clienți reali.</ThemedText>
      <Image 
        style={{
          width: 200,
          height: 200*0.5,
          alignSelf: 'center'
        }}
        source={require('@/assets/images/authors/Semnatura-Marius-alb.png')}
      />

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.5,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/Marius3.jpg')}
      />
    </ScrollView>
  )
}

export default Marius

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  }
})