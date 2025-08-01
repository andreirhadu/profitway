import CommitmentCard from '@/components/about/CommitmentCard'
import Step from '@/components/about/Step'
import CardAuthor from '@/components/home/CardAuthor'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { authors } from '@/constants/programs'
import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

const commitments = [
  {
    icon: 'document',
    text: 'Oferim programe de formare practice în domeniul antreprenoriatului.'
  },
  {
    icon: 'handshake',
    text: 'Sprijinim fiecare cursant în lansarea propriei afaceri, fiecare om primeste consultanță dedicată până afacerea este profitabilă, chiar și fără experiență anterioară.'
  },
  {
    icon: 'people',
    text: 'Creăm o comunitate de învățare în care membrii se susțin reciproc și cresc împreună.'
  }
]

const steps = [
  {
    title: 'Consultanță personalizată',
    description: 'Discutăm despre nevoile tale, provocările actuale și obiectivele pe termen mediu și lung.',
    icon: 'conversation'
  },
  {
    title: 'Alegerea programului potrivit',
    description: 'Îți recomandăm cursurile sau sesiunile care ți se potrivesc, în funcție de nivelul tău și domeniul de interes.',
    icon: 'graduation'
  },
  {
    title: 'Participi la sedințele online gratuite',
    description: 'Accesezi conținut aplicat, livrat de mentori cu experiență reală în business și dezvoltare personală.',
    icon: 'book'
  },
  {
    title: 'Transformare & implementare',
    description: 'Pui în practică ce ai învățat, cu sprijinul nostru. Vei observa rezultate clare în mindset și în business.',
    icon: 'rocket'
  }
]

const WIDTH = Dimensions.get('screen').width

const About = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <ThemedText style={{fontWeight: '500', textAlign: 'center'}}>
        Sub îndrumarea lui Vlad Ciuchie, fondatorul ProfitWay Academy, ne dedicăm să:
      </ThemedText>

      <View style={{gap: 20}}>
        { commitments.map((commitment) => (
          <CommitmentCard 
            commitment={commitment}
            key={commitment.icon}
          />
        )) }
      </View>

      <ThemedText type='subtitle' style={{textAlign: 'center', paddingVertical: 20}}>Tu ești arhitectul <Text style={{ color: Colors.dark.tint}}>viitorului tău.</Text></ThemedText>
      <ThemedText style={{textAlign: 'center'}}>Noi suntem aici să-ți oferim uneltele și sprijinul necesar pentru a construi o viață mai bună.</ThemedText>
      <ThemedText style={{textAlign: 'center', color: Colors.dark.tint, paddingVertical: 12}} type='subtitle'>
       Viziunea noastră
      </ThemedText>
      <ThemedText style={{textAlign: 'center'}}>Credem în puterea educației care schimbă vieți, <Text style={{fontWeight: '700'}}>Educație: reală, practică si aplicabilă.</Text> Într-o lume în care școala tradițională a lăsat multe goluri, noi venim cu o alternativă modernă, adaptată nevoilor actuale.</ThemedText>
      <ThemedText style={{textAlign: 'center'}}><Text style={{fontWeight: '700'}}>La ProfitWay Academy, înveți direct de la antreprenori români remarcabili</Text>, prin programe online captivante, create pentru a-ți accelera evoluția. Fie că vrei să îți îmbunătățești afacerile, să crești personal, să lansezi un business sau să explorezi domenii precum marketingul, vânzările, nutriția sau sportul, <Text style={{fontWeight: '700'}}>aici începe transformarea ta in antreprenor.</Text></ThemedText>
      <ThemedText style={{textAlign: 'center'}}>Folosim cele mai avansate tehnologii de învățare digitală pentru <Text style={{fontWeight: '700'}}>a-ți oferi nu doar informație, ci o afacere compconstă la cheie.</Text> Suntem aici să te sprijinim în a deveni cea mai bună versiune a ta, într-un mod pe care școala și societatea nu au făcut-o niciodată.</ThemedText>
      
      <Image 
        source={require('@/assets/images/about/Capital-300-Vlad.jpg')}
        style={styles.image}
      />

      <ThemedText style={{textAlign: 'center', paddingVertical: 12}} type='subtitle'>
        Autorii programelor <Text style={{ color: Colors.dark.tint }}>ProfitWay Academy</Text>
      </ThemedText>
      
      <ThemedText style={{textAlign: 'center'}}>La ProfitWay înveți de la cei mai buni, antreprenori și mentori români care cred în potențialul tău și se dedică 100% transformării tale.</ThemedText>

      { authors.map((author) => (
        <CardAuthor
          author={author as any}
          key={author.image}
        />
      ))}

      <ThemedText type='subtitle' style={{ textAlign: 'center', paddingVertical: 20 }}>Pași simpli către rezultatele <Text style={{ color: Colors.dark.tint }}>pe care le meriți</Text></ThemedText>
      <ThemedText style={{ textAlign: 'center' }}>Fie că ești la început de drum sau îți dorești să-ți duci afacerea la următorul nivel, procesul este gândit să fie clar, aplicat și eficient. Iată cum funcționează:</ThemedText>

      <View style={{ gap: 20, flex: 1, width: '100%', paddingBottom: 20 }}>
        {
          steps.map((step) => (
            <Step 
              step={step}
              key={step.icon}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 20,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 80
  },
  image: {
    width: WIDTH - 120,
    maxWidth: 400,
    maxHeight: 500,
    height: (WIDTH - 120)*1.25
  }
})