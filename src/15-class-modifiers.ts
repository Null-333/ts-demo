export {}; // 确保跟其他示例成员没有冲突

class Person {
    public name: string; // 默认是public，可以在实例对象上访问
    private age: number; // 不能在实例对象上访问，并且子类不继承该属性
    protected gender: string; // 不能在实例对象上访问，子类可以继承该属性
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi(str: string) {
        console.log(`Hi ${str}`);
    }
}

const tom = new Person('Helen', 18, 'female');

class Student extends Person {
    private constructor(name: string, age: number, gender: string) {
        super(name, age, gender);
        console.log('====-23', this.gender);
    }
    static create(name: string, age: number, gender: string) {
        return new Student(name, age, gender);
    }
}
const jack = Student.create('Helen', 18, 'female');

