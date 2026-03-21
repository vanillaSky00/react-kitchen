import { Client, Account, Avatars, TablesDB } from 'react-native-appwrite'

export const client = new Client()

client
  .setEndpoint('https://sgp.cloud.appwrite.io/v1')
  .setProject('697f2d67000e71817454')
  .setPlatform('dev.vanillasky.simple_react')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new TablesDB(client)