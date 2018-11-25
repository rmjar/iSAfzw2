# 02: Destructuring
```js
const film = {
  title: 'Titanic',
  rating: 4.4,
  director: 'James Cameron'
};

const {rating} = film; // const rating = film.rating
console.log(rating); // 4.4

const {title, director} = film;
console.log(title, director); // Titanic James Cameron
```

```js
const badNames = {
  a: 'Kacper',
  b: 'Warszawa'
};

const {a: name, b: city} = badNames;

console.log(name) // Kacper
console.log(city) // Warszawa
```

## Dodatkowe materiały
[![YouTube](http://img.youtube.com/vi/RJaRRS27100/0.jpg)](http://www.youtube.com/watch?v=RJaRRS27100)

[ES6 Destructuring: The Complete Guide](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f)
