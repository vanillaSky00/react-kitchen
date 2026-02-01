import { StyleSheet } from 'react-native'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'


const login = () => {
  return (
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>

      <Spacer height={100}/>
      <Link href='/login'>
        <ThemedText style={{ textAlign: 'center' }}>
            Login instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    }
})