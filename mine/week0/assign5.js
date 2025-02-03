// Write a function called sum that finds the sum from 1 to a number
 function sum(a){
    i=1;
    s=0
    while(i<=a){
        s=s+i;
        i++;
    }
    return s;
 }

 console.log(sum(100))