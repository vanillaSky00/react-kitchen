https://docs.expo.dev/tutorial/create-your-first-app/


Fix bug:
```
expo Unable to run simctl: Error: xcrun simctl help exited with non-zero code: 72
```
https://stackoverflow.com/questions/74128227/error-he0046-failed-to-install-the-app-simctl-returned-exit-code-72


use snippet
ES7+ React/Redux/React-Native snippets (author: dsznajder)

install expo router
navigation -> file-based routing-> install dependencies
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

update the entry point
edit app.json
```
"scheme": "simple_react" // simple_react://
```
edit package.json
```
"main": "expo-router/entry"
```

view is like div to wrapper many component
flexbox about view?

native wind?

we can define css property in container

link is like anchor in web and is not coming from react native, is from expo router pakcage

what is _layout.jsx

Slot
Stack

if the stack need flexibility like custom management of stack h then it can be opening 
```
<Stack>
    <Stack.Screen />
</Stack>
```




restart
```
lsof -i :8081
kill <pid>
```

make the opening tag closing
```
const ThemeView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{
      backgroundColor: theme.background}, style]}
      {...props}
    >
    {children}
    </View>
  )
}
```
and the self-closing would make react render its children automatically
```
const ThemeView = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{
      backgroundColor: theme.background}, style]}
      {...props}
    />
  )
}
```

```
const ThemeView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{
      backgroundColor: theme.background}, style]}
      {...props}
    />
      
    
  )
}
```



becarful the overwrite
the `source={Logo}` got overwrite by Home
```
const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedLogo source={Logo} style={styles.img}/>
      ...
    </ThemedView>
  )
}
```
Where in `ThemedLogo.jsx`
```
const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme()

  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props}/>
  )
}
```

in layout we can have options
```   
<Stack> 
  <Stack.Screen name='contact' options={{ title: 'Contact', headerShown: false}}/>
</Stack> 

```


routes group is used when the project has so many pages, we have to group it

tab's navigation systems


Self-closing tag: use when having no childeren
```js
<Pressable onPress={...} />
```
<br>

Open/close tag: use when having children inside it.
```js
<Pressable onPress={...}>
  <Text>Click</Text>
</Pressable>
```


<Tag ...> = layout structure

{ ... } = “JS hole” (put JS here)

onPress={fn} = “give the tag a function”

style={obj|array|fn} = “give the tag styling”
```js
<View style={{ padding: 10 }} /> //Object
<View style={styles.box} /> //StyleSheet reference
<View style={[styles.box, isBig && styles.big]} /> // Array (merge styles)
<Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]} /> //Function (Pressable special)
```


Safe area


How to setup with appwrite:
We can do with appwrite's official start project but instead we can manually:
```
npx expo install react-native-appwrite react-native-url-polyfill
```
create a `lib/appwrite.js`
```
import { Client, Account, ID } from 'react-native-appwrite'

const client = Client()
    .setProject('697f2d67000e71817454')
    .setPlatform('dev.vanillasky.simple_react')
```

```js
//use status
```

```js
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

</TouchableWithoutFeedback>
```



react hook
https://www.youtube.com/watch?v=rysTbzKOEO0


dom virtual dom is a in-memory copy of the DOM
the manipulation of DOM is costly: traverse, update, re-render
so react update virtual DOM partially(quick in-memory based on algorithm), later it would sync with the real DOM

react use batch update algorithm to update the many stage of change copy of the virtual dom, the algprithm would amount the total change and update to the original dom based on react algorithm at a certain point

the sync called reconcillation

so this rendering strategy would not make the performance down, since we update in a frequency and also not traversing each time

diffic algorithm calculate diff

12 - ReactJS Virtual DOM - What are Virtual DOM, Reconciliation, Diffing, and Batch Update in React?
https://www.youtube.com/watch?v=rysTbzKOEO0


what is react hook
react hooks are simple function that can help to separate reusable part from a
functional components. It can be stateful and can manage side effect

why do we need it
compared to plain utils js funciton, react hooks can access to many other capability like state


what is context in react

why do we need it?