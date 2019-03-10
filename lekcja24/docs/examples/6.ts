/// 6. \\\

interface ToImplement {
    foo: string;
    alertFoo(): void;
}

class Implementing implements ToImplement {
    foo = 'abc';

    alertFoo() {
        alert(this.foo);
    }
}

new Implementing().alertFoo();
