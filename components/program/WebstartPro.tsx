import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Collapsible } from '../Collapsible'
import { ThemedText } from '../ThemedText'
import Bold from '../ui/Bold'
import Button from '../ui/Button'
import CheckLine from './CheckLine'
import WebStartProCard from './WebStartProCard'

const WIDTH = Dimensions.get('window').width

const items = [
  {
    title: "Educație practică și actualizată",
    content: "Înveți direct de la experți activi în industrie."
  },
  {
    title: "Metodă de învățare flexibilă",
    content: "Cursuri online adaptate programului tău."
  },
  {
    title: "Diplomă recunoscută",
    content: "Obține certificarea care te ajută să deschizi uși în cariera ta."
  },
  {
    title: "Portofoliu propriu",
    content: "Vei construi proiecte reale care să impresioneze angajatorii."
  },
  {
    title: "Suport continuu",
    content: "Asistență permanentă, chiar și după absolvire."
  }
]

const items2 = [
  {
    title: "Lecții practice și interactive",
    content: "Înveți făcând, nu doar teorie.",
    icon: 'play'
  },
  {
    title: "Proiecte reale",
    content: "Creezi propriul tău site pentru portofoliul.",
    icon: 'documents'
  },
  {
    title: "Feedback personalizat",
    content: "Primești îndrumare directă de la traineri.",
    icon: 'stats'
  },
  {
    title: "Flexibilitate totală",
    content: "Accesezi materialele când îți permite timpul.",
    icon: 'work'
  },
  {
    title: "Suport live săptămânal în sesiuni Q&A",
    icon: 'support'
  },
  {
    title: "Plan personalizat de carieră",
    content: "Te ghidăm către primul tău job sau proiect freelance.",
    icon: 'pathway'
  }
]

const topics = [
  "1. Introducere în curs",
  "2. Ce este un CMS și de ce folosim WordPress",
  "3. Ce sunt hosting/domeniu și cum le cumpăram",
  "4. Instalare WordPress pe un host",
  "5. Instalare WordPress local",
  "6. Activare https și ce este",
  "7. Cum să iți alegi adresa de email"
]

const topics2 = [
  "1. Familiarizarea cu platforma WordPress",
  "2. Cum creezi pagini pe WordPress",
  "3. Cum creezi meniuri",
  "4. Cum instalezi plugin-uri",
  "5. Setare și configurare Elementor Pro",
  "6. Cum setezi pagina de acasă și pagina de blog"
]

const topics3 = [
  "1. Definiție și rolul pluginurilor în WordPress",
  "2. Diferența dintre pluginuri gratuite și premium",
  "3. Exemple de pluginuri populare și utilitatea lor",
  "4. Limitarea numărului de pluginuri pentru performanță",
  "5. Actualizarea periodică și verificarea compatibilităților",
  "6. Gestionarea conflictelor între pluginuri"
]

const pages = [
  "1. Secțiunea header și footer",
  "2. Pagina principală",
  "3. Pagina “despre noi”",
  "4. Pagina “servicii”",
  "5. Pagina “portofoliu”",
  "6. Pagina “blog” și paginile necesare",
  "7. Pagina “prețuri”",
  "8. Pagina “contact”"
]

const ecommerceTopics = [
  "1. Instalare plugin magazin online",
  "2. Setări specifice magazinului online",
  "3. Secțiunea header și footer",
  "4. Pagina principală",
  "5. Pagina de categorie produse",
  "6. Pagina produs",
  "7. Paginile de finalizare comandă",
  "8. Instalare modulul de plată cu cardul"
]

const seoTopics = [
  "1. Plugin-uri pentru SEO",
  "2. Principalele modificări de SEO",
  "3. Setare și modificare sitemap"
]

const maintenanceTopics = [
  "1. Cum se face mentenanța?",
  "2. Ce faci dacă ai o problemă cu un modul / temă?",
  "3. Cum se face corect actualizarea modulelor",
  "4. Cum îți protejezi site-ul împotriva atacurilor",
  "5. Cum faci corect back-up la site",
  "6. Cum să ai mereu imaginile optimizate"
]

const advancedTopics = [
  "1. Instalare WordPress: Pași pentru instalare locală și pe hosting.",
  "2. Configurare Elementor: Ghid pas cu pas pentru setarea paginilor și secțiunilor.",
  "3. Mentenanță site: Proceduri pentru actualizare, backup și securitate.",
  "4. Ghid de bune practici pentru pluginuri: Cum să alegi și să gestionezi eficient pluginurile."
]

const practicalModules = [
  "1. Modul de configurare: Creează o pagină „Despre noi” folosind Elementor și adaugă un formular de contact.",
  "2. Modul de construcție site: Realizează un landing page cu 3 secțiuni diferite (eroare, despre, contact).",
  "3. Modul de optimizare SEO: Instalează Rankmath și optimizează un articol cu titlu, meta descriere și cuvinte cheie."
]

const finalProjects = [
  "1. Creare site complet: Fă un site de prezentare cu 5 pagini (Acasă, Despre, Servicii, Blog, Contact) folosind Elementor și pluginuri esențiale.",
  "2. Magazin online: Construiește un magazin de test cu 3 produse, configurând toate paginile (Home, Catalog, Produse, Checkout).",
  "3. Securizare și mentenanță: Realizează un plan de backup și securitate pentru un site WordPress deja existent."
]

const careerPaths = [
  {
    title: "Ca Web Designer Freelance",
    content: "Lucrând de acasă pentru clienți din întreaga lume.",
    icon: "globe"
  },
  {
    title: "În agenții de marketing sau web design",
    content: "Ca designer sau developer frontend.",
    icon: "building"
  },
  {
    title: "La propriul tău proiect",
    content: "Deschizând propriul business online.",
    icon: "rocket"
  }
]

const testimonials = [
  {
    student: "Ioana, Timișoara",
    testimonial: "Recomand cu încredere! Acum lucrez la o agenție și sunt extrem de mulțumit de alegerea făcută."
  },
  {
    student: "Vlad, Cluj-Napoca",
    testimonial: "Programul este foarte bine structurat și m-a ajutat să-mi schimb cariera. Trainerii sunt foarte implicați."
  },
  {
    student: "Andreea, București",
    testimonial: "În doar câteva luni am învățat să construiesc site-uri profesionale și am început să câștig din primele proiecte freelance."
  }
]

const faqs = [
  {
    question: "1.⁠ ⁠Am nevoie de cunoștințe tehnice pentru a începe?",
    answear: "Nu, programul este conceput pentru începători absoluti."
  },
  {
    question: "2.⁠ ⁠Este posibil să învăț web design lucrând full-time?",
    answear: "Da! Programul este flexibil și poți învăța în ritmul propriu."
  },
  {
    question: "3.⁠ ⁠Primesc diplomă la final?",
    answear: "Da, vei primi un certificat recunoscut care îți validează competențele."
  },
  {
    question: "4.⁠ ⁠Pot începe să câștig bani ca freelancer după finalizare?",
    answear: "Da, în program vei învăța și cum să găsești primii tăi clienți."
  }
]

const WebstartPro = () => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{paddingTop: 40}}><Text style={{color: Colors.dark.tint}}>Dezvoltă o carieră în Web Design</Text> și atinge succesul în industria digitală!</ThemedText>
      <ThemedText type='defaultSemiBold'>Învață să construiești site-uri moderne și funcționale, cerute de companii din întreaga lume.</ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Transformă-ți pasiunea în carieră, așa cum am făcut și eu,</ThemedText>
      <ThemedText type='title'>Eu sunt Marius Paraschiv și te voi ghida</ThemedText>
      <ThemedText><Bold>Salut! Marius aici,</Bold> Web Developer cu peste 7 ani de experiență.</ThemedText>
      <ThemedText>Astăzi, sunt freelancer și colaborez cu afaceri din România și din străinătate. <Bold>Dar drumul până aici nu a fost ușor.</Bold></ThemedText>
      <ThemedText>De la joburi diverse la descoperirea vocației</ThemedText>
      <ThemedText>Încă din liceu, simțeam o atracție pentru programare. Cu toate acestea, mi-au trebuit 4 ani și jumătate să realizez că aceasta este adevărata mea pasiune. În acest timp, am experimentat diverse joburi: cărat cutii, operator call-center, agent de vânzări, game tester până târziu în noapte și chiar fotograf la evenimente.</ThemedText>
      <ThemedText>Am început să muncesc de la 16-17 ani pentru a avea independență financiară și libertate. Nu am fost genul care să aștepte de la părinți; am vrut să-mi câștig proprii bani și să nu depind de nimeni.</ThemedText>
      <ThemedText type='defaultSemiBold'>Primii pași în programare…</ThemedText>
      <ThemedText>La 19 ani, odată cu începutul facultății, am simțit că nu mă regăsesc nicăieri. Joburile nu îmi aduceau satisfacție, iar încrederea în mine era la cote minime. Am început să aplic la internship-uri în programare, dar fără succes. Până într-o zi când am primit un apel pentru primul meu interviu.</ThemedText>
      <ThemedText>Entuziasmul a fost imens. Am simțit că sunt pe drumul cel bun. La acel internship, am avut un mentor care m-a învățat bazele programării web. Fără el, nu aș fi ajuns unde sunt astăzi.</ThemedText>
      
      <Image 
        style={[styles.image, {paddingTop: 20}]}
        source={require('@/assets/images/programe/Marius.jpg')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Evoluția profesională</ThemedText>
      <ThemedText>În cei 4 ani de experiență ca programator, am evoluat de la pagini simple în HTML/CSS la proiecte complexe folosind Vue, React, NodeJs și PHP. Am descoperit și eficiența WordPress, <Bold>realizând peste 200 de proiecte de succes, de la teme personalizate la pagini construite cu Elementor.</Bold></ThemedText>
      <ThemedText type='defaultSemiBold'>Pentru cei la început de drum…</ThemedText>
      <ThemedText>Știu cum e să fii la început și să nu știi de unde să începi. Să ai teama de a nu strica ceva sau să nu înțelegi cum funcționează lucrurile. Tocmai de aceea, am creat acest curs de web design, pentru a te ghida pas cu pas și a-ți oferi încrederea și cunoștințele necesare pentru a-ți construi propria carieră în acest domeniu.</ThemedText>

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*0.66,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Marius2.jpg')}
      />

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 40}}></View>

      <ThemedText type='title'>Intră într-un domeniu al viitorului!</ThemedText>

      <ThemedText>Web design-ul este una dintre cele mai dinamice și bine plătite cariere din prezent. Prin programul nostru de specializare, vei dobândi abilități esențiale pentru a crea site-uri profesionale și pentru a-ți construi o carieră flexibilă și profitabilă.</ThemedText>

      <ThemedText>Nu ai nevoie de experiență anterioară, îți oferim toată susținerea de care ai nevoie pentru a porni la drum!</ThemedText>

      <ThemedText type='title' style={{paddingVertical: 20}}>De ce să alegi cursul nostru de Web Design?</ThemedText>
      {
        items.map((item, index: number) => (
          <CheckLine 
            text={item.title}
            content={item.content}
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
          marginTop: 20
        }}
        source={require('@/assets/images/programe/webdesign.jpg')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Totul este gândit să-ți maximizeze șansele de succes:</ThemedText>

      {
        items2.map((item, index: number) => (
          <WebStartProCard 
            title={item.title}
            content={item.content}
            icon={item.icon}
            key={index}
          />
        ))
      }

      <ThemedText type='defaultSemiBold' style={{paddingTop: 20}}>Înscrie-te acum și începe drumul spre cariera ta în web design! Completează formularul pentru a primi toate detaliile despre program.</ThemedText>
      
      <TouchableOpacity
        onPress={() => router.push('/(tabs)')}
        style={{ width: '100%', marginTop: 'auto', paddingTop: 20 }} 
      >
          <Button
            text='Înscrie-te acum'
          />
      </TouchableOpacity>

      <ThemedText type='title' style={{paddingVertical: 20}}>Ce vei învăța în cadrul programului</ThemedText>

      <Collapsible 
        title="1. Introducere"
        isOpen={currentIndex === 0}
        onPress={() => setCurrentIndex(0)}
      >
        <View style={{padding: 16}}>
          { topics.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="2. Configurarea website-ului"
        isOpen={currentIndex === 1}
        onPress={() => setCurrentIndex(1)}
      >
        <View style={{padding: 16}}>
          { topics2.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="3. Pluginuri pentru WordPress"
        isOpen={currentIndex === 2}
        onPress={() => setCurrentIndex(2)}
      >
        <View style={{padding: 16}}>
        { topics3.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="4. Construire site de prezentare"
        isOpen={currentIndex === 3}
        onPress={() => setCurrentIndex(3)}
      >
        <View style={{padding: 16}}>
        { pages.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="5. Construire magazin online"
        isOpen={currentIndex === 4}
        onPress={() => setCurrentIndex(4)}
      >
        <View style={{padding: 16}}>
        { ecommerceTopics.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="6. Optimizare SEO On-Page"
        isOpen={currentIndex === 5}
        onPress={() => setCurrentIndex(5)}
      >
        <View style={{padding: 16}}>
        { seoTopics.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="7. Mentenanța website-ului"
        isOpen={currentIndex === 6}
        onPress={() => setCurrentIndex(6)}
      >
        <View style={{padding: 16}}>
        { maintenanceTopics.map((item: string) => (
            <ThemedText
              key={item}
              textAlign='auto'
            >
              {item}
            </ThemedText>
          ))}
        </View>
      </Collapsible>

      <Collapsible 
        title="Materiale de curs"
        isOpen={currentIndex === 7}
        onPress={() => setCurrentIndex(7)}
      >
        <View style={{padding: 16, gap: 8}}>
          <ThemedText type='subtitle' textAlign='auto'>Ghiduri PDF:</ThemedText>
          <View style={{gap: 2}}>
            {
              advancedTopics.map((item: string) => (
                <ThemedText
                  key={item}
                  textAlign='auto'
                >
                  {item}
                </ThemedText>
              ))
            }
          </View>

          <ThemedText type='subtitle' textAlign='auto' style={{paddingTop: 8}}>Exerciții practice după fiecare modul:</ThemedText>
          <View style={{gap: 2}}>
            {
              practicalModules.map((item: string) => (
                <ThemedText
                  key={item}
                  textAlign='auto'
                >
                  {item}
                </ThemedText>
              ))
            }
          </View>

          <ThemedText type='subtitle' textAlign='auto' style={{paddingTop: 8}}>Exerciții complexe (la final de curs):</ThemedText>
          <View style={{gap: 2}}>
            {
              finalProjects.map((item: string) => (
                <ThemedText
                  key={item}
                  textAlign='auto'
                >
                  {item}
                </ThemedText>
              ))
            }
          </View>
        </View>
      </Collapsible>

      <ThemedText type='defaultSemiBold' style={{paddingTop: 20}}>Cererea de specialiști este în continuă creștere, iar veniturile în domeniu sunt printre cele mai atractive.</ThemedText>
      <ThemedText type='title' style={{paddingVertical: 20}}>După absolvire, vei putea să lucrezi:</ThemedText>
      {
        careerPaths.map((item, index: number) => (
          <WebStartProCard 
            title={item.title}
            content={item.content}
            icon={item.icon}
            key={index}
          />
        ))
      }

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 40}}></View>

      <ThemedText type='title'>Testimoniale de la absolvenți</ThemedText>
      {
        testimonials.map((item) => (
          <View key={item.student} style={{gap: 12, paddingTop: 20}}>
            <ThemedText type='defaultSemiBold'>{item.testimonial}</ThemedText>
            <ThemedText type='subtitle'>{item.student}</ThemedText>
          </View>
        ))
      }

      <View style={{borderWidth: 1, borderColor: Colors.dark.tint, marginVertical: 40}}></View>
      <ThemedText type='title'>Îți garantăm că vei învăța!</ThemedText>
      <ThemedText>Dacă participi activ la cursuri și aplici ce înveți, îți garantăm că vei dobândi competențele necesare pentru a activa ca Web Designer.</ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Promisiunea Noastră Pentru Tine:</ThemedText>
      <ThemedText>Dacă înveți, aplici și rămâi implicat, nu vei fi niciodată singur pe drumul tău spre succes.</ThemedText>
      <ThemedText type='defaultSemiBold'>După absolvire, te promovăm activ către rețelele noastre de parteneri, agenții și clienți, pentru a-ți asigura startul în cariera de web designer.</ThemedText>
      <ThemedText>Misiunea noastră este să vedem cum transformi cunoștințele în venituri reale, promovarea vă avea loc până în momentul în care vei avea primii clienți sau iți vom găsi jobul dorit.</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.25,
          marginTop: 20
        }}
        source={require('@/assets/images/webdesign-curs.jpg')}
      />

      <ThemedText type='title' style={{paddingTop: 40}}>Întrebări frecvente</ThemedText>

      <View>
      {
        faqs.map((item) => (
          <View
            key={item.question}
          >
            <View style={{backgroundColor: Colors.dark.tint, padding: 12, paddingRight: 8}}>
              <ThemedText textAlign='auto' type='defaultSemiBold'>{item.question}</ThemedText>
            </View>
            <View style={{}}>
              <LinearGradient
                colors={['#311e14', '#643e21']}
                style={styles.background}
              />
              <ThemedText textAlign='auto' type='defaultSemiBold' style={{padding: 12, paddingLeft: 8}}>{item.answear}</ThemedText>
            </View>
          </View>
        ))
      }
      </View>

      <ThemedText type='title' style={{paddingTop: 40}}>Nu lăsa oportunitatea să treacă pe lângă tine!</ThemedText>
      <ThemedText type='defaultSemiBold' style={{paddingTop: 20}}>Transformă-ți pasiunea pentru tehnologie într-o carieră reală. Înscrie-te acum la cursul de Web Design și începe să construiești viitorul tău profesional!</ThemedText>

      <TouchableOpacity
        onPress={() => router.push('/Form?source=webstart-pro')}
        style={{ width: '100%', marginTop: 'auto', paddingTop: 20 }} 
      >
          <Button
            text='Înscrie-te acum'
          />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default WebstartPro

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  },
  image: {
    borderRadius: 4,
    width: WIDTH - 40,
    height: (WIDTH - 40)*1.5
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
})