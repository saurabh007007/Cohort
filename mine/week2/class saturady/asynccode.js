//asynccode  for reading a file sysytem in js using the functional arguemnts
// const { timeEnd } = require("console");
// const fs=require("fs")
// function tellInFile(err,content){
//     if(err){
//     console.log(err)
//     }else{
//     console.log(content)
//     }
// }
// fs.readFile("a.txt","utf-8",tellInFile);

// fs.readFile("b.txt","utf-8",tellInFile);

// console.log("Hi sauar");

//setTimeout

setTimeout(function(){
    console.log("this is under the setTimeout")
},5000)

function timeout(){
    console.log("Click on the button")
}
console.log("hi there ")
setTimeout(timeout,1000)

console.log("welcome to loope")
let c=0;
for(let i=0;i<100000000;i++){
    c=c+i
}
console.log("Lets see this ")

