function checkInput(message){
    if(message=="" ||message==" "|| message==null || message == undefined ||isNaN(Number(message)))
     return true;
    else
      return false;
}


function inputValuesPrompt(message){
        
        let number=0;
        var str="";
       // console.log(str);
        do{
         str= prompt(message);    
        }while(checkInput(str))

        number=Number(str);
        return number;
}


const calcAvg=function (FirstPlayer,secondPlayer,thirdPlayer){

      return (FirstPlayer+secondPlayer+thirdPlayer)/3;    
}

function WhoIsWinner(firstTeam,secondTeam){
    if(firstTeam>secondTeam)
        return 1;
    else if(firstTeam<secondTeam)
       return -1;
    else
      return 0; 
}




function CheckingSum(){
  let sum=0;
  
  for(let i=0;i<arguments.length;i++)
  {
    if(!checkInput(String(arguments[i])))
        sum+=arguments[i];
  }
  
  return sum;
}