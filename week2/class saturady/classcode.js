// synchronus code -->>a code that single line line by 


function sum(a,b){ // function defined here
    return a+b
}
let ans=sum(5,6) // function called here
console.log(ans) //if "20" 30 entered it uese to concatinate it

// dsa method
function sumton(n){
    return (n*(n+1))/2
}
console.log(sumton(100))

//with for loop
function  sumtonfor(n){
    sum=0
    for(i=0;i<=n;i++){
        sum=sum+i;
    }

    return sum
}
console.log(sumtonfor(100))


// try to creata a promisified 