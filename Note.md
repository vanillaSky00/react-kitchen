This fits React’s vibe: “a component is a function that returns UI”.


`var` is function scope
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0)
}
// 3,3,3
```
`let`/ `const` is not
```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0)
}
// 0, 1, 2
```
`const` ensures no rebinding
Use `let` when rebinding is part of the algorithm
```js
let left = 0
let right = arr.length - 1
while (left <= right) {
    ... (left and right rebinding)
}
```
`const`
```js
const cat = { a: 3 }
cat.a = 4     // allow
cat = { a: 2 } // not allow (rebinding)
```


What is BOM(Browser Object Model)? :https://www.geeksforgeeks.org/html/browser-object-model/
this, “lexical”, “closure”, and arguments







expo
appwrite