export {}; // 确保跟其他示例成员没有冲突

class Person {
    public readonly name: string;
    private age: number;
    protected gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi(str: string) {
        console.log(`Hi ${str}`);
    }
}
const tom = new Person('tom', 19, 'male');