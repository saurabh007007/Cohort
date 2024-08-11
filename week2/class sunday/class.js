// classes in JS 

//object
const user={
    name:"saurabh",
    roll:2204280100153,
    branch:"cse"

}

//classses in js
class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4,"yellow") //CREATION OF A NEW OBJECT OF RECTANGLE CLASS
 const area = rect.area();

 console.log(area,rect.paint())


 //JS CLASSES
 const now=new Date();
 console.log(now.getMonth())
 console.log(now.getFullYear())

 //maps 
 const map = new Map();
 map.set('name', 'Alice');
 map.set('age', 30);
 console.log(map);


 function logName(){
    console.log("Hi saurabh")
 }
 setTimeout(logName,3000)
 