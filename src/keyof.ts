interface _Person {
    name: string;
    age: number;
    gender: string;
}
class Student {
  info: _Person
  constructor(info: _Person) {
    this.info = info;
  }
  getInfo<T extends keyof _Person>(key: T): _Person[T]{
      return this.info[key];
  }
}
const student = new Student({
    name: 'helen',
    age: 10,
    gender: 'female',
});
student.getInfo('name');
