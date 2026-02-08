import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'


import Spacer from "../../../components/Spacer"
import ThemedText from "../../../components/ThemedText"
import ThemedView from "../../../components/ThemedView"
import ThemedCard from '../../../components/ThemedCard'
import ThemedButton from '../../../components/ThemedButton'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import ThemedLoader from '../../../components/ThemedLoader'

const BookDetails = () => {
  const { id } = useLocalSearchParams()
  const [book, setBook] = useState(null)
  const { fetchBookById } = useBooks()

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id)
      setBook(bookData)
    }

    loadBook()
  }, [id])

  // handle when load the app the book is actually null
  if (!book) {
    return (
        <ThemedView safe={true} style={styles.container}>
          <ThemedLoader />
        </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    title: {
      fontSize: 22,
      marginVertical: 10,
    },
    card: {
      margin: 20
    }
})