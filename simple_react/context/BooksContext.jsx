import { createContext, useEffect, useState  } from "react"
import { client, databases } from "../lib/appwrite"
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
      const response = await databases.getRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: id,
      })

      return response
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
      
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteBook(id) {
    try {
      const response = await databases.deleteRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: id,
      })
        
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    let unsubscribe 
    const channel = `databases.${DATABASE_ID}.tables.${TABLE_ID}.rows`

    if (user) {
      fetchBooks()
      
      unsubscribe = client.subscribe(channel, (response) => {
        // Callback will be executed on changes for all files.
        const { payload, events } = response
        console.log(events)

        if (events.some(e => e.includes("create"))) {
          setBooks((prevBooks) => [...prevBooks, payload])
        }
        // Further real-time and multi-device sync logic should be put here
        if (events.some(e => e.includes("delete"))) {
          setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id))
        }
      })
      
    }
    else {
      setBooks([])
    }

    return () => {
      if (unsubscribe) unsubscribe()
    }

  }, [user]) // When login fetch books, logut empty the book array

  return (
    <BooksContext.Provider 
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}