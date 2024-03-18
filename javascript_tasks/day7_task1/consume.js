
window.addEventListener("load",function(){
let emp=new Employee("mariam mohamed","female",2000,"english");
let my_div=document.querySelector("div");
emp.appendPhoto(my_div);
emp.appendCard(my_div);
// console.log(emp.nickName);


let emp1=new Employee("ahmed nagy","male",3000,"english");
emp1.appendPhoto(my_div);
emp1.appendCard(my_div);


let emp2=new Employee("mariam mohamed","female",4000,"english");
emp2.appendPhoto(my_div);
emp2.appendCard(my_div);
//console.log(Person.persons);

});