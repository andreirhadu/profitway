import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { ThemedText } from '../ThemedText'
import Bold from '../ui/Bold'
import Button from '../ui/Button'
import CheckLine from './CheckLine'
import Quote from './Quote'

const WIDTH = Dimensions.get('screen').width

const mesaje = [
  "Dacă vrei să treci de la un venit limitat la un sistem care poate genera între 10.000 și 16.000 RON lunar, fără să depinzi de un job de 9-5, atunci da, această oportunitate merită atenția ta.",
  "Dacă simți că nu are sens să muncești 40 de ani pentru un venit care nu-ți permite nici libertate, nici siguranță financiară, e timpul să explorezi o alternativă care poate schimba asta.",
  "Dacă ești gata să preiei controlul și să obții rezultate reale, atunci ce urmează e exact pentru tine.",
  "Dacă ai încercat alte metode de a face bani online și nu ai obținut decât rezultate modeste sau deloc, ceea ce urmează s-ar putea să fie exact ce ai nevoie: un model testat, simplu și cu potențial real de creștere.",
  "Dacă fiecare luni dimineață începe cu stres, taskuri interminabile și aceeași rutină obositoare, în timp ce știi că ești plătit mult sub cât produci pentru firmă, e clar că ai nevoie de o schimbare. Nu trebuie să rămâi blocat într-un sistem care nu te avantajează.",
  "Acest program îți arată pas cu pas cum poți lansa propriul business pe eMAG, cum să alegi produse profitabile și cum să construiești un venit predictibil, cu o investiție minimă și fără experiență anterioară."
]

const topics = [
  {
    title: "Structura completă a modelului de business",
    content: "Vei înțelege pas cu pas cum funcționează întregul mecanism de vânzare pe eMAG și ce trebuie să faci pentru a-l implementa corect, de la zero."
  },
  {
    title: "Metode testate pentru alegerea produselor potrivite",
    content: "Îți arătăm exact cum identificăm produsele care se vând rapid și constant, astfel încât să pornești cu cele mai mari șanse de succes."
  },
  {
    title: "Sursele noastre de produse și furnizori",
    content: "Îți dezvăluim platformele și metodele prin care găsim cei mai buni furnizori pentru produsele pe care le vindem — inclusiv colaborarea cu producători internaționali."
  },
  {
    title: "Ce să NU vinzi și de ce",
    content: "Vei învăța care sunt tipurile de produse riscante, greu de vândut sau cu marje mici, astfel încât să eviți greșelile comune care pot consuma inutil bugetul."
  },
  {
    title: "Gestionarea eficientă a bugetului tău",
    content: "Îți explicăm cum să-ți aloci resursele în mod inteligent, astfel încât să ai un echilibru între investiție, testare și scalare."
  }
]

const setupSteps = [
  {
    title: "Cum înființezi firma pas cu pas",
    content: "Îți explicăm clar ce documente sunt necesare, care sunt costurile implicate și cât timp durează până totul este gata pentru a porni legal afacerea."
  },
  {
    title: "Cum gestionezi corect aspectele legate de TVA",
    content: "Îți arătăm o strategie care îți poate aduce economii de până la 10.000 de euro doar printr-o optimizare fiscală inteligentă."
  },
  {
    title: "Documentația pentru import",
    content: "Vei învăța ce acte sunt obligatorii pentru a importa produse în mod legal și fără surprize, inclusiv ce trebuie pregătit în avans."
  },
  {
    title: "Totul despre Codul EORI",
    content: "Îți explicăm ce reprezintă acest cod vamal, cum îl obții rapid și de ce este esențial pentru a face comerț internațional."
  },
  {
    title: "Înregistrarea în scopuri de TVA",
    content: "Discutăm despre când și de ce este util să te înregistrezi ca plătitor de TVA, cum decizi dacă ți se potrivește și ce beneficii și riscuri implică."
  },
  {
    title: "Deschiderea contului bancar",
    content: "Îți recomandăm băncile cu cele mai bune opțiuni pentru afaceri online, ce tip de cont să alegi și cum să te organizezi eficient financiar."
  },
  {
    title: "Soluția de facturare și gestiune",
    content: "Îți arătăm ce software folosim noi pentru emiterea facturilor și gestionarea stocurilor și îți explicăm cum să-l setezi și folosești corect de la început."
  }
]

const supplierGuide = [
  {
    title: "Platformele de unde ne aprovizionăm",
    content: "Îți arătăm exact ce surse folosim pentru a găsi furnizori de încredere și cum poți face același lucru."
  },
  {
    title: "Cum inițiem contactul cu furnizorii",
    content: "Vei învăța cum să comunici eficient și profesionist de la primul mesaj, astfel încât să creezi o relație de încredere încă de la început."
  },
  {
    title: "Cum selectăm cei mai buni furnizori",
    content: "Îți explicăm criteriile pe care le folosim pentru a filtra și alege doar partenerii serioși și bine organizați, dintre toți cei contactați."
  },
  {
    title: "Informațiile-cheie pe care le solicităm",
    content: "Vei afla ce întrebări esențiale adresăm pentru a obține o ofertă clară, completă și avantajoasă."
  },
  {
    title: "Cum organizăm procesul de livrare",
    content: "Îți arătăm cum stabilim cu furnizorii detalii legate de timpii de livrare, ambalare, etichetare și alte aspecte importante pentru o colaborare eficientă."
  }
]

const importLogistics = [
  {
    title: "Documentele necesare pentru vamă",
    content: "Îți arătăm exact ce acte trebuie să ai pregătite pentru ca procesul vamal să decurgă rapid și fără bătăi de cap."
  },
  {
    title: "Taxe și costuri reale",
    content: "Afli la ce cheltuieli să te aștepți și cum să verifici din timp taxele de import, ca să poți calcula corect profitul."
  },
  {
    title: "Cum alegi un forwarder de încredere",
    content: "Îți explicăm ce trebuie să urmărești la o firmă de transport internațional, astfel încât marfa ta să ajungă în siguranță și la timp."
  },
  {
    title: "Ce tip de transport ți se potrivește",
    content: "Fie că vorbim de avion, vapor sau tren, vei ști ce variantă e mai rapidă, mai ieftină sau mai sigură, în funcție de nevoile tale."
  },
  {
    title: "Import din UE vs. China",
    content: "Îți prezentăm avantajele și dezavantajele fiecărei opțiuni, ca să iei decizia care aduce cel mai mare profit, fără complicații."
  }
]

const emagSetup = [
  {
    title: "Crearea contului de la zero",
    content: "Îți prezentăm toți pașii necesari, plus lista completă de documente de care ai nevoie, fără bătăi de cap."
  },
  {
    title: "Integrarea cu firmele de curierat",
    content: "Îți explicăm cum conectezi rapid curierii în contul tău, astfel încât comenzile să ajungă la clienți fără întârzieri."
  },
  {
    title: "Configurarea corectă a taxelor de livrare și a pragurilor pentru transport gratuit",
    content: "Vei învăța cum să setezi strategii eficiente de livrare, inclusiv pentru zonele cu kilometri suplimentari."
  },
  {
    title: "Navigarea platformei eMAG",
    content: "Îți arătăm cum funcționează toate secțiunile platformei și cum să folosești instrumentele oferite pentru a-ți optimiza vânzările."
  },
  {
    title: "Înțelegerea indicatorilor de performanță",
    content: "Află ce urmărește eMAG la un seller și cum să menții scoruri bune care îți mențin ofertele în top."
  }
]

const productListing = [
  {
    title: "Cum se face listarea produselor pe eMAG",
    content: "Îți prezentăm întregul proces de la A la Z, astfel încât produsele tale să fie vizibile și conforme cu cerințele platformei."
  },
  {
    title: "Ce transformă un produs obișnuit într-unul vândabil",
    content: "Îți arătăm ce elemente nu trebuie să lipsească din titlu, descriere și imagini pentru a convinge clientul să cumpere."
  },
  {
    title: "Editarea imaginilor ca un profesionist",
    content: "Îți recomandăm aplicații simple, dar eficiente, care te ajută să editezi poze în conformitate cu standardele eMAG."
  },
  {
    title: "Ce sunt codurile UPC și cum le obții",
    content: "Înveți de unde să iei codurile de bare de care ai nevoie pentru a lista produsele fără probleme."
  },
  {
    title: "Cum creezi variații atractive pentru același produs",
    content: "Îți explicăm cum să vinzi același produs în mai multe forme (culoare, dimensiune etc.) pentru a atrage mai mulți cumpărători și a-ți multiplica ofertele."
  }
]

const listingOptimization = [
  {
    title: "Cum te poziționezi favorabil în algoritmul eMAG",
    content: "Vei învăța ce criterii și indicatori influențează vizibilitatea produsului tău și cum să-i folosești în avantajul tău."
  },
  {
    title: "Cum crești traficul către listările tale",
    content: "Descoperi metode eficiente pentru a genera mai multe vizite pe paginile tale de produs, astfel încât platforma să le promoveze mai intens."
  },
  {
    title: "Cum obții recenzii valoroase și constante",
    content: "Îți explicăm strategii etice și funcționale pentru a obține recenzii care nu doar îți cresc credibilitatea, ci și vânzările."
  },
  {
    title: "Cum îți protejezi listarea de concurența neloială",
    content: "Îți arătăm cum să eviți „pirații” care încearcă să-ți copieze produsele și cum îți securizezi listarea ca un profesionist."
  }
]

const expansionModule = [
  {
    title: "Unde și cum ne extindem eficient",
    content: "Îți prezentăm cele mai promițătoare platforme din România și din afara țării, plus strategia de lansare pe fiecare."
  },
  {
    title: "Cum gestionăm mai multe platforme fără haos",
    content: "Vei învăța metode practice și tool-uri prin care poți administra totul ușor, dintr-un singur loc."
  },
  {
    title: "Cum adaptăm listările pentru piețe internaționale",
    content: "Îți arătăm cum faci traduceri corecte și optimizate, fără să fii expert în limbi străine."
  },
  {
    title: "Cum estimăm și gestionăm volumul de marfă",
    content: "Te învățăm cum să planifici stocurile și comenzile în funcție de cererea pe mai multe piețe."
  }
]

const productTypes = [
  "Produse „unicorn” - cele care se vând zilnic și generează cea mai mare parte din venituri.",
  "Produse cu vânzări constante – cu 3-5 comenzi pe săptămână, care aduc stabilitate.",
  "Produse cu vânzări mai mici – care completează gama și adaugă volum."
]

const EmagTopSeller = () => {
  const router = useRouter()
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='title' style={{textAlign: 'center', paddingTop: 40}}>Afacere la cheie pe eMAG / Program complet care te inițiază în vânzarea pe Market Place.</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>Ai visat vreodată să ai propriul business online?</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center'}}>Află cum poți începe pe eMAG și să obții între </ThemedText>
      <ThemedText type='title' style={{textAlign: 'center', color: Colors.dark.tint}}>120.000 și 300.000 RON </ThemedText>
      <ThemedText type='defaultSemiBold' style={{textAlign: 'center', fontSize: 18}}>pe an, cu investiții mici și strategii dovedite.</ThemedText>

      <Quote 
        text="Vizionarea acestui videoclip este esențială pentru a înțelege pașii practici pentru a lansa și scala o afacere la cheie pe eMAG. Vei descoperi cadrul complet, de la selecția produselor până la gestionarea comenzilor și optimizarea vânzărilor."
      />

      <YoutubePlayer
        height={220}
        play={false}
        videoId={'rI6iiem1R8k'}
      />

      <ThemedText type='title' style={{textAlign: 'center', paddingTop: 20}}>Îți pui întrebarea: “Este pentru mine?”</ThemedText>
      <ThemedText type='subtitle' style={{textAlign: 'center', color: Colors.dark.tint}}>Hai să clarificăm rapid.</ThemedText>
      {
        mesaje.map((item, index: number) => (
          <CheckLine 
            text={item}
            key={index}
            type={'check'}
          />
        ))
      }
      <ThemedText type='title' style={{textAlign: 'center', paddingVertical: 20}}>Hai să fim sinceri...</ThemedText>
      <Image 
        style={styles.image}
        source={require('@/assets/images/programe/metoda-profitway.png')}
      />
      <ThemedText type='defaultSemiBold' style={{paddingTop: 20}}>Poate încă nu realizezi, dar în momentul de față ai acces la o oportunitate reală de a construi un business online care poate genera 10.000-20.000 RON sau mai mult, în fiecare lună, lucrând doar 1 până la 3 ore pe zi.</ThemedText>
      <ThemedText type='defaultSemiBold'>Tot ce ai nevoie este un plan clar, bine structurat, și să urmezi fiecare pas în ordinea corectă.</ThemedText>
      <ThemedText type='defaultSemiBold'>Problema este că mulți oameni nu știu de unde să înceapă sau ce să facă exact. Intră în tot felul de proiecte fără direcție și ajung să piardă timp și bani, ca mai apoi să creadă că „nimic nu merge”.</ThemedText>
      <ThemedText type='defaultSemiBold'>Noi, însă, am pus la punct un sistem concret, bazat pe experiența noastră practică, testat și optimizat în ultimii 5 ani.</ThemedText>
      
      <View style={{gap: 8}}>
        <ThemedText type='title' style={{paddingTop: 20}}>Cine te ghidează în</ThemedText>
        <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>construirea unei afaceri</ThemedText>
        <ThemedText type='subtitle'>profitabile pe eMAG:</ThemedText>
      </View>

      <ThemedText type='title'>Numele meu este <Text style={{color: Colors.dark.tint}}>Cristian Dobai</Text></ThemedText>
      <ThemedText type='subtitle'>și mai jos iți voi prezenta povestea mea care a început din nevoia de a avea mai mult.</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.33,
        }}
        source={require('@/assets/images/programe/cristi.jpeg')}
      />

      <ThemedText type='subtitle' style={{paddingTop: 20}}>Totul a început pentru mine într-un moment aparent banal.</ThemedText>
      <ThemedText>Nu a fost o criză, nu a fost un dezastru, dar a fost o nevoie interioară care nu-mi mai dădea pace: <Bold>voiam mai mult.</Bold></ThemedText>
      <ThemedText type='defaultSemiBold'>Mai mult control, mai mult sens, mai multă libertate.</ThemedText>
      <ThemedText>Simțeam că, oricât de mult m-aș fi implicat în proiectele altora, ceva lipsea.</ThemedText>
      <ThemedText type='defaultSemiBold'>Construiam, dar nu era al meu…</ThemedText>
      <ThemedText>Munceam, dar <Bold>nu aveam libertatea de a spune „stop”</Bold> când conta cel mai mult. Așa am început să caut altceva. O direcție nouă. O soluție reală.</ThemedText>
      <ThemedText>Și am descoperit-o exact acolo unde nu mă așteptam: în vânzările online. Mai exact, în eMAG Marketplace.</ThemedText>
      <ThemedText>La început, nu aveam propriul business. Am fost implicat într-un proiect alături de câțiva antreprenori care își doreau să vândă pe eMAG. Ei aveau ideea și curajul, eu veneam cu organizarea, cu strategia, cu implicarea totală.</ThemedText>
      <ThemedText>Am fost acolo din prima zi, când a sosit primul palet de marfă, până la primele comenzi, până la primele analize, primele lecții învățate din greșeli. Am văzut, în timp real, cum o idee prinde viață și se transformă în vânzări.</ThemedText>
      <ThemedText>Atunci am înțeles ceva important: că acest model de business chiar funcționează. Că dacă aplici metodele corecte, dacă ai răbdare, disciplină și curaj, rezultatele nu doar că vin… <Bold>dar pot fi spectaculoase.</Bold></ThemedText>

      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.33,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/cristi-2.jpeg')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>Așa am descoperit potențialul vânzărilor online. Mai exact: eMAG Marketplace</ThemedText>
      <ThemedText>Acel proiect nu a fost un simplu punct de plecare. <Bold>A fost scânteia care m-a împins să ajut și alte afaceri să prindă viață.</Bold></ThemedText>
      <ThemedText>Am început să colaborez cu antreprenori din diferite domenii. În scurt timp, ajunsesem să sprijin peste 8 businessuri să se lanseze pe eMAG, fiecare cu specificul lui, fiecare cu provocări proprii.</ThemedText>
      <ThemedText>Dar în toate, rolul meu era același: să construiesc totul de la zero.</ThemedText>
      <ThemedText>De la căutarea furnizorilor potriviți, la listarea produselor, stabilirea politicilor de preț, până la raportările finale către contabilitate.</ThemedText>
      <ThemedText type='defaultSemiBold'>Practic, am creat sisteme complete de funcționare, pe care le-am adaptat fiecărui business în parte.</ThemedText>
      <ThemedText>Nu doar idei sau sfaturi, ci implementare, execuție, rezultate.</ThemedText>
      <ThemedText>Odată ce am prins încredere în acest sistem, mi-am spus: <Bold>De ce să nu aplic aceleași principii și pentru mine?</Bold></ThemedText>
      <ThemedText>Așa mi-am deschis propriul business pe eMAG, pe care l-am crescut în paralel cu celelalte proiecte. A fost o perioadă intensă, dar una care mi-a adus o lecție esențială: <Bold>că vânzările online pot fi nu doar o sursă de venit, ci o poartă către un alt mod de viață.</Bold></ThemedText>
      <ThemedText>Am învățat să îmi organizez timpul. Să automatizez. Să gândesc strategic.</ThemedText>
      <ThemedText type='defaultSemiBold'>Am câștigat nu doar bani, ci libertate.</ThemedText>
      <ThemedText type='defaultSemiBold'>Libertatea de a spune „da” timpului cu persoanele importante din viața mea.</ThemedText>
      <ThemedText>De a fi prezent acolo unde contează cu adevărat. De a nu depinde de un program fix sau de un birou.</ThemedText>
      <Image 
        style={[styles.image, { marginTop: 20}]}
        source={require('@/assets/images/programe/7.png')}
      />
      
      <ThemedText type='title' style={{paddingTop: 20}}>În fiecare zi, milioane de români caută și cumpără produse pe eMAG</ThemedText>
      <ThemedText>
        E o oportunitate imensă, și este deschisă pentru oricine are curajul să înceapă. Platforma eMAG nu e doar un marketplace.
      </ThemedText>

      <ThemedText type='defaultSemiBold'>
        Este o rampă de lansare pentru cei care vor mai mult de la viața lor.
      </ThemedText>

      <ThemedText>
        Știu că mulți oameni cred că succesul în vânzările online vine doar după ani de muncă și încercări. Adevărul e că nu ai nevoie de ani. <Bold>Ai nevoie de claritate, de un sistem care funcționează și de acțiune susținută.</Bold>
      </ThemedText>

      <ThemedText>
        Rezultatele pot apărea rapid, dacă faci pașii corecți de la început. Am văzut asta de prea multe ori ca să mai fie o coincidență.
      </ThemedText>

      <ThemedText>
        Astăzi, fac parte din programul ProfitWay: <Bold>Afacere la Cheie pe eMAG tocmai pentru că știu cât de mult poate conta sprijinul potrivit la început de drum.</Bold>
      </ThemedText>

      <ThemedText>
        Ce ofer nu e teorie. Nu sunt promisiuni.
      </ThemedText>

      <ThemedText type='defaultSemiBold'>
        Sunt metode testate, sisteme clare, rezultate concrete.
      </ThemedText>

      <ThemedText>
        Și, mai presus de toate, este experiență reală, <Bold>de la om la om.</Bold>
      </ThemedText>

      <ThemedText type='title' style={{paddingTop: 20}}>Mai jos iți voi prezenta tot procesul prin care vom trece, că să</ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint }}>deschidem afacerea ta la cheie pe eMAG.</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint, textDecorationLine: 'underline'}}>Primul pas:</ThemedText>
      <ThemedText type='title'>Identificarea produselor remorcă (produsele care la început vor tracta și vor lansa țoată afacerea)</ThemedText>
      <ThemedText type='defaultSemiBold'>Alegerea produselor potrivite este de fapt fundația unui business de succes pe eMAG.</ThemedText>
      <ThemedText>Unul dintre cei mai critici pași în lansarea unei afaceri profitabile pe eMAG este selecția produselor.</ThemedText>
      <ThemedText>De asta depinde nu doar cum începi, ci și cât de departe poți ajunge.</ThemedText>
      <ThemedText><Bold>Greșeala pe care o fac mulți este să aleagă produse doar pe baza intuiției sau a preferințelor personale.</Bold> Dar realitatea este că succesul nu vine din „ce îți place ție”, ci din ce caută și cumpără clienții,  constant.</ThemedText>
      <ThemedText type='defaultSemiBold'>Ca să poți construi un business sustenabil și scalabil, trebuie să urmezi o strategie clară:</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*0.59
        }}
        source={require('@/assets/images/programe/Emag-5.jpeg')}
      />

      <ThemedText type='subtitle' style={{paddingTop: 20}}>Să alegi produse cu cerere stabilă</ThemedText>
      <ThemedText type='subtitle' style={{color: Colors.dark.tint}}>cu o concurență gestionabilă,</ThemedText>
      <ThemedText type='title'>și mai ales, cu marje de profit sănătoase.</ThemedText>
      <ThemedText>Pentru asta, e esențial să știi unde și cum să cauți. Iar dacă vrei să obții cele mai bune prețuri de achiziție, <Bold>colaborarea directă cu producători din China, Turcia sau Asia este, de cele mai multe ori, soluția ideală.</Bold></ThemedText>
      <ThemedText>Știu că poate părea complicat la început, dar nu-ți face griji,</ThemedText>
      <ThemedText type='defaultSemiBold'>îți vom arăta exact fiecare pas, de la selecția produselor până la identificarea furnizorilor potriviți și negocierea eficientă.</ThemedText>
      <ThemedText>Totul este parte din procesul pe care îl vei parcurge împreună cu noi, în cadrul cursului.</ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Ce vei învăța concret alături de noi:</ThemedText>
      {
        topics.map((item, index: number) => (
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
          height: (WIDTH - 40)*0.86,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag-6.jpeg')}
      />
      <ThemedText type='title' style={{ textDecorationLine: 'underline', paddingTop: 20, color: Colors.dark.tint }}>Pasul al doilea:</ThemedText>
      <ThemedText type='title'>REGLEMENTAREA PARȚII LEGALE</ThemedText>
      <ThemedText>Știm că pentru mulți, partea juridică poate părea complicată, <Bold>mai ales dacă nu ai mai avut o firmă până acum și nu ești familiarizat cu procesul.</Bold></ThemedText>
      <ThemedText>Tocmai de aceea, imediat ce ai ales produsele potrivite, te vom ghida pas cu pas prin tot ce ține de partea legală, astfel încât să îți poți pune afacerea pe picioare și să fii pregătit să vinzi pe eMAG fără bătăi de cap.</ThemedText>
      <ThemedText><Bold>Îți explicăm totul clar, pe înțelesul tău, de la alegerea formei juridice potrivite,</Bold> până la înregistrările necesare și pașii obligatorii pentru a putea începe activitatea legal.</ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Ce vei învăța despre partea administrativă și legală a afacerii:</ThemedText>

      {
        setupSteps.map((item, index: number) => (
          <CheckLine 
            text={item.title}
            content={item.content}
            key={index}
            type={'check'}
          />
        ))
      }

      <ThemedText type='title' style={{paddingTop: 20, textDecorationLine: 'underline', color: Colors.dark.tint}}>Pasul al 3 lea</ThemedText>
      <ThemedText type='title'>Găsirea Furnizorilor potriviți:</ThemedText>
      <ThemedText>Așa cum am menționat anterior, în comerț, <Bold>prețul de achiziție al produselor joacă un rol esențial în determinarea profitului final.</Bold></ThemedText>
      <ThemedText>De aceea, ne-am propus să îți oferim o imagine clară și completă asupra întregului proces, explicat pas cu pas, astfel încât să știi exact ce ai de făcut pentru a obține cele mai bune condiții.</ThemedText>
      <ThemedText type='subtitle'>Concret, ce vei învăța despre relația cu furnizorii:</ThemedText>

      {
        supplierGuide.map((item, index: number) => (
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
          height: (WIDTH - 40)*1.26,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag-1.jpeg')}
      />
      <ThemedText type='title' style={{color: Colors.dark.tint, textDecorationLine: 'underline', paddingTop: 20 }}>Pasul al 4 lea</ThemedText>
      <ThemedText type='title'>ADUCEREA PRODUSELOR ÎN ȚARĂ</ThemedText>
      <ThemedText style={{paddingTop: 20}}>După ce ai încheiat cu succes achiziția produselor, urmează o etapă care, de cele mai multe ori, provoacă teamă,  aducerea acestora în România.</ThemedText>
      <ThemedText>Colaborarea cu autoritățile vamale poate părea complicată, mai ales dacă este prima dată când treci prin acest proces și nu cunoști toți pașii care trebuie urmați.</ThemedText>
      <ThemedText>Tocmai de aceea, punem un accent deosebit pe această parte, <Bold>pentru a ne asigura că totul decurge fără probleme și că nu te vei confrunta cu obstacole neașteptate.</Bold></ThemedText>
      <ThemedText type='title'>Iată ce vei învăța concret în cadrul acestui curs, ca să poți importa fără stres și fără surprize:</ThemedText>
      
      {
        importLogistics.map((item, index: number) => (
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
          height: (WIDTH - 40)*1,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag10.jpeg')}
      />

      <ThemedText type='title' style={{paddingTop: 20, color: Colors.dark.tint, textDecorationLine: 'underline'}}>Pasul al 5 lea</ThemedText>
      <ThemedText type='title' >Primul pas spre vânzări de succes pe eMAG începe cu un cont setat corect.</ThemedText>
      <ThemedText>Înainte ca produsele tale să ajungă pe rafturile virtuale ale eMAG, e esențial să ai un cont configurat corect, astfel încât totul să fie pregătit pentru lansarea vânzărilor. <Bold>Nu e complicat, dar sunt câteva detalii tehnice care fac diferența.</Bold></ThemedText>
      <ThemedText type='title' style={{paddingTop: 20}}>Îți arătăm pas cu pas cum să-ți setezi contul eMAG Marketplace ca un profesionist:</ThemedText>
      
      {
        emagSetup.map((item, index: number) => (
          <CheckLine 
            text={item.title}
            content={item.content}
            key={index}
            type={'check'}
          />
        ))
      }

      <ThemedText type='title' style={{paddingTop: 20, color: Colors.dark.tint, textDecorationLine: 'underline'}}>Pasul al 6 lea</ThemedText>
      <ThemedText type='title'>Listarea corectă a produselor pe eMAG este cheia pentru vânzări rapide și consistente.</ThemedText>
      <ThemedText>Nu e suficient să ai produse excelente, dacă nu le prezinți cum trebuie, riști să rămână invizibile pentru clienți. În acest curs, îți arătăm cum să listezi produsele ca un adevărat profesionist, astfel încât să atragă atenția și să se vândă de la început.</ThemedText>
      <ThemedText type='title'>Ce înveți concret:</ThemedText>
      {
        productListing.map((item, index: number) => (
          <CheckLine 
            text={item.title}
            content={item.content}
            key={index}
            type={'check'}
          />
        ))
      }
      <ThemedText type='title' style={{paddingTop: 20, color: Colors.dark.tint, textDecorationLine: 'underline'}}>Pasul al 7 lea</ThemedText>
      <ThemedText type='title'>Vrei ca produsele tale să fie în top pe eMAG? Totul începe cu optimizarea listărilor.</ThemedText>
      <ThemedText>Ești hotărât să ai cele mai bune produse din nișa ta? Perfect, pentru că și noi ne dorim același lucru. În acest modul te învățăm exact cum să-ți optimizezi listările astfel încât să atragă mai mult trafic, să convertească mai bine și să se mențină în fața concurenței.</ThemedText>
      <ThemedText type='title'>Îți arătăm, pas cu pas, cum să-ți transformi produsele în alegeri preferate pentru clienți:</ThemedText>

      {
        listingOptimization.map((item, index: number) => (
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
          height: (WIDTH - 40)*1,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag10.jpeg')}
      />

      <ThemedText type='title' style={{paddingTop: 20, color: Colors.dark.tint, textDecorationLine: 'underline'}}>Pasul al 8 lea</ThemedText>
      <ThemedText type='title'>Vrei mai mult decât</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>10.000-15.000 lei lunar?</ThemedText>
      <ThemedText type='title'>Atunci e timpul să te extinzi.</ThemedText>
      <ThemedText>Modelul de business pe care îl construiești nu este doar scalabil, este creat exact pentru creștere rapidă și sustenabilă. Obiectivul nostru nu e doar să ajungi la 10.000 – 15.000 de lei pe lună, <Bold>ci să construiești o afacere care poate genera sute de mii sau chiar milioane.</Bold></ThemedText>
      <ThemedText type='title'>Cum faci asta? Prin extindere pe alte marketplace-uri și pe piețe internaționale. Iar noi îți arătăm exact cum:</ThemedText>
      {
        expansionModule.map((item, index: number) => (
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
          height: (WIDTH - 40)*0.86,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag-6.jpeg')}
      />
      <ThemedText type='title' style={{paddingTop: 20}}>Cum poți genera între</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>120.000 și 300.000 lei</ThemedText>
      <ThemedText type='title'>chiar din primul an de activitate? Îți arătăm noi.</ThemedText>
      <ThemedText>Nu vorbim despre scenarii exagerate sau promisiuni deșarte. <Bold>Această estimare reflectă un parcurs realist, pe care oricine îl poate atinge urmând pașii corecți.</Bold></ThemedText>
      <ThemedText>În cadrul cursului, îți explicăm clar cum ajungi la aceste sume și cum se structurează o strategie eficientă de produs:</ThemedText>
      <ThemedText type='defaultSemiBold'>Îți prezentăm cele 3 tipuri de produse pe care le vei vinde:</ThemedText>
      {
        productTypes.map((item, index: number) => (
          <CheckLine 
            text={item}
            key={index}
            type={'check'}
          />
        ))
      }
      <ThemedText>Îți arătăm cum arată un portofoliu echilibrat de produse, cu exemple concrete. Chiar dacă nu toate vor fi best-seller-uri, combinația potrivită îți poate aduce cifre semnificative.</ThemedText>
      <ThemedText type='defaultSemiBold'>Vei învăța cum să alegi produsele care se vând, cum să le lansezi și cum să le scalezi, astfel încât să ajungi la venituri de 5 cifre lunar, fără investiții uriașe și fără experiență anterioară în e-commerce.</ThemedText>
      <ThemedText>În acest curs nu doar visezi la cifre mari, înveți exact cum să le atingi.</ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1.96,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag-3.jpeg')}
      />
      <ThemedText type='title' style={{paddingTop: 20}}>Transformă-ți visul de a avea propria afacere într-o realitate profitabilă, direct pe eMAG Marketplace.</ThemedText>
      <ThemedText>În acest curs complet, îți arătăm pas cu pas cum să construiești un business solid pe cea mai mare platformă de e-commerce din România. De la alegerea produselor potrivite, până la extinderea internațională, ai tot ce-ți trebuie pentru a genera venituri de peste 10.000 lei lunar și pentru a deveni propriul tău șef.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 1: Alegerea produselor câștigătoare, înveți cum identifici ce se vinde și ce merită listat.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 2: Aspectele legale puse la punct – îți arătăm cum îți formezi cadrul legal fără complicații.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 3: Găsirea furnizorilor potriviți – descoperi cum negociezi, cum alegi și cum eviți greșelile costisitoare.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 4: Importul fără stres în România – înveți exact cum gestionezi vama, taxele și transportul.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 5: Setarea contului pe eMAG – îți arătăm cum îți configurezi contul pentru a vinde rapid și eficient.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 6: Listarea produselor ca un profesionist – afli cum să creezi anunțuri care vând.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 7: Optimizarea continuă a listărilor – înveți cum să crești vizibilitatea și conversiile.</ThemedText>
      <ThemedText type='defaultSemiBold'>Pasul 8: Extinderea pe alte marketplace-uri și piețe internaționale – pentru cei care gândesc pe termen lung și vor să scaleze serios.</ThemedText>
      <ThemedText>Cu alte cuvinte, înveți cum să-ți creezi un business care lucrează pentru tine, nu invers. <Bold>Libertatea financiară nu mai e doar un vis. Cu know-how-ul potrivit, devine o alegere.</Bold></ThemedText>
      <Image 
        style={{
          borderRadius: 4,
          width: WIDTH - 40,
          height: (WIDTH - 40)*1,
          marginTop: 20
        }}
        source={require('@/assets/images/programe/Emag10.jpeg')}
      />

      <ThemedText type='title' style={{paddingTop: 20}}>E momentul să faci primul pas spre</ThemedText>
      <ThemedText type='title' style={{color: Colors.dark.tint}}>independența ta financiară.</ThemedText>
      <ThemedText type='title'>Vrei să construiești un business care îți poate aduce între 120.000 și 300.000 de lei încă din primul an?</ThemedText>
      <ThemedText type='defaultSemiBold'>Noi te ghidăm pas cu pas să implementezi acest model și să începi să vinzi cu succes.</ThemedText>
      <ThemedText type='defaultSemiBold'>Programează acum o sesiune gratuită de consultanță, discutăm deschis despre obiectivele tale, îți răspundem la întrebări și îți arătăm dacă acest model este potrivit pentru tine.</ThemedText>

      <TouchableOpacity
        onPress={() => router.push('/Form?source=emag-top-seller')}
        style={{ width: '100%', marginTop: 'auto', paddingTop: 20 }} 
      >
          <Button
            text='Programează acum o ședință de consultanță gratuită'
          />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default EmagTopSeller

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 80
  },
  image: {
    borderRadius: 4,
    width: WIDTH - 40,
    height: (WIDTH - 40)*1
  }
})