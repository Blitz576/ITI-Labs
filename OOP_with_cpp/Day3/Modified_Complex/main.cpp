/**
 Author: Ahmed Nagy Abdulfattah
 Date : 8 nov 2023
 Under the Supervision of: (Eng: Noha shady)
**/


#include <iostream>
#define nl "\n"  ///better for usability and faster than endl


//using namespace std;
using std::cin;
using std::cout;
class complex{
 private:
    int real;
    int imagine;
 public:
     ///Default constructor
    complex(){
        cout<<"constructor is called"<<nl; ///flag
        real=0;
        imagine=0;
    }
    ///parametrized constructor
    complex(int _real,int _imagine)
    {
        cout<<"parameterized constructor is called : "<<nl;   ///flag
        real=_real;
        imagine=_imagine;
    }
    ///copy constructor
    complex(complex &cpy)
    {

        cout<<"Copy Constructor Is Called"<<nl;  ///flag
        this->real=cpy.real;
        this->imagine=cpy.imagine;

    }
    ///Setters
    void setReal(int _real)
    {
        real=_real;
    }
    void setImagine(int _imagine)
    {
        imagine=_imagine;
    }
    ///Getters
    int getReal(){
        return real;
    }
    int getImagine(){
        return imagine;
    }
    ///AddMember
     void Add(complex &c1)
     {
         complex Sum;
         Sum.setReal(this->real+c1.getReal());
         Sum.setImagine(this->imagine+c1.getImagine());
         cout<<"the sum is"<<"\n";
         cout<<Sum.getReal()<<"+"<<Sum.getImagine()<<"i"<<"\n";
     }
    ///PrintAll
    void Print(){
       cout<<this->real<<"+"<<this->imagine<<"i"<<"\n";
    }

    ///Destructor
    ~complex(){
       cout<<"object destruction "<<"\n";  ///flag
       ///free the data
       real=0;
       imagine=0;
    }
};
///By Reference
void Add(complex &Tmp,complex &Tmp1)
{
         complex Sum;
         Sum.setReal(Tmp.getReal()+Tmp1.getReal());
         Sum.setImagine(Tmp.getImagine()+Tmp1.getImagine());
         cout<<"the sum is"<<"\n";
         cout<<Sum.getReal()<<"+"<<Sum.getImagine()<<"i"<<"\n";
}
///By Value
void AddByValue(complex Tmp,complex Tmp1)
{
         complex Sum;
         Sum.setReal(Tmp.getReal()+Tmp1.getReal());
         Sum.setImagine(Tmp.getImagine()+Tmp1.getImagine());
         cout<<"the sum is"<<"\n";
         cout<<Sum.getReal()<<"+"<<Sum.getImagine()<<"i"<<"\n";
}

int main()
{
   complex c1(5,5);

   complex c2(2,2);
   c1.Add(c2);
   ///Passing to the function by refrence
   Add(c1,c2);
   ///basic calling to the copy constructor
    complex c3=c2;
    c3.Print();
    complex c4,c5;
    ///Passing to the function by value
    AddByValue(c4,c5);
    return 0;
}



/**
observations:
       output will be
        parameterized constructor is called : for (c1)
        parameterized constructor is called : for (c2)
        constructor is called for(complex Sum)
        the sum is
        7+7i
        object destruction   for(complex Sum)
        constructor is called  for(Sum in Standalone)
        the sum is
        7+7i
        object destruction   for(Sum in Standalone)
        Copy Constructor Is Called for(c3)
        2+2i
        constructor is called    for(c4)
        constructor is called    for(c5)
        Copy Constructor Is Called  for(Tmp)
        Copy Constructor Is Called  for(Tmp1)
        constructor is called  for(Sum in standalone)
        the sum is
        0+0i
        object destruction  for(Sum in standalone)
        object destruction  for(Tmp)
        object destruction  for(Tmp1)
        object destruction  for(c1)
        object destruction  for(c2)
        object destruction  for(c3)
        object destruction  for(c4)
        object destruction  for(c5)
**/
