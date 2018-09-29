Zmiany zmiany zmiany zmiany




(function(a,b) {
    var sum = a+b;
    console.log(sum);
}) (10, 20);



// let sum;

// function a(a, b) {
//     var sum = a + b;
//     return sum;
// }

// console.log(a(1,2));

// var myCar = new Object();

// myCar.make = "Honda";
// myCar.is = true;


// console.log(myCar);

// var otherCar = {
//     make : "Mazda",
//     is : false,
//     sound: function() {alert("Wrrrr!");}
// }

// console.log(otherCar);
// otherCar.sound();


//console.log([1,2,3,4,5,6,7,8,9,10].indexOf(9));



// const tblLen = (Math.floor(Math.random() * 9 + 2) << 1);
// const tbl = [];
// for (var i = 0; i < tblLen; i++) {
//     tbl.push(Math.floor(Math.random() * 200 + 1));
// }

// const tbl2 = tbl.slice(tbl.length / 2 - 2, tbl.length / 2 + 2);

// console.log(tbl, tbl2);



// const t1 = [1, 9, 3, 4, 5, 6];
// ///const t2 = Array.of(t1[1], t1[t1.length - 1]);
// const t3 = [...t1.slice(1, 2), ...t1.slice(5, 6)];
// //console.log(t1.slice(5, 6));
// //console.log(t2);
// console.log(t3);

// t2[1].push(4);
// console.log(t1, t2);

// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0);
// numbers.push(6);
// console.log(numbers);


// console.log("Hello, Wordl!".length);

// //pop an element - remove 4
// var z = [1, 2, 3,4];
// console.log(z);
// console.log(z.pop()); //remove last index
// z.push('a', 'b', 'c'); //add to the end of array
// console.log(z);
// z.shift(); //remove 0 index
// console.log(z);
// z.unshift(-2, -1); //add as first elements
// console.log(z);

// const a = [];

// for (let i = 0; i < 100; i++) {
//     a.push(Math.floor((Math.random() * 1000) + 1));
//     if (i >= 1) {
//         break;
//     }
// }

// console.log(a);



// let i = 0;
// while (i < 5) {
//     i++;
//     if (i === 3) {
//         break;
//     }
//     console.log(i)
// }



// const a = [1, 2, 3, 4, 5];
// var i = 0;
// while (i < a.length) {
    // console.log(a[i]);
    // i++;
// }






// function workshop2() {
//     const a = [];

//     for (let i = 0; i < 1000; i++) {
//         a.push(Math.floor((Math.random() * 1000) + 1));
//     }

// }



// function workshop1() {
//     var numbers = new Array(1000).fill();
//     sleep(1000);
//     console.time('before loop');
//     var numLength = numbers.length;
//     //console.log(length);
//     for (var i = 0; i < numLength; i++) {
//         console.log(numbers[i]);
//     }
//     console.timeEnd('before loop');

//     var numbers2 = new Array(1000).fill();
//     sleep(1000);
//     console.time('in loop');
//     for (var i = 0; i < numbers2.length; i++) {
//         console.log(numbers2[i]);
//     }
//     console.timeEnd('in loop');
// }



// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//         if ((new Date().getTime() - start) > milliseconds) {
//             break;
//         }
//     }
// }