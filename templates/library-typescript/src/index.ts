interface IPerson {
  name: string;
  age: number;
}

class Student implements IPerson {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

const sum = function (a: number, b: number): number {
  return a + b;
};

const minus = function (a: number, b: number): number {
  return a - b;
};
export { sum, minus, Student };
export default 'Hello world';
