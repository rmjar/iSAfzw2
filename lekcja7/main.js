function carFactory(make, color, maxspeed) {
    return {
        make: make,
        color: color,
        maxspeed: maxspeed,

        start: function () {
            console.log("start");
            return this;
        },
        stop: function () {
            console.log("stop");
            return this;
        }
    }
}


function vehicleFactory(type) {
    return {
        type: type,
        start: function () {
            console.log('start', this.type);
        }
    }
}

const car1 = carFactory("skoda", "red", 120);
console.log(car1);
car1.start().stop();


const veh1 = vehicleFactory("motor");
veh1.start();


function x() {
    console.log(this);
}

function y() {
    consosle.log(this);
}

const oop = {
    name: 'oop',
    fn1: () => {
        console.log(this);
        const obj2 = {
            name: 'obj2',
            fn2: () => {
                console.log(this);
            }
        }

        obj2.fn2();
    }
}

oop.fn1();

const myName = {

    name: "Michał",
    fn: function (lastname, age) {
        console.log(this, this.name, lastname, age);
    }
}


const yourName = {

    name: "Ursula",
    // fn: function () {
    //     console.log(this, this.name);
    // }
}

//zmiana kontekstu this: call, apply, bind

myName.fn("Różański", 15);
myName.fn.call(yourName, "Xsińska", 120);

myName.fn.apply(yourName, ["Xsińska", 120]);

const fnOuter = myName.fn.bind(yourName);

fnOuter("Xtrasińska", 15);

function personFactory(name, age) {
    return {
        name: name,
        age: age,
        print: function (par1, par2) {
            console.log(this.name, this.age, par1, par2);
        }
    }
}


const person1 = personFactory("Ala", 2);
const person2 = personFactory("Jola", 3);


person1.print('a', 'b');
person1.print.call(person2, 'c', 'd');
person2.print('e', 'f');
person2.print.call(person1, 'g', 'h');


person1.print.apply(person2, ['c', 'd']);

const personPrint = person1.print.bind(person2);

personPrint('x', 'y');


const X = {
    name: function () {
        console.log('Alibaba');
    }
}


const newX = Object.create(X);

X.name();
newX.name();



const animal = {
    weight: undefined,
    height: undefined,
}

const mammal = Object.create(animal);

mammal.homeothermic = true;
mammal.fur = true;


const reptile = Object.create(animal);
reptile.homeothermic = false;
reptile.fur = false;

const human = Object.create(mammal);
human.language = 'human language';
human.posture = 'upright';
human.weight = 100;
human.height = 80;

const ape = Object.create(mammal);
ape.language = 'ape dialect';
ape.posture = 'bent';
ape.weight = 60;
ape.height = 50;


console.log(ape);
console.log(human);

console.log(mammal);



const k = {
    name: 'Michał',
    age: 18,
    print: function () {
        console.log(this.name);
    }
}


const l = {
    name: 'Michał',
    surrname: 'Kowalski',
    print: function () {
        console.log(this.age);
    }
}

const res = Object.assign(k, l);

const res2 = {
    ...k,
    ...l
}

res2.print();


function Cat(name, sound) {
    this.name = name;
    this.sound = sound;

    this.speak = function () {
        console.log("I'm", this.name);
    }

    this.makeSound = function () {
        console.log(this.sound);
    }
}

const cat11 = new Cat("Mruczek", "meauuu");

cat11.speak();
cat11.makeSound();


Cat.prototype.drink = function () {
    console.log("I'm drinking");
}

cat11.drink();


//myBind - przepięcie bind dla funkcji. Uwaga operator ...arg w argumentach - oznacza wszystkie argumenty są zbierane w tablicy

Function.prototype.myBind = function (newThis, ...arg) {

    const that = this;

    return function () {
        that.apply(newThis, arg);
    }
}

