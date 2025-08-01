import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import { useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const PersonalInformations = () => { 
  const { user, token, setUser } = useAuth()
  const [email, setEmail] = useState(user.email || '')
  const [firstName, setFirstName] = useState(user.first_name || '')
  const [lastName, setLastName] = useState(user.last_name || '')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [succesMessage, setSuccesMessage] = useState<string | null>(null)

  const changeInfo = async () => {
    setLoading(true)
    setErrorMessage(null)
    setSuccesMessage(null)

    if (firstName === '') {
      setErrorMessage("First Name field shouldn't be empty")
      setLoading(false)
      return
    }

    if (lastName === '') {
      setErrorMessage("Last Name field shouldn't be empty")
      setLoading(false)
      return
    }

    if (!email.includes('@') && !email.includes('.')) {
      setErrorMessage('Enter a valid email.')
      setLoading(false)
      return
    }
    
    try {
      const response = await axios.put(
        `https://profitway.ro/wp-json/wp/v2/users/${user.id}`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      
      setSuccesMessage('Datele au fost actualizate.')

      setUser({
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        email: email
      })
    } catch (error: any) {
      console.log(error?.response?.data)
      setErrorMessage('Eroare la actualizarea datelor.')
    }

    setLoading(false)
  }
  

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>    
      <Text style={styles.subtitle}>Prenume</Text>   
      <TextInput
        placeholder='First Name' 
        placeholderTextColor={Colors.dark.disabledText} 
        style={styles.input} 
        onChangeText={text => setFirstName(text) } 
        autoCapitalize={'words'} 
        value={firstName}
      />

      <Text style={styles.subtitle}>Nume</Text>   
      <TextInput
        placeholder='Last Name'
        placeholderTextColor={Colors.dark.disabledText} 
        style={styles.input} 
        onChangeText={text => setLastName(text) } 
        autoCapitalize={'words'} 
        value={lastName}
      />

      <Text style={[styles.subtitle, {marginTop:12}]}>Email</Text>
      <TextInput
        placeholder='Email' 
        textContentType='emailAddress'
        placeholderTextColor={Colors.dark.disabledText} 
        style={[styles.input, { marginBottom:8 }]} 
        onChangeText={text => setEmail(text) } 
        autoCapitalize={'none'} 
        value={email}
      />

      { errorMessage ?
        <View style={{height:32}}>
          <Text style={{color:'red'}}>{errorMessage}</Text>
        </View> :
        <View style={{height:32}}><Text style={{color: 'transparent'}}>peco</Text></View>
      }
      
      <View style={{paddingBottom:156, width:'100%'}}>
        { loading ? 
          <ActivityIndicator /> :
          <>
            {
              succesMessage ?
              <Text style={styles.succesMessage}>{succesMessage}</Text> :
              <TouchableOpacity
                onPress={changeInfo}
                style={{ width: '100%', marginTop: 'auto', paddingBottom: 20 }} 
              >
                <Button
                  text='Schimbă informațiile personale'
                />
              </TouchableOpacity>
            } 
          </>
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex:1,
    paddingHorizontal:14,
    paddingBottom:24,
    alignItems: 'center'
  },
  card : {
    backgroundColor: Colors.dark.card,
    borderRadius: 16,
    width: '100%',
    shadowColor: 'black',
    shadowRadius: 2.5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  },
  name: {
    color: Colors.dark.infoText,
    fontSize: 18
  },
  subtitle: {
    color: Colors.dark.infoText,
    alignSelf: 'flex-start',
    fontSize: 14,
    marginTop: 24
  },
  settingTitle: {
    color: Colors.dark.text,
    fontSize: 18,
    paddingLeft:12
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  border: {
    borderBottomColor: Colors.dark.infoText,
    borderBottomWidth: 1,
  },
  input: {
    fontSize:16,
    width: '100%',
    borderBottomWidth:0.5,
    borderColor: Colors.dark.text, 
    padding:8,
    paddingHorizontal:4,
    color: Colors.dark.text
  },
  succesMessage: {
    marginTop:6,
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
  screenTitle: {
    fontWeight: '600', 
    letterSpacing: 1, 
    color: Colors.dark.text, 
    fontSize: 16
  }
})

export default PersonalInformations