//IF ELSE TASK
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// if(a>b)
// {
//     console.log(`${a} is greater`)
// }
// else{
//     console.log(b+" is greater")
// }

// let amount = Number(prompt("Enter the amount to withdraw"))
// balance = 5000;
// if(balance>=amount)
// {
//     if(amount % 100==0)
//     {
//         alert("Money withdrawed successfully!!")
//     }
//     else{
//         console.log("Cannot be withdrawed as amount isn't multiple of 100")
//     }
// }
// else{
//     console.log("Insufficient balance")
// }

// let units = Number(prompt("Enter your units"))

// if(units<=100)
// {
//     console.log(`Your bill is = ${units*5}/-`)
// }
// else if(units<=200)
// {
//     console.log(`Your bill is = ${units*6}/-`)   
// }
// else if(units>=201)
// {
//     console.log(`Your bill is = ${units*7}/-`)
// }
// else{
//     console.log("Enter valid value")
// }


//FUNCTIONS TASKS

// function findLargest(num1,num2)
// {
//     if(num1>num2)
//     {
//         console.log(num1 + " is larger")
//     }
//     else{
//         console.log(num2+" is larger")
//     }
// }
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter first number"))
// findLargest(a,b);

// function isDivisibleBy2And5(num)
// {
//     let result = num%2==0 && num%5==0?num+" is divisible by 2 and 5":num+" is not divisible by 2 and 5";
//     console.log(result)
// }
// let a = Number(prompt("Enter your number"))
// isDivisibleBy2And5(a)

// function fullName(firstname,lastname)
// {
//     console.log(firstname+" "+lastname)
// }
// let fname = prompt("Enter your First Name")
// let lname = prompt("Enter your Last Name")
// fullName(fname,lname)

// function toTitleCase(str)
// {
//     return(str.charAt(0).toUpperCase()+str.slice(1))
// }
// let string = prompt("Enter your string")
// console.log(toTitleCase(string));

// function square(num)
// {
//     console.log(num*num);
// }
// let n = Number(prompt("Enter your number"))
// square(n);

// function prime(num)
// {
//     let count = 0;
//     if(num!=1 || num!=0)
//     {
//         for(let i=1;i<=num;i++)
//         {
//             if(num%i==0)
//             {
//                 count++;
//             }
//         }
//         if (count==2)
//         {
//             console.log(num+" is prime number")
//         }
//         else{
//             console.log(num+" is not a prime number")
//         }
//     }
//     else{
//         console.log("0 and 1 is neither prime nor composite")
//     }
// }
// let number = Number(prompt("Enter your number"))
// prime(number)

//STRING TASKS

// let str = prompt("Enter your string")
// console.log(str.length)

// let str = prompt("Enter your string")
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let sentence = prompt("Enter a sentence")
// let word = prompt("Enter your word")
// console.log(sentence.includes(word));

// let str = prompt("Enter your string with spaces")
// console.log(str.trim())

// let str = prompt("Enter your string")
// let position = Number(prompt("Enter your position"))
// console.log(str.charAt(position))

// let n = Number((prompt("Enter your number")))
// console.log(n,typeof n)
// console.log(n,typeof n.toString())

// let str =  prompt("Enter your string")
// let word = prompt("Enter a word")
// console.log(str.startsWith(word) || str.endsWith(word))

// let str1 = prompt("Enter your 1st string")
// let str2 = prompt("Enter your 2nd string")
// console.log(str1+str2)

// let str = prompt("Enter your string")
// let repeat_number = prompt("Enter a number")
// console.log(str.repeat(repeat_number))

// let sentence = prompt("Enter your sentence")
// let word = prompt("Enter a word from sentence")
// console.log(sentence.search(word));
// console.log(sentence.indexOf(word));
