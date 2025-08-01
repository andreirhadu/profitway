import EducationalOnline from '@/components/program/EducationalOnline'
import EmagTopSeller from '@/components/program/EmagTopSeller'
import MarketingAgency from '@/components/program/MarketingAgency'
import SalesAcademy from '@/components/program/SalesAcademy'
import WebstartPro from '@/components/program/WebstartPro'
import { programs } from '@/constants/programs'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { View } from 'react-native'

const Program = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const program = programs.find((program) => program.id === id )
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: program?.title
    })
  }, [navigation, program])

  return (
    <View>
      { program?.id === 'marketing-masterplan' &&
        <MarketingAgency 
          program={program}
        />
      }
      { program?.id === 'emag-top-seller' &&
        <EmagTopSeller />
      }
      {
        program?.id === 'webstart-pro' &&
        <WebstartPro />
      }
      {
        program?.id === 'sales-academy' &&
        <SalesAcademy />
      }
      {
        program?.id === 'educational-online' &&
        <EducationalOnline />
      }
    </View>
  )
}

export default Program