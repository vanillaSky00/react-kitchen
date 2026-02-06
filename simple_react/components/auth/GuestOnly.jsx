import { useRouter } from "expo-router"
import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"

import ThemedLoader from '../../components/ThemedLoader'
import ThemedView from "../ThemedView"

const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/profile')
        }
    }, [user, authChecked])

    if (!authChecked || user) {
        return (
          <ThemedView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ThemedLoader />
          </ThemedView>
        )
    }

    return children
}

export default GuestOnly