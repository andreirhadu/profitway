import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'
import Bold from '../ui/Bold'
import Button from '../ui/Button'
import CheckLine from './CheckLine'
import WebStartProCard from './WebStartProCard'

const items = [
  {
    text: "Au acumulat cunoștințe și experiență într-un domeniu",
    icon: "book-open"
  },
  {
    text: "Vor să construiască un activ digital pe termen lung",
    icon: "layers"
  },
  {
    text: "Își doresc independență financiară și profesională",
    icon: "briefcase"
  }
]

const items2 = [
  {
    title: "Identificăm valoarea din experiența ta",
    content: "Chiar dacă acum ți se pare „normal”, ai cunoștințe pentru care alții ar plăti."
  },
  {
    title: "Validăm ideea ta",
    content: "Ca să fii sigur că oamenii sunt dispuși să plătească pentru soluția ta."
  },
  {
    title: "Construim cursul împreună",
    content: "Structurăm lecțiile, materialele și livrarea lor (video, PDF etc)."
  },
  {
    title: "Stabilim brandul personal și mesajul tău unic",
  },
  {
    title: "Creăm platforma de prezentare și vânzare",
  },
  {
    title: "Facem lansarea și învățăm cum să aducem constant noi cursanți",
  }
]

const items3 = [
  "Cum să identifici o temă de curs profitabilă, în funcție de expertiza ta",
  "Cum să structurezi conținutul într-un format atractiv și ușor de urmărit",
  "Cum să construiești un brand personal care inspiră încredere",
  "Cum să setezi platforma de vânzare, fără cunoștințe tehnice",
  "Cum să faci promovare eficientă, cu sau fără bugete mari",
  "Cum să scalezi rezultatele după primele vânzări"
]

const items4 = [
  { text: "7 module video, preînregistrate", icon: "play" },
  { text: "Template-uri și fișiere editabile pentru fiecare etapă", icon: "documents-fill" },
  { text: "Exemple și studii de caz", icon: "book-open" },
  { text: "Acces la o comunitate activă de cursanți și creatori", icon: "users" },
  { text: "Suport live săptămânal în sesiuni Q&A", icon: "support" },
  { text: "1 an de acces complet la tot conținutul", icon: "calendar" }
]

const testimonials = [
  {
    text: "A creat un mini curs de organizare financiară pentru liber-profesioniști și a trecut de 15.000 euro în 6 luni.",
    name: "Cosmin",
    occupation: "Antreprenor"
  },
  {
    text: "Și-a pus online metoda de lucru și are acum peste 700 de participanți activi în programele ei digitale.",
    name: "Andreea",
    occupation: "Terapeut"
  },
  {
    text: "A lansat un curs pentru copii și părinți despre gramatică aplicată și a vândut 230 locuri în prima ediție.",
    name: "Mirela, 47 ani",
    occupation: "Profesor de limba română"
  }
]

const cards = [
  {
    text: "Părinților care vor să lucreze de acasă",
    icon: "home"
  },
  {
    text: "Profesioniștilor care vor să-și diversifice veniturile",
    icon: "pro"
  },
  {
    text: "Antreprenorilor care vor să-și digitalizeze cunoștințele",
    icon: "business"
  },
  {
    text: "Oricărei persoane care are o pasiune sau un know-how valoros",
    icon: "star"
  }
]

const WIDTH = Dimensions.get('window').width

const EducationalOnline = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{paddingTop: 40}}><Text style={{color: Colors.dark.tint}}>Creează și lansează un curs online profitabil</Text> chiar dacă pornești de la zero.</ThemedText>
      <ThemedText>Te-ai gândit vreodată că expertiza ta, fie ea profesională, fie dobândită din experiență personală, ar putea deveni sursa ta principală de venit?</ThemedText>
      <ThemedText>Acum ai acces la o metodă testată, pas cu pas, prin care îți transformi cunoștințele într-un produs digital educațional</ThemedText>
      <ThemedText type='defaultSemiBold'>ce poate genera mii de euro lunar.</ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Ce este programul</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Primul tău curs?</ThemedText>
      <ThemedText>Este un proces complet, ghidat pas cu pas, ce îți arată cum să creezi, lansezi și promovezi un curs online fără să ai nevoie de abilități tehnice, fără audiență sau echipă.</ThemedText>
      <ThemedText type='defaultSemiBold'>Este destinat celor care:</ThemedText>

      {
        items.map((item, index: number) => (
          <WebStartProCard 
            title={item.text}
            icon={item.icon}
            key={index}
          />
        ))
      }

      <ThemedText type='title' style={{paddingTop: 20}}>Cine este Vlad Ciuchie</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Creatorul programului?</ThemedText>
      <ThemedText type='defaultSemiBold'>Salut! Sunt Vlad Ciuchie, antreprenor și creator de programe de formare care au schimbat deja viața a mii de oameni.</ThemedText>
      <ThemedText>De peste 6 ani activez în zona antreprenoriatului si a educației online, iar misiunea mea este simplă: <Bold>să-i ajut pe oameni să transforme ceea ce știu, ceea ce iubesc sau ceea ce trăiesc într-o sursă de venit sustenabilă,</Bold> prin cursuri online și produse digitale.</ThemedText>
      <ThemedText type='defaultSemiBold'>Ultimul program creat de mine a generat vânzări de </ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>peste 200.000 de euro în doar 4 luni de la lansare.</ThemedText>
      <ThemedText>Nu îți spun asta ca să te impresionez, ci ca să știi că înveți direct de la cineva care aplică exact ceea ce predă.</ThemedText>
      <ThemedText>Astăzi, folosesc toate aceste experiențe pentru a-ți pune la dispoziție o metodă testată, clară și eficientă, care să te ajute să creezi un curs online de impact, indiferent de unde pornești.</ThemedText>
      <ThemedText>În programul de mentorat, vei avea acces direct la mine și la toată expertiza acumulată în lansări, marketing, structurarea cursurilor și monetizarea lor. <Bold>Este un program gândit să funcționeze în viața reală, pentru oameni reali,</Bold> nu o teorie frumoasă pe hârtie.</ThemedText>
      <ThemedText>Dacă simți că ai ceva de oferit, dar nu știi cum să împachetezi, vinzi și lansezi acel “ceva”, eu sunt aici să te ghidez pas cu pas.</ThemedText>

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/vlad.jpeg')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Cum funcționează programul?</ThemedText>
      <ThemedText>Programul este structurat în mai multe etape strategice, fiecare gândită să te conducă de la idee până la lansarea și monetizarea primului tău curs online.</ThemedText>
      {
        items2.map((item, index: number) => (
          <CheckLine 
            text={item.title}
            content={item.content}
            key={index}
            type={'check'}
          />
        ))
      }

      <ThemedText type='title' style={{paddingTop: 20}}>Ce înveți concret?</ThemedText>
      {
        items3.map((item, index: number) => (
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

      <ThemedText type='title' style={{paddingVertical: 20}}>Ce conține pachetul tău:</ThemedText>
      {
        items4.map((item, index: number) => (
          <WebStartProCard 
            title={item.text}
            icon={item.icon}
            key={index}
          />
        ))
      }

      <ThemedText type='title' style={{paddingTop: 40}}>Cât poți câștiga?</ThemedText>
      <ThemedText>Exemple reale arată <Bold>că un curs vândut la 197 EUR și promovat către doar 100 de persoane poate</Bold></ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>aduce încasări de peste 10.000 EUR.</ThemedText>
      <ThemedText>Și asta doar de la o singură lansare.</ThemedText>
      <ThemedText>Acest model de business este scalabil, cu un singur produs digital poți vinde ani de zile, fără costuri logistice, angajați sau sedii.</ThemedText>
      <ThemedText>Îți readuc aminte pe aceasta cale, ca ultimul produs creat de mine,</ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>s-a vândut in primele 4 luni de 200.000 euro</ThemedText>
      <ThemedText>Nu îți promit ca vei ajunge tot acolo, dar cu siguranță 10-20% din aceasta suma o putem atinge împreună lunar.</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
          marginVertical: 20
        }}
        source={require('@/assets/images/programe/vlad-holiday.jpeg')}
      />

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 20}}></View>

      <ThemedText type='title' style={{paddingTop: 20}}>Exemple reale din comunitate:</ThemedText>
      {
        testimonials.map((item) => (
          <View key={item.name} style={{gap: 12, paddingTop: 20}}>
            <ThemedText type='defaultSemiBold'>{item.text}</ThemedText>
            <View>
              <ThemedText type='subtitle'>{item.name}</ThemedText>
              <ThemedText type='defaultSemiBold' style={{color: Colors.dark.tint, fontSize: 18}}>{item.occupation}</ThemedText>
            </View>
          </View>
        ))
      }

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 40}}></View>
      <ThemedText type='title' style={{paddingBottom: 20}}>Cui i se potrivește <Text style={{color: Colors.dark.tint}}>programul?</Text></ThemedText>

      {
        cards.map((item, index: number) => (
          <WebStartProCard 
            title={item.text}
            icon={item.icon}
            key={index}
          />
        ))
      }

      <ThemedText type='title'>Garanția ta:</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: 120,
          height: 120,
          marginVertical: 20,
          alignSelf: 'center'
        }}
        source={require('@/assets/images/programe/insigna.png')}
      />
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Ai 100% acces la suport și resurse.</ThemedText>
      <ThemedText>Dacă aplici tot ce primești și nu ai nicio vânzare în 90 de zile, beneficiezi de sesiuni private suplimentare gratuite, până obții rezultate.</ThemedText>
      <ThemedText type='title'>Înscrierea este limitată!</ThemedText>
      <ThemedText>Pentru a păstra un nivel ridicat de suport personalizat, înscrierile sunt limitate. Grăbește-te să prinzi un loc în cohorta următoare.</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>Este momentul tău să transformi experiența în profit.</ThemedText>
      
      <TouchableOpacity
        onPress={() => router.push('/Form?source=propiul-tau-program-educational-online')}
        style={{ width: '100%', marginTop: 'auto', paddingTop: 20 }} 
      >
          <Button
            text='Înscrie-te acum'
          />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default EducationalOnline

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  },
})