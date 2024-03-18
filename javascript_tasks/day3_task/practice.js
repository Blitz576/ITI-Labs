// ///Strings

// var firstVar="Hello";

// var objvar=new String("Hello");




// function vowel_count(str1) {
//     var vowel_list = 'aeiouAEIOU';
//     var vcount = 0;
//     for (var x = 0; x < str1.length ; x++) {
// //    if (vowel_list.indexOf(str1[x]) !== -1) {
//         vcount += 1;
//   //  }
//     }
//     return vcount;
// }




// for(var i = 0; i < a.length; i++) {
//     if (!a[i]) continue;
//     //Skip null, undefined, and nonexistent elements
//     console.log(a[i]);
//     }

// ///map function in java script is a method in array object that cahnges the values of the that array in another array 




// var arr=[1,2,3,4,5,6];
// arr=arr.map(element => element+1);
// console.log(arr);





























///define new array

let newArr=[2,1,3,2,7,2,8,4,3,6,10,9,12];

console.log(newArr.sort((_a,_b)=>{
    return _a-_b;
}));

///we can filter items with two ways 

//first way is to make it like callback function


const filterItems=function(element,condition){
    
    let result=[];
    for(i in element){
     if(condition(element[i],6))
        result.push(element[i]);
    }
    return result;
}

//calling function
console.log(filterItems(newArr,(item,limit)=>{return item>limit;}));



///another way is to use filter built in function filter
let result=newArr.filter((item)=>{return item>6;});

console.log(result);


