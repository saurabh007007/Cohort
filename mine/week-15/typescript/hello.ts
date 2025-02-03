function greet(x: string) {
  console.log(`hi ${x}`);
}
greet("saurabh");

const user = {
  firstName: "Saurabh",
  lastName: "yadav",
  email: "email@gmail.com",
  age: 20,
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isLegal(user));
