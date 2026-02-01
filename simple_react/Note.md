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