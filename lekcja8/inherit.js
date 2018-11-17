class Car {
    constructor(brand) {
        this.brand = brand;
    }

    drive() {
        console.log(`${this.brand} drives`);
    }
}

class Truck extends Car {
    constructor(brand, wheels) {
        super(brand);
        this.wheels = wheels;
    }

    transform() {
        console.log(`${this.brand} with ${this.wheels} wheels transforms!`);
    }

    drive() {
        console.log(`${this.brand} truck drives`);
    }
}

new Car("Skoda").drive()

const truck = new Truck("Volvo", 18)
truck.drive();
truck.transform();