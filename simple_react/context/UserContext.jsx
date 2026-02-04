import { createContext, useState } from "react"
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password) // but this does not automatically log-in after register
      await login(email, password) // after create, login
    } catch (error) {
      console.log(error)
    }
  }

  async function logout() {
    
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}