'use strict';


const people = [{
        name: 'janek',
        age: 31
    },
    {
        name: 'wiola',
        age: 35
    },
    {
        name: 'mateusz',
        age: 29
    },
    {
        name: 'kamila',
        age: 25
    },
    {
        name: 'olaf',
        age: 33
    },
    {
        name: 'sylwia',
        age: 25
    }
];


function find(fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            return this[i];
        }
    }
    // return undefined;
}

people.myFind = find;

function filter(fn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

people.myFilter = filter;

console.log(people.myFind((arg) => arg.age === 25));

console.log(people.myFilter((arg) => arg.age > 29));

// const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];

// // function forEach(arr, fn) {
// //     for (let i = 0; i < arr.length; i++) {
// //         fn(arr[i]);
// //     }
// // }


// const helloFn = function () {
//     console.log('Czesc');
// }

// const hello = helloFn;

// const call = function (fn) {
//     fn();
// }

// // call(hello);
// // call(helloFn);

// // forEach(names, console.log)

// const person = {
//     name: 'Michal',
//     hello: function() {
//         console.log('Czesc ' + this.name);
//     }
// }



// person.hello();

// function forEach(fn) {
//     for (let i = 0; i < this.length; i++) {
//         fn(this[i]);
//     }
// }


// names.foreach = forEach;

// names.foreach(console.log);

// names.foreach(arg => {
//     console.log(arg);
// });