const checkName=function(usrname){

    let regExpression = /\d+/.test(usrname); //more cleaner
    if(regExpression || usrname=="")
        return true;
    else 
       return false;
}

const checkGradse=function(grade){
        let regExpression = /\D+/.test(grade); //more cleaner
        
        if(regExpression || grade>100 ||grade == "")
            return true;
        else 
           return false;
}


const buttonState=function(studentName,studentGrade,addButton){
    if(!checkName(studentName)&&!checkGradse(studentGrade))
    {
        addButton.style.opacity="1";
       // console.log(1);
        return true;        
    }
    else
    {
     addButton.style.opacity="0.07";
     //console.log(0);   
    return false;   
    }  
}

    
const createStudentRecord=function(studentName,studentGrade,number){
    let newTr=window.document.createElement('tr');
    let newTd=window.document.createElement('td');
    let newTd1=window.document.createElement('td');
    
    newTd1.innerText=studentName;
    newTr.appendChild(newTd1);
    newTd.innerText=studentGrade;
    newTr.appendChild(newTd);

    return newTr;
}



//first task
const capitalfirst=function(input)
{
    let result="";
    //split it to words 
    input=input.split(" ");
    
    console.log(input.length);
    if(input.length==1)
       return input[0].toUpperCase()+input.substring(1);

    for(let i=0;i<input.length;i++)
    {
        result+=" "+input[i][0].toUpperCase()+input[i].substring(1);
    }
    
    console.log(2);
   return result;
}



const capitalize=function(input)
{
    let result="";
    //split it to words 
    input=input.split(" ");
    
    console.log(input.length);
    if(input.length==1)
       return null;

    for(let i=0;i<input.length;i++)
    {
        result+=" "+input[i][0].toUpperCase()+input[i].substring(1);
    }
    
    console.log(2);
   return result;
}

