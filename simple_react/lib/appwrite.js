import { Client, Account, Avatars } from 'react-native-appwrite'

export const client = Client()
    .setProject('697f2d67000e71817454')
    .setPlatform('dev.vanillasky.simple_react')

export const account = Account(client)
export const avatars = Avatars(client)