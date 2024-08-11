// const fs=require("fs")
// function readTheFile(send){
//     fs.readFile("a.txt","utf-8",function(error,data){
//         send(data);
//     })
// }

// // console.log(readTheFile(send))

// class Promise2{
//     constructor(fn){
//         this.fn=fn;
//         this.fn(()=>{
//             this.resolve();
//         })
//     }
//     then(callback){
//         this.resolve=callback
//     }
// }


function doAsync(resolve){
    setTimeout(resolve,3000)
}

function saurabh(){
    console.log("hither")
}
const p=new Promise(doAsync)
p.then(saurabh)