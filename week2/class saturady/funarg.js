//functional argument -->>> passing a function to another function as a argumets

function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
} 

function mult(a,b){
    return a*b
}

function comple(a,b,ab){  //ab is a  functional arguments
    return ab(a,b)
}
console.log(comple(7,8,sum))

//if you passs 3rd arg as no or string it will give you a error