import { createContext, useState, useEffect } from "react"
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)
    } catch (error) {
      throw error
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password) // but this does not automatically log-in after register
      await login(email, password) // after create, login
    } catch (error) {
      throw error
    }
  }

  async function logout() {
    await account.deleteSession("current")
    setUser(null)
  }

  async function getInitialUserValue() {
    try {
      const response = await account.get()
      setUser(response)
    } catch (error) {
      setUser(null)
    } finally {
      setAuthChecked(true) // so this indicates the user value is valid whether null or not
                           // will be used for delay rendering later
    }
  } 
  
  // get the initial user session
  useEffect(() => {
    getInitialUserValue()
  }, [])

  return (
    <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
      {children}
    </UserContext.Provider>
  )
}