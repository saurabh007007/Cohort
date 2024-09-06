// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greets(n){
console.log(`Hi Mr/Mrs/Other ${n.name},your age is ${n.age}`)
if(n.age>=18){
    console.log("You can vote ")
}else{
    console.log("You can't vote")
}
}
let user={
    name:"saurabh",
    age:10,
    gender:"male"
}
greets(user)