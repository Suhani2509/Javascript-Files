// let obj1 = {
//     name:"Suhani",
//     age:"19",
//     city:"Pune",
//     gender:"Female"
// }
// // console.log(obj1)
// console.log(obj1.city)

// let input = prompt("Enter your name")
// let a = input.split("");
// let b = a.reverse()
// console.log(a.join(""))

// let str = prompt("Enter your string")
// let a = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(a)


// function palindrome(str)
// {
//     let rev = str.split("").reverse().join("");
//     return str === rev;
// }
// console.log(palindrome("hello"))

// let a = [10,20,30,40];
// let sum=0;
// for(let i=0;i<a.length;i++)
// {
//     sum=sum+a[i]
// }
// console.log(sum)

// let a = [20,40,80,30]
// a.length = 0
// console.log(a)

// function rev_str(str)
// {
//     let rev= str.split("").reverse().join("");
//     console.log(rev)
// }
// let a = prompt("Enter your string")
// rev_str(a)



// let obj = {
//     names : "Suhani",
//     age : 19,
//     person : function(){  //Anonymous function
//         console.log("Hello suhani")
//     },
//     greeting : ["Suhani","Tanvi"],
//     obj1 : {
//         city:"Pune",
//         ph:123345678

//     }
//     }
// console.log(obj)
// console.log(obj.names)
// console.log(obj["names"])
// obj.gender = "Female"
// console.log(obj)
// delete obj.gender
// console.log(obj)

// obj.person = function(){
//     console.log("Hello suhani")
// }
// obj.person()

// console.log(obj.greeting[1])
// console.log("names" in obj)
// console.log(obj.obj1.city)


//HOISTING 
//Javascript takes the declaration to the top and then shows the output
//This works only with variable and function


// a = 12;
// console.log(a)

// var a ;

// let obj = {
//     name : "Suhani",
//     age : 19,
//     gender : "Female",
//     obj2 : {
//         city : "Pune",
//         state : "Maharashtra",
//         pincode : 411014,
//         obj3 : {
//             contact : 8788994706,
//             address : "wagholi"
//         }

//     }
// }
// console.log(" Name:"+obj.name,"\n","Age:"+obj.age ,"\n", "Gender:"+obj.gender ,"\n","city:"+obj.obj2.city,"\n","State:"+obj.obj2.state,"\n", "Address:"+obj.obj2.obj3.address)



// let obj = {
//     name : ["Suhani","Pratiksha","Tanvi","Sanika"],
//     age : 21
// }
// console.log(obj.name[2])