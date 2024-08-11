 
// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
      console.log("hello");
  
      setTimeout(function () {
        console.log("hello there");
      }, 5000); // after hello 5 second i.e 9 seconds
    }, 3000);  // after hi 3 second i.e 4 second
  }, 1000); //hi after one second  
  