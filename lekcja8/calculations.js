class Calculations {
    constructor() {
        this.value = 0;
    }

    add() {
        this.value++;
        return this;
    }

    sub() {
        this.value--;
        return this;
    }
}

//chaining po zwróceniu this
const calculations = new Calculations();
calculations.add();

console.log(calculations);



//destructuring - destrukturyzacja
const person = {
    name: 'Jan',
    age: 20,
    obj: {
        fn: 123,
        fn2: 342
    }
}


const {
    obj: {
        fn
    }
} = person;
console.log(fn);



//destructuring tablic
const x = [2, 23, 3, 2345];
const [no0, no4, no10] = x;

console.log(no0);


// function sum() {
//     return Object.values(arguments).reduce((acc, curr) => {
//         acc += curr;
//         return acc;
//     }, 0)
// }


const sum = (...args) => args.reduce((agregator, current) => agregator += current);

console.log(sum(1, 2, 3));


console.log("       \t\r\n" == false)