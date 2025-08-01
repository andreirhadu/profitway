import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/AuthContext'
import { router } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import { useRef, useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {
  const scrollRef = useRef<ScrollView>(null)
  const { loginWithCredentials } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>()

  const signInButton = async () => {
    setLoading(true)
    setErrorMessage(null)

    try {
      await loginWithCredentials(email, password)
      router.back()
    } catch (error: any) {
      typeof error === 'string' && setErrorMessage(error)
    }

    setLoading(false)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'} >
      <ScrollView 
        scrollEnabled={Platform.OS === 'ios' ? false : true}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        <View style={styles.container} >
          <Image
            source={require('@/assets/images/logo-freeway.png')}
            style={{
              width: 128,
              height: 128,
              marginBottom: 32,
              alignSelf: 'center'
            }}
          />

          { errorMessage ?
            <View style={{height:32}}>
              <Text style={{color:'red'}}>{errorMessage}</Text>
            </View> :
            <View style={{height:32}}><Text style={{color:'transparent'}}>peco</Text></View>
          }

          <TextInput 
            placeholder='Email'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='email-address'
            style={styles.input}
            onChangeText={(text: string) => setEmail(text)}
            autoCapitalize='none'
            value={email}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 100, animated: true})}
          />
          <TextInput 
            placeholder='Parolă'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='default'
            style={[styles.input, {marginBottom: 56}]}
            onChangeText={(text: string) => setPassword(text)}
            autoCapitalize='none'
            value={password}
            secureTextEntry={true}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 100, animated: true})}
          />

          { loading ? 
            <ActivityIndicator /> :
            <TouchableOpacity
              onPress={signInButton}
              style={{width: '75%'}}
            >
              <Button
                text='Intră în cont'
              />
            </TouchableOpacity>
          }

          <Text style={{marginTop: 24, color: Colors.dark.infoText}}>
            {`Nu ai cont?`}
            <Text 
              style={{color: Colors.dark.tint, fontWeight:'500', marginLeft:4}} 
              onPress={() => { router.push('/AuthentificationStack/Register')} }
            >
              {' '}Înregistrează-te
            </Text>
          </Text>

          <Text 
            style={{color: Colors.dark.tint, fontWeight:'500', marginLeft:4, marginTop:6, paddingBottom:24}} 
            onPress={() => WebBrowser.openBrowserAsync('https://profitway.ro/resetare-parola/') }
          >
            Ai uitat parola?
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 56
    
  },
  text: {
    color: Colors.dark.text
  },
  image: {
    width:90,
    height: 90,
    marginBottom: 48,
  },
  input: {
    marginTop:16,
    fontSize:16,
    width: '75%',
    borderBottomWidth:0.5,
    borderColor: Colors.dark.text, 
    padding:8,
    paddingHorizontal:4,
    color: Colors.dark.text
  }
}
)