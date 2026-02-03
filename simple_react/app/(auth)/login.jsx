import { StyleSheet, Text } from 'react-native'


import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import Spacer from '../../components/Spacer'
// themed components
import ThemedButton from '../../components/ThemedButton'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Login = () => {
  const handleSubmit = () => {
    console.log('register from submitted')
  }
  return (
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer height={100}/>
      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>
            Register instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 18,
      borderRadius: 6,
      marginVertical: 10
    },
    pressed: {
      opacity: 0.5
    } 
})