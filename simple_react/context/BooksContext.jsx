import { createContext, useEffect, useState  } from "react"
import { databases } from "../lib/appwrite"
import { ID, Permission, Query, Role } from "react-native-appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = "69859ab5002fe8366cb7"
const TABLE_ID = "books"

export const BooksContext = createContext()

export function BooksProvider ({ children }) {
  const [books, setBooks] = useState([])
  const { user } = useUser()

  async function fetchBooks() {
    try {
      const response = await databases.listRows({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        queries: [
            Query.equal('userId', user.$id)
        ]
      })

      setBooks(response.rows)
      console.log(response.rows)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function fetchBookById(id) {
    try {
        
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createBook(data) {
    if (!user) return

    try {
      const response = await databases.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          ...data, 
          userId: user.$id
        },// appwrite attached to the user
        permissions: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id))
        ]
      })
      // setBooks((prev) => [response, ...prev])
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteBook() {
    try {
        
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    
    if (user) {
      fetchBooks()
    }
    else {
      setBooks([])
    }
  }, [user]) // when login fetch books, logut empty the book array

  return (
    <BooksContext.Provider 
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}