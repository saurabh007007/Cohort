interface People {
  name: string;
  age: number;
  greet: () => string;
}

let person: People = {
  name: "Saurabh",
  age: 21,
  greet: () => {
    return "hi";
  },
};

let greeting = person.greet();
console.log(greeting);
