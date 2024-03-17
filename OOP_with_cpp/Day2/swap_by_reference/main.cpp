#include <iostream>

using namespace std;

void swap_by_value(int FirstValue,int SecondValue)
{
    int TmpValue=FirstValue;
    FirstValue=SecondValue;
    SecondValue=FirstValue;
}
void swap_by_refrence(int &FirstRef,int &SecondRef)
{
    int TmpValue=FirstRef;
    FirstRef=SecondRef;
    SecondRef=TmpValue;
}


int main()
{
    int FirstNumber,SecondNumber;
    cin>>FirstNumber>>SecondNumber;
    ///swap_by_value(FirstNumber,SecondNumber)
    ///Tip : Try To uncomment the prevoius line

    swap_by_refrence(FirstNumber,SecondNumber);
    cout<<"Swapping"<<"\n";
    cout<<"first value = "<<FirstNumber<<"\n"<<"second value = "<<SecondNumber<<"\n";
    return 0;
}



/**
observation:
       when the function is called and we passing the values the function create a copy of your data
       otherwise when the parameters are from "Alias" types that modifies the original data

       (that called passing by value vs passing by reference

**/
