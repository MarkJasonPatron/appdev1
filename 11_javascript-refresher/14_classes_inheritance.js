class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

const person = new Person("Mark");
person.sayHello();

const student = new Student("Mark");
student.sayHello();
student.study();
