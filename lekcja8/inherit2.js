class Human {
    constructor (name, race) {
        this.name = name;
        this.race = race;
    }

    walk() {
        console.log(`${this.name} walks`);
    }
}

class Person extends Human {
    constructor(name, race, sex) {
        super(name, race);
        this.sex = sex;
    }

    speak() {
        console.log (`${this.name} ${this.sex} speaks`);
    }
}

class Child extends Person {
    constructor(name, race, sex, age) {
        super(name, race, sex);
        this.age = age;
    }
    
    cry() {
        console.log(`${this.name}  ${this.age}yo cries`)
    }
}

const child = new Child("Ania", "white", "female", 1);
child.cry();
child.walk();