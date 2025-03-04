// let x = new Date(2018,10,13,25,11,11,9);   //In this we pass 7 parameters
// let x = new Date("September 25,2005 11:11:11")  //In string format
// console.log(x)

// let x = new Date();
// console.log(x);        //shows current date of our local host

// let x = "2024,12,45"
// console.log(x)

//These all are get method
// console.log(x.getTime());   //show time in mili second
// console.log(x.getFullYear());   
// console.log(x.getMonth());   
// console.log(x.getDate());
// console.log(x.getDay());   
// console.log(x.getHours());  
// console.log(x.getMinutes());    
// console.log(x.getSeconds());  
// console.log(x.getMilliseconds());  
// console.log(x.getTime());     

// console.log(x)  
//This all are set methods
// console.log(x.setDate(25));
// console.log(x.setFullYear(2005));
// console.log(x.setMonth(8))
// console.log(x.setHours(20))
// console.log(x.setMinutes(8))
// console.log(x.setSeconds(10))


let date =  new Date();
// console.log(date);
date.setDate(date.getDate() + 2)
console.log(date)
