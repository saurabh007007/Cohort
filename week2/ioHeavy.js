// i/o heavy operation -->> taking input and providing output 

//reading a file from local file
//requireing the other files

const fs =require("fs") //require the fs file in javascript to read file fs=== filesystem
const cont=fs.readFileSync("a.txt","utf-8"); //utf-8 -->> it is a encoding
console.log(cont)


fs.readFile("b.txt","utf-8",(err,content)=>{
    console.log(content)
})

// reading from two files

const secondfile=fs.readFileSync("b.txt","utf-8");
console.log(secondfile)

const sync=fs.readFile("b.txt","utf-8")
console.log(sync)