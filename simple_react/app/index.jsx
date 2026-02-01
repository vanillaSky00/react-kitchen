import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Logo from '../assets/favicon.png'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'


const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedLogo style={styles.img}/>
      <Text style={styles.title}>The Number 1</Text>

      <Spacer height={10}/>
      <Text>Reading List App</Text>
      <Spacer />
        <View style={styles.card}>
            <Text >Hello, this is a card.</Text>
        </View>
    
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    img: {
        marginVertical: 20
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})