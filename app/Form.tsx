import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

const Form = () => {
  const { user } = useAuth()
  const { source } = useLocalSearchParams<{ source?: string }>()
  const [name, setName] = useState(user && user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : '')
  const [email, setEmail] = useState(user && user.email ? user.email : '')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async () => {
    setErrorMessage(null)

    if (!name || !email || !phone) {
      setErrorMessage('Completează toate câmpurile.')
      return
    }

    setLoading(true)

    try {
      const formData = new URLSearchParams()
      formData.append('name', `${name}${source ? ` (${source})` : ''}`)
      formData.append('email', email)
      formData.append('phonenumber', phone)
      formData.append('key', '9f2a45443b7c7043ece56fd4ec660996')

      await axios.post('https://trb.meficrm.com/forms/wtl/9f2a45443b7c7043ece56fd4ec660996', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      Toast.show({
        type: 'success',
        text1: 'Formularul a fost trimis cu succes!',
      })

      setName('')
      setEmail('')
      setPhone('')
      router.back()
    } catch (error) {
      console.log(error)
      setErrorMessage('A apărut o eroare. Încearcă din nou.')
    }

    setLoading(false)
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.label}>Nume și prenume</Text>
      <TextInput
        placeholder='Numele complet'
        placeholderTextColor={Colors.dark.disabledText}
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder='exemplu@email.com'
        placeholderTextColor={Colors.dark.disabledText}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <Text style={styles.label}>Telefon</Text>
      <TextInput
        placeholder='07xxxxxxxx'
        placeholderTextColor={Colors.dark.disabledText}
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType='phone-pad'
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <Text style={{ color: 'transparent' }}>placeholder</Text>
      )}

      <View style={{ paddingBottom: 156, width: '100%' }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity
            onPress={handleSubmit}
            style={{ width: '100%', marginTop: 'auto', paddingBottom: 20 }}
          >
            <Button text="Trimite formularul" />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingBottom: 24,
    alignItems: 'center'
  },
  label: {
    color: Colors.dark.infoText,
    alignSelf: 'flex-start',
    fontSize: 14,
    marginTop: 24
  },
  input: {
    fontSize: 16,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: Colors.dark.text,
    padding: 8,
    paddingHorizontal: 4,
    color: Colors.dark.text
  },
  errorMessage: {
    marginTop: 12,
    color: 'red',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default Form