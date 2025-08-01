import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/AuthContext'
import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Register = () => {
  const { registerWithCredentials } = useAuth()
  const scrollRef = useRef<ScrollView>(null)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [acceptsMarketing, setAcceptsMarketing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSignUp = async () => {
    setLoading(true)
    setErrorMessage(null)

    if (verifyPassword !== password) {
      setErrorMessage('Please make sure that passwords match. Try again.')
      setLoading(false)
      return
    }

    try {
      await registerWithCredentials(firstName, lastName, email, password, acceptsMarketing)
      router.back()
    } catch (error: any) {
      if ( typeof error.message === 'string' ) {
        setErrorMessage(error.message)
      }
    }

    setLoading(false)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
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
            <View style={{height:32, justifyContent: 'flex-end'}}>
              <Text style={{color:'red'}}>{errorMessage}</Text>
            </View> :
            <View style={{height:32}}><Text style={{color:'transparent'}}>peco</Text></View>
          }

          <TextInput 
            placeholder='Prenume'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='default'
            style={[styles.input, {marginTop: 0}]}
            onChangeText={(text: string) => setFirstName(text)}
            autoCapitalize='words'
            value={firstName}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 280, animated: true})}
          />
          <TextInput 
            placeholder='Nume'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='default'
            style={styles.input}
            onChangeText={(text: string) => setLastName(text)}
            autoCapitalize='words'
            value={lastName}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 280, animated: true})}
          />
          <TextInput 
            placeholder='Email'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='email-address'
            style={styles.input}
            onChangeText={(text: string) => setEmail(text)}
            autoCapitalize='none'
            value={email}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 280, animated: true})}
          />
          <TextInput 
            placeholder='Parolă'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='default'
            style={styles.input}
            onChangeText={(text: string) => setPassword(text)}
            autoCapitalize='none'
            value={password}
            secureTextEntry={true}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 280, animated: true})}
          />
          <TextInput 
            placeholder='Confirmare parolă'
            placeholderTextColor={Colors.dark.disabledText}
            keyboardType='default'
            style={[styles.input, {marginBottom: 16}]}
            onChangeText={(text: string) => setVerifyPassword(text)}
            autoCapitalize='none'
            value={verifyPassword}
            secureTextEntry={true}
            onFocus={() => Platform.OS === 'android' && scrollRef.current!.scrollTo({y: 280, animated: true})}
          />
          <View style={styles.acceptsMarketingContainer}>
            <Switch 
              onValueChange={value => setAcceptsMarketing(value)}
              value={acceptsMarketing}
              
            />
            <Text style={styles.acceptsMarketingText}>Înscrie-te la newsletter-ul nostru</Text>
          </View>

          { loading ? 
            <ActivityIndicator /> :
            <TouchableOpacity
              onPress={onSignUp}
              style={{width: '75%'}}
            >
              <Button
                text='Înregistrează-te'
              />
            </TouchableOpacity>
          }

          <Text style={{marginVertical: 24, color: Colors.dark.infoText}}>
            Ai deja cont?
            <Text 
              style={{color: Colors.dark.tint, fontWeight:'500', marginLeft:4}} 
              onPress={() => { router.push('/AuthentificationStack/Login')} }
            >
              {' '}Intră în cont
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 52,
  },
  text: {
    color: Colors.dark.text
  },
  acceptsMarketingText: {
    color: Colors.dark.text,
    letterSpacing: 0.8,
    marginLeft: 8
  },
  image: {
    width:90,
    height: 90,
  },
  acceptsMarketingContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 24, 
    width: '75%'
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
})