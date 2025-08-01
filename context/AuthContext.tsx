import axios from "axios"
import * as SecureStore from "expo-secure-store"
import React, { createContext, useContext, useEffect, useState } from "react"

type AuthContextType = {
  user: any
  token: any
  loginWithCredentials: (email: string, password: string) => Promise<unknown>
  registerWithCredentials: (firstName: string, lastName: string, email: string, password: string, acceptsMarketing: boolean) => Promise<unknown>
  signout: () => Promise<void>
  setUser: React.Dispatch<any>
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext< AuthContextType | null >(null)

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState< any >(null)
  const [token, setToken] = useState< any >(null)

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync("authToken")
      if (storedToken) {
        setToken(storedToken)
        fetchUserData(storedToken)
      }
    }

    loadToken()
  }, [])

  const fetchUserData = async (accessToken: string) => {
    try {
      const response1 = await axios.get(`https://profitway.ro/wp-json/custom/v1/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      setUser(response1.data)
    } catch {
      setToken(null)
      setUser(null)
    }
  }

  const registerWithCredentials = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    acceptsMarketing: boolean
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        // 1. Creezi userul
        await axios.post(`https://profitway.ro/wp-json/wp/v2/users`, {
          username: email,
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        }, {
          headers: {
            Authorization: `Basic ${btoa(`laurentiurazvantamas@gmail.com:93Yi mXvh DvNa wKuB Wuhb s1LO`)}}`
            // Trebuie autentificare de tip Application Passwords sau Bearer token cu un user admin
          }
        })
  
        // 2. Autentifici userul imediat după
        const loginRes = await axios.post(`https://profitway.ro/wp-json/jwt-auth/v1/token`, {
          username: email,
          password
        })
  
        const { token } = loginRes.data
  
        // 3. Obții datele userului logat
        const userRes = await axios.get(`https://profitway.ro/wp-json/custom/v1/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
  
        setUser(userRes.data)
        await SecureStore.setItemAsync("authToken", token)
        setToken(token)
  
        resolve("Creat cu succes.")
      } catch (e: any) {
        if (e?.response?.data?.message) {
          reject(e.response.data.message)
        } else {
          reject("Ceva nu a mers bine. Încearcă din nou.")
        }
      }
    })
  }
  

  const loginWithCredentials = async (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`https://profitway.ro/wp-json/jwt-auth/v1/token`, { 
          username: email, 
          password 
        })

        const response1 = await axios.get(`https://profitway.ro/wp-json/custom/v1/me`, {
          headers: {
            Authorization: `Bearer ${response.data.token}`
          }
        })

        setUser(response1.data)
        
        await SecureStore.setItemAsync("authToken", response.data.token)
        setToken(token)
        
        resolve(user)
      } catch (e: any) {
        if (e?.response?.status === 403) {
          reject('Email-ul sau parola sunt greșite.')
        }
        console.log(e)
        reject("Ceva nu a mers bine. Încearcă din nou.")
      }
    })
  }

  const signout = async () => {
    try {
      await SecureStore.deleteItemAsync("authToken") // Remove token from secure storage
      setUser(null)
      setToken(null)
    } catch (error) {
      console.log("Logout failed:", error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, token, loginWithCredentials, registerWithCredentials, signout }}> 
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}