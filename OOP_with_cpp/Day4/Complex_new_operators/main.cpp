/**
 Author: Ahmed Nagy Abdulfattah
 Date : 12 nov 2023
 Under the Supervision of: (Eng:Mohammed Elgendy)
**/



#include <iostream>


///for better usage
using std::cin;
using std::cout;

class complex{
  private:
      int real;
      int imagine;
  public:
      ///Default constructor
      complex()
      {

          real=0;
          imagine=0;
      }
      ///Parametrized constructor
      complex(int _real,int _img)
      {

          real=_real;
          imagine=_img;
      }
      complex(int _real)
      {

          real=_real;
          imagine=0;
      }
    ///Setters
    void setReal(int _real)
    {
        real=_real;
    }
    void setImagine(int _img)
    {
       imagine=_img;
    }
    void setComplex(int _real,int _img)
    {

          real=_real;
          imagine=_img;
    }
    ///Getters
    int getReal()
    {
        return real;
    }

    int getImagine(){
       return imagine;
    }

    ///adding two objects from the type class
    complex operator+(complex const &c2)
    {
        complex res;
        res.real=real+c2.real;
        res.imagine=imagine+c2.imagine;
        return res;
    }
    ///adding an int to the real of complex
    complex operator+(int x)
    {
        complex res;
        res.real=real+x;
        res.imagine=imagine;
        return res;
    }

    ///assign the value from one object to another object
    complex operator=(complex const &c3)
    {
        this->real=c3.real;
        this->imagine=c3.imagine;
        return *this;
    }

    complex operator+=(complex &cc)
    {
        this->real=cc.real+this->real;
        this->imagine=cc.imagine+this->imagine;
        return *this;
    }

    int operator==(complex &cc)
    {
        return this->real==cc.real && this->imagine==cc.imagine;
    }

    int operator!=(complex &cc)
    {
        return !(*this==cc); ///calling the previous function
        ///using the logical distance principle
    }

    ///prefix
    complex operator++(){
       (this->real)++;
       return *this;
    }

    ///postfix
    complex operator++(int){ ///flag
        complex res=(*this);
        (this->real)++;
        return res;    ///returning before the increment
    }
    explicit operator int(){

       return this->real;

    }
    ///PrintAll
    void print(){
       cout<<"\n";
       if(imagine>0)
         cout<<real<<"+"<<imagine<<"J";
       else if(imagine<0)
       {
           cout<<real<<imagine<<"J";
       }
       else
        cout<<real;
    }
};

///standalone function
///calling the member function in the class right
complex operator+(int left,complex right){

 return right+left;

}
int main()
{
    complex c0;
    complex carr[3]={c0};

    complex c1(1,2);
    complex c2;

    c2=c1;
    c2.print();
    complex c4=c1+3;
    c1=c1+2;
    c1.print();
    c4.print();
    c1+=c4;
    c1.print();
    cout<<"\n";
    cout<<(c1==c4)<<"\n";
    cout<<(c1!=c4)<<"\n";
    (c1++);
    cout<<"After Increament"<<"\n";
    c1.print();
    cout<<"\n";
    int x=(int)c1;
    cout<<x<<"\n";
    return 0;
}
