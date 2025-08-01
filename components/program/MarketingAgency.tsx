import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import Button from '../ui/Button'
import CheckLine from './CheckLine'

const WIDTH = Dimensions.get('screen').width

const benefits = [
  "O ședință de consultanță înainte de a începe programul",
  "Programul se desfășoară într-un format 1 la 1 (doar tu și echipa noastră), oferindu-ți asistența dedicată de care ai nevoie",
  "Consultanță personalizată pe toată durata programului, oferită de un specialist cu experiență în domeniu, care deține propria agenție de marketing",
  "Un schelet complet al unei agenții de marketing, împreună cu toate elementele necesare pentru desfășurarea afacerii",
  "Asistență în deschiderea firmei SRL (nu este obligatoriu să deții/creezi un SRL) și servicii de contabilitate la prețuri avantajoase",
  "Un schelet de website pregătit pentru a fi personalizat pentru afacerea ta",
  "Modul Webdesign (creare websiteuri)",
  "Buget de reclame pus la dispoziție de Profit Way Academy pentru a-ți promova afacerea",
  "Acces la 5 canale de potențiali clienți, pentru a-ți extinde baza de colaborare",
  "Un model detaliat de vânzare a serviciilor, pentru a te ajuta să te promovezi eficient pe piața produsului tău",
  "Forta de muncă asigurată (angajați calificați în domeniu) / departament HR (doar dacă se dorește scalarea afacerii la încasări lunare mult mai mari)",
  "Bonus pentru acțiune rapidă: Include laptop (toate programele necesare de lucru instalate). În cazul în care deja deții un laptop, prețul programului nu va suferi modificări",
  "O echipă formată din 5 specialiști îți va sta la dispoziție pe durata a 100-150 de zile, până când agenția ta de marketing va fi finalizată și funcțională",
  "Garanție de profit: Asistență din partea echipei ProfitWay, până în punctul în care agenția ta de marketing devine profitabilă",
  "La finalul programului, vei avea propria ta agenție de marketing funcțională și pregătită pentru succes"
]

const benefits2 = [
  "Fără să te complici cu stocuri de produse",
  "Fără să faci niciun fel de investiție",
  "Fără sa ai cunoștințe de niciun fel, noi ne OCUPĂM DE TOT",
  "Fără să ai studii superioare",
  "FĂRĂ ABSOLUT NICIUN RISC",
  "Garantăm predictibilitate în procesul de generare a veniturilor"
]

const features = [
  {
    text: "Dar vei falimenta rapid, din cauza că nu poți face față costurilor uriașe care există la un astfel de business cu produse fizice + investițiile inițiale foarte mari.",
    type: 'x'
  },
  {
    text: "Mii de euro se duc pe stocuri de produse, chirii, sute de euro pentru transport și alte mii de euro pe promovare.",
    type: 'x'
  },
  {
    text: "Nu cred că este o idee inteligență să riști 10-20.000 euro cu niște produse fizice la care nu ai nicio garanție că le vei putea vinde pe profit.",
    type: 'x'
  },
  {
    text: "Așadar, acum este momentul oportun să îți deschizi propria ta afacere, sau să te relochezi profesional CU INVESTIȚIE ZERO în cel mai PROFITABIL domeniu la ora actuală.",
    type: 'check'
  }
]

const features2 = [
  "Vrei să devii Freelancer și să poți oferi servicii de marketing antreprenorilor din TOATĂ lumea, și să încasezi venituri IMEDIATE fără INVESTIȚII.",
  "ATENȚIE, acest program te învață o tehnică care funcționează în toată lumea, nu doar în România.",
  "Ești Antreprenor la început de drum sau puțin mai avansat. Știm că Finanțele sunt o problemă când businessul tău este la început de drum, de aceea acest program îți oferă tehnicile și strategiile concrete pentru a-ți crește Businessul fără a mai plăti VREODATĂ NICIO AGENȚIE DE MARKETING.",
  "Ești Angajat dar nu ești mulțumit de jobul actual."
]

const businessInfo = [
  "În acest business nu ești legat de un loc static. Poți lucra de oriunde, după propriul program.",
  "Investiția inițială este zero. Practic înveți un skill din care vei genera profit imediat fără NICIUN RISC.",
  "Vei primi direct metodele și tehnicile testate de mine, care m-au costat peste 100.000 euro în teste, fără ca tu să riști nici măcar 1 euro.",
  "Poți începe acest model de business și în paralel cu jobul actual.",
  "Noi ne ocupăm de tot, tu trebuie doar să îți DOREȘTI."
]

const items = [
  {
    text: "Norocul tău este că acest program îți oferă predictibilitate 100%, nu necesită nicio investiție și nu ai niciun risc.",
    type: "check"
  },
  {
    text: "Practic, îți ofer la cheie, metodă care mie îmi aduce 50.000 de euro lunar din doar 10 clienți.",
    type: "check"
  },
  {
    text: "NU AȘTEPTA, momentul potrivit începe odată cu hotărârea și maturizarea ta.",
    type: "x"
  },
  {
    text: "Doar acționând vei descoperi cum firmele de marketing ajung la cifre de afaceri de sute de mii de euro anual (verifică listafirme.ro).",
    type: "check"
  },
  {
    text: "Acest program îți va aduce rezultate PE VIAȚĂ, și îți pot garanta că ÎȚI VA SCHIMBA VIAȚA și percepția asupra banilor.",
    type: "check"
  }
]

type Props = {
  program: any
}

const MarketingAgency = ({ program }: Props) => {
  const router = useRouter()
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{ color: Colors.dark.tint, textAlign: 'center', paddingTop: 40 }}>Propria ta Agenție de Marketing</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>COPIAZĂ AFACEREA PRIN CARE SUTE DE STUDENȚI ÎNCEPĂTORI, AU ÎNCEPUT SĂ GENEREZE VENITURI DIN MARKETING ÎNTRE 2000 ȘI 3000 DE EURO LUNAR, PE LÂNGĂ JOBUL/AFACEREA ACTUALĂ,</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center', color: 'green'}}>În primele 90 de zile de la fondarea propriei Agenții de Marketing, cu ajutorul nostru.</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center', color: 'green'}}>Ce oferim:</ThemedText>
      
      <View style={styles.subContainer}>
        {
          benefits.map((item: string, index: number) => (
            <View key={index} style={styles.benefitContainer}>
              <View style={styles.checkContainer}>
                <FontAwesome5 name="check" size={14} color="white" />
              </View>
              <ThemedText style={{flexShrink: 1}} textAlign='auto' type='defaultSemiBold'>{item}</ThemedText>
            </View>
          ))
        }
        {
          benefits2.map((item: string, index: number) => (
            <View key={index} style={styles.benefitContainer}>
              <Feather name="check" size={28} color="green" />
              <ThemedText style={{flexShrink: 1}} textAlign='auto' type='defaultSemiBold'>{item}</ThemedText>
            </View>
          ))
        }
      </View>

      <View style={{paddingTop: 20}}>
        <YoutubePlayer
          height={220}
          play={false}
          videoId={'apQY6B-V6Ek'}
        />
      </View>

      <ThemedText type='subtitle' style={{textAlign: 'center', paddingTop: 20}}>DESCHIDEȚI PROPRIA AGENȚIE DE MARKETING</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center', color: Colors.dark.tint}}>fără să renunți la jobul actual.</ThemedText>
      <Image 
        style={styles.image}
        source={require('@/assets/images/programe/holiday 1.jpeg')}
      />
      <Image 
        style={[styles.image, {marginTop: 20}]}
        source={require('@/assets/images/programe/holiday 2.jpeg')}
      />

      <ThemedText type='title' style={{ textAlign: 'center', paddingTop: 20 }}>Câștigă Minim</ThemedText>
      <ThemedText type='title' style={{ textAlign: 'center', color: 'red' }}>2500 Euro / lună</ThemedText>
      <ThemedText type='title' style={{ textAlign: 'center', textDecorationLine: 'underline' }}>lucrând doar 3-4 ore / zi, fără să renunți la jobul actual.</ThemedText>

      <ThemedText type='defaultSemiBold' style={{ textAlign: 'center' }}>Învață bazele marketingului online (PPC, email marketing, Meta) pentru a-ți construi propria afacere profitabilă, sau pentru a-ți propulsa propria afacere.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{ textAlign: 'center' }}>Afacere în marketing completă , împărțită și structurată încât să o poată înțelege oricine, nu trebuie să ai cunoștințe anterioare, facultate, sau baze în domeniu. Această afacere este destinată celor care vor un business PROFITABIL , STABIL, lucrând de acasă, cât și Antreprenorilor ce au nevoie de competențe pentru a-și propulsa propria afacere deja existența.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{ textAlign: 'center' }}>Pe toată durata programului, vei învață abilități extrem de utile în vremurile actuale, care îți vor permite să generezi bani dintr-un domeniu fără de care nicio afacere în viitor nu va mai putea activă.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{ textAlign: 'center' }}>În ultimii 4 ani în România, au fost create peste 500.000 de firme noi, la care putem adaugă și celelalte 2 milioane de firme existente. În felul acesta îți poți face o idee despre câtă cerință există în această piață pentru viitoarea ta afacere.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{ textAlign: 'center' }}>Toate aceste firme ,indiferent ce comercializează, servicii sau bunuri , au nevoie de marketing digital pentru a există și pentru a ajunge la clienții potriviți, cum și tu ai ajuns aici dintr-o reclamă făcută de noi 🙂</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>TOATE firmele au nevoie de promovare.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{ textAlign: 'center' }}>Comerțul online de toate tipurile a EXPLODAT în ultimii ani în România, începând cu perioada pandemiei unde s-au înregistrat vânzări RECORD pentru toate magazinele din România ( verifică lista firme, creșterea oricărui magazin de la care cumperi constant ).</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>Dacă te pasionează antreprenoriatul și cauți o sursă de venit constant, îți ofer oportunitatea de a construi cel mă profitabil business la ora actuală.</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center'}}>NU TOATE AFACERILE ÎȚI POT OFERI</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center'}}>ZERO RISC</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>și VENITURI CONSTANTE.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center'}}>Da, cu siguranță poți începe o afacere pe Emag, Amazon sau un magazin online.</ThemedText>
      {
        features.map((item, index: number) => (
          <CheckLine 
            text={item.text}
            key={index}
            type={item.type as 'check' | 'x'}
          />
        ))
      }
      <ThemedText type='subtitle' style={{textAlign: 'center', paddingTop: 20}}>Poate te intrebi :</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>Ok, dar cum îmi voi găsi primii clienți ?</ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center'}}>Vrem să știi, că tot noi ne vom ocupă să te învățăm metodele noastre prin care îți poți găși clienți constant (un MINIM de tarif în acest domeniu pentru servicii de campanii Meta + Google este de 4-500 euro / client , ajungând până la 1000 euro odată cu experiență și renumele tău).</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center', paddingTop: 20}}>Acest program este pentru tine, dacă:</ThemedText>
      {
        features2.map((item, index: number) => (
          <CheckLine 
            text={item}
            key={index}
            type={'check'}
          />
        ))
      }
      <ThemedText type='title' style={{textAlign: 'center', paddingTop: 20}}>Gândește-te doar: unii oameni investesc 100.000 Euro într-un apartament, pentru a genera o chirie modică de 500E pe luna.</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center', textDecorationLine: 'underline'}}>Cea mai proastă investiție.</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center', paddingTop: 20}}>Poți începe programul în paralel cu jobul actual, fără să fii nevoit să renunți la el.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center'}}>Scapă de jobul actual și începe o afacere fără riscuri, în care nu ai nevoie de investiții, angajați, sau stocuri de marfă. Lucrează de oriunde după propriul program, tot ce ai nevoie este de un laptop.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center'}}>Sau poți caută joburi mult mai bine plătite în domeniu marketingului, în sistem colaborare, unde poți lucra de acasă (verifică salariile din acest domeniu pe Ejobs).</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center', paddingTop: 20}}>Motive pentru a începe acest program:</ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center'}}>În vremurile noastre, cel mai benefic pentru ține este să te axezi pe un domeniu al viitorului , uită de joburi și afaceri comuniste care necesită investiții enorme și nu sunt de viitor. Era digitală este abia la început. Acesta a fost și norocul meu, primul job la vârstă de 23 de ani, îmi aducea 1900 lei pe luna, dar m-a propulsat într-un domeniu ce ținea de viitor. Orice alt job pe care l-aș fi ales, probabil nu aș fi reușit performanțele actuale.</ThemedText>
      {
        businessInfo.map((item, index: number) => (
          <CheckLine 
            text={item}
            key={index}
            type={'check'}
          />
        ))
      }
      <Image 
        style={styles.image}
        source={require('@/assets/images/programe/holiday 3.jpeg')}
      />
      
      <ThemedText type='title' style={{textAlign: 'center', paddingTop: 40}}>Ține cont că momentul potrivit pentru a te reinventa și a începe ceva,</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center', color: 'red', textTransform: 'uppercase'}}>nu vine niciodată!!!</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center', color: Colors.dark.tint, textTransform: 'uppercase'}}>MOMENTUL POTRIVIT</ThemedText>
      <ThemedText type='title' style={{textAlign: 'center'}}>doar tu îl stabilesti.</ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center'}}>Cu cât amâni mai mult ideea de a începe orice, nu vei începe real niciodată. Orice idee odată începută, va merge de la sine către succes odată cu implicarea și documentarea ta.</ThemedText>
      {
        items.map((item, index: number) => (
          <CheckLine 
            text={item.text}
            key={index}
            type={item.type as 'check' | 'x'}
          />
        ))
      }
      <ThemedText type='subtitle' style={{textAlign: 'center', paddingTop: 20}}>Înscrie-te pentru o discuție de consultanță gratuită, unde colegii noștri îți vor RĂSPUNDE la toate întrebările și curiozitățile.</ThemedText>
      <TouchableOpacity
        onPress={() => router.push('/Form?source=marketing-masterplan')}
        style={{ width: '100%', marginTop: 'auto', paddingTop: 20 }} 
      >
          <Button 
            text='Mă înscriu acum'
          />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MarketingAgency

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  },
  subContainer: {
    gap: 20,
    flex: 1,
    width: '100%'
  },
  benefitContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  checkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'green',
    borderRadius: 100
  },
  image: {
    borderRadius: 4,
    width: WIDTH - 40,
    height: (WIDTH - 40)*1.24
  }
})