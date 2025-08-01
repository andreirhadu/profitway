import Button from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { api_key } from '@/constants/config'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import { useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const ChangePassword = () => {
  const { user } = useAuth()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChangePassword = async () => {
    setErrorMessage(null)
    setSuccessMessage(null)

    if ( !newPassword || !confirmPassword) {
      setErrorMessage('Completează toate câmpurile.')
      return
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Parolele noi nu coincid.')
      return
    }

    if (newPassword.length < 6) {
      setErrorMessage('Parola trebuie să aibă cel puțin 6 caractere.')
      return
    }

    setLoading(true)

    try {
      await axios.post(
        `https://profitway.ro/wp-json/wp/v2/users/${user.id}`,
        {
          password: newPassword
        },
        {
          headers: {
            Authorization: `Basic ${api_key}`,
            'Content-Type': 'application/json'
          }
        }
      )

      setSuccessMessage('Parola a fost schimbată cu succes.')
      setNewPassword('')
      setConfirmPassword('')
    } catch (error: any) {
      console.log(error?.response?.data)
      setErrorMessage(error?.response?.data?.message || 'Eroare la schimbarea parolei.')
    }

    setLoading(false)
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* <Text style={styles.subtitle}>Parola curentă</Text>
      <TextInput
        placeholder='Parola actuală'
        placeholderTextColor={Colors.dark.disabledText}
        style={styles.input}
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      /> */}

      <Text style={styles.subtitle}>Parola nouă</Text>
      <TextInput
        placeholder='Parola nouă'
        placeholderTextColor={Colors.dark.disabledText}
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Text style={styles.subtitle}>Confirmă parola nouă</Text>
      <TextInput
        placeholder='Confirmă parola nouă'
        placeholderTextColor={Colors.dark.disabledText}
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
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
          <>
            {successMessage ? (
              <Text style={styles.successMessage}>{successMessage}</Text>
            ) : (
              <TouchableOpacity
                onPress={handleChangePassword}
                style={{ width: '100%', marginTop: 'auto', paddingBottom: 20 }}
              >
                <Button text='Schimbă parola' />
              </TouchableOpacity>
            )}
          </>
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
  subtitle: {
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
  },
  successMessage: {
    marginTop: 6,
    color: 'green',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default ChangePassword
