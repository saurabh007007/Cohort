"use strict";
function greet(x) {
    console.log(`hi ${x}`);
}
greet("saurabh");
const user = {
    firstName: "Saurabh",
    lastName: "yadav",
    email: "email@gmail.com",
    age: 20,
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
