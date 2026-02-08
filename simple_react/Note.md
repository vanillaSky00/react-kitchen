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





appwrite
we will encounter a situation where the backend still has an active session after the app reload but
the frontend has not, since reload cause all the variable to in context to its initial value, only use login will change,
So how do we get the currently active session backc when the application first staarts?


## protecting routes
why?, if you are not login and access dashboard, it will reroute you to login page



https://appwrite.io/blog/post/integrate-sql-nosql-vector-graph-or-any-database-into-your-appwrite-project



# JS
Arrow function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


# Appwrite
## db
https://www.youtube.com/watch?v=wBq81CAfn9M
https://appwrite.io/docs/references/cloud/client-react-native/databases
the latest version:
```
const tables = new TablesDB(client)

tables.listRows(...)
tables.getRow(...)
tables.createRow(...)
tables.updateRow(...)
tables.deleteRow(...)
```

when do we want the fetchBook run
-> as soon as the BooksProvider renders


if we add the real-time data refresh in
```react
...
async function createBook(data) {
    if (!user) return

    try {
      const response = await databases.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          ...data, 
          userId: user.$id
        },// appwrite attached to the user
        permissions: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id))
        ]
      })
      // setBooks((prev) => [response, ...prev]) // Wrong in here
    } catch (error) {
      console.log(error.message)
    }
  }
```
The side effect is
1 Multi-Device & Multi-Tab Sync
- The problem: If user has many devices, say iphone create new book, but its iPad will not update the book list UI until it click button on Ipad
- The Listener Solution: Since the listener watches the databases, every device logged int that account will receive update instantly.

2. decoupling 
the createBook() should only do its own single resposibility:
sends data to the server. So the listener approach also ensure decopling.


### realtime managemnet with appwrite
https://appwrite.io/docs/apis/realtime



useEffect
```
useEffect(() => {
    // -------------------------------------------------
    // PHASE 1: SETUP (Runs immediately on render)
    // -------------------------------------------------
    let unsubscribe 
    console.log("1. Setting up connection...") 
    unsubscribe = client.subscribe(...) 

    // -------------------------------------------------
    // PHASE 2: PACKAGING (Defines the cleanup, doesn't run it)
    // -------------------------------------------------
    // You are saying: "React, here is a function. 
    // PLEASE CALL THIS ONLY WHEN I AM DONE."
    return () => { 
      console.log("2. Cleaning up OLD connection...")
      if (unsubscribe) unsubscribe()
    }

  }, [user])
```
calling timeline
```
(User A logs in)
> "1. Setting up connection..."

(User B logs in)
> "2. Cleaning up OLD connection..."  <-- React calls the saved function first!
> "1. Setting up connection..."       <-- Then runs the new effect
```

clousre and lifespan for a variable
You have hit on the most advanced and critical concept in JavaScript: **Closures**.

In your code, `unsubscribe` has a "secret life" because of where it is defined. Let's break down exactly **who** can see it and **how long** it survives.

### 1. Who can see `unsubscribe`? (Scope)

**Only the code inside that specific run of `useEffect` can see it.**

* **Can `fetchBooks` see it?** No.
* **Can `createBook` see it?** No.
* **Can the Component (BooksProvider) see it?** No.
* **Can the Cleanup function see it?** **YES.**

Think of `useEffect` as a private room. When you declare `let unsubscribe` inside that room, it is a local variable. No one outside the room knows it exists.

### 2. How long does it last? (Lifespan & Closure)

This is where the magic happens. Normally, when a function finishes running, all its local variables are destroyed (garbage collected).

**However**, because you defined the **cleanup function** inside that same private room, and that cleanup function *uses* `unsubscribe`, JavaScript says:

> "Wait! The cleanup function needs this variable later. I must **keep it alive** in memory, attached to that function."

This phenomenon is called a **Closure**.

**The Lifespan Timeline:**

1. **Birth:** `useEffect` runs. `let unsubscribe` is created. It gets assigned the value from `client.subscribe()`.
2. **The Freeze:** `useEffect` finishes. Normally `unsubscribe` would die here. But because the **Return Function** (cleanup) is holding onto it, JavaScript "freezes" it in a little bubble of memory.
3. **The Zombie Life:** The variable sits in memory, invisible to the rest of your app, waiting. It survives for minutes or hours—however long the user stays on that screen.
4. **Death:** The user logs out. React calls the cleanup function.
* The function runs: `unsubscribe()` is called.
* The function finishes.
* Now nothing is holding onto the variable anymore. JavaScript's Garbage Collector finally deletes it.



### Summary Table

| Question | Answer | Why? |
| --- | --- | --- |
| **Who sees it?** | Only the `useEffect` body and the `return` function. | Block Scoping (`let` is block-scoped). |
| **When does it die?** | AFTER the cleanup function runs. | **Closure**: The function "closes over" the variable and keeps it alive. |
| **Is it shared?** | No. | Every time `useEffect` runs (e.g. login/logout), a **new**, separate `unsubscribe` variable is created. |

### Why this is safe

You might worry: *"If I log in and out 10 times, will these variables conflict?"*
No. Every time `useEffect` runs, it creates a **brand new scope**.

* Run 1 creates `unsubscribe_version_1`.
* Run 2 creates `unsubscribe_version_2`.

They never touch or see each other. React handles calling the cleanup for Version 1 before creating Version 2.

Does that clarify the "secret life" of your variable? It's basically being kept on life support by the cleanup function!


## Dynamic routes

we need book id from the route and to access the dynamic path of a route
we need a hook from expo router which is called `useLocalSearchParams`



## Stale state and Race Condition
(By gemini)
The reason this happens is called **"Stale State"** during the transition.

When you navigate from "Book A" to "Book B" (or change the `id`), your component stays alive (or is reused), so the `book` state variable **still holds the data for Book A** while it waits for `fetchBookById(id)` to finish loading Book B.

Because React re-renders immediately when `id` changes (before the fetch finishes), your `if (!book)` check passes (because `book` is technically not null—it's still Book A!), so it displays the old info.

### The Fix

You must explicitly **reset the state to null** the moment the effect starts. This forces the component to fail the `if (!book)` check and render the `<ThemedLoader />` instead.

Here is the corrected code:

```javascript
  useEffect(() => {
    setBook(null); // <--- ADD THIS: Reset state immediately to force the Loader to appear

    async function loadBook() {
      const bookData = await fetchBookById(id)
      setBook(bookData)
    }

    loadBook()
  }, [id])

```

### Visualizing the Problem

Without `setBook(null)`, the timeline looks like this:

1. **User Clicks Book B:** The `id` changes to `2`.
2. **React Re-renders:** The component updates. `book` is **still Book A**.
3. **Check:** `if (!book)` is `false` (Book A exists).
4. **UI:** Shows **Book A's title** (User gets confused: "Why am I seeing the old book?").
5. **Fetch Finishes:** `setBook(BookB)` runs.
6. **UI:** Finally updates to **Book B**.

By adding `setBook(null)`, step 3 becomes true, and the UI shows the loader (Step 4 becomes "Loading..."), which is the correct behavior.

### Bonus: Preventing "Race Conditions"

If a user clicks "Book B" then quickly clicks "Book C" before B finishes loading, you might end up showing Book B's data on Book C's page. To fix this strictly, use a cleanup flag:

```javascript
  useEffect(() => {
    setBook(null);
    let isMounted = true; // Track if this specific effect run is still valid

    async function loadBook() {
      try {
        const bookData = await fetchBookById(id)
        if (isMounted) { // Only set state if we are still on this id
            setBook(bookData)
        }
      } catch (error) {
        console.error(error)
      }
    }

    loadBook()

    // Cleanup function runs if 'id' changes again or component unmounts
    return () => {
      isMounted = false; 
    }
  }, [id])

```