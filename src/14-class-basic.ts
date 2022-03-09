class Person {
    name: string;
    age: number;
    constructor() {
        this.name = 'helen';
        this.age = 19
    }
    sayHi(str: string) {
        console.log(`Hi ${str}`);
    }
}