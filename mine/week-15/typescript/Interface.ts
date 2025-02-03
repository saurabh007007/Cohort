interface People {
  name: string;
  age: number;
  // greet: () => string;
}

let person: People = {
  name: "Saurabh",
  age: 21,
  // greet?: () => {
  //   return "hi";
  // },
};
//
// let greeting = person.greet();
// console.log(greeting);

class Manager implements People {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let User = new Manager("saurabh", 23);

console.log(User.age);
