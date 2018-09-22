
let myTypeOfEC6 = input => typeof input;

function myTypeOfClassic(input) {
    return typeof input;
}

var myTypeOfAssignment = function (input) {
    return typeof input;
}


let mySum = (a, b) => {
    if (typeof a != 'number' || typeof b !='number') {
        return ("Wrong arguments!");
    }
    return a + b;
}


console.log(myTypeOfEC6(12));
console.log(myTypeOfClassic("Hello"));
console.log(myTypeOfAssignment(true));
console.log(mySum("www", NaN));