import AuthorsSection from '@/components/home/AuthorsSection'
import CoursesSection from '@/components/home/CoursesSection'
import Header from '@/components/home/Header'
import OurMissionSection from '@/components/home/OurMissionSection'
import ProgramsSection from '@/components/home/ProgramsSection'
import WebinarsSection from '@/components/home/WebinarsSection'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import WhatsappButton from '@/components/WhatsappButton'
import { View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={{height: '100%', position: 'relative'}}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Header />
      }>
        <OurMissionSection />
        <ProgramsSection />
        <AuthorsSection />
        <CoursesSection />
        <WebinarsSection />
      </ParallaxScrollView>
      <WhatsappButton />
    </View>
  )
}
