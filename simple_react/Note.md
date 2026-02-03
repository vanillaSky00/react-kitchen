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