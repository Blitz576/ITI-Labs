//first team data
let FirstNumber=inputValuesPrompt("enter your first number of first team");
let secondNumber=inputValuesPrompt("enter your second number of first team");
let thirdNumber=inputValuesPrompt("enter your third number of first team");

firstTeam=calcAvg(FirstNumber,secondNumber,thirdNumber);

//second team data
FirstNumber=inputValuesPrompt("enter your first number of second team");
secondNumber=inputValuesPrompt("enter your second number of second team");
thirdNumber=inputValuesPrompt("enter your third number of second team");

secondTeam=calcAvg(FirstNumber,secondNumber,thirdNumber);


//check who's winner
let value=WhoIsWinner(firstTeam,secondTeam);

if(value==-1)
{
    console.log("The Second Team is winner");
}
else if(value==1)
{
    console.log("The First Team is winner");
}
else
{
    console.log("Arguement");
}



console.log(CheckingSum(1,2,3));
