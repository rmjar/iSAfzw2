# 03: Spread syntax & rest parameter "..."
* spread - rozkładać
* rest - reszta (to co zostało)

```js
const numbers = [1, 5, 8]

function addThreeNumbers(a, b, c) {
  return a + b + c
}

addThreeNumbers(3, 2, 4) // 9

addThreeNumbers(numbers) // 1,5,8undefinedundefined

addThreeNumbers.apply(null, numbers) // 14

addThreeNumbers(...numbers) // 14
```

Best way to break your JS app
```js
const original = [3, 7, 9]

const badClone = original

badClone.push('trololo')

console.log(badClone) // [3, 7, 9, 'trololo']
console.log(original) // [3, 7, 9, 'trololo']
```

Now with spread
```js
const original = [3, 7, 9]

const clone = [...original]

clone.push('trololo')

console.log(clone) // [3, 7, 9, 'trololo']
console.log(original) // [3, 7, 9]
```

```js
const numbers = [2, 5, 6]
const moreNumbers = [...numbers, 100] // [2, 5, 6, 100]

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  proffestion: 'actor',
  age: 56,
}
const anotherPerson = {
  ...person,
  lastName: 'Hardy',
  age: 41,
  height: 1.75
}
```

Rest parameters
```js
function sumAll(...items) {
  return items.reduce(
    (sum, n) => sum + n,
    0
  )
}

sumAll(3, 6, 3) // 12
```

## Dodatkowe materiały
[Spread syntax MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
