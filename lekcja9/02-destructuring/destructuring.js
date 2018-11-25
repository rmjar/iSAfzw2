function blackFridayAlert({item, off = 10, hour = 24}) {
  return `${item} taniej o ${off}% do godziny ${hour}`
}


function getRanking([one, two, three]) {
  return `
    1: ${one}
    2: ${two}
    3: ${three}
  `
}


function getFilmRating({
  title,
  rating: {
    cast: cst = 0,
    music = 0,
    script = 0
  }
}) {
  return `
    Oceny dla filmu ${title}:
    Obsada: ${cst}
    Muzyka: ${music}
    Scenariusz: ${script}
  `
}


const searchedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findFirstAndLast([first, ...middle]) {
  const last = middle[middle.length - 1];
  console.log(first, last);
}
findFirstAndLast(searchedArray)