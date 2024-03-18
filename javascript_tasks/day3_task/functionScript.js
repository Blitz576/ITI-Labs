//function to capitialize the first character of the word
const convertWord=function(firstchar,word){
    return firstchar.toUpperCase()+word.substring(1);

}

//first task
const capitalfirst=function(input)
{
    //split it to words 
    input=input.split(" ");
    let result="";
    
    for(let i=1;i<input.length;i++)
    {
        result+=" "+convertWord(input[i][0],input[i]);
    }
    
    result.trim();
   return result;
}


///second task
const largestWord=function(message){
    
    message=message.split(" ");
    
    let cmpString="";
    for(let i=0;i<message.length;i++)
    {
        if(message[i]<cmpString)
           cmpString=message[i];
    }
    
    //return largest word
    return cmpString;
}

///third task
const orderWord=function(message){
   
   message=message.split(""); 
   
   //sorting the letters
   let splitted= message.sort((a,b)=>{
    if(a.toLowerCase()>b.toLowerCase())
       return 1;
    else if(a.toLowerCase()<b.toLowerCase())
       return -1;
    else 
      return 0;
   });
   
   //concating letters
   message="";
   for(let i=0;i<splitted.length;i++)
   {
    message+=splitted[i];
   }

   return message;
}




//fourth task 
const getMonth=function(){
    const current_date = new Date();
    
    let month=current_date.getMonth();
    
    return month;
}

const printMonth=function(month){
    
    let monthName="";
    if(month==0)
        monthName="Jan";
    if(month==1)
        monthName="Feb";
    if(month==2)
        monthName="Mar";
    if(month==3)
        monthName="Apr";
    if(month==4)
        monthName="May";
    if(month==5)
        monthName="Jun";
    if(month==6)
        monthName="Jul";
    if(month==7)
        monthName="Aug";
    if(month==8)
        monthName="Sep";
    if(month==9)
        monthName="Oct";
    if(month==10)
        monthName="Nov";
    if(month==11)
        monthName="Dec";
    
   return monthName;
}


//console.log(getMonth());



///last task
const generateNums=function(number=5){
    //array of numbers from one to ten
    let result=[];
    
    let index=0;  //index of the numbers
    while(index<number)
    {
        let randNumber=Math.ceil(10*Math.random());
        if(!result.includes(randNumber))
            result.push(randNumber);    //New number 
    }
    
    return result;
}
