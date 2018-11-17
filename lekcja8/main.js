class Cuboid {
    static fn() {
        console.log('static');
    }

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        //this.checkThisBound = this.checkThis.bind(this);

        this.perim = function () {
            return 2 * (this.x + this.y + this.z);
        }

        this.checkThis = () => {
            return this;
        }
    }

    vol() {
        return this.x * this.y * this.z;
    }


}

// const cube = new Cuboid(1, 2, 3);

// console.log(cube.x, cube.y, cube.z, cube.vol());

// console.log(cube.perim());
// console.log(cube.checkThis());

// const fn = cube.checkThis;

// console.log(fn());

// class MaxNumber {
//     static max(...arg) {
//         return Math.max(...arg);
//     }

//     // alternatywnie - 'po staremu'
//     // static max() {
//     //     return Math.max.apply(null, arg);
//     // }
// }

//const num = new MaxNumber();

// console.log(MaxNumber.max(5, 3, 10, -4, 13, 2));


function ConstFn() {

    //metoda instancji
    this.fnInstance = function () {
        console.log(this);
    }

}

//metoda prot
ConstFn.prototype.fnProt = function () {
    console.log(this);
}

//metoda 'statyczna'
ConstFn.fnStatic = function () {
    console.log(this);
}


const obj1 = new ConstFn();
const constFnStatic = ConstFn.fnStatic;
constFnStatic();
const constFnProt = obj1.fnProt;
constFnProt();
const constFnInst = obj1.fnInstance;
constFnInst();

class X {

    //statyczna
    static x1() {
        console.log(this);
    }

    constructor() {
        //instancja
        this.x2 = function () {
            console.log(this);
        }
    }

    //prototyp
    x3() {
        console.log(this);
    }
}

const classXStatic = X.x1;
classXStatic();
const x = new X();
const classXInst = x.x2;
classXInst();
const classXProt = x.x3;
classXProt();