const express=require ('express');

const app= express();



app.get('/',(req,res)=>{
    res.send('Hello World');
}
);
const PORT=3000;
console.log("Environmen t vbariable")
console.log(process.env.DATABASE_URL);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);