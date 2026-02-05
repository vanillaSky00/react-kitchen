import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/guestOnly'

export default function AuthLayout() {

    const { user } = useUser()
    console.log(user)
    
    return (
      <GuestOnly>
        <StatusBar style='auto'/>
        <Stack screenOptions={{ headerShown: true, animation: "none"}}
        /> 
      </GuestOnly>
    )
}