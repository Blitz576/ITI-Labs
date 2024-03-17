#include <iostream>

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
        real=0;
        imagine=0;
    }
    ///parametrized constructor
    complex(int _real,int _imagine)
    {
        real=_real;
        imagine=_imagine;
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
       cout<<"object destruction"<<"\n";
       ///free the data
       real=0;
       imagine=0;
    }
};
///standalone
void Add(complex &Tmp,complex &Tmp1)
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
   complex c3;
   c3.Print();
   complex c2(2,2);
   c1.Add(c2);
   Add(c1,c2);
    return 0;
}
