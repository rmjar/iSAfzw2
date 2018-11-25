# 05: Modules (import & export)

## Named exports (multiple per file)
```js
// helpers.js

export function sum(arr) {
  return arr.reduce((sum, n) => sum + n, 0)
}

export const filterPositive = arr => (
  arr.filter(n => n >= 0)
)

const getAverage = arr => sum(arr) / arr.length
let counter = 0

export {getAverage, counter}
```

```js
// index.js
import {sum, getAverage} from './helpers'

sum([1, 2, 3, 4])
```

```js
// index.js
import * as arrHelpers from './helpers'

arrHelpers.sum([1, 2, 3, 4])
```

## Default export (one per file!)
```js
// myFunc.js
export default function() {...}

// or

function foo() {...}
export default hello
```

```js
// index.js
import moooo from './myFunc'
```

## Mixed export
```js
// myFunc.js
export const abc = () => 'abc'
export default () => 'Trololololo!'

// index.js
import song, {abc} from './myFunc'
```

## Rename
```js
// myFunc.js
export const abc = () => 'abc'

// index.js
import {abc as anotherName} from './myFunc'
```

```js
// myFunc.js
const f1 = () => 'abc'
const f2 = () => 'xyz'
export {f1 as abc, f2 as xyz}

// index.js
import {abc} from './myFunc'
```
