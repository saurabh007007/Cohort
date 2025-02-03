
// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//       console.log("hello");

//       setTimeout(function () {
//         console.log("hello there");
//       }, 5000); // after hello 5 second i.e 9 seconds
//     }, 3000);  // after hi 3 second i.e 4 second
//   }, 1000); //hi after one second  


// without callback he;;
//   function step3Done() {
//     console.log("hello there");
//   }

//   function step2Done() {
//     console.log("hello");
//     setTimeout(step3Done, 5000);
//   }

//   function step1Done() {
//     console.log("hi");
//     setTimeout(step2Done, 3000);
//   }

//   setTimeout(step1Done, 1000);


//promise based approach
//   function setTimeoutPromisified(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   setTimeoutPromisified(1000).then(function () {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function () {
//       console.log("hello");
//       setTimeoutPromisified(5000).then(function () {
//         console.log("hello there");
//       });
//     });
//   });

//more cleaner way is this
//   setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });

function random() {
  return "hi "
}
let p = new Promise(random); // promise suppose to return something -->> eventual completion of something
function callback() {
  console.log("sauarabh")
}

console.log(p.then(callback))

function settime(resolve) {
  setTimeout(resolve, 3000);
}

//create promisified version of fs.read fs.write fs.delete file

// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// // Writes it back to the file

// creating more promisified functions
