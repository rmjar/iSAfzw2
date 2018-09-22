
let myTypeOfEC6 = (input) => typeof input;

function myTypeOfClassic(input) {
    return typeof input;
}

var myTypeOfAssignment = function(input) {
    return typeof input;
}




console.log(myTypeOfEC6(12));
console.log(myTypeOfClassic("Hello"));
console.log(myTypeOfAssignment(true));