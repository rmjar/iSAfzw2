# 01: String template

"Stare" łączenie napisów
```js
const username = 'Tom';
const title = 'Titanic';
const rating = 4;
const max = 5;

const text = username + ' ocenił film ' + title + ' na ' + rating + ' z ' + max + 'gwiazdek'
// Tom ocenił film Titanic na 4 z 5 gwiazdek
```

Nowe rozwiązanie
```js
const username = 'Tom';
const title = 'Titanic';
const rating = 4;
const max = 5;

`${username} ocenił film ${title} na ${rating} z ${max} gwiazdek`
```

## Długi tekst
```js
const inwokacja = "" +
  "Litwo, Ojczyzno moja! ty jesteś jak zdrowie;\n" +
  "Ile cię trzeba cenić, ten tylko się dowie,\n" +
  "Kto cię stracił. Dziś piękność twą w całej ozdobie\n" +
  "idzę i opisuję, bo tęsknię po tobie.\n"
```

```js
const inwokacja = `
  Litwo, Ojczyzno moja! ty jesteś jak zdrowie;
  Ile cię trzeba cenić, ten tylko się dowie,
  Kto cię stracił. Dziś piękność twą w całej ozdobie
  Widzę i opisuję, bo tęsknię po tobie.
`
```

## Dodatkowe materiały
[Easy Creation of HTML with JavaScript’s Template Strings](https://wesbos.com/template-strings-html/)
