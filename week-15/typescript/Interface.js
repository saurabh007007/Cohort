"use strict";
let person = {
    name: "Saurabh",
    age: 21,
    // greet?: () => {
    //   return "hi";
    // },
};
//
// let greeting = person.greet();
// console.log(greeting);
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let User = new Manager("saurabh", 23);
console.log(User.age);
