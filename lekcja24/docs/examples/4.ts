/// 4. \\\

class Person {
    name: string;
    private surname: string;
    readonly secretname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
        this.secretname = 'secret';
    }

    introduce(): void {
        alert(`Hi, I'm ${this.name} ${this.surname}!`);
    }
}

const brad = new Person('Brad', 'Pitt');
alert(brad.name);
alert(brad.secretname);
alert(brad.surname);
brad.secretname = 'foo';
