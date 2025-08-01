import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { ThemedText } from '../ThemedText'
import Bold from '../ui/Bold'

const WIDTH = Dimensions.get('screen').width

const Vlad = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{paddingTop: 40}}>Vlad Ciuchie</ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>Fondator Profit Way Academy</ThemedText>
      <ThemedText type='subtitle' style={{fontSize: 24}}>Antreprenor în Vânzări, Marketing și Finanțe</ThemedText>
      <Image 
        style={{
          width: 200,
          height: 200*0.5,
          alignSelf: 'center'
        }}
        source={require('@/assets/images/authors/Semnatura-Vlad-alb-.png')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Cine sunt eu?</ThemedText>
      <ThemedText>Salut! Sunt Vlad Ciuchie și dacă ești aici, e foarte probabil să cauți o cale către independență financiară, claritate profesională sau un restart real în carieră.</ThemedText>
      <ThemedText type='defaultSemiBold'>Știu exact cum e, pentru că am fost și eu acolo.</ThemedText>
      <ThemedText>Am terminat Facultatea de Drept în București, dar la 22 de ani nu aveam o direcție clară și nici sprijin financiar. Nu provin dintr-o familie cu bani, părinții mei sunt oameni simpli, care au muncit toată viața în sistemul bugetar. Aveam doar dorința de a reuși.</ThemedText>
      <ThemedText>Am început ca agent de vânzări într-o companie multinațională, cu un salariu minim pe economie: 1.900 de lei. Fără perspective clare, fără conexiuni, dar cu o decizie fermă: <Bold>să devin cea mai bună versiune a mea.</Bold></ThemedText>
      <ThemedText>Așa am descoperit vânzările, și am înțeles că sunt baza oricărei afaceri de succes.</ThemedText>
      <ThemedText>În mai puțin de 3 ani, am ajuns director de filială, cu încasări lunare de peste 20.000 euro din comisioane.</ThemedText>
      <ThemedText type='defaultSemiBold'>Însă n-am vrut să mă opresc acolo…</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/vlad-holiday.jpeg')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Ce a urmat? Am riscat!</ThemedText>
      <ThemedText>Deși toată lumea îmi spunea că sunt nebun să renunț la un <Bold>„job de vis”, am ales drumul antreprenoriatului.</Bold></ThemedText>
      <ThemedText type='defaultSemiBold'>Am riscat totul, dar am câștigat libertate.</ThemedText>
      <ThemedText>Am construit afaceri în jurul a ceea ce stă la baza oricărei reușite: marketing, vânzări și educație practică. Am vândut programe educaționale în România și în afara țării, ajutând mii de oameni să-și descopere abilitățile și să le monetizeze.</ThemedText>
      <ThemedText>Așa s-a născut Profit Way Academy, pentru toți cei care știu că pot mai mult, dar nu știu de unde să înceapă.</ThemedText>
      <ThemedText>Academia e locul în care înveți să-ți construiești propriul business, chiar dacă nu ai experiență, bani sau o direcție clară.</ThemedText>
      <ThemedText>Este sistemul pe care mi-ar fi plăcut să-l am și eu la început.</ThemedText>
      <ThemedText>Dacă și tu vrei să-ți deschizi o afacere, dar simți că e un haos total, e în regulă. <Bold>Ai ajuns în locul potrivit.</Bold></ThemedText>
      <ThemedText>Te invit să faci primul pas spre profitul tău. Calea ta începe aici.</ThemedText>
      <Image 
        style={{
          width: 200,
          height: 200*0.5,
          alignSelf: 'center'
        }}
        source={require('@/assets/images/authors/Semnatura-Vlad-alb-.png')}
      />

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
        }}
        source={require('@/assets/images/authors/WhatsApp-Image-2024-08-27-at-16.05.48.jpeg')}
      />

    </ScrollView>
  )
}

export default Vlad

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  }
})