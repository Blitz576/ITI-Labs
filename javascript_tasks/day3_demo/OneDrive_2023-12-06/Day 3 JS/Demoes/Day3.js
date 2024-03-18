/*********************************************************
 * 
 *  Language Objects (built-in classes in javascript)
 *  Javascript is Object-based Language
 * https://devdocs.io  documentation
 */


//-------------- String Class-------------------------

//class String
let userName=new String("eman fathi ITI instrcutor");
// let userName=new String("javascript")//"eman fathi ITI instrcutor");
// let clientName=new String("javascript")//"eman fathi ITI instrcutor");
userName.constructor.name //   class name String

typeof userName ; // object

let courseName="javascript";

typeof courseName ; //string





//different between "" ans new String();   wrapping

//1- warpping of premitive inside object new String(courseName)
//2- call split()
//3- ; destroy the object

// for documentation https://devdocs.io/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript

//length ,toLowerCase() , toUpperCase()
//indexOf , lastIndexOf  //email
//substring, substr, split
//replace     // regular Expressions  --> search (match)


//-->   functions chaining
// courseName.toUpperCase().indexOf("A");
//  let resultUpper=courseName.toUpperCase();
// let searchingIndex=resultUpper.indexOf("A");

//search i --> indexOf("i")
// let resultLower=myName.toLowerCase(); "eman iti instructor"
// let index=resultLower.indexOf("i")


// -- Number Class------------------------- 
/**
 * Numbers stored as 64 base 2 format  , so its stored as binary format
 */
// let number=new Number(22.456);
//define object and using the methods
// Number.MAX_SAFE_INTEGER

//type conversion
// Number("33")

// -----------  Numeric Seperator _ 1000,000,000

//------------ Math Class 




//------------ Array Class
//definition   [] or new Array()
// let numbers=new Array(2);
let numbers=[2,3,4,5,6,1,12,3]; // shortcut new Array(2,3,4,5,6,1,12,3)
// numbers[12]=1000;
//datatypes
// scores.constructor.name //Array --> object
// grades.constructor.name //Array --> object


//for loops  --> 0, for loop, for in (in operator) , for of , foreach

// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }
// console.log("*************************")
// for(let i in numbers)  // for in 
// {
//     console.log(numbers[i]);
// }
// console.log("*************************")
// for(let item of numbers)  // for of
// {
//     console.log(item);

// }

// Calling filter standalone function
// Ahmed     itesm<6
const filterGreater=function(element){
   return  element<6
}

// console.log(filter(numbers,filterGreater));


// Mohamed
// const filterLessThan=function(elemnt){return elemnt>7}
// console.log(filter(numbers,filterLessThan));


// Medhat
// console.log(filter(numbers,function(item){ return item<3}))// anonymouse function
// console.log(filter(numbers, item=>item<3))// anonymouse function

// console.log(numbers.filter((item,index)=>item<3 && index==8));
// console.log(numbers.filter((item,index)=>index<3 ));

//********************* sort */
console.log(numbers);
// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     else if (a<b) return -1;
//     else return 0;

// });

numbers.sort((a,b)=> a-b);

console.log(numbers);










//sparse array (Bad array type --> delete operator(reserved word) )
//delete sparesArray---> forbidden
// let sparesArray=new Array(40)//(40) [empty × 40]
// sparesArray[0]=1;
// sparesArray[4]=2;
// sparesArray[100]=100;//[empty × 100, 100]
// grades[100]=100; (101) [10, empty × 99, 100]


// array's methods push, pop, shift,unshift,splice,slice,concat,reduce and map

//grades.push(3);
//grades.push(4,6,8,7,9);  
//grades.pop() //9   length--;
//grades.unshift(99)
//grades.shift();
//grades.splice(1);
//grades.splice(1,0,66,5)// [10, 66,5, 3, 4, 6, 8, 7, 9]
//grades.splice(1,2); // [10, 6, 8, 7, 9] 


//eval with join --> forbidden never use eval in your code
// eval(grades.join("+"));

//************* filter and sort   (callback and anonymouse function) 



















/********** rest ... */


/**********
 * spread
 */
//1-
// Math.max(...numbers);
// //2- 
// let numbers_clone=[...numbers];//;numbers;

// //3- gathering
// let grade_lab1=[2,1,4,3];
// let grade_lab2=[20,10,40,30];

// let grades=[...grade_lab1,...grade_lab2];

