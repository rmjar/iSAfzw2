
const a = [1, 2, 3, 4, 5];
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++;
}






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