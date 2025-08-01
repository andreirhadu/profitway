import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/AuthContext'
import Entypo from '@expo/vector-icons/Entypo'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

const Profile = () => {
  const { user, signout } = useAuth()

  const deleteAccount = () => {
    Alert.alert(
      'Confirmare',
      'Ești sigur că vrei să îți ștergi contul? Această acțiune este ireversibilă.',
      [
        {
          text: 'Nu',
          style: 'cancel',
        },
        {
          text: 'Da, șterge',
          style: 'destructive',
          onPress: () => {
            signout()
          },
        },
      ]
    )
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require('@/assets/images/logo-freeway.png')}
        style={{
          width: 128,
          height: 128,
          marginBottom: 32,
          alignSelf: 'center'
        }}
      />
      <ThemedText type='title' textAlign='left' >Bine ai venit{user ? `, ${user.first_name}` : ''}!</ThemedText>

      {
        !user ?
        <TouchableOpacity
          onPress={() => router.push('/AuthentificationStack/Login')}
          style={{ width: '100%', marginVertical: 24 }} 
        >
          <Button
            text='Intră în cont'
          />
        </TouchableOpacity> :
        <TouchableOpacity
          onPress={() => signout() }
          style={{ width: '100%', marginVertical: 24 }} 
        >
          <Button
            text='Ieși din cont'
          />
        </TouchableOpacity> 
      }

      { user &&
        <>
          <ThemedText type='subtitle' textAlign='left'>Setări cont</ThemedText>
          <View style={{marginTop: 12, marginBottom: 24, gap:6}}>
            <TouchableOpacity 
              style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
              onPress={() => router.push('/PersonalInformations')}
            >
              <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Informații personale</ThemedText>
              <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
              onPress={() => router.push('/ChangePassword')}
            >
              <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Schimbă parola</ThemedText>
              <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
            </TouchableOpacity>
          </View>
        </>        
      }

      <ThemedText type='subtitle' textAlign='left'>Social Media</ThemedText>
      <View style={{marginTop: 12, marginBottom: 24, gap:6}}>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/profitwayromania/') } 
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Instagram</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/profile.php?id=61564071203111') } 
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Facebook</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://www.tiktok.com/@profitwayacademie') } 
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>TikTok</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://www.youtube.com/channel/UCpmXg-rGy0il1hATFF1uiKA') } 
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Youtube</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
      </View>

      <ThemedText type='subtitle' textAlign='left'>Suport clienți</ThemedText>
      <View style={{marginTop: 12, marginBottom: 24, gap:6}}>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/contact/')}
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Contact</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/termeni-si-conditii/')}
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Termeni și condiții</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/politica-de-livrare/')}
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Politica de livrare</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/politica-de-returnare/')}
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Politica de returnare</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/declinarea-responsabilitatii/')}
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>Declinarea responsabilității</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
          onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/gdpr/')}
        >
          <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18}}>GDPR</ThemedText>
          <Entypo name={`chevron-small-right`} size={24} color={Colors.dark.infoText} />
        </TouchableOpacity>
      </View>

      { user && 
        <>
          <ThemedText type='subtitle' textAlign='left'>Șterge contul</ThemedText>
          <TouchableOpacity 
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12}}
            onPress={deleteAccount}
          >
            <ThemedText type='defaultSemiBold' textAlign='left' style={{fontSize: 18, color: 'red'}}>Șterge contul</ThemedText>
            <Entypo name={`chevron-small-right`} size={24} color='red' />
          </TouchableOpacity>
        </>
      }
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 120,
    marginTop: 80
  }
})