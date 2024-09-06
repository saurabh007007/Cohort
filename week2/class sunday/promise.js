//defining promise is a hard
//using promise is eassy
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
//   setTimeoutPromisified(3000).then(callback)

let k= setTimeoutPromisified(3000)
console.log(k)

function wait3s(resolve){
    setTimeout(resolve,3000)
}
function main(){
    console.log("hi saurabh")
}
wait3s(main)


//create a promise class something like below 
class Promise{
    constructor(fn){

    }
}