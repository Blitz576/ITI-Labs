window.addEventListener("load",function(){
 emp=new Basket();
let my_div=document.querySelector("div");
emp.appendPhoto(my_div);


emp1=new Egg();

//randomize a number 
let maxLimit= my_div.clientWidth-parseInt(emp1.image.style.width);
maxLimit=Math.ceil(maxLimit*Math.random());
emp1.image.style.left=maxLimit+"px"; //new position

emp1.appendPhoto(my_div);

catchEgg(emp1,emp);
});