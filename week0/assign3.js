// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(n){
    if(n>18){
        return true;
    }
    return false
}
console.log(canVote(20))
console.log(canVote(10))