import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import Bold from '../ui/Bold'
import Button from '../ui/Button'
import CheckLine from './CheckLine'
import WebStartProCard from './WebStartProCard'

const WIDTH = Dimensions.get('window').width

const items = [
  { text: "Poți convinge, fără presiune.", icon: "medal" },
  { text: "Poți închide oferte valoroase.", icon: "handshake" },
  { text: "Poți lucra de oriunde.", icon: "globe" },
  { text: "Poți vinde produse, servicii sau… propria ta idee.", icon: "hand-dollar" }
]

const items2 = [
  "Înveți vânzări reale, fără bullshit",
  "Lucrezi 100% remote, fără birou, fără șef în spate",
  "Poți câștiga până la 5.000-10.000€/lună, în funcție de implicare",
  "Ai acces la o metodă completă: de la primele cuvinte până la închidere",
  "Poți folosi acest skill pentru a vinde orice vrei tu în viitor"
]

const items3 = [
  "1. Vrei mai mult decât un job obișnuit",
  "2. Înțelegi că vânzările sunt cheia oricărei afaceri, cariere sau idei",
  "3. Ești gata să înveți, să aplici și să fii plătit în funcție de merit",
  "4. Vrei un viitor în care efortul tău e recunoscut și bine răsplătit alături de ProfitWay"
]

const SalesAcademy = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{paddingTop: 40}}>Vrei să înveți vânzări la nivel profesionist și să ai o carieră plătită pe rezultate?</ThemedText>
      <ThemedText type='subtitle'>Aplică la programul de Vânzări</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Profit Way Academy</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>de până la 5.000-10.000€/lună.</ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Ce este acest program?</ThemedText>
      <ThemedText>Este mai mult decât un simplu curs de vânzări,</ThemedText>
      <ThemedText type='defaultSemiBold'>este un program intensiv, aplicat și orientat spre performanță.</ThemedText>
      <ThemedText>Vei învăța sistemul testat de vânzare pe care l-am folosit personal pentru a genera</ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>200.000 euro în primele 4 luni</ThemedText>
      <ThemedText>din programe educaționale proprii.</ThemedText>

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*0.77,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/25.jpg')}
      />

      <ThemedText type='title' style={{paddingTop: 40}}>De ce vânzările sunt super-puterea care nu trebuie să-ți lipsească?</ThemedText>
      <ThemedText>În lumea reală, <Bold>cei care știu să vândă controlează banii,</Bold> carierele și direcția lor în viață.</ThemedText>
      <ThemedText>Poți fi expert, creativ sau muncitor. Dar dacă nu știi să vinzi, idei, produse, servicii sau pe tine însuți, <Bold>vei fi mereu în umbra altora.</Bold></ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>Adevărul?</ThemedText>
      <ThemedText >Vânzările nu sunt doar un skill, <Bold>ci o formă de libertate.</Bold></ThemedText>
      <ThemedText>În acest program te învăț exact sistemul meu, cel care a generat <Bold>sute de mii de euro în vânzări,</Bold> pentru propriile mele cursuri și servicii.</ThemedText>
      <ThemedText type='defaultSemiBold'>Nu vorbim din teorie. Vorbim din practică, cu rezultate dovedite.</ThemedText>

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/vlad-holiday.jpeg')}
      />

      <ThemedText type='title'>Vânzătorii de top câștigă mai mult</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>decât antreprenorii</ThemedText>
      <ThemedText>Ai întâlnit oameni care conduc firme și abia își plătesc taxele. Și ai întâlnit vânzători care câștigă mii de euro pe lună, fără să aibă grijile unui antreprenor.</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Asta pentru că vânzătorii aduc banii.</ThemedText>
      <ThemedText type='subtitle'>Și în orice companie, cei care aduc banii sunt cei mai valoroși.</ThemedText>

      <ThemedText type='title' style={{paddingTop: 40}}>Când stăpânești vânzările:</ThemedText>
      {
        items.map((item, index: number) => (
          <WebStartProCard 
            title={item.text}
            icon={item.icon}
            key={index}
          />
        ))
      }

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 40}}></View>

      <ThemedText type='subtitle'>Vânzările nu sunt despre a forța. Sunt despre a înțelege, a asculta și a ghida omul spre soluția potrivită.</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Și asta te învăț eu, pas cu pas!</ThemedText>
      <ThemedText type='title' style={{paddingBottom: 20}}>De ce să te înscrii?</ThemedText>
      {
        items2.map((item, index: number) => (
          <CheckLine 
            text={item}
            key={index}
            type={'check'}
          />
        ))
      }

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/porsche.jpeg')}
      />

      <ThemedText type='title' style={{paddingVertical: 20}}>Aplică dacă:</ThemedText>
      {
        items3.map((item, index: number) => (
          <CheckLine 
            text={item}
            key={index}
            type={'check'}
          />
        ))
      }

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 40}}></View>

      <ThemedText type='title'>Aplică acum la programul de vânzări creat de</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Vlad Ciuchie</ThemedText>
      <ThemedText style={{fontSize: 18}}>Este mai mult decât un curs… <Bold>Este o rampă de lansare către o carieră bine plătită.</Bold></ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>Ulterior finalizării cursului ai șansă să lucrezi alaturi de noi, un job în vânzări performant, care iți asigura intre 5000 și 10.000€ pe lună în funcție de performante</ThemedText>
      <ThemedText type='subtitle'>Completează formularul și hai să vedem dacă e pentru tine.</ThemedText>

      <TouchableOpacity
        onPress={() => router.push('/Form?source=sales-academy')}
        style={{ width: '100%', marginTop: 'auto', paddingTop: 20 }} 
      >
          <Button
            text='Înscrie-te acum'
          />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default SalesAcademy

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  },
})