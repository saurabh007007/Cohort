const fs =require("fs")

function main(fileNamee){
    fs.readFile(fileName,"utf-8",function(err,data){
        let  t=0;
        for(let i=0;i<data.length;i++){
            if(data[i]==" "){
                t++;
            }
        }

        console.log(t)
    })
}