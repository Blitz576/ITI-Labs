
window.addEventListener("load",function(){
    
//take the NodeList of radio buttons
let radioButton= this.document.querySelectorAll("input[type=radio]"); 

let userName =this.document.querySelector("input[type=text]");  //reutns the first value

let userGrade =this.document.querySelectorAll("input[type=text]")[1]; //the grade element 

let addButton =this.document.querySelector("button");

let studentNames=[];

//checking the enter of the user
userName.addEventListener("blur",function(){
    
    
    if(checkName(this.value))
    {
        this.parentElement.nextElementSibling.style.visibility = "visible";
    }
    else
    {
        this.parentElement.nextElementSibling.style.visibility = "hidden";
    }
      
});

userGrade.addEventListener("blur",function(){

    if(checkGradse(this.value))
    {
        this.parentElement.nextElementSibling.style.visibility = "visible";
    }
    else
    {
        
        this.parentElement.nextElementSibling.style.visibility = "hidden";
    }

});
  


//adding an event for the whole document to check the button
this.document.addEventListener("click",function(){
    buttonState(userName.value,userGrade.value,addButton);
});

addButton.addEventListener("click",function(){
    if(buttonState(userName.value,userGrade.value,addButton))
    {        
        //capitalize the name
        let nameValue=capitalfirst(userName.value);
        

        //searching on it
        let repeated = document.querySelector("#repeat");
        if(studentNames.includes(nameValue)){
            repeated.style.visibility="visible";
            return null;
        }

        repeated.style.visibility="hidden";
        //pushing new student into studentNames
        studentNames.push(nameValue);
        let studentRecord= createStudentRecord(nameValue,userGrade.value);
        if(radioButton[0].checked)
           studentRecord.style.backgroundColor="yellowgreen";
        if(radioButton[1].checked)
           studentRecord.style.backgroundColor="lightblue";
        if(radioButton[2].checked)
           studentRecord.style.backgroundColor="lightcoral";
        //adding new student to the table
        document.querySelector(".data_block_table").appendChild(studentRecord);

         userName.value="";
         userGrade.value="";
    }

})


});


// addButton.addEventListener("click",function(){
//     //first capital words
//     userName.value=capitalfirst(userName.value);
    
//     //searching for the names
//     if(!names.includes(userName.value))
//     {
//       let studentData = createStudentRecord(userName.value,userGrade.value,check);
//     }
// })









// userGrade.addEventListener("focus",function(event){
//     let regExpression = /\D+/.test(event.target.value); //more cleaner 
    
//     if( regExpression || (event.target.value>100) )
//     {
//         this.parentElement.nextElementSibling.style.visibility = "visible";
//     }
//     else
//     {
//         this.parentElement.nextElementSibling.style.visibility = "hidden";
//     }

// });
